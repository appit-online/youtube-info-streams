import * as url from 'url';
import got from 'got';
import * as querystring from 'querystring';

const jsVarStr = '[a-zA-Z_\\$][a-zA-Z_0-9]*';
const jsSingleQuoteStr = `'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'`;
const jsDoubleQuoteStr = `"[^"\\\\]*(:?\\\\[\\s\\S][^"\\\\]*)*"`;
const jsQuoteStr = `(?:${jsSingleQuoteStr}|${jsDoubleQuoteStr})`;
const jsKeyStr = `(?:${jsVarStr}|${jsQuoteStr})`;
const jsPropStr = `(?:\\.${jsVarStr}|\\[${jsQuoteStr}\\])`;
const jsEmptyStr = `(?:''|"")`;
const reverseStr = ':function\\(a\\)\\{' +
  '(?:return )?a\\.reverse\\(\\)' +
  '\\}';
const sliceStr = ':function\\(a,b\\)\\{' +
  'return a\\.slice\\(b\\)' +
  '\\}';
const spliceStr = ':function\\(a,b\\)\\{' +
  'a\\.splice\\(0,b\\)' +
  '\\}';
const swapStr = ':function\\(a,b\\)\\{' +
  'var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?' +
  '\\}';
const actionsObjRegexp = new RegExp(
  `var (${jsVarStr})=\\{((?:(?:` +
  jsKeyStr + reverseStr + '|' +
  jsKeyStr + sliceStr   + '|' +
  jsKeyStr + spliceStr  + '|' +
  jsKeyStr + swapStr +
  '),?\\r?\\n?)+)\\};'
);
const actionsFuncRegexp = new RegExp(`function(?: ${jsVarStr})?\\(a\\)\\{` +
  `a=a\\.split\\(${jsEmptyStr}\\);\\s*` +
  `((?:(?:a=)?${jsVarStr}` +
  jsPropStr +
  '\\(a,\\d+\\);)+)' +
  `return a\\.join\\(${jsEmptyStr}\\)` +
  '\\}'
);
const reverseRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${reverseStr}`, 'm');
const sliceRegexp   = new RegExp(`(?:^|,)(${jsKeyStr})${sliceStr}`, 'm');
const spliceRegexp  = new RegExp(`(?:^|,)(${jsKeyStr})${spliceStr}`, 'm');
const swapRegexp    = new RegExp(`(?:^|,)(${jsKeyStr})${swapStr}`, 'm');


export class CiphService {
  cache = new Map();

  async getTokens(html5playerfile: any) {
    const cachedTokens = this.cache.get(html5playerfile);

    if (cachedTokens) {
      return cachedTokens;
    } else {
      const response: any = await got.get(html5playerfile, {});

      const tokens = this.extractActions(response.body);
      if (!tokens || !tokens.length) {
        throw new Error('Could not extract signature deciphering actions');
      }

      this.cache.set(html5playerfile, tokens);
      return tokens;
    }
  }

  extractActions(body: any) {
    const objResult = actionsObjRegexp.exec(body);
    const funcResult = actionsFuncRegexp.exec(body);
    if (!objResult || !funcResult) { return null; }

    const obj      = objResult[1].replace(/\$/g, '\\$');
    const objBody  = objResult[2].replace(/\$/g, '\\$');
    const funcBody = funcResult[1].replace(/\$/g, '\\$');

    let result = reverseRegexp.exec(objBody);
    const reverseKey = result && result[1]
      .replace(/\$/g, '\\$')
      .replace(/\$|^'|^"|'$|"$/g, '');
    result = sliceRegexp.exec(objBody);
    const sliceKey = result && result[1]
      .replace(/\$/g, '\\$')
      .replace(/\$|^'|^"|'$|"$/g, '');
    result = spliceRegexp.exec(objBody);
    const spliceKey = result && result[1]
      .replace(/\$/g, '\\$')
      .replace(/\$|^'|^"|'$|"$/g, '');
    result = swapRegexp.exec(objBody);
    const swapKey = result && result[1]
      .replace(/\$/g, '\\$')
      .replace(/\$|^'|^"|'$|"$/g, '');

    const keys = `(${[reverseKey, sliceKey, spliceKey, swapKey].join('|')})`;
    const myreg = '(?:a=)?' + obj +
      `(?:\\.${keys}|\\['${keys}'\\]|\\["${keys}"\\])` +
      '\\(a,(\\d+)\\)';
    const tokenizeRegexp = new RegExp(myreg, 'g');
    const tokens = [];
    // tslint:disable-next-line:no-conditional-assignment
    while ((result = tokenizeRegexp.exec(funcBody)) !== null) {
      const key = result[1] || result[2] || result[3];
      switch (key) {
        case swapKey:
          tokens.push('w' + result[4]);
          break;
        case reverseKey:
          tokens.push('r');
          break;
        case sliceKey:
          tokens.push('s' + result[4]);
          break;
        case spliceKey:
          tokens.push('p' + result[4]);
          break;
      }
    }
    return tokens;
  }



  decipherFormats(formats: any, tokens: any, debug: any) {
    formats.forEach((format: any) => {
      const cipher = format.signatureCipher || format.cipher;
      if (cipher) {
        Object.assign(format, querystring.parse(cipher));
        delete format.signatureCipher;
        delete format.cipher;
      }
      const sig = tokens && format.s ? this.decipher(tokens, format.s) : null;
      this.setDownloadURL(format, sig, debug);
    });
  }

  decipher = (tokens: any, sig: any) => {
    sig = sig.split('');
    for (let i = 0, len = tokens.length; i < len; i++) {
      // tslint:disable-next-line:prefer-const one-variable-per-declaration
      let token = tokens[i], pos;
      switch (token[0]) {
        case 'r':
          sig = sig.reverse();
          break;
        case 'w':
          // tslint:disable-next-line:no-bitwise
          pos = ~~token.slice(1);
          const first = sig[0];
          sig[0] = sig[pos % sig.length];
          sig[pos] = first;
          break;
        case 's':
          // tslint:disable-next-line:no-bitwise
          pos = ~~token.slice(1);
          sig = sig.slice(pos);
          break;
        case 'p':
          // tslint:disable-next-line:no-bitwise
          pos = ~~token.slice(1);
          sig.splice(0, pos);
          break;
      }
    }
    return sig.join('');
  }

  setDownloadURL(format: any, sig: any, debug: any) {
    let decodedUrl;
    if (format.url) {
      decodedUrl = format.url;
    } else {
      if (debug) {
        // tslint:disable-next-line:no-console
        console.warn('Download url not found for itag ' + format.itag);
      }
      return;
    }

    try {
      decodedUrl = decodeURIComponent(decodedUrl);
    } catch (err: any) {
      if (debug) {
        // tslint:disable-next-line:no-console
        console.warn('Could not decode url: ' + err.message);
      }
      return;
    }

    // Make some adjustments to the final url.
    const parsedUrl = url.parse(decodedUrl, true);

    // Deleting the `search` part is necessary otherwise changes to
    // `query` won't reflect when running `url.format()`
    // @ts-ignore
    delete parsedUrl.search;

    const query = parsedUrl.query;

    // This is needed for a speedier download.
    // See https://github.com/fent/node-ytdl-core/issues/127
    query.ratebypass = 'yes';
    if (sig) {
      // When YouTube provides a `sp` parameter the signature `sig` must go
      // into the parameter it specifies.
      // See https://github.com/fent/node-ytdl-core/issues/417
      if (format.sp) {
        query[format.sp] = sig;
      } else {
        query.signature = sig;
      }
    }

    format.url = url.format(parsedUrl);
  }
}
