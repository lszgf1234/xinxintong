!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=154)}({0:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),t.push(a))}},t}},1:function(e,t,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(h(i.parts[s],t))}else{for(var a=[];s<i.parts.length;s++)a.push(h(i.parts[s],t));r[i.id]={id:i.id,refs:1,parts:a}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function h(e,t){var n,i,r;if(t.singleton){var o=g++;n=f||(f=l(t)),i=m.bind(null,n,o,!1),r=m.bind(null,n,o,!0)}else n=l(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e,t);return c(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o],l=r[s.id];l&&(l.refs--,i.push(l))}e&&c(a(e,t),t);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var m=0;m<d.parts.length;m++)d.parts[m]();delete r[d.id]}}}}},10:function(e,t,n){"use strict";angular.module("trace.ui.xxt",["http.ui.xxt"]).directive("tmsTrace",["$q","$timeout","http2",function(e,t,n){var i,r,o,s="/xxt/site/matter/enroll/trace",a=function(e,t,n,i,r){this.type=t,this.elapse=n||1*new Date-e,this.biz=i,r&&(this.text=r)},c=function(){function e(e){var t,n;e.sendUrl&&(t=window.localStorage)&&((n=(n=t.getItem(s))?JSON.parse(n):{})[e.sendUrl]=e,t.setItem(s,JSON.stringify(n)))}this.start=0,this.events=[],this.setSendUrl=function(t){this.sendUrl=t,e(this)},this.pushEvent=function(t,n,i){var r,o;0===this.events.length?(this.start=1*new Date,r=new a(this.start,t,0,n,i),this.events.push(r),e(this)):(r=new a(this.start,t,null,n,i),((o=this.events[this.events.length-1]).type!==r.type||r.elapse-o.elapse>1e3)&&(this.events.push(r),e(this)))},this.stop=function(){this.closing="Y",e(this),this.start=0,this.events=[]}},l=function(e){var i;this.begin=function(){this.cancel(i),i=t((function(){var t,i,r;e.stop(),e.sendUrl&&(t=window.localStorage)&&(i=t.getItem(s),r=(i=JSON.parse(i))[e.sendUrl],delete i[e.sendUrl],i=t.setItem(s,JSON.stringify(i)),n.post(e.sendUrl,{start:r.start,events:r.events},{showProgress:!1}))}),5e3)},this.cancel=function(){i&&(t.cancel(i),i=null)}};if((i=window.localStorage)&&(r=(r=i.getItem(s))?JSON.parse(r):{}))for(var u in r)r&&r[u]&&(o=r[u]).closing&&"Y"===o.closing&&(delete r[u],r=i.setItem(s,JSON.stringify(r)),n.post(o.sendUrl,{start:o.start,events:o.events}).then((function(){})));return{restrict:"A",link:function(e,n,i){var r=new c,o=new l(r);!i.readySign&&i.sendUrl&&(r.sendUrl=i.sendUrl),r.pushEvent("load"),n.on("click",(function(e){var t,n,i;(t=e.target).hasAttribute("trace-biz")&&(!(n=t.getAttribute("trace-biz"))&&t.hasAttribute("ng-click")&&(n=t.getAttribute("ng-click")),n&&(n=n.replace(/'|"/g,"")),i=t.innerText),r.pushEvent("click",n,i),o.begin()})),n.on("touchend",(function(e){r.pushEvent("touchend"),o.begin()})),window.addEventListener("scroll",(function(e){r.pushEvent("scroll"),o.begin()})),window.addEventListener("beforeunload",(function(e){r.pushEvent("beforeunload"),r.stop(),o.cancel()})),i.readySign&&e.$watch(i.readySign,(function(e){e&&t((function(){r.setSendUrl(i.sendUrl)}))})),o.begin()}}}])},154:function(e,t,n){e.exports=n(155)},155:function(e,t,n){"use strict";window.moduleAngularModules=["ngRoute"];var i=n(51);i.config(["$routeProvider",function(e){e.when("/rest/site/fe/matter/group/team/create",{template:n(156),controller:"ctrlTeamCreate"}).when("/rest/site/fe/matter/group/team/config",{template:n(157),controller:"ctrlTeamConfig"}).otherwise({template:n(158),controller:"ctrlTeamHome"})}]),i.controller("ctrlTeam",["$scope","tmsLocation","facGroupApp","facGroupUser",function(e,t,n,i){e.gotoHome=function(){location.href="/rest/site/fe/matter/group?"+t.s("site","app")},e.gotoTeamHome=function(){t.path("/rest/site/fe/matter/group/team/home")},n.get().then((function(t){e.app=t,e.schemas=t.dataSchemas,i.get().then((function(t){e.user=t}))}))}]),i.controller("ctrlTeamHome",["$scope","$uibModal","tmsLocation","facGroupTeam","facGroupRecord",function(e,t,i,r,o){e.config=function(){i.path("/rest/site/fe/matter/group/team/config")},e.invite=function(){t.open({template:n(159),controller:["$scope","$uibModalInstance","tmsLocation",function(e,t,n){e.close=function(){t.dismiss()},e.inviteUrl=location.protocol+"//"+location.host+"/rest/site/fe/matter/group/invite?"+n.s("site","app","team")}]})},e.quit=function(t){r.quit(t).then((function(){e.members.splice(e.members.indexOf(t),1)}))},r.get().then((function(t){e.team=t,o.list().then((function(t){e.members=t}))}))}]),i.controller("ctrlTeamCreate",["$scope","$location","facGroupTeam",function(e,t,n){e.submit=function(){n.create(e.team,e.member).then((function(n){t.search().team=n.team_id,e.gotoTeamHome()}))},e.team={},e.member={}}]),i.controller("ctrlTeamConfig",["$scope","$location","facGroupTeam",function(e,t,n){var i,r;r={},e.update=function(t){r[t]=e.team[t],e.modified=!0},e.submit=function(){Object.keys(r).length&&n.update(r).then((function(){e.modified=!1,r={}}))},e.modified=!1,n.get().then((function(t){i=t,e.team=angular.copy(i)}))}])},156:function(e,t){e.exports='<div class=col-md-12> <div class=form-group> <label>团队名称</label> <input type=text class=form-control ng-model=team.title> </div> <div class=form-group> <label>团队介绍</label> <textarea class=form-control ng-model=team.summary></textarea> </div> <section ng-if=schemas.length> <hr> <div class=form-group ng-repeat="schema in schemas" ng-switch on=schema.type> <label ng-bind=schema.title ng-if="schema.type!==\'html\'"></label> <input type=text class=form-control ng-model=member[schema.id] ng-switch-when=shorttext> <textarea class=form-control ng-model=member[schema.id] rows=3 ng-switch-when=longtext></textarea> <ul class=list-unstyled ng-switch-when=single> <li class=radio ng-repschemat="op in schema.ops"> <label> <input type=radio name="{{action.id+\'_\'+schema.id}}" value={{op.v}} ng-model=member[schema.id]><span>{{op.l}}</span></label> </li> </ul> <ul class=list-unstyled ng-switch-when=multiple> <li class=checkbox ng-repschemat="op in schema.ops"> <label> <input type=checkbox ng-model=member[schema.id][op.v]><span>{{op.l}}</span></label> </li> </ul> <div ng-switch-when=date tms-date=Y tms-date-value=member[schema.id]> <div ng-bind="member[schema.id]*1000|date:\'yy-MM-dd HH:mm\'" class=form-control></div> </div> <div tms-image-input=Y ng-switch-when=image> <ul class="img-tiles clschemarfix list-unstyled" name={{schema.id}}> <li wrap=img ng-repschemat="img in member[schema.id]" class=img-thumbnail> <img flex-img> <button class="btn btn-default btn-xs" ng-click=removeImage(schema,$index)><span class="glyphicon glyphicon-remove"></span></button> </li> <li class=img-picker> <button class="btn btn-default" ng-click=chooseImage(schema)><span class="glyphicon glyphicon-picture"></span> <br>选择图片</button> </li> </ul> </div> <div ng-switch-when=html> <div ng-bind-html=schema.content></div> </div> </div> </section> <button class="btn btn-default" ng-click=submit()>完成组建</button> </div>'},157:function(e,t){e.exports='<div class=col-md-12> <div class=form-group> <button class="btn btn-default" ng-click=gotoTeamHome()><span class="glyphicon glyphicon-arrow-left"></span> 返回</button> </div> <div class="panel panel-default"> <div class=panel-body> <div class=form-group> <label>团队名称</label> <input type=text class=form-control ng-model=team.title ng-change="update(\'title\')"> </div> <div class=form-group> <label>团队介绍</label> <textarea class=form-control ng-model=team.summary ng-change="update(\'summary\')"></textarea> </div> </div> </div> <button class=btn ng-class="modified?\'btn-success\':\'btn-default\'" ng-disabled=!modified ng-click=submit()>完成设置</button> </div>'},158:function(e,t){e.exports='<div class=col-md-12> <div class=form-group> <button class="btn btn-default" ng-click=gotoHome()><span class="glyphicon glyphicon-arrow-left"></span> 活动首页</button> <button class="btn btn-default" ng-click=config()><span class="glyphicon glyphicon-cog"></span> 团队设置</button> </div> <div class="panel panel-default"> <div class=panel-body> <div class=form-group> <label ng-bind=::team.title></label> </div> <div class=form-group> <div class=help-block ng-bind=::team.summary></div> </div> </div> </div> <div class="panel panel-default"> <div class=panel-heading>已有成员</div> <div class=panel-body> <div class=list-group> <div class=list-group-item ng-repeat="mem in members"> <span ng-bind=::mem.nickname></span><span ng-if="mem.is_leader===\'Y\'">（组长）</span><button ng-if="mem.is_leader===\'N\'&&user.records[team.team_id].is_leader===\'Y\'" class="btn btn-default btn-xs pull-right" ng-click=quit(mem)>移出</button> </div> </div> </div> </div> <div class=form-group> <button class="btn btn-default" ng-click=invite()><span class="glyphicon glyphicon-share-alt"></span> 发起邀请</button> </div> </div>'},159:function(e,t){e.exports='<div class=modal-header> <button class=close ng-click=close()>×</button> <h5 class=modal-title>邀请</h5> </div> <div class=modal-body> <div class=form-group> <div style=word-break:break-all ng-bind=::inviteUrl></div> </div> </div> <div class=modal-footer> <button class="btn btn-default" ng-click=close()>关闭</button> </div>'},2:function(e,t,n){"use strict";var i=angular.module("http.ui.xxt",["ng"]);i.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],i=0,r=arguments.length;i<r;i++)n.push(arguments[i]+"="+(e[arguments[i]]||""));return n.join("&")}return e},j:function(n){var i=e,r=[];n&&n.length&&(i+="/"+n);for(var o=1,s=arguments.length;o<s;o++)r.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return r.length&&(i+="?"+r.join("&")),i},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),i.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,i,r,o){function s(t,n,i){var s;return r.trustAsHtml(t),(s=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),i||s[0].addEventListener("click",(function(){document.body.removeChild(s[0])}),!0),o(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,r){var o,l,u=i.defer();return!0===(r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r)).showProgress&&(l=n((function(){l=null,o=s(r.showProgressText,"info")}),r.showProgressDelay)),c(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success((function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(l&&n.cancel(l),o&&(a(o),o=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&s(e,"warning"),r.autoBreak)return;u.reject(e)}else if(e.err_code&&0!=e.err_code){if(r.autoNotice)s(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(r.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===r.showProgress&&(l&&n.cancel(l),o&&(a(o),o=null)),s(null===e?"网络不可用":e,"danger")})),u.promise},this.post=function(e,r,o){var l,u,d=i.defer();return!0===(o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o)).showProgress&&(u=n((function(){u=null,l=s(o.showProgressText,"info")}),o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,r,o).success((function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(s(e,"warning"),l=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice)s(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===o.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),s(null===e?"网络不可用":e,"danger")})),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,i){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var r=0,o=n.length;r<o;r++)r<t.length?e(t[r],n[r],i):t.push(n[r])}else if(angular.isObject(t)){for(var s in t)i&&-1!==i.indexOf(s)||(void 0===n[s]?delete t[s]:angular.isObject(n[s])&&angular.isObject(t[s])?e(t[s],n[s],i):t[s]=n[s]);for(var s in n)i&&-1!==i.indexOf(s)||void 0===t[s]&&(t[s]=n[s])}}else t=n;return!0}}(e,t,n)}}])},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,i,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?n:e,link:t,imgUrl:i,success:function(){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,success:function(){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this,script;(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)?/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img):/MicroMessenger/i.test(navigator.userAgent)?(script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){var signPackage;if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400)try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready((function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0})),wx.error((function(e){alert(JSON.stringify(e))})))}catch(e){alert("local error:"+e.toString())}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},5:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var i="tmsbox"+1*new Date,r={type:"",timer:null},o=function(e,t){var n;return null===(n=document.querySelector("#"+i))?((n=document.createElement("div")).setAttribute("id",i),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),r.type=e):(r.type!==e&&(n.classList.remove("alert-"+e),r.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+i))&&document.body.removeChild(e)},this.error=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("danger",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.warn=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("warning",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.success=function(t){var n;r.timer&&e.cancel(r.timer),n=o("success",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.info=function(t){var n;r.timer&&e.cancel(r.timer),n=o("info",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(i,s){var a,c,l,u;return a=n.defer(),r.timer&&(e.cancel(r.timer),r.timer=null),c=o("warning",i),s&&s.length?s.forEach((function(n){if((l=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),l.innerHTML=n.label,c.appendChild(l,c.childNodes[0]),l.addEventListener("click",(function(){document.body.removeChild(c),a.resolve(n.value)})),n.execWait){var i=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=i,l.appendChild(o),u=t((function(){i<=0?(t.cancel(u),u=null):o.innerHTML=--i}),500),r.timer=e((function(){c.parentNode&&c.parentNode===document.body&&document.body.removeChild(c),r.timer=null,a.resolve(n.value)}),n.execWait)}})):((l=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),l.innerHTML="是",c.appendChild(l,c.childNodes[0]),l.addEventListener("click",(function(){document.body.removeChild(c),a.resolve()})),(l=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),l.innerHTML="否",c.appendChild(l,c.childNodes[0]),l.addEventListener("click",(function(){document.body.removeChild(c),a.reject()}))),a.promise}}])},51:function(e,t,n){"use strict";n(52),n(4),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready((function(){window.wx.showOptionMenu()})),n(10),n(5),n(2),n(6);var i=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","trace.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach((function(e){i.push(e)}));var r=angular.module("app",i);r.config(["$locationProvider","$uibTooltipProvider",function(e,t){e.html5Mode(!0),t.setTriggers({show:"hide"})}]),r.factory("facGroupApp",["$q","http2","tmsLocation",function(e,t,n){var i={get:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/get?"+n.s("site","app")).then((function(e){i.resolve(e.data)})),i.promise}};return i}]),r.factory("facGroupTeam",["$q","http2","tmsLocation",function(e,t,n){var i={get:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/team/get?"+n.s("site","app","team")).then((function(e){i.resolve(e.data)})),i.promise},list:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/team/list?"+n.s("site","app")).then((function(e){i.resolve(e.data)})),i.promise},create:function(i,r){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/team/add?"+n.s("site","app"),{team:i,member:r}).then((function(e){o.resolve(e.data)})),o.promise},update:function(i){var r;return r=e.defer(),t.post("/rest/site/fe/matter/group/team/update?"+n.s("site","app","team"),i).then((function(e){r.resolve(e.data)})),r.promise},join:function(i){var r;return r=e.defer(),t.post("/rest/site/fe/matter/group/invite/join?"+n.s("site","app","team"),i).then((function(e){r.resolve(e.data)})),r.promise},quit:function(i){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/quit?"+n.s("site","app","team")+"&ek="+i.enroll_key).then((function(e){r.resolve(e.data)})),r.promise}};return i}]),r.factory("facGroupRecord",["$q","http2","tmsLocation",function(e,t,n){var i={list:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/record/list?"+n.s("site","app","team")).then((function(e){i.resolve(e.data)})),i.promise}};return i}]),r.factory("facGroupUser",["$q","http2","tmsLocation",function(e,t,n){var i={get:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/user/get?"+n.s("site","app")).then((function(e){var t,n=e.data;n&&(t={teams:[]},n.records&&n.records.length&&n.records.forEach((function(e){t[e.team_id]=e,t.teams.push(e.team_id)})),n.records=t),i.resolve(n)})),i.promise}};return i}]),r.controller("ctrlBase",["$scope","$q","$parse","http2","$timeout","tmsLocation","tmsSnsShare","tmsSiteUser",function(e,t,n,i,r,o,s,a){var c;e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0),(c=document.querySelector(".loading"))&&c.parentNode.removeChild(c)}]),e.exports=r},52:function(e,t,n){var i=n(53);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(e.exports=i.locals)},53:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"body{font-family:'Microsoft Yahei',Arial}.app-pic>div{width:100%;height:0;padding-bottom:56%;background-size:contain;background-repeat:no-repeat;background-position:center}",""])},6:function(e,t,n){"use strict";angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",(function(){this.showSwitch=function(e,t){var n;(n=document.createElement("div")).classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",(function(n){n.preventDefault(),n.stopPropagation();var i,r,o,s,a,c=location.protocol+"//"+location.host;c+="/rest/site/fe/user",c+="?site="+e,t?location.href=c:(i=c,o=document.createDocumentFragment(),(s=document.createElement("div")).setAttribute("id","frmPlugin"),a=document.createElement("iframe"),s.appendChild(a),s.onclick=function(){s.parentNode.removeChild(s)},o.appendChild(s),document.body.appendChild(o),0===i.indexOf("http")?(window.onClosePlugin=function(){s.parentNode.removeChild(s),r&&r()},a.setAttribute("src",i)):a.contentDocument&&a.contentDocument.body&&(a.contentDocument.body.innerHTML=i))}),!0),document.body.appendChild(n)}}))}});