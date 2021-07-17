var __getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__objRest=(e,t)=>{var r={};for(var n in e)__hasOwnProp.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&__getOwnPropSymbols)for(var n of __getOwnPropSymbols(e))t.indexOf(n)<0&&__propIsEnum.call(e,n)&&(r[n]=e[n]);return r};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("querystring")):"function"==typeof define&&define.amd?define(["exports","vue","querystring"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@unrest/vue-storage"]={},e.Vue,e.querystring)}(this,(function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(r);const a=e=>new Promise((t=>{setTimeout((()=>t(e())),0)})),i={makePaginator:({items:e,page:t,per_page:r})=>({pages:Math.ceil(e.length/r),items:e.slice((t-1)*r,t*r),total:e.length,page:t}),prepareItem:(e,t)=>{var r=__objRest(e,[]);return r.id||(r.created=(new Date).valueOf(),r.id=t()),r.updated=(new Date).valueOf(),r}};var s=(e,r={})=>{const{makePaginator:n=i.makePaginator,prepareItem:o=i.prepareItem,initial:s={},afterSave:u=(()=>{})}=r;let c=(Math.max(0,...Object.keys(s).map(Number))||0)+1;const f=t.reactive(s),l=e=>f[e],p=({page:e=1,per_page:t=25}={})=>n({items:Object.values(f),per_page:t,page:e});return{getOne:l,getPage:p,fetchOne:e=>Promise.resolve(l(e)),fetchPage:e=>Promise.resolve(p(e)),save:e=>a((()=>(e=o(e,(()=>c++)),f[e.id]=e,u(f),e))),delete:({id:e})=>a((()=>{delete f[e],u(f)}))}},u={get:function(e){if(!localStorage)return null;try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){if(!localStorage)return null;try{var r=JSON.stringify(t);return localStorage.setItem(e,r),r}catch(n){return null}},remove:function(e){if(!localStorage)return null;try{return localStorage.removeItem(e),!0}catch(t){return null}},clear:function(){if(!localStorage)return null;try{return localStorage.clear(),!0}catch(e){return null}}};const c=(e={})=>{const{LS_KEY:r,initial:n={},ls:o=u}=e,a=t.reactive(o.get(r)||n);return{state:a,save:e=>{Object.assign(a,e),o.set(r,a)}}};var f=(e,t={})=>{var r=t,{ls:n=u}=r,o=__objRest(r,["ls"]);const a=`LocalStorage:${e}`;o.initial=n.get(a)||o.initial,o.afterSave=e=>n.set(a,e);const i=s(0,o);return i.LS_KEY=a,i},l={exports:{}},p=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},d=p,h=Object.prototype.toString;function m(e){return"[object Array]"===h.call(e)}function g(e){return void 0===e}function y(e){return null!==e&&"object"==typeof e}function v(e){if("[object Object]"!==h.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function b(e){return"[object Function]"===h.call(e)}function S(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),m(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var w={isArray:m,isArrayBuffer:function(e){return"[object ArrayBuffer]"===h.call(e)},isBuffer:function(e){return null!==e&&!g(e)&&null!==e.constructor&&!g(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:y,isPlainObject:v,isUndefined:g,isDate:function(e){return"[object Date]"===h.call(e)},isFile:function(e){return"[object File]"===h.call(e)},isBlob:function(e){return"[object Blob]"===h.call(e)},isFunction:b,isStream:function(e){return y(e)&&b(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:S,merge:function e(){var t={};function r(r,n){v(t[n])&&v(r)?t[n]=e(t[n],r):v(r)?t[n]=e({},r):m(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)S(arguments[n],r);return t},extend:function(e,t,r){return S(t,(function(t,n){e[n]=r&&"function"==typeof t?d(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},O=w;function E(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var R=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(O.isURLSearchParams(t))n=t.toString();else{var o=[];O.forEach(t,(function(e,t){null!=e&&(O.isArray(e)?t+="[]":e=[e],O.forEach(e,(function(e){O.isDate(e)?e=e.toISOString():O.isObject(e)&&(e=JSON.stringify(e)),o.push(E(t)+"="+E(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},x=w;function j(){this.handlers=[]}j.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},j.prototype.forEach=function(e){x.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var C=j,P=w,A=function(e){return!(!e||!e.__CANCEL__)},_=w,N=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},U=function(e,t,r,n,o){var a=new Error(e);return N(a,t,r,n,o)},T=U,L=w,k=L.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),L.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),L.isString(n)&&i.push("path="+n),L.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},B=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},q=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},D=w,$=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],I=w,F=I.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=I.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},M=w,H=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(T("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},z=k,J=R,X=function(e,t){return e&&!B(t)?q(e,t):t},V=function(e){var t,r,n,o={};return e?(D.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=D.trim(e.substr(0,n)).toLowerCase(),r=D.trim(e.substr(n+1)),t){if(o[t]&&$.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},K=F,Y=U,G=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;M.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+s)}var u=X(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),J(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?V(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};H(t,r,o),a=null}},a.onabort=function(){a&&(r(Y("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(Y("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(Y(t,e,"ECONNABORTED",a)),a=null},M.isStandardBrowserEnv()){var c=(e.withCredentials||K(u))&&e.xsrfCookieName?z.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in a&&M.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),M.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},Q=w,W=function(e,t){_.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},Z={"Content-Type":"application/x-www-form-urlencoded"};function ee(e,t){!Q.isUndefined(e)&&Q.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var te,re={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(te=G),te),transformRequest:[function(e,t){return W(t,"Accept"),W(t,"Content-Type"),Q.isFormData(e)||Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)?e:Q.isArrayBufferView(e)?e.buffer:Q.isURLSearchParams(e)?(ee(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Q.isObject(e)?(ee(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};re.headers={common:{Accept:"application/json, text/plain, */*"}},Q.forEach(["delete","get","head"],(function(e){re.headers[e]={}})),Q.forEach(["post","put","patch"],(function(e){re.headers[e]=Q.merge(Z)}));var ne=re,oe=w,ae=function(e,t,r){return P.forEach(r,(function(r){e=r(e,t)})),e},ie=A,se=ne;function ue(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ce=w,fe=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return ce.isPlainObject(e)&&ce.isPlainObject(t)?ce.merge(e,t):ce.isPlainObject(t)?ce.merge({},t):ce.isArray(t)?t.slice():t}function u(n){ce.isUndefined(t[n])?ce.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}ce.forEach(n,(function(e){ce.isUndefined(t[e])||(r[e]=s(void 0,t[e]))})),ce.forEach(o,u),ce.forEach(a,(function(n){ce.isUndefined(t[n])?ce.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])})),ce.forEach(i,(function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return ce.forEach(f,u),r},le=w,pe=R,de=C,he=function(e){return ue(e),e.headers=e.headers||{},e.data=ae(e.data,e.headers,e.transformRequest),e.headers=oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),oe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||se.adapter)(e).then((function(t){return ue(e),t.data=ae(t.data,t.headers,e.transformResponse),t}),(function(t){return ie(t)||(ue(e),t&&t.response&&(t.response.data=ae(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},me=fe;function ge(e){this.defaults=e,this.interceptors={request:new de,response:new de}}ge.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=me(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[he,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},ge.prototype.getUri=function(e){return e=me(this.defaults,e),pe(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},le.forEach(["delete","get","head","options"],(function(e){ge.prototype[e]=function(t,r){return this.request(me(r||{},{method:e,url:t,data:(r||{}).data}))}})),le.forEach(["post","put","patch"],(function(e){ge.prototype[e]=function(t,r,n){return this.request(me(n||{},{method:e,url:t,data:r}))}}));var ye=ge;function ve(e){this.message=e}ve.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ve.prototype.__CANCEL__=!0;var be=ve,Se=be;function we(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new Se(e),t(r.reason))}))}we.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},we.source=function(){var e;return{token:new we((function(t){e=t})),cancel:e}};var Oe=we,Ee=w,Re=p,xe=ye,je=fe;function Ce(e){var t=new xe(e),r=Re(xe.prototype.request,t);return Ee.extend(r,xe.prototype,t),Ee.extend(r,t),r}var Pe=Ce(ne);Pe.Axios=xe,Pe.create=function(e){return Ce(je(Pe.defaults,e))},Pe.Cancel=be,Pe.CancelToken=Oe,Pe.isCancel=A,Pe.all=function(e){return Promise.all(e)},Pe.spread=function(e){return function(t){return e.apply(null,t)}},Pe.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},l.exports=Pe,l.exports.default=Pe;var Ae=l.exports;const _e=()=>{const e=Ae.create({baseURL:"/api/",transformRequest(e,t){const r=((e="")=>{var t;return(null==(t=e.match(/csrftoken=([^;]+)/))?void 0:t[1])||""})("undefined"==typeof document?"":document.cookie);return t.delete["X-CSRFToken"]=r,t.post["X-CSRFToken"]=r,t.post["Content-Type"]="application/json",JSON.stringify(e)}});return e.interceptors.response.use((e=>e.data),(e=>{throw e})),e},Ne=e=>e,Ue=(e={})=>{const{client:r=_e(),fromServer:n=Ne,toServer:o=Ne}=e;let a=(new Date).valueOf();const i={},s={},u=t.reactive({loading:{},byUrl:{},byId:{}}),c=e=>{const t=a>i[e]||!u.byUrl[e];if(u.loading[e]){let t;s[e]=s[e]||[];const r=new Promise((e=>t=e));return s[e].push(t),r}return t?(u.loading[e]=!0,r.get(e).then((t=>{var r;return i[e]=(new Date).valueOf(),u.byUrl[e]=t,t.id?u.byId[t.id]=n(t):t.items&&t.items.forEach((e=>u.byId[e.id]=n(e))),u.loading[e]=!1,null==(r=s[e])||r.forEach((e=>e(t))),t}))):Promise.resolve(u.byUrl[e])},f=e=>(a=(new Date).valueOf(),e);return{state:u,fetch:c,get:e=>(c(e),u.byUrl[e]),markStale:f,post:(e,t)=>r.post(e,o(t)).then(f),put:(e,t)=>r.put(e,o(t)).then(f),delete:e=>r.delete(e).then(f)}};var Te=(e,t={})=>{const{append_slash:r=!0,fromServer:n,toServer:a}=t,i=r?"/":"",s=t.collection_slug||`${e}s`,u=t.client||_e(),c=t.api||Ue({client:u,fromServer:n,toServer:a});return{api:c,getOne:t=>c.get(`${e}/${t}${i}`),getPage:({page:e,limit:t=25}={})=>{const r=o.default.stringify({page:e,limit:t});return c.get(`${s}${i}?${r}`)},save(t){const r=t.id?`${e}/${t.id}${i}`:`${e}${i}`;return c.post(r,t)},delete:({id:t})=>c.delete(`${e}/${t}${i}`)}},Le={LocalStorage:f,ReactiveLocalStorage:c,MemoryStorage:s,RestStorage:Te,ReactiveRestApi:Ue,getClient:_e};e.LocalStorage=f,e.MemoryStorage=s,e.ReactiveLocalStorage=c,e.ReactiveRestApi=Ue,e.RestStorage=Te,e.default=Le,e.getClient=_e,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
