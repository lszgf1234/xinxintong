!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=70)}({0:function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],l=t.base?o[0]+t.base:o[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,g=0;function h(e,t){var n,i,r;if(t.singleton){var o=g++;n=p||(p=c(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=c(t),i=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);a[r].references--}for(var o=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},1:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},19:function(e,t,n){"use strict";angular.module("schema.ui.xxt",[]).service("tmsSchema",["$filter","$sce","$parse",function(e,t,n){var i,r=this;this.config=function(e){angular.isString(e)&&(e=JSON.parse(e)),angular.isArray(e)?(i={},e.forEach((function(e){i[e.id]=e}))):i=e},this.isEmpty=function(e,t){if(void 0===t)return!0;switch(e.type){case"multiple":for(var n in t)if(!0===t[n])return!1;return!0;default:return 0===t.length}},this.checkRequire=function(e,t){return void 0!==t&&!this.isEmpty(e,t)||"请填写必填题目［"+e.title+"］"},this.checkFormat=function(e,t){if("number"===e.format){if(!/^-{0,1}[0-9]+(.[0-9]+){0,1}$/.test(t))return"题目［"+e.title+"］请输入数值"}else if("name"===e.format){if(t.length<2)return"题目［"+e.title+"］请输入正确的姓名（不少于2个字符）"}else if("mobile"===e.format){if(!/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9]|9[0-9])\d{8}$/.test(t))return"题目［"+e.title+"］请输入正确的手机号（11位数字）"}else if("email"===e.format&&!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(t))return"题目［"+e.title+"］请输入正确的邮箱";return!0},this.checkCount=function(e,t){return!(0!=e.count&&void 0!==e.count&&t.length>e.count)||"［"+e.title+"］超出上传数量（"+e.count+"）限制"},this.checkValue=function(e,t){var n;if(e.required&&"Y"===e.required&&!0!==(n=this.checkRequire(e,t)))return n;if(t){if("shorttext"===e.type&&e.format&&!0!==(n=this.checkFormat(e,t)))return n;if("multiple"===e.type&&"Y"===e.limitChoice&&e.range){var i=0;for(var r in t)t[r]&&i++;if(i<e.range[0]||i>e.range[1])return"【"+e.title+"】中最多只能选择("+e.range[1]+")项，最少需要选择("+e.range[0]+")项"}if(/image|file/.test(e.type)&&e.count&&!0!==(n=this.checkCount(e,t)))return n}return!0},this.loadRecord=function(e,t,n){if(!n)return!1;var i,r;for(i in n)if("member"===i)t.member=angular.extend(t.member,n.member);else if(void 0!==e[i]){var o=e[i];if("score"===o.type)t[i]=n[i];else if("url"===o.type){var a=n[i];a._text=this.urlSubstitute(a),t[i]=n[i]}else if(/image|multiple/.test(o.type)){if(n[i].length)if("image"===o.type)for(var s in r=n[i].split(","),t[i]=[],r)t[i].push({imgSrc:r[s]});else if("multiple"===o.type)for(var s in r=n[i].split(","),t[i]={},r)t[i][r[s]]=!0}else t[i]=n[i]}return!0},this.autoFillMember=function(e,t,n){t.members&&angular.forEach(e,(function(e){var i,r,o;if(e.mschema_id&&t.members[e.mschema_id])if(i=t.members[e.mschema_id],2===(r=e.id.split(".")).length)n[r[1]]=i[r[1]];else if(3===r.length&&i.extattr)switch(n.extattr||(n.extattr={}),e.type){case"multiple":if(o=i.extattr[r[2]],angular.isObject(o))for(var a in n.extattr[r[2]]={},o)o[a]&&(n.extattr[r[2]][a]=!0);break;default:n.extattr[r[2]]=i.extattr[r[2]]}}))},this.autoFillDefault=function(e,t){angular.forEach(e,(function(e){e.defaultValue&&void 0===t[e.id]&&(t[e.id]=e.defaultValue)}))},this.value2Text=function(e,t){var n,i,r=[];if(n=t){if(e.ops&&e.ops.length)if("single"===e.type){for(var o=0,a=e.ops.length;o<a;o++)if(e.ops[o].v===n){n=e.ops[o].l;break}}else if("multiple"===e.type){for(var s in i=[],n)n[s]&&i.push(s);e.ops.forEach((function(e){-1!==i.indexOf(e.v)&&r.push(e.l)})),n=r.join(",")}}else n="";return n},this.value2Html=function(e,t){if(!t||!e)return"";if(e.ops&&e.ops.length){if("score"===e.type){var n="";return e.ops.forEach((function(e,i){void 0!==t[e.v]&&(n+="<div>"+e.l+":"+t[e.v]+"</div>")})),n=n.replace(/\s\/\s$/,"")}if(angular.isString(t)){var i,r=[];if(i=t.split(","),e.ops.forEach((function(e,t){-1!==i.indexOf(e.v)&&r.push(e.l)})),r.length)return r.join(",")}else(angular.isObject(t)||angular.isArray(t))&&(t=JSON.stringify(t))}return t},this.txtSubstitute=function(e){return e.replace(/\n/g,"<br>")},this.urlSubstitute=function(e){var t;return t="",e&&(e.title&&(t+="【"+e.title+"】"),e.description&&(t+=e.description)),t+='<a href="'+e.url+'">网页链接</a>'},this.optionsSubstitute=function(e,t){var n,i,r=[];if(n=t){if(e.ops&&e.ops.length){if("score"===e.type){var o="",a=!1;return e.ops.forEach((function(e,t){if(void 0===n[e.v])return a=!0;o+="<div>"+e.l+":"+n[e.v]+"</div>",a=!1})),o=a?n:o.replace(/\s\/\s$/,"")}if("single"===e.type||"multiple"===e.type){if(!angular.isString(n))return n;i=n.split(","),e.ops.forEach((function(e){-1!==i.indexOf(e.v)&&r.push(e.l)})),n=r.join(",")}else(angular.isObject(n)||angular.isArray(n))&&(n=JSON.stringify(n))}}else n="";return n},this.dateSubstitute=function(t){return t&&parseInt(t)?"<span>"+e("date")(1e3*t,"yy-MM-dd HH:mm")+"</span>":""},this.forTable=function(e,n){function o(e,t){var n,i,r;if(e){if(2===(n=t.id.split(".")).length)return e[n[1]];if(3===n.length&&e.extattr){if(i=e.extattr[n[2]])switch(t.type){case"single":if(t.ops&&t.ops.length)for(var o=t.ops.length-1;o>=0;o--)i===t.ops[o].v&&(r=t.ops[o].l);break;case"multiple":t.ops&&t.ops.length&&(r=[],t.ops.forEach((function(e){i[e.v]&&r.push(e.l)})),r=r.join(","));break;default:r=i}return r}return""}return""}var a;return n&&angular.isArray(n)&&(a={},n.forEach((function(e){a[e.id]=e})),n=a),function(e,n){var i,a,s={};if(e.data&&n){for(var l in n)switch(a=(i=n[l]).type,i.mschema_id&&e.data.member&&(a="member"),a){case"image":var c;c=e.data[i.id]?angular.isString(e.data[i.id])?e.data[i.id].split(","):e.data[i.id]:[],s[i.id]=c;break;case"file":case"voice":var u=e.data[i.id]?e.data[i.id]:{};s[i.id]=u;break;case"multitext":var d;if(d=e.data[i.id]){if(angular.isString(d))try{d=JSON.parse(d),angular.isString(d)&&(d=JSON.parse(d))}catch(e){d=[]}}else d=[];s[i.id]=d;break;case"date":s[i.id]=e.data[i.id]&&angular.isNumber(e.data[i.id])?e.data[i.id]:0;break;case"url":s[i.id]=e.data[i.id],s[i.id]&&(s[i.id]._text="【"+s[i.id].title+"】"+s[i.id].description);break;default:try{if(/^member\./.test(i.id))s[i.id]=o(e.data.member,i);else{var f=r.value2Html(i,e.data[i.id]);s[i.id]=angular.isString(f)?t.trustAsHtml(f):f}}catch(t){console.log(t,i,e.data[i.id])}}e._data=s}return e}(e,n||i)},this.forEdit=function(e,n){var i;if("file"===e.type)n[e.id]&&n[e.id].length&&(i=n[e.id]).forEach((function(e){e.url&&angular.isString(e.url)&&e.url&&t.trustAsUrl(e.url)})),n[e.id]=i;else if("multiple"===e.type){var r={};n[e.id]&&n[e.id].length&&(o=n[e.id].split(",")).forEach((function(e){r[e]=!0})),n[e.id]=r}else if("image"===e.type){var o=n[e.id];r=[];o&&o.length&&(o=o.split(",")).forEach((function(e){r.push({imgSrc:e})})),n[e.id]=r}return n},this.strRecData=function(t,i,r){var o,a,s,l;return i&&0!==i.length?(r&&(r.fnSchemaFilter&&(s=r.fnSchemaFilter),r.fnDataFilter&&(l=r.fnDataFilter)),o="",i.forEach((function(i){if(!s||s(i))switch(a=n(i.id)(t),i.type){case"image":a&&a.length&&(o+="<span>",a.forEach((function(e){o+='<img src="'+e+'" />'})),o+="</span>");break;case"file":a&&a.length&&a.forEach((function(e){o+='<span><a href="'+e.url+'" target="_blank">'+e.name+"</a></span>"}));break;case"date":a>0&&(o="<span>"+e("date")(1e3*a,"yy-MM-dd HH:mm")+"</span>");break;case"shortext":case"longtext":o+=a;break;case"multitext":if(a&&a.length)for(var r=a.length-1;r>=0;r--)l&&!l(a[r].id)||(o+=a[r].value)}})),o):""},this.member={getExtattrsUIValue:function(e,t){var n={};return e.forEach((function(e){/single|multiple/.test(e.type)?t.extattr[e.id]&&(n[e.id]=r.value2Text(e,t.extattr[e.id])):n[e.id]=t.extattr[e.id]})),n}},this.getSchemaVisible=function(e,t){var i,r,o;if(e.visibility.logicOR){i=!1;for(var a=0,s=e.visibility.rules.length;a<s;a++)if(r=e.visibility.rules[a],(o=n(r.schema)(t))&&(o===r.op||o[r.op])){i=!0;break}}else{i=!0;for(a=0,s=e.visibility.rules.length;a<s;a++)if(r=e.visibility.rules[a],!(o=n(r.schema)(t))||o!==r.op&&!o[r.op]){i=!1;break}}return i}}])},2:function(e,t,n){"use strict";var i=angular.module("http.ui.xxt",["ng"]);i.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],i=0,r=arguments.length;i<r;i++)n.push(arguments[i]+"="+(e[arguments[i]]||""));return n.join("&")}return e},j:function(n){var i=e,r=[];n&&n.length&&(i+="/"+n);for(var o=1,a=arguments.length;o<a;o++)r.push(arguments[o]+"="+(t.search()[arguments[o]]||""));return r.length&&(i+="?"+r.join("&")),i},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),i.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,i,r,o){function a(t,n,i){var a;return r.trustAsHtml(t),(a=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),i||a[0].addEventListener("click",(function(){document.body.removeChild(a[0])}),!0),o(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,r){var o,c,u=i.defer();return!0===(r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r)).showProgress&&(c=n((function(){c=null,o=a(r.showProgressText,"info")}),r.showProgressDelay)),l(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success((function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;u.reject(e)}else if(e.err_code&&0!=e.err_code){if(r.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(r.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),a(null===e?"网络不可用":e,"danger")})),u.promise},this.post=function(e,r,o){var c,u,d=i.defer();return!0===(o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o)).showProgress&&(u=n((function(){u=null,c=a(o.showProgressText,"info")}),o.showProgressDelay)),l(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.post(e,r,o).success((function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(u&&n.cancel(u),c&&(s(c),c=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&(a(e,"warning"),c=null),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===o.showProgress&&(u&&n.cancel(u),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")})),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,i){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var r=0,o=n.length;r<o;r++)r<t.length?e(t[r],n[r],i):t.push(n[r])}else if(angular.isObject(t)){for(var a in t)i&&-1!==i.indexOf(a)||(void 0===n[a]?delete t[a]:angular.isObject(n[a])&&angular.isObject(t[a])?e(t[a],n[a],i):t[a]=n[a]);for(var a in n)i&&-1!==i.indexOf(a)||void 0===t[a]&&(t[a]=n[a])}}else t=n;return!0}}(e,t,n)}}])},22:function(e,t,n){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var i,r,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e){var t,n=[];if(t=e.promise,void 0!==window.wx)window.wx.chooseImage({success:function(t){var i,r;for(i in t.localIds)r={imgSrc:t.localIds[i]},n.push(r);e.resolve(n)}});else{var r=document.createElement("input");r.setAttribute("type","file"),r.addEventListener("change",(function(t){var o,a,s;for(a=t.target.files.length,o=0;o<a;o++){s=t.target.files[o];var l=new FileReader;l.onload=function(t){var o=t.target.result.match(/^data:image\/(.+);base64/);if(o){var a=i(o,2)[1];if(a&&-1!==["png","jpg","jpeg","gif"].indexOf(a)){var s={};s.imgSrc=t.target.result,n.push(s),document.body.removeChild(r),e.resolve(n)}else e.resolve("只能上传【png,jpg,jpeg,gif】格式的文件")}else e.resolve("只能上传【png,jpg,jpeg,gif】格式的文件")},l.readAsDataURL(s)}}),!1),r.style.opacity=0,document.body.appendChild(r),r.click()}return t},paste:function(e,t){var n,i=[];return n=t.promise,e.focus(),e.addEventListener("paste",(function(e){var n,r,o=e.clipboardData;if(o&&(n=o.items)&&n.length){for(var a=0;a<o.types.length;a++)if("Files"===o.types[a]){r=n[a];break}r&&"file"===r.kind&&r.type.match(/^image\//i)&&function(e){var n=e.getAsFile(),r=new FileReader;r.onload=function(e){var n={};n.imgSrc=e.target.result,i.push(n),t.resolve(i)},r.readAsDataURL(n)}(r)}})),n},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},5:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var i="tmsbox"+1*new Date,r={type:"",timer:null},o=function(e,t){var n;return null===(n=document.querySelector("#"+i))?((n=document.createElement("div")).setAttribute("id",i),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),r.type=e):(r.type!==e&&(n.classList.remove("alert-"+e),r.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+i))&&document.body.removeChild(e)},this.error=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("danger",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.warn=function(t){var n,i;r.timer&&(e.cancel(r.timer),r.timer=null),n=o("warning",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.success=function(t){var n;r.timer&&e.cancel(r.timer),n=o("success",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.info=function(t){var n;r.timer&&e.cancel(r.timer),n=o("info",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.progress=function(e){o("progress",e)},this.confirm=function(i,a){var s,l,c,u;return s=n.defer(),r.timer&&(e.cancel(r.timer),r.timer=null),l=o("warning",i),a&&a.length?a.forEach((function(n){if((c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML=n.label,l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.resolve(n.value)})),n.execWait){var i=Math.ceil(n.execWait/500),o=document.createElement("span");o.classList.add("countdown"),o.innerHTML=i,c.appendChild(o),u=t((function(){i<=0?(t.cancel(u),u=null):o.innerHTML=--i}),500),r.timer=e((function(){l.parentNode&&l.parentNode===document.body&&document.body.removeChild(l),r.timer=null,s.resolve(n.value)}),n.execWait)}})):((c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.resolve()})),(c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.reject()}))),s.promise}}])},7:function(e,t,n){var i=n(0),r=n(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},70:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n(7),n(72),n(5),n(2),n(22),n(19),n(9);var i=angular.module("app",["ui.bootstrap","notice.ui.xxt","http.ui.xxt","directive.enroll","schema.ui.xxt"]);i.config(["$locationProvider",function(e){e.html5Mode(!0)}]),i.directive("tmsImageInput",["$q",function(e){var t;return t=[],{restrict:"A",controller:["$scope","$timeout","noticebox",function(n,i,r){n.chooseImage=function(o){var a;a=n.member.extattr?n.member.extattr:n.member.extattr={},null!==o&&(-1===t.indexOf(o.id)&&t.push(o.id),void 0===a[o.id]&&(a[o.id]=[]),a[o.id].length>=1)?r.warn("最多允许上传（1）张图片"):window.xxt.image.choose(e.defer()).then((function(e){var t;"$digest"===(t=n.$root.$$phase)||"$apply"===t?a[o.id]=a[o.id].concat(e):n.$apply((function(){a[o.id]=a[o.id].concat(e)})),i((function(){var t,n,i,r;for(t=0,n=e.length;t<n;t++)i=e[t],(r=document.querySelector('ul[name="'+o.id+'"] li:nth-last-child(2) img'))&&r.setAttribute("src",i.imgSrc)}))}))},n.removeImage=function(e,t){n.member.extattr[e.id].splice(t,1)}}]}}]),i.controller("ctrlMember",["$parse","$scope","$timeout","noticebox","tmsLocation","http2","tmsSchema",function(e,t,n,i,r,o,a){function s(t,n){t.forEach((function(t){var i;if((i=document.querySelector('[schema="'+t.id+'"]'))&&t.visibility&&t.visibility.rules&&t.visibility.rules.length){var r=a.getSchemaVisible(t,n);i.classList.toggle("hide",!r),t.visibility.visible=r,!1===r&&e(t.id).assign(n,void 0)}}))}function l(t,n){t.forEach((function(t){t.ops&&t.ops.length&&t.optGroups&&t.optGroups.length&&t.optGroups.forEach((function(i){i.assocOp&&i.assocOp.schemaId&&i.assocOp.v&&(e(i.assocOp.schemaId)(n)!==i.assocOp.v?t.ops.forEach((function(e){var r;e.g&&e.g===i.i&&("single"===t.type&&t.pageConfig&&"S"===t.pageConfig.component?(r=document.querySelector('option[name="'+t.id+'"][value='+e.v+"]"))&&r.parentNode&&r.parentNode.removeChild(r):("single"===t.type?r=document.querySelector("input[name="+t.id+"][value="+e.v+"]"):"multiple"===t.type&&(r=document.querySelector('input[ng-model="'+t.id+"."+e.v+'"]')),r&&(r=r.parentNode)&&(r=r.parentNode)&&r.classList.add("option-hide")),"single"===t.type?n[t.id]===e.v&&(n[t.id]=""):n[t.id]&&n[t.id][e.v]&&delete n[t.id][e.v])})):t.ops.forEach((function(e){var n,r;e.g&&e.g===i.i&&("single"===t.type&&t.pageConfig&&"S"===t.pageConfig.component?(r=document.querySelector('[schema="'+t.id+'"] select[ng-model]'))&&((n=r.querySelector('option[name="'+t.id+'"][value='+e.v+"]"))||((n=document.createElement("option")).setAttribute("value",e.v),n.setAttribute("name",t.id),n.innerHTML=e.l,r.appendChild(n))):("single"===t.type?n=document.querySelector("input[name="+t.id+"][value="+e.v+"]"):"multiple"===t.type&&(n=document.querySelector('input[ng-model="'+t.id+"."+e.v+'"]')),n&&(n=n.parentNode)&&(n=n.parentNode)&&n.classList.remove("option-hide")))})))}))}))}function c(e){var n,r,o,s=t.member;if(s.name&&!1==(n=s.name,r=2,o="请提供您的姓名！",!(null==n||""==n||n.length<r)||(i.warn(o),!1)))return!1;if(s.mobile&&!1===function(e,t){return!1!==/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(e)||(i.warn(t),!1)}(s.mobile,"请提供正确的手机号（11位数字）！"))return!1;if(s.email&&!1===function(e,t){if(void 0===e)return i.warn(t),!1;var n=e.indexOf("@"),r=e.lastIndexOf(".");return!(n<1||r-n<2)||(i.warn(t),!1)}(s.email,"请提供正确的邮箱！"))return!1;if(e.extAttrs&&e.extAttrs.length){var l,c,u;l=s.extattr||{};for(var d=0,f=e.extAttrs.length;d<f;d++)if((!(c=e.extAttrs[d]).visibility||!c.visibility.rules||0===c.visibility.rules.length||c.visibility.visible)&&c.required&&"Y"===c.required&&!0!==(u=a.checkValue(c,l[c.id])))return i.warn(u),!1}return!0}function u(e){t.posting=!0,o.post(e,t.member,{autoBreak:!1}).then((function(e){t.posting=!1,i.confirm("已经提交成功，离开页面！",[{label:"取消",value:"cancel"},{label:"离开",value:"continue",execWait:5e3}]).then((function(e){"continue"===e&&o.get(r.j("passed","site","schema")+"&redirect=N").then((function(e){window.parent&&window.parent.onClosePlugin?window.parent.onClosePlugin(e.data):location.href=e.data}))}))}),(function(){t.posting=!1}))}function d(e){var n,i;e.members&&(n=e.members[r.s().schema]),t.member={schema_id:r.s().schema,extattr:{}},i=t.schema.attrs,n?(t.member.id=n.id,t.member.verified=n.verified,!i.name.hide&&(t.member.name=n.name),!i.email.hide&&(t.member.email=n.email),!i.mobile.hide&&(t.member.mobile=n.mobile),n.extattr&&(t.member.extattr=n.extattr)):e.login&&(
//!oAttrs.name.hide && ($scope.member.name = user.login.nickname);
!i.mobile.hide&&/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(e.login.uname)&&(t.member.mobile=e.login.uname),i.email.hide||-1===e.login.uname.indexOf("@")||(t.member.email=e.login.uname))}t.posting=!1,t.loginUser={},t.subView="login",t.isRegister=!1,t.switchSubView=function(e){t.subView=e},t.openThirdAppUrl=function(e){location.href="/rest/site/fe/user/login/byRegAndThird?thirdId="+e.id},t.login=function(){t.loginUser.password&&o.post("/rest/site/fe/user/login/do?site="+r.s().site,t.loginUser).then((function(e){o.post("/rest/site/fe/user/login/checkPwdStrength",{account:t.loginUser.uname,password:t.loginUser.password}).then((function(e){e.data.strength||alert(e.data.msg),o.get(r.j("get","site","schema")).then((function(e){var n=e.data;t.user=n,d(n)}))}))}))},t.loginByReg=function(e){o.post("/rest/site/fe/user/login/byRegAndWxopenid?site="+r.s().site,e).then((function(e){location.reload(!0)}))},t.logout=function(){o.post("/rest/site/fe/user/logout/do?site="+r.s().site,t.loginUser).then((function(e){location.reload(!0)}))},t.register=function(){o.post("/rest/site/fe/user/register/do?site="+r.s().site,{uname:t.loginUser.uname,nickname:t.loginUser.nickname,password:t.loginUser.password,pin:t.loginUser.pin}).then((function(e){t.user=e.data,d(t.user)}))},t.gotoHome=function(){location.href="/rest/site/fe/user?site="+r.s().site},t.repeatPwd={test:function(e){return e===t.password}},t.doAuth=function(e){if(!e){if(!c(t.schema))return;if(document.querySelectorAll(".ng-invalid-required").length)return void i.warn("请填写必填项")}u(r.j("doAuth","site","schema"))},t.doReauth=function(){c(t.schema)&&(document.querySelectorAll(".ng-invalid-required").length?i.warn("请填写必填项"):u(r.j("doReauth","site","schema")))},t.refreshPin=function(e){var n;e||(e=document.getElementById("pinInput")),e&&(n=1*new Date,120,"/rest/site/fe/user/login/getCaptcha?site=platform&codelen=4&width=120&height=32&fontsize=20",t.pinImg="/rest/site/fe/user/login/getCaptcha?site=platform&codelen=4&width=120&height=32&fontsize=20&_="+n)},t.shiftRegUser=function(e){o.post("/rest/site/fe/user/shiftRegUser?site="+r.s().site,{uname:e.uname}).then((function(e){location.reload(!0)}))},o.get("/rest/site/fe/get?site="+r.s().site).then((function(e){t.site=e.data,o.get("/rest/site/fe/user/memberschema/get?site="+r.s().site+"&schema="+r.s().schema+"&matter="+r.s().matter).then((function(e){t.schema=e.data.schema,t.matter=e.data.matter,o.get(r.j("get","site","schema")).then((function(e){t.user=e.data,d(t.user),t.user.sns&&t.user.sns.wx&&(t.loginUser.nickname=t.user.sns.wx.nickname),n((function(){var e=document.getElementById("pinInput");e&&t.refreshPin(e),s(t.schema.extAttrs,t.member.extattr),l(t.schema.extAttrs,t.member.extattr)})),o.get("/rest/site/fe/user/get?site="+r.s().site).then((function(e){e.data.siteRegistersByWx&&(t.user.siteRegistersByWx=e.data.siteRegistersByWx),e.data.plRegistersByWx&&(t.user.plRegistersByWx=e.data.plRegistersByWx)}))}))}))})),o.get("/rest/site/fe/user/login/thirdList").then((function(e){t.thirdApps=e.data})),o.get("/rest/site/fe/user/getSafetyLevel").then((function(e){t.isRegister=e.data.register})),t.isSmallLayout=!1,window.screen&&window.screen.width<=768&&(t.isSmallLayout=!0),t.$watch("member.extattr",(function(e,i){e!==i&&n((function(){s(t.schema.extAttrs,e),l(t.schema.extAttrs,e)}))}),!0)}])},72:function(e,t,n){var i=n(0),r=n(73);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},73:function(e,t,n){(t=n(1)(!1)).push([e.i,'body {\n    font-family: "Microsoft Yahei", Arial;\n}\n\n.app {\n    margin-top: 70px;\n    margin-bottom: 50px;\n}\n\n.ng-cloak {\n    display: none;\n}\n\n.navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    box-shadow: none;\n}\n\n.navbar-right {\n    float: right !important;\n    margin-right: -15px;\n}\n\n#matter .matter-pic {\n    width: 100%;\n}\n\n#matter .matter-pic > div {\n    width: 100%;\n    height: 0;\n    padding-bottom: 56%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\nimg {\n    max-width: 100%;\n}\n\n/* img tiles */\nul.img-tiles li {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    width: 80px;\n    height: 80px;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n}\n\nul.img-tiles li.img-thumbnail img {\n    display: inline-block;\n    position: absolute;\n    max-width: none;\n}\n\nul.img-tiles li.img-thumbnail button {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\nul.img-tiles li.img-picker button {\n    position: auto;\n    width: 100%;\n    height: 100%;\n}\n\nul.img-tiles li.img-picker button span {\n    font-size: 36px;\n}\n\nli.radio.option-hide,\nli.checkbox.option-hide {\n    height: 0;\n    margin: 0;\n    visibility: hidden;\n}\n\nli.radio.option-hide > label,\nli.checkbox.option-hide > label {\n    height: 0;\n    min-height: 0;\n}\n\nli.radio.option-hide > label > *,\nli.checkbox.option-hide > label > * {\n    height: 0;\n    display: inline-block;\n    overflow: hidden;\n}\n',""]),e.exports=t},8:function(e,t,n){(t=n(1)(!1)).push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:1060}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-header{padding:15px 15px 0 15px}.dialog .dlg-body{padding:15px 15px 0 15px}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}.tms-act-toggle{position:fixed;right:15px;bottom:8px;width:48px;height:48px;line-height:48px;box-shadow:0 2px 6px rgba(18,27,32,.425);color:#fff;background:#ff8018;border:1px solid #ff8018;border-radius:24px;font-size:20px;text-align:center;cursor:pointer;z-index:1045}.tms-nav-target>*+*{margin-top:.5em}.tms-act-popover-wrap>div+div{margin-top:8px}#frmPlugin{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;z-index:1060;box-sizing:border-box;padding-bottom:48px;background:#fff}#frmPlugin iframe{width:100%;height:100%;border:0}#frmPlugin:after{content:'关闭';position:absolute;width:100px;text-align:center;left:50%;margin-left:-50px;bottom:4px;padding:5px 6px 3px;border:1px solid #ccc;border-radius:4px}div[wrap]>.description{word-wrap:break-word}",""]),e.exports=t},9:function(e,t,n){"use strict";window.__util={},window.__util.makeDialog=function(e,t){var n,i;return(i=document.createElement("div")).setAttribute("id",e),i.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",i.innerHTML=n,document.body.appendChild(i),i.children};var i=angular.module("directive.enroll",[]);i.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;(t=new Date).setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,n,i){var r,o,a;void 0===t.value&&(t.value=1*new Date/1e3),(o=new Date).setTime(1e3*t.value),t.options={years:[2018,2019,2020,2021,2022,2023,2024,2025],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(o.getMinutes()/5),t.data={year:o.getFullYear(),month:o.getMonth()+1,date:o.getDate(),hour:o.getHours(),minute:a},-1===t.options.minutes.indexOf(a)&&t.options.minutes.push(a),r=function(n){var i,r;(n.preventDefault(),n.stopPropagation(),t.opened)||(r="_dlg-"+1*new Date,i={header:"",body:'<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div><div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div><div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div><div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div><div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},i=__util.makeDialog(r,i),t.opened=!0,t.dialogID=r,e(i)(t))},n[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),i.directive("flexImg",(function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",(function(){var e,t,n=this.clientWidth,i=this.clientHeight;n>i?(e=n/i*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=i/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))}))}}})),i.directive("tmsHideParentHeight",(function(){return{restrict:"A",link:function(e,t,n){var i,r;if(n.tmsHideParentHeight){i=n.tmsHideParentHeight;for(var o=0,a=t.length;o<a;o++)(r=t[o]).parentElement&&window.addEventListener("resize",(function(){r.classList.toggle("hidden",r.parentElement.clientHeight<i)}))}}}})),i.directive("tmsScrollSpy",(function(){return{restrict:"A",scope:{selector:"@selector",offset:"@",onbottom:"&",toggleSpy:"="},link:function(e,t,n){var i="window"===e.selector?window:document.querySelector(e.selector);i.addEventListener("scroll",(function(t){var n=i===window?t.target.documentElement:t.target;e.toggleSpy&&e.onbottom&&angular.isFunction(e.onbottom)&&n.clientHeight+n.scrollTop+parseInt(e.offset)>=n.scrollHeight&&e.$apply((function(){e.toggleSpy=!1,e.onbottom()}))}))}}}))}});