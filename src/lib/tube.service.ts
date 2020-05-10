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

  async gotConfig(id: any, additional: any, config: any, fromEmbed: any) {
    if (!config) {
      throw new Error('Could not find player config');
    }
    try {
      config = JSON.parse(config + (fromEmbed ? '}' : ''));
    } catch (err) {
      throw new Error('Error parsing config: ' + err.message);
    }
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
        sts: config.sts,
      },
    });

    const respo = await got.get(url, {});
    const info: any = querystring.parse(respo.body);

    const playerResponse = config.args.player_response || info.player_response;

    if (info.status === 'fail') {
      throw new Error(`Code ${info.errorcode}: ${this.stripHTML(info.reason)}`);
    } else {
      try {
        info.player_response = JSON.parse(playerResponse);
      } catch (err) {
        throw new Error('Error parsing `player_response`: ' + err.message);
      }
    }

    const playability = info.player_response.playabilityStatus;
    if (playability && playability.status === 'UNPLAYABLE') {
      throw new Error(playability.reason);
    }

    info.formats = this.parseFormats(info);
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

    info.age_restricted = fromEmbed;
    info.html5player = config.assets.js;
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
    let pos = indexOf(haystack, left);
    if (pos === -1) { return ''; }
    haystack = haystack.slice(pos + left.length);
    pos = indexOf(haystack, right);
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
}
