!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=114)}({0:function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:h(p,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function g(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=f||(f=c(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(t),o=g.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},1:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},114:function(e,t,n){e.exports=n(115)},115:function(e,t,n){"use strict";n(7),n(116),n(2),n(3),n(9);var o=angular.module("app",["ngSanitize","http.ui.xxt","page.ui.xxt","directive.enroll"]);o.config(["$locationProvider",function(e){e.html5Mode(!0)}]),o.controller("ctrlMain",["$scope","http2","$timeout","tmsLocation","tmsDynaPage",function(e,t,n,r,i){function a(){var a=r.j("get","site","app","ek","openAt","page");t.get(a,{autoBreak:!1}).then((function(t){var r,a=t.data,s=a.site,l=a.app,c=a.mission;e.schemasById={},l.dataSchemass&&l.dataSchemas.forEach((function(t){e.schemasById[t.id]=t})),e.params=a,e.site=s,e.mission=c,e.app=l,e.user=a.user,e.activeRound=l.appRound,"Y"===l.use_site_header&&s&&s.header_page&&i.loadCode(o,s.header_page),"Y"===l.use_mission_header&&c&&c.header_page&&i.loadCode(o,c.header_page),"Y"===l.use_mission_footer&&c&&c.footer_page&&i.loadCode(o,c.footer_page),"Y"===l.use_site_footer&&s&&s.footer_page&&i.loadCode(o,s.footer_page),i.loadCode(o,a.page).then((function(){e.page=a.page})),n((function(){e.$broadcast("xxt.app.enroll.ready",a)})),(r=document.querySelector(".loading"))&&r.parentNode.removeChild(r)}),(function(){var e;(e=document.querySelector(".loading"))&&e.parentNode.removeChild(e)}))}window.gotoPage=function(t){var n;"$digest"===(n=e.$root.$$phase)||"$apply"===n?a():e.$apply((function(){a()}))},e.closeWindow=function(){},e.addRecord=function(t,n){n?e.gotoPage(t,n,null,null,"Y"):alert("没有指定登记编辑页")},e.gotoPage=function(e,t,n,o,i){e.preventDefault(),e.stopPropagation();var a=r.j("","site","app");null!=n&&n.length&&(a+="&ek="+n),null!=o&&o.length&&(a+="&rid="+o),null!=t&&t.length&&(a+="&page="+t),void 0!==i&&"Y"===i&&(a+="&newRecord=Y"),location.replace(a)},e.openMatter=function(e,t,n,o){var i="/rest/site/fe/matter?site="+r.s().site+"&id="+e+"&type="+t;n?location.replace(i):!1===o?location.href=i:window.open(i)},a()}]),o.service("srvStorage",["tmsLocation",function(e){var t;(t=window.localStorage.getItem("enroll-preview"))?t=JSON.parse(t):(t={records:{}},window.localStorage.setItem("enroll-preview",JSON.stringify(t))),this.getRecord=function(e){return t.records[e]},this.addRecord=function(e){var n="ek"+1*new Date;return t.records[n]={enroll_key:n,enroll_at:Math.round(1*new Date/1e3),data:e},window.localStorage.setItem("enroll-preview",JSON.stringify(t)),n},this.clean=function(){window.localStorage.removeItem("enroll-preview")}}]),o.service("Record",["srvStorage",function(e){this.current={},this.get=function(t){this.current=e.getRecord(t)||{enroll_at:Math.floor(new Date/1e3)}}}]),o.controller("ctrlRecord",["$scope","Record","tmsLocation","$sce",function(e,t,n,o){var r=e.app._schemasById;t.get(n.s().ek),e.Record=t,e.value2Label=function(e){var n,o,i="",a=[];return r&&t.current.data&&(i=t.current.data[e])&&(n=r[e])&&n.ops&&n.ops.length&&(o=i.split(","),n.ops.forEach((function(e,t){-1!==o.indexOf(n.ops[t].v)&&a.push(n.ops[t].l)})),a.length&&(i=a.join(","))),i},e.score2Html=function(e){var n,i="",a=r[e];return a&&t.current.data&&(n=t.current.data[e])&&a.ops&&a.ops.length&&a.ops.forEach((function(e,t){i+="<div>"+e.l+": "+n[e.v]+"</div>"})),o.trustAsHtml(i)}}]),o.controller("ctrlRecords",[function(){}]),o.controller("ctrlRounds",[function(){}]),o.controller("ctrlOwnerOptions",[function(){}]),o.controller("ctrlStatistic",[function(){}]),o.controller("ctrlPreview",["$scope","tmsLocation","srvStorage",function(e,t,n){var o,r;e.data={},"Y"===t.s().start&&n.clean(),t.s().ek&&(o=t.s().ek,r=n.getRecord(o),angular.extend(e.data,r.data)),e.score=function(t,n,o){var r=e.schemasById[t],i=r.ops[n];void 0===e.data[t]&&(e.data[t]={},r.ops.forEach((function(t){e.data[r.id][t.v]=0}))),e.data[t][i.v]=o},e.lessScore=function(t,n,o){var r,i;return!!e.schemasById&&(!!(r=e.schemasById[t])&&(void 0!==e.data[t]&&(i=r.ops[n],e.data[t][i.v]>=o)))},e.submit=function(o,r){var i,a,s;s=angular.copy(e.data),e.app.dataSchemas((function(e){switch(e.type){case"multiple":var t=s[e.id],n=[];if(angular.isObject(t)){for(var o in t)n.push(o);s[e.id]=n.join(",")}}})),a=n.addRecord(e.data),void 0!==r&&r.length&&(i=t.j("","site","app"),i+="&page="+r,i+="&ek="+a,location.replace(i))},e.editRecord=function(e,n){var o;void 0!==n&&n.length&&(o=t.j("","site","app"),o+="&page="+n,o+="&ek="+t.s().ek,location.replace(o))}}])},116:function(e,t,n){var o=n(0),r=n(117);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},117:function(e,t,n){(t=n(1)(!1)).push([e.i,".ng-cloak{display:none;}\nhtml,body{min-height:100%;width:100%;background:#efefef;font-family:Microsoft Yahei,Arial;}\nbody{position:relative;font-size:16px;padding-top:60px;padding-bottom:60px;}\n.app{padding:15px 0;}\nul{margin:0;padding:0;list-style:none}\nli{margin:0;padding:0}\n#errmsg{display:block;opacity:0;height:0;overflow:hidden;width:300px;position:fixed;top:0;left:50%;margin:0 0 0 -150px;text-align:center;transition:opacity 1s;z-index:-1;word-break:break-all}\n#errmsg.active{opacity:1;height:auto;z-index:999}\n\n/* score schema */\nli[wrap=score]{padding:4px 4px 4px 0;}\nli[wrap=score] label{padding:3px;font-weight:400;}\nli[wrap=score]>.number{display:inline-block;margin-top:6px;border:1px solid #CCC;}\nli[wrap=score]>.number>div{display:inline-block;width:48px;padding:4px 4px;margin:4px 4px;text-align:center;border-bottom:1px dotted #ddd}\nli[wrap=score]>.number>.in{background:#33bb99;}\n\n/* img tiles */\nul.img-tiles li{position:relative;display:inline-block;overflow:hidden;width:80px;height:80px;margin:4px;float:left}\nul.img-tiles li.img-thumbnail img{display:inline-block;position:absolute;max-width:none;}\nul.img-tiles li.img-thumbnail button{position:absolute;top:0;right:0}\nul.img-tiles li.img-picker button{position:auto;width:100%;height:100%}\nul.img-tiles li.img-picker button span{font-size:36px}\n\n/* default form style*/\ndiv[wrap].wrap-splitline{padding-bottom:0.5em;border-bottom:1px solid #fff;}\ndiv[wrap].wrap-inline>*{display:inline-block;vertical-align:middle;margin:0 1em 0 0;}\ndiv[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}\n\n/*list*/\nli .wrap-inline>label{padding:7px 0;color:#444;}\nli .wrap-inline{border-bottom:1px dashed #efefef;}\nli .wrap-inline:last-child{border-bottom:0;}\n",""]),e.exports=t},2:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",["ng"]);o.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],o=0,r=arguments.length;o<r;o++)n.push(arguments[o]+"="+(e[arguments[o]]||""));return n.join("&")}return e},j:function(n){var o=e,r=[];n&&n.length&&(o+="/"+n);for(var i=1,a=arguments.length;i<a;i++)r.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return r.length&&(o+="?"+r.join("&")),o},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,r,i){function a(t,n,o){var a;return r.trustAsHtml(t),(a=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||a[0].addEventListener("click",(function(){document.body.removeChild(a[0])}),!0),i(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,r){var i,c,d=o.defer();return!0===(r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r)).showProgress&&(c=n((function(){c=null,i=a(r.showProgressText,"info")}),r.showProgressDelay)),l(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success((function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;d.reject(e)}else if(e.err_code&&0!=e.err_code){if(r.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(r.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===r.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),a(null===e?"网络不可用":e,"danger")})),d.promise},this.post=function(e,r,i){var c,d,u=o.defer();return!0===(i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i)).showProgress&&(d=n((function(){d=null,c=a(i.showProgressText,"info")}),i.showProgressDelay)),l(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,r,i).success((function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(a(e,"warning"),c=null),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")})),u.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,o){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var r=0,i=n.length;r<i;r++)r<t.length?e(t[r],n[r],o):t.push(n[r])}else if(angular.isObject(t)){for(var a in t)o&&-1!==o.indexOf(a)||(void 0===n[a]?delete t[a]:angular.isObject(n[a])&&angular.isObject(t[a])?e(t[a],n[a],o):t[a]=n[a]);for(var a in n)o&&-1!==o.indexOf(a)||void 0===t[a]&&(t[a]=n[a])}}else t=n;return!0}}(e,t,n)}}])},3:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,(function(o){o&&o.length&&(n.html(o),e(n.contents())(t))}))}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t;(t=document.createElement("style")).innerHTML=e,document.querySelector("head").appendChild(t)},this.loadExtCss=function(e){var t;(t=document.createElement("link")).href=e,t.rel="stylesheet",document.querySelector("head").appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;(r=document.createElement("script")).src=e[t],r.onload=function(){++t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var a;(a=document.createElement("script")).src=n.url,a.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach((function(e){n.loadExtCss(e.url)})),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then((function(){o.resolve()})):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i;return i=$q.defer(),e||(console.log("参数为空"),i.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,r=document.getElementsByTagName("body")[0],document.getElementsByTagName("html")[0].style.cssText="height:100%;",r.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),(n=document.createElement("div")).setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",i.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),i.promise}}])},7:function(e,t,n){var o=n(0),r=n(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},8:function(e,t,n){(t=n(1)(!1)).push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:1060}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-header{padding:15px 15px 0 15px}.dialog .dlg-body{padding:15px 15px 0 15px}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}.tms-act-toggle{position:fixed;right:15px;bottom:8px;width:48px;height:48px;line-height:48px;box-shadow:0 2px 6px rgba(18,27,32,.425);color:#fff;background:#ff8018;border:1px solid #ff8018;border-radius:24px;font-size:20px;text-align:center;cursor:pointer;z-index:1045}.tms-nav-target>*+*{margin-top:.5em}.tms-act-popover-wrap>div+div{margin-top:8px}#frmPlugin{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;z-index:1060;box-sizing:border-box;padding-bottom:48px;background:#fff}#frmPlugin iframe{width:100%;height:100%;border:0}#frmPlugin:after{content:'关闭';position:absolute;width:100px;text-align:center;left:50%;margin-left:-50px;bottom:4px;padding:5px 6px 3px;border:1px solid #ccc;border-radius:4px}div[wrap]>.description{word-wrap:break-word}",""]),e.exports=t},9:function(e,t,n){"use strict";window.__util={},window.__util.makeDialog=function(e,t){var n,o;return(o=document.createElement("div")).setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.enroll",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;(t=new Date).setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,n,o){var r,i,a;void 0===t.value&&(t.value=1*new Date/1e3),(i=new Date).setTime(1e3*t.value),t.options={years:[2018,2019,2020,2021,2022,2023,2024,2025],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(i.getMinutes()/5),t.data={year:i.getFullYear(),month:i.getMonth()+1,date:i.getDate(),hour:i.getHours(),minute:a},-1===t.options.minutes.indexOf(a)&&t.options.minutes.push(a),r=function(n){var o,r;(n.preventDefault(),n.stopPropagation(),t.opened)||(r="_dlg-"+1*new Date,o={header:"",body:'<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div><div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div><div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div><div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div><div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},o=__util.makeDialog(r,o),t.opened=!0,t.dialogID=r,e(o)(t))},n[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),o.directive("flexImg",(function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",(function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))}))}}})),o.directive("tmsHideParentHeight",(function(){return{restrict:"A",link:function(e,t,n){var o,r;if(n.tmsHideParentHeight){o=n.tmsHideParentHeight;for(var i=0,a=t.length;i<a;i++)(r=t[i]).parentElement&&window.addEventListener("resize",(function(){r.classList.toggle("hidden",r.parentElement.clientHeight<o)}))}}}})),o.directive("tmsScrollSpy",(function(){return{restrict:"A",scope:{selector:"@selector",offset:"@",onbottom:"&",toggleSpy:"="},link:function(e,t,n){var o="window"===e.selector?window:document.querySelector(e.selector);o.addEventListener("scroll",(function(t){var n=o===window?t.target.documentElement:t.target;e.toggleSpy&&e.onbottom&&angular.isFunction(e.onbottom)&&n.clientHeight+n.scrollTop+parseInt(e.offset)>=n.scrollHeight&&e.$apply((function(){e.toggleSpy=!1,e.onbottom()}))}))}}}))}});