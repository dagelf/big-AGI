"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2723],{70994:(e,t,i)=>{let a,r,n;i.r(t),i.d(t,{MaxResolution:()=>tj,MediaError:()=>tB,MinResolution:()=>tQ,RenditionOrder:()=>tZ,default:()=>EG,generatePlayerInitTime:()=>i4,playerSoftwareName:()=>EY,playerSoftwareVersion:()=>Eq});var s=i(96540),o=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,m=function(e,t){return function(){return e&&(t=e(e=0)),t}},p=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},E=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=u(t),s=0,o=n.length;s<o;s++)r=n[s],h.call(e,r)||r===i||l(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=d(t,r))||a.enumerable});return e},b=function(e,t,i){return i=null!=e?o(c(e)):{},E(!t&&e&&e.__esModule?i:l(i,"default",{value:e,enumerable:!0}),e)},g=p(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function f(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):f(e,t)}var _=m(function(){_()});function y(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var T=m(function(){}),A=p(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),k=p(function(e,t){function i(e,t){if(!f(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),w=p(function(e,t){function i(e,t){if(!f(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),S=p(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),R=p(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),I=p(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),C=p(function(e,t){T(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=y(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),D=p(function(e,t){_();var i=A(),a=S(),r=R(),n=I(),s=C(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!f(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),L=p(function(e,t){_();var i=D();function a(e){if(!f(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),M=p(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),O=p(function(e,t){_();var i=A(),a=k(),r=w(),n=D(),s=L(),o=M(),l=S(),d=R(),u=I();function c(){if(!f(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=p(function(e,t){var i=O();t.exports=new i}),N=p(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=x();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function U(e,t){if(e){if("string"==typeof e)return P(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return P(e,t)}}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||U(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=b(g()),W=b(g()),V=b(g()),F={now:function(){var e=V.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},$=function(){if("function"==typeof(null===(e=W.default.crypto)||void 0===e?void 0:e.getRandomValues)){i=new Uint8Array(32),W.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=F.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},K=function(){return("000000"+(0x81bf1000*Math.random()<<0).toString(36)).slice(-6)},q=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=K()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},Y=function(e){e&&void 0!==e.nodeName?e=q(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function G(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Q=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,G(o)),d=(i=console.info).bind.apply(i,G(o)),u=(a=console.debug).bind.apply(a,G(o)),c=(r=console.warn).bind.apply(r,G(o)),h=(n=console.error).bind.apply(n,G(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.TRACE))return l.apply(void 0,G(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.DEBUG))return u.apply(void 0,G(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.INFO))return d.apply(void 0,G(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.WARN))return c.apply(void 0,G(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.ERROR))return h.apply(void 0,G(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]"),Z=b(g());function z(){return"1"===(Z.default.doNotTrack||Z.default.navigator&&Z.default.navigator.doNotTrack)}function X(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){if(!f(e,t))throw TypeError("Cannot call a class as a function")}function ee(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function et(e,t,i){return t&&ee(e.prototype,t),i&&ee(e,i),e}function ei(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ea(e){return(ea=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function er(e,t,i){return(er="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ea(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function en(e,t){return(en=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}_(),T();var es=function(e){return eo(e)[0]},eo=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},el=b(g()),ed={exists:function(){var e=el.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eu(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ec(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){ei(e,t,i[t])})}return e}function eh(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var em=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ep=["x-cdn","content-type"].concat(em);function ev(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ep.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eE(e){if(e){var t=em.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eb=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eg=function(e){if(!e)return{};var t=ed.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ef=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ev(e.getAllResponseHeaders())},e_=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ed.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eg(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,E=c.responseEnd;o("requestcompleted",eh(ec({},eb(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:E,request_type:"manifest",request_hostname:es(r),request_response_headers:ef(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eg(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:es(i.url),request_response_headers:ef(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eg(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:es(i.url),request_response_headers:ef(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eg(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ef(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?es(r.responseURL):void 0,request_id:h?eE(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ef(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:es(c),request_id:h?eE(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:es(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var E=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ey=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eT=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=es(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ev(u[u.length-1]._responseHeaders||""));var c=i?eE(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eA=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},ek=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},ew=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eS=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=ew(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:es(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eT(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,E=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:E,request_hostname:g,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eT(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,E=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,f=u.requestUrl,_=u.requestId,y=eA(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:E,request_hostname:g,request_id:_,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:ek(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=eh(ec({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:es(t.url)})};i.on("fragmentLoadingAbandoned",p);var E=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:es(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",E),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",E),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eR=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eI=0,eC=function(){function e(){J(this,e),ei(this,"_listeners",void 0)}return et(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eI,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eI;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eD=b(g()),eL=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackHeartbeatInterval",void 0),ei(this,"_playheadShouldBeProgressing",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eD.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return et(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eD.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eD.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eM=function e(t){var i=this;J(this,e),ei(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eO=function(){function e(t){J(this,e),ei(this,"_watchTimeTrackerLastCheckedTime",void 0),ei(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return et(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eu(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),ex=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ei(this,"_lastTime",void 0),ei(this,"_isAdPlaying",void 0),ei(this,"_callbackUpdatePlaybackTime",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=F.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=F.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return et(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=F.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&eu(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eN=function(){function e(t){J(this,e),ei(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return et(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eP=function e(t){if(J(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eu(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eu(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eU=function(){function e(t){var i=this;J(this,e),ei(this,"_lastCheckedTime",void 0),ei(this,"_lastPlayheadTime",void 0),ei(this,"_lastPlayheadTimeUpdatedTime",void 0),ei(this,"_rebuffering",void 0),ei(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:F.now()})}))}return et(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eB=function(){function e(t){var i=this;J(this,e),ei(this,"NAVIGATION_START",void 0),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||F.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||F.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return et(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eH=function e(t){var i=this;J(this,e),ei(this,"_lastPlayerHeight",void 0),ei(this,"_lastPlayerWidth",void 0),ei(this,"_lastPlayheadPosition",void 0),ei(this,"_lastSourceHeight",void 0),ei(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eu(t.data,"view_total_content_playback_time",e),eu(t.data,"view_total_upscaling",r*e),eu(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eW=function e(t){var i=this;J(this,e),ei(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=F.now(),r=(t.data.viewer_time||e)-(a||e);eu(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eu(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eV=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eF=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],e$=function(){function e(t){var i=this;J(this,e),ei(this,"_adHasPlayed",void 0),ei(this,"_adRequests",void 0),ei(this,"_adResponses",void 0),ei(this,"_currentAdRequestNumber",void 0),ei(this,"_currentAdResponseNumber",void 0),ei(this,"_prerollPlayTime",void 0),ei(this,"_wouldBeNewAdPlay",void 0),ei(this,"isAdBreak",void 0),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eF.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eV(i._adRequests,a),eu(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eu(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eV(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eu(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eu(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return et(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=B(eo(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=B(eo(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eK=b(g()),eq=function e(t){J(this,e);var i,a,r=function(){t.disableRebufferTracking||(eu(t.data,"view_waiting_rebuffer_count",1),i=F.now(),a=eK.default.setInterval(function(){if(i){var e=F.now();eu(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(eu(t.data,"view_waiting_rebuffer_duration",F.now()-i),i=!1,eK.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eY=function e(t){var i=this;J(this,e),ei(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=F.now(),t.on("before*",r)},r=function(e){var a=F.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eG=b(g()),ej=function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})}(),eQ="muxData",eZ=function(){var e;try{e=(ej.get(eQ)||"").split("&").reduce(function(e,t){var i=B(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},ez=function(e){try{ej.set(eQ,Object.entries(e).map(function(e){var t=B(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eX=function(){var e=eZ();return e.mux_viewer_id=e.mux_viewer_id||$(),e.msn=e.msn||Math.random(),ez(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eJ=function(){var e=eZ(),t=F.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=$(),e.sst=t),e.sex=t+15e5,ez(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},e0=b(g()),e1=function(){var e;switch(e2()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e2=function(){var e=e0.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e1.getConnectionFromAPI=e2;var e3=e5({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e4=e5({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e5(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e9(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e3[s];o||(Q.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e4[e]?o+=e4[e]:Number.isInteger(Number(e))?o+=e:(Q.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e8=b(g()),e6=b(N()),e7={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},te=["hb","requestcompleted","requestfailed","requestcanceled"],tt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e7,t)};tt.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},tt.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},tt.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e8.default.clearTimeout(this._sendTimeout)},tt.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e9({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tr(this._beaconUrl,i,!0,function(){})},tt.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=F.now();tr(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,Q.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=F.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},tt.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},tt.prototype._startBeaconSending=function(){var e=this;e8.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e8.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},tt.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(F.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(Q.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===te.indexOf(e.e)}),s()),o()||(Q.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var ti,ta="function"==typeof e6.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tr=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e8.default.fetch){e8.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ta(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e8.default.XMLHttpRequest){var r=new e8.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tn=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],ts=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],to=["ad_id","ad_creative_id","ad_universal_id"],tl=["viewstart","error","ended","viewend"],td=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,E,b,g,f,_,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};J(this,e),ei(this,"mux",void 0),ei(this,"envKey",void 0),ei(this,"options",void 0),ei(this,"eventQueue",void 0),ei(this,"sampleRate",void 0),ei(this,"disableCookies",void 0),ei(this,"respectDoNotTrack",void 0),ei(this,"previousBeaconData",void 0),ei(this,"lastEventTime",void 0),ei(this,"rateLimited",void 0),ei(this,"pageLevelData",void 0),ei(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new tt((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(_=this.options.sampleRate)&&void 0!==_?_:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(T=this.options.respectDoNotTrack)&&void 0!==T&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(E=this.options.platform)||void 0===E||null===(p=E.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(g=this.options.platform)||void 0===g||null===(b=g.os)||void 0===b?void 0:b.version,viewer_connection_type:e1(),page_url:null===eG.default||void 0===eG.default||null===(f=eG.default.location)||void 0===f?void 0:f.href},this.viewerData=this.disableCookies?{}:eX()}return et(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&z())return Q.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return Q.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eJ(),a=eh(ec({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e9(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return Q.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||Q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(Q.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tl.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e9(a),this.eventQueue.queueEvent(a.event,s),Q.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ec({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=B(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tn.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||to.includes(t)&&ts.includes(e))}}]),e}(),tu=function e(t){J(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tc=function e(t){var i=this;J(this,e),ei(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=F.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,ei({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},th=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tm=new Set(["requestcompleted","requestfailed","requestcanceled"]),tp=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&en(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ea(a);return e=t?Reflect.construct(i,arguments,ea(this).constructor):i.apply(this,arguments),e&&("object"===y(e)||"function"==typeof e)?e:X(this)});function a(e,t,r){J(this,a),ei(X(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),ei(X(n),"NAVIGATION_START",void 0),ei(X(n),"_destroyed",void 0),ei(X(n),"_heartBeatTimeout",void 0),ei(X(n),"adTracker",void 0),ei(X(n),"dashjs",void 0),ei(X(n),"data",void 0),ei(X(n),"disablePlayheadRebufferTracking",void 0),ei(X(n),"disableRebufferTracking",void 0),ei(X(n),"errorTracker",void 0),ei(X(n),"errorTranslator",void 0),ei(X(n),"emitTranslator",void 0),ei(X(n),"getAdData",void 0),ei(X(n),"getPlayheadTime",void 0),ei(X(n),"getStateData",void 0),ei(X(n),"stateDataTranslator",void 0),ei(X(n),"hlsjs",void 0),ei(X(n),"id",void 0),ei(X(n),"longResumeTracker",void 0),ei(X(n),"minimumRebufferDuration",void 0),ei(X(n),"mux",void 0),ei(X(n),"playbackEventDispatcher",void 0),ei(X(n),"playbackHeartbeat",void 0),ei(X(n),"playbackHeartbeatTime",void 0),ei(X(n),"playheadTime",void 0),ei(X(n),"seekingTracker",void 0),ei(X(n),"sustainedRebufferThreshold",void 0),ei(X(n),"watchTimeTracker",void 0),ei(X(n),"currentFragmentPDT",void 0),ei(X(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=ed.domContentLoadedEventEnd(),n.NAVIGATION_START=ed.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),Q.level=r.debug?j.DEBUG:j.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new td(e,r.data.env_key,r),n.data={player_instance_id:$(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(X(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),th.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tc(X(n)),n.errorTracker=new eM(X(n)),new eY(X(n)),n.seekingTracker=new eW(X(n)),n.playheadTime=new eN(X(n)),n.playbackHeartbeat=new eL(X(n)),new eH(X(n)),n.watchTimeTracker=new eO(X(n)),new ex(X(n)),n.adTracker=new e$(X(n)),new eU(X(n)),new eP(X(n)),new eB(X(n)),new eq(X(n)),new tu(X(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return et(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=er(ea(a.prototype),"emit",this)).call.apply(i,[this].concat(G(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=B(eo(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tm.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e=this.getStateData();if("function"==typeof this.stateDataTranslator)try{e=this.stateDataTranslator(e)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}Object.assign(this.data,e),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=$(),i=function(){t===e.data.view_id&&eu(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,e_(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ey(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eS(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eR(this.dashjs),this.dashjs=void 0)}}]),a}(eC),tv=b(N()),tE=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tg=b(g());tg.default&&tg.default.WeakMap&&(ti=new WeakMap);var tf={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},t_=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};t_.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},t_.prototype.processLine=function(e){var t=e.indexOf(":"),i=tR(e,t),a=i[0],r=2===i.length?tA(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tf.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tf.PART_INF:ty(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tf.SERVER_CONTROL:ty(this.manifest,i),this.setHoldBack();break;case tf.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tf.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tf.VERSION:ty(this.manifest,i);break;case tf.SESSION_DATA:var s=eb(tI(i[1]));Object.assign(this.manifest.sessionData,s)}},t_.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var ty=function(e,t){var i,a=tT(t[0].replace("#EXT-X-",""));tS(t[1])?(i={},i=Object.assign(tw(t[1]),i)):i=tA(t[1]),e[a]=i},tT=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tA=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tk=function(e){var t={},i=e.split("=");return i.length>1&&(t[tT(i[0])]=tA(i[1])),t},tw=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tk(t[a]),i);return i},tS=function(e){return e.indexOf("=")>-1},tR=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tI=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tC={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){Q.info("safeCall error",e)}return r},safeIncrement:eu,getComputedStyle:function(e,t){var i;return e&&t&&tg.default&&"function"==typeof tg.default.getComputedStyle?(ti&&ti.has(e)&&(i=ti.get(e)),i||(i=tg.default.getComputedStyle(e,null),ti&&ti.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ev,cdnHeadersToRequestId:eE,extractHostnameAndDomain:eo,extractHostname:es,manifestParser:t_,generateShortID:K,generateUUID:$,now:F.now,findMediaElement:Y},tD={},tL=function(e){var t=arguments;"string"==typeof e?tL.hasOwnProperty(e)?H.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tL[e].apply(null,t)},0):Q.warn("`"+e+"` is an unknown task"):"function"==typeof e?H.default.setTimeout(function(){e(tL)},0):Q.warn("`"+e+"` is invalid.")},tM={loaded:F.now(),NAME:"mux-embed",VERSION:"5.9.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=B(Y(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null===(e=this.getPlayheadTime)||void 0===e?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tv.default&&!!(tv.default.fullscreenElement||tv.default.webkitFullscreenElement||tv.default.mozFullScreenElement||tv.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(t=r.getVideoPlaybackQuality)||void 0===t?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(s.player_program_time=u+i,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);s.player_live_edge_program_time=c}}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=B(Y(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tE.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tb[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tL,e,t)},destroyMonitor:function(e){var t=B(Y(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():Q.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=q(e);tD[i]?tD[i].addHLSJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=q(e);tD[i]?tD[i].addDashJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=q(e);tD[t]?tD[t].removeHLSJS():Q.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=q(e);tD[t]?tD[t].removeDashJS():Q.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){z()&&t&&t.respectDoNotTrack&&Q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=q(e);tD[i]=new tp(tL,i,t)},emit:function(e,t,i){var a=q(e);tD[a]?(tD[a].emit(t,i),"destroy"===t&&delete tD[a]):Q.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=q(e);tD[i]?tD[i].emit("hb",t):Q.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=q(e);tD[i]?tD[i].emitTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=q(e);tD[i]?tD[i].stateDataTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=q(e);tD[i]?tD[i].getPlayheadTime=t:Q.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:z,log:Q,utils:tC,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tL,tM),void 0!==H.default&&"function"==typeof H.default.addEventListener&&H.default.addEventListener("pagehide",function(e){e.persisted||(tL.WINDOW_UNLOADING=!0)},!1);var tO=i(64945).Ay,tx={VIDEO:"video",DRM:"drm"},tN={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tP=e=>e===tx.VIDEO?"playback":e,tU=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tU.MEDIA_ERR_ABORTED=1,tU.MEDIA_ERR_NETWORK=2,tU.MEDIA_ERR_DECODE=3,tU.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tU.MEDIA_ERR_ENCRYPTED=5,tU.MEDIA_ERR_CUSTOM=100,tU.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tB=tU,tH=e=>null==e,tW=(e,t)=>!tH(t)&&e in t,tV={ANY:"any",MUTED:"muted"},tF={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},t$={MSE:"mse",NATIVE:"native"},tK={HEADER:"header",QUERY:"query",NONE:"none"},tq=Object.values(tK),tY={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tG={HLS:tY.M3U8},tj=(Object.keys(tG),[...Object.values(tY)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tQ={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tZ={DESCENDING:"desc"},tz={code:"en"},tX=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tJ=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t0=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tW(e,tG)?tG[e]:t}return t3(e)},t1=e=>"VOD"===e?tF.ON_DEMAND:tF.LIVE,t2=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,t3=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return t5(e)?tY.M3U8:"";let r=i.slice(a+1).toUpperCase();return tW(r,tY)?tY[r]:""},t4="mux.com",t5=({src:e,customDomain:t=t4})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},t9=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},t8=({exp:e},t=Date.now())=>!e||1e3*e<t,t6=({sub:e},t)=>e!==t,t7=({aud:e},t)=>!e,ie=({aud:e},t)=>e!==t;function it(e,t=!0){var i;return new ii(t&&null!=(i=null==tz?void 0:tz[e])?i:e,t?tz.code:"en")}var ii=class{constructor(e,t=(e=>null!=(e=tz)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ia=Object.values(tV),ir=e=>"boolean"==typeof e||"string"==typeof e&&ia.includes(e),is=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=ir(a)?a:!!a,o=()=>{r||tX(t,"playing",()=>{r=!0},{once:!0})};if(o(),tX(t,"loadstart",()=>{r=!1,o(),io(t,s)},{once:!0}),tX(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tF.UNKNOWN?e.streamType===tF.LIVE:!Number.isFinite(t.duration)),io(t,s)},{once:!0}),i&&i.once(tO.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tF.UNKNOWN?e.streamType===tF.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tX(t,"play",()=>{"metadata"===t.preload?i.once(tO.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||io(t,s=ir(e)?e:!!e)}},io=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tV.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tV.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},il=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tX(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},id=e=>"time"in e?e.time:e.startTime;function iu(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function ic(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function ih(e,t,i,a){let r=ic(e,i,a);return r||((r=iu(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>id(t)-id(e)).forEach(t=>{var i,n;let s=t.value,o=id(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var im="cuepoints",ip=Object.freeze({label:im});async function iv(e,t,i=ip){return ih(e,t,i.label,"metadata")}var iE=e=>({time:e.startTime,value:JSON.parse(e.text)});function ib(e,t={label:im}){var i,a;let r=ic(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iE(r.activeCues[0]);let{currentTime:n}=e;return iE(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ig(e,t=ip){return new Promise(i=>{tX(e,"loadstart",async()=>{let a=await iv(e,[],t);tX(e,"cuechange",()=>{let t=ib(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var i_="chapters",iy=Object.freeze({label:i_}),iT=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iA(e,t,i=iy){return ih(e,t,i.label,"chapters")}function ik(e,t={label:i_}){var i,a;let r=ic(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iT(r.activeCues[0]);let{currentTime:n}=e;return iT(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iw(e,t=iy){return new Promise(i=>{tX(e,"loadstart",async()=>{let a=await iA(e,[],t);tX(e,"cuechange",()=>{let t=ik(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iS={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iR=e=>e===tx.VIDEO?iS.VIDEO:e===tx.DRM?iS.DRM:void 0,iI=(e,t)=>{var i,a;let r=tP(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tW(n,t)?t[n]:void 0},iC=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=it("Your device appears to be offline",r),a=tB.MEDIA_ERR_NETWORK,n=new tB(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tN.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tB.MEDIA_ERR_NETWORK;if(200===l)return;let c=tP(t),h=iI(t,i),m=iR(t),[p]=tJ(null!=(s=i.playbackId)?s:"");if(!l||!p)return;let E=t9(h);if(h&&!E){let i=new tB(it("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,it("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tB("",u,null==a||a);return e.errorCategory=t,e.muxCode=tN.NETWORK_UNKNOWN_ERROR,e}if(403===l){if(E){if(t8(E,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tB(it("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,it("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=E.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=tN.NETWORK_TOKEN_EXPIRED,a.data=e,a}if(t6(E,p)){let i=new tB(it("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,it("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:p,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if(t7(E,m)){let i=new tB(it("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,it("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if(ie(E,m)){let i=new tB(it("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,it("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:E.aud}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tB(it("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_MISSING,i.data=e,i}}if(412===l){let n=new tB(it("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:p}));return n.errorCategory=t,n.muxCode=tN.NETWORK_NOT_READY,n.streamType=i.streamType===tF.LIVE?"live":i.streamType===tF.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tB(it("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tN.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tB(it("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tN.NETWORK_INVALID_URL,i.data=e,i}let b=new tB("",u,null==a||a);return b.errorCategory=t,b.muxCode=tN.NETWORK_UNKNOWN_ERROR,b.data=e,b},iD=tO.DefaultConfig.capLevelController,iL={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},iM=class e extends iD{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iL[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iD.getMaxLevelByMediaSize(a,16/9*n,n)}};iM.minMaxResolution=720,iM.maxAutoResolution=new WeakMap;var iO,ix,iN,iP,iU,iB,iH={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},iW=e=>e.includes("fps")?iH.FAIRPLAY:e.includes("playready")?iH.PLAYREADY:e.includes("widevine")?iH.WIDEVINE:void 0,iV=e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text()),iF=e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(i$)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}},i$=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,iK=e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t1(n),o=t2(n),l;if(s===tF.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*+e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=3*+(null!=t?t:6)}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},iq=async(e,t)=>{if(t===tY.MP4)return{streamType:tF.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tY.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await iV(i);return{...iF(i),...iK(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iY=async(e,t,i=t0({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iq(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iG(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=i0.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=i0.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=i0.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iG=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=i0.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},ij=e=>{var t;let i=e.type,a=t1(i),r=t2(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tF.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},iQ=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=ij(e);if(c===tF.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=i0.get(t))?o:{}).seekable=e}(null!=(l=i0.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=i0.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=i0.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iZ=null!=(ix=null==(iO=null==globalThis?void 0:globalThis.navigator)?void 0:iO.userAgent)?ix:"",iz=null!=(iU=null==(iP=null==(iN=null==globalThis?void 0:globalThis.navigator)?void 0:iN.userAgentData)?void 0:iP.platform)?iU:"",iX=iZ.toLowerCase().includes("android")||["x11","android"].some(e=>iz.toLowerCase().includes(e)),iJ=e=>/^((?!chrome|android).)*safari/i.test(iZ)&&!!e.canPlayType("application/vnd.apple.mpegurl"),i0=new WeakMap,i1="mux.com",i2=null==(iB=tO.isSupported)?void 0:iB.call(tO),i3=e=>iX||!iJ(e),i4=()=>{if("undefined"!=typeof window)return tL.utils.now()},i5=tL.utils.generateUUID,i9=({playbackId:e,customDomain:t=i1,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=tJ(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i8=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},i6=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},i7=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:aA(e)&&null!=(a=null!=(i=i8(e.playbackId))?i:i6(e.src))?a:e.src},ae=e=>{var t;return null==(t=i0.get(e))?void 0:t.error},at=e=>{var t;return null==(t=i0.get(e))?void 0:t.metadata},ai=e=>{var t,i;return null!=(i=null==(t=i0.get(e))?void 0:t.streamType)?i:tF.UNKNOWN},aa=e=>{var t,i;return null!=(i=null==(t=i0.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},ar=e=>{var t,i;return null!=(i=null==(t=i0.get(e))?void 0:t.seekable)?i:e.seekable},an=e=>{var t;let i=null==(t=i0.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=ar(e);return a.length?a.end(a.length-1)-i:Number.NaN},as=.034,ao=(e,t,i=as)=>Math.abs(e-t)<=i,al=(e,t,i=as)=>e>t||ao(e,t,i),ad=(e,t=as)=>e.paused&&al(e.currentTime,e.duration,t),au=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},ac=(e,t)=>e.ended||e.loop?e.ended:!!(t&&au(e,t))||ad(e),ah=(e,t,i)=>{am(t,i,e);let{metadata:a={}}=e,{view_session_id:r=i5()}=a,n=i7(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},i0.set(t,{retryCount:0});let s=av(e,t),o=il(e,t,s);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?s&&t.mux.addHLSJS({hlsjs:s,Hls:s?tO:void 0}):ak(e,t,s),aw(e,t,s),ig(t),iw(t);let l=is(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},am=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",aR),e.removeEventListener("error",aC),e.removeEventListener("durationchange",aS),i0.delete(e),e.dispatchEvent(new Event("teardown")))};function ap(e,t){var i;let a=t0(e);if(a!==tY.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===t$.MSE,o=n===t$.NATIVE,l=i2&&(s||i3(t));return r&&(o||!l)}var av=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,d=t0(e)===tY.M3U8,u=ap(e,t);if(d&&!u&&i2){let d=aE(a),u=ab(e),c=[tK.QUERY,tK.HEADER].includes(s)?{useHeaders:s===tK.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,h=null==o.capLevelToPlayerSize?{capLevelController:iM}:{},m=new tO({debug:i,startPosition:r,cmcd:c,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tK.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...h,backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...d,...u,...o});return h.capLevelController===iM&&void 0!==l&&iM.setMaxAutoResolution(m,l),m.on(tO.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iG(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),m}},aE=e=>e===tF.LIVE?{backBufferLength:8}:{},ab=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i8(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ay(e,"fairplay"),serverCertificateUrl:aT(e,"fairplay")},"com.widevine.alpha":{licenseUrl:ay(e,"widevine")},"com.microsoft.playready":{licenseUrl:ay(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=iW(e);return null==a||a(i),t}))}:{}},ag=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},af=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},a_=(e,t)=>{let i=async i=>{let a=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,iH.FAIRPLAY),t}).catch(()=>{let e=new tB(it("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tB.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tx.DRM,e.muxCode=tN.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,aI(t,e)});if(!a)return;let r=await a.createMediaKeys();try{let t=await ag(aT(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iC(t,tx.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)});await r.setServerCertificate(t).catch(()=>{let e=it("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tx.DRM,t.muxCode=tN.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(e){aI(t,e);return}await t.setMediaKeys(r)},a=e=>{let i;"internal-error"===e?((i=new tB(it("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tB.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_CDM_ERROR):("output-restricted"===e||"output-downscaled"===e)&&((i=new tB(it("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tB.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_OUTPUT_RESTRICTED),i&&aI(t,i)},r=async(i,r)=>{let n=t.mediaKeys.createSession(),s=()=>{n.keyStatuses.forEach(e=>a(e))},o=async i=>{let a=i.message;try{let i=await af(a,ay(e,"fairplay"));try{await n.update(i)}catch{let e=it("Failed to update DRM license. This may be an issue with the player or your protected content."),i=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_UPDATE_LICENSE_FAILED,aI(t,i)}}catch(i){if(i instanceof Response){let a=iC(i,tx.DRM,e);if(console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a){aI(t,a);return}console.error("Unexpected error in license key request",i);return}console.error(i)}};n.addEventListener("keystatuseschange",s),n.addEventListener("message",o),t.addEventListener("teardown",()=>{n.removeEventListener("keystatuseschange",s),n.removeEventListener("message",o),n.close()},{once:!0}),await n.generateRequest(i,r).catch(e=>{console.error("Failed to generate license request",e);let t=new tB(it("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tB.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tx.DRM,t.muxCode=tN.ENCRYPTED_GENERATE_REQUEST_FAILED,Promise.reject(t)})};tX(t,"encrypted",async e=>{try{let a=e.initDataType;if("skd"!==a){console.error(`Received unexpected initialization data type "${a}"`);return}t.mediaKeys||await i(a);let n=e.initData;if(null==n){console.error(`Could not start encrypted playback due to missing initData in ${e.type} event`);return}await r(a,n)}catch(e){aI(t,e);return}})},ay=({playbackId:e,tokens:{drm:t}={},customDomain:i=i1},a)=>{let r=i8(e);return`https://license.${i.toLocaleLowerCase().endsWith(i1)?i:i1}/license/${a}/${r}?token=${t}`},aT=({playbackId:e,tokens:{drm:t}={},customDomain:i=i1},a)=>{let r=i8(e);return`https://license.${i.toLocaleLowerCase().endsWith(i1)?i:i1}/appcert/${a}/${r}?token=${t}`},aA=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(i1)||!!i&&a.includes(i.toLocaleLowerCase())},ak=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tL,muxDataSDKOptions:o={}}=e,l=aA(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tO:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},aw=(e,t,i)=>{var a,r;let n=ap(e,t),{src:s,customDomain:o=i1}=e,l=()=>{t.ended||e.disablePseudoEnded||!ac(t,i)||(au(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=ar(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(tX(t,"durationchange",c),t&&n){let i=t0(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=i6(s);iG(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(ai(t)!==tF.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tX(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iY(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iC(i,tx.VIDEO,e);if(a){aI(t,a);return}}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};tX(t,"play",e,{once:!0}),tX(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?a_(e,t):tX(t,"encrypted",()=>{let e=new tB(it("Attempting to play DRM-protected content without providing a DRM token."),tB.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tx.DRM,e.muxCode=tN.ENCRYPTED_MISSING_TOKEN,aI(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=i0.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",aS,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",aR),t.addEventListener("error",aC),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tX(t,"pause",l),tX(t,"seeked",l),tX(t,"play",()=>{t.ended||al(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tO.Events.LEVEL_LOADED,(e,a)=>{iQ(a.details,t,i),c(),ai(t)!==tF.LIVE||Number.isFinite(t.duration)||(i.on(tO.Events.LEVEL_UPDATED,c),tX(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tO.Events.LEVELS_UPDATED,c)}))}),i.on(tO.Events.ERROR,(a,r)=>{var n,s;let o=aF(r,e);if(o.muxCode===tN.NETWORK_NOT_READY){let e=null!=(n=i0.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tB(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),aI(t,s),setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);return}{e.retryCount=0;let i=new tB('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),aI(t,i);return}}aI(t,o)}),i.on(tO.Events.MANIFEST_LOADED,()=>{let e=i0.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",aC),tX(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tO.Events.MANIFEST_PARSED,function(t,i){s();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tO.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(n(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tO.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)}),null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)});let r=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},n=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},s=()=>{r(),n()};t.once(tO.Events.DESTROYING,s)}(e,i),function(e,t){t.on(tO.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;iu(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tO.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tO.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tO.Events.MANIFEST_LOADED,a),t.once(tO.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function aS(e){var t;let i=e.target,a=null==(t=i0.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function aR(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tB(i,a);if(t.src&&a===tB.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var e;let i=null!=(e=ae(t))?e:t.error;(null==i?void 0:i.code)===tB.MEDIA_ERR_SRC_NOT_SUPPORTED&&aI(t,r)},500);return}if(t.src&&(a!==tB.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}aI(t,r)}function aI(e,t){var i;t.fatal&&((null!=(i=i0.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aC(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tB))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=i0.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aD,aL,aM,aO,ax,aN,aP,aU,aB,aH,aW,aV,aF=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tO.ErrorTypes.NETWORK_ERROR]:tB.MEDIA_ERR_NETWORK,[tO.ErrorTypes.MEDIA_ERROR]:tB.MEDIA_ERR_DECODE,[tO.ErrorTypes.KEY_SYSTEM_ERROR]:tB.MEDIA_ERR_ENCRYPTED},s,o=(e=>[tO.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tO.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tB.MEDIA_ERR_NETWORK:n[e.type])(e);if(o===tB.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=(e=>e.type===tO.ErrorTypes.KEY_SYSTEM_ERROR?tx.DRM:e.type===tO.ErrorTypes.NETWORK_ERROR?tx.VIDEO:void 0)(e))?i:tx.VIDEO;s=null!=(a=iC(e.response,r,t,e.fatal))?a:new tB("",o,e.fatal)}else o===tB.MEDIA_ERR_ENCRYPTED?e.details===tO.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tB(it("Attempting to play DRM-protected content without providing a DRM token."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_MISSING_TOKEN):e.details===tO.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tB(it("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tO.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tB(it("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tB.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tO.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tB(it("Failed to update DRM license. This may be an issue with the player or your protected content."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tO.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tB(it("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tO.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tB(it("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_CDM_ERROR):e.details===tO.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tB(it("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tB.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tB(e.error.message,tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_ERROR):s=new tB("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},a$=i(61121),aK=e=>{throw TypeError(e)},aq=(e,t,i)=>t.has(e)||aK("Cannot "+i),aY=(e,t,i)=>(aq(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i)=>t.has(e)?aK("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),aj=(e,t,i,a)=>(aq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aQ=(e,t,i)=>(aq(e,t,"access private method"),i),aZ=(()=>{try{return"0.29.2"}catch{}return"UNKNOWN"})(),az=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,aX={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},aJ=Object.values(aX),a0="mux-video",a1=class extends a$.lB{constructor(){super(),aG(this,aW),aG(this,aD),aG(this,aL),aG(this,aM),aG(this,aO,{}),aG(this,ax,{}),aG(this,aN),aG(this,aP),aG(this,aU),aG(this,aB),aG(this,aH,""),aj(this,aM,i4()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let i=at(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(aj(this,aH,"default"),this.updateLogo())})}static get NAME(){return a0}static get VERSION(){return aZ}static get observedAttributes(){var e;return[...aJ,...null!=(e=a$.lB.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?az:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${a$.lB.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[aX.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(aX.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tq.includes(e)?this.setAttribute(aX.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tq.join()}`):this.removeAttribute(aX.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(aX.PLAYER_INIT_TIME)?+this.getAttribute(aX.PLAYER_INIT_TIME):aY(this,aM)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aX.PLAYER_INIT_TIME):this.setAttribute(aX.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=aY(this,aU))?e:a0}set playerSoftwareName(e){aj(this,aU,e)}get playerSoftwareVersion(){var e;return null!=(e=aY(this,aP))?e:aZ}set playerSoftwareVersion(e){aj(this,aP,e)}get _hls(){var e;return null==(e=aY(this,aD))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=ae(this.nativeEl))?e:null}get errorTranslator(){return aY(this,aB)}set errorTranslator(e){aj(this,aB,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(aX.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(aX.TYPE,e):this.removeAttribute(aX.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(aX.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(aX.DEBUG,""):this.removeAttribute(aX.DEBUG))}get disableTracking(){return this.hasAttribute(aX.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(aX.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(aX.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(aX.DISABLE_COOKIES,""):this.removeAttribute(aX.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(aX.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(aX.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(aX.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(aX.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(aX.START_TIME):this.setAttribute(aX.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(aX.PLAYBACK_ID)?this.getAttribute(aX.PLAYBACK_ID):null!=(e=i6(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(aX.PLAYBACK_ID,e):this.removeAttribute(aX.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(aX.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aX.MAX_RESOLUTION,e):this.removeAttribute(aX.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aX.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aX.MIN_RESOLUTION,e):this.removeAttribute(aX.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(aX.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(aX.MAX_AUTO_RESOLUTION):this.setAttribute(aX.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(aX.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aX.RENDITION_ORDER,e):this.removeAttribute(aX.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(aX.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(aX.PROGRAM_START_TIME):this.setAttribute(aX.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(aX.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(aX.PROGRAM_END_TIME):this.setAttribute(aX.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(aX.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(aX.ASSET_START_TIME):this.setAttribute(aX.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(aX.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(aX.ASSET_END_TIME):this.setAttribute(aX.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(aX.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aX.CUSTOM_DOMAIN,e):this.removeAttribute(aX.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(aX.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(aX.DRM_TOKEN,e):this.removeAttribute(aX.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(aX.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(aX.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(aX.PLAYBACK_ID)){let[,e]=tJ(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(aX.PLAYBACK_TOKEN,e):this.removeAttribute(aX.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(aX.PLAYBACK_TOKEN),t=this.getAttribute(aX.DRM_TOKEN);return{...aY(this,ax),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){aj(this,ax,null!=e?e:{})}get ended(){return ac(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(aX.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(aX.ENV_KEY,e):this.removeAttribute(aX.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aX.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aX.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aX.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(aX.STREAM_TYPE))?e:ai(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(aX.STREAM_TYPE,e):this.removeAttribute(aX.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(aX.TARGET_LIVE_WINDOW)?+this.getAttribute(aX.TARGET_LIVE_WINDOW):aa(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(aX.TARGET_LIVE_WINDOW):this.setAttribute(aX.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(aX.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return an(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(aX.LIVE_EDGE_OFFSET))return+this.getAttribute(aX.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(aX.LIVE_EDGE_OFFSET):this.setAttribute(aX.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return ar(this.nativeEl)}async addCuePoints(e){return iv(this.nativeEl,e)}get activeCuePoint(){return ib(this.nativeEl)}get cuePoints(){return function(e,t={label:im}){let i=ic(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iE(e)):[]}(this.nativeEl)}async addChapters(e){return iA(this.nativeEl,e)}get activeChapter(){return ik(this.nativeEl)}get chapters(){return function(e,t={label:i_}){var i;let a=ic(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iT(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(aX.PREFER_PLAYBACK);if(e===t$.MSE||e===t$.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===t$.MSE||e===t$.NATIVE?this.setAttribute(aX.PREFER_PLAYBACK,e):this.removeAttribute(aX.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![aX.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...aY(this,aO)}}set metadata(e){aj(this,aO,null!=e?e:{}),this.mux&&this.mux.emit("hb",aY(this,aO))}get _hlsConfig(){return aY(this,aN)}set _hlsConfig(e){aj(this,aN,e)}get logo(){var e;return null!=(e=this.getAttribute(aX.LOGO))?e:aY(this,aH)}set logo(e){e?this.setAttribute(aX.LOGO,e):this.removeAttribute(aX.LOGO)}load(){aj(this,aD,ah(this,this.nativeEl,aY(this,aD)))}unload(){am(this.nativeEl,aY(this,aD),this),aj(this,aD,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(a$.lB.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case aX.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case aX.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?aQ(this,aW,aV).call(this):e&&!a?this.unload():e&&a&&(this.unload(),aQ(this,aW,aV).call(this));break}case"autoplay":if(i===t)break;null==(a=aY(this,aD))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=aY(this,aD))||r.setPreload(i);break;case aX.PLAYBACK_ID:this.src=i9(this);break;case aX.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case aX.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case aX.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case aX.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case aX.LOGO:(null==i||i!==t)&&this.updateLogo();break;case aX.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),aQ(this,aW,aV).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case aX.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))})}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(aY(this,aH)||this.logo);e.innerHTML=t}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!aY(this,aD)&&aQ(this,aW,aV).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};aD=new WeakMap,aL=new WeakMap,aM=new WeakMap,aO=new WeakMap,ax=new WeakMap,aN=new WeakMap,aP=new WeakMap,aU=new WeakMap,aB=new WeakMap,aH=new WeakMap,aW=new WeakSet,aV=async function(){aY(this,aL)||(await aj(this,aL,Promise.resolve()),aj(this,aL,null),this.load())};let a2=new WeakMap;class a3 extends Error{}class a4 extends Error{}let a5=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function a9(){return globalThis.cast?.framework?.CastContext.getInstance()}function a8(){return a9()?.getCurrentSession()}function a6(){return a8()?.getSessionObj().media[0]}function a7(e){return a9().setOptions({...re(),...e})}function re(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function rt(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return a5.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function ri(e){try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=i.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return function(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}(r)}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let ra=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),rr=new WeakSet;!function(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}a||(a=cast.framework,a9().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{ra.forEach(t=>a2.get(t).onCastStateChanged?.(e))}),a9().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{ra.forEach(t=>a2.get(t).onSessionStateChanged?.(e))}),ra.forEach(e=>a2.get(e).init?.()))});let rn=0;class rs extends EventTarget{#e;#t;#i;#a;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;constructor(e){super(),this.#e=e,ra.add(this),a2.set(this,{init:()=>this.#l(),onCastStateChanged:()=>this.#d(),onSessionStateChanged:()=>this.#u(),getCastPlayer:()=>this.#c}),this.#l()}get #c(){if(rr.has(this.#e))return this.#i}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new a3("disableRemotePlayback attribute is present.");return this.#o.set(e,++rn),this.#s.add(e),queueMicrotask(()=>e(this.#h())),rn}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new a3("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new a3("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new a4("The RemotePlayback API is disabled on this platform.");let e=rr.has(this.#e);rr.add(this.#e),a7(this.#e.castOptions),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{await a9().requestSession()}catch(t){if(e||rr.delete(this.#e),"cancel"===t)return;throw Error(t)}a2.get(this.#e)?.loadOnPrompt?.()}#m(){rr.has(this.#e)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),rr.delete(this.#e),this.#e.muted=this.#i.isMuted,this.#e.currentTime=this.#i.savedPlayerState.currentTime,!1===this.#i.savedPlayerState.isPaused&&this.#e.play())}#h(){let e=a9()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#d(){let e=a9().getCastState();if(rr.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #u(){let{SESSION_RESUMED:e}=a.SessionState;if(a9().getSessionState()===e&&this.#e.castSrc===a6()?.media.contentId){rr.add(this.#e),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{a6().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#a[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#l(){a&&!this.#t&&(this.#t=!0,a7(this.#e.castOptions),this.#e.textTracks.addEventListener("change",()=>this.#p()),this.#d(),this.#i=new a.RemotePlayer,new a.RemotePlayerController(this.#i),this.#a={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#c?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#c?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#c?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#c?.isMediaLoaded&&(await Promise.resolve(),this.#v())}})}#v(){this.#p()}async #p(){let e;if(!this.#c)return;let t=(this.#i.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=a8()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{a6().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let ro=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#E={paused:!1};#b=re();#g;#f;get remote(){return this.#f?this.#f:globalThis.chrome?(this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),a2.set(this,{loadOnPrompt:()=>this.#_()}),this.#f=new rs(this)):super.remote}get #c(){return a2.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#b.receiverApplicationId=i;return}if(this.#c)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #_(){this.#E.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#c)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],rt(this.castSrc)){let t=await ri(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#E.paused,r.activeTrackIds=i,await a8()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#c){this.#c.isPaused&&this.#c.controller?.playOrPause();return}return super.play()}pause(){if(this.#c){this.#c.isPaused||this.#c.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#b}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#g}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}this.#g=e}get readyState(){if(this.#c)switch(this.#c.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#c?this.#c.isPaused:super.paused}get muted(){return this.#c?this.#c?.isMuted:super.muted}set muted(e){if(this.#c){(e&&!this.#c.isMuted||!e&&this.#c.isMuted)&&this.#c.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#c?this.#c?.volumeLevel??1:super.volume}set volume(e){if(this.#c){this.#c.volumeLevel=+e,this.#c.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#c&&this.#c?.isMediaLoaded?this.#c?.duration??NaN:super.duration}get currentTime(){return this.#c&&this.#c?.isMediaLoaded?this.#c?.currentTime??0:super.currentTime}set currentTime(e){if(this.#c){this.#c.currentTime=e,this.#c.controller?.seek();return}super.currentTime=e}};var rl=i(36115),rd=e=>{throw TypeError(e)},ru=(e,t,i)=>t.has(e)||rd("Cannot "+i),rc=(e,t,i)=>(ru(e,t,"read from private field"),i?i.call(e):t.get(e)),rh=(e,t,i)=>t.has(e)?rd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rm=(e,t,i,a)=>(ru(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rp=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends rp{}globalThis.DocumentFragment=e}var rv,rE=class extends rp{},rb=class{constructor(e,t={}){rh(this,rv),rm(this,rv,null==t?void 0:t.detail)}get detail(){return rc(this,rv)}initCustomEvent(){}};rv=new WeakMap;var rg={document:{createElement:function(e,t){return new rE}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rE)},CustomEvent:rb,EventTarget:rp,HTMLElement:rE,HTMLVideoElement:class extends rp{}},rf="undefined"==typeof window||void 0===globalThis.customElements,r_=rf?rg:globalThis;rf?rg.document:globalThis.document;var ry,rT=class extends ro((0,rl.u6)(a1)){constructor(){super(...arguments),rh(this,ry)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rc(this,ry))?e:this.muxCastCustomData}set castCustomData(e){rm(this,ry,e)}};ry=new WeakMap,r_.customElements.get("mux-video")||(r_.customElements.define("mux-video",rT),r_.MuxVideoElement=rT);let rA={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rk={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},rw={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rS=Object.entries(rw),rR=rS.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),rI=rS.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(rI).reduce((e,[t,i])=>{let a=rR[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let rC=Object.entries(rR).reduce((e,[t,i])=>{let a=rI[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),rD={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},rL={DISABLED:"disabled",SHOWING:"showing"},rM={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},rO={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},rx={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},rN={FULLSCREEN:"fullscreen"};function rP(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function rU(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function rB(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function rH(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function rW(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function rV(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let rF=e=>new Promise(t=>setTimeout(t,e)),r$=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],rK=(e,t)=>{let i=1===e?r$[t].singular:r$[t].plural;return`${e} ${i}`},rq=e=>{if(!rW(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&rK(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function rY(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let rG={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},rj=(null==(u3=globalThis.navigator)?void 0:u3.language)||"en",rQ=e=>{rj=e},rZ=e=>{var t,i,a;let[r]=rj.split("-");return(null==(t=rG[rj])?void 0:t[e])||(null==(i=rG[r])?void 0:i[e])||(null==(a=rG.en)?void 0:a[e])||e},rz=(e,t={})=>rZ(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class rX{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class rJ extends rX{}class r0 extends rJ{constructor(){super(...arguments),this.role=null}}class r1{observe(){}unobserve(){}disconnect(){}}let r2={createElement:function(){return new r3.HTMLElement},createElementNS:function(){return new r3.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},r3={ResizeObserver:r1,document:r2,Node:rJ,Element:r0,HTMLElement:class extends r0{constructor(){super(...arguments),this.innerHTML=""}get content(){return new r3.DocumentFragment}},DocumentFragment:class extends rX{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},r4="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,r5=Object.keys(r3).every(e=>e in globalThis),r9=r4&&!r5?r3:globalThis,r8=r4&&!r5?r2:globalThis.document,r6=new WeakMap,r7=e=>{let t=r6.get(e);return t||r6.set(e,t=new Set),t},ne=new r9.ResizeObserver(e=>{for(let t of e)for(let e of r7(t.target))e(t)});function nt(e,t){r7(e).add(t),ne.observe(e)}function ni(e,t){let i=r7(e);i.delete(t),i.size||ne.unobserve(e)}function na(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nr(e){var t;return null!=(t=nn(e))?t:nu(e,"media-controller")}function nn(e){var t;let{MEDIA_CONTROLLER:i}=rk,a=e.getAttribute(i);if(a)return null==(t=nh(e))?void 0:t.getElementById(a)}let ns=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},no=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},nl=(e,t)=>no(e,t)[0],nd=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||nd(e,t.getRootNode().host)),nu=(e,t)=>e?e.closest(t)||nu(e.getRootNode().host,t):null;function nc(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=nc(i.shadowRoot))?t:i:null}function nh(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function nm(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function np(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||nv(e,t)}function nv(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function nE(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function nb(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}nE(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ng(e,t){return e.hasAttribute(t)}function nf(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ng(e,t)!=i&&e.toggleAttribute(t,i)}function n_(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function ny(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;n_(e,t,void 0)!==a&&e.setAttribute(t,a)}var nT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nA=(e,t,i)=>(nT(e,t,"read from private field"),i?i.call(e):t.get(e)),nk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nw=(e,t,i,a)=>(nT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nS extends r9.HTMLElement{constructor(){if(super(),nk(this,u4,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rk.MEDIA_CONTROLLER,rR.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rk.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nA(this,u4))?void 0:a.unassociateElement)||r.call(a,this),nw(this,u4,null)),i&&this.isConnected&&(nw(this,u4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nA(this,u4))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),nw(this,u4,function(e){var t;let i=e.getAttribute(rk.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):nu(e,"media-controller")}(this)),this.getAttribute(rk.MEDIA_CONTROLLER)&&(null==(t=null==(e=nA(this,u4))?void 0:e.associateElement)||t.call(e,this)),null==(i=nA(this,u4))||i.addEventListener("pointerdown",this),null==(a=nA(this,u4))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(rk.MEDIA_CONTROLLER)&&(null==(t=null==(e=nA(this,u4))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=nA(this,u4))||i.removeEventListener("pointerdown",this),null==(a=nA(this,u4))||a.removeEventListener("click",this),nw(this,u4,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===rM.TOUCH){this.handleTap(e);return}if(d===rM.MOUSE||d===rM.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return ng(this,rR.MEDIA_PAUSED)}set mediaPaused(e){nf(this,rR.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rA.MEDIA_PLAY_REQUEST:rA.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new r9.CustomEvent(t,{composed:!0,bubbles:!0}))}}u4=new WeakMap,nS.shadowRootOptions={mode:"open"},nS.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},r9.customElements.get("media-gesture-receiver")||r9.customElements.define("media-gesture-receiver",nS);var nR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nI=(e,t,i)=>(nR(e,t,"read from private field"),i?i.call(e):t.get(e)),nC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nD=(e,t,i,a)=>(nR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nL=(e,t,i)=>(nR(e,t,"access private method"),i);let nM={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},nO=Object.values(rR);function nx(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(nM.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(rI.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(rI.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class nN extends r9.HTMLElement{constructor(){if(super(),nC(this,ce),nC(this,cr),nC(this,cs),nC(this,cl),nC(this,cu),nC(this,ch),nC(this,u5,0),nC(this,u9,null),nC(this,u8,null),nC(this,u6,void 0),this.breakpointsComputed=!1,nC(this,u7,new MutationObserver(nL(this,ce,ct).bind(this))),nC(this,ci,!1),nC(this,ca,e=>{nI(this,ci)||(setTimeout(()=>{(function(e){nx(e.target,e.contentRect.width)})(e),nD(this,ci,!1)},0),nD(this,ci,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){nI(this,u9)&&this.mediaUnsetCallback(nI(this,u9));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[nM.AUTOHIDE,nM.GESTURES_DISABLED].concat(nO).filter(e=>![rR.MEDIA_RENDITION_LIST,rR.MEDIA_AUDIO_TRACK_LIST,rR.MEDIA_CHAPTERS_CUES,rR.MEDIA_WIDTH,rR.MEDIA_HEIGHT,rR.MEDIA_ERROR,rR.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==nM.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(nD(this,u9,e),e.localName.includes("-")&&await r9.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;nI(this,u7).observe(this,{childList:!0,subtree:!0}),nt(this,nI(this,ca));let t=null!=this.getAttribute(nM.AUDIO)?rz("audio player"):rz("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(nM.USER_INACTIVE,""),nx(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=r9.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;nI(this,u7).disconnect(),ni(this,nI(this,ca)),this.media&&this.mediaUnsetCallback(this.media),null==(e=r9.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){nD(this,u9,null)}handleEvent(e){switch(e.type){case"pointerdown":nD(this,u5,e.timeStamp);break;case"pointermove":nL(this,cr,cn).call(this,e);break;case"pointerup":nL(this,cs,co).call(this,e);break;case"mouseleave":nL(this,cl,cd).call(this);break;case"mouseup":this.removeAttribute(nM.KEYBOARD_CONTROL);break;case"keyup":nL(this,ch,cm).call(this),this.setAttribute(nM.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);nD(this,u6,isNaN(t)?0:t)}get autohide(){return(void 0===nI(this,u6)?2:nI(this,u6)).toString()}get breakpoints(){return n_(this,nM.BREAKPOINTS)}set breakpoints(e){ny(this,nM.BREAKPOINTS,e)}get audio(){return ng(this,nM.AUDIO)}set audio(e){nf(this,nM.AUDIO,e)}get gesturesDisabled(){return ng(this,nM.GESTURES_DISABLED)}set gesturesDisabled(e){nf(this,nM.GESTURES_DISABLED,e)}get keyboardControl(){return ng(this,nM.KEYBOARD_CONTROL)}set keyboardControl(e){nf(this,nM.KEYBOARD_CONTROL,e)}get noAutohide(){return ng(this,nM.NO_AUTOHIDE)}set noAutohide(e){nf(this,nM.NO_AUTOHIDE,e)}get autohideOverControls(){return ng(this,nM.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){nf(this,nM.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return ng(this,nM.USER_INACTIVE)}set userInteractive(e){nf(this,nM.USER_INACTIVE,e)}}u5=new WeakMap,u9=new WeakMap,u8=new WeakMap,u6=new WeakMap,u7=new WeakMap,ce=new WeakSet,ct=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},ci=new WeakMap,ca=new WeakMap,cr=new WeakSet,cn=function(e){if("mouse"!==e.pointerType&&e.timeStamp-nI(this,u5)<250)return;nL(this,cu,cc).call(this),clearTimeout(nI(this,u8));let t=this.hasAttribute(nM.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&nL(this,ch,cm).call(this)},cs=new WeakSet,co=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(nM.USER_INACTIVE);[this,this.media].includes(e.target)&&t?nL(this,cl,cd).call(this):nL(this,ch,cm).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&nL(this,ch,cm).call(this)},cl=new WeakSet,cd=function(){if(0>nI(this,u6)||this.hasAttribute(nM.USER_INACTIVE))return;this.setAttribute(nM.USER_INACTIVE,"");let e=new r9.CustomEvent(rI.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},cu=new WeakSet,cc=function(){if(!this.hasAttribute(nM.USER_INACTIVE))return;this.removeAttribute(nM.USER_INACTIVE);let e=new r9.CustomEvent(rI.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},ch=new WeakSet,cm=function(){nL(this,cu,cc).call(this),clearTimeout(nI(this,u8));let e=parseInt(this.autohide);e<0||nD(this,u8,setTimeout(()=>{nL(this,cl,cd).call(this)},1e3*e))},nN.shadowRootOptions={mode:"open"},nN.getTemplateHTML=function(e){return`
    <style>
      
      :host([${rR.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${nM.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${nM.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${nM.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${nM.AUDIO}])[${nM.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${nM.AUDIO}])[${nM.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${nM.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${nM.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${nM.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${nM.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${nM.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${nM.USER_INACTIVE}]:not([${rR.MEDIA_PAUSED}]):not([${rR.MEDIA_IS_AIRPLAYING}]):not([${rR.MEDIA_IS_CASTING}]):not([${nM.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${nM.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${nM.USER_INACTIVE}]:not([${nM.NO_AUTOHIDE}]):not([${rR.MEDIA_PAUSED}]):not([${rR.MEDIA_IS_CASTING}]):not([${nM.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${nM.USER_INACTIVE}][${nM.AUTOHIDE_OVER_CONTROLS}]:not([${nM.NO_AUTOHIDE}]):not([${rR.MEDIA_PAUSED}]):not([${rR.MEDIA_IS_CASTING}]):not([${nM.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${nM.AUDIO}])[${rR.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${nS.shadowRootOptions.mode}">
          ${nS.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},r9.customElements.get("media-container")||r9.customElements.define("media-container",nN);var nP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nU=(e,t,i)=>(nP(e,t,"read from private field"),i?i.call(e):t.get(e)),nB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nH=(e,t,i,a)=>(nP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nW{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){nB(this,cg),nB(this,cp,void 0),nB(this,cv,void 0),nB(this,cE,void 0),nB(this,cb,new Set),nH(this,cp,e),nH(this,cv,t),nH(this,cE,new Set(i))}[Symbol.iterator](){return nU(this,cg,cf).values()}get length(){return nU(this,cg,cf).size}get value(){var e;return null!=(e=[...nU(this,cg,cf)].join(" "))?e:""}set value(e){var t;e!==this.value&&(nH(this,cb,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...nU(this,cg,cf)][e]}values(){return nU(this,cg,cf).values()}forEach(e,t){nU(this,cg,cf).forEach(e,t)}add(...e){var t,i;e.forEach(e=>nU(this,cb).add(e)),(""!==this.value||(null==(t=nU(this,cp))?void 0:t.hasAttribute(`${nU(this,cv)}`)))&&(null==(i=nU(this,cp))||i.setAttribute(`${nU(this,cv)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>nU(this,cb).delete(e)),null==(t=nU(this,cp))||t.setAttribute(`${nU(this,cv)}`,`${this.value}`)}contains(e){return nU(this,cg,cf).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}cp=new WeakMap,cv=new WeakMap,cE=new WeakMap,cb=new WeakMap,cg=new WeakSet,cf=function(){return nU(this,cb).size?nU(this,cb):nU(this,cE)};let nV=(e="")=>e.split(/\s+/),nF=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?rD.CAPTIONS:rD.SUBTITLES,language:i,label:r}},n$=(e="",t={})=>nV(e).map(e=>{let i=nF(e);return{...t,...i}}),nK=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?nF(e):e):"string"==typeof e?n$(e):[e]:[],nq=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,nY=(e=[])=>Array.prototype.map.call(e,nq).join(" "),nG=(e,t)=>i=>i[e]===t,nj=e=>{let t=Object.entries(e).map(([e,t])=>nG(e,t));return e=>t.every(t=>t(e))},nQ=(e,t=[],i=[])=>{let a=nK(i).map(nj);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},nZ=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:nj(t);return Array.from(e.textTracks).filter(i)},nz=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(rR.MEDIA_SUBTITLES_SHOWING)},nX=e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}},nJ="exitFullscreen"in r8?"exitFullscreen":"webkitExitFullscreen"in r8?"webkitExitFullscreen":"webkitCancelFullScreen"in r8?"webkitCancelFullScreen":void 0,n0=e=>{var t;let{documentElement:i}=e;if(nJ){let e=null==(t=null==i?void 0:i[nJ])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},n1="fullscreenElement"in r8?"fullscreenElement":"webkitFullscreenElement"in r8?"webkitFullscreenElement":void 0,n2=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[n1];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===rN.FULLSCREEN?i:a},n3=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=n2(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(n1 in e))return nd(n,r);for(;null==e?void 0:e[n1];){if(e[n1]===r)return!0;e=null==(t=e[n1])?void 0:t.shadowRoot}}return!1},n4="fullscreenEnabled"in r8?"fullscreenEnabled":"webkitFullscreenEnabled"in r8?"webkitFullscreenEnabled":void 0,n5=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[n4])||i&&"webkitSupportsFullscreen"in i},n9=()=>{var e;return r||(r=null==(e=null==r8?void 0:r8.createElement)?void 0:e.call(r8,"video"))},n8=async(e=n9())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([n6(e,i.signal),n7(e,t)]);return i.abort(),a},n6=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),n7=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await rF(10)}return e.volume!==t},se=/.*Version\/.*Safari\/.*/.test(r9.navigator.userAgent),st=(e=n9())=>(!r9.matchMedia("(display-mode: standalone)").matches||!se)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),si=(e=n9())=>n5({documentElement:r8,media:e}),sa=si(),sr=st(),sn=!!r9.WebKitPlaybackTargetAvailabilityEvent,ss=!!r9.chrome,so=e=>nZ(e.media,e=>[rD.SUBTITLES,rD.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sl=e=>nZ(e.media,e=>e.mode===rL.SHOWING&&[rD.SUBTITLES,rD.CAPTIONS].includes(e.kind)),sd=(e,t)=>{let i=so(e),a=sl(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)nQ(rL.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;nQ(rL.DISABLED,i,a),nQ(rL.SHOWING,i,[{language:n,label:s,kind:o}])}}},su=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sc(e,t):Object.entries(e).every(([e,i])=>e in t&&su(i,t[e])))),sc=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>su(e,t[i])))},sh=Object.values(rx),sm=n8().then(e=>n=e),sp=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof r9.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=r9.customElements.get(t);i&&e instanceof i||(await r9.customElements.whenDefined(t),r9.customElements.upgrade(e))}))},sv=new r9.DOMParser,sE=e=>e&&sv.parseFromString(e,"text/html").body.textContent||e,sb={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==r9.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&r9.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;r9.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===r9.localStorage.getItem("media-chrome-pref-muted");sb.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?r9.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||r9.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=r9.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sb.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&rW(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[rx.LIVE,rx.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(sh.includes(r))return r===rx.UNKNOWN?a:r;let n=t.duration;return n===1/0?rx.LIVE:Number.isFinite(n)?rx.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=sb.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===rx.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sb.mediaStreamType.get(e)!==rx.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>so(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sl(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![rD.CAPTIONS,rD.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sd(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=nZ(i,{kind:rD.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:sE(e),startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&nd(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!r8.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else r8.pictureInPictureElement&&r8.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>n3(e),set(e,t,i){var a;e?(nX(t),i.detail&&(null==(a=t.media)||a.focus())):n0(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&r9.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sa||!si(t))return rO.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return sr&&st(t)?(null==t?void 0:t.disablePictureInPicture)?rO.UNAVAILABLE:void 0:rO.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return rO.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&sm.then(t=>e(t?void 0:rO.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return ss&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?rO.UNAVAILABLE:void 0:rO.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sn?(null==t?void 0:t.availability)==="not-available"?rO.UNAVAILABLE:void 0:rO.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:rO.UNAVAILABLE:rO.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?rO.UNAVAILABLE:void 0:rO.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},sg={[rA.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=nZ(l,{kind:rD.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rA.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rA.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===rx.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[rA.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[rA.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rA.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rA.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[rA.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[rA.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[rA.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rA.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=so(t),s=nK(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&r9.localStorage.setItem("media-chrome-pref-subtitles-lang",o),nQ(rL.SHOWING,n,s)},[rA.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=so(t);nQ(rL.DISABLED,a,null!=i?i:[])},[rA.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sd(t,i)},[rA.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[rA.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[rA.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rA.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rA.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[rA.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rA.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rA.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rA.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},sf=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sb,requestMap:r=sg,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||su(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,E,b,g,f,_,y,T,A,k,w,S;let R=!!o;if(o={...d,...null!=o?o:{},...e},R)return;await sp(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,D=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),O=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(C||I),P=!!(null==(f=d.media)?void 0:f.textTracks)&&(D||I),U=!!(null==(_=d.media)?void 0:_.videoRenditions)&&(L||I),B=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||I),H=!!(null==(T=d.media)?void 0:T.remote)&&(O||I),W=!!d.documentElement&&(x||I),V=N||P||U||B||H||W,F=0===l.length&&1===t&&s,$=!!o.media&&(C||F),K=!!(null==(A=o.media)?void 0:A.textTracks)&&(D||F),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||F),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||F),G=!!(null==(S=o.media)?void 0:S.remote)&&(O||F),j=!!o.documentElement&&(x||F),Q=$||K||q||Y||G||j;if(!(V||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),$&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let E=m[e].stateOwnersUpdateHandlers;if(E&&V&&(Array.isArray(E)?E:[E]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else V&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var s_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sy=(e,t,i)=>(s_(e,t,"read from private field"),i?i.call(e):t.get(e)),sT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sA=(e,t,i,a)=>(s_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sk=(e,t,i)=>(s_(e,t,"access private method"),i);let sw=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],sS={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class sR extends nN{constructor(){super(),sT(this,cI),sT(this,cD),sT(this,cM),sT(this,cx),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sT(this,c_,new nW(this,sS.HOTKEYS)),sT(this,cy,void 0),sT(this,cT,void 0),sT(this,cA,null),sT(this,ck,void 0),sT(this,cw,void 0),sT(this,cS,e=>{var t;null==(t=sy(this,cT))||t.dispatch(e)}),sT(this,cR,void 0),this.associateElement(this);let e={};sA(this,ck,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new r9.CustomEvent(rC[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.hasAttribute(sS.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(sS.NO_HOTKEYS,sS.HOTKEYS,sS.DEFAULT_STREAM_TYPE,sS.DEFAULT_SUBTITLES,sS.DEFAULT_DURATION,sS.NO_MUTED_PREF,sS.NO_VOLUME_PREF,sS.LANG,sS.LOOP)}get mediaStore(){return sy(this,cT)}set mediaStore(e){var t,i;if(sy(this,cT)&&(null==(t=sy(this,cw))||t.call(this),sA(this,cw,void 0)),sA(this,cT,e),!sy(this,cT)&&!this.hasAttribute(sS.NO_DEFAULT_STORE)){sk(this,cI,cC).call(this);return}sA(this,cw,null==(i=sy(this,cT))?void 0:i.subscribe(sy(this,ck)))}get fullscreenElement(){var e;return null!=(e=sy(this,cy))?e:this}set fullscreenElement(e){var t;this.hasAttribute(sS.FULLSCREEN_ELEMENT)&&this.removeAttribute(sS.FULLSCREEN_ELEMENT),sA(this,cy,e),null==(t=sy(this,cT))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ng(this,sS.DEFAULT_SUBTITLES)}set defaultSubtitles(e){nf(this,sS.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return n_(this,sS.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){ny(this,sS.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return nE(this,sS.DEFAULT_DURATION)}set defaultDuration(e){nb(this,sS.DEFAULT_DURATION,e)}get noHotkeys(){return ng(this,sS.NO_HOTKEYS)}set noHotkeys(e){nf(this,sS.NO_HOTKEYS,e)}get keysUsed(){return n_(this,sS.KEYS_USED)}set keysUsed(e){ny(this,sS.KEYS_USED,e)}get liveEdgeOffset(){return nE(this,sS.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){nb(this,sS.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return ng(this,sS.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){nf(this,sS.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return ng(this,sS.NO_VOLUME_PREF)}set noVolumePref(e){nf(this,sS.NO_VOLUME_PREF,e)}get noMutedPref(){return ng(this,sS.NO_MUTED_PREF)}set noMutedPref(e){nf(this,sS.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return ng(this,sS.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){nf(this,sS.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return ng(this,sS.NO_DEFAULT_STORE)}set noDefaultStore(e){nf(this,sS.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===sS.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(sS.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===sS.HOTKEYS)sy(this,c_).value=i;else if(e===sS.DEFAULT_SUBTITLES&&i!==t)null==(a=sy(this,cT))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(sS.DEFAULT_SUBTITLES)}});else if(e===sS.DEFAULT_STREAM_TYPE)null==(n=sy(this,cT))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(sS.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===sS.LIVE_EDGE_OFFSET)null==(s=sy(this,cT))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(sS.LIVE_EDGE_OFFSET)?+this.getAttribute(sS.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sS.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(sS.LIVE_EDGE_OFFSET)}});else if(e===sS.SEEK_TO_LIVE_OFFSET)null==(o=sy(this,cT))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(sS.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sS.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===sS.NO_AUTO_SEEK_TO_LIVE)null==(l=sy(this,cT))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(sS.NO_AUTO_SEEK_TO_LIVE)}});else if(e===sS.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;sA(this,cy,e),null==(u=sy(this,cT))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===sS.LANG&&i!==t?(rQ(i),null==(c=sy(this,cT))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===sS.LOOP&&i!==t?null==(h=sy(this,cT))||h.dispatch({type:rA.MEDIA_LOOP_REQUEST,detail:null!=i}):e===sS.NO_VOLUME_PREF&&i!==t?null==(m=sy(this,cT))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(sS.NO_VOLUME_PREF)}}):e===sS.NO_MUTED_PREF&&i!==t&&(null==(p=sy(this,cT))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(sS.NO_MUTED_PREF)}}))}connectedCallback(){var e,t;sy(this,cT)||this.hasAttribute(sS.NO_DEFAULT_STORE)||sk(this,cI,cC).call(this),null==(e=sy(this,cT))||e.dispatch({type:"documentelementchangerequest",detail:r8}),super.connectedCallback(),sy(this,cT)&&!sy(this,cw)&&sA(this,cw,null==(t=sy(this,cT))?void 0:t.subscribe(sy(this,ck))),void 0!==sy(this,cR)&&sy(this,cT)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=sy(this,cT))||i.dispatch({type:rA.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:sy(this,cR)}))},0),this.hasAttribute(sS.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r;if(null==(e=super.disconnectedCallback)||e.call(this),sy(this,cT)){let e=sy(this,cT).getState();sA(this,cR,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=sy(this,cT))||i.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(a=sy(this,cT))||a.dispatch({type:rA.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}sy(this,cw)&&(null==(r=sy(this,cw))||r.call(this),sA(this,cw,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sy(this,cT))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sy(this,cT))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){sB(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=sH(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rA).forEach(t=>{e.addEventListener(t,sy(this,cS))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rA).forEach(t=>{e.removeEventListener(t,sy(this,cS))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sy(this,cT)&&Object.entries(sy(this,cT).getState()).forEach(([t,i])=>{sB([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",sk(this,cM,cO))}disableHotkeys(){this.removeEventListener("keydown",sk(this,cM,cO)),this.removeEventListener("keyup",sk(this,cD,cL))}get hotkeys(){return n_(this,sS.HOTKEYS)}set hotkeys(e){ny(this,sS.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h;let m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(sS.KEYS_USED))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sy(this,c_).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&sy(this,c_).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&sy(this,c_).contains("noshift+/")))switch(e.key){case" ":case"k":u=sy(this,cT).getState().mediaPaused?rA.MEDIA_PLAY_REQUEST:rA.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new r9.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rA.MEDIA_UNMUTE_REQUEST:rA.MEDIA_MUTE_REQUEST,this.dispatchEvent(new r9.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rA.MEDIA_EXIT_FULLSCREEN_REQUEST:rA.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new r9.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new r9.CustomEvent(rA.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(sS.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(sS.KEYBOARD_BACKWARD_SEEK_OFFSET):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new r9.CustomEvent(rA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(sS.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(sS.KEYBOARD_FORWARD_SEEK_OFFSET):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new r9.CustomEvent(rA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(sS.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(sS.KEYBOARD_UP_VOLUME_STEP):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new r9.CustomEvent(rA.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(sS.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(sS.KEYBOARD_DOWN_VOLUME_STEP):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new r9.CustomEvent(rA.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new r9.CustomEvent(rA.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new r9.CustomEvent(rA.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&sk(this,cx,cN).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rA.MEDIA_EXIT_PIP_REQUEST:rA.MEDIA_ENTER_PIP_REQUEST,h=new r9.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}c_=new WeakMap,cy=new WeakMap,cT=new WeakMap,cA=new WeakMap,ck=new WeakMap,cw=new WeakMap,cS=new WeakMap,cR=new WeakMap,cI=new WeakSet,cC=function(){var e;this.mediaStore=sf({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(sS.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(sS.DEFAULT_DURATION)?+this.getAttribute(sS.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(sS.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(sS.LIVE_EDGE_OFFSET)?+this.getAttribute(sS.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sS.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sS.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sS.LIVE_EDGE_OFFSET)?+this.getAttribute(sS.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(sS.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(sS.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(sS.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(sS.NO_SUBTITLES_LANG_PREF)}})},cD=new WeakSet,cL=function(e){let{key:t,shiftKey:i}=e;if(!(i&&("/"===t||"?"===t)||sw.includes(t))){this.removeEventListener("keyup",sk(this,cD,cL));return}this.keyboardShortcutHandler(e)},cM=new WeakSet,cO=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=sy(this,cA))?void 0:t.open)||i||a||!s&&!sw.includes(r)){this.removeEventListener("keyup",sk(this,cD,cL));return}let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||sy(this,c_).contains(`no${r.toLowerCase()}`)||" "===r&&sy(this,c_).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",sk(this,cD,cL),{once:!0})},cx=new WeakSet,cN=function(){sy(this,cA)||(sA(this,cA,r8.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(sy(this,cA))),sy(this,cA).open=!0};let sI=Object.values(rR),sC=Object.values(rw),sD=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(r9.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,rk.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>sI.includes(e)):[]},sL=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&r9.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof r9.customElements.get(e.nodeName.toLowerCase()))&&r9.customElements.upgrade(e),sC.some(t=>t in e)},sM=e=>sL(e)||!!sD(e).length,sO=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},sx={[rR.MEDIA_SUBTITLES_LIST]:nY,[rR.MEDIA_SUBTITLES_SHOWING]:nY,[rR.MEDIA_SEEKABLE]:sO,[rR.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(sO).join(" "),[rR.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[rR.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(rP).join(" ")},[rR.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(rB).join(" ")}},sN=async(e,t,i)=>{var a,r;if(e.isConnected||await rF(0),"boolean"==typeof i||null==i)return nf(e,t,i);if("number"==typeof i)return nb(e,t,i);if("string"==typeof i)return ny(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=sx[t])?void 0:a.call(sx,i))?r:i;return e.setAttribute(t,n)},sP=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},sU=(e,t)=>{if(sP(e))return;let i=(e,t)=>{var i,a;sM(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>sU(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!sM(e)){r9.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},sB=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=sD(e),r=t.toLowerCase();a.includes(r)&&sN(e,r,i)})},sH=(e,t,i)=>{sU(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rA.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(rA.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>sU(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>sU(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>sU(e,t)),Array.prototype.forEach.call(r,e=>sU(e,i))):"attributes"===n&&o===rk.MEDIA_CHROME_ATTRIBUTES&&(sM(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{sU(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rA.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(rA.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};r9.customElements.get("media-controller")||r9.customElements.define("media-controller",sR);let sW={PLACEMENT:"placement",BOUNDS:"bounds"};class sV extends r9.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nm(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=nu(this,"#"+this.bounds))?e:nr(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[sW.PLACEMENT,sW.BOUNDS]}get placement(){return n_(this,sW.PLACEMENT)}set placement(e){ny(this,sW.PLACEMENT,e)}get bounds(){return n_(this,sW.BOUNDS)}set bounds(e){ny(this,sW.BOUNDS,e)}}sV.shadowRootOptions={mode:"open"},sV.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},r9.customElements.get("media-tooltip")||r9.customElements.define("media-tooltip",sV);var sF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s$=(e,t,i)=>(sF(e,t,"read from private field"),i?i.call(e):t.get(e)),sK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sq=(e,t,i,a)=>(sF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sY=(e,t,i)=>(sF(e,t,"access private method"),i);let sG={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class sj extends r9.HTMLElement{constructor(){if(super(),sK(this,cV),sK(this,cP,void 0),this.preventClick=!1,this.tooltipEl=null,sK(this,cU,e=>{this.preventClick||this.handleClick(e),setTimeout(s$(this,cB),0)}),sK(this,cB,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),sK(this,cH,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",s$(this,cH));return}this.preventClick||this.handleClick(e)}),sK(this,cW,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",s$(this,cH));return}this.addEventListener("keyup",s$(this,cH),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",sG.TOOLTIP_PLACEMENT,rk.MEDIA_CONTROLLER,rR.MEDIA_LANG]}enable(){this.addEventListener("click",s$(this,cU)),this.addEventListener("keydown",s$(this,cW)),this.tabIndex=0}disable(){this.removeEventListener("click",s$(this,cU)),this.removeEventListener("keydown",s$(this,cW)),this.removeEventListener("keyup",s$(this,cH)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rk.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=s$(this,cP))?void 0:a.unassociateElement)||r.call(a,this),sq(this,cP,null)),i&&this.isConnected&&(sq(this,cP,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s$(this,cP))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===sG.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===rR.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),s$(this,cB).call(this)}connectedCallback(){var e,t,i;let{style:a}=np(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rk.MEDIA_CONTROLLER);r&&(sq(this,cP,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=s$(this,cP))?void 0:t.associateElement)||i.call(t,this)),r9.customElements.whenDefined("media-tooltip").then(()=>sY(this,cV,cF).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=s$(this,cP))?void 0:e.unassociateElement)||t.call(e,this),sq(this,cP,null),this.removeEventListener("mouseenter",s$(this,cB)),this.removeEventListener("focus",s$(this,cB)),this.removeEventListener("click",s$(this,cU))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return n_(this,sG.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){ny(this,sG.TOOLTIP_PLACEMENT,e)}get mediaController(){return n_(this,rk.MEDIA_CONTROLLER)}set mediaController(e){ny(this,rk.MEDIA_CONTROLLER,e)}get disabled(){return ng(this,sG.DISABLED)}set disabled(e){nf(this,sG.DISABLED,e)}get noTooltip(){return ng(this,sG.NO_TOOLTIP)}set noTooltip(e){nf(this,sG.NO_TOOLTIP,e)}handleClick(e){}}cP=new WeakMap,cU=new WeakMap,cB=new WeakMap,cH=new WeakMap,cW=new WeakMap,cV=new WeakSet,cF=function(){this.addEventListener("mouseenter",s$(this,cB)),this.addEventListener("focus",s$(this,cB)),this.addEventListener("click",s$(this,cU));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},sj.shadowRootOptions={mode:"open"},sj.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${sV.shadowRootOptions.mode}">
          ${sV.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},sj.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},sj.getTooltipContentHTML=function(){return""},r9.customElements.get("media-chrome-button")||r9.customElements.define("media-chrome-button",sj);let sQ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,sZ=e=>{let t=e.mediaIsAirplaying?rz("stop airplay"):rz("start airplay");e.setAttribute("aria-label",t)};class sz extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_IS_AIRPLAYING,rR.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_IS_AIRPLAYING&&sZ(this)}get mediaIsAirplaying(){return ng(this,rR.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nf(this,rR.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return n_(this,rR.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ny(this,rR.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new r9.CustomEvent(rA.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}sz.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rR.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rR.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rR.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${rR.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sQ}</slot>
      <slot name="exit">${sQ}</slot>
    </slot>
  `},sz.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rz("start airplay")}</slot>
    <slot name="tooltip-exit">${rz("stop airplay")}</slot>
  `},r9.customElements.get("media-airplay-button")||r9.customElements.define("media-airplay-button",sz);let sX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,sJ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,s0=e=>{e.setAttribute("aria-checked",nz(e).toString())};class s1 extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_SUBTITLES_LIST,rR.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",rz("closed captions")),s0(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_SUBTITLES_SHOWING&&s0(this)}get mediaSubtitlesList(){return s2(this,rR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){s3(this,rR.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return s2(this,rR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){s3(this,rR.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new r9.CustomEvent(rA.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}s1.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${sX}</slot>
      <slot name="off">${sJ}</slot>
    </slot>
  `},s1.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${rz("Enable captions")}</slot>
    <slot name="tooltip-disable">${rz("Disable captions")}</slot>
  `};let s2=(e,t)=>{let i=e.getAttribute(t);return i?n$(i):[]},s3=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=nY(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};r9.customElements.get("media-captions-button")||r9.customElements.define("media-captions-button",s1);let s4=e=>{let t=e.mediaIsCasting?rz("stop casting"):rz("start casting");e.setAttribute("aria-label",t)};class s5 extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_IS_CASTING,rR.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),s4(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_IS_CASTING&&s4(this)}get mediaIsCasting(){return ng(this,rR.MEDIA_IS_CASTING)}set mediaIsCasting(e){nf(this,rR.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return n_(this,rR.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ny(this,rR.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rA.MEDIA_EXIT_CAST_REQUEST:rA.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new r9.CustomEvent(e,{composed:!0,bubbles:!0}))}}s5.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rR.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rR.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rR.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${rR.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},s5.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rz("Start casting")}</slot>
    <slot name="tooltip-exit">${rz("Stop casting")}</slot>
  `},r9.customElements.get("media-cast-button")||r9.customElements.define("media-cast-button",s5);var s9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s8=(e,t,i)=>(s9(e,t,"read from private field"),i?i.call(e):t.get(e)),s6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s7=(e,t,i,a)=>(s9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oe=(e,t,i)=>(s9(e,t,"access private method"),i);let ot={OPEN:"open",ANCHOR:"anchor"};class oi extends r9.HTMLElement{constructor(){super(),s6(this,cY),s6(this,cj),s6(this,cZ),s6(this,cX),s6(this,c0),s6(this,c2),s6(this,c$,!1),s6(this,cK,null),s6(this,cq,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[ot.OPEN,ot.ANCHOR]}get open(){return ng(this,ot.OPEN)}set open(e){nf(this,ot.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":oe(this,cX,cJ).call(this,e);break;case"focusout":oe(this,c0,c1).call(this,e);break;case"keydown":oe(this,c2,c3).call(this,e)}}connectedCallback(){oe(this,cY,cG).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){oe(this,cY,cG).call(this),e===ot.OPEN&&i!==t&&(this.open?oe(this,cj,cQ).call(this):oe(this,cZ,cz).call(this))}focus(){s7(this,cK,nc());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}c$=new WeakMap,cK=new WeakMap,cq=new WeakMap,cY=new WeakSet,cG=function(){if(!s8(this,c$)&&(s7(this,c$,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=np(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},cj=new WeakSet,cQ=function(){var e;null==(e=s8(this,cq))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cZ=new WeakSet,cz=function(){var e;null==(e=s8(this,cq))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},cX=new WeakSet,cJ=function(e){s7(this,cq,e.relatedTarget),nd(this,e.relatedTarget)||(this.open=!this.open)},c0=new WeakSet,c1=function(e){var t;!nd(this,e.relatedTarget)&&(null==(t=s8(this,cK))||t.focus(),s8(this,cq)&&s8(this,cq)!==e.relatedTarget&&this.open&&(this.open=!1))},c2=new WeakSet,c3=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=s8(this,cK))||n.focus(),this.open=!1))},oi.shadowRootOptions={mode:"open"},oi.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},oi.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},r9.customElements.get("media-chrome-dialog")||r9.customElements.define("media-chrome-dialog",oi);var oa=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},or=(e,t,i)=>(oa(e,t,"read from private field"),i?i.call(e):t.get(e)),on=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},os=(e,t,i,a)=>(oa(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oo=(e,t,i)=>(oa(e,t,"access private method"),i);class ol extends r9.HTMLElement{constructor(){if(super(),on(this,ha),on(this,hn),on(this,ho),on(this,hd),on(this,hc),on(this,hm),on(this,hv),on(this,hb),on(this,c4,void 0),on(this,c5,void 0),on(this,c9,void 0),on(this,c8,void 0),on(this,c6,{}),on(this,c7,[]),on(this,he,()=>{if(this.range.matches(":focus-visible")){let{style:e}=np(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),on(this,ht,()=>{let{style:e}=np(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),on(this,hi,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),os(this,c9,this.shadowRoot.querySelector("#startpoint")),os(this,c8,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rk.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rk.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=or(this,c4))?void 0:a.unassociateElement)||r.call(a,this),os(this,c4,null)),i&&this.isConnected&&(os(this,c4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=or(this,c4))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),oo(this,hn,hs).call(this)):(this.range.setAttribute(e,i),oo(this,ho,hl).call(this)))}connectedCallback(){var e,t,i;let{style:a}=np(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),or(this,c6).pointer=np(this.shadowRoot,"#pointer"),or(this,c6).progress=np(this.shadowRoot,"#progress"),or(this,c6).thumb=np(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),or(this,c6).activeSegment=np(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rk.MEDIA_CONTROLLER);r&&(os(this,c4,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=or(this,c4))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",or(this,he)),this.shadowRoot.addEventListener("focusout",or(this,ht)),oo(this,hn,hs).call(this),nt(this.container,or(this,hi))}disconnectedCallback(){var e,t;oo(this,ho,hl).call(this),null==(t=null==(e=or(this,c4))?void 0:e.unassociateElement)||t.call(e,this),os(this,c4,null),this.shadowRoot.removeEventListener("focusin",or(this,he)),this.shadowRoot.removeEventListener("focusout",or(this,ht)),ni(this.container,or(this,hi))}updatePointerBar(e){var t;null==(t=or(this,c6).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=or(this,c6).progress)||e.style.setProperty("width",`${i}%`),null==(t=or(this,c6).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];os(this,c7,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=r8.createElementNS("http://www.w3.org/2000/svg","rect"),c=nv(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,or(this,c9).getBoundingClientRect(),or(this,c8).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":oo(this,hb,hg).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":oo(this,hc,hh).call(this,e);break;case"pointerdown":oo(this,hd,hu).call(this,e);break;case"pointerup":oo(this,hm,hp).call(this);break;case"pointerleave":oo(this,hv,hE).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}c4=new WeakMap,c5=new WeakMap,c9=new WeakMap,c8=new WeakMap,c6=new WeakMap,c7=new WeakMap,he=new WeakMap,ht=new WeakMap,hi=new WeakMap,ha=new WeakSet,hr=function(e){let t=or(this,c6).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=or(this,c7).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hn=new WeakSet,hs=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ho=new WeakSet,hl=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=r9.window)||e.removeEventListener("pointerup",this),null==(t=r9.window)||t.removeEventListener("pointermove",this)},hd=new WeakSet,hu=function(e){var t;os(this,c5,e.composedPath().includes(this.range)),null==(t=r9.window)||t.addEventListener("pointerup",this)},hc=new WeakSet,hh=function(e){var t;"mouse"!==e.pointerType&&oo(this,hd,hu).call(this,e),this.addEventListener("pointerleave",this),null==(t=r9.window)||t.addEventListener("pointermove",this)},hm=new WeakSet,hp=function(){var e;null==(e=r9.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hv=new WeakSet,hE=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=r9.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=or(this,c6).activeSegment)||t.style.removeProperty("transform")},hb=new WeakSet,hg=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),oo(this,ha,hr).call(this,e),this.dragging&&("mouse"!==e.pointerType||!or(this,c5))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},ol.shadowRootOptions={mode:"open"},ol.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},ol.getContainerTemplateHTML=function(e){return""},r9.customElements.get("media-chrome-range")||r9.customElements.define("media-chrome-range",ol);var od=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ou=(e,t,i)=>(od(e,t,"read from private field"),i?i.call(e):t.get(e)),oc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oh=(e,t,i,a)=>(od(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class om extends r9.HTMLElement{constructor(){if(super(),oc(this,hf,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rk.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rk.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ou(this,hf))?void 0:a.unassociateElement)||r.call(a,this),oh(this,hf,null)),i&&this.isConnected&&(oh(this,hf,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ou(this,hf))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rk.MEDIA_CONTROLLER);a&&(oh(this,hf,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ou(this,hf))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ou(this,hf))?void 0:e.unassociateElement)||t.call(e,this),oh(this,hf,null)}}hf=new WeakMap,om.shadowRootOptions={mode:"open"},om.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},r9.customElements.get("media-control-bar")||r9.customElements.define("media-control-bar",om);var op=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ov=(e,t,i)=>(op(e,t,"read from private field"),i?i.call(e):t.get(e)),oE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ob=(e,t,i,a)=>(op(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class og extends r9.HTMLElement{constructor(){if(super(),oE(this,h_,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rk.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rk.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ov(this,h_))?void 0:a.unassociateElement)||r.call(a,this),ob(this,h_,null)),i&&this.isConnected&&(ob(this,h_,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ov(this,h_))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=np(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rk.MEDIA_CONTROLLER);r&&(ob(this,h_,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ov(this,h_))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ov(this,h_))?void 0:e.unassociateElement)||t.call(e,this),ob(this,h_,null)}}h_=new WeakMap,og.shadowRootOptions={mode:"open"},og.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},og.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},r9.customElements.get("media-text-display")||r9.customElements.define("media-text-display",og);var of=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o_=(e,t,i)=>(of(e,t,"read from private field"),i?i.call(e):t.get(e)),oy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oT=(e,t,i,a)=>(of(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oA extends og{constructor(){var e;super(),oy(this,hy,void 0),oT(this,hy,this.shadowRoot.querySelector("slot")),o_(this,hy).textContent=rY(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===rR.MEDIA_DURATION&&(o_(this,hy).textContent=rY(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return nE(this,rR.MEDIA_DURATION)}set mediaDuration(e){nb(this,rR.MEDIA_DURATION,e)}}hy=new WeakMap,oA.getSlotTemplateHTML=function(e,t){return`
    <slot>${rY(t.mediaDuration)}</slot>
  `},r9.customElements.get("media-duration-display")||r9.customElements.define("media-duration-display",oA);let ok={2:rz("Network Error"),3:rz("Decode Error"),4:rz("Source Not Supported"),5:rz("Encryption Error")},ow={2:rz("A network error caused the media download to fail."),3:rz("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:rz("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:rz("The media is encrypted and there are no keys to decrypt it.")},oS=e=>{var t,i;return 1===e.code?null:{title:null!=(t=ok[e.code])?t:`Error ${e.code}`,message:null!=(i=ow[e.code])?i:e.message}};var oR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oI=(e,t,i)=>(oR(e,t,"read from private field"),i?i.call(e):t.get(e)),oC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oD=(e,t,i,a)=>(oR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function oL(e){var t;let{title:i,message:a}=null!=(t=oS(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let oM=[rR.MEDIA_ERROR_CODE,rR.MEDIA_ERROR_MESSAGE];class oO extends oi{constructor(){super(...arguments),oC(this,hT,null)}static get observedAttributes(){return[...super.observedAttributes,...oM]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!oM.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==oS(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return oI(this,hT)}set mediaError(e){oD(this,hT,e)}get mediaErrorCode(){return nE(this,"mediaerrorcode")}set mediaErrorCode(e){nb(this,"mediaerrorcode",e)}get mediaErrorMessage(){return n_(this,"mediaerrormessage")}set mediaErrorMessage(e){ny(this,"mediaerrormessage",e)}}hT=new WeakMap,oO.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${oL({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},oO.formatErrorMessage=oL,r9.customElements.get("media-error-dialog")||r9.customElements.define("media-error-dialog",oO);var ox=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oN=(e,t,i)=>(ox(e,t,"read from private field"),i?i.call(e):t.get(e)),oP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class oU extends oi{constructor(){super(...arguments),oP(this,hA,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),oP(this,hk,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",oN(this,hA)),document.addEventListener("keydown",oN(this,hk)))}disconnectedCallback(){this.removeEventListener("click",oN(this,hA)),document.removeEventListener("keydown",oN(this,hk))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",oN(this,hA)),document.addEventListener("keydown",oN(this,hk))):(this.removeEventListener("click",oN(this,hA)),document.removeEventListener("keydown",oN(this,hk))))}}hA=new WeakMap,hk=new WeakMap,oU.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${function(){let e=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${e}</table>
  `}()}
    </slot>
  `},r9.customElements.get("media-keyboard-shortcuts-dialog")||r9.customElements.define("media-keyboard-shortcuts-dialog",oU);var oB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oH=(e,t,i)=>(oB(e,t,"read from private field"),i?i.call(e):t.get(e)),oW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oV=(e,t,i,a)=>(oB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oF=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,o$=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,oK=e=>{let t=e.mediaIsFullscreen?rz("exit fullscreen mode"):rz("enter fullscreen mode");e.setAttribute("aria-label",t)};class oq extends sj{constructor(){super(...arguments),oW(this,hw,null)}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_IS_FULLSCREEN,rR.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_IS_FULLSCREEN&&oK(this)}get mediaFullscreenUnavailable(){return n_(this,rR.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ny(this,rR.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ng(this,rR.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nf(this,rR.MEDIA_IS_FULLSCREEN,e)}handleClick(e){oV(this,hw,e);let t=oH(this,hw)instanceof PointerEvent,i=this.mediaIsFullscreen?new r9.CustomEvent(rA.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new r9.CustomEvent(rA.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}hw=new WeakMap,oq.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rR.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rR.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rR.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${rR.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${oF}</slot>
      <slot name="exit">${o$}</slot>
    </slot>
  `},oq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rz("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${rz("Exit fullscreen mode")}</slot>
  `},r9.customElements.get("media-fullscreen-button")||r9.customElements.define("media-fullscreen-button",oq);let{MEDIA_TIME_IS_LIVE:oY,MEDIA_PAUSED:oG}=rR,{MEDIA_SEEK_TO_LIVE_REQUEST:oj,MEDIA_PLAY_REQUEST:oQ}=rA,oZ=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?rz("seek to live"):rz("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=rz("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class oz extends sj{static get observedAttributes(){return[...super.observedAttributes,oY,oG]}connectedCallback(){super.connectedCallback(),oZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),oZ(this)}get mediaPaused(){return ng(this,rR.MEDIA_PAUSED)}set mediaPaused(e){nf(this,rR.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ng(this,rR.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nf(this,rR.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new r9.CustomEvent(oj,{composed:!0,bubbles:!0})),this.hasAttribute(oG)&&this.dispatchEvent(new r9.CustomEvent(oQ,{composed:!0,bubbles:!0})))}}oz.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${oY}]:not([${oG}])) slot[name=indicator] > *,
      :host([${oY}]:not([${oG}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${oY}]:not([${oG}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${rz("live")}</slot>
  `},r9.customElements.get("media-live-button")||r9.customElements.define("media-live-button",oz);var oX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oJ=(e,t,i)=>(oX(e,t,"read from private field"),i?i.call(e):t.get(e)),o0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o1=(e,t,i,a)=>(oX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let o2={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},o3=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class o4 extends r9.HTMLElement{constructor(){if(super(),o0(this,hS,void 0),o0(this,hR,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rk.MEDIA_CONTROLLER,rR.MEDIA_PAUSED,rR.MEDIA_LOADING,o2.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===o2.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===rk.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oJ(this,hS))?void 0:a.unassociateElement)||r.call(a,this),o1(this,hS,null)),i&&this.isConnected&&(o1(this,hS,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oJ(this,hS))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rk.MEDIA_CONTROLLER);a&&(o1(this,hS,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oJ(this,hS))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oJ(this,hS))?void 0:e.unassociateElement)||t.call(e,this),o1(this,hS,null)}get loadingDelay(){return oJ(this,hR)}set loadingDelay(e){o1(this,hR,e);let{style:t}=np(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ng(this,rR.MEDIA_PAUSED)}set mediaPaused(e){nf(this,rR.MEDIA_PAUSED,e)}get mediaLoading(){return ng(this,rR.MEDIA_LOADING)}set mediaLoading(e){nf(this,rR.MEDIA_LOADING,e)}get mediaController(){return n_(this,rk.MEDIA_CONTROLLER)}set mediaController(e){ny(this,rk.MEDIA_CONTROLLER,e)}get noAutohide(){return ng(this,o2.NO_AUTOHIDE)}set noAutohide(e){nf(this,o2.NO_AUTOHIDE,e)}}hS=new WeakMap,hR=new WeakMap,o4.shadowRootOptions={mode:"open"},o4.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${rR.MEDIA_LOADING}]:not([${rR.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${rR.MEDIA_LOADING}]:not([${rR.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${rR.MEDIA_LOADING}]:not([${rR.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${o3}</slot>
    <div id="status" role="status" aria-live="polite">${rz("media loading")}</div>
  `},r9.customElements.get("media-loading-indicator")||r9.customElements.define("media-loading-indicator",o4);let o5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,o9=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,o8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,o6=e=>{let t="off"===e.mediaVolumeLevel?rz("unmute"):rz("mute");e.setAttribute("aria-label",t)};class o7 extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),o6(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_VOLUME_LEVEL&&o6(this)}get mediaVolumeLevel(){return n_(this,rR.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ny(this,rR.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rA.MEDIA_UNMUTE_REQUEST:rA.MEDIA_MUTE_REQUEST;this.dispatchEvent(new r9.CustomEvent(e,{composed:!0,bubbles:!0}))}}o7.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${rR.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${rR.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${rR.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${rR.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${rR.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${rR.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${rR.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${o5}</slot>
      <slot name="low">${o9}</slot>
      <slot name="medium">${o9}</slot>
      <slot name="high">${o8}</slot>
    </slot>
  `},o7.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${rz("Mute")}</slot>
    <slot name="tooltip-unmute">${rz("Unmute")}</slot>
  `},r9.customElements.get("media-mute-button")||r9.customElements.define("media-mute-button",o7);let le=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lt=e=>{let t=e.mediaIsPip?rz("exit picture in picture mode"):rz("enter picture in picture mode");e.setAttribute("aria-label",t)};class li extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_IS_PIP,rR.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lt(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_IS_PIP&&lt(this)}get mediaPipUnavailable(){return n_(this,rR.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ny(this,rR.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ng(this,rR.MEDIA_IS_PIP)}set mediaIsPip(e){nf(this,rR.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rA.MEDIA_EXIT_PIP_REQUEST:rA.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new r9.CustomEvent(e,{composed:!0,bubbles:!0}))}}li.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rR.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${rR.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rR.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${rR.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${le}</slot>
      <slot name="exit">${le}</slot>
    </slot>
  `},li.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rz("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${rz("Exit picture in picture mode")}</slot>
  `},r9.customElements.get("media-pip-button")||r9.customElements.define("media-pip-button",li);var la=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lr=(e,t,i)=>(la(e,t,"read from private field"),i?i.call(e):t.get(e)),ln=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let ls={RATES:"rates"},lo=[1,1.2,1.5,1.7,2];class ll extends sj{constructor(){var e;super(),ln(this,hI,new nW(this,ls.RATES,{defaultValue:lo})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PLAYBACK_RATE,ls.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ls.RATES&&(lr(this,hI).value=i),e===rR.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rz("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return lr(this,hI)}set rates(e){e?Array.isArray(e)?lr(this,hI).value=e.join(" "):"string"==typeof e&&(lr(this,hI).value=e):lr(this,hI).value=""}get mediaPlaybackRate(){return nE(this,rR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nb(this,rR.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(lr(this,hI).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new r9.CustomEvent(rA.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}hI=new WeakMap,ll.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},ll.getTooltipContentHTML=function(){return rz("Playback rate")},r9.customElements.get("media-playback-rate-button")||r9.customElements.define("media-playback-rate-button",ll);let ld=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,lc=e=>{let t=e.mediaPaused?rz("play"):rz("pause");e.setAttribute("aria-label",t)};class lh extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PAUSED,rR.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),lc(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===rR.MEDIA_PAUSED||e===rR.MEDIA_LANG)&&lc(this)}get mediaPaused(){return ng(this,rR.MEDIA_PAUSED)}set mediaPaused(e){nf(this,rR.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rA.MEDIA_PLAY_REQUEST:rA.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new r9.CustomEvent(e,{composed:!0,bubbles:!0}))}}lh.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rR.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${rR.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${rR.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${rR.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ld}</slot>
      <slot name="pause">${lu}</slot>
    </slot>
  `},lh.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${rz("Play")}</slot>
    <slot name="tooltip-pause">${rz("Pause")}</slot>
  `},r9.customElements.get("media-play-button")||r9.customElements.define("media-play-button",lh);let lm={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},lp=e=>{e.style.removeProperty("background-image")},lv=(e,t)=>{e.style["background-image"]=`url('${t}')`};class lE extends r9.HTMLElement{static get observedAttributes(){return[lm.PLACEHOLDER_SRC,lm.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===lm.SRC&&(null==i?this.image.removeAttribute(lm.SRC):this.image.setAttribute(lm.SRC,i)),e===lm.PLACEHOLDER_SRC&&(null==i?lp(this.image):lv(this.image,i))}get placeholderSrc(){return n_(this,lm.PLACEHOLDER_SRC)}set placeholderSrc(e){ny(this,lm.SRC,e)}get src(){return n_(this,lm.SRC)}set src(e){ny(this,lm.SRC,e)}}lE.shadowRootOptions={mode:"open"},lE.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},r9.customElements.get("media-poster-image")||r9.customElements.define("media-poster-image",lE);var lb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lg=(e,t,i)=>(lb(e,t,"read from private field"),i?i.call(e):t.get(e)),lf=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l_=(e,t,i,a)=>(lb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ly extends og{constructor(){super(),lf(this,hC,void 0),l_(this,hC,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PREVIEW_CHAPTER,rR.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===rR.MEDIA_PREVIEW_CHAPTER||e===rR.MEDIA_LANG)&&i!==t&&null!=i){if(lg(this,hC).textContent=i,""!==i){let e=rz("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return n_(this,rR.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ny(this,rR.MEDIA_PREVIEW_CHAPTER,e)}}hC=new WeakMap,r9.customElements.get("media-preview-chapter-display")||r9.customElements.define("media-preview-chapter-display",ly);var lT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lA=(e,t,i)=>(lT(e,t,"read from private field"),i?i.call(e):t.get(e)),lk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lw=(e,t,i,a)=>(lT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lS extends r9.HTMLElement{constructor(){if(super(),lk(this,hD,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rk.MEDIA_CONTROLLER,rR.MEDIA_PREVIEW_IMAGE,rR.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(rk.MEDIA_CONTROLLER);a&&(lw(this,hD,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lA(this,hD))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lA(this,hD))?void 0:e.unassociateElement)||t.call(e,this),lw(this,hD,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[rR.MEDIA_PREVIEW_IMAGE,rR.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rk.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lA(this,hD))?void 0:a.unassociateElement)||r.call(a,this),lw(this,hD,null)),i&&this.isConnected&&(lw(this,hD,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lA(this,hD))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return n_(this,rR.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ny(this,rR.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(rR.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(rR.MEDIA_PREVIEW_COORDS);return}this.setAttribute(rR.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:E}=np(this.shadowRoot,":host"),b=np(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),f=m?"min":"max";E.setProperty(`${f}-width`,"initial","important"),E.setProperty(`${f}-height`,"initial","important"),E.width=`${r*p}px`,E.height=`${n*p}px`;let _=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==s&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,_()},g.src=s,_()),_(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}hD=new WeakMap,lS.shadowRootOptions={mode:"open"},lS.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},r9.customElements.get("media-preview-thumbnail")||r9.customElements.define("media-preview-thumbnail",lS);var lR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lI=(e,t,i)=>(lR(e,t,"read from private field"),i?i.call(e):t.get(e)),lC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lD=(e,t,i,a)=>(lR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lL extends og{constructor(){super(),lC(this,hL,void 0),lD(this,hL,this.shadowRoot.querySelector("slot")),lI(this,hL).textContent=rY(0)}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_PREVIEW_TIME&&null!=i&&(lI(this,hL).textContent=rY(parseFloat(i)))}get mediaPreviewTime(){return nE(this,rR.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nb(this,rR.MEDIA_PREVIEW_TIME,e)}}hL=new WeakMap,r9.customElements.get("media-preview-time-display")||r9.customElements.define("media-preview-time-display",lL);let lM={SEEK_OFFSET:"seekoffset"},lO=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;class lx extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_CURRENT_TIME,lM.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=nE(this,lM.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===lM.SEEK_OFFSET&&(this.seekOffset=nE(this,lM.SEEK_OFFSET,30))}get seekOffset(){return nE(this,lM.SEEK_OFFSET,30)}set seekOffset(e){nb(this,lM.SEEK_OFFSET,e),this.setAttribute("aria-label",rz("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ns(nl(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nE(this,rR.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nb(this,rR.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new r9.CustomEvent(rA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}lx.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${lO(t.seekOffset)}</slot>
  `},lx.getTooltipContentHTML=function(){return rz("Seek backward")},r9.customElements.get("media-seek-backward-button")||r9.customElements.define("media-seek-backward-button",lx);let lN={SEEK_OFFSET:"seekoffset"},lP=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;class lU extends sj{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_CURRENT_TIME,lN.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=nE(this,lN.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===lN.SEEK_OFFSET&&(this.seekOffset=nE(this,lN.SEEK_OFFSET,30))}get seekOffset(){return nE(this,lN.SEEK_OFFSET,30)}set seekOffset(e){nb(this,lN.SEEK_OFFSET,e),this.setAttribute("aria-label",rz("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ns(nl(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nE(this,rR.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nb(this,rR.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new r9.CustomEvent(rA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}lU.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${lP(t.seekOffset)}</slot>
  `},lU.getTooltipContentHTML=function(){return rz("Seek forward")},r9.customElements.get("media-seek-forward-button")||r9.customElements.define("media-seek-forward-button",lU);var lB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lH=(e,t,i)=>(lB(e,t,"read from private field"),i?i.call(e):t.get(e)),lW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lV=(e,t,i,a)=>(lB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lF={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},l$=[...Object.values(lF),rR.MEDIA_CURRENT_TIME,rR.MEDIA_DURATION,rR.MEDIA_SEEKABLE],lK=["Enter"," "],lq="&nbsp;/&nbsp;",lY=(e,{timesSep:t=lq}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?rY(0-(s-r)):rY(r);return e.showDuration?`${o}${t}${rY(s)}`:o},lG=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.remaining?rq(0-(r-i)):rq(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}let s=rq(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)};class lj extends og{constructor(){super(),lW(this,hM,void 0),lV(this,hM,this.shadowRoot.querySelector("slot")),lH(this,hM).innerHTML=`${lY(this)}`}static get observedAttributes(){return[...super.observedAttributes,...l$,"disabled"]}connectedCallback(){let{style:e}=np(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",rz("playback time"));let t=e=>{let{key:i}=e;if(!lK.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!lK.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){l$.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return ng(this,lF.REMAINING)}set remaining(e){nf(this,lF.REMAINING,e)}get showDuration(){return ng(this,lF.SHOW_DURATION)}set showDuration(e){nf(this,lF.SHOW_DURATION,e)}get noToggle(){return ng(this,lF.NO_TOGGLE)}set noToggle(e){nf(this,lF.NO_TOGGLE,e)}get mediaDuration(){return nE(this,rR.MEDIA_DURATION)}set mediaDuration(e){nb(this,rR.MEDIA_DURATION,e)}get mediaCurrentTime(){return nE(this,rR.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nb(this,rR.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(rR.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(rR.MEDIA_SEEKABLE);return}this.setAttribute(rR.MEDIA_SEEKABLE,e.join(":"))}update(){let e=lY(this);lG(this),e!==lH(this,hM).innerHTML&&(lH(this,hM).innerHTML=e)}}hM=new WeakMap,lj.getSlotTemplateHTML=function(e,t){return`
    <slot>${lY(t)}</slot>
  `},r9.customElements.get("media-time-display")||r9.customElements.define("media-time-display",lj);var lQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lZ=(e,t,i)=>(lQ(e,t,"read from private field"),i?i.call(e):t.get(e)),lz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lX=(e,t,i,a)=>(lQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lJ=(e,t,i,a)=>({set _(value){lX(e,t,value,i)},get _(){return lZ(e,t,a)}});class l0{constructor(e,t,i){lz(this,hO,void 0),lz(this,hx,void 0),lz(this,hN,void 0),lz(this,hP,void 0),lz(this,hU,void 0),lz(this,hB,void 0),lz(this,hH,void 0),lz(this,hW,void 0),lz(this,hV,0),lz(this,hF,(e=performance.now())=>{lX(this,hV,requestAnimationFrame(lZ(this,hF))),lX(this,hP,performance.now()-lZ(this,hN));let t=1e3/this.fps;if(lZ(this,hP)>t){lX(this,hN,e-lZ(this,hP)%t);let i=1e3/((e-lZ(this,hx))/++lJ(this,hU)._),a=(e-lZ(this,hB))/1e3/this.duration,r=lZ(this,hH)+a*this.playbackRate;r-lZ(this,hO).valueAsNumber>0?lX(this,hW,this.playbackRate/this.duration/i):(lX(this,hW,.995*lZ(this,hW)),r=lZ(this,hO).valueAsNumber+lZ(this,hW)),this.callback(r)}}),lX(this,hO,e),this.callback=t,this.fps=i}start(){0===lZ(this,hV)&&(lX(this,hN,performance.now()),lX(this,hx,lZ(this,hN)),lX(this,hU,0),lZ(this,hF).call(this))}stop(){0!==lZ(this,hV)&&(cancelAnimationFrame(lZ(this,hV)),lX(this,hV,0))}update({start:e,duration:t,playbackRate:i}){let a=e-lZ(this,hO).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),lX(this,hH,e),lX(this,hB,performance.now()),this.duration=t,this.playbackRate=i}}hO=new WeakMap,hx=new WeakMap,hN=new WeakMap,hP=new WeakMap,hU=new WeakMap,hB=new WeakMap,hH=new WeakMap,hW=new WeakMap,hV=new WeakMap,hF=new WeakMap;var l1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l2=(e,t,i)=>(l1(e,t,"read from private field"),i?i.call(e):t.get(e)),l3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l4=(e,t,i,a)=>(l1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l5=(e,t,i)=>(l1(e,t,"access private method"),i);let l9=e=>{let t=e.range,i=rq(+l6(e)),a=rq(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},l8=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},l6=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class l7 extends ol{constructor(){super(),l3(this,hJ),l3(this,h1),l3(this,h4),l3(this,h9),l3(this,h6),l3(this,me),l3(this,mi),l3(this,mr),l3(this,h$,void 0),l3(this,hK,void 0),l3(this,hq,void 0),l3(this,hY,void 0),l3(this,hG,void 0),l3(this,hj,void 0),l3(this,hQ,void 0),l3(this,hZ,void 0),l3(this,hz,void 0),l3(this,hX,void 0),l3(this,h3,e=>{this.dragging||(rW(e)&&(this.range.valueAsNumber=e),l2(this,hX)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),l4(this,hq,this.shadowRoot.querySelectorAll('[part~="box"]')),l4(this,hG,this.shadowRoot.querySelector('[part~="preview-box"]')),l4(this,hj,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);l4(this,hQ,parseInt(e.getPropertyValue("--media-box-padding-left"))),l4(this,hZ,parseInt(e.getPropertyValue("--media-box-padding-right"))),l4(this,hK,new l0(this.range,l2(this,h3),60))}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PAUSED,rR.MEDIA_DURATION,rR.MEDIA_SEEKABLE,rR.MEDIA_CURRENT_TIME,rR.MEDIA_PREVIEW_IMAGE,rR.MEDIA_PREVIEW_TIME,rR.MEDIA_PREVIEW_CHAPTER,rR.MEDIA_BUFFERED,rR.MEDIA_PLAYBACK_RATE,rR.MEDIA_LOADING,rR.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",rz("seek")),l5(this,hJ,h0).call(this),l4(this,h$,this.getRootNode()),null==(e=l2(this,h$))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),l5(this,hJ,h0).call(this),null==(e=l2(this,h$))||e.removeEventListener("transitionstart",this),l4(this,h$,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===rR.MEDIA_CURRENT_TIME||e===rR.MEDIA_PAUSED||e===rR.MEDIA_ENDED||e===rR.MEDIA_LOADING||e===rR.MEDIA_DURATION||e===rR.MEDIA_SEEKABLE?(l2(this,hK).update({start:l8(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),l5(this,hJ,h0).call(this),l9(this)):e===rR.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===rR.MEDIA_DURATION||e===rR.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=l2(this,hz),this.updateBar()))}get mediaChaptersCues(){return l2(this,hz)}set mediaChaptersCues(e){var t;l4(this,hz,e),this.updateSegments(null==(t=l2(this,hz))?void 0:t.map(e=>({start:l8(this,e.startTime),end:l8(this,e.endTime)})))}get mediaPaused(){return ng(this,rR.MEDIA_PAUSED)}set mediaPaused(e){nf(this,rR.MEDIA_PAUSED,e)}get mediaLoading(){return ng(this,rR.MEDIA_LOADING)}set mediaLoading(e){nf(this,rR.MEDIA_LOADING,e)}get mediaDuration(){return nE(this,rR.MEDIA_DURATION)}set mediaDuration(e){nb(this,rR.MEDIA_DURATION,e)}get mediaCurrentTime(){return nE(this,rR.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nb(this,rR.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return nE(this,rR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nb(this,rR.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(rR.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(rR.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(rR.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(rR.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(rR.MEDIA_SEEKABLE);return}this.setAttribute(rR.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return n_(this,rR.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ny(this,rR.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return nE(this,rR.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nb(this,rR.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ng(this,rR.MEDIA_ENDED)}set mediaEnded(e){nf(this,rR.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=l8(this,r)}let{style:a}=np(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=np(this.shadowRoot,"#current-rail"),t=np(this.shadowRoot,'[part~="current-box"]'),i=l5(this,h4,h5).call(this,l2(this,hj)),a=l5(this,h9,h8).call(this,i,this.range.valueAsNumber),r=l5(this,h6,h7).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":l5(this,mr,mn).call(this);break;case"pointermove":l5(this,me,mt).call(this,e);break;case"pointerup":l2(this,hX)&&l4(this,hX,!1);break;case"pointerdown":l4(this,hX,!0);break;case"pointerleave":l5(this,mi,ma).call(this,null);break;case"transitionstart":nd(e.target,this)&&setTimeout(()=>l5(this,hJ,h0).call(this),0)}}}h$=new WeakMap,hK=new WeakMap,hq=new WeakMap,hY=new WeakMap,hG=new WeakMap,hj=new WeakMap,hQ=new WeakMap,hZ=new WeakMap,hz=new WeakMap,hX=new WeakMap,hJ=new WeakSet,h0=function(){l5(this,h1,h2).call(this)?l2(this,hK).start():l2(this,hK).stop()},h1=new WeakSet,h2=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nm(this)},h3=new WeakMap,h4=new WeakSet,h5=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?nu(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},h9=new WeakSet,h8=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},h6=new WeakSet,h7=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+l2(this,hQ)){let t=e.range.left-e.bounds.left-l2(this,hQ);return`${n-i/2+t}px`}if(n>r-l2(this,hZ)){let t=e.bounds.right-e.range.right-l2(this,hZ);return`${n+i/2-t-e.range.width}px`}return 0},me=new WeakSet,mt=function(e){let t=[...l2(this,hq)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){l5(this,mi,ma).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=np(this.shadowRoot,"#preview-rail"),r=np(this.shadowRoot,'[part~="preview-box"]'),n=l5(this,h4,h5).call(this,l2(this,hG)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=l5(this,h9,h8).call(this,n,s),l=l5(this,h6,h7).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(l2(this,hY))-Math.round(s*i))&&s>.01&&s<.99||(l4(this,hY,s*i),l5(this,mi,ma).call(this,l2(this,hY)))},mi=new WeakSet,ma=function(e){this.dispatchEvent(new r9.CustomEvent(rA.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},mr=new WeakSet,mn=function(){l2(this,hK).stop();let e=l6(this);this.dispatchEvent(new r9.CustomEvent(rA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},l7.shadowRootOptions={mode:"open"},l7.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${rR.MEDIA_PREVIEW_IMAGE}], [${rR.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${rR.MEDIA_PREVIEW_IMAGE}], [${rR.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${rR.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${rR.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${rR.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${rR.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${rR.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${rR.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${rR.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${rR.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${rR.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${rR.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${rR.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${rR.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${lS.shadowRootOptions.mode}">
            ${lS.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},r9.customElements.get("media-time-range")||r9.customElements.define("media-time-range",l7);let de=e=>e.mediaMuted?0:e.mediaVolume,dt=e=>`${Math.round(100*e)}%`;class di extends ol{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_VOLUME,rR.MEDIA_MUTED,rR.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new r9.CustomEvent(rA.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",rz("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===rR.MEDIA_VOLUME||e===rR.MEDIA_MUTED)&&(this.range.valueAsNumber=de(this),this.range.setAttribute("aria-valuetext",dt(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return nE(this,rR.MEDIA_VOLUME,1)}set mediaVolume(e){nb(this,rR.MEDIA_VOLUME,e)}get mediaMuted(){return ng(this,rR.MEDIA_MUTED)}set mediaMuted(e){nf(this,rR.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return n_(this,rR.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ny(this,rR.MEDIA_VOLUME_UNAVAILABLE,e)}}r9.customElements.get("media-volume-range")||r9.customElements.define("media-volume-range",di);class da extends sj{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=rz("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return ng(this,rR.MEDIA_LOOP)}set mediaLoop(e){nf(this,rR.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new r9.CustomEvent(rA.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}da.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${rR.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},da.getTooltipContentHTML=function(){return rz("Loop")},r9.customElements.get("media-loop-button")||r9.customElements.define("media-loop-button",da);var dr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dn=(e,t,i)=>(dr(e,t,"read from private field"),i?i.call(e):t.get(e)),ds=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dl=(e,t,i,a)=>(dr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dd={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof db&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof db?a.element[a.attributeName]=t:a.value=t}}}};class du extends r9.DocumentFragment{constructor(e,t,i=dd){var a;super(),ds(this,ms,void 0),ds(this,mo,void 0),this.append(e.content.cloneNode(!0)),dl(this,ms,dc(this)),dl(this,mo,i),null==(a=i.createCallback)||a.call(i,this,dn(this,ms),t),i.processCallback(this,dn(this,ms),t)}update(e){dn(this,mo).processCallback(this,dn(this,ms),e)}}ms=new WeakMap,mo=new WeakMap;let dc=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new dE;for([i,a]of dm(r.value))if(i){let i=new db(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of dm(n))if(i){let i=new dg(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new df(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else dc(r,t);return t},dh={},dm=e=>{let t="",i=0,a=dh[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),dh[e]=a};class dp{get value(){return""}set value(e){}toString(){return this.value}}let dv=new WeakMap;class dE{constructor(){ds(this,ml,[])}[Symbol.iterator](){return dn(this,ml).values()}get length(){return dn(this,ml).length}item(e){return dn(this,ml)[e]}append(...e){for(let t of e)t instanceof db&&dv.set(t,this),dn(this,ml).push(t)}toString(){return dn(this,ml).join("")}}ml=new WeakMap;class db extends dp{constructor(e,t,i){super(),ds(this,mm),ds(this,md,""),ds(this,mu,void 0),ds(this,mc,void 0),ds(this,mh,void 0),dl(this,mu,e),dl(this,mc,t),dl(this,mh,i)}get attributeName(){return dn(this,mc)}get attributeNamespace(){return dn(this,mh)}get element(){return dn(this,mu)}get value(){return dn(this,md)}set value(e){dn(this,md)!==e&&(dl(this,md,e),dn(this,mm,mp)&&1!==dn(this,mm,mp).length?dn(this,mu).setAttributeNS(dn(this,mh),dn(this,mc),dn(this,mm,mp).toString()):null==e?dn(this,mu).removeAttributeNS(dn(this,mh),dn(this,mc)):dn(this,mu).setAttributeNS(dn(this,mh),dn(this,mc),e))}get booleanValue(){return dn(this,mu).hasAttributeNS(dn(this,mh),dn(this,mc))}set booleanValue(e){if(dn(this,mm,mp)&&1!==dn(this,mm,mp).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}md=new WeakMap,mu=new WeakMap,mc=new WeakMap,mh=new WeakMap,mm=new WeakSet,mp=function(){return dv.get(this)};class dg extends dp{constructor(e,t){super(),ds(this,mv,void 0),ds(this,mE,void 0),dl(this,mv,e),dl(this,mE,t?[...t]:[new Text])}get replacementNodes(){return dn(this,mE)}get parentNode(){return dn(this,mv)}get nextSibling(){return dn(this,mE)[dn(this,mE).length-1].nextSibling}get previousSibling(){return dn(this,mE)[0].previousSibling}get value(){return dn(this,mE).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),dl(this,mE,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(dn(this,mE)[0].parentNode,dn(this,mE),t,this.nextSibling))}}mv=new WeakMap,mE=new WeakMap;class df extends dg{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let d_={string:e=>String(e)};class dy{constructor(e){this.template=e,this.state=void 0}}let dT=new WeakMap,dA=new WeakMap,dk={partial:(e,t)=>{t[e.expression]=new dy(e.template)},if:(e,t)=>{var i;if(dI(e.expression,t)){if(dT.get(e)!==e.template){dT.set(e,e.template);let i=new du(e.template,t,dS);e.replace(i),dA.set(e,i)}else null==(i=dA.get(e))||i.update(t)}else e.replace(""),dT.delete(e),dA.delete(e)}},dw=Object.keys(dk),dS={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof df){if(!n.directive){let e=dw.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=dk[n.directive])||a.call(dk,n,i);continue}let t=dI(e,i);if(t instanceof dy){dT.get(n)!==t.template?(dT.set(n,t.template),t=new du(t.template,t.state,dS),n.value=t,dA.set(n,t)):null==(r=dA.get(n))||r.update(t.state);continue}t?(n instanceof db&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof db?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,dT.delete(n),dA.delete(n))):n instanceof db?n.value=void 0:(n.value=void 0,dT.delete(n),dA.delete(n))}}},dR={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=d_[t])?void 0:i.call(d_,e)}};function dI(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return dC(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return dC(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=dL(d,t))}return i}if(1===d.length)return dD(d[0])?dL(d[0].token,t):dC(e);if(2===d.length){let i=dR[null==(o=d[0])?void 0:o.token];return i&&dD(d[1])?i(dL(d[1].token,t)):dC(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=dR[i];return a&&dD(d[0])&&dD(d[2])?a(dL(d[0].token,t),"|"===i?d[2].token:dL(d[2].token,t)):dC(e)}}function dC(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function dD({type:e}){return["number","boolean","string","param"].includes(e)}function dL(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):rV(e)?parseFloat(e):t[e]}var dM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dO=(e,t,i)=>(dM(e,t,"read from private field"),i?i.call(e):t.get(e)),dx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dN=(e,t,i,a)=>(dM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dP=(e,t,i)=>(dM(e,t,"access private method"),i);let dU={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},dB=r8.createElement("template");dB.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class dH extends r9.HTMLElement{constructor(){super(),dx(this,m_),dx(this,mT),dx(this,mb,void 0),dx(this,mg,void 0),dx(this,mf,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(dU[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(rI.BREAKPOINTS_COMPUTED,this.render),dP(this,m_,my).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=dO(this,mb))?e:this.constructor.template}set template(e){if(null===e){this.removeAttribute("template");return}"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(dN(this,mb,e),dN(this,mf,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>dU[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=dU[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(rV(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&dP(this,mT,mA).call(this)}connectedCallback(){dP(this,mT,mA).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==dO(this,mg)&&(dN(this,mg,this.template),this.renderer=new du(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(dB.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function dW(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function dV(e){return e.split("-")[0]}mb=new WeakMap,mg=new WeakMap,mf=new WeakMap,m_=new WeakSet,my=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},mT=new WeakSet,mA=function(){var e;let t=this.getAttribute("template");if(!t||t===dO(this,mf))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){dN(this,mf,t),dN(this,mb,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(dN(this,mf,t),dW(t).then(e=>{let t=r8.createElement("template");t.innerHTML=e,dN(this,mb,t),this.createRenderer()}).catch(console.error))},dH.observedAttributes=["template"],dH.processor=dS,r9.customElements.get("media-theme")||r9.customElements.define("media-theme",dH);class dF extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class d$ extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var dK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dq=(e,t,i)=>(dK(e,t,"read from private field"),i?i.call(e):t.get(e)),dY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dG=(e,t,i,a)=>(dK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dj=(e,t,i)=>(dK(e,t,"access private method"),i);function dQ({type:e,text:t,value:i,checked:a}){let r=r8.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=r8.createElement("span");return n.textContent=t,r.append(n),r}function dZ(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let dz={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class dX extends r9.HTMLElement{constructor(){if(super(),dY(this,mL),dY(this,mO),dY(this,mP),dY(this,mB),dY(this,mW),dY(this,mF),dY(this,mY),dY(this,mj),dY(this,mZ),dY(this,mX),dY(this,m0),dY(this,m2),dY(this,m4),dY(this,m9),dY(this,m6),dY(this,pe),dY(this,pi),dY(this,pr),dY(this,mk,null),dY(this,mw,null),dY(this,mS,null),dY(this,mR,new Set),dY(this,mI,void 0),dY(this,mC,!1),dY(this,mD,null),dY(this,mN,()=>{let e=dq(this,mR),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));dG(this,mR,t)}),dY(this,mK,()=>{dj(this,mY,mG).call(this),dj(this,mj,mQ).call(this,!1)}),dY(this,mq,()=>{dj(this,mY,mG).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),dG(this,mI,new MutationObserver(dq(this,mN))),dq(this,mI).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[dz.DISABLED,dz.HIDDEN,dz.STYLE,dz.ANCHOR,rk.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":dj(this,mL,mM).call(this,e);break;case"invoke":dj(this,mB,mH).call(this,e);break;case"click":dj(this,mZ,mz).call(this,e);break;case"toggle":dj(this,m0,m1).call(this,e);break;case"focusout":dj(this,m4,m5).call(this,e);break;case"keydown":dj(this,m9,m8).call(this,e)}}connectedCallback(){var e,t;dG(this,mD,nv(this.shadowRoot,":host")),dj(this,mP,mU).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),dG(this,mk,nn(this)),null==(t=null==(e=dq(this,mk))?void 0:e.associateElement)||t.call(e,this),this.hidden||(nt(d0(this),dq(this,mK)),nt(this,dq(this,mq))),dj(this,mO,mx).call(this)}disconnectedCallback(){var e,t;ni(d0(this),dq(this,mK)),ni(this,dq(this,mq)),this.disable(),null==(t=null==(e=dq(this,mk))?void 0:e.unassociateElement)||t.call(e,this),dG(this,mk,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===dz.HIDDEN&&i!==t?(dq(this,mC)||dG(this,mC,!0),this.hidden?dj(this,mF,m$).call(this):dj(this,mW,mV).call(this),this.dispatchEvent(new d$({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rk.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=dq(this,mk))?void 0:a.unassociateElement)||r.call(a,this),dG(this,mk,null)),i&&this.isConnected&&(dG(this,mk,nn(this)),null==(s=null==(n=dq(this,mk))?void 0:n.associateElement)||s.call(n,this))):e===dz.DISABLED&&i!==t?null==i?this.enable():this.disable():e===dz.STYLE&&i!==t&&dj(this,mP,mU).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nh(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(dJ)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&dj(this,pr,pn).call(this,t)}focus(){if(dG(this,mw,nc()),this.items.length){dj(this,pi,pa).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=dj(this,m6,m7).call(this,e);i&&(dj(this,pr,pn).call(this,i,"checkbox"===i.type),dq(this,mS)&&!this.hidden&&(null==(t=dq(this,mw))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=dj(this,m6,m7).call(this,e))?t:dj(this,pe,pt).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),dj(this,pi,pa).call(this,r[s]),r[s].focus()}}function dJ(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function d0(e){var t;return null!=(t=e.getAttribute("bounds")?nu(e,`#${e.getAttribute("bounds")}`):nr(e)||e.parentElement)?t:e}mk=new WeakMap,mw=new WeakMap,mS=new WeakMap,mR=new WeakMap,mI=new WeakMap,mC=new WeakMap,mD=new WeakMap,mL=new WeakSet,mM=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&dj(this,mO,mx).call(this),t.name||dq(this,mN).call(this)},mO=new WeakSet,mx=function(){let e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=0===t.assignedNodes().length&&0===e.assignedNodes().length},mN=new WeakMap,mP=new WeakSet,mU=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},mB=new WeakSet,mH=function(e){dG(this,mS,e.relatedTarget),nd(this,e.relatedTarget)||(this.hidden=!this.hidden)},mW=new WeakSet,mV=function(){var e;null==(e=dq(this,mS))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),nt(d0(this),dq(this,mK)),nt(this,dq(this,mq))},mF=new WeakSet,m$=function(){var e;null==(e=dq(this,mS))||e.setAttribute("aria-expanded","false"),ni(d0(this),dq(this,mK)),ni(this,dq(this,mq))},mK=new WeakMap,mq=new WeakMap,mY=new WeakSet,mG=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(dV(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=dV(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=d0(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=dq(this,mD);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},mj=new WeakSet,mQ=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=dq(this,mD);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),dj(this,mY,mG).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),dj(this,mY,mG).call(this);a.removeProperty("--media-menu-transition-in")},mZ=new WeakSet,mz=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(dq(this,mX,mJ))){null==(t=dq(this,mw))||t.focus(),this.hidden=!0;return}let i=dj(this,m6,m7).call(this,e);!i||i.hasAttribute("disabled")||(dj(this,pi,pa).call(this,i),this.handleSelect(e))},mX=new WeakSet,mJ=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},m0=new WeakSet,m1=function(e){if(e.target===this)return;dj(this,m2,m3).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new dF({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);dj(this,mj,mQ).call(this,!0)},m2=new WeakSet,m3=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},m4=new WeakSet,m5=function(e){var t;nd(this,e.relatedTarget)||(dq(this,mC)&&(null==(t=dq(this,mw))||t.focus()),!dq(this,mS)||dq(this,mS)===e.relatedTarget||this.hidden||(this.hidden=!0))},m9=new WeakSet,m8=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(dq(this,mC)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=dq(this,mw))||n.focus(),dq(this,mC)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},m6=new WeakSet,m7=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},pe=new WeakSet,pt=function(){return this.items.find(e=>0===e.tabIndex)},pi=new WeakSet,pa=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},pr=new WeakSet,pn=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},dX.shadowRootOptions={mode:"open"},dX.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},r9.customElements.get("media-chrome-menu")||r9.customElements.define("media-chrome-menu",dX);var d1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d2=(e,t,i)=>(d1(e,t,"read from private field"),i?i.call(e):t.get(e)),d3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d4=(e,t,i,a)=>(d1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d5=(e,t,i)=>(d1(e,t,"access private method"),i);let d9={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class d8 extends r9.HTMLElement{constructor(){if(super(),d3(this,pl),d3(this,pu),d3(this,ph),d3(this,pv),d3(this,pb),d3(this,pf),d3(this,ps,!1),d3(this,po,void 0),d3(this,pp,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=r8.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=na(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[d9.TYPE,d9.DISABLED,d9.CHECKED,d9.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),d6(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":d5(this,pl,pd).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":d5(this,pb,pg).call(this,e);break;case"keyup":d5(this,pv,pE).call(this,e)}}attributeChangedCallback(e,t,i){e===d9.CHECKED&&d6(this)&&!d2(this,ps)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===d9.TYPE&&i!==t?this.role="menuitem"+i:e===d9.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(d9.DISABLED)||this.enable(),this.role="menuitem"+this.type,d4(this,po,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),d5(this,pf,p_).call(this),this.submenuElement&&d5(this,pu,pc).call(this)}disconnectedCallback(){this.disable(),d5(this,pf,p_).call(this),d4(this,po,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nh(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(d9.TYPE))?e:""}set type(e){this.setAttribute(d9.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(d9.VALUE))?e:this.text}set value(e){this.setAttribute(d9.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(d6(this))return"true"===this.getAttribute("aria-checked")}set checked(e){d6(this)&&(d4(this,ps,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!d6(this)&&this.invokeTargetElement&&nd(this,e.target)&&this.invokeTargetElement.dispatchEvent(new dF({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function d6(e){return"radio"===e.type||"checkbox"===e.type}ps=new WeakMap,po=new WeakMap,pl=new WeakSet,pd=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?d5(this,pu,pc).call(this):d5(this,ph,pm).call(this))},pu=new WeakSet,pc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",d2(this,pp)),this.submenuElement.addEventListener("addmenuitem",d2(this,pp)),this.submenuElement.addEventListener("removemenuitem",d2(this,pp)),d2(this,pp).call(this)},ph=new WeakSet,pm=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",d2(this,pp)),this.submenuElement.removeEventListener("addmenuitem",d2(this,pp)),this.submenuElement.removeEventListener("removemenuitem",d2(this,pp)),d2(this,pp).call(this)},pp=new WeakMap,pv=new WeakSet,pE=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",d5(this,pv,pE));return}this.handleClick(e)},pb=new WeakSet,pg=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",d5(this,pv,pE));return}this.addEventListener("keyup",d5(this,pv,pE),{once:!0})},pf=new WeakSet,p_=function(){var e;let t=null==(e=d2(this,po))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},d8.shadowRootOptions={mode:"open"},d8.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},d8.getSuffixSlotInnerHTML=function(e){return""},r9.customElements.get("media-chrome-menu-item")||r9.customElements.define("media-chrome-menu-item",d8);class d7 extends dX{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nr(this).querySelector("media-settings-menu-button")}}d7.getTemplateHTML=function(e){return`
    ${dX.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},r9.customElements.get("media-settings-menu")||r9.customElements.define("media-settings-menu",d7);class ue extends d8{}ue.shadowRootOptions={mode:"open"},ue.getTemplateHTML=function(e){return`
    ${d8.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},ue.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},r9.customElements.get("media-settings-menu-item")||r9.customElements.define("media-settings-menu-item",ue);class ut extends sj{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nh(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new dF({relatedTarget:this}))}}r9.customElements.get("media-chrome-menu-button")||r9.customElements.define("media-chrome-menu-button",ut);class ui extends ut{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rz("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nr(this).querySelector("media-settings-menu")}}ui.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},ui.getTooltipContentHTML=function(){return rz("Settings")},r9.customElements.get("media-settings-menu-button")||r9.customElements.define("media-settings-menu-button",ui);var ua=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ur=(e,t,i)=>(ua(e,t,"read from private field"),i?i.call(e):t.get(e)),un=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},us=(e,t,i,a)=>(ua(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uo=(e,t,i)=>(ua(e,t,"access private method"),i);class ul extends dX{constructor(){super(...arguments),un(this,pA),un(this,pw),un(this,py,[]),un(this,pT,void 0)}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_AUDIO_TRACK_LIST,rR.MEDIA_AUDIO_TRACK_ENABLED,rR.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rR.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===rR.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;us(this,py,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(rH)),uo(this,pA,pk).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uo(this,pw,pS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uo(this,pw,pS))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nr(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return ur(this,py)}set mediaAudioTrackList(e){us(this,py,e),uo(this,pA,pk).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=n_(this,rR.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ny(this,rR.MEDIA_AUDIO_TRACK_ENABLED,e)}}py=new WeakMap,pT=new WeakMap,pA=new WeakSet,pk=function(){if(ur(this,pT)===JSON.stringify(this.mediaAudioTrackList))return;us(this,pT,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=dQ({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(dZ(this,"checked-indicator")),this.defaultSlot.append(e)}},pw=new WeakSet,pS=function(){if(null==this.value)return;let e=new r9.CustomEvent(rA.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},r9.customElements.get("media-audio-track-menu")||r9.customElements.define("media-audio-track-menu",ul);let ud=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,uu=e=>{let t=rz("Audio");e.setAttribute("aria-label",t)};class uc extends ut{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_AUDIO_TRACK_ENABLED,rR.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),uu(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_LANG&&uu(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nr(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=n_(this,rR.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ny(this,rR.MEDIA_AUDIO_TRACK_ENABLED,e)}}uc.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ud}</slot>
  `},uc.getTooltipContentHTML=function(){return rz("Audio")},r9.customElements.get("media-audio-track-menu-button")||r9.customElements.define("media-audio-track-menu-button",uc);var uh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},um=(e,t,i)=>(uh(e,t,"read from private field"),i?i.call(e):t.get(e)),up=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uv=(e,t,i,a)=>(uh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uE=(e,t,i)=>(uh(e,t,"access private method"),i);let ub=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class ug extends dX{constructor(){super(...arguments),up(this,pI),up(this,pD),up(this,pR,void 0)}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_SUBTITLES_LIST,rR.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_SUBTITLES_LIST&&t!==i?uE(this,pI,pC).call(this):e===rR.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",uE(this,pI,pC).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uE(this,pD,pL))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uE(this,pD,pL))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nr(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return uf(this,rR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){u_(this,rR.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uf(this,rR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){u_(this,rR.MEDIA_SUBTITLES_SHOWING,e)}}pR=new WeakMap,pI=new WeakSet,pC=function(){var e;let t=um(this,pR)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(rR.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;uv(this,pR,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let a=!this.value,r=dQ({type:"radio",text:this.formatMenuItemText(rz("Off")),value:"off",checked:a});for(let t of(r.prepend(dZ(this,"checked-indicator")),this.defaultSlot.append(r),this.mediaSubtitlesList)){let i=dQ({type:"radio",text:this.formatMenuItemText(t.label,t),value:nq(t),checked:this.value==nq(t)});i.prepend(dZ(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(dZ(this,"captions-indicator")),this.defaultSlot.append(i)}},pD=new WeakSet,pL=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(rR.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new r9.CustomEvent(rA.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new r9.CustomEvent(rA.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},ug.getTemplateHTML=function(e){return`
    ${dX.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${ub}</slot>
  `};let uf=(e,t)=>{let i=e.getAttribute(t);return i?n$(i):[]},u_=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=nY(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};r9.customElements.get("media-captions-menu")||r9.customElements.define("media-captions-menu",ug);let uy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,uT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,uA=e=>{e.setAttribute("data-captions-enabled",nz(e).toString())},uk=e=>{e.setAttribute("aria-label",rz("closed captions"))};class uw extends ut{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_SUBTITLES_LIST,rR.MEDIA_SUBTITLES_SHOWING,rR.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),uk(this),uA(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_SUBTITLES_SHOWING?uA(this):e===rR.MEDIA_LANG&&uk(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nr(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return uS(this,rR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){uR(this,rR.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uS(this,rR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){uR(this,rR.MEDIA_SUBTITLES_SHOWING,e)}}uw.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${uy}</slot>
      <slot name="off">${uT}</slot>
    </slot>
  `},uw.getTooltipContentHTML=function(){return rz("Captions")};let uS=(e,t)=>{let i=e.getAttribute(t);return i?n$(i):[]},uR=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=nY(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};r9.customElements.get("media-captions-menu-button")||r9.customElements.define("media-captions-menu-button",uw);var uI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uC=(e,t,i)=>(uI(e,t,"read from private field"),i?i.call(e):t.get(e)),uD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uL=(e,t,i)=>(uI(e,t,"access private method"),i);let uM={RATES:"rates"};class uO extends dX{constructor(){super(),uD(this,pO),uD(this,pN),uD(this,pM,new nW(this,uM.RATES,{defaultValue:lo})),uL(this,pO,px).call(this)}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PLAYBACK_RATE,uM.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rR.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,uL(this,pO,px).call(this)):e===uM.RATES&&t!=i&&(uC(this,pM).value=i,uL(this,pO,px).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uL(this,pN,pP))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uL(this,pN,pP))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nr(this).querySelector("media-playback-rate-menu-button")}get rates(){return uC(this,pM)}set rates(e){e?Array.isArray(e)?uC(this,pM).value=e.join(" "):"string"==typeof e&&(uC(this,pM).value=e):uC(this,pM).value="",uL(this,pO,px).call(this)}get mediaPlaybackRate(){return nE(this,rR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nb(this,rR.MEDIA_PLAYBACK_RATE,e)}}pM=new WeakMap,pO=new WeakSet,px=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(uC(this,pM)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=dQ({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(dZ(this,"checked-indicator")),this.defaultSlot.append(t)}},pN=new WeakSet,pP=function(){if(!this.value)return;let e=new r9.CustomEvent(rA.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},r9.customElements.get("media-playback-rate-menu")||r9.customElements.define("media-playback-rate-menu",uO);class ux extends ut{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rR.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rz("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nr(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return nE(this,rR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nb(this,rR.MEDIA_PLAYBACK_RATE,e)}}ux.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},ux.getTooltipContentHTML=function(){return rz("Playback rate")},r9.customElements.get("media-playback-rate-menu-button")||r9.customElements.define("media-playback-rate-menu-button",ux);var uN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uP=(e,t,i)=>(uN(e,t,"read from private field"),i?i.call(e):t.get(e)),uU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uB=(e,t,i,a)=>(uN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uH=(e,t,i)=>(uN(e,t,"access private method"),i);class uW extends dX{constructor(){super(...arguments),uU(this,pH),uU(this,pV),uU(this,pU,[]),uU(this,pB,{})}static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_RENDITION_LIST,rR.MEDIA_RENDITION_SELECTED,rR.MEDIA_RENDITION_UNAVAILABLE,rR.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(t<1?1:0)} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===rR.MEDIA_RENDITION_SELECTED&&t!==i)?(this.value=null!=i?i:"auto",uH(this,pH,pW).call(this)):e===rR.MEDIA_RENDITION_LIST&&t!==i?(uB(this,pU,null==i?void 0:i.split(/\s+/).map(rU)),uH(this,pH,pW).call(this)):e===rR.MEDIA_HEIGHT&&t!==i&&uH(this,pH,pW).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uH(this,pV,pF))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uH(this,pV,pF))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nr(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return uP(this,pU)}set mediaRenditionList(e){uB(this,pU,e),uH(this,pH,pW).call(this)}get mediaRenditionSelected(){return n_(this,rR.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ny(this,rR.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nE(this,rR.MEDIA_HEIGHT)}set mediaHeight(e){nb(this,rR.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}pU=new WeakMap,pB=new WeakMap,pH=new WeakSet,pW=function(){if(uP(this,pB).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&uP(this,pB).mediaHeight===this.mediaHeight)return;uP(this,pB).mediaRenditionList=JSON.stringify(this.mediaRenditionList),uP(this,pB).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let i of e)i.selected=i===t;this.defaultSlot.textContent="";let i=!this.mediaRenditionSelected;for(let t of e){let e=dQ({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!i});e.prepend(dZ(this,"checked-indicator")),this.defaultSlot.append(e)}let a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${rz("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${rz("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(rz("Auto")),n=dQ({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(dZ(this,"checked-indicator")),this.defaultSlot.append(n)},pV=new WeakSet,pF=function(){if(null==this.value)return;let e=new r9.CustomEvent(rA.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},r9.customElements.get("media-rendition-menu")||r9.customElements.define("media-rendition-menu",uW);let uV=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class uF extends ut{static get observedAttributes(){return[...super.observedAttributes,rR.MEDIA_RENDITION_SELECTED,rR.MEDIA_RENDITION_UNAVAILABLE,rR.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rz("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nr(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return n_(this,rR.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ny(this,rR.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nE(this,rR.MEDIA_HEIGHT)}set mediaHeight(e){nb(this,rR.MEDIA_HEIGHT,e)}}uF.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${uV}</slot>
  `},uF.getTooltipContentHTML=function(){return rz("Quality")},r9.customElements.get("media-rendition-menu-button")||r9.customElements.define("media-rendition-menu-button",uF);var u$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uK=(e,t,i)=>(u$(e,t,"read from private field"),i?i.call(e):t.get(e)),uq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uY=(e,t,i,a)=>(u$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uG=(e,t,i)=>(u$(e,t,"access private method"),i);class uj extends dX{constructor(){super(),uq(this,pK),uq(this,pY),uq(this,pj),uq(this,pZ),uq(this,pJ),uq(this,p$,!1),uq(this,pX,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=uG(this,pZ,pz).call(this,t);(i||a)&&(uK(this,p$)?uG(this,pY,pG).call(this):uG(this,pJ,p0).call(this,e))}),uq(this,p1,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=uG(this,pZ,pz).call(this,t);!i&&(a&&(r||n)||uG(this,pY,pG).call(this))}),uq(this,p2,e=>{"Escape"===e.key&&uG(this,pY,pG).call(this)}),uq(this,p3,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}uG(this,pY,pG).call(this)}),this.setAttribute("noautohide",""),uG(this,pK,pq).call(this)}connectedCallback(){super.connectedCallback(),nr(this).addEventListener("contextmenu",uK(this,pX)),this.addEventListener("click",uK(this,p3))}disconnectedCallback(){super.disconnectedCallback(),nr(this).removeEventListener("contextmenu",uK(this,pX)),this.removeEventListener("click",uK(this,p3)),document.removeEventListener("mousedown",uK(this,p1)),document.removeEventListener("keydown",uK(this,p2))}}p$=new WeakMap,pK=new WeakSet,pq=function(){this.hidden=!uK(this,p$)},pY=new WeakSet,pG=function(){uY(this,p$,!1),uG(this,pK,pq).call(this)},pj=new WeakSet,pQ=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&uG(e,pY,pG).call(e)})},pZ=new WeakSet,pz=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},pX=new WeakMap,pJ=new WeakSet,p0=function(e){e.preventDefault(),uG(this,pj,pQ).call(this),uY(this,p$,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,uG(this,pK,pq).call(this),document.addEventListener("mousedown",uK(this,p1),{once:!0}),document.addEventListener("keydown",uK(this,p2),{once:!0})},p1=new WeakMap,p2=new WeakMap,p3=new WeakMap,uj.getTemplateHTML=function(e){return`
      ${dX.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},r9.customElements.get("media-context-menu")||r9.customElements.define("media-context-menu",uj);class uQ extends d8{}uQ.shadowRootOptions={mode:"open"},uQ.getTemplateHTML=function(e){return`
    ${d8.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},r9.customElements.get("media-context-menu-item")||r9.customElements.define("media-context-menu-item",uQ);var uZ=e=>{throw TypeError(e)},uz=(e,t,i)=>t.has(e)||uZ("Cannot "+i),uX=(e,t,i)=>(uz(e,t,"read from private field"),i?i.call(e):t.get(e)),uJ=(e,t,i)=>t.has(e)?uZ("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),u0=(e,t,i,a)=>(uz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),u1=(e,t,i)=>(uz(e,t,"access private method"),i),u2=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends u2{}globalThis.DocumentFragment=e}var u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cE,cb,cg,cf,c_,cy,cT,cA,ck,cw,cS,cR,cI,cC,cD,cL,cM,cO,cx,cN,cP,cU,cB,cH,cW,cV,cF,c$,cK,cq,cY,cG,cj,cQ,cZ,cz,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hE,hb,hg,hf,h_,hy,hT,hA,hk,hw,hS,hR,hI,hC,hD,hL,hM,hO,hx,hN,hP,hU,hB,hH,hW,hV,hF,h$,hK,hq,hY,hG,hj,hQ,hZ,hz,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mE,mb,mg,mf,m_,my,mT,mA,mk,mw,mS,mR,mI,mC,mD,mL,mM,mO,mx,mN,mP,mU,mB,mH,mW,mV,mF,m$,mK,mq,mY,mG,mj,mQ,mZ,mz,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pE,pb,pg,pf,p_,py,pT,pA,pk,pw,pS,pR,pI,pC,pD,pL,pM,pO,px,pN,pP,pU,pB,pH,pW,pV,pF,p$,pK,pq,pY,pG,pj,pQ,pZ,pz,pX,pJ,p0,p1,p2,p3,p4,p5=class extends u2{},p9=class{constructor(e,t={}){uJ(this,p4),u0(this,p4,null==t?void 0:t.detail)}get detail(){return uX(this,p4)}initCustomEvent(){}};p4=new WeakMap;var p8={document:{createElement:function(e,t){return new p5}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(p5)},CustomEvent:p9,EventTarget:u2,HTMLElement:p5,HTMLVideoElement:class extends u2{}},p6="undefined"==typeof window||void 0===globalThis.customElements,p7=p6?p8:globalThis,ve=p6?p8.document:globalThis.document;function vt(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vi(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function va(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vr(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vn,vs,vo,vl=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vl(e,t.getRootNode().host)),vd="mux.com",vu=(()=>{try{return"3.10.2"}catch{}return"UNKNOWN"})(),vc=(e,{token:t,customDomain:i=vd,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=t9(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vr({token:t,time:s,program_time:r})}`},vh=(e,{token:t,customDomain:i=vd,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=t9(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vr({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},vm=e=>{if(e){if([tF.LIVE,tF.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tF.LIVE}},vp={crossorigin:"crossOrigin",playsinline:"playsInline"},vv=class{constructor(e,t){uJ(this,vn),uJ(this,vs),uJ(this,vo,[]),u0(this,vn,e),u0(this,vs,t)}[Symbol.iterator](){return uX(this,vo).values()}get length(){return uX(this,vo).length}get value(){var e;return null!=(e=uX(this,vo).join(" "))?e:""}set value(e){var t;e!==this.value&&(u0(this,vo,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return uX(this,vo)[e]}values(){return uX(this,vo).values()}keys(){return uX(this,vo).keys()}forEach(e){uX(this,vo).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||uX(this,vo).push(e)}),(""!==this.value||null!=(t=uX(this,vn))&&t.hasAttribute(`${uX(this,vs)}`))&&null!=(i=uX(this,vn))&&i.setAttribute(`${uX(this,vs)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{uX(this,vo).splice(uX(this,vo).indexOf(e),1)}),null==(t=uX(this,vn))||t.setAttribute(`${uX(this,vs)}`,`${this.value}`)}contains(e){return uX(this,vo).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vn=new WeakMap,vs=new WeakMap,vo=new WeakMap;var vE=`[mux-player ${vu}]`;function vb(...e){console.warn(vE,...e)}function vg(...e){console.error(vE,...e)}function vf(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${it("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),vb(i)}var v_={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},vy={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},vT=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),vA=[...Object.values(v_).filter(e=>v_.PLAYSINLINE!==e),...Object.values(vy)];function vk(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var vw=class extends p7.HTMLElement{static get observedAttributes(){return vA}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case vy.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case vy.VOLUME:{let e=null!=(a=va(i))?a:1;this.media&&(this.media.volume=e);return}case vy.PLAYBACKRATE:{let e=null!=(r=va(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:vT}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:vT}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=va(this.getAttribute(vy.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(vy.PLAYBACKRATE,`${e}`):this.removeAttribute(vy.PLAYBACKRATE)}get crossOrigin(){return vk(this,v_.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(v_.CROSSORIGIN,`${e}`)}get autoplay(){return null!=vk(this,v_.AUTOPLAY)}set autoplay(e){e?this.setAttribute(v_.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(v_.AUTOPLAY)}get loop(){return null!=vk(this,v_.LOOP)}set loop(e){e?this.setAttribute(v_.LOOP,""):this.removeAttribute(v_.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=vk(this,v_.MUTED)}set defaultMuted(e){e?this.setAttribute(v_.MUTED,""):this.removeAttribute(v_.MUTED)}get playsInline(){return null!=vk(this,v_.PLAYSINLINE)}set playsInline(e){vg("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(v_.PRELOAD,e):this.removeAttribute(v_.PRELOAD)}},vS=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,vR=new WeakMap,vI=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=vR.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=vR.get(this.element);e&&e.delete(this.type)}}static for(t){vR.has(t.element)||vR.set(t.element,new Map);let i=t.attributeName.slice(2),a=vR.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},vC=new Map,vD=new WeakMap,vL=new WeakMap,vM=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(vC.has(this.stringsKey))return vC.get(this.stringsKey);{let e=ve.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),vC.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(vD.get(e)!==i){vD.set(e,i);let t=new du(i,this.values,this.processor);vL.set(e,t),e instanceof dg?e.replace(...t.children):e.appendChild(t);return}let a=vL.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},vO={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof db&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof db){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof db&&r.attributeName.startsWith("on")&&(vI.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof dg&&(r.replace(""),1)||n instanceof vM&&r instanceof dg&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof dg&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof db){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function vx(e,...t){return new vM(e,t,vO)}var vN=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},vP=e=>vx`
  <style>
    ${vN(e)}
    ${vS}
  </style>
  ${vH(e)}
`,vU=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===vm(e.streamType)&&(t+=" noarrowleft noarrowright"),t},vB=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),vH=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,E,b,g,f,_,y,T,A,k,w,S,R,I,C,D,L,M,O,x,N,P,U,B,H;return vx`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${vU(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tF.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(r=function(e){let t="";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${vt(e)}: ${i}; `)}),t?t.trim():void 0}({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    videotitle="${null!=(h=e.videoTitle)&&h}"
    proudlydisplaymuxbadge="${null!=(m=e.proudlyDisplayMuxBadge)&&m}"
    exportparts="${vB}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(p=e.noHotKeys)&&p}"
      target-live-window="${null!=(E=e.targetLiveWindow)&&E}"
      stream-type="${null!=(b=vm(e.streamType))&&b}"
      crossorigin="${null!=(g=e.crossOrigin)?g:""}"
      playsinline
      autoplay="${null!=(f=e.autoplay)&&f}"
      muted="${null!=(_=e.muted)&&_}"
      loop="${null!=(y=e.loop)&&y}"
      preload="${null!=(T=e.preload)&&T}"
      debug="${null!=(A=e.debug)&&A}"
      prefer-cmcd="${null!=(k=e.preferCmcd)&&k}"
      disable-tracking="${null!=(w=e.disableTracking)&&w}"
      disable-cookies="${null!=(S=e.disableCookies)&&S}"
      prefer-playback="${null!=(R=e.preferPlayback)&&R}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(I=e.beaconCollectionDomain)&&I}"
      player-init-time="${null!=(C=e.playerInitTime)&&C}"
      player-software-name="${null!=(D=e.playerSoftwareName)&&D}"
      player-software-version="${null!=(L=e.playerSoftwareVersion)&&L}"
      env-key="${null!=(M=e.envKey)&&M}"
      custom-domain="${null!=(O=e.customDomain)&&O}"
      src="${e.src?e.src:!!e.playbackId&&i9(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&i9(e)}"
      cast-receiver="${null!=(x=e.castReceiver)&&x}"
      drm-token="${null!=(P=null==(N=e.tokens)?void 0:N.drm)&&P}"
      exportparts="video"
      disable-pseudo-ended="${null!=(U=e.disablePseudoEnded)&&U}"
      max-auto-resolution="${null!=(B=e.maxAutoResolution)&&B}"
    >
      ${e.storyboard?vx`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:vx``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(H=e.placeholder)&&H}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},vW=e=>e.charAt(0).toUpperCase()+e.slice(1),vV=(e,t=!1)=>{var i,a;if(e.muxCode){let r=vW(null!=(i=e.errorCategory)?i:"video"),n=tP(null!=(a=e.errorCategory)?a:tx.VIDEO);if(e.muxCode===tN.NETWORK_OFFLINE)return it("Your device appears to be offline",t);if(e.muxCode===tN.NETWORK_TOKEN_EXPIRED)return it("{category} URL has expired",t).format({category:r});if([tN.NETWORK_TOKEN_SUB_MISMATCH,tN.NETWORK_TOKEN_AUD_MISMATCH,tN.NETWORK_TOKEN_AUD_MISSING,tN.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return it("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===tN.NETWORK_TOKEN_MISSING)return it("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===tN.NETWORK_NOT_FOUND)return it("{category} does not exist",t).format({category:r});if(e.muxCode===tN.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return it("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tB.MEDIA_ERR_NETWORK)return it("Network Error",t);if(e.code===tB.MEDIA_ERR_DECODE)return it("Media Error",t);if(e.code===tB.MEDIA_ERR_SRC_NOT_SUPPORTED)return it("Source Not Supported",t)}return it("Error",t)},vF=(e,t=!1)=>{var i,a;if(e.muxCode){let r=vW(null!=(i=e.errorCategory)?i:"video"),n=tP(null!=(a=e.errorCategory)?a:tx.VIDEO);return e.muxCode===tN.NETWORK_OFFLINE?it("Check your internet connection and try reloading this video.",t):e.muxCode===tN.NETWORK_TOKEN_EXPIRED?it("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===tN.NETWORK_TOKEN_SUB_MISMATCH?it("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===tN.NETWORK_TOKEN_MALFORMED?it("{category} URL is formatted incorrectly",t).format({category:r}):[tN.NETWORK_TOKEN_AUD_MISMATCH,tN.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?it("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[tN.NETWORK_TOKEN_MISSING,tN.NETWORK_INVALID_URL].includes(e.muxCode)?it("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===tN.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===tB.MEDIA_ERR_NETWORK||e.code===tB.MEDIA_ERR_DECODE||(e.code,tB.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},v$=(e,t=!1)=>({title:vV(e,t).toString(),message:vF(e,t).toString()}),vK=e=>{if(e.muxCode){if(e.muxCode===tN.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===tN.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([tN.NETWORK_TOKEN_AUD_MISMATCH,tN.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===tN.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===tN.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===tN.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===tN.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===tB.MEDIA_ERR_NETWORK)return"";if(e.code===tB.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tB.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},vq=(e,t)=>{let i=vK(e);return{message:e.message,context:e.context,file:i}},vY=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,vG=ve.createElement("template");"innerHTML"in vG&&(vG.innerHTML=vY);var vj,vQ,vZ=class extends dH{};vZ.template=null==(vQ=null==(vj=vG.content)?void 0:vj.children)?void 0:vQ[0],p7.customElements.get("media-theme-gerwig")||p7.customElements.define("media-theme-gerwig",vZ);var vz={SRC:"src",POSTER:"poster"},vX={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},vJ=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],v0=oO.formatErrorMessage;function v1(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}oO.formatErrorMessage=e=>{var t,i;if(e instanceof tB){let a=v$(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${it("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return v0(e)};var v2,v3,v4,v5,v9,v8,v6,v7,Ee,Et,Ei,Ea,Er,En,Es,Eo=Object.values(aX),El=Object.values(vz),Ed=Object.values(vX),Eu="mux-player",Ec={isDialogOpen:!1},Eh={redundant_streams:!0},Em=class extends vw{constructor(){super(),uJ(this,v6),uJ(this,v2),uJ(this,v3,!1),uJ(this,v4,{}),uJ(this,v5,!0),uJ(this,v9,new vv(this,"hotkeys")),uJ(this,v8,{...Ec,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&u1(this,v6,Et).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(vl(this,ve.activeElement)||e.preventDefault())}}),u0(this,v2,i4()),this.attachShadow({mode:"open"}),u1(this,v6,Ee).call(this),this.isConnected&&u1(this,v6,v7).call(this)}static get NAME(){return Eu}static get VERSION(){return vu}static get observedAttributes(){var e;return[...null!=(e=vw.observedAttributes)?e:[],...El,...Eo,...Ed]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=v1(this))}attributeChangedCallback(e,t,i){var a;switch(u1(this,v6,v7).call(this),super.attributeChangedCallback(e,t,i),e){case vX.HOTKEYS:uX(this,v9).value=i;break;case vX.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&vb(it("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case vX.THUMBNAIL_TOKEN:if(i){let e=t9(i);if(e){let{aud:t}=e,i=iS.THUMBNAIL;t!==i&&vb(it("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case vX.STORYBOARD_TOKEN:if(i){let e=t9(i);if(e){let{aud:t}=e,i=iS.STORYBOARD;t!==i&&vb(it("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case vX.DRM_TOKEN:if(i){let e=t9(i);if(e){let{aud:t}=e,i=iS.DRM;t!==i&&vb(it("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case aX.PLAYBACK_ID:null!=i&&i.includes("?token")&&vg(it("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case aX.STREAM_TYPE:i&&![tF.LIVE,tF.ON_DEMAND,tF.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:vf({file:"invalid-stream-type.md",message:it("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tF.LIVE?null==this.getAttribute(vX.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break;case vX.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=ve.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}}[aX.PLAYBACK_ID,vz.SRC,vX.PLAYBACK_TOKEN].includes(e)&&t!==i&&u0(this,v8,{...uX(this,v8),...Ec}),u1(this,v6,Ei).call(this,{[null!=(a=vp[e])?a:vi(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(rR.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new p7.CustomEvent(rA.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rI.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(rR.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new p7.CustomEvent(rA.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rI.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(aX.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tq.includes(e)?this.setAttribute(aX.PREFER_CMCD,e):vb(`Invalid value for preferCmcd. Must be one of ${tq.join()}`):this.removeAttribute(aX.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rR.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(rR.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(vX.THEME))?e:"gerwig"}set theme(e){this.setAttribute(vX.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(vJ.includes(i))continue;let a=e.getAttribute(i);t[vi(i)]=""===a||a}return t}set themeProps(e){var t,i;u1(this,v6,v7).call(this);let a={...this.themeProps,...e};for(let r in a){if(vJ.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vt(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vt(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(aX.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(aX.PLAYBACK_ID,e):this.removeAttribute(aX.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=Ep(this,vz.SRC))?e:void 0:null!=(t=this.getAttribute(vz.SRC))?t:void 0}set src(e){e?this.setAttribute(vz.SRC,e):this.removeAttribute(vz.SRC)}get poster(){var e;let t=this.getAttribute(vz.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){vb("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return vc(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(vz.POSTER,e):this.removeAttribute(vz.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(vX.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(vX.STORYBOARD_SRC,e):this.removeAttribute(vX.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tF.LIVE,tF.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:vh(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(vX.AUDIO)}set audio(e){if(!e){this.removeAttribute(vX.AUDIO);return}this.setAttribute(vX.AUDIO,"")}get hotkeys(){return uX(this,v9)}get nohotkeys(){return this.hasAttribute(vX.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(vX.NOHOTKEYS);return}this.setAttribute(vX.NOHOTKEYS,"")}get thumbnailTime(){return va(this.getAttribute(vX.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(vX.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(vX.VIDEO_TITLE))?e:this.getAttribute(vX.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(vX.VIDEO_TITLE,e):this.removeAttribute(vX.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=Ep(this,vX.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(vX.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(vX.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=p7.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(vX.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(vX.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=p7.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(vX.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(vX.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=p7.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(vX.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(vX.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(vX.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(vX.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(vX.PLAYBACK_RATES))return this.getAttribute(vX.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(vX.PLAYBACK_RATES);return}this.setAttribute(vX.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=va(this.getAttribute(vX.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(vX.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=va(this.getAttribute(vX.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(vX.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(vX.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(vX.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(vX.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return va(this.getAttribute(vX.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(vX.DEFAULT_DURATION):this.setAttribute(vX.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(aX.PLAYER_INIT_TIME)?va(this.getAttribute(aX.PLAYER_INIT_TIME)):uX(this,v2)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aX.PLAYER_INIT_TIME):this.setAttribute(aX.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(aX.PLAYER_SOFTWARE_NAME))?e:Eu}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(aX.PLAYER_SOFTWARE_VERSION))?e:vu}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aX.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aX.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aX.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(aX.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aX.MAX_RESOLUTION,e):this.removeAttribute(aX.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aX.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aX.MIN_RESOLUTION,e):this.removeAttribute(aX.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(aX.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(aX.MAX_AUTO_RESOLUTION):this.setAttribute(aX.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(aX.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aX.RENDITION_ORDER,e):this.removeAttribute(aX.RENDITION_ORDER))}get programStartTime(){return va(this.getAttribute(aX.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(aX.PROGRAM_START_TIME):this.setAttribute(aX.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return va(this.getAttribute(aX.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(aX.PROGRAM_END_TIME):this.setAttribute(aX.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return va(this.getAttribute(aX.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(aX.ASSET_START_TIME):this.setAttribute(aX.ASSET_START_TIME,`${e}`)}get assetEndTime(){return va(this.getAttribute(aX.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(aX.ASSET_END_TIME):this.setAttribute(aX.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(vX.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(vX.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):Eh}set extraSourceParams(e){null==e?this.removeAttribute(vX.EXTRA_SOURCE_PARAMS):this.setAttribute(vX.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(aX.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aX.CUSTOM_DOMAIN,e):this.removeAttribute(aX.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=Ep(this,aX.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(aX.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(vX.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(vX.NO_VOLUME_PREF,""):this.removeAttribute(vX.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(vX.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(vX.NO_MUTED_PREF,""):this.removeAttribute(vX.NO_MUTED_PREF)}get debug(){return null!=Ep(this,aX.DEBUG)}set debug(e){e?this.setAttribute(aX.DEBUG,""):this.removeAttribute(aX.DEBUG)}get disableTracking(){return null!=Ep(this,aX.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(aX.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=Ep(this,aX.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(aX.DISABLE_COOKIES,""):this.removeAttribute(aX.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(aX.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tF.UNKNOWN}set streamType(e){this.setAttribute(aX.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(vX.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(vX.DEFAULT_STREAM_TYPE))?i:tF.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(vX.DEFAULT_STREAM_TYPE,e):this.removeAttribute(vX.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(vX.TARGET_LIVE_WINDOW)?+this.getAttribute(vX.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(vX.TARGET_LIVE_WINDOW):this.setAttribute(vX.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return va(Ep(this,aX.START_TIME))}set startTime(e){this.setAttribute(aX.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(aX.PREFER_PLAYBACK);if(e===t$.MSE||e===t$.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===t$.MSE||e===t$.NATIVE?this.setAttribute(aX.PREFER_PLAYBACK,e):this.removeAttribute(aX.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(u1(this,v6,v7).call(this),!this.media){vg("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...v1(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(u1(this,v6,v7).call(this),!this.media){vg("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(u1(this,v6,v7).call(this),!this.media){vg("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(u1(this,v6,v7).call(this),!this.media){vg("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(vX.PLAYBACK_TOKEN),t=this.getAttribute(vX.DRM_TOKEN),i=this.getAttribute(vX.THUMBNAIL_TOKEN),a=this.getAttribute(vX.STORYBOARD_TOKEN);return{...uX(this,v4),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){u0(this,v4,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(vX.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(vX.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(vX.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(vX.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(vX.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(vX.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(vX.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(vX.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return iu(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(vX.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(vX.CAST_RECEIVER,e):this.removeAttribute(vX.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){vg("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(vX.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(vX.NO_TOOLTIPS);return}this.setAttribute(vX.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(vX.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(vX.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(vX.PROUDLY_DISPLAY_MUX_BADGE)}};function Ep(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}v2=new WeakMap,v3=new WeakMap,v4=new WeakMap,v5=new WeakMap,v9=new WeakMap,v8=new WeakMap,v6=new WeakSet,v7=function(){var e,t,i,a;if(!uX(this,v3)){u0(this,v3,!0),u1(this,v6,Ei).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof p7.HTMLElement))throw""}catch{vg("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{vg("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof sR))throw""}catch{vg("<media-controller> failed to upgrade!")}u1(this,v6,Ea).call(this),u1(this,v6,Er).call(this),u1(this,v6,En).call(this),u0(this,v5,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nM.USER_INACTIVE))||t),u1(this,v6,Es).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>u1(this,v6,Ei).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>u1(this,v6,Ei).call(this))}},Ee=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Et=function(e){Object.assign(uX(this,v8),e),u1(this,v6,Ei).call(this)},Ei=function(e={}){var t,i,a,r,n;let s;(function(e,t){e.renderInto(t)})(vP((t={...uX(this,v8),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(vX.STORYBOARD_SRC),fullscreenElement:this.getAttribute(vX.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=p7.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(vX.NOHOTKEYS),hotKeys:this.getAttribute(vX.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(aX.TARGET_LIVE_WINDOW),streamType:vm(this.getAttribute(aX.STREAM_TYPE)),primaryColor:this.getAttribute(vX.PRIMARY_COLOR),secondaryColor:this.getAttribute(vX.SECONDARY_COLOR),accentColor:this.getAttribute(vX.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(s=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(s).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(vX.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(aX.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(vX.TITLE),videoTitle:null!=(r=this.getAttribute(vX.VIDEO_TITLE))?r:this.getAttribute(vX.TITLE),novolumepref:this.hasAttribute(vX.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(vX.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(vX.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(vX.DISABLE_PSEUDO_ENDED),...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},Ea=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(vJ.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Er=function(){this.addEventListener("error",e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tB)){let{message:e,code:t}=null!=i?i:{};i=new tB(e,t)}if(!(null!=i&&i.fatal)){vb(i),i.data&&vb(`${i.name} data:`,i.data);return}let a=vq(i,!1);a.message&&vf(a),vg(i),i.data&&vg(`${i.name} data:`,i.data),u1(this,v6,Et).call(this,{isDialogOpen:!0})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tB))return e;let r=vq(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},En=function(){var e,t,i,a;let r=()=>u1(this,v6,Ei).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},Es=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tF.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tF.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nM.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,uX(this,v5))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nM.USER_INACTIVE))||t;uX(this,v5)!==a&&(u0(this,v5,a),n(i,uX(this,v5)))})};var Ev=e=>{throw TypeError(e)},EE=(e,t,i)=>t.has(e)||Ev("Cannot "+i),Eb=(e,t,i)=>(EE(e,t,"read from private field"),i?i.call(e):t.get(e)),Eg=(e,t,i)=>t.has(e)?Ev("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ef=(e,t,i,a)=>(EE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),E_=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends E_{}globalThis.DocumentFragment=e}var Ey,ET=class extends E_{},EA=class{constructor(e,t={}){Eg(this,Ey),Ef(this,Ey,null==t?void 0:t.detail)}get detail(){return Eb(this,Ey)}initCustomEvent(){}};Ey=new WeakMap;var Ek={document:{createElement:function(e,t){return new ET}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ET)},CustomEvent:EA,EventTarget:E_,HTMLElement:ET,HTMLVideoElement:class extends E_{}},Ew="undefined"==typeof window||void 0===globalThis.customElements,ES=Ew?Ek:globalThis;Ew?Ek.document:globalThis.document,ES.customElements.get("mux-player")||(ES.customElements.define("mux-player",Em),ES.MuxPlayerElement=Em);var ER=parseInt(s.version)>=19,EI={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},EC=e=>null==e,ED=(e,t)=>!EC(t)&&e in t,EL=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),EM=(e,t)=>{if(!(!ER&&"boolean"==typeof t&&!t)){if(ED(e,EI))return EI[e];if(void 0!==t)return/[A-Z]/.test(e)?EL(e):e}},EO=(e,t)=>ER||"boolean"!=typeof e?e:"",Ex=(e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=EM(t,i);if(!a)return e;let r=EO(i,t);return e[a]=r,e},{})};function EN(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var EP=Object.prototype.hasOwnProperty,EU=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!EP.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},EB=(e,t,i)=>!EU(t,e[i]),EH=(e,t,i)=>{e[i]=t},EW=(e,t,i,a=EH,r=EB)=>(0,s.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),EV=(()=>{try{return"3.10.2"}catch{}return"UNKNOWN"})(),EF=(e,t,i)=>(0,s.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),E$=s.forwardRef(({children:e,...t},i)=>s.createElement("mux-player",{suppressHydrationWarning:!0,...Ex(t),ref:i},e)),EK=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:E,onPlaying:b,onTimeUpdate:g,onPause:f,onSeeking:_,onSeeked:y,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:S,onChapterChange:R,metadata:I,tokens:C,paused:D,playbackId:L,playbackRates:M,currentTime:O,themeProps:x,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...B}=t;return EW("tokens",C,e),EW("playbackId",L,e),EW("playbackRates",M,e),EW("metadata",I,e),EW("extraSourceParams",N,e),EW("_hlsConfig",U,e),EW("themeProps",x,e),EW("castCustomData",P,e),EW("paused",D,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&EB(e,t,i)),EW("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),EF("abort",e,i),EF("canplay",e,a),EF("canplaythrough",e,r),EF("emptied",e,n),EF("loadstart",e,s),EF("loadeddata",e,o),EF("loadedmetadata",e,l),EF("progress",e,d),EF("durationchange",e,u),EF("volumechange",e,c),EF("ratechange",e,h),EF("resize",e,m),EF("waiting",e,p),EF("play",e,E),EF("playing",e,b),EF("timeupdate",e,g),EF("pause",e,f),EF("seeking",e,_),EF("seeked",e,y),EF("stalled",e,T),EF("suspend",e,A),EF("ended",e,k),EF("error",e,w),EF("cuepointchange",e,S),EF("chapterchange",e,R),[B]},Eq=EV,EY="mux-player-react",EG=s.forwardRef((e,t)=>{var i;let a=(0,s.useRef)(null),r=function(...e){return s.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=EN(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():EN(e[t],null)}}}}(...e),e)}(a,t),[n]=EK(a,e),[o]=(0,s.useState)(null!=(i=e.playerInitTime)?i:i4());return s.createElement(E$,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:EY,playerSoftwareVersion:Eq,playerInitTime:o,...n})})},61121:(e,t,i)=>{i.d(t,{lB:()=>d});let a=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],r=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function n(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${l(e)}></audio>
    </slot>
    <slot></slot>
  `}function s(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${l(e)}></video>
    </slot>
    <slot></slot>
  `}function o(e,{tag:t,is:i}){let o=globalThis.document?.createElement?.(t,{is:i}),l=o?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(o):[];return class d extends e{static getTemplateHTML=t.endsWith("audio")?n:s;static shadowRootOptions={mode:"open"};static Events=a;static #y=!1;static get observedAttributes(){return d.#T(),[...o?.constructor?.observedAttributes??[],...r]}static #T(){if(this.#y)return;this.#y=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),l))if(!(t in this.prototype)){if("function"==typeof o[t])this.prototype[t]=function(...e){return this.#l(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#l();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#l();let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}}#t=!1;#A=null;#k=new Map;#w;get;set;call;get nativeEl(){return this.#l(),this.#A??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#A=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#l(){this.#t||(this.#t=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),l))this.#S(e);for(let e of(this.#w=new MutationObserver(this.#R.bind(this)),this.shadowRoot.addEventListener("slotchange",()=>this.#I()),this.#I(),this.constructor.Events))this.shadowRoot.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#I(){let e=new Map(this.#k),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#k.get(t);i||(i=t.cloneNode(),this.#k.set(t,i),this.#w?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#C(i)}),e.forEach((e,t)=>{e.remove(),this.#k.delete(t)})}#R(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#k.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#C(a))}}#C(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#S(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#l(),this.#D(e,t,i)}#D(e,t,i){["id","class"].includes(e)||!d.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#l()}}}function l(e){let t="";for(let i in e){if(!r.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let d=o(globalThis.HTMLElement??class{},{tag:"video"});o(globalThis.HTMLElement??class{},{tag:"audio"})},36115:(e,t,i)=>{i.d(t,{u6:()=>k});class a extends Event{track;constructor(e,t){super(e),this.track=t.track}}let r=new WeakMap;function n(e){var t;let i;return r.get(e)??(t={},(i=r.get(e))||r.set(e,i={}),Object.assign(i,t))}function s(e,t){let i=e.videoTracks;n(t).media=e,n(t).renditionSet||(n(t).renditionSet=new Set);let r=n(i).trackSet;r.add(t);let s=r.size-1;s in l.prototype||Object.defineProperty(l.prototype,s,{get(){return[...n(this).trackSet][s]}}),queueMicrotask(()=>{i.dispatchEvent(new a("addtrack",{track:t}))})}function o(e){let t=n(e).media?.videoTracks;t&&(n(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new a("removetrack",{track:e}))}))}class l extends EventTarget{#L;#M;#O;constructor(){super(),n(this).trackSet=new Set}get #x(){return n(this).trackSet}[Symbol.iterator](){return this.#x.values()}get length(){return this.#x.size}getTrackById(e){return[...this.#x].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#x].findIndex(e=>e.selected)}get onaddtrack(){return this.#L}set onaddtrack(e){this.#L&&(this.removeEventListener("addtrack",this.#L),this.#L=void 0),"function"==typeof e&&(this.#L=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#M}set onremovetrack(e){this.#M&&(this.removeEventListener("removetrack",this.#M),this.#M=void 0),"function"==typeof e&&(this.#M=e,this.addEventListener("removetrack",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class d extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function u(e){return[...n(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...n(e).renditionSet])}class c extends EventTarget{#N;#P;#O;[Symbol.iterator](){return u(this).values()}get length(){return u(this).length}getRenditionById(e){return u(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return u(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of u(this).entries())i.selected=t===e}get onaddrendition(){return this.#N}set onaddrendition(e){this.#N&&(this.removeEventListener("addrendition",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#P}set onremoverendition(e){this.#P&&(this.removeEventListener("removerendition",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removerendition",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class h{src;id;width;height;bitrate;frameRate;codec;#U=!1;get selected(){return this.#U}set selected(e){this.#U!==e&&(this.#U=e,function(e){let t=n(e).media.videoRenditions;t&&!n(t).changeRequested&&(n(t).changeRequested=!0,queueMicrotask(()=>{delete n(t).changeRequested,n(e).track.selected&&t.dispatchEvent(new Event("change"))}))}(this))}}class m{id;kind;label="";language="";sourceBuffer;#U=!1;addRendition(e,t,i,a,r,s){let o=new h;return o.src=e,o.width=t,o.height=i,o.frameRate=s,o.bitrate=r,o.codec=a,!function(e,t){let i=n(e).media.videoRenditions;n(t).media=n(e).media,n(t).track=e;let a=n(e).renditionSet;a.add(t);let r=a.size-1;r in c.prototype||Object.defineProperty(c.prototype,r,{get(){return u(this)[r]}}),queueMicrotask(()=>{e.selected&&i.dispatchEvent(new d("addrendition",{rendition:t}))})}(this,o),o}removeRendition(e){!function(e){let t=n(e).media.videoRenditions,i=n(e).track;n(i).renditionSet.delete(e),queueMicrotask(()=>{n(e).track.selected&&t.dispatchEvent(new d("removerendition",{rendition:e}))})}(e)}get selected(){return this.#U}set selected(e){this.#U!==e&&(this.#U=e,!0===e&&function(e){let t=n(e).media.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(n(t).changeRequested)return;n(t).changeRequested=!0,queueMicrotask(()=>{delete n(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function p(e){return[...n(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...n(e).renditionSet])}class E extends EventTarget{#N;#P;#O;[Symbol.iterator](){return p(this).values()}get length(){return p(this).length}getRenditionById(e){return p(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return p(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of p(this).entries())i.selected=t===e}get onaddrendition(){return this.#N}set onaddrendition(e){this.#N&&(this.removeEventListener("addrendition",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#P}set onremoverendition(e){this.#P&&(this.removeEventListener("removerendition",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removerendition",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class b{src;id;bitrate;codec;#U=!1;get selected(){return this.#U}set selected(e){this.#U!==e&&(this.#U=e,function(e){let t=n(e).media.audioRenditions;t&&!n(t).changeRequested&&(n(t).changeRequested=!0,queueMicrotask(()=>{delete n(t).changeRequested,n(e).track.enabled&&t.dispatchEvent(new Event("change"))}))}(this))}}function g(e,t){let i=e.audioTracks;n(t).media=e,n(t).renditionSet||(n(t).renditionSet=new Set);let r=n(i).trackSet;r.add(t);let s=r.size-1;s in _.prototype||Object.defineProperty(_.prototype,s,{get(){return[...n(this).trackSet][s]}}),queueMicrotask(()=>{i.dispatchEvent(new a("addtrack",{track:t}))})}function f(e){let t=n(e).media?.audioTracks;t&&(n(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new a("removetrack",{track:e}))}))}class _ extends EventTarget{#L;#M;#O;constructor(){super(),n(this).trackSet=new Set}get #x(){return n(this).trackSet}[Symbol.iterator](){return this.#x.values()}get length(){return this.#x.size}getTrackById(e){return[...this.#x].find(t=>t.id===e)??null}get onaddtrack(){return this.#L}set onaddtrack(e){this.#L&&(this.removeEventListener("addtrack",this.#L),this.#L=void 0),"function"==typeof e&&(this.#L=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#M}set onremovetrack(e){this.#M&&(this.removeEventListener("removetrack",this.#M),this.#M=void 0),"function"==typeof e&&(this.#M=e,this.addEventListener("removetrack",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class y{id;kind;label="";language="";sourceBuffer;#B=!1;addRendition(e,t,i){let a=new b;return a.src=e,a.codec=t,a.bitrate=i,!function(e,t){let i=n(e).media.audioRenditions;n(t).media=n(e).media,n(t).track=e;let a=n(e).renditionSet;a.add(t);let r=a.size-1;r in E.prototype||Object.defineProperty(E.prototype,r,{get(){return p(this)[r]}}),queueMicrotask(()=>{e.enabled&&i.dispatchEvent(new d("addrendition",{rendition:t}))})}(this,a),a}removeRendition(e){!function(e){let t=n(e).media.audioRenditions,i=n(e).track;n(i).renditionSet.delete(e),queueMicrotask(()=>{n(e).track.enabled&&t.dispatchEvent(new d("removerendition",{rendition:e}))})}(e)}get enabled(){return this.#B}set enabled(e){this.#B!==e&&(this.#B=e,function(e){let t=n(e).media.audioTracks;t&&!n(t).changeRequested&&(n(t).changeRequested=!0,queueMicrotask(()=>{delete n(t).changeRequested,t.dispatchEvent(new Event("change"))}))}(this))}}let T=w(globalThis.HTMLMediaElement,"video"),A=w(globalThis.HTMLMediaElement,"audio");function k(e){if(!e?.prototype)return e;let t=w(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){let t=n(e).videoTracks;if(!t&&(t=new l,n(e).videoTracks=t,T)){let i=T.call(e.nativeEl??e);for(let t of i)s(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof m)){for(let e of i)o(e);return}s(e,a.track)}),i.addEventListener("removetrack",e=>{o(e.track)})}return t}(this)}});let i=w(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){let t=n(e).audioTracks;if(!t&&(t=new _,n(e).audioTracks=t,A)){let i=A.call(e.nativeEl??e);for(let t of i)g(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof y)){for(let e of i)f(e);return}g(e,a.track)}),i.addEventListener("removetrack",e=>{f(e.track)})}return t}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new m;return a.kind=e,a.label=t,a.language=i,s(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=o),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new y;return a.kind=e,a.label=t,a.language=i,g(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=f),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=n(e).videoRenditions;return t||(n(t=new c).media=e,n(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=n(e).audioRenditions;return t||(n(t=new E).media=e,n(e).audioRenditions=t),t};return e}function w(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}}}]);