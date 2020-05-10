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
   "csn":"_se3XpuIOYaCx_AP2PutuAE",
   "root_ve_type":"27240",
   "cr":"US",
   "hl":"en_US",
   "vss_host":"s.youtube.com",
   "csi_page_type":"embed",
   "innertube_context_client_version":"1.20200508.00.01",
   "cver":"1.20200508.00.01",
   "gapi_hint_params":"m;/_/scs/abc-static/_/js/k=gapi.gapi.en.jw7XZHvcak8.O/d=1/ct=zgms/rs=AHpOoo-L1iz4xVj0PCdm2On38RCj6aYemA/m=__features__",
   "enablecsi":"1",
   "status":"ok",
   "fexp":"23744176,23804281,23837040,23837993,23839597,23856950,23857949,23859802,23860859,23868335,23876169,23876458,23877191,23877889,23880389,23880619,23882034,23882513,23882685,23884386,23885572,23886825,23890959,23892587,23894738,23895671,23896332,23896332,23896510,23896983,23898053,23899736,23900839,23901016,23901648,23903645,9449243,9471235",
   "host_language":"en",
   "player_response":{
      "responseContext":{
         "serviceTrackingParams":[
            {
               "service":"GFEEDBACK",
               "params":[
                  {
                     "key":"is_viewed_live",
                     "value":"False"
                  },
                  {
                     "key":"logged_in",
                     "value":"0"
                  },
                  {
                     "key":"e",
                     "value":"23884386,23858564,9473370,23853114,23881484,23860859,23894708,23882555,23872595,23898470,23898729,23885618,23859025,23902734,9473384,23886388,23842233,23895679,23879419,23887008,23874940,23876342,23890891,23875487,23882130,23811985,23900410,23885639,23865223,23895457,23885107,23897347,23884697,23888712,23898598,23744176,23890680,23896088,23897670,23894440,23842638,23832002,23881126,23900496,23836115,23876020,23894038,23882111,23862065,23890960,23903171,23834813,9473404,23866207,23872921,23834232,23797973,23895275,23902429,23862582,23865717,23895498,23895175,23833239,23895139,23901969,23841299,23816681,23869527,23862294,23900790,23877889,23882034,23837993,45170005,23876129,23783094,23888528,1714244,23890721,23884996,23857949,23900839,23874051,23804281,23896999,23861905,23839597,23891426,23863739,23865206,23882126,23886196,23869558,23897617,23883974,23893037,23768776,23896704,23893073,23877769,23879387,23884593,23897257,23888133,23871729,23894648,23899299,23894533,23894382,23876627,23890928,23890396,23900169,23841635,23790586,23880389,23885616,23860782,23880619,23755966,23888210,24650112,23882503,23789385,23709532,23854352,23861263,23883172,23885293,23861666,23892589,23902556,23873111,23874981,23882437,23893661,23857970,23896443,23862025,23897263,23885572,23898054,23870854,23794339,23778038,23880323,23892324,23723207,23891461,23880632"
                  }
               ]
            },...
         ]
      },
      "playabilityStatus":{
         "status":"OK",
         "playableInEmbed":true,
         "contextParams":"Q0FFU0FnZ0M="
      },
      "streamingData":{
         "expiresInSeconds":"21540",
         "formats":[
            {
               "itag":22,
               "url":"https://r2---sn-4g5ednse.googlevideo.com/videoplayback?expire=1589124190&ei=_se3XsWoFPuB6dsPyt-HgAE&ip=185.68.78.136&id=o-AKV_qdEhqEcruWvGW6tIwDFM4yghTrrH7JgFDJ3zf_Rc&itag=22&source=youtube&requiressl=yes&mh=gB&mm=31%2C29&mn=sn-4g5ednse%2Csn-4g5e6nzl&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=1263750&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=120.209&lmt=1579530854141611&mt=1589102501&fvip=2&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AJpPlLswRAIgUvTuTM3YkmahHuxqWT4M4MgOqNhFJQ95ciPeuEFFmkgCIEYVQUl37q0cUfoGkiAv8byITV_PDIBt7km80s5jWTzN&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIhAKM2M5UA36KaSeNHX_IMYcn0L4cye6j_RAWvF5GY6Th-AiBpue0bWaYLqgVvLy6MEUMSOamrf7PqpzdQKvwlCN6lEQ%3D%3D",
               "mimeType":"video/mp4; codecs=\"avc1.64001F, mp4a.40.2\"",
               "bitrate":293870,
               "width":332,
               "height":720,
               "lastModified":"1579530854141611",
               "quality":"medium",
               "qualityLabel":"360p",
               "projectionType":"RECTANGULAR",
               "audioQuality":"AUDIO_QUALITY_MEDIUM",
               "approxDurationMs":"120209",
               "audioSampleRate":"44100",
               "audioChannels":2
            },...
         ],
         "adaptiveFormats":[
            {
               "itag":271,
               "url":"https://r2---sn-4g5ednse.googlevideo.com/videoplayback?expire=1589124190&ei=_se3XsWoFPuB6dsPyt-HgAE&ip=185.68.78.136&id=o-AKV_qdEhqEcruWvGW6tIwDFM4yghTrrH7JgFDJ3zf_Rc&itag=271&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C298%2C299%2C302%2C303%2C308&source=youtube&requiressl=yes&mh=gB&mm=31%2C29&mn=sn-4g5ednse%2Csn-4g5e6nzl&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=1263750&vprv=1&mime=video%2Fwebm&gir=yes&clen=4708300&dur=120.099&lmt=1579530858253929&mt=1589102501&fvip=2&keepalive=yes&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgE58fWd6ygxm1t43cegxLUJsy7FtbBxB1T5ck9ZyD5KoCIQDyrioyreslRemZkyo-9-46lCVcb_PtUUKdAu9knYLbyg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIhAKM2M5UA36KaSeNHX_IMYcn0L4cye6j_RAWvF5GY6Th-AiBpue0bWaYLqgVvLy6MEUMSOamrf7PqpzdQKvwlCN6lEQ%3D%3D&ratebypass=yes",
               "mimeType":"video/webm; codecs=\"vp9\"",
               "bitrate":617133,
               "width":664,
               "height":1440,
               "initRange":{
                  "start":"0",
                  "end":"219"
               },
               "indexRange":{
                  "start":"220",
                  "end":"618"
               },
               "lastModified":"1579530858253929",
               "contentLength":"4708300",
               "quality":"hd720",
               "fps":30,
               "qualityLabel":"720p",
               "projectionType":"RECTANGULAR",
               "averageBitrate":313627,
               "colorInfo":{
                  "primaries":"COLOR_PRIMARIES_BT709",
                  "transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709",
                  "matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"
               },
               "approxDurationMs":"120099"
            },
          ...
         ]
      },
      "playbackTracking":{
         "videostatsPlaybackUrl":{
            "baseUrl":"https://s.youtube.com/api/stats/playback?cl=310051338&docid=y5kIrbG2gRc&ei=_se3XtOlFoqx1wKJ07MQ&fexp=1714244%2C23723207%2C23744176%2C23804281%2C23837993%2C23839597%2C23857949%2C23860859%2C23876129%2C23877889%2C23880389%2C23880619%2C23882034%2C23882503%2C23884386%2C23885572%2C23890960%2C23891426%2C23891461%2C23892589%2C23893073%2C23898054%2C23900839%2C23902556%2C45170005&ns=yt&plid=AAWlR8dpYxyp8gRQ&el=detailpage&len=121&of=L_224b5BokWsQ5UWgAws_w&vm=CAEQABgEKhhJc0gwZ2w0QmFfbTBWSXlWNm9ITmRRPT0"
         },
         "videostatsDelayplayUrl":{
            "baseUrl":"https://s.youtube.com/api/stats/delayplay?cl=310051338&docid=y5kIrbG2gRc&ei=_se3XtOlFoqx1wKJ07MQ&fexp=1714244%2C23723207%2C23744176%2C23804281%2C23837993%2C23839597%2C23857949%2C23860859%2C23876129%2C23877889%2C23880389%2C23880619%2C23882034%2C23882503%2C23884386%2C23885572%2C23890960%2C23891426%2C23891461%2C23892589%2C23893073%2C23898054%2C23900839%2C23902556%2C45170005&ns=yt&plid=AAWlR8dpYxyp8gRQ&el=detailpage&len=121&of=L_224b5BokWsQ5UWgAws_w&vm=CAEQABgEKhhJc0gwZ2w0QmFfbTBWSXlWNm9ITmRRPT0"
         },
         "videostatsWatchtimeUrl":{
            "baseUrl":"https://s.youtube.com/api/stats/watchtime?cl=310051338&docid=y5kIrbG2gRc&ei=_se3XtOlFoqx1wKJ07MQ&fexp=1714244%2C23723207%2C23744176%2C23804281%2C23837993%2C23839597%2C23857949%2C23860859%2C23876129%2C23877889%2C23880389%2C23880619%2C23882034%2C23882503%2C23884386%2C23885572%2C23890960%2C23891426%2C23891461%2C23892589%2C23893073%2C23898054%2C23900839%2C23902556%2C45170005&ns=yt&plid=AAWlR8dpYxyp8gRQ&el=detailpage&len=121&of=L_224b5BokWsQ5UWgAws_w&vm=CAEQABgEKhhJc0gwZ2w0QmFfbTBWSXlWNm9ITmRRPT0"
         },
         "ptrackingUrl":{
            "baseUrl":"https://www.youtube.com/ptracking?ei=_se3XtOlFoqx1wKJ07MQ&plid=AAWlR8dpYxyp8gRQ&pltype=contentugc&ptk=youtube_none&video_id=y5kIrbG2gRc"
         },
         "qoeUrl":{
            "baseUrl":"https://s.youtube.com/api/stats/qoe?cl=310051338&docid=y5kIrbG2gRc&ei=_se3XtOlFoqx1wKJ07MQ&event=streamingstats&fexp=1714244%2C23723207%2C23744176%2C23804281%2C23837993%2C23839597%2C23857949%2C23860859%2C23876129%2C23877889%2C23880389%2C23880619%2C23882034%2C23882503%2C23884386%2C23885572%2C23890960%2C23891426%2C23891461%2C23892589%2C23893073%2C23898054%2C23900839%2C23902556%2C45170005&ns=yt&plid=AAWlR8dpYxyp8gRQ"
         },
         "setAwesomeUrl":{
            "baseUrl":"https://www.youtube.com/set_awesome?ei=_se3XtOlFoqx1wKJ07MQ&plid=AAWlR8dpYxyp8gRQ&video_id=y5kIrbG2gRc",
            "elapsedMediaTimeSeconds":96
         },
         "atrUrl":{
            "baseUrl":"https://s.youtube.com/api/stats/atr?docid=y5kIrbG2gRc&ei=_se3XtOlFoqx1wKJ07MQ&len=121&ns=yt&plid=AAWlR8dpYxyp8gRQ&ver=2",
            "elapsedMediaTimeSeconds":5
         }
      },
      "captions":{
         "playerCaptionsRenderer":{
            "baseUrl":"https://www.youtube.com/api/timedtext?v=y5kIrbG2gRc&asr_langs=de,en,es,fr,it,ja,ko,nl,pt,ru&caps=asr&xorp=true&hl=en&ip=0.0.0.0&ipbits=0&expire=1589127790&sparams=ip,ipbits,expire,v,asr_langs,caps,xorp&signature=1469B00236C9B64D80B87A62CE8EEA31ED04155C.99859910DE53065A1E189063BA373E8C28112085&key=yt8",
            "visibility":"UNKNOWN"
         },
         "playerCaptionsTracklistRenderer":{
            "captionTracks":[
               {
                  "baseUrl":"https://www.youtube.com/api/timedtext?v=y5kIrbG2gRc&asr_langs=de,en,es,fr,it,ja,ko,nl,pt,ru&caps=asr&xorp=true&hl=en&ip=0.0.0.0&ipbits=0&expire=1589127790&sparams=ip,ipbits,expire,v,asr_langs,caps,xorp&signature=30DAD24E1EF8621A0ABB4BA22FC575CEDFD9755E.18CB292D586A809E1C6BCA0A4787E2D5098D1897&key=yt8&kind=asr&lang=ko",
                  "name":{
                     "simpleText":"Korean (auto-generated)"
                  },
                  "vssId":"a.ko",
                  "languageCode":"ko",
                  "kind":"asr",
                  "isTranslatable":true
               }
            ],
            "audioTracks":[
               {
                  "captionTrackIndices":[
                     0
                  ]
               }
            ],
            "translationLanguages":[
               {
                  "languageCode":"af",
                  "languageName":{
                     "simpleText":"Afrikaans"
                  }
               },
               {
                  "languageCode":"sq",
                  "languageName":{
                     "simpleText":"Albanian"
                  }
               },
              ...
            ],
            "defaultAudioTrackIndex":0
         }
      },
      "videoDetails":{
         "videoId":"y5kIrbG2gRc",
         "title":"How to Download Free Music On Your iPhone (OFFLINE) 2020",
         "lengthSeconds":"120",
         "keywords":[
            "ios",
            "iphone",
            "download music",
            "YouTube download iphone",
            "music downloader",
            "YouTube downloader",
            "iPhone free music",
            "download music iphone",
            "video downloader",
            "video downloader iphone",
            "video download ios"
         ],
         "channelId":"UCFzpTuxdolZ_EaZr-emNgbg",
         "isOwnerViewing":false,
         "shortDescription":"This video will show you how to download free music and videos on your iphone easy and fast 2020\n\nhttps://apps.apple.com/de/app/imusic-stream-play-offline/id1493949573\n\nReally easy to use and a nice way to stream and play music and videos.\n\nOnly drawback:\nThe first start takes a little longer and the app is financed by advertising, but understandable with the operation and the costs of developing an app - nevertheless, it can also be removed with freebies or by paying - after all, in the restaurant you also tip\n\nSo if you don't want to use it and just keep your opinion to yourself: live and let live =)\n\nOne month no ads with the voucher: freebie1\n---------------------------------\n\nStream online music to save space on your device, or download and listen to songs offline!\n\n\nThe application offers downloading and streaming for non-commercial purposes only.\n\n\n* Unlimited free music for unlimited time!\n\n\n* YouTube streaming: Listen to over 150 million free songs from YouTube.\n\n\n* Smart Search: Search for songs, artists, albums, artists, singles, covers, remixes, and more.\n\n\n* Don't feel like typing, just speak into the microphone and search for new videos\n\n\n* Dark Mode - yes of course =)\n\n\n* All music player controls: repetitions, shuffle and more.\n\n\n* Smart recommendations for featured music.\n\n\n* Top charts and music playlists updated daily.\n\n\n* Create and manage your favorite playlists with any content: online, podcasts, offline, etc.\n\n\n* Share your music and videos directly with your friends!\n\n\n* Tons of different genres, moods and other music categories: Pop, Rock, Rap, RnB, Latin, Dubstep, Drum, Electronic etc.\n\n\n\nThis app is the best source for unlimited music. The app has over 150 million online music tracks and over 5 million high quality MP3 songs that you can use to listen to new or favorite artists.",
         "isCrawlable":true,
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/y5kIrbG2gRc/maxresdefault.jpg",
                  "width":1920,
                  "height":1080
               },
               ...
            ]
         },
         "averageRating":3,
         "allowRatings":true,
         "viewCount":"54",
         "author":"David Koller",
         "isPrivate":false,
         "isUnpluggedCorpus":false,
         "isLiveContent":false
      },
      "playerConfig":{
         "audioConfig":{
            "loudnessDb":8.2644691,
            "perceptualLoudnessDb":-5.7355313,
            "enablePerFormatLoudness":false
         },
         "streamSelectionConfig":{
            "maxBitrate":"10110000"
         },
         "mediaCommonConfig":{
            "dynamicReadaheadConfig":{
               "maxReadAheadMediaTimeMs":120000,
               "minReadAheadMediaTimeMs":15000,
               "readAheadGrowthRateMs":1000
            }
         }
      },
      "storyboards":{
         "playerStoryboardSpecRenderer":{
            "spec":"https://i9.ytimg.com/sb/y5kIrbG2gRc/storyboard3_L$L/$N.jpg?sqp=-oaymwECSEGi85f_AwYItPSW8QU=|48#27#100#10#10#0#default#rs$AOn4CLCRV647dzPxW5dEKPLqh2GQN6T8YQ|20#45#62#10#10#2000#M$M#rs$AOn4CLBjksbYlKwGsU_osDKotiZEZ83awg|41#90#62#5#5#2000#M$M#rs$AOn4CLDg6hP8nmqXT9BD7N7qPH3gY8Mx3Q"
         }
      },
      "microformat":{
         "playerMicroformatRenderer":{
            "thumbnail":{
               "thumbnails":[
                  {
                     "url":"https://i.ytimg.com/vi/y5kIrbG2gRc/maxresdefault.jpg",
                     "width":1280,
                     "height":720
                  }
               ]
            },
            "embed":{
               "iframeUrl":"https://www.youtube.com/embed/y5kIrbG2gRc",
               "flashUrl":"http://www.youtube.com/v/y5kIrbG2gRc?version=3&autohide=1",
               "width":960,
               "height":720,
               "flashSecureUrl":"https://www.youtube.com/v/y5kIrbG2gRc?version=3&autohide=1"
            },
            "title":{
               "simpleText":"How to Download Free Music On Your iPhone (OFFLINE) 2020"
            },
            "description":{
               "simpleText":"This video will show you how to download free music and videos on your iphone easy and fast 2020\n\nhttps://apps.apple.com/de/app/imusic-stream-play-offline/id1493949573\n\nReally easy to use and a nice way to stream and play music and videos.\n\nOnly drawback:\nThe first start takes a little longer and the app is financed by advertising, but understandable with the operation and the costs of developing an app - nevertheless, it can also be removed with freebies or by paying - after all, in the restaurant you also tip\n\nSo if you don't want to use it and just keep your opinion to yourself: live and let live =)\n\nOne month no ads with the voucher: freebie1\n---------------------------------\n\nStream online music to save space on your device, or download and listen to songs offline!\n\n\nThe application offers downloading and streaming for non-commercial purposes only.\n\n\n* Unlimited free music for unlimited time!\n\n\n* YouTube streaming: Listen to over 150 million free songs from YouTube.\n\n\n* Smart Search: Search for songs, artists, albums, artists, singles, covers, remixes, and more.\n\n\n* Don't feel like typing, just speak into the microphone and search for new videos\n\n\n* Dark Mode - yes of course =)\n\n\n* All music player controls: repetitions, shuffle and more.\n\n\n* Smart recommendations for featured music.\n\n\n* Top charts and music playlists updated daily.\n\n\n* Create and manage your favorite playlists with any content: online, podcasts, offline, etc.\n\n\n* Share your music and videos directly with your friends!\n\n\n* Tons of different genres, moods and other music categories: Pop, Rock, Rap, RnB, Latin, Dubstep, Drum, Electronic etc.\n\n\n\nThis app is the best source for unlimited music. The app has over 150 million online music tracks and over 5 million high quality MP3 songs that you can use to listen to new or favorite artists."
            },
            "lengthSeconds":"121",
            "ownerProfileUrl":"http://www.youtube.com/channel/UCFzpTuxdolZ_EaZr-emNgbg",
            "externalChannelId":"UCFzpTuxdolZ_EaZr-emNgbg",
            "isFamilySafe":true,
            "availableCountries":[
               "AD",
               "AE",
               "AF",
              ...
            ],
            "isUnlisted":false,
            "hasYpcMetadata":false,
            "viewCount":"54",
            "category":"Howto & Style",
            "publishDate":"2020-01-20",
            "ownerChannelName":"David Koller",
            "uploadDate":"2020-01-20"
         }
      },
      "trackingParams":"CAAQu2kiEwjTnKS7_KjpAhWK2FUKHYnpDAI=",
      "attestation":{
         "playerAttestationRenderer":{
            "challenge":"a=5&a2=1&b=oOSySIwDjCRHOSC_hdv5U7L4a9o&c=1589102590&d=1&e=y5kIrbG2gRc&c3a=16&c1a=1&c6a=1&hh=WfqaN1dN0rN6qWNRm1QxzCJhawuSF4hbLofvwIziXqc",
            "botguardData":{
               "program":"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",
               "interpreterUrl":"//www.google.com/js/bg/wp0TPlQd7idGOyNKAJ3re2taV6Ivap37Oac38dPiXVQ.js"
            }
         }
      },
      "messages":[
         {
            "mealbarPromoRenderer":{
               "messageTexts":[
                  {
                     "runs":[
                        {
                           "text":"Get YouTube without the ads"
                        }
                     ]
                  }
               ],
               ...
            }
         }
      ]
   },
   "fflags":"html5_default_ad_gain=0.5&info_cards_renderer_on_desktop=true&html5_encrypted_vp9_firefox=true&mweb_muted_autoplay_animation=shrink&preskip_button_style_ads_backend=countdown_next_to_thumbnail&html5_seek_jiggle_cmt_delay_ms=8000&html5_max_live_dvr_window_plus_margin_secs=46800.0&html5_disable_extra_update_resource=true&web_player_live_monitor_env_killswitch=true&web_player_watch_next_response_parsing=true&html5_sticky_reduces_discount_by=0.0&html5_decode_to_texture_cap=true&html5_default_quality_cap=720&html5_long_rebuffer_threshold_ms=30000&disable_new_pause_state3=true&html5_gllat=true&live_fresca_scheduled_persistent=true&html5_gapless_max_played_ranges=12&html5_unify_sqless_flow=true&html5_df_downgrade_thresh=0.2&html5_max_headm_for_streaming_xhr=0&ignore_video_data_current_ad_check=true&html5_disable_preserve_reference=true&html5_hdr_separate_keys_support=true&html5_manifestless_live_segment_index_new_logic=true&www_for_videostats=true&web_gel_timeout_cap=true&manifestless_post_live_ufph=true&html5_qoe_user_intent_match_health=true&html5_deadzone_multiplier=1.0&render_unicode_emojis_as_small_images=true&set_interstitial_start_button=true&html5_enable_ads_client_monitoring_log=true&web_macro_markers_snapping_threshold=4&html5_minimum_readahead_seconds=0.0&polymer_bad_build_labels=true&html5_fludd_suspend=true&use_sonic_library_for_v4_support=true&html5_player_dynamic_bottom_gradient=true&enable_ypc_clickwrap_on_living_room=true&suppress_gen_204=true&use_forced_linebreak_preskip_text=true&web_screen_manager_use_default_client=true&html5_source_buffer_attach_delay_time=15000&web_player_response_fairplay_config_killswitch=true&bulleit_explicitly_use_content_video_ms_for_cue_range=true&html5_background_quality_cap=360&html5_ad_timeout_ms=0&html5_hls_min_video_height=0&should_clear_video_data_on_player_cued_unstarted=true&manifestless_post_live=true&use_touch_events_for_bulleit_mweb=true&align_ad_to_video_player_lifecycle_for_bulleit=true&enable_midroll_prefetch_for_html5_unplugged=true&html5_video_tbd_min_kb=0&mweb_always_check_for_cache_data_for_companion=true&html5_seek_set_cmt_delay_ms=2000&html5_enable_json_subtitle=true&html5_hack_gapless_init=true&kevlar_queue_use_update_api=true&html5_readahead_ratelimit=3000&html5_manifestless_max_segment_history=0&html5_log_playback_rate_change_killswitch=true&html5_gl_fps_threshold=0&html5_live_abr_head_miss_fraction=0.0&html5_disable_subscribe_new_vis=true&html5_streaming_xhr_try_webm=true&html5_autonav_quality_cap=0&html5_log_timestamp_offset=true&html5_probe_secondary_during_timeout_miss_count=2&render_enhanced_overlays_as_ctas_for_desktop_style=unset&html5_platform_minimum_readahead_seconds=0.0&html5_av1_thresh_hcc=1080&html5_manifestless_media_source_duration=25200&html5_disable_non_contiguous=true&web_post_search=true&html5_media_fullscreen=true&web_player_api_logging_fraction=0.01&fixed_padding_skip_button=true&html5_probe_primary_failure_factor=4&html5_manifestless_vp9_otf=true&web_wn_macro_markers=true&show_countdown_on_bumper=true&ad_pod_disable_companion_persist_ads_quality=true&html5_jumbo_ull_subsegment_readahead_target=1.3&html5_control_flow_include_trigger_logging_in_tmp_logs=true&html5_sync_seeking_state=true&enforce_cuerange_priority_on_web=true&html5_firefox_ambisonic_opus=true&enable_kevlar_action_companion_cleanup=true&html5_gapless_error_check_killswitch=true&html5_remove_pause=false&playready_first_play_expiration=-1&skip_ad_button_with_thumbnail=true&web_player_ipp_canary_type_for_logging=&html5_log_live_discontinuity=true&live_chunk_readahead=3&html5_store_xhr_headers_readable=true&ensure_only_one_resolved_midroll_response_on_web=true&html5_player_min_build_cl=-1&html5_ios_force_seek_to_zero_on_stop=true&dash_manifest_version=5&web_player_music_visualizer_treatment=fake&html5_background_cap_idle_secs=60&web_player_inline_botguard=true&html5_new_elem_on_hidden=true&enable_ve_tracker_key=true&html5_min_readbehind_cap_secs=60&kevlar_miniplayer_expand_top=true&html5_qoe_intercept=&web_client_counter_random_seed=true&variable_buffer_timeout_ms=0&html5_incremental_parser_buffer_extra_bytes=16384&html5_player_autonav_logging=true&disable_thumbnail_preloading=true&debug_dapper_trace_id=&html5_enable_4k_hq_enc=true&html5_min_readbehind_secs=0&html5_incremental_parser_buffer_duration_secs=1.5&autoplay_time=8000&enable_mixed_direction_formatted_strings=true&endscreen_renderer_on_desktop_ads=true&show_interstitial_for_3s=true&fast_autonav_in_background=true&html5_av1_thresh_lcc=360&html5_desktop_vr180_allow_panning=true&web_op_continuation_type_blacklist=()&persist_text_on_preview_button=true&html5_bandwidth_window_size=0&kevlar_autonav_miniplayer_fix=true&html5_set_ended_in_pfx_live=true&html5_enable_extra_sync_killswitch=true&tvhtml5_unplugged_preload_cache_size=5&endscreen_renderer_on_desktop=true&populate_companion_metadata_from_vms_html5=true&web_yt_config_context=true&html5_buffer_health_to_defer_slice_processing=0.0&use_new_skip_icon=true&html5_no_placeholder_rollbacks=true&html5_subsegment_readahead_min_load_speed=1.5&show_interstitial_white=true&html5_force_debug_data_for_client_tmp_logs=true&html5_vp9_new_mime=true&polymer_verifiy_app_state=true&html5_enable_video_overlay_on_inplayer_slot=true&html5_manifestless_interpolate=true&web_player_response_overlay_parsing=false&html5_time_based_consolidation_ms=10&enable_eviction_protection_for_bulleit=true&overwrite_polyfill_on_logging_lib_loaded=true&html5_seek_timeout_delay_ms=20000&html5_suspend_loader=true&html5_allowable_liveness_drift_chunks=2&html5_probe_live_using_range=true&html5_shrink_live_timestamps=true&csi_on_gel=true&player_allow_autonav_after_playlist=true&external_fullscreen_with_edu=true&html5_live_quality_cap=0&html5_ignore_bad_bitrates=true&html5_subsegment_readahead_timeout_secs=2.0&delay_ads_gvi_call_on_bulleit_living_room_ms=0&web_gel_debounce_ms=10000&html5_seek_jiggle_cmt_disable_gapless=true&html5_gapless_preloading=true&player_doubletap_to_seek=true&desktop_videowall_companion_wta_support=true&html5_ignore_target_time=true&html5_gapless_ended_transition_buffer_ms=200&pass_biscotti_id_in_header_ajax=true&html5_subsegment_readahead_target_buffer_health_secs=0.5&tvhtml5_min_readbehind_secs=20&html5_safari_desktop_eme_min_version=0&enable_client_deferred_full_screen_filtering_for_mweb_phones=true&html5_peak_shave=true&html5_restrict_streaming_xhr_on_sqless_requests=true&html5_hls_initial_bitrate=0&html5_gapless_ad_byterate_multiplier=1.6&desktop_image_companion_wta_support=true&html5_health_to_gel=true&hide_preskip=true&enable_live_premiere_web_player_indicator=true&html5_delay_initial_loading=true&player_destroy_old_version=true&html5_gapless_audio=true&allow_skip_annotations_invideo=true&html5_crypto_period_secs_from_emsg=true&desktop_sparkles_light_cta_button=true&use_revamped_survey_design_for_desktop=true&html5_optimized_polling=true&kevlar_frontend_video_list_actions=true&html5_jumbo_ull_nonstreaming_mffa_ms=4000&html5_gapless_seek_tolerance_secs=3.0&survey_bypass_if_whitelisted=true&player_enable_playback_playlist_change=true&html5_log_rebuffer_events=5&html5_stop_video_in_cancel_playback=true&custom_csi_timeline_use_gel=true&mweb_native_control_in_faux_fullscreen_shared=true&sdk_ad_prefetch_time_seconds=-1&html5_av1_tv_killswitch=true&html5_enable_embedded_player_visibility_signals=true&enable_ad_pod_specific_ui=true&web_player_disable_ima_uvr=true&use_button_command_field_for_web_survey_interstitial=true&live_fresca_v2=true&allow_poltergust_autoplay=true&web_screen_associated_all_layers=true&forced_brand_precap_duration_ms=2000&suppress_sparkles_for_whitelisted_instream_on_desktop=true&web_op_endpoint_blacklist=()&enable_overlays_wta=true&html5_gapless_no_requests_after_lock=true&enable_external_player_ad_playback_progress_html5=true&html5_subsegment_readahead_min_buffer_health_secs=0.25&enable_prefetch_for_postrolls=true&html5_seek_new_elem_delay_ms=12000&html5_sticky_duration_cap_secs=0&use_survey_skip_in_0s=true&html5_manifestless_vp9=true&web_player_watch_next_response=true&html5_max_drift_per_track_secs=0.0&web_use_beacon_api_for_ad_click_server_pings=true&delay_gel_until_config_ready=true&html5_qoe_length=96000&tvhtml5_audio_enable_botguard=true&html5_experiment_id_label=23894738&html5_ios4_seek_above_zero=true&kevlar_miniplayer_play_pause_on_scrim=true&html5_subsegment_readahead_seek_latency_fudge=0.5&ignore_empty_xhr=true&html5_error_cooldown_in_ms=30000&html5_vp9_mime_full_range_flag=true&html5_continue_probing_on_missing_drminfo=true&kevlar_allow_multistep_video_init=true&html5_adaptation_fix=true&variable_load_timeout_ms=0&mweb_enable_skippables_on_jio_phone=true&network_polling_interval=30000&web_deprecate_service_ajax_map_dependency=true&html5_request_sizing_multiplier=0.8&html5_subsegment_readahead_min_buffer_health_secs_on_timeout=0.1&html5_live_normal_latency_bandwidth_window=0.0&botguard_async_snapshot_timeout_ms=2000&info_cards_renderer_on_desktop_ads=true&bulleit_use_touch_events_for_skip=true&html5_live_abr_repredict_fraction=0.0&html5_jumbo_mobile_subsegment_readahead_target=3.0&html5_maximum_readahead_seconds=0.0&enable_device_forwarding_from_xhr_client=true&disable_legacy_desktop_remote_queue=true&html5_hdcp_probing_stream_url=&enable_survey_termination_on_resize=true&desktop_action_companion_wta_support=true&html5_log_non_fatal=true&html5_ios7_force_play_on_stall=true&html5_rewrite_manifestless_for_continuity=true&tvhtml5_disable_live_prefetch=true&kevlar_miniplayer=true&html5_disable_move_pssh_to_moov=true&html5_aspect_from_adaptive_format=true&kevlar_queue_use_dedicated_list_type=true&hfr_dropped_framerate_fallback_threshold=0&mark_encrypted_webm_supporting_widevine=true&html5_playback_timeline_register_disposable=true&embeds_enable_embed_module=true&bulleit_get_midroll_info_timeout_ms=8000&unplugged_tvhtml5_botguard_attestation=true&html5_ignore_background_dfd=true&web_logging_max_batch=150&web_player_show_music_in_this_video_graphic=video_thumbnail&html5_live_ultra_low_latency_bandwidth_window=0.0&html5_allow_video_keyframe_without_audio=true&html5_reload_element_long_rebuffer_delay_ms=20000&html5_log_hls_video_height_change_as_format_change=true&html5_live_low_latency_bandwidth_window=0.0&mweb_enable_custom_control_shared=true&disable_simple_mixed_direction_formatted_strings=true&html5_restore_perf_cap=false&use_sonic_js_library_for_v4_support=true&web_api_url=true&simply_enable_botguard=true&html5_decoder_freeze_timeout_delay_ms=0&unplugged_tvhtml5_video_preload_on_focus_delay_ms=0&kevlar_playback_associated_queue=true&visibility_error_html_dump_sample_rate=0.01&html5_av1_thresh=1080&enable_topsoil_wta_for_halftime=true&web_player_icons=true&use_http_post_for_unplugged_get_midroll_info=true&html5_inline_video_quality_survey=true&html5_static_abr_resolution_shelf=0&html5_expanded_max_vss_pings=true&release_player_on_abandon_for_bulleit_lr_ads_frontend=true&desktop_shopping_companion_wta_support=true&html5_quality_cap_min_age_secs=0&disable_ad_info_event_for_music_web=true&html5_disable_aac_ac3=true&allow_live_autoplay=true&web_op_signal_type_blacklist=()&html5_unrewrite_timestamps=true&html5_enable_ac3=true&html5_license_constraint_delay=5000&html5_streaming_xhr_buffer_mdat=true&html5_max_readahead_bandwidth_cap=0&html5_in_buffer_ptl_timeout_ms=0&html5_enable_eac3=true&html5_manifestless_synchronized=true&html5_dai_assume_unordered_cuepoints=true&html5_av1_thresh_arm=240&html5_min_upgrade_health=0&ensure_vis_persists_in_full_screen_for_mweb=true&html5_set_exception_to_nonfatal=true&web_network_combined_catch=true&web_player_sentinel_is_uniplayer=true&player_bootstrap_method=true&html5_disable_manifestless_sqless_sync=true&set_interstitial_advertisers_question_text=true&mweb_cougar_big_controls=true&html5_probe_primary_delay_base_ms=0&html5_accurate_seeking_redux=true&html5_source_buffer_attach_retry_limit=0&show_thumbnail_on_standard=true&debug_sherlog_username=&html5_log_media_perf_info=true&postroll_notify_time_seconds=5&web_player_response_playback_tracking_parsing=true&html5_streaming_xhr_try_cobalt=true&html5_max_av_sync_drift=50&html5_hfr_quality_cap=0&html5_seek_over_discontinuities=true&mdx_enable_privacy_disclosure_ui=true&disable_legacy_pyv_for_web=true&html5_subsegment_readahead_load_speed_check_interval=0.5&html5_ignore_start_seconds_for_ads_killswitch=true&html5_post_interrupt_readahead=20&html5_emsg_crypto_period_index=true&web_player_live_monitor_env=true&web_player_live_monitor_env_killswitch2=true&html5_new_mediastream=true&html5_request_size_padding_secs=3.0&html5_qoe_reports_ctt=true&html5_prefer_server_bwe3=true&max_resolution_for_white_noise=360&midroll_notify_time_seconds=5&desktop_player_button_tooltip_with_shortcut=true&web_player_ios_mweb_resizing=true",
   "innertube_api_key":"AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
   "watermark":",https://s.ytimg.com/yts/img/watermark/youtube_watermark-vflHX6b6E.png,https://s.ytimg.com/yts/img/watermark/youtube_hd_watermark-vflAzLcD6.png",
   "c":"WEB",
   "innertube_api_version":"v1",
   "formats":[
      {
         "itag":18,
         "url":"https://r2---sn-4g5ednse.googlevideo.com/videoplayback?expire=1589124190&ei=_se3XsWoFPuB6dsPyt-HgAE&ip=185.68.78.136&id=o-AKV_qdEhqEcruWvGW6tIwDFM4yghTrrH7JgFDJ3zf_Rc&itag=18&source=youtube&requiressl=yes&mh=gB&mm=31%2C29&mn=sn-4g5ednse%2Csn-4g5e6nzl&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=1263750&vprv=1&mime=video%2Fmp4&gir=yes&clen=2824170&ratebypass=yes&dur=120.209&lmt=1579530820687030&mt=1589102501&fvip=2&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJpPlLswRQIgKyHh0QMyl-C1EdIrdQqIRB--9KaIjQSaNHb5OTy0EIcCIQDyoXZFsmUEWrwhEzqKwcX8KHfqTZrxvf6yEqeWRQhurw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIhAKM2M5UA36KaSeNHX_IMYcn0L4cye6j_RAWvF5GY6Th-AiBpue0bWaYLqgVvLy6MEUMSOamrf7PqpzdQKvwlCN6lEQ%3D%3D",
         "mimeType":"video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
         "bitrate":188121,
         "width":166,
         "height":360,
         "lastModified":"1579530820687030",
         "contentLength":"2824170",
         "quality":"small",
         "qualityLabel":"240p",
         "projectionType":"RECTANGULAR",
         "averageBitrate":187950,
         "audioQuality":"AUDIO_QUALITY_LOW",
         "approxDurationMs":"120209",
         "audioSampleRate":"44100",
         "audioChannels":2
      },
      ...
   ],
   "video_id":"y5kIrbG2gRc",
   "video_url":"https://www.youtube.com/watch?v=y5kIrbG2gRc",
   "title":"How to Download Free Music On Your iPhone (OFFLINE) 2020",
   "length_seconds":"120",
   "age_restricted":false,
   "html5player":"/s/player/0acb4375/player_ias.vflset/en_US/base.js",
   "full":true
}
```


## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

## License

Apache Version 2.0

See [LICENSE](https://github.com/appit-online/youtube-info-streams/blob/master/LICENSE)
