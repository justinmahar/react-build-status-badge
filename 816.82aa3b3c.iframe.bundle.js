/*! For license information please see 816.82aa3b3c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_build_status_badge=self.webpackChunkreact_build_status_badge||[]).push([[816],{"./node_modules/react-sub-unsub/dist/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Subs=exports.Subscribe=void 0;class Subscribe{static subscribe(subscribe){try{return subscribe()}catch(e){console.error(e)}return()=>{}}static subscribeEvent(eventEmitter,eventName,listener){return eventEmitter.addListener(eventName,listener),()=>{eventEmitter.removeListener(eventName,listener)}}static subscribeDOMEvent(domObj,eventName,listener,options){return domObj.addEventListener(eventName,listener,options),()=>{domObj.removeEventListener(eventName,listener,options)}}static setTimeout(handler,delay,...args){const timeout=setTimeout(handler,delay,args);return()=>clearTimeout(timeout)}static setInterval(handler,delay,...args){const interval=setInterval(handler,delay,args);return()=>clearInterval(interval)}static unsubAll(unsubs){if(Array.isArray(unsubs))unsubs.forEach((unsub=>{try{unsub()}catch(e){console.error(e)}}));else try{unsubs()}catch(e){console.error(e)}}static createCleanup(unsubs){return()=>Subscribe.unsubAll(unsubs)}}exports.Subscribe=Subscribe;exports.Subs=class Subs{constructor(list=[]){this.list=list}subscribe(subscribe){const unsub=Subscribe.subscribe(subscribe);return this.push(unsub),unsub}subscribeEvent(eventEmitter,eventName,listener){const unsub=Subscribe.subscribeEvent(eventEmitter,eventName,listener);return this.push(unsub),unsub}subscribeDOMEvent(domObj,eventName,listener){const unsub=Subscribe.subscribeDOMEvent(domObj,eventName,listener);return this.push(unsub),unsub}setTimeout(handler,delay,...args){const timeout=setTimeout(handler,delay,args),unsub=()=>clearTimeout(timeout);return this.push(unsub),unsub}setInterval(handler,delay,...args){const interval=setInterval(handler,delay,args),unsub=()=>clearInterval(interval);return this.push(unsub),unsub}push(unsub){this.list.push(unsub)}unsubAll(){Subscribe.unsubAll(this.list),this.list.splice(0,this.list.length)}createCleanup(){return()=>{this.unsubAll()}}}},"./node_modules/react-timed-image/dist/components/TimedImage.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TimedImage=void 0;const React=__importStar(__webpack_require__("./node_modules/react/index.js")),react_timed_renderer_1=__webpack_require__("./node_modules/react-timed-renderer/dist/index.js"),react_uncached_image_1=__webpack_require__("./node_modules/react-uncached-image/dist/index.js");exports.TimedImage=function TimedImage(props){const interval=props.interval?props.interval:5e3,uncached=void 0===props.uncached||!!props.uncached,imgProps=Object.assign({},props);return delete imgProps.interval,delete imgProps.uncached,React.createElement(react_timed_renderer_1.TimedRenderer,{interval,render:time=>uncached?React.createElement(react_uncached_image_1.UncachedImage,Object.assign({},imgProps)):React.createElement("img",Object.assign({},imgProps,{alt:imgProps.alt}))})}},"./node_modules/react-timed-image/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("./node_modules/react-timed-image/dist/components/TimedImage.js"),exports)},"./node_modules/react-timed-renderer/dist/components/TimedRenderer.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TimedRenderer=void 0;const React=__importStar(__webpack_require__("./node_modules/react/index.js")),react_sub_unsub_1=__webpack_require__("./node_modules/react-sub-unsub/dist/index.js"),emptyRender=time=>React.createElement(React.Fragment,null);exports.TimedRenderer=function TimedRenderer({interval=5e3,render=emptyRender}){const[time,setTime]=React.useState((new Date).getTime());return React.useEffect((()=>{const subs=new react_sub_unsub_1.Subs;return subs.setInterval((()=>setTime((new Date).getTime())),Math.max(0,interval)),subs.createCleanup()}),[interval]),render(time)}},"./node_modules/react-timed-renderer/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("./node_modules/react-timed-renderer/dist/components/TimedRenderer.js"),exports)},"./node_modules/react-uncached-image/dist/components/UncachedImage.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.UncachedImage=void 0;const React=__importStar(__webpack_require__("./node_modules/react/index.js"));exports.UncachedImage=function UncachedImage(_a){var{cacheBuster}=_a,imgProps=__rest(_a,["cacheBuster"]);let src=imgProps.src;if("string"==typeof src){cacheBuster=null!=cacheBuster?cacheBuster:randChars(10);const paramSymbol=src.indexOf("?")>=0?"&":"?";src=`${src}${paramSymbol}${encodeURIComponent(cacheBuster)}`}return React.createElement("img",Object.assign({},imgProps,{src,alt:imgProps.alt}))};const randChars=length=>{let result="";const characters="abcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<length;i++)result+=characters.charAt(Math.floor(36*Math.random()));return result}},"./node_modules/react-uncached-image/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("./node_modules/react-uncached-image/dist/components/UncachedImage.js"),exports)},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);