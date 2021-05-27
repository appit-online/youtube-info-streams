import got from 'got';
import * as urllib from 'url';
import * as querystring from 'querystring';
/*
 * String#indexOf() that supports regex too.
 */
const indexOf = (haystack: any, needle: any) => {
  return needle instanceof RegExp ?
    haystack.search(needle) : haystack.indexOf(needle);
};

export class YTubeService {
  VIDEO_URL = 'https://www.youtube.com/watch?v=';
  EMBED_URL = 'https://www.youtube.com/embed/';
  VIDEO_EURL = 'https://youtube.googleapis.com/v/';
  INFO_HOST = 'www.youtube.com';
  INFO_PATH = '/get_video_info';

  async gotConfig(id: any, additional: any, info: any, body: any) {
    // tslint:disable-next-line:variable-name
    let player_response =
      info.player && info.player.args && info.player.args.player_response;

    if (!player_response) {
      const url = urllib.format({
        protocol: 'https',
        host: this.INFO_HOST,
        pathname: this.INFO_PATH,
        query: {
          video_id: id,
          eurl: this.VIDEO_EURL + id,
          ps: 'default',
          gl: 'US',
          hl: 'en',
          html5: 1,
        },
      });

      const respo = await got.get(url, {headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36'
        }});

      const moreinfo: any = querystring.parse(respo.body);
      player_response = moreinfo.player_response || info.playerResponse || info.embedded_player_response;
    }
    if (typeof player_response === 'object') {
      info.player_response = player_response;
    } else {
      try {
        info.player_response = JSON.parse(player_response);
      } catch (err) {
        throw Error(`Error parsing \`player_response\`: ${err.message}`);
      }
    }

    info.formats = this.parseFormats(info);

    info.videoDetails = Object.assign({},
      info.player_response.microformat.playerMicroformatRenderer,
      info.player_response.videoDetails, additional);
    info.html5player = info.player && info.player.assets && info.player.assets.js;

    // Add additional properties to info.
    Object.assign(info, additional, {
      video_id: id,

      // Give the standard link to the video.
      video_url: this.VIDEO_URL + id,

      // Copy over a few props from `player_response.videoDetails`
      // for backwards compatibility.
      title: info.player_response.videoDetails && info.player_response.videoDetails.title,
      length_seconds: info.player_response.videoDetails && info.player_response.videoDetails.lengthSeconds,
    });

    return info;
  }

  stripHTML(html: any) {
    return html
      .replace(/[\n\r]/g, ' ')
      .replace(/\s*<\s*br\s*\/?\s*>\s*/gi, '\n')
      .replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, '\n')
      .replace(/<a\s+(?:[^>]*?\s+)?href=(?:["'])\/redirect.*?q=(.*?)(?:[&'"]).*?<\/a>/gi,
        (_: any, p1: any) => decodeURIComponent(p1))
      .replace(/<.*?>/gi, '')
      .trim();
  }

  parseFormats(info: any) {
    let formats: any[] = [];
    if (info.player_response.streamingData) {
      if (info.player_response.streamingData.formats) {
        formats = formats.concat(info.player_response.streamingData.formats);
      }
      if (info.player_response.streamingData.adaptiveFormats) {
        formats = formats.concat(info.player_response.streamingData.adaptiveFormats);
      }
    }
    return formats;
  }


  /*
* Extract string inbetween another.
*/
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

  playError(info: any, status: any) {
    const playability = info.playerResponse.playabilityStatus;
    if (playability && playability.status === status) {
      return Error(playability.reason || (playability.messages && playability.messages[0]));
    }
    return null;
  };
}
