webpackJsonp([9],{"/3dO":function(t,a,e){"use strict";var n=e("34v0"),i=e.n(n),r=e("PphD");a.a={name:"page",data:function(){return{urlArray:[location.href.substr(location.href.indexOf("#")+1)],transitionName:"animate-in"}},computed:i()({},e.i(r.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),beforeRouteUpdate:function(t,a,e){this.urlArray.length>1&&this.urlArray[this.urlArray.length-2]==t.path?(this.$router.isBack=!0,this.urlArray.pop()):this.urlArray.push(t.path),console.log(this.urlArray),this.$router.isBack?(this.transitionName="animate-out",this.$router.isBack=!1):this.transitionName="animate-in",e()},mounted:function(){}}},"8raj":function(t,a,e){var n=e("wPmz");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("6imX")("41d20b8e",n,!0)},Xk10:function(t,a,e){"use strict";function n(t){e("8raj")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("/3dO"),r=e("uwGg"),o=e("25r8"),s=n,u=o(i.a,r.a,s,null,null);a.default=u.exports},uwGg:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[e("keep-alive",{attrs:{include:"home"}},[e("router-view")],1)],1)],1)},i=[],r={render:n,staticRenderFns:i};a.a=r},wPmz:function(t,a,e){a=t.exports=e("bKW+")(!1),a.push([t.i,".animate-in-enter-active,.animate-in-leave-active,.animate-out-enter-active,.animate-out-leave-active{-webkit-transition:all .2s ease;transition:all .2s ease}.animate-in-enter,.animate-out-leave-to{-webkit-transform:translateX(10%);transform:translateX(10%);opacity:0}.animate-in-leave-to,.animate-out-enter{-webkit-transform:translateX(-10%);transform:translateX(-10%);opacity:0}",""])}});