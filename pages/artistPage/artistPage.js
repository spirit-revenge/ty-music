(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/artistPage/artistPage"],{"0250":function(n,e,t){"use strict";var i=t("e625"),u=t.n(i);u.a},"067c":function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}));var i={uNavbar:function(){return t.e("node-modules/uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"efb4"))},uImage:function(){return t.e("node-modules/uview-ui/components/u-image/u-image").then(t.bind(null,"d41d"))},uCountTo:function(){return t.e("node-modules/uview-ui/components/u-count-to/u-count-to").then(t.bind(null,"5220"))},uTag:function(){return t.e("node-modules/uview-ui/components/u-tag/u-tag").then(t.bind(null,"8483"))},uDivider:function(){return t.e("node-modules/uview-ui/components/u-divider/u-divider").then(t.bind(null,"1404"))},uReadMore:function(){return t.e("node-modules/uview-ui/components/u-read-more/u-read-more").then(t.bind(null,"5f82"))}},u=function(){var n=this.$createElement,e=(this._self._c,{background:"rgba(255,255,255,"+this.bgOpacity+")"});this.$mp.data=Object.assign({},{$root:{a0:e}})},a=[]},a40c:function(n,e,t){"use strict";t.r(e);var i=t("067c"),u=t("c690");for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("0250");var o=t("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"49f355f1",null,!1,i["a"],void 0);e["default"]=r.exports},aef2:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{id:null,detail:{videoCount:0,artist:{id:0,cover:"",name:"",transNames:[],identities:[],identifyTag:null,briefDesc:"",rank:{rank:2,type:1},albumSize:0,musicSize:0,mvSize:0},blacklist:!0,showPriMsg:!1},desc:{introduction:[],briefDesc:"",topicData:[]},bgOpacity:0}},onLoad:function(n){this.id=n.id},onReady:function(){this.getArtistDesc()},created:function(){},methods:{getArtistDesc:function(){var n=this,e=this.id;e&&this.$api.artistDetail({data:{id:e}}).then((function(t){return n.detail=t.data,n.$api.artistDesc({data:{id:e}})})).then((function(e){n.desc=e}))}}}},b3df:function(n,e,t){"use strict";(function(n,e){var i=t("4ea4");t("f8a3");i(t("66fd"));var u=i(t("a40c"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(u.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},c690:function(n,e,t){"use strict";t.r(e);var i=t("aef2"),u=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=u.a},e625:function(n,e,t){}},[["b3df","common/runtime","common/vendor"]]]);