var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=65)}({5:function(t,n){t.exports=window.wp.apiFetch},65:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r);function i(){var t="1"===window.doNotTrack||"yes"===navigator.doNotTrack||"1"===navigator.doNotTrack;return!!(ABTestingForWP&&ABTestingForWP.notAdmin&&t)}var a=function(){if(!i())for(var t=document.getElementsByClassName("ABTestWrapper"),n=function(n){var e=t[n],r=e.getAttribute("data-test")||"";o()({path:"ab-testing-for-wp/v1/ab-test?test=".concat(r)}).then((function(t){t.html&&(e.innerHTML=t.html)}))},e=0;e<t.length;e+=1)n(e)};function u(t){return function(n){if(navigator.sendBeacon&&ABTestingForWP.restUrl){var e=t(n.target);e&&navigator.sendBeacon("".concat(ABTestingForWP.restUrl,"ab-testing-for-wp/v1/outbound"),JSON.stringify({url:e}))}}}var c=function(){i()||(window.addEventListener("click",u((function(t){if(t&&t.href)return t.href}))),window.addEventListener("submit",u((function(t){if(t&&t.action)return t.action}))),ABTestingForWP.postId&&o()({path:"ab-testing-for-wp/v1/track?post=".concat(ABTestingForWP.postId)}))};document.addEventListener("DOMContentLoaded",(function(){a(),c()}))}});
}
/*
     FILE ARCHIVED ON 13:37:01 Jun 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:40:01 Dec 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.829
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.088
  esindex: 0.011
  cdx.remote: 20.068
  LoadShardBlock: 263.504 (3)
  PetaboxLoader3.resolve: 304.75 (4)
  PetaboxLoader3.datanode: 166.882 (5)
  load_resource: 295.615 (2)
*/