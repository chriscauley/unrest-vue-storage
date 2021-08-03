var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(n,o)=>{var a={};for(var i in n)t.call(n,i)&&o.indexOf(i)<0&&(a[i]=n[i]);if(null!=n&&e)for(var i of e(n))o.indexOf(i)<0&&r.call(n,i)&&(a[i]=n[i]);return a};import{reactive as o}from"vue";import a from"querystring";const i=e=>new Promise((t=>{setTimeout((()=>t(e())),0)})),s={makePaginator:({items:e,page:t,per_page:r})=>({pages:Math.ceil(e.length/r),items:e.slice((t-1)*r,t*r),total:e.length,page:t}),prepareItem:(e,t)=>{var r=n(e,[]);return r.id||(r.created=(new Date).valueOf(),r.id=t()),r.updated=(new Date).valueOf(),r}};var u=(e,t={})=>{const{makePaginator:r=s.makePaginator,prepareItem:n=s.prepareItem,initial:a={},afterSave:u=(()=>{}),fromServer:c=(e=>e),toServer:f=(e=>e)}=t;let l=(Math.max(0,...Object.keys(a).map(Number))||0)+1;const p=o(a),d=e=>c(p[e]),h=({page:e=1,per_page:t=25}={})=>r({items:Object.values(p).map(c),per_page:t,page:e});return{getOne:d,getPage:h,fetchOne:e=>Promise.resolve(d(e)),fetchPage:e=>Promise.resolve(h(e)),save:e=>i((()=>(e=f(n(e,(()=>l++))),p[e.id]=e,u(p),e))),delete:({id:e})=>i((()=>{delete p[e],u(p)}))}},c={get:function(e){if(!localStorage)return null;try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){if(!localStorage)return null;try{var r=JSON.stringify(t);return localStorage.setItem(e,r),r}catch(n){return null}},remove:function(e){if(!localStorage)return null;try{return localStorage.removeItem(e),!0}catch(t){return null}},clear:function(){if(!localStorage)return null;try{return localStorage.clear(),!0}catch(e){return null}}};const f=(e={})=>{const{LS_KEY:t,initial:r={},ls:n=c}=e,a=o(n.get(t)||r);return{state:a,save:e=>{Object.assign(a,e),n.set(t,a)}}};var l=(e,t={})=>{var r=t,{ls:o=c}=r,a=n(r,["ls"]);const i=`LocalStorage:${e}`;a.initial=o.get(i)||a.initial,a.afterSave=e=>o.set(i,e);const s=u(0,a);return s.LS_KEY=i,s},p={exports:{}},d=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},h=d,m=Object.prototype.toString;function g(e){return"[object Array]"===m.call(e)}function v(e){return void 0===e}function y(e){return null!==e&&"object"==typeof e}function b(e){if("[object Object]"!==m.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function S(e){return"[object Function]"===m.call(e)}function w(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),g(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var O={isArray:g,isArrayBuffer:function(e){return"[object ArrayBuffer]"===m.call(e)},isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:y,isPlainObject:b,isUndefined:v,isDate:function(e){return"[object Date]"===m.call(e)},isFile:function(e){return"[object File]"===m.call(e)},isBlob:function(e){return"[object Blob]"===m.call(e)},isFunction:S,isStream:function(e){return y(e)&&S(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:w,merge:function e(){var t={};function r(r,n){b(t[n])&&b(r)?t[n]=e(t[n],r):b(r)?t[n]=e({},r):g(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)w(arguments[n],r);return t},extend:function(e,t,r){return w(t,(function(t,n){e[n]=r&&"function"==typeof t?h(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},E=O;function x(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var R=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(E.isURLSearchParams(t))n=t.toString();else{var o=[];E.forEach(t,(function(e,t){null!=e&&(E.isArray(e)?t+="[]":e=[e],E.forEach(e,(function(e){E.isDate(e)?e=e.toISOString():E.isObject(e)&&(e=JSON.stringify(e)),o.push(x(t)+"="+x(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},j=O;function C(){this.handlers=[]}C.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},C.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},C.prototype.forEach=function(e){j.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var A=C,P=O,N=function(e){return!(!e||!e.__CANCEL__)},U=O,T=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},k=function(e,t,r,n,o){var a=new Error(e);return T(a,t,r,n,o)},L=k,B=O,q=B.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),B.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),B.isString(n)&&i.push("path="+n),B.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},D=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},$=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},I=O,_=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],F=O,M=F.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=F.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},H=O,z=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(L("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},J=q,X=R,K=function(e,t){return e&&!D(t)?$(e,t):t},V=function(e){var t,r,n,o={};return e?(I.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=I.trim(e.substr(0,n)).toLowerCase(),r=I.trim(e.substr(n+1)),t){if(o[t]&&_.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},Y=M,G=k,Q=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;H.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+s)}var u=K(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),X(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?V(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};z(t,r,o),a=null}},a.onabort=function(){a&&(r(G("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(G("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(G(t,e,"ECONNABORTED",a)),a=null},H.isStandardBrowserEnv()){var c=(e.withCredentials||Y(u))&&e.xsrfCookieName?J.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in a&&H.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),H.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},W=O,Z=function(e,t){U.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},ee={"Content-Type":"application/x-www-form-urlencoded"};function te(e,t){!W.isUndefined(e)&&W.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var re,ne={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(re=Q),re),transformRequest:[function(e,t){return Z(t,"Accept"),Z(t,"Content-Type"),W.isFormData(e)||W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e)?e:W.isArrayBufferView(e)?e.buffer:W.isURLSearchParams(e)?(te(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):W.isObject(e)?(te(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ne.headers={common:{Accept:"application/json, text/plain, */*"}},W.forEach(["delete","get","head"],(function(e){ne.headers[e]={}})),W.forEach(["post","put","patch"],(function(e){ne.headers[e]=W.merge(ee)}));var oe=ne,ae=O,ie=function(e,t,r){return P.forEach(r,(function(r){e=r(e,t)})),e},se=N,ue=oe;function ce(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var fe=O,le=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return fe.isPlainObject(e)&&fe.isPlainObject(t)?fe.merge(e,t):fe.isPlainObject(t)?fe.merge({},t):fe.isArray(t)?t.slice():t}function u(n){fe.isUndefined(t[n])?fe.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}fe.forEach(n,(function(e){fe.isUndefined(t[e])||(r[e]=s(void 0,t[e]))})),fe.forEach(o,u),fe.forEach(a,(function(n){fe.isUndefined(t[n])?fe.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])})),fe.forEach(i,(function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return fe.forEach(f,u),r},pe=O,de=R,he=A,me=function(e){return ce(e),e.headers=e.headers||{},e.data=ie(e.data,e.headers,e.transformRequest),e.headers=ae.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ae.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ue.adapter)(e).then((function(t){return ce(e),t.data=ie(t.data,t.headers,e.transformResponse),t}),(function(t){return se(t)||(ce(e),t&&t.response&&(t.response.data=ie(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ge=le;function ve(e){this.defaults=e,this.interceptors={request:new he,response:new he}}ve.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ge(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[me,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},ve.prototype.getUri=function(e){return e=ge(this.defaults,e),de(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},pe.forEach(["delete","get","head","options"],(function(e){ve.prototype[e]=function(t,r){return this.request(ge(r||{},{method:e,url:t,data:(r||{}).data}))}})),pe.forEach(["post","put","patch"],(function(e){ve.prototype[e]=function(t,r,n){return this.request(ge(n||{},{method:e,url:t,data:r}))}}));var ye=ve;function be(e){this.message=e}be.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},be.prototype.__CANCEL__=!0;var Se=be,we=Se;function Oe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new we(e),t(r.reason))}))}Oe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Oe.source=function(){var e;return{token:new Oe((function(t){e=t})),cancel:e}};var Ee=Oe,xe=O,Re=d,je=ye,Ce=le;function Ae(e){var t=new je(e),r=Re(je.prototype.request,t);return xe.extend(r,je.prototype,t),xe.extend(r,t),r}var Pe=Ae(oe);Pe.Axios=je,Pe.create=function(e){return Ae(Ce(Pe.defaults,e))},Pe.Cancel=Se,Pe.CancelToken=Ee,Pe.isCancel=N,Pe.all=function(e){return Promise.all(e)},Pe.spread=function(e){return function(t){return e.apply(null,t)}},Pe.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},p.exports=Pe,p.exports.default=Pe;var Ne=p.exports;const Ue=()=>{const e=Ne.create({baseURL:"/api/",transformRequest(e,t){const r=((e="")=>{var t;return(null==(t=e.match(/csrftoken=([^;]+)/))?void 0:t[1])||""})("undefined"==typeof document?"":document.cookie);return t.delete["X-CSRFToken"]=r,t.post["X-CSRFToken"]=r,t.post["Content-Type"]="application/json",JSON.stringify(e)}});return e.interceptors.response.use((e=>e.data),(e=>{throw e})),e},Te=e=>e,ke=(e={})=>{const{client:t=Ue(),fromServer:r=Te,toServer:n=Te}=e;let a=(new Date).valueOf();const i={},s={},u=o({loading:{},byUrl:{},byId:{}}),c=e=>{const n=a>i[e]||!u.byUrl[e];if(u.loading[e]){let t;s[e]=s[e]||[];const r=new Promise((e=>t=e));return s[e].push(t),r}return n?(u.loading[e]=!0,t.get(e).then((t=>{var n;return i[e]=(new Date).valueOf(),u.byUrl[e]=t,t.id?u.byId[t.id]=r(t):t.items&&t.items.forEach((e=>u.byId[e.id]=r(e))),u.loading[e]=!1,null==(n=s[e])||n.forEach((e=>e(t))),t}))):Promise.resolve(u.byUrl[e])},f=e=>(a=(new Date).valueOf(),e);return{state:u,fetch:c,get:e=>(c(e),u.byUrl[e]),markStale:f,post:(e,r)=>t.post(e,n(r)).then(f),put:(e,r)=>t.put(e,n(r)).then(f),delete:e=>t.delete(e).then(f)}};var Le=(e,t={})=>{const{append_slash:r=!0,fromServer:n,toServer:o}=t,i=r?"/":"",s=t.collection_slug||`${e}s`,u=t.client||Ue(),c=t.api||ke({client:u,fromServer:n,toServer:o});return{api:c,getOne:t=>c.get(`${e}/${t}${i}`),getPage:({page:e,limit:t=25}={})=>{const r=a.stringify({page:e,limit:t});return c.get(`${s}${i}?${r}`)},save(t){const r=t.id?`${e}/${t.id}${i}`:`${e}${i}`;return c.post(r,t)},delete:({id:t})=>c.delete(`${e}/${t}${i}`)}},Be={LocalStorage:l,ReactiveLocalStorage:f,MemoryStorage:u,RestStorage:Le,ReactiveRestApi:ke,getClient:Ue};export default Be;export{l as LocalStorage,u as MemoryStorage,f as ReactiveLocalStorage,ke as ReactiveRestApi,Le as RestStorage,Ue as getClient};