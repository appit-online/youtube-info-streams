# [youtube-info-streams: Node.js](https://github.com/appit-online/youtube-info-streams)

Fetch meta information about YouTube videos including stream urls

**Table of contents:**


* [Quickstart](#quickstart)

  * [Installing the library](#installing-the-library)
  * [Using the library](#using-the-library)
* [License](#license)

## Quickstart

### Installing the library

```bash
npm install youtube-info-streams --save
```


### Using the library

```javascript
import * as yt from 'youtube-info-streams';

/**
 * Given a search query, searching on youtube
 * @param {string} search value (videoId).
 */
const video = await yt.info('y5kIrbG2gRc');
console.log('Info:');
console.log(video);

{
  page: 'watch',
          player_response: {
  responseContext: {
    serviceTrackingParams: [Array],
            maxAgeSeconds: 0,
            mainAppWebResponseContext: [Object],
            webResponseContextExtensionData: [Object]
  },
  playabilityStatus: {
    status: 'OK',
            playableInEmbed: true,
            miniplayer: [Object],
            contextParams: 'Q0FFU0FnZ0M='
  },
  streamingData: {
    expiresInSeconds: '21540',
            formats: [Array],
            adaptiveFormats: [Array],
            serverAbrStreamingUrl: 'https://rr1---sn-h0jeenek.googlevideo.com/videoplayback?expire=1729490261&ei=9ZgVZ8qtEImFi9oP066m2Ac&ip=2a02%3A8070%3A6482%3Af180%3Ac93f%3A7f4f%3A84f8%3A4b40&id=o-AOqR2qtkmxUTcJWAFFTwl1kIvIHbn76NCBvOYIO2kLPW&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1729468661%2C&mh=gB&mm=31%2C29&mn=sn-h0jeenek%2Csn-h0jeln7l&ms=au%2Crdu&mv=m&mvi=1&pl=47&rms=au%2Cau&initcwndbps=1968750&spc=54MbxYppOIX_U-mSm132FCrFmosp6hXRtCeL7J96LqHzxkqDdVU85leJ5XEm&svpuc=1&ns=PKoH20bBDpckeuJj0EFZ7PMQ&sabr=1&rqh=1&mt=1729468398&fvip=2&keepalive=yes&fexp=51312688&c=WEB&n=4iiOPEWTu0_49bu&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AJfQdSswRQIgLxPm4-irO2GoUDwsZkorQnkEMtabkhwnYl51h0FV9U8CIQD6RW5lM1mRIX43dGBQjYIU1_aucTnfupOmXEjjwRO4nQ%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=ACJ0pHgwRQIhAIN_b0mtp1yPQ3yRtxH-UIoyGVO32I1CxZmZO0NtzHZGAiBuIxUwnk2WdpaRnXawavXTd9inD_UVHuFKJoLZDf2_Vw%3D%3D'
  },
  playbackTracking: {
    videostatsPlaybackUrl: [Object],
            videostatsDelayplayUrl: [Object],
            videostatsWatchtimeUrl: [Object],
            ptrackingUrl: [Object],
            qoeUrl: [Object],
            atrUrl: [Object],
            videostatsScheduledFlushWalltimeSeconds: [Array],
            videostatsDefaultFlushIntervalSeconds: 40
  },
  captions: { playerCaptionsTracklistRenderer: [Object] },
  videoDetails: {
    videoId: 'y5kIrbG2gRc',
            title: 'How to Download Free Music On Your iPhone (OFFLINE) 2020',
            lengthSeconds: '120',
            keywords: [Array],
            channelId: 'UCFzpTuxdolZ_EaZr-emNgbg',
            isOwnerViewing: false,
            shortDescription: 'This video will show you how to download free music and videos on your iphone easy and fast',
            isCrawlable: true,
            thumbnail: [Object],
            allowRatings: true,
            viewCount: '209',
            author: 'Max Maustermann',
            isPrivate: false,
            isUnpluggedCorpus: false,
            isLiveContent: false
  },
  playerConfig: {
    audioConfig: [Object],
            streamSelectionConfig: [Object],
            mediaCommonConfig: [Object],
            webPlayerConfig: [Object]
  },
  storyboards: { playerStoryboardSpecRenderer: [Object] },
  microformat: { playerMicroformatRenderer: [Object] },
  cards: { cardCollectionRenderer: [Object] },
  trackingParams: 'CAAQu2kiEwiK_NHplJ6JAxWJwkIFHVOXCXs=',
          attestation: { playerAttestationRenderer: [Object] },
  adBreakHeartbeatParams: 'Q0FBJTNE',
          frameworkUpdates: { entityBatchUpdate: [Object] }
},
  response: {
    responseContext: {
      serviceTrackingParams: [Array],
              mainAppWebResponseContext: [Object],
              webResponseContextExtensionData: [Object]
    },
    contents: { twoColumnWatchNextResults: [Object] },
    currentVideoEndpoint: {
      clickTrackingParams: 'CAAQg2ciEwirgtLplJ6JAxXY0EIFHcE6EVM=',
              commandMetadata: [Object],
              watchEndpoint: [Object]
    },
    trackingParams: 'CAAQg2ciEwirgtLplJ6JAxXY0EIFHcE6EVM=',
            playerOverlays: { playerOverlayRenderer: [Object] },
    onResponseReceivedEndpoints: [ [Object] ],
            engagementPanels: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
            topbar: { desktopTopbarRenderer: [Object] },
    pageVisualEffects: [ [Object] ],
            frameworkUpdates: { entityBatchUpdate: [Object] }
  },
  html5player: '/s/player/e627e516/player_ias.vflset/de_DE/base.js',
          formats: [
  {
    itag: 18,
    url: 'https://rr1---sn-h0jeenek.googlevideo.com/videoplayback?expire=1729490261&ei=9ZgVZ6zSKsfi6dsPva76gAs&ip=2a02%3A8070%3A6482%3Af180%3Ac93f%3A7f4f%3A84f8%3A4b40&id=o-ABQMB8SHouvmKRpQxtd6toVw0PoNn5_AGpfDwkrX1Voc&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1729468661%2C&mh=gB&mm=31%2C29&mn=sn-h0jeenek%2Csn-h0jeln7l&ms=au%2Crdu&mv=m&mvi=1&pl=47&rms=au%2Cau&initcwndbps=2110000&spc=54MbxWKZLZWK38i9I2t-r1OJQzdzRK7z5CKyV_UbMko69OUWUdjw_fyiuNPw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=120.209&lmt=1634733971863121&mt=1729468143&fvip=2&fexp=51312688&c=ANDROID&txp=6218224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgLnBmUJEJRo7K6oLJe4Vjbr3mmBrvfZLEeQiZ_X5fzvUCIQCvi8SDEoOWgNn4WfenrDUoWs__wrF2XwdLvAw6yK2dAg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=ACJ0pHgwRAIgdiqfZU92N8YjHvZdiSoO8fTqflJVqSvGxEF3DHlMXD4CIF24iLN1QTE6T8h7D0lb9eYhwU_akUaV_beGDC9y11qh',
    mimeType: 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
    bitrate: 195086,
    width: 166,
    height: 360,
    lastModified: '1634733971863121',
    quality: 'small',
    fps: 30,
    qualityLabel: '240p',
    projectionType: 'RECTANGULAR',
    audioQuality: 'AUDIO_QUALITY_LOW',
    approxDurationMs: '120209',
    audioSampleRate: '44100',
    audioChannels: 2
  },
        ...
]
}

```


## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

## License

Apache Version 2.0

See [LICENSE](https://github.com/appit-online/youtube-info-streams/blob/master/LICENSE)
