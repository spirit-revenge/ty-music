(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-col/u-col"],{"5bc33":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(){this.$emit("click")}}};n.default=i},"7f2d":function(t,n,e){"use strict";var i=e("b781"),u=e.n(i);u.a},"9cbf":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=(this._self._c,Number(this.gutter));this.$mp.data=Object.assign({},{$root:{m0:n}})},u=[]},a916:function(t,n,e){"use strict";e.r(n);var i=e("5bc33"),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},b781:function(t,n,e){},c8a9:function(t,n,e){"use strict";e.r(n);var i=e("9cbf"),u=e("a916");for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("7f2d");var s=e("f0c5"),a=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-col/u-col-create-component',
    {
        'node-modules/uview-ui/components/u-col/u-col-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c8a9"))
        })
    },
    [['node-modules/uview-ui/components/u-col/u-col-create-component']]
]);
