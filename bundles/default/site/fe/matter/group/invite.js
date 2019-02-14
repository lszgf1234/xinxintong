!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=154)}({11:function(e,t,n){"use strict";angular.module("trace.ui.xxt",["http.ui.xxt"]).directive("tmsTrace",["$q","$timeout","http2",function(e,t,n){var r,i,o,s="/xxt/site/matter/enroll/trace",a=function(e,t,n,r,i){this.type=t,this.elapse=n||1*new Date-e,this.biz=r,i&&(this.text=i)},c=function(){function e(e){var t,n;e.sendUrl&&(t=window.localStorage)&&(n=t.getItem(s),n=n?JSON.parse(n):{},n[e.sendUrl]=e,t.setItem(s,JSON.stringify(n)))}this.start=0,this.events=[],this.setSendUrl=function(t){this.sendUrl=t,e(this)},this.pushEvent=function(t,n,r){var i,o;0===this.events.length?(this.start=1*new Date,i=new a(this.start,t,0,n,r),this.events.push(i),e(this)):(i=new a(this.start,t,null,n,r),o=this.events[this.events.length-1],(o.type!==i.type||i.elapse-o.elapse>1e3)&&(this.events.push(i),e(this)))},this.stop=function(){this.closing="Y",e(this),this.start=0,this.events=[]}},u=function(e){var r;this.begin=function(){this.cancel(r),r=t(function(){var t,r,i;e.stop(),e.sendUrl&&(t=window.localStorage)&&(r=t.getItem(s),r=JSON.parse(r),i=r[e.sendUrl],delete r[e.sendUrl],r=t.setItem(s,JSON.stringify(r)),n.post(e.sendUrl,{start:i.start,events:i.events},{showProgress:!1}))},5e3)},this.cancel=function(){r&&(t.cancel(r),r=null)}};if((r=window.localStorage)&&(i=r.getItem(s),i=i?JSON.parse(i):{}))for(var l in i)i&&i[l]&&(o=i[l],o.closing&&"Y"===o.closing&&(delete i[l],i=r.setItem(s,JSON.stringify(i)),n.post(o.sendUrl,{start:o.start,events:o.events}).then(function(){})));return{restrict:"A",link:function(e,n,r){var i=new c,o=new u(i);!r.readySign&&r.sendUrl&&(i.sendUrl=r.sendUrl),i.pushEvent("load"),n.on("click",function(e){var t,n,r;t=e.target,t.hasAttribute("trace-biz")&&(n=t.getAttribute("trace-biz"),!n&&t.hasAttribute("ng-click")&&(n=t.getAttribute("ng-click")),n&&(n=n.replace(/'|"/g,"")),r=t.innerText),i.pushEvent("click",n,r),o.begin()}),n.on("touchend",function(e){i.pushEvent("touchend"),o.begin()}),window.addEventListener("scroll",function(e){i.pushEvent("scroll"),o.begin()}),window.addEventListener("beforeunload",function(e){i.pushEvent("beforeunload"),i.stop(),o.cancel()}),r.readySign&&e.$watch(r.readySign,function(e){e&&t(function(){i.setSendUrl(r.sendUrl)})}),o.begin()}}}])},154:function(e,t,n){e.exports=n(81)},2:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",[]);r.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],r=0,i=arguments.length;r<i;r++)n.push(arguments[r]+"="+(e[arguments[r]]||""));return n.join("&")}return e},j:function(n){var r=e,i=[];n&&n.length&&(r+="/"+n);for(var o=1,s=arguments.length;o<s;o++)i.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return i.length&&(r+="?"+i.join("&")),r},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,i,o){function s(t,n,r){var s;return i.trustAsHtml(t),s=angular.element("<div></div>"),s.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||s[0].addEventListener("click",function(){document.body.removeChild(s[0])},!0),o(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function u(e,t,n){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var r=0,i=t.length;r<i;r++)r<e.length?u(e[r],t[r]):e.push(t[r])}else if(angular.isObject(e)){for(var o in e)n&&-1!==n.indexOf(o)||(void 0===t[o]?delete e[o]:angular.isObject(t[o])&&angular.isObject(e[o])?u(e[o],t[o]):e[o]=t[o]);for(var o in t)n&&-1!==n.indexOf(o)||void 0===e[o]&&(e[o]=t[o])}}else e=t;return!0}this.get=function(e,i){var o,u,l=r.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(u=n(function(){u=null,o=s(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(u&&n.cancel(u),o&&(a(o),o=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&s(e,"warning"),i.autoBreak)return;l.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(i.autoBreak)return;l.reject(e)}else l.resolve(e);else l.resolve(e)}).error(function(e,t){!0===i.showProgress&&(u&&n.cancel(u),o&&(a(o),o=null)),s(null===e?"网络不可用":e,"danger")}),l.promise},this.post=function(e,i,o){var u,l,d=r.defer();return o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(l=n(function(){l=null,u=s(o.showProgressText,"info")},o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,i,o).success(function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(l&&n.cancel(l),u&&(a(u),u=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(s(e,"warning"),u=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===o.showProgress&&(l&&n.cancel(l),u&&(a(u),u=null)),s(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&u(e,t,n)}}])},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},49:function(e,t,n){"use strict";n(4),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready(function(){window.wx.showOptionMenu()}),n(11),n(6),n(2),n(7);var r=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","trace.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach(function(e){r.push(e)});var i=angular.module("app",r);i.config(["$locationProvider","$uibTooltipProvider",function(e,t){e.html5Mode(!0),t.setTriggers({show:"hide"})}]),i.factory("facGroupApp",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/get?"+n.s("site","app")).then(function(e){r.resolve(e.data)}),r.promise},r}]),i.factory("facGroupTeam",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/get?"+n.s("site","app","team")).then(function(e){r.resolve(e.data)}),r.promise},r.list=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/list?"+n.s("site","app")).then(function(e){r.resolve(e.data)}),r.promise},r.create=function(){var r;return r=e.defer(),t.post("/rest/site/fe/matter/group/team/add?"+n.s("site","app"),{}).then(function(e){r.resolve(e.data)}),r.promise},r.update=function(r){var i;return i=e.defer(),t.post("/rest/site/fe/matter/group/team/update?"+n.s("site","app","team"),r).then(function(e){i.resolve(e.data)}),i.promise},r.join=function(){var r;return r=e.defer(),t.post("/rest/site/fe/matter/group/invite/join?"+n.s("site","app","team"),{}).then(function(e){r.resolve(e.data)}),r.promise},r}]),i.factory("facGroupRecord",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.list=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/record/list?"+n.s("site","app","team")).then(function(e){r.resolve(e.data)}),r.promise},r}]),i.controller("ctrlBase",["$scope","$q","$parse","http2","$timeout","tmsLocation","tmsSnsShare","tmsSiteUser",function(e,t,n,r,i,o,s,a){e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0);var c;(c=document.querySelector(".loading"))&&c.parentNode.removeChild(c)}]),e.exports=i},6:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var r="tmsbox"+1*new Date,i={type:"",timer:null},o=function(e,t){var n;return n=document.querySelector("#"+r),null===n?(n=document.createElement("div"),n.setAttribute("id",r),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),i.type=e):(i.type!==e&&(n.classList.remove("alert-"+e),i.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+r))&&document.body.removeChild(e)},this.error=function(t){var n,r;i.timer&&(e.cancel(i.timer),i.timer=null),n=o("danger",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,r;i.timer&&(e.cancel(i.timer),i.timer=null),n=o("warning",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;i.timer&&e.cancel(i.timer),n=o("success",t),i.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null},2e3)},this.info=function(t){var n;i.timer&&e.cancel(i.timer),n=o("info",t),i.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null},2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(r,s){var a,c,u;return a=n.defer(),i.timer&&(e.cancel(i.timer),i.timer=null),c=o("warning",r),s&&s.length?s.forEach(function(n){if(u=document.createElement("button"),u.classList.add("btn","btn-default","btn-sm"),u.innerHTML=n.label,c.appendChild(u,c.childNodes[0]),u.addEventListener("click",function(){document.body.removeChild(c),a.resolve(n.value)}),n.execWait){var r=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=r,u.appendChild(o),t(function(){o.innerHTML=--r},500),i.timer=e(function(){c.parentNode&&c.parentNode===document.body&&document.body.removeChild(c),i.timer=null,a.resolve(n.value)},n.execWait)}}):(u=document.createElement("button"),u.classList.add("btn","btn-default","btn-sm"),u.innerHTML="是",c.appendChild(u,c.childNodes[0]),u.addEventListener("click",function(){document.body.removeChild(c),a.resolve()}),u=document.createElement("button"),u.classList.add("btn","btn-default","btn-sm"),u.innerHTML="否",c.appendChild(u,c.childNodes[0]),u.addEventListener("click",function(){document.body.removeChild(c),a.reject()})),a.promise}}])},7:function(e,t,n){"use strict";function r(e,t){var n,r,i;n=document.createDocumentFragment(),r=document.createElement("div"),r.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),r.appendChild(i),r.onclick=function(){r.parentNode.removeChild(r)},n.appendChild(r),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){r.parentNode.removeChild(r),t&&t()},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e)}angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var i=location.protocol+"//"+location.host;i+="/rest/site/fe/user",i+="?site="+e,t?location.href=i:r(i)},!0),document.body.appendChild(n)}})},81:function(e,t,n){"use strict";n(49).controller("ctrlInvite",["$scope","tmsLocation","facGroupApp","facGroupTeam",function(e,t,n,r){e.accept=function(){r.join().then(function(){location.href="/rest/site/fe/matter/group/team/home?"+t.s("site","app","team")})},n.get().then(function(t){e.app=t,r.get().then(function(t){e.team=t})})}])}});