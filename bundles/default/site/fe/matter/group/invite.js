!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=160)}({0:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),t.push(a))}},t}},1:function(e,t,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(m(r.parts[s],t))}else{for(var a=[];s<r.parts.length;s++)a.push(m(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function m(e,t){var n,r,i;if(t.singleton){var o=g++;n=h||(h=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e,t);return c(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o],u=i[s.id];u&&(u.refs--,r.push(u))}e&&c(a(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},10:function(e,t,n){"use strict";angular.module("trace.ui.xxt",["http.ui.xxt"]).directive("tmsTrace",["$q","$timeout","http2",function(e,t,n){var r,i,o,s="/xxt/site/matter/enroll/trace",a=function(e,t,n,r,i){this.type=t,this.elapse=n||1*new Date-e,this.biz=r,i&&(this.text=i)},c=function(){function e(e){var t,n;e.sendUrl&&(t=window.localStorage)&&((n=(n=t.getItem(s))?JSON.parse(n):{})[e.sendUrl]=e,t.setItem(s,JSON.stringify(n)))}this.start=0,this.events=[],this.setSendUrl=function(t){this.sendUrl=t,e(this)},this.pushEvent=function(t,n,r){var i,o;0===this.events.length?(this.start=1*new Date,i=new a(this.start,t,0,n,r),this.events.push(i),e(this)):(i=new a(this.start,t,null,n,r),((o=this.events[this.events.length-1]).type!==i.type||i.elapse-o.elapse>1e3)&&(this.events.push(i),e(this)))},this.stop=function(){this.closing="Y",e(this),this.start=0,this.events=[]}},u=function(e){var r;this.begin=function(){this.cancel(r),r=t((function(){var t,r,i;e.stop(),e.sendUrl&&(t=window.localStorage)&&(r=t.getItem(s),i=(r=JSON.parse(r))[e.sendUrl],delete r[e.sendUrl],r=t.setItem(s,JSON.stringify(r)),n.post(e.sendUrl,{start:i.start,events:i.events},{showProgress:!1}))}),5e3)},this.cancel=function(){r&&(t.cancel(r),r=null)}};if((r=window.localStorage)&&(i=(i=r.getItem(s))?JSON.parse(i):{}))for(var l in i)i&&i[l]&&(o=i[l]).closing&&"Y"===o.closing&&(delete i[l],i=r.setItem(s,JSON.stringify(i)),n.post(o.sendUrl,{start:o.start,events:o.events}).then((function(){})));return{restrict:"A",link:function(e,n,r){var i=new c,o=new u(i);!r.readySign&&r.sendUrl&&(i.sendUrl=r.sendUrl),i.pushEvent("load"),n.on("click",(function(e){var t,n,r;(t=e.target).hasAttribute("trace-biz")&&(!(n=t.getAttribute("trace-biz"))&&t.hasAttribute("ng-click")&&(n=t.getAttribute("ng-click")),n&&(n=n.replace(/'|"/g,"")),r=t.innerText),i.pushEvent("click",n,r),o.begin()})),n.on("touchend",(function(e){i.pushEvent("touchend"),o.begin()})),window.addEventListener("scroll",(function(e){i.pushEvent("scroll"),o.begin()})),window.addEventListener("beforeunload",(function(e){i.pushEvent("beforeunload"),i.stop(),o.cancel()})),r.readySign&&e.$watch(r.readySign,(function(e){e&&t((function(){i.setSendUrl(r.sendUrl)}))})),o.begin()}}}])},160:function(e,t,n){e.exports=n(161)},161:function(e,t,n){"use strict";n(51).controller("ctrlInvite",["$scope","tmsLocation","facGroupApp","facGroupTeam",function(e,t,n,r){e.accept=function(){r.join(e.member).then((function(){location.href="/rest/site/fe/matter/group/team/home?"+t.s("site","app","team")}))},e.member={},n.get().then((function(t){e.app=t,e.schemas=t.dataSchemas,r.get().then((function(t){e.team=t}))}))}])},2:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",["ng"]);r.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],r=0,i=arguments.length;r<i;r++)n.push(arguments[r]+"="+(e[arguments[r]]||""));return n.join("&")}return e},j:function(n){var r=e,i=[];n&&n.length&&(r+="/"+n);for(var o=1,s=arguments.length;o<s;o++)i.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return i.length&&(r+="?"+i.join("&")),r},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,i,o){function s(t,n,r){var s;return i.trustAsHtml(t),(s=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||s[0].addEventListener("click",(function(){document.body.removeChild(s[0])}),!0),o(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,i){var o,u,l=r.defer();return!0===(i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i)).showProgress&&(u=n((function(){u=null,o=s(i.showProgressText,"info")}),i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success((function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(u&&n.cancel(u),o&&(a(o),o=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&s(e,"warning"),i.autoBreak)return;l.reject(e)}else if(e.err_code&&0!=e.err_code){if(i.autoNotice)s(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(i.autoBreak)return;l.reject(e)}else l.resolve(e);else l.resolve(e)})).error((function(e,t){!0===i.showProgress&&(u&&n.cancel(u),o&&(a(o),o=null)),s(null===e?"网络不可用":e,"danger")})),l.promise},this.post=function(e,i,o){var u,l,d=r.defer();return!0===(o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o)).showProgress&&(l=n((function(){l=null,u=s(o.showProgressText,"info")}),o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,i,o).success((function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(l&&n.cancel(l),u&&(a(u),u=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(s(e,"warning"),u=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice)s(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===o.showProgress&&(l&&n.cancel(l),u&&(a(u),u=null)),s(null===e?"网络不可用":e,"danger")})),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,r){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var i=0,o=n.length;i<o;i++)i<t.length?e(t[i],n[i],r):t.push(n[i])}else if(angular.isObject(t)){for(var s in t)r&&-1!==r.indexOf(s)||(void 0===n[s]?delete t[s]:angular.isObject(n[s])&&angular.isObject(t[s])?e(t[s],n[s],r):t[s]=n[s]);for(var s in n)r&&-1!==r.indexOf(s)||void 0===t[s]&&(t[s]=n[s])}}else t=n;return!0}}(e,t,n)}}])},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this,script;(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)?/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img):/MicroMessenger/i.test(navigator.userAgent)?(script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){var signPackage;if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400)try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready((function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0})),wx.error((function(e){alert(JSON.stringify(e))})))}catch(e){alert("local error:"+e.toString())}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},5:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var r="tmsbox"+1*new Date,i={type:"",timer:null},o=function(e,t){var n;return null===(n=document.querySelector("#"+r))?((n=document.createElement("div")).setAttribute("id",r),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),i.type=e):(i.type!==e&&(n.classList.remove("alert-"+e),i.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+r))&&document.body.removeChild(e)},this.error=function(t){var n,r;i.timer&&(e.cancel(i.timer),i.timer=null),n=o("danger",t),(r=document.createElement("button")).classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",(function(){document.body.removeChild(n)}))},this.warn=function(t){var n,r;i.timer&&(e.cancel(i.timer),i.timer=null),n=o("warning",t),(r=document.createElement("button")).classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",(function(){document.body.removeChild(n)}))},this.success=function(t){var n;i.timer&&e.cancel(i.timer),n=o("success",t),i.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null}),2e3)},this.info=function(t){var n;i.timer&&e.cancel(i.timer),n=o("info",t),i.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null}),2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(r,s){var a,c,u,l;return a=n.defer(),i.timer&&(e.cancel(i.timer),i.timer=null),c=o("warning",r),s&&s.length?s.forEach((function(n){if((u=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),u.innerHTML=n.label,c.appendChild(u,c.childNodes[0]),u.addEventListener("click",(function(){document.body.removeChild(c),a.resolve(n.value)})),n.execWait){var r=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=r,u.appendChild(o),l=t((function(){r<=0?(t.cancel(l),l=null):o.innerHTML=--r}),500),i.timer=e((function(){c.parentNode&&c.parentNode===document.body&&document.body.removeChild(c),i.timer=null,a.resolve(n.value)}),n.execWait)}})):((u=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),u.innerHTML="是",c.appendChild(u,c.childNodes[0]),u.addEventListener("click",(function(){document.body.removeChild(c),a.resolve()})),(u=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),u.innerHTML="否",c.appendChild(u,c.childNodes[0]),u.addEventListener("click",(function(){document.body.removeChild(c),a.reject()}))),a.promise}}])},51:function(e,t,n){"use strict";n(52),n(4),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready((function(){window.wx.showOptionMenu()})),n(10),n(5),n(2),n(6);var r=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","trace.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach((function(e){r.push(e)}));var i=angular.module("app",r);i.config(["$locationProvider","$uibTooltipProvider",function(e,t){e.html5Mode(!0),t.setTriggers({show:"hide"})}]),i.factory("facGroupApp",["$q","http2","tmsLocation",function(e,t,n){var r={get:function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/get?"+n.s("site","app")).then((function(e){r.resolve(e.data)})),r.promise}};return r}]),i.factory("facGroupTeam",["$q","http2","tmsLocation",function(e,t,n){var r={get:function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/get?"+n.s("site","app","team")).then((function(e){r.resolve(e.data)})),r.promise},list:function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/list?"+n.s("site","app")).then((function(e){r.resolve(e.data)})),r.promise},create:function(r,i){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/team/add?"+n.s("site","app"),{team:r,member:i}).then((function(e){o.resolve(e.data)})),o.promise},update:function(r){var i;return i=e.defer(),t.post("/rest/site/fe/matter/group/team/update?"+n.s("site","app","team"),r).then((function(e){i.resolve(e.data)})),i.promise},join:function(r){var i;return i=e.defer(),t.post("/rest/site/fe/matter/group/invite/join?"+n.s("site","app","team"),r).then((function(e){i.resolve(e.data)})),i.promise},quit:function(r){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/team/quit?"+n.s("site","app","team")+"&ek="+r.enroll_key).then((function(e){i.resolve(e.data)})),i.promise}};return r}]),i.factory("facGroupRecord",["$q","http2","tmsLocation",function(e,t,n){var r={list:function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/record/list?"+n.s("site","app","team")).then((function(e){r.resolve(e.data)})),r.promise}};return r}]),i.factory("facGroupUser",["$q","http2","tmsLocation",function(e,t,n){var r={get:function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/user/get?"+n.s("site","app")).then((function(e){var t,n=e.data;n&&(t={teams:[]},n.records&&n.records.length&&n.records.forEach((function(e){t[e.team_id]=e,t.teams.push(e.team_id)})),n.records=t),r.resolve(n)})),r.promise}};return r}]),i.controller("ctrlBase",["$scope","$q","$parse","http2","$timeout","tmsLocation","tmsSnsShare","tmsSiteUser",function(e,t,n,r,i,o,s,a){var c;e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0),(c=document.querySelector(".loading"))&&c.parentNode.removeChild(c)}]),e.exports=i},52:function(e,t,n){var r=n(53);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(1)(r,i);r.locals&&(e.exports=r.locals)},53:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"body{font-family:'Microsoft Yahei',Arial}.app-pic>div{width:100%;height:0;padding-bottom:56%;background-size:contain;background-repeat:no-repeat;background-position:center}",""])},6:function(e,t,n){"use strict";angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",(function(){this.showSwitch=function(e,t){var n;(n=document.createElement("div")).classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",(function(n){n.preventDefault(),n.stopPropagation();var r,i,o,s,a,c=location.protocol+"//"+location.host;c+="/rest/site/fe/user",c+="?site="+e,t?location.href=c:(r=c,o=document.createDocumentFragment(),(s=document.createElement("div")).setAttribute("id","frmPlugin"),a=document.createElement("iframe"),s.appendChild(a),s.onclick=function(){s.parentNode.removeChild(s)},o.appendChild(s),document.body.appendChild(o),0===r.indexOf("http")?(window.onClosePlugin=function(){s.parentNode.removeChild(s),i&&i()},a.setAttribute("src",r)):a.contentDocument&&a.contentDocument.body&&(a.contentDocument.body.innerHTML=r))}),!0),document.body.appendChild(n)}}))}});