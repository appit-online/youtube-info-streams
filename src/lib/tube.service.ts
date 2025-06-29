import got from 'got';

const jsonClosingChars = /^[)\]}'\s]+/;

// tslint:disable-next-line:one-variable-per-declaration
const IOS_CLIENT_VERSION = '20.22.1',
    IOS_DEVICE_MODEL = 'iPhone17,2',
    IOS_USER_AGENT_VERSION = '18_5',
    IOS_OS_VERSION = '18.5.0.22F76';

// tslint:disable-next-line:one-variable-per-declaration
const ANDROID_CLIENT_VERSION = '20.26.35',
    ANDROID_OS_VERSION = '16',
    ANDROID_SDK_VERSION = '36';

/**
 * Escape sequences for cutAfterJS
 * @param {string} start the character string the escape sequence
 * @param {string} end the character string to stop the escape seequence
 * @param {undefined|Regex} startPrefix a regex to check against the preceding 10 characters
 */
const ESCAPING_SEQUENZES = [
  // Strings
  { start: '"', end: '"' },
  { start: "'", end: "'" },
  { start: '`', end: '`' },
  // RegeEx
  { start: '/', end: '/', startPrefix: /(^|[[{:;,/])\s?$/ },
];

export class YTubeService {
  BASE_URL = 'https://www.youtube.com/watch?v=';


  findJSON(source: any, varName: any, body: any, left: any, right: any, prependJSON: any, tubeService: any) {
    const jsonStr = tubeService.between(body, left, right);
    if (!jsonStr) {
      throw Error(`Could not find ${varName} in ${source}`);
    }
    return tubeService.parseJSON(source, varName, tubeService.cutAfterJS(`${prependJSON}${jsonStr}`));
  };

  cutAfterJS(mixedJson: any){
    // Define the general open and closing tag
    // tslint:disable-next-line:one-variable-per-declaration
    let open, close;
    if (mixedJson[0] === '[') {
      open = '[';
      close = ']';
    } else if (mixedJson[0] === '{') {
      open = '{';
      close = '}';
    }

    if (!open) {
      throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${mixedJson[0]}`);
    }

    // States if the loop is currently inside an escaped js object
    let isEscapedObject = null;

    // States if the current character is treated as escaped or not
    let isEscaped = false;

    // Current open brackets to be closed
    let counter = 0;

    let i;
    // Go through all characters from the start
    for (i = 0; i < mixedJson.length; i++) {
      // End of current escaped object
      if (!isEscaped && isEscapedObject !== null && mixedJson[i] === isEscapedObject.end) {
        isEscapedObject = null;
        continue;
        // Might be the start of a new escaped object
      } else if (!isEscaped && isEscapedObject === null) {
        for (const escaped of ESCAPING_SEQUENZES) {
          if (mixedJson[i] !== escaped.start) continue;
          // Test startPrefix against last 10 characters
          if (!escaped.startPrefix || mixedJson.substring(i - 10, i).match(escaped.startPrefix)) {
            isEscapedObject = escaped;
            break;
          }
        }
        // Continue if we found a new escaped object
        if (isEscapedObject !== null) {
          continue;
        }
      }

      // Toggle the isEscaped boolean for every backslash
      // Reset for every regular character
      isEscaped = mixedJson[i] === '\\' && !isEscaped;

      if (isEscapedObject !== null) continue;

      if (mixedJson[i] === open) {
        counter++;
      } else if (mixedJson[i] === close) {
        counter--;
      }

      // All brackets have been closed, thus end of JSON is reached
      if (counter === 0) {
        // Return the cut JSON
        return mixedJson.substring(0, i + 1);
      }
    }

    // We ran through the whole string and ended up with an unclosed bracket
    throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
  };


  findPlayerResponse (source: any, info: any, tubeService: any) {
    // tslint:disable-next-line:variable-name
    const player_response = info && (
        (info.args && info.args.player_response) ||
        info.player_response || info.playerResponse || info.embedded_player_response);
    return tubeService.parseJSON(source, 'player_response', player_response);
  };

  getHTML5player(body: any) {
    const html5playerRes =
        /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/
            .exec(body);
    return html5playerRes ? html5playerRes[1] || html5playerRes[2] : null;
  };

  parseJSON (source: any, varName: any, json: any) {
    if (!json || typeof json === 'object') {
      return json;
    } else {
      try {
        json = json.replace(jsonClosingChars, '');
        return JSON.parse(json);
      } catch (err) {
        throw Error(`Error parsing ${varName} in ${source}: ${err}`);
      }
    }
  };

  async gotConfig(id: any, additional: any, info: any, tubeService: any) {
    const funcs = [];
    const [iosPlayerResponse, androidPlayerResponse] = await Promise.all([
      tubeService.fetchIosJsonPlayer(id, tubeService),
      tubeService.fetchAndroidJsonPlayer(id, tubeService),
    ]);

    info.formats = this.parseFormats(androidPlayerResponse).concat(this.parseFormats(iosPlayerResponse));

    if (info.formats.length) {
      funcs.push(info.formats);
    }

    const results = await Promise.all(funcs);
    info.formats = Object.values(Object.assign({}, ...results));

    return info;
  }

  generateClientPlaybackNonce(length: any){
    const CPN_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    return Array.from({ length }, () => CPN_CHARS[Math.floor(Math.random() * CPN_CHARS.length)]).join('');
  };

  async fetchIosJsonPlayer(videoId :any, tubeService:any) {
    const payload = {
      videoId,
      cpn: tubeService.generateClientPlaybackNonce(16),
      contentCheckOk: true,
      racyCheckOk: true,
      context: {
        client: {
          clientName: 'IOS',
          clientVersion: IOS_CLIENT_VERSION,
          deviceMake: 'Apple',
          deviceModel: IOS_DEVICE_MODEL,
          platform: 'MOBILE',
          osName: 'iOS',
          osVersion: IOS_OS_VERSION,
          hl: 'en',
          gl: 'US',
          utcOffsetMinutes: -240,
        },
        request: {
          internalExperimentFlags: [],
          useSsl: true,
        },
        user: {
          lockedSafetyMode: false,
        },
      },
    };

    // request yt page
    const response = await got.post(`https://youtubei.googleapis.com/youtubei/v1/player?id=${videoId}&prettyPrint=false&t=`+tubeService.generateClientPlaybackNonce(12), {headers: {
        'Content-Type': 'application/json',
        'User-Agent': `com.google.ios.youtube/${IOS_CLIENT_VERSION}(${
            IOS_DEVICE_MODEL
        }; U; CPU iOS ${IOS_USER_AGENT_VERSION} like Mac OS X; en_US)`,
        'X-Goog-Api-Format-Version': '2',
      }, body: JSON.stringify(payload)});
    const body = response.body;

    const playErr = tubeService.playError(body);
    if (playErr) throw playErr;

    try {
      return JSON.parse(body);
    }catch (e) {
      return {};
    }
  };

  async fetchAndroidJsonPlayer(videoId: any, tubeService: any){
    const payload = {
      videoId,
      cpn: tubeService.generateClientPlaybackNonce(16),
      contentCheckOk: true,
      racyCheckOk: true,
      context: {
        client: {
          clientName: 'ANDROID',
          clientVersion: ANDROID_CLIENT_VERSION,
          platform: 'MOBILE',
          osName: 'Android',
          osVersion: ANDROID_OS_VERSION,
          androidSdkVersion: ANDROID_SDK_VERSION,
          hl: 'en',
          gl: 'US',
          utcOffsetMinutes: -240,
        },
        request: {
          internalExperimentFlags: [],
          useSsl: true,
        },
        user: {
          lockedSafetyMode: false,
        },
      },
    };

    // request yt page
    const response = await got.post(`https://youtubei.googleapis.com/youtubei/v1/player?id=${videoId}&prettyPrint=false&t=`+tubeService.generateClientPlaybackNonce(12), {headers: {
        'Content-Type': 'application/json',
        'User-Agent': `com.google.android.youtube/${ANDROID_CLIENT_VERSION
        } (Linux; U; Android ${ANDROID_OS_VERSION}; en_US) gzip`,
        'X-Goog-Api-Format-Version': '2',
      }, body: JSON.stringify(payload)});
    const body = response.body;

    const playErr = tubeService.playError(body);
    if (playErr) throw playErr;

    try {
      return JSON.parse(body);
    }catch (e) {
      return {};
    }
  };

  parseFormats(info: any) {
    let formats: any[] = [];
    if (info && info.streamingData) {
      if (info.streamingData.formats) {
        formats = formats.concat(info.streamingData.formats);
      }
      if (info.streamingData.adaptiveFormats) {
        formats = formats.concat(info.streamingData.adaptiveFormats);
      }
    }
    return formats;
  }


  /*
* Extract string inbetween another.
*/

  tryParseBetween = (body: any, left: any, right: any, prepend = '', append = '') => {
    try {
      const data = this.between(body, left, right);
      if (!data) return null;
      return JSON.parse(`${prepend}${data}${append}`);
    } catch (e) {
      return null;
    }
  };

  between(haystack: any, left: any, right: any) {
    let pos;
    if (left instanceof RegExp) {
      const match = haystack.match(left);
      if (!match) { return ''; }
      pos = match.index + match[0].length;
    } else {
      pos = haystack.indexOf(left);
      if (pos === -1) { return ''; }
      pos += left.length;
    }
    haystack = haystack.slice(pos);
    pos = haystack.indexOf(right);
    if (pos === -1) { return ''; }
    haystack = haystack.slice(0, pos);
    return haystack;
  }


  parallel(funcs: any, callback: any) {
    let funcsDone = 0;
    let errGiven = false;
    const results: any[] = [];
    const len = funcs.length;

    const checkDone = (index: any, err: any, result: any) => {
      if (errGiven) { return; }
      if (err) {
        errGiven = true;
        callback(err);
        return;
      }
      results[index] = result;
      if (++funcsDone === len) {
        callback(null, results);
      }
    };

    if (len > 0) {
      funcs.forEach((f: any, i: any) => { f(checkDone.bind(null, i)); });
    } else {
      callback(null, results);
    }
  }
  cutAfterJSON(mixedJson: any){
    let open;
    let close;
    if (mixedJson[0] === '[') {
      open = '[';
      close = ']';
    } else if (mixedJson[0] === '{') {
      open = '{';
      close = '}';
    }

    if (!open) {
      throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${mixedJson[0]}`);
    }

    // States if the loop is currently in a string
    let isString = false;

    // Current open brackets to be closed
    let counter = 0;

    let i;
    for (i = 0; i < mixedJson.length; i++) {
      // Toggle the isString boolean when leaving/entering string
      if (mixedJson[i] === '"' && mixedJson[i - 1] !== '\\') {
        isString = !isString;
        continue;
      }
      if (isString) continue;

      if (mixedJson[i] === open) {
        counter++;
      } else if (mixedJson[i] === close) {
        counter--;
      }

      // All brackets have been closed, thus end of JSON is reached
      if (counter === 0) {
        // Return the cut JSON
        return mixedJson.substr(0, i + 1);
      }
    }

    // We ran through the whole string and ended up with an unclosed bracket
    throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
  };

  playError(playerResponse: any) {
    const playability = playerResponse && playerResponse.playabilityStatus;
    if (!playability) return null;
    if (['ERROR', 'LOGIN_REQUIRED'].includes(playability.status)) {
      return new Error(playability.reason || (playability.messages && playability.messages[0]));
    }
    if (playability.status === 'LIVE_STREAM_OFFLINE') {
      return new Error(playability.reason || 'The live stream is offline.');
    }
    if (playability.status === 'UNPLAYABLE') {
      return new Error(playability.reason || 'This video is unavailable.');
    }
    return null;
  };
}
