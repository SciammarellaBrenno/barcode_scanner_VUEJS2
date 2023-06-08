(function(){"use strict";var e={328:function(e,n,t){t.r(n);var o=t(144),r=t(382);o.ZP.component("barcode-scanner",r.w),o.ZP.component("image-scanner",r.l)},813:function(e,n,t){var o=t(144),r=function(){var e=this,n=e._self._c;return n("router-view")},i=[],c=t(1),a={},s=(0,c.Z)(a,r,i,!1,null,null,null),l=s.exports,u=t(205);(0,u.z)("/barcode_scanner_VUEJS2/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=t(345),d=function(){var e=this,n=e._self._c;e._self._setupProxy;return n("div",{staticStyle:{padding:"10px"}},[e._m(0),n("div",{staticStyle:{margin:"20px 0px 20px 0px",display:"flex","flex-direction":"column","align-items":"flex-start","justify-content":"flex-start"}},[n("span",[e._v("Image Scanner")]),n("image-scanner",{on:{load:function(n){return e.onLoad(n)},decode:function(n){return e.onDecode(n)},result:function(n){return e.onResult(n)},error:function(n){return e.onError(n)}}})],1),n("div",{staticStyle:{margin:"20px 0px 20px 0px",display:"flex","flex-direction":"column","align-items":"flex-start","justify-content":"flex-start"}},[n("span",[e._v("Photo Scanner")]),n("input",{attrs:{type:"button",value:"Scanear"},on:{click:function(n){e.scanPhoto=!0}}}),e.scanPhoto?n("barcode-scanner",{on:{load:function(n){return e.onLoad(n)},decode:function(n){return e.onDecode(n)},result:function(n){return e.onResult(n)},error:function(n){return e.onError(n)}}}):e._e()],1),n("div",{staticStyle:{margin:"20px 0px 20px 0px",display:"flex","flex-direction":"column","align-items":"flex-start","justify-content":"flex-start"}},[n("span",[e._v("Scan: "+e._s(e.codigoScan))])]),n("div",{staticStyle:{margin:"20px 0px 20px 0px",display:"flex","align-items":"center","justify-content":"center"}},[n("input",{attrs:{type:"button",value:"Resetar"},on:{click:function(n){return e.Resetar()}}})])])},p=[function(){var e=this,n=e._self._c;e._self._setupProxy;return n("div",{staticStyle:{margin:"20px 0px 25px 0px",display:"flex","flex-direction":"column","align-items":"center","justify-content":"flex-start"}},[n("span",{staticStyle:{"font-size":"26px"}},[e._v("CODE SCANNER")])])}],g=t(327),v=t(929),x=function(e,n,t,o){var r,i=arguments.length,c=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(n,t,c):r(n,t))||c);return i>3&&c&&Object.defineProperty(n,t,c),c};let h=class extends v.w3{constructor(...e){super(...e),(0,g.Z)(this,"codigoScan",""),(0,g.Z)(this,"scanPhoto",!1)}mounted(){this.codigoScan=""}onLoad(e){this.codigoScan="LOAD: "+e}onDecode(e){this.codigoScan="DECODE: "+e,this.scanPhoto=!1}onResult(e){this.codigoScan="RESULT: "+e}onError(e){this.codigoScan="ERROR: "+e}Resetar(){this.scanPhoto=!1,this.codigoScan=""}};h=x([v.wA],h);var y=h,m=y,b=(0,c.Z)(m,d,p,!1,null,null,null),S=b.exports;o.ZP.use(f.ZP);const _=[{path:"/",name:"home",component:S}],w=new f.ZP({mode:"history",base:"/barcode_scanner_VUEJS2/",routes:_});var P=w;o.ZP.config.productionTip=!1,t(328),new o.ZP({router:P,render:e=>e(l)}).$mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var c=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<c&&(c=i));if(a){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,c=o[0],a=o[1],s=o[2],l=0;if(c.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var u=s(t)}for(n&&n(o);l<c.length;l++)i=c[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkbarcode_scanner"]=self["webpackChunkbarcode_scanner"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(813)}));o=t.O(o)})();
//# sourceMappingURL=app.d11aeab4.js.map