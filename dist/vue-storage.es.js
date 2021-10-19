var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(e,o)=>{var a={};for(var i in e)r.call(e,i)&&o.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&t)for(var i of t(e))o.indexOf(i)<0&&n.call(e,i)&&(a[i]=e[i]);return a};import{reactive as i}from"vue";import s from"querystring";const u=e=>new Promise((t=>{setTimeout((()=>t(e())),0)})),c={makePaginator:({items:e,page:t,per_page:r})=>({pages:Math.ceil(e.length/r),items:e.slice((t-1)*r,t*r),total:e.length,page:t}),prepareItem:(e,t)=>{var r=a(e,[]);return r.id||(r.created=(new Date).valueOf(),r.id=t()),r.updated=(new Date).valueOf(),r}};var f=(e,t={})=>{const{makePaginator:r=c.makePaginator,prepareItem:n=c.prepareItem,initial:o={},afterSave:a=(()=>{}),fromServer:s=(e=>e),toServer:f=(e=>e)}=t;let l=(Math.max(0,...Object.keys(o).map(Number))||0)+1;const p=i(o),d=e=>s(p[e]),h=({page:e=1,per_page:t=25,query:n={}}={})=>{let o=Object.values(p).map(s);return Object.entries(n).forEach((([e,t])=>{o=o.filter((r=>r[e]===t))})),r({items:o,per_page:t,page:e})};return{_state:p,getOne:d,getPage:h,fetchOne:e=>Promise.resolve(d(e)),fetchPage:e=>Promise.resolve(h(e)),save:e=>u((()=>(e=f(n(e,(()=>l++))),p[e.id]=e,a(p),e))),delete:({id:e})=>u((()=>{delete p[e],a(p)}))}},l={get:function(e){if(!localStorage)return null;try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){if(!localStorage)return null;try{var r=JSON.stringify(t);return localStorage.setItem(e,r),r}catch(n){return null}},remove:function(e){if(!localStorage)return null;try{return localStorage.removeItem(e),!0}catch(t){return null}},clear:function(){if(!localStorage)return null;try{return localStorage.clear(),!0}catch(e){return null}}};const p=(e={})=>{const{LS_KEY:t,initial:r={},ls:n=l}=e,o=i(n.get(t)||r);return{state:o,save:e=>{Object.assign(o,e),n.set(t,o)}}};var d=(e,t={})=>{var r=t,{ls:n=l}=r,o=a(r,["ls"]);const i=`LocalStorage:${e}`;o.initial=n.get(i)||o.initial,o.afterSave=e=>n.set(i,e);const s=f(0,o);return s.LS_KEY=i,s},h={exports:{}},m=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},g=m,v=Object.prototype.toString;function y(e){return"[object Array]"===v.call(e)}function b(e){return void 0===e}function w(e){return null!==e&&"object"==typeof e}function S(e){if("[object Object]"!==v.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function O(e){return"[object Function]"===v.call(e)}function E(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),y(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var x={isArray:y,isArrayBuffer:function(e){return"[object ArrayBuffer]"===v.call(e)},isBuffer:function(e){return null!==e&&!b(e)&&null!==e.constructor&&!b(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:w,isPlainObject:S,isUndefined:b,isDate:function(e){return"[object Date]"===v.call(e)},isFile:function(e){return"[object File]"===v.call(e)},isBlob:function(e){return"[object Blob]"===v.call(e)},isFunction:O,isStream:function(e){return w(e)&&O(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:E,merge:function e(){var t={};function r(r,n){S(t[n])&&S(r)?t[n]=e(t[n],r):S(r)?t[n]=e({},r):y(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)E(arguments[n],r);return t},extend:function(e,t,r){return E(t,(function(t,n){e[n]=r&&"function"==typeof t?g(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},j=x;function R(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var C=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(j.isURLSearchParams(t))n=t.toString();else{var o=[];j.forEach(t,(function(e,t){null!=e&&(j.isArray(e)?t+="[]":e=[e],j.forEach(e,(function(e){j.isDate(e)?e=e.toISOString():j.isObject(e)&&(e=JSON.stringify(e)),o.push(R(t)+"="+R(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},P=x;function A(){this.handlers=[]}A.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},A.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},A.prototype.forEach=function(e){P.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var U=A,N=x,T=function(e){return!(!e||!e.__CANCEL__)},k=x,L=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},B=function(e,t,r,n,o){var a=new Error(e);return L(a,t,r,n,o)},q=B,D=x,$=D.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),D.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),D.isString(n)&&i.push("path="+n),D.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},I=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},_=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},F=x,M=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],H=x,z=H.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=H.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},J=x,X=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(q("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},K=$,V=C,Y=function(e,t){return e&&!I(t)?_(e,t):t},G=function(e){var t,r,n,o={};return e?(F.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=F.trim(e.substr(0,n)).toLowerCase(),r=F.trim(e.substr(n+1)),t){if(o[t]&&M.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},Q=z,W=B,Z=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;J.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+s)}var u=Y(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),V(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?G(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};X(t,r,o),a=null}},a.onabort=function(){a&&(r(W("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(W("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(W(t,e,"ECONNABORTED",a)),a=null},J.isStandardBrowserEnv()){var c=(e.withCredentials||Q(u))&&e.xsrfCookieName?K.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in a&&J.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),J.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},ee=x,te=function(e,t){k.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},re={"Content-Type":"application/x-www-form-urlencoded"};function ne(e,t){!ee.isUndefined(e)&&ee.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var oe,ae={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(oe=Z),oe),transformRequest:[function(e,t){return te(t,"Accept"),te(t,"Content-Type"),ee.isFormData(e)||ee.isArrayBuffer(e)||ee.isBuffer(e)||ee.isStream(e)||ee.isFile(e)||ee.isBlob(e)?e:ee.isArrayBufferView(e)?e.buffer:ee.isURLSearchParams(e)?(ne(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ee.isObject(e)?(ne(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ae.headers={common:{Accept:"application/json, text/plain, */*"}},ee.forEach(["delete","get","head"],(function(e){ae.headers[e]={}})),ee.forEach(["post","put","patch"],(function(e){ae.headers[e]=ee.merge(re)}));var ie=ae,se=x,ue=function(e,t,r){return N.forEach(r,(function(r){e=r(e,t)})),e},ce=T,fe=ie;function le(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var pe=x,de=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return pe.isPlainObject(e)&&pe.isPlainObject(t)?pe.merge(e,t):pe.isPlainObject(t)?pe.merge({},t):pe.isArray(t)?t.slice():t}function u(n){pe.isUndefined(t[n])?pe.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}pe.forEach(n,(function(e){pe.isUndefined(t[e])||(r[e]=s(void 0,t[e]))})),pe.forEach(o,u),pe.forEach(a,(function(n){pe.isUndefined(t[n])?pe.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])})),pe.forEach(i,(function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return pe.forEach(f,u),r},he=x,me=C,ge=U,ve=function(e){return le(e),e.headers=e.headers||{},e.data=ue(e.data,e.headers,e.transformRequest),e.headers=se.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),se.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||fe.adapter)(e).then((function(t){return le(e),t.data=ue(t.data,t.headers,e.transformResponse),t}),(function(t){return ce(t)||(le(e),t&&t.response&&(t.response.data=ue(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ye=de;function be(e){this.defaults=e,this.interceptors={request:new ge,response:new ge}}be.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ye(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ve,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},be.prototype.getUri=function(e){return e=ye(this.defaults,e),me(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},he.forEach(["delete","get","head","options"],(function(e){be.prototype[e]=function(t,r){return this.request(ye(r||{},{method:e,url:t,data:(r||{}).data}))}})),he.forEach(["post","put","patch"],(function(e){be.prototype[e]=function(t,r,n){return this.request(ye(n||{},{method:e,url:t,data:r}))}}));var we=be;function Se(e){this.message=e}Se.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Se.prototype.__CANCEL__=!0;var Oe=Se,Ee=Oe;function xe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new Ee(e),t(r.reason))}))}xe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},xe.source=function(){var e;return{token:new xe((function(t){e=t})),cancel:e}};var je=xe,Re=x,Ce=m,Pe=we,Ae=de;function Ue(e){var t=new Pe(e),r=Ce(Pe.prototype.request,t);return Re.extend(r,Pe.prototype,t),Re.extend(r,t),r}var Ne=Ue(ie);Ne.Axios=Pe,Ne.create=function(e){return Ue(Ae(Ne.defaults,e))},Ne.Cancel=Oe,Ne.CancelToken=je,Ne.isCancel=T,Ne.all=function(e){return Promise.all(e)},Ne.spread=function(e){return function(t){return e.apply(null,t)}},Ne.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},h.exports=Ne,h.exports.default=Ne;var Te=h.exports;const ke=()=>{const e=Te.create({baseURL:"/api/",transformRequest(e,t){const r=((e="")=>{var t;return(null==(t=e.match(/csrftoken=([^;]+)/))?void 0:t[1])||""})("undefined"==typeof document?"":document.cookie);return t.delete["X-CSRFToken"]=r,t.post["X-CSRFToken"]=r,t.post["Content-Type"]="application/json",JSON.stringify(e)}});return e.interceptors.response.use((e=>e.data),(e=>{throw e})),e},Le=e=>e,Be=(e={})=>{const{client:t=ke(),fromServer:r=Le,toServer:n=Le}=e;let o=(new Date).valueOf();const a={},s={},u=i({loading:{},byUrl:{},byId:{}}),c=e=>{const n=o>a[e]||!u.byUrl[e];if(u.loading[e]){s[e]=s[e]||[];return new Promise(((t,r)=>s[e].push([t,r])))}return n?(u.loading[e]=!0,t.get(e).then((t=>{var n;return a[e]=(new Date).valueOf(),u.byUrl[e]=t,t.id?u.byId[t.id]=r(t):t.items?t.items.forEach((e=>u.byId[e.id]=r(e))):u.byUrl[e]=r(t),u.loading[e]=!1,null==(n=s[e])||n.forEach((([e])=>e(t))),t})).catch((t=>{var r;throw u.loading[e]=!1,null==(r=s[e])||r.forEach((([e,r])=>r(t))),t}))):Promise.resolve(u.byUrl[e])},f=e=>(o=(new Date).valueOf(),e);return{state:u,fetch:c,get:e=>(c(e),u.byUrl[e]),markStale:f,post:(e,r)=>t.post(e,n(r)).then(f),put:(e,r)=>t.put(e,n(r)).then(f),delete:(e,r={})=>t.delete(e,{data:r}).then(f)}};var qe=(e,a={})=>{const{append_slash:i=!0,fromServer:u,toServer:c}=a,f=i?"/":"",l=a.collection_slug||`${e}s`,p=a.client||ke(),d=a.api||Be({client:p,fromServer:u,toServer:c});return{api:d,getOne:t=>d.get(`${e}/${t}${f}`),getPage:({page:e,limit:a=25,query:i={}}={})=>{const u=s.stringify(((e,a)=>{for(var i in a||(a={}))r.call(a,i)&&o(e,i,a[i]);if(t)for(var i of t(a))n.call(a,i)&&o(e,i,a[i]);return e})({page:e,limit:a},i));return d.get(`${l}${f}?${u}`)},save(t){const r=t.id?`${e}/${t.id}${f}`:`${e}${f}`;return d.post(r,t)},delete:({id:t})=>d.delete(`${e}/${t}${f}`)}},De={LocalStorage:d,ReactiveLocalStorage:p,MemoryStorage:f,RestStorage:qe,ReactiveRestApi:Be,getClient:ke};export default De;export{d as LocalStorage,f as MemoryStorage,p as ReactiveLocalStorage,Be as ReactiveRestApi,qe as RestStorage,ke as getClient};
