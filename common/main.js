(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0443":function(e,t,o){"use strict";o.r(t);var n=o("7c9a");for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);o("1bb2");var a=o("f0c5"),r=Object(a["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=r.exports},"0fd6":function(e,t,o){"use strict";(function(e,t){var n=o("4ea4"),i=n(o("9523"));o("f8a3");var a=n(o("66fd")),r=n(o("0443")),u=n(o("5d15"));o("4dd8");var c=n(o("9617")),d=n(o("c8e3")),l=n(o("4105"));function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}e.__webpack_require_UNI_MP_PLUGIN__=o,a.default.config.productionTip=!1,a.default.prototype.$api=l.default,a.default.mixin(d.default),a.default.use(c.default),r.default.mpType="app";var f=new a.default(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({store:u.default},r.default));t(f).$mount()}).call(this,o("bc2e")["default"],o("543d")["createApp"])},"15b9":function(e,t,o){"use strict";(function(e){var n=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("9523")),a=n(o("4311")),r=n(o("4ecc")),u=o("26cb");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l={data:function(){return{}},computed:d(d({},(0,u.mapState)(["audioId","audioLrc","audioMeta"])),{},{audioPlayPerc:function(){var e=this.audioMeta,t=e.currentTime,o=void 0===t?0:t,n=e.duration,i=void 0===n?0:n,a=(o/i*100).toFixed(2);return a},audioBuffedPerc:function(){var e=this.audioMeta,t=e.buffered,o=void 0===t?0:t,n=e.duration,i=void 0===n?0:n,a=(o/i*100).toFixed(2);return a}}),watch:{},created:function(){},onBackPress:function(e){if(console.log("onBackPress",e),!0===this.showComment)return this.showComment=!1,!0},methods:d(d({},(0,u.mapMutations)({setAudioId:"setAudioId",setAudioTitle:"setAudioTitle",setPicUrl:"setPicUrl",setAudioLrc:"setAudioLrc",setAudioMeta:"setAudioMeta"})),{},{formatNumber:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e?e>=1e4?(e/1e4).toFixed(t)+(o?"万":"w"):e:""},formatTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd",o=new Date(e);return a.default.dateFormat(t,o)},toFixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toFixed(t)},openUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.url,n=encodeURIComponent(o);e.navigateTo({url:"/pages/webBrowser/webBrowser?url="+n})},openMp3:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("-----openMp3",t);var o=t.id,n=t.picUrl,i=t.name,a=this.audioId,r=this.audioMeta;(o!=a||r.paused)&&(this.setAudioTitle(i),this.setPicUrl(n)),e.navigateTo({url:"/pages/playMusicPage/playMusicPage?id="+o})},playMusicById:function(t){var o=this,n=this.audioId,i=this.audioMeta;t==n&&!1===i.paused||(this.setAudioId(t),this.$api.songUrl({data:{id:t}}).then((function(n){var i=n.data||[];return i.length>0&&i[0].url?o.playMusicByUrl(i[0].url):e.showModal({title:"失败",content:"无法获取该歌曲的播放地址，应该是没版权~"}),o.$api.lyric({data:{id:t}})})).then((function(e){var t=r.default.createLrcObj(e.lrc.lyric);o.setAudioLrc(t)})))},playMusicByUrl:function(e){console.log("playMusicByUrl",e);var t=getApp().globalData.audioCtx;return t.src=e,t.play(),t},setAudioMetaInner:function(e){var t={};t.volume=e.volume,t.buffered=e.buffered,t.duration=e.duration,t.currentTime=e.currentTime,t.paused=e.paused,this.setAudioMeta(t)},doPlayAudio:function(){var e=getApp().globalData.audioCtx;console.log("doPlayAudio",e),null!=e&&e.play()},doPauseAudio:function(){console.log("doPauseAudio",e);var e=getApp().globalData.audioCtx;null!=e&&e.pause()},parseMinute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=parseInt(e/60);return t<10?"0"+t:t},parseSecond:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=parseInt(e%60);return t<10?"0"+t:t},openArtist:function(t){t&&e.navigateTo({url:"/pages/artistPage/artistPage?id="+t})},openPlaylistPage:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;e.navigateTo({url:"/pages/playlistPage/playlistPage?id=".concat(t,"&type=").concat(o)})},showDevToast:function(){e.showToast({title:"还没有时间做~"})},showNoneToast:function(t){e.showToast({title:t,icon:"none"})},openPlayVideoPage:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;console.log("openPlayVideoPage",t,o),e.navigateTo({url:"/pages/playVideoPage/playVideoPage?id=".concat(t,"&type=").concat(o)})}})};t.default=l}).call(this,o("543d")["default"])},"1bb2":function(e,t,o){"use strict";var n=o("a77f"),i=o.n(n);i.a},2043:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={globalData:{audioCtx:null},onLaunch:function(){var t=this;console.log("App Launch");var o=null,n=this.$options.globalData;null==n.audioCtx&&(o=e.createInnerAudioContext(),o.autoplay=!0,o.onError((function(t){console.error("audio播放错误",t),e.showToast({title:"音频播放错误",icon:"none"})})),o.onCanplay((function(){console.info("onCanplay"),t.setAudioMetaInner(o),console.log("：",o.duration),console.log("buffered：",o.buffered),console.log("volume：",o.volume),console.log("currentTime：",o.currentTime)})),o.onPlay((function(){t.setAudioMetaInner(o)})),o.onPause((function(){t.setAudioMetaInner(o)})),o.onStop((function(){t.setAudioMetaInner(o)})),o.onEnded((function(){t.setAudioMetaInner(o)})),o.onWaiting((function(){console.log("onWaiting"),t.setAudioMetaInner(o)})),o.onTimeUpdate((function(){t.setAudioMetaInner(o)})),n.audioCtx=o,this.$options.globalData=n)},onShow:function(){console.log("App Show"),this.$bus.$emit("onAppShow")},onHide:function(){console.log("App Hide"),this.$bus.$emit("onAppHide")},mounted:function(){console.log("app vue mounted!")},methods:{setAudioMetaInner:function(e){var t=this;this.$u.throttle((function(){console.log("setAudioMetaInner");var o={};o.volume=e.volume,o.buffered=e.buffered,o.duration=e.duration,o.currentTime=e.currentTime,o.paused=e.paused,t.$store.commit("setAudioMeta",o)}),800)},updateCurrentTime:function(e){var t=this;this.$u.throttle((function(){console.log("updateCurrentTime");var o={};o.currentTime=e.currentTime,o.paused=e.paused,t.$store.commit("setAudioMeta",o)}),800)}}};t.default=o}).call(this,o("543d")["default"])},"53d4":function(e,t,o){"use strict";o.r(t);var n=o("15b9"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"7c9a":function(e,t,o){"use strict";o.r(t);var n=o("2043"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},a77f:function(e,t,o){},c8e3:function(e,t,o){"use strict";o.r(t);var n=o("53d4");for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);var a=o("f0c5"),r=Object(a["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=r.exports}},[["0fd6","common/runtime","common/vendor"]]]);