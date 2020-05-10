import got from 'got';
import * as urllib from 'url';
import {YTubeService} from './tube.service';
import {CiphService} from './cip.service';


const mergeFormats = (info: any, formatsMap: any) => {
  info.formats.forEach((f: any) => {
    formatsMap[f.itag] = f;
  });
  info.formats = Object.values(formatsMap);
};

export async function searchVideo(youtubeId: string) {
  const tubeService = new YTubeService();
  const ciphService = new CiphService();

  const params = 'hl=en';

  const ytApi = tubeService.VIDEO_URL + youtubeId + '&' + params +
    '&bpctr=' + Math.ceil(Date.now() / 1000);

  const response = await got.get(ytApi);
  const body = response.body;

  const unavailableMsg = tubeService.between(body, '<div id="player-unavailable"', '>');
  if (unavailableMsg &&
    !/\bhid\b/.test(tubeService.between(unavailableMsg, 'class="', '"'))) {
    // Ignore error about age restriction.
    if (!body.includes('<div id="watch7-player-age-gate-content"')) {
      throw new Error('Video is not supported');
    }
  }

  const jsonStr = tubeService.between(body, 'ytplayer.config = ', '</script>');
  let config;
  if (jsonStr) {
    config = jsonStr.slice(0, jsonStr.lastIndexOf(';ytplayer.load'));
    const info: any = await tubeService.gotConfig(youtubeId, null, config, false);

    if (info.formats.length) {
      const html5playerfile = urllib.resolve(tubeService.VIDEO_URL, info.html5player);

      const tokens = await ciphService.getTokens(html5playerfile);
      ciphService.decipherFormats(info.formats, tokens, false);
      const funcs: any[] = [];

      tubeService.parallel(funcs, (err: any, results: any) => {
        if (results[0]) { mergeFormats(info, results[0]); }
        if (results[1]) { mergeFormats(info, results[1]); }

        info.full = true;
      });
      return info;
    } else {
      return null;
    }
  } else {
    // If the video page doesn't work, maybe because it has mature content.
    // and requires an account logged in to view, try the embed page.
    const url = tubeService.EMBED_URL + youtubeId + '?hl=en';
    const responseEmbeded = await got.get(url, {});

    config = tubeService.between(responseEmbeded.body, 't.setConfig({\'PLAYER_CONFIG\': ', /\}(,'|\}\);)/);
    const info = await tubeService.gotConfig(youtubeId, null, config, true);
    if (info.formats.length) {
      return info;
    } else {
      return null;
    }
  }
}
