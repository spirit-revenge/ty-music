(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sq/sq-comments"],{1499:function(t,n,e){"use strict";var o=e("de6f"),i=e.n(o);i.a},"53df":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={sqCommentItem:function(){return e.e("components/sq/sq-comment-item").then(e.bind(null,"c871"))}},i=function(){var t=this.$createElement,n=(this._self._c,this.formatNumber(this.total));this.$mp.data=Object.assign({},{$root:{m0:n}})},a=[]},"5c33":function(t,n,e){"use strict";e.r(n);var o=e("53df"),i=e("90a2");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("1499");var u=e("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"db9d2a10",null,!1,o["a"],void 0);n["default"]=c.exports},"83da":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={props:{type:String},data:function(){return{hotComments:[],total:0}},computed:{},created:function(){},methods:{getList:function(t){var n=this,e=t.id,o=t.type,i=t.limit;this.$api.commentHot({data:{type:o,id:e,limit:i||30}}).then((function(t){n.hotComments=t.hotComments,n.total=t.total}))}}};n.default=o},"90a2":function(t,n,e){"use strict";e.r(n);var o=e("83da"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},de6f:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sq/sq-comments-create-component',
    {
        'components/sq/sq-comments-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5c33"))
        })
    },
    [['components/sq/sq-comments-create-component']]
]);
