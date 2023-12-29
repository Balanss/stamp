function DT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m_={exports:{}},au={},g_={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),OT=Symbol.for("react.portal"),VT=Symbol.for("react.fragment"),LT=Symbol.for("react.strict_mode"),MT=Symbol.for("react.profiler"),FT=Symbol.for("react.provider"),bT=Symbol.for("react.context"),$T=Symbol.for("react.forward_ref"),UT=Symbol.for("react.suspense"),jT=Symbol.for("react.memo"),BT=Symbol.for("react.lazy"),dm=Symbol.iterator;function zT(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,v_={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||y_}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E_(){}E_.prototype=Ji.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||y_}var Gd=Kd.prototype=new E_;Gd.constructor=Kd;__(Gd,Ji.prototype);Gd.isPureReactComponent=!0;var fm=Array.isArray,w_=Object.prototype.hasOwnProperty,Qd={current:null},T_={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)w_.call(e,r)&&!T_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:Qd.current}}function WT(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function qT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qT(""+t.key):e.toString(36)}function ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case OT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mc(o,0):r,fm(i)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),ja(i,e,n,"",function(u){return u})):i!=null&&(Yd(i)&&(i=WT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+mc(s,a);o+=ja(s,e,n,l,i)}else if(l=zT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+mc(s,a++),o+=ja(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],i=0;return ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ba={transition:null},KT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Qd};q.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!Yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ji;q.Fragment=VT;q.Profiler=MT;q.PureComponent=Kd;q.StrictMode=LT;q.Suspense=UT;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KT;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=__({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)w_.call(e,l)&&!T_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:bT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FT,_context:t},t.Consumer=t};q.createElement=I_;q.createFactory=function(t){var e=I_.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:$T,render:t}};q.isValidElement=Yd;q.lazy=function(t){return{$$typeof:BT,_payload:{_status:-1,_result:t},_init:HT}};q.memo=function(t,e){return{$$typeof:jT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return at.current.useCallback(t,e)};q.useContext=function(t){return at.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return at.current.useDeferredValue(t)};q.useEffect=function(t,e){return at.current.useEffect(t,e)};q.useId=function(){return at.current.useId()};q.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return at.current.useMemo(t,e)};q.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};q.useRef=function(t){return at.current.useRef(t)};q.useState=function(t){return at.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return at.current.useTransition()};q.version="18.2.0";g_.exports=q;var T=g_.exports;const ee=xT(T),GT=DT({__proto__:null,default:ee},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=T,YT=Symbol.for("react.element"),XT=Symbol.for("react.fragment"),JT=Object.prototype.hasOwnProperty,ZT=QT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eI={key:!0,ref:!0,__self:!0,__source:!0};function S_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JT.call(e,r)&&!eI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YT,type:t,key:s,ref:o,props:i,_owner:ZT.current}}au.Fragment=XT;au.jsx=S_;au.jsxs=S_;m_.exports=au;var O=m_.exports,mh={},A_={exports:{}},At={},C_={exports:{}},R_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,$){var z=N.length;N.push($);e:for(;0<z;){var me=z-1>>>1,Re=N[me];if(0<i(Re,$))N[me]=$,N[z]=Re,z=me;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var $=N[0],z=N.pop();if(z!==$){N[0]=z;e:for(var me=0,Re=N.length,ha=Re>>>1;me<ha;){var gr=2*(me+1)-1,pc=N[gr],yr=gr+1,da=N[yr];if(0>i(pc,z))yr<Re&&0>i(da,pc)?(N[me]=da,N[yr]=z,me=yr):(N[me]=pc,N[gr]=z,me=gr);else if(yr<Re&&0>i(da,z))N[me]=da,N[yr]=z,me=yr;else break e}}return $}function i(N,$){var z=N.sortIndex-$.sortIndex;return z!==0?z:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=N)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function E(N){if(_=!1,g(N),!y)if(n(l)!==null)y=!0,Ve(I);else{var $=n(u);$!==null&&gt(E,$.startTime-N)}}function I(N,$){y=!1,_&&(_=!1,m(k),k=-1),f=!0;var z=d;try{for(g($),h=n(l);h!==null&&(!(h.expirationTime>$)||N&&!Te());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Re=me(h.expirationTime<=$);$=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&r(l),g($)}else r(l);h=n(l)}if(h!==null)var ha=!0;else{var gr=n(u);gr!==null&&gt(E,gr.startTime-$),ha=!1}return ha}finally{h=null,d=z,f=!1}}var C=!1,P=null,k=-1,H=5,b=-1;function Te(){return!(t.unstable_now()-b<H)}function Ce(){if(P!==null){var N=t.unstable_now();b=N;var $=!0;try{$=P(!0,N)}finally{$?tt():(C=!1,P=null)}}else C=!1}var tt;if(typeof p=="function")tt=function(){p(Ce)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,un=ze.port2;ze.port1.onmessage=Ce,tt=function(){un.postMessage(null)}}else tt=function(){v(Ce,0)};function Ve(N){P=N,C||(C=!0,tt())}function gt(N,$){k=v(function(){N(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,Ve(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var z=d;d=$;try{return N()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=d;d=N;try{return $()}finally{d=z}},t.unstable_scheduleCallback=function(N,$,z){var me=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?me+z:me):z=me,N){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=z+Re,N={id:c++,callback:$,priorityLevel:N,startTime:z,expirationTime:Re,sortIndex:-1},z>me?(N.sortIndex=z,e(u,N),n(l)===null&&N===n(u)&&(_?(m(k),k=-1):_=!0,gt(E,z-me))):(N.sortIndex=Re,e(l,N),y||f||(y=!0,Ve(I))),N},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(N){var $=d;return function(){var z=d;d=$;try{return N.apply(this,arguments)}finally{d=z}}}})(R_);C_.exports=R_;var tI=C_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=T,It=tI;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k_=new Set,Zs={};function Yr(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(Zs[t]=e,t=0;t<e.length;t++)k_.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gh=Object.prototype.hasOwnProperty,nI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function rI(t){return gh.call(gm,t)?!0:gh.call(mm,t)?!1:nI.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function iI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sI(t,e,n,r){if(e===null||typeof e>"u"||iI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Jd);Be[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Jd);Be[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Jd);Be[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zd(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sI(e,n,i,r)&&(n=null),r||i===null?rI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),hi=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),x_=Symbol.for("react.offscreen"),ym=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,gc;function Ts(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var yc=!1;function _c(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function oI(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case hi:return"Portal";case yh:return"Profiler";case ef:return"StrictMode";case _h:return"Suspense";case vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D_:return(t.displayName||"Context")+".Consumer";case N_:return(t._context.displayName||"Context")+".Provider";case tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nf:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function aI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lI(t){var e=O_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=lI(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=O_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&Zd(t,"checked",e,!1)}function Th(t,e){L_(t,e);var n=nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ih(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ih(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function Ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Is(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function M_(t,e){var n=nr(e.value),r=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,b_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uI=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){uI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function $_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function U_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cI=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(cI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kh=null,Ci=null,Ri=null;function Tm(t){if(t=Uo(t)){if(typeof kh!="function")throw Error(A(280));var e=t.stateNode;e&&(e=du(e),kh(t.stateNode,t.type,e))}}function j_(t){Ci?Ri?Ri.push(t):Ri=[t]:Ci=t}function B_(){if(Ci){var t=Ci,e=Ri;if(Ri=Ci=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function z_(t,e){return t(e)}function W_(){}var vc=!1;function q_(t,e,n){if(vc)return t(e,n);vc=!0;try{return z_(t,e,n)}finally{vc=!1,(Ci!==null||Ri!==null)&&(W_(),B_())}}function to(t,e){var n=t.stateNode;if(n===null)return null;var r=du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Nh=!1;if(En)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Nh=!1}function hI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ls=!1,ul=null,cl=!1,Dh=null,dI={onError:function(t){Ls=!0,ul=t}};function fI(t,e,n,r,i,s,o,a,l){Ls=!1,ul=null,hI.apply(dI,arguments)}function pI(t,e,n,r,i,s,o,a,l){if(fI.apply(this,arguments),Ls){if(Ls){var u=ul;Ls=!1,ul=null}else throw Error(A(198));cl||(cl=!0,Dh=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(Xr(t)!==t)throw Error(A(188))}function mI(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Im(i),t;if(s===r)return Im(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function K_(t){return t=mI(t),t!==null?G_(t):null}function G_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G_(t);if(e!==null)return e;t=t.sibling}return null}var Q_=It.unstable_scheduleCallback,Sm=It.unstable_cancelCallback,gI=It.unstable_shouldYield,yI=It.unstable_requestPaint,ge=It.unstable_now,_I=It.unstable_getCurrentPriorityLevel,sf=It.unstable_ImmediatePriority,Y_=It.unstable_UserBlockingPriority,hl=It.unstable_NormalPriority,vI=It.unstable_LowPriority,X_=It.unstable_IdlePriority,lu=null,en=null;function EI(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:II,wI=Math.log,TI=Math.LN2;function II(t){return t>>>=0,t===0?32:31-(wI(t)/TI|0)|0}var ya=64,_a=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ss(a):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function SI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J_(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function CI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ev,af,tv,nv,rv,Oh=!1,va=[],zn=null,Wn=null,qn=null,no=new Map,ro=new Map,On=[],RI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Am(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Uo(e),e!==null&&af(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PI(t,e,n,r,i){switch(e){case"focusin":return zn=ds(zn,t,e,n,r,i),!0;case"dragenter":return Wn=ds(Wn,t,e,n,r,i),!0;case"mouseover":return qn=ds(qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return no.set(s,ds(no.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ro.set(s,ds(ro.get(s)||null,t,e,n,r,i)),!0}return!1}function iv(t){var e=Tr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=H_(n),e!==null){t.blockedOn=e,rv(t.priority,function(){tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ph=r,n.target.dispatchEvent(r),Ph=null}else return e=Uo(n),e!==null&&af(e),t.blockedOn=n,!1;e.shift()}return!0}function Cm(t,e,n){za(t)&&n.delete(e)}function kI(){Oh=!1,zn!==null&&za(zn)&&(zn=null),Wn!==null&&za(Wn)&&(Wn=null),qn!==null&&za(qn)&&(qn=null),no.forEach(Cm),ro.forEach(Cm)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,kI)))}function io(t){function e(i){return fs(i,t)}if(0<va.length){fs(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&fs(zn,t),Wn!==null&&fs(Wn,t),qn!==null&&fs(qn,t),no.forEach(e),ro.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)iv(n),n.blockedOn===null&&On.shift()}var Pi=Pn.ReactCurrentBatchConfig,fl=!0;function NI(t,e,n,r){var i=J,s=Pi.transition;Pi.transition=null;try{J=1,lf(t,e,n,r)}finally{J=i,Pi.transition=s}}function DI(t,e,n,r){var i=J,s=Pi.transition;Pi.transition=null;try{J=4,lf(t,e,n,r)}finally{J=i,Pi.transition=s}}function lf(t,e,n,r){if(fl){var i=Vh(t,e,n,r);if(i===null)Nc(t,e,r,pl,n),Am(t,r);else if(PI(i,t,e,n,r))r.stopPropagation();else if(Am(t,r),e&4&&-1<RI.indexOf(t)){for(;i!==null;){var s=Uo(i);if(s!==null&&ev(s),s=Vh(t,e,n,r),s===null&&Nc(t,e,r,pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nc(t,e,r,null,n)}}var pl=null;function Vh(t,e,n,r){if(pl=null,t=rf(r),t=Tr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_I()){case sf:return 1;case Y_:return 4;case hl:case vI:return 16;case X_:return 536870912;default:return 16}default:return 16}}var bn=null,uf=null,Wa=null;function ov(){if(Wa)return Wa;var t,e=uf,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wa=i.slice(t,1<r?1-r:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Rm(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Rm,this.isPropagationStopped=Rm,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=Ct(Zi),$o=ce({},Zi,{view:0,detail:0}),xI=Ct($o),wc,Tc,ps,uu=ce({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(wc=t.screenX-ps.screenX,Tc=t.screenY-ps.screenY):Tc=wc=0,ps=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Pm=Ct(uu),OI=ce({},uu,{dataTransfer:0}),VI=Ct(OI),LI=ce({},$o,{relatedTarget:0}),Ic=Ct(LI),MI=ce({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),FI=Ct(MI),bI=ce({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$I=Ct(bI),UI=ce({},Zi,{data:0}),km=Ct(UI),jI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zI[t])?!!e[t]:!1}function hf(){return WI}var qI=ce({},$o,{key:function(t){if(t.key){var e=jI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HI=Ct(qI),KI=ce({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Ct(KI),GI=ce({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),QI=Ct(GI),YI=ce({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),XI=Ct(YI),JI=ce({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZI=Ct(JI),eS=[9,13,27,32],df=En&&"CompositionEvent"in window,Ms=null;En&&"documentMode"in document&&(Ms=document.documentMode);var tS=En&&"TextEvent"in window&&!Ms,av=En&&(!df||Ms&&8<Ms&&11>=Ms),Dm=" ",xm=!1;function lv(t,e){switch(t){case"keyup":return eS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function nS(t,e){switch(t){case"compositionend":return uv(e);case"keypress":return e.which!==32?null:(xm=!0,Dm);case"textInput":return t=e.data,t===Dm&&xm?null:t;default:return null}}function rS(t,e){if(fi)return t==="compositionend"||!df&&lv(t,e)?(t=ov(),Wa=uf=bn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return av&&e.locale!=="ko"?null:e.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iS[t.type]:e==="textarea"}function cv(t,e,n,r){j_(r),e=ml(e,"onChange"),0<e.length&&(n=new cf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,so=null;function sS(t){wv(t,0)}function cu(t){var e=gi(t);if(V_(e))return t}function oS(t,e){if(t==="change")return e}var hv=!1;if(En){var Sc;if(En){var Ac="oninput"in document;if(!Ac){var Vm=document.createElement("div");Vm.setAttribute("oninput","return;"),Ac=typeof Vm.oninput=="function"}Sc=Ac}else Sc=!1;hv=Sc&&(!document.documentMode||9<document.documentMode)}function Lm(){Fs&&(Fs.detachEvent("onpropertychange",dv),so=Fs=null)}function dv(t){if(t.propertyName==="value"&&cu(so)){var e=[];cv(e,so,t,rf(t)),q_(sS,e)}}function aS(t,e,n){t==="focusin"?(Lm(),Fs=e,so=n,Fs.attachEvent("onpropertychange",dv)):t==="focusout"&&Lm()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(so)}function uS(t,e){if(t==="click")return cu(e)}function cS(t,e){if(t==="input"||t==="change")return cu(e)}function hS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:hS;function oo(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gh.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pv(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dS(t){var e=pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(r!==null&&ff(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fm(n,s);var o=Fm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fS=En&&"documentMode"in document&&11>=document.documentMode,pi=null,Lh=null,bs=null,Mh=!1;function bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||pi==null||pi!==ll(r)||(r=pi,"selectionStart"in r&&ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&oo(bs,r)||(bs=r,r=ml(Lh,"onSelect"),0<r.length&&(e=new cf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Cc={},mv={};En&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function hu(t){if(Cc[t])return Cc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mv)return Cc[t]=e[n];return t}var gv=hu("animationend"),yv=hu("animationiteration"),_v=hu("animationstart"),vv=hu("transitionend"),Ev=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Ev.set(t,e),Yr(e,[t])}for(var Rc=0;Rc<$m.length;Rc++){var Pc=$m[Rc],pS=Pc.toLowerCase(),mS=Pc[0].toUpperCase()+Pc.slice(1);ar(pS,"on"+mS)}ar(gv,"onAnimationEnd");ar(yv,"onAnimationIteration");ar(_v,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(vv,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function Um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pI(r,e,void 0,t),t.currentTarget=null}function wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Um(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Um(i,a,u),s=l}}}if(cl)throw t=Dh,cl=!1,Dh=null,t}function ne(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var r=t+"__bubble";n.has(r)||(Tv(e,t,2,!1),n.add(r))}function kc(t,e,n){var r=0;e&&(r|=4),Tv(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[Ta]){t[Ta]=!0,k_.forEach(function(n){n!=="selectionchange"&&(gS.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,kc("selectionchange",!1,e))}}function Tv(t,e,n,r){switch(sv(e)){case 1:var i=NI;break;case 4:i=DI;break;default:i=lf}n=i.bind(null,e,n,t),i=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}q_(function(){var u=s,c=rf(n),h=[];e:{var d=Ev.get(t);if(d!==void 0){var f=cf,y=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":f=HI;break;case"focusin":y="focus",f=Ic;break;case"focusout":y="blur",f=Ic;break;case"beforeblur":case"afterblur":f=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=VI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=QI;break;case gv:case yv:case _v:f=FI;break;case vv:f=XI;break;case"scroll":f=xI;break;case"wheel":f=ZI;break;case"copy":case"cut":case"paste":f=$I;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Nm}var _=(e&4)!==0,v=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=to(p,m),E!=null&&_.push(lo(p,E,g)))),v)break;p=p.return}0<_.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Ph&&(y=n.relatedTarget||n.fromElement)&&(Tr(y)||y[wn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?Tr(y):null,y!==null&&(v=Xr(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=Pm,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Nm,E="onPointerLeave",m="onPointerEnter",p="pointer"),v=f==null?d:gi(f),g=y==null?d:gi(y),d=new _(E,p+"leave",f,n,c),d.target=v,d.relatedTarget=g,E=null,Tr(c)===u&&(_=new _(m,p+"enter",y,n,c),_.target=g,_.relatedTarget=v,E=_),v=E,f&&y)t:{for(_=f,m=y,p=0,g=_;g;g=oi(g))p++;for(g=0,E=m;E;E=oi(E))g++;for(;0<p-g;)_=oi(_),p--;for(;0<g-p;)m=oi(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=oi(_),m=oi(m)}_=null}else _=null;f!==null&&jm(h,d,f,_,!1),y!==null&&v!==null&&jm(h,v,y,_,!0)}}e:{if(d=u?gi(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var I=oS;else if(Om(d))if(hv)I=cS;else{I=lS;var C=aS}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=uS);if(I&&(I=I(t,u))){cv(h,I,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ih(d,"number",d.value)}switch(C=u?gi(u):window,t){case"focusin":(Om(C)||C.contentEditable==="true")&&(pi=C,Lh=u,bs=null);break;case"focusout":bs=Lh=pi=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,bm(h,n,c);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":bm(h,n,c)}var P;if(df)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else fi?lv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(av&&n.locale!=="ko"&&(fi||k!=="onCompositionStart"?k==="onCompositionEnd"&&fi&&(P=ov()):(bn=c,uf="value"in bn?bn.value:bn.textContent,fi=!0)),C=ml(u,k),0<C.length&&(k=new km(k,t,null,n,c),h.push({event:k,listeners:C}),P?k.data=P:(P=uv(n),P!==null&&(k.data=P)))),(P=tS?nS(t,n):rS(t,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(c=new km("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}wv(h,e)})}function lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=to(t,n),s!=null&&r.unshift(lo(t,s,i)),s=to(t,e),s!=null&&r.push(lo(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=to(n,s),l!=null&&o.unshift(lo(n,l,a))):i||(l=to(n,s),l!=null&&o.push(lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function Bm(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(_S,"")}function Ia(t,e,n){if(e=Bm(e),Bm(t)!==e&&n)throw Error(A(425))}function gl(){}var Fh=null,bh=null;function $h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(t){return zm.resolve(null).then(t).catch(wS)}:Uh;function wS(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);io(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),Yt="__reactFiber$"+es,uo="__reactProps$"+es,wn="__reactContainer$"+es,jh="__reactEvents$"+es,TS="__reactListeners$"+es,IS="__reactHandles$"+es;function Tr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wm(t);t!==null;){if(n=t[Yt])return n;t=Wm(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Yt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function du(t){return t[uo]||null}var Bh=[],yi=-1;function lr(t){return{current:t}}function oe(t){0>yi||(t.current=Bh[yi],Bh[yi]=null,yi--)}function te(t,e){yi++,Bh[yi]=t.current,t.current=e}var rr={},Je=lr(rr),dt=lr(!1),Vr=rr;function Fi(t,e){var n=t.type.contextTypes;if(!n)return rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function yl(){oe(dt),oe(Je)}function qm(t,e,n){if(Je.current!==rr)throw Error(A(168));te(Je,e),te(dt,n)}function Iv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,aI(t)||"Unknown",i));return ce({},n,r)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Vr=Je.current,te(Je,t),te(dt,dt.current),!0}function Hm(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=Iv(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,oe(dt),oe(Je),te(Je,t)):oe(dt),te(dt,n)}var hn=null,fu=!1,xc=!1;function Sv(t){hn===null?hn=[t]:hn.push(t)}function SS(t){fu=!0,Sv(t)}function ur(){if(!xc&&hn!==null){xc=!0;var t=0,e=J;try{var n=hn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,fu=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),Q_(sf,ur),i}finally{J=e,xc=!1}}return null}var _i=[],vi=0,vl=null,El=0,Pt=[],kt=0,Lr=null,fn=1,pn="";function _r(t,e){_i[vi++]=El,_i[vi++]=vl,vl=t,El=e}function Av(t,e,n){Pt[kt++]=fn,Pt[kt++]=pn,Pt[kt++]=Lr,Lr=t;var r=fn;t=pn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-jt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function pf(t){t.return!==null&&(_r(t,1),Av(t,1,0))}function mf(t){for(;t===vl;)vl=_i[--vi],_i[vi]=null,El=_i[--vi],_i[vi]=null;for(;t===Lr;)Lr=Pt[--kt],Pt[kt]=null,pn=Pt[--kt],Pt[kt]=null,fn=Pt[--kt],Pt[kt]=null}var Et=null,_t=null,ae=!1,Ut=null;function Cv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wh(t){if(ae){var e=_t;if(e){var n=e;if(!Km(t,e)){if(zh(t))throw Error(A(418));e=Hn(n.nextSibling);var r=Et;e&&Km(t,e)?Cv(r,n):(t.flags=t.flags&-4097|2,ae=!1,Et=t)}}else{if(zh(t))throw Error(A(418));t.flags=t.flags&-4097|2,ae=!1,Et=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Sa(t){if(t!==Et)return!1;if(!ae)return Gm(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$h(t.type,t.memoizedProps)),e&&(e=_t)){if(zh(t))throw Rv(),Error(A(418));for(;e;)Cv(t,e),e=Hn(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?Hn(t.stateNode.nextSibling):null;return!0}function Rv(){for(var t=_t;t;)t=Hn(t.nextSibling)}function bi(){_t=Et=null,ae=!1}function gf(t){Ut===null?Ut=[t]:Ut.push(t)}var AS=Pn.ReactCurrentBatchConfig;function bt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wl=lr(null),Tl=null,Ei=null,yf=null;function _f(){yf=Ei=Tl=null}function vf(t){var e=wl.current;oe(wl),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ki(t,e){Tl=t,yf=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(Tl===null)throw Error(A(308));Ei=t,Tl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Ir=null;function Ef(t){Ir===null?Ir=[t]:Ir.push(t)}function Pv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function Ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,of(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,f=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=ce({},h,d);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=h}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Nv=new P_.Component().refs;function Hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pu={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Qn(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&(Bt(e,t,i,r),Ha(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Qn(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&(Bt(e,t,i,r),Ha(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Qn(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kn(t,i,r),e!==null&&(Bt(e,t,r,n),Ha(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!oo(n,r)||!oo(i,s):!0}function Dv(t,e,n){var r=!1,i=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=ft(e)?Vr:Je.current,r=e.contextTypes,s=(r=r!=null)?Fi(t,i):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Nv,wf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=ft(e)?Vr:Je.current,i.context=Fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pu.enqueueReplaceState(i,i.state,null),Il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Nv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function xv(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Yn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,E){return p===null||p.tag!==6?(p=$c(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,E){var I=g.type;return I===di?c(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Dn&&Zm(I)===p.type)?(E=i(p,g.props),E.ref=ms(m,p,g),E.return=m,E):(E=Ja(g.type,g.key,g.props,null,m.mode,E),E.ref=ms(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Uc(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,E,I){return p===null||p.tag!==7?(p=Dr(g,m.mode,E,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$c(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return g=Ja(p.type,p.key,p.props,null,m.mode,g),g.ref=ms(m,null,p),g.return=m,g;case hi:return p=Uc(p,m.mode,g),p.return=m,p;case Dn:var E=p._init;return h(m,E(p._payload),g)}if(Is(p)||cs(p))return p=Dr(p,m.mode,g,null),p.return=m,p;Aa(m,p)}return null}function d(m,p,g,E){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pa:return g.key===I?l(m,p,g,E):null;case hi:return g.key===I?u(m,p,g,E):null;case Dn:return I=g._init,d(m,p,I(g._payload),E)}if(Is(g)||cs(g))return I!==null?null:c(m,p,g,E,null);Aa(m,g)}return null}function f(m,p,g,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(p,m,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case pa:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,I);case hi:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,I);case Dn:var C=E._init;return f(m,p,g,C(E._payload),I)}if(Is(E)||cs(E))return m=m.get(g)||null,c(p,m,E,I,null);Aa(p,E)}return null}function y(m,p,g,E){for(var I=null,C=null,P=p,k=p=0,H=null;P!==null&&k<g.length;k++){P.index>k?(H=P,P=null):H=P.sibling;var b=d(m,P,g[k],E);if(b===null){P===null&&(P=H);break}t&&P&&b.alternate===null&&e(m,P),p=s(b,p,k),C===null?I=b:C.sibling=b,C=b,P=H}if(k===g.length)return n(m,P),ae&&_r(m,k),I;if(P===null){for(;k<g.length;k++)P=h(m,g[k],E),P!==null&&(p=s(P,p,k),C===null?I=P:C.sibling=P,C=P);return ae&&_r(m,k),I}for(P=r(m,P);k<g.length;k++)H=f(P,m,k,g[k],E),H!==null&&(t&&H.alternate!==null&&P.delete(H.key===null?k:H.key),p=s(H,p,k),C===null?I=H:C.sibling=H,C=H);return t&&P.forEach(function(Te){return e(m,Te)}),ae&&_r(m,k),I}function _(m,p,g,E){var I=cs(g);if(typeof I!="function")throw Error(A(150));if(g=I.call(g),g==null)throw Error(A(151));for(var C=I=null,P=p,k=p=0,H=null,b=g.next();P!==null&&!b.done;k++,b=g.next()){P.index>k?(H=P,P=null):H=P.sibling;var Te=d(m,P,b.value,E);if(Te===null){P===null&&(P=H);break}t&&P&&Te.alternate===null&&e(m,P),p=s(Te,p,k),C===null?I=Te:C.sibling=Te,C=Te,P=H}if(b.done)return n(m,P),ae&&_r(m,k),I;if(P===null){for(;!b.done;k++,b=g.next())b=h(m,b.value,E),b!==null&&(p=s(b,p,k),C===null?I=b:C.sibling=b,C=b);return ae&&_r(m,k),I}for(P=r(m,P);!b.done;k++,b=g.next())b=f(P,m,k,b.value,E),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?k:b.key),p=s(b,p,k),C===null?I=b:C.sibling=b,C=b);return t&&P.forEach(function(Ce){return e(m,Ce)}),ae&&_r(m,k),I}function v(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===di&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pa:e:{for(var I=g.key,C=p;C!==null;){if(C.key===I){if(I=g.type,I===di){if(C.tag===7){n(m,C.sibling),p=i(C,g.props.children),p.return=m,m=p;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Dn&&Zm(I)===C.type){n(m,C.sibling),p=i(C,g.props),p.ref=ms(m,C,g),p.return=m,m=p;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===di?(p=Dr(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=Ja(g.type,g.key,g.props,null,m.mode,E),E.ref=ms(m,p,g),E.return=m,m=E)}return o(m);case hi:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Uc(g,m.mode,E),p.return=m,m=p}return o(m);case Dn:return C=g._init,v(m,p,C(g._payload),E)}if(Is(g))return y(m,p,g,E);if(cs(g))return _(m,p,g,E);Aa(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=$c(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return v}var $i=xv(!0),Ov=xv(!1),jo={},tn=lr(jo),co=lr(jo),ho=lr(jo);function Sr(t){if(t===jo)throw Error(A(174));return t}function Tf(t,e){switch(te(ho,e),te(co,t),te(tn,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}oe(tn),te(tn,e)}function Ui(){oe(tn),oe(co),oe(ho)}function Vv(t){Sr(ho.current);var e=Sr(tn.current),n=Ah(e,t.type);e!==n&&(te(co,t),te(tn,n))}function If(t){co.current===t&&(oe(tn),oe(co))}var le=lr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Sf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var Ka=Pn.ReactCurrentDispatcher,Vc=Pn.ReactCurrentBatchConfig,Mr=0,ue=null,Ie=null,ke=null,Al=!1,$s=!1,fo=0,CS=0;function We(){throw Error(A(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Cf(t,e,n,r,i,s){if(Mr=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?NS:DS,t=n(r,i),$s){s=0;do{if($s=!1,fo=0,25<=s)throw Error(A(301));s+=1,ke=Ie=null,e.updateQueue=null,Ka.current=xS,t=n(r,i)}while($s)}if(Ka.current=Cl,e=Ie!==null&&Ie.next!==null,Mr=0,ke=Ie=ue=null,Al=!1,e)throw Error(A(300));return t}function Rf(){var t=fo!==0;return fo=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ue.memoizedState=ke=t:ke=ke.next=t,ke}function Lt(){if(Ie===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=ke===null?ue.memoizedState:ke.next;if(e!==null)ke=e,Ie=t;else{if(t===null)throw Error(A(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ke===null?ue.memoizedState=ke=t:ke=ke.next=t}return ke}function po(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zt(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,Fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lv(){}function Mv(t,e){var n=ue,r=Lt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,Pf($v.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,mo(9,bv.bind(null,n,r,i,e),void 0,null),De===null)throw Error(A(349));Mr&30||Fv(n,e,i)}return i}function Fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,r){e.value=n,e.getSnapshot=r,Uv(e)&&jv(t)}function $v(t,e,n){return n(function(){Uv(e)&&jv(t)})}function Uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function jv(t){var e=Tn(t,1);e!==null&&Bt(e,t,1,-1)}function eg(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},e.queue=t,t=t.dispatch=kS.bind(null,ue,t),[e.memoizedState,t]}function mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Bv(){return Lt().memoizedState}function Ga(t,e,n,r){var i=Qt();ue.flags|=t,i.memoizedState=mo(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Af(r,o.deps)){i.memoizedState=mo(e,n,s,r);return}}ue.flags|=t,i.memoizedState=mo(1|e,n,s,r)}function tg(t,e){return Ga(8390656,8,t,e)}function Pf(t,e){return mu(2048,8,t,e)}function zv(t,e){return mu(4,2,t,e)}function Wv(t,e){return mu(4,4,t,e)}function qv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,qv.bind(null,e,t),n)}function kf(){}function Kv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qv(t,e,n){return Mr&21?(zt(n,e)||(n=J_(),ue.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function RS(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Vc.transition;Vc.transition={};try{t(!1),e()}finally{J=n,Vc.transition=r}}function Yv(){return Lt().memoizedState}function PS(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xv(t))Jv(e,n);else if(n=Pv(t,e,n,r),n!==null){var i=ot();Bt(n,t,r,i),Zv(n,e,r)}}function kS(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xv(t))Jv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ef(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Pv(t,e,i,r),n!==null&&(i=ot(),Bt(n,t,r,i),Zv(n,e,r))}}function Xv(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function Jv(t,e){$s=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,of(t,n)}}var Cl={readContext:Vt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},NS={readContext:Vt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4194308,4,qv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ga(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PS.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:eg,useDebugValue:kf,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=eg(!1),e=t[0];return t=RS.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Qt();if(ae){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),De===null)throw Error(A(349));Mr&30||Fv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tg($v.bind(null,r,s,t),[t]),r.flags|=2048,mo(9,bv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=De.identifierPrefix;if(ae){var n=pn,r=fn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DS={readContext:Vt,useCallback:Kv,useContext:Vt,useEffect:Pf,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:Wv,useMemo:Gv,useReducer:Lc,useRef:Bv,useState:function(){return Lc(po)},useDebugValue:kf,useDeferredValue:function(t){var e=Lt();return Qv(e,Ie.memoizedState,t)},useTransition:function(){var t=Lc(po)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Mv,useId:Yv,unstable_isNewReconciler:!1},xS={readContext:Vt,useCallback:Kv,useContext:Vt,useEffect:Pf,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:Wv,useMemo:Gv,useReducer:Mc,useRef:Bv,useState:function(){return Mc(po)},useDebugValue:kf,useDeferredValue:function(t){var e=Lt();return Ie===null?e.memoizedState=t:Qv(e,Ie.memoizedState,t)},useTransition:function(){var t=Mc(po)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Mv,useId:Yv,unstable_isNewReconciler:!1};function ji(t,e){try{var n="",r=e;do n+=oI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OS=typeof WeakMap=="function"?WeakMap:Map;function e0(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pl||(Pl=!0,id=r),Gh(t,e)},n}function t0(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gh(t,e),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KS.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Kn(n,e,1))),n.lanes|=1),t)}var VS=Pn.ReactCurrentOwner,ct=!1;function nt(t,e,n,r){e.child=t===null?Ov(e,null,n,r):$i(e,t.child,n,r)}function sg(t,e,n,r,i){n=n.render;var s=e.ref;return ki(e,i),r=Cf(t,e,n,r,s,i),n=Rf(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(ae&&n&&pf(e),e.flags|=1,nt(t,e,r,i),e.child)}function og(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,n0(t,e,s,r,i)):(t=Ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function n0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(oo(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,In(t,e,i)}return Qh(t,e,n,r,i)}function r0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Ti,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Ti,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Ti,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(Ti,yt),yt|=r;return nt(t,e,i,n),e.child}function i0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,r,i){var s=ft(n)?Vr:Je.current;return s=Fi(e,s),ki(e,i),n=Cf(t,e,n,r,s,i),r=Rf(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(ae&&r&&pf(e),e.flags|=1,nt(t,e,n,i),e.child)}function ag(t,e,n,r,i){if(ft(n)){var s=!0;_l(e)}else s=!1;if(ki(e,i),e.stateNode===null)Qa(t,e),Dv(e,n,r),Kh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=ft(n)?Vr:Je.current,u=Fi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Jm(e,o,r,u),xn=!1;var d=e.memoizedState;o.state=d,Il(e,r,o,i),l=e.memoizedState,a!==r||d!==l||dt.current||xn?(typeof c=="function"&&(Hh(e,n,c,r),l=e.memoizedState),(a=xn||Xm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:bt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=ft(n)?Vr:Je.current,l=Fi(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Jm(e,o,r,l),xn=!1,d=e.memoizedState,o.state=d,Il(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||dt.current||xn?(typeof f=="function"&&(Hh(e,n,f,r),y=e.memoizedState),(u=xn||Xm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Yh(t,e,n,r,s,i)}function Yh(t,e,n,r,i,s){i0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hm(e,n,!1),In(t,e,s);r=e.stateNode,VS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&Hm(e,n,!0),e.child}function s0(t){var e=t.stateNode;e.pendingContext?qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qm(t,e.context,!1),Tf(t,e.containerInfo)}function lg(t,e,n,r,i){return bi(),gf(i),e.flags|=256,nt(t,e,n,r),e.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function o0(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(le,i&1),t===null)return Wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,r,0,null),t=Dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jh(n),e.memoizedState=Xh,t):Nf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yn(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xh,r}return s=t.child,t=s.sibling,r=Yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nf(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,r){return r!==null&&gf(r),$i(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(A(422))),Ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_u({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=Jh(o),e.memoizedState=Xh,s);if(!(e.mode&1))return Ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Fc(s,r,void 0),Ca(t,e,o,r)}if(a=(o&t.childLanes)!==0,ct||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),Bt(r,t,i,-1))}return Mf(),r=Fc(Error(A(421))),Ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Hn(i.nextSibling),Et=e,ae=!0,Ut=null,t!==null&&(Pt[kt++]=fn,Pt[kt++]=pn,Pt[kt++]=Lr,fn=t.id,pn=t.overflow,Lr=e),e=Nf(e,r.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function a0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MS(t,e,n){switch(e.tag){case 3:s0(e),bi();break;case 5:Vv(e);break;case 1:ft(e.type)&&_l(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?o0(t,e,n):(te(le,le.current&1),t=In(t,e,n),t!==null?t.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return a0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,r0(t,e,n)}return In(t,e,n)}var l0,Zh,u0,c0;l0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zh=function(){};u0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Sr(tn.current);var s=null;switch(n){case"input":i=wh(t,i),r=wh(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=Sh(t,i),r=Sh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gl)}Ch(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};c0=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FS(t,e,n){var r=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return ft(e.type)&&yl(),qe(e),null;case 3:return r=e.stateNode,Ui(),oe(dt),oe(Je),Sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(ad(Ut),Ut=null))),Zh(t,e),qe(e),null;case 5:If(e);var i=Sr(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)u0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return qe(e),null}if(t=Sr(tn.current),Sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[uo]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)ne(As[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":_m(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Em(r,s),ne("invalid",r)}Ch(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,a,t),i=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":ma(r),vm(r,s,!0);break;case"textarea":ma(r),wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[uo]=r,l0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rh(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)ne(As[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":_m(t,r),i=wh(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Em(t,r),i=Sh(t,r),ne("invalid",t);break;default:i=r}Ch(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&b_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&eo(t,l):typeof l=="number"&&eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&Zd(t,s,l,o))}switch(n){case"input":ma(t),vm(t,r,!1);break;case"textarea":ma(t),wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)c0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Sr(ho.current),Sr(tn.current),Sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return qe(e),null;case 13:if(oe(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&_t!==null&&e.mode&1&&!(e.flags&128))Rv(),bi(),e.flags|=98560,s=!1;else if(s=Sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Yt]=e}else bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else Ut!==null&&(ad(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?Se===0&&(Se=3):Mf())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return Ui(),Zh(t,e),t===null&&ao(e.stateNode.containerInfo),qe(e),null;case 10:return vf(e.type._context),qe(e),null;case 17:return ft(e.type)&&yl(),qe(e),null;case 19:if(oe(le),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Bi&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return qe(e),null}else 2*ge()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=le.current,te(le,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return Lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function bS(t,e){switch(mf(e),e.tag){case 1:return ft(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),oe(dt),oe(Je),Sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return If(e),null;case 13:if(oe(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(le),null;case 4:return Ui(),null;case 10:return vf(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Ra=!1,Ge=!1,$S=typeof WeakSet=="function"?WeakSet:Set,x=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function ed(t,e,n){try{n()}catch(r){de(t,e,r)}}var cg=!1;function US(t,e){if(Fh=fl,t=pv(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bh={focusedElem:t,selectionRange:n},fl=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:bt(e.type,_),v);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){de(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=cg,cg=!1,y}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ed(e,n,s)}i=i.next}while(i!==r)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[uo],delete e[jh],delete e[TS],delete e[IS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function d0(t){return t.tag===5||t.tag===3||t.tag===4}function hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var Le=null,$t=!1;function kn(t,e,n){for(n=n.child;n!==null;)f0(t,e,n),n=n.sibling}function f0(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:Ge||wi(n,e);case 6:var r=Le,i=$t;Le=null,kn(t,e,n),Le=r,$t=i,Le!==null&&($t?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&($t?(t=Le,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),io(t)):Dc(Le,n.stateNode));break;case 4:r=Le,i=$t,Le=n.stateNode.containerInfo,$t=!0,kn(t,e,n),Le=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ed(n,e,o),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!Ge&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,e,a)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,kn(t,e,n),Ge=r):kn(t,e,n);break;default:kn(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $S),e.forEach(function(r){var i=QS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,$t=!1;break e;case 3:Le=a.stateNode.containerInfo,$t=!0;break e;case 4:Le=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(Le===null)throw Error(A(160));f0(s,o,i),Le=null,$t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){de(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p0(e,t),e=e.sibling}function p0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Gt(t),r&4){try{Us(3,t,t.return),gu(3,t)}catch(_){de(t,t.return,_)}try{Us(5,t,t.return)}catch(_){de(t,t.return,_)}}break;case 1:Ft(e,t),Gt(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Ft(e,t),Gt(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{eo(i,"")}catch(_){de(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L_(i,s),Rh(a,o);var u=Rh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?U_(i,h):c==="dangerouslySetInnerHTML"?b_(i,h):c==="children"?eo(i,h):Zd(i,c,h,u)}switch(a){case"input":Th(i,s);break;case"textarea":M_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ai(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ai(i,!!s.multiple,s.defaultValue,!0):Ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[uo]=s}catch(_){de(t,t.return,_)}}break;case 6:if(Ft(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){de(t,t.return,_)}}break;case 3:if(Ft(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(_){de(t,t.return,_)}break;case 4:Ft(e,t),Gt(t);break;case 13:Ft(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Of=ge())),r&4&&dg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(u=Ge)||c,Ft(e,t),Ge=u):Ft(e,t),Gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,f=d.child,d.tag){case 0:case 11:case 14:case 15:Us(4,d,d.return);break;case 1:wi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){de(r,n,_)}}break;case 5:wi(d,d.return);break;case 22:if(d.memoizedState!==null){pg(h);continue}}f!==null?(f.return=d,x=f):pg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$_("display",o))}catch(_){de(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){de(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(e,t),Gt(t),r&4&&dg(t);break;case 21:break;default:Ft(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(d0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(eo(i,""),r.flags&=-33);var s=hg(t);rd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hg(t);nd(t,a,o);break;default:throw Error(A(161))}}catch(l){de(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,n){x=t,m0(t)}function m0(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ra;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=Ra;var u=Ge;if(Ra=o,(Ge=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?mg(i):l!==null?(l.return=o,x=l):mg(i);for(;s!==null;)x=s,m0(s),s=s.sibling;x=i,Ra=a,Ge=u}fg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):fg(t)}}function fg(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ge||gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ym(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&io(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ge||e.flags&512&&td(e)}catch(d){de(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function pg(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function mg(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(l){de(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){de(e,i,l)}}var s=e.return;try{td(e)}catch(l){de(e,s,l)}break;case 5:var o=e.return;try{td(e)}catch(l){de(e,o,l)}}}catch(l){de(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var BS=Math.ceil,Rl=Pn.ReactCurrentDispatcher,Df=Pn.ReactCurrentOwner,xt=Pn.ReactCurrentBatchConfig,Q=0,De=null,ve=null,$e=0,yt=0,Ti=lr(0),Se=0,go=null,Fr=0,yu=0,xf=0,js=null,ut=null,Of=0,Bi=1/0,cn=null,Pl=!1,id=null,Gn=null,Pa=!1,$n=null,kl=0,Bs=0,sd=null,Ya=-1,Xa=0;function ot(){return Q&6?ge():Ya!==-1?Ya:Ya=ge()}function Qn(t){return t.mode&1?Q&2&&$e!==0?$e&-$e:AS.transition!==null?(Xa===0&&(Xa=J_()),Xa):(t=J,t!==0||(t=window.event,t=t===void 0?16:sv(t.type)),t):1}function Bt(t,e,n,r){if(50<Bs)throw Bs=0,sd=null,Error(A(185));bo(t,n,r),(!(Q&2)||t!==De)&&(t===De&&(!(Q&2)&&(yu|=n),Se===4&&Vn(t,$e)),pt(t,r),n===1&&Q===0&&!(e.mode&1)&&(Bi=ge()+500,fu&&ur()))}function pt(t,e){var n=t.callbackNode;AI(t,e);var r=dl(t,t===De?$e:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?SS(gg.bind(null,t)):Sv(gg.bind(null,t)),ES(function(){!(Q&6)&&ur()}),n=null;else{switch(Z_(r)){case 1:n=sf;break;case 4:n=Y_;break;case 16:n=hl;break;case 536870912:n=X_;break;default:n=hl}n=I0(n,g0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function g0(t,e){if(Ya=-1,Xa=0,Q&6)throw Error(A(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=dl(t,t===De?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nl(t,r);else{e=r;var i=Q;Q|=2;var s=_0();(De!==t||$e!==e)&&(cn=null,Bi=ge()+500,Nr(t,e));do try{qS();break}catch(a){y0(t,a)}while(!0);_f(),Rl.current=s,Q=i,ve!==null?e=0:(De=null,$e=0,e=Se)}if(e!==0){if(e===2&&(i=xh(t),i!==0&&(r=i,e=od(t,i))),e===1)throw n=go,Nr(t,0),Vn(t,r),pt(t,ge()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!zS(i)&&(e=Nl(t,r),e===2&&(s=xh(t),s!==0&&(r=s,e=od(t,s))),e===1))throw n=go,Nr(t,0),Vn(t,r),pt(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:vr(t,ut,cn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=Of+500-ge(),10<e)){if(dl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uh(vr.bind(null,t,ut,cn),e);break}vr(t,ut,cn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BS(r/1960))-r,10<r){t.timeoutHandle=Uh(vr.bind(null,t,ut,cn),r);break}vr(t,ut,cn);break;case 5:vr(t,ut,cn);break;default:throw Error(A(329))}}}return pt(t,ge()),t.callbackNode===n?g0.bind(null,t):null}function od(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=ut,ut=n,e!==null&&ad(e)),t}function ad(t){ut===null?ut=t:ut.push.apply(ut,t)}function zS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~xf,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if(Q&6)throw Error(A(327));Ni();var e=dl(t,0);if(!(e&1))return pt(t,ge()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var r=xh(t);r!==0&&(e=r,n=od(t,r))}if(n===1)throw n=go,Nr(t,0),Vn(t,e),pt(t,ge()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,ut,cn),pt(t,ge()),null}function Vf(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(Bi=ge()+500,fu&&ur())}}function br(t){$n!==null&&$n.tag===0&&!(Q&6)&&Ni();var e=Q;Q|=1;var n=xt.transition,r=J;try{if(xt.transition=null,J=1,t)return t()}finally{J=r,xt.transition=n,Q=e,!(Q&6)&&ur()}}function Lf(){yt=Ti.current,oe(Ti)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vS(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Ui(),oe(dt),oe(Je),Sf();break;case 5:If(r);break;case 4:Ui();break;case 13:oe(le);break;case 19:oe(le);break;case 10:vf(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(De=t,ve=t=Yn(t.current,null),$e=yt=e,Se=0,go=null,xf=yu=Fr=0,ut=js=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ir=null}return t}function y0(t,e){do{var n=ve;try{if(_f(),Ka.current=Cl,Al){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(Mr=0,ke=Ie=ue=null,$s=!1,fo=0,Df.current=null,n===null||n.return===null){Se=1,go=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=rg(o);if(f!==null){f.flags&=-257,ig(f,o,a,s,e),f.mode&1&&ng(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){ng(s,u,e),Mf();break e}l=Error(A(426))}}else if(ae&&a.mode&1){var v=rg(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),ig(v,o,a,s,e),gf(ji(l,a));break e}}s=l=ji(l,a),Se!==4&&(Se=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=e0(s,l,e);Qm(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gn===null||!Gn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=t0(s,a,e);Qm(s,E);break e}}s=s.return}while(s!==null)}E0(n)}catch(I){e=I,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function _0(){var t=Rl.current;return Rl.current=Cl,t===null?Cl:t}function Mf(){(Se===0||Se===3||Se===2)&&(Se=4),De===null||!(Fr&268435455)&&!(yu&268435455)||Vn(De,$e)}function Nl(t,e){var n=Q;Q|=2;var r=_0();(De!==t||$e!==e)&&(cn=null,Nr(t,e));do try{WS();break}catch(i){y0(t,i)}while(!0);if(_f(),Q=n,Rl.current=r,ve!==null)throw Error(A(261));return De=null,$e=0,Se}function WS(){for(;ve!==null;)v0(ve)}function qS(){for(;ve!==null&&!gI();)v0(ve)}function v0(t){var e=T0(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?E0(t):ve=e,Df.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bS(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,ve=null;return}}else if(n=FS(n,e,yt),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);Se===0&&(Se=5)}function vr(t,e,n){var r=J,i=xt.transition;try{xt.transition=null,J=1,HS(t,e,n,r)}finally{xt.transition=i,J=r}return null}function HS(t,e,n,r){do Ni();while($n!==null);if(Q&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CI(t,s),t===De&&(ve=De=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,I0(hl,function(){return Ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=J;J=1;var a=Q;Q|=4,Df.current=null,US(t,n),p0(n,t),dS(bh),fl=!!Fh,bh=Fh=null,t.current=n,jS(n),yI(),Q=a,J=o,xt.transition=s}else t.current=n;if(Pa&&(Pa=!1,$n=t,kl=i),s=t.pendingLanes,s===0&&(Gn=null),EI(n.stateNode),pt(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pl)throw Pl=!1,t=id,id=null,t;return kl&1&&t.tag!==0&&Ni(),s=t.pendingLanes,s&1?t===sd?Bs++:(Bs=0,sd=t):Bs=0,ur(),null}function Ni(){if($n!==null){var t=Z_(kl),e=xt.transition,n=J;try{if(xt.transition=null,J=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,kl=0,Q&6)throw Error(A(331));var i=Q;for(Q|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Us(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,f=c.return;if(h0(c),c===u){x=null;break}if(d!==null){d.return=f,x=d;break}x=f}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=p;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gu(9,a)}}catch(I){de(a,a.return,I)}if(a===o){x=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,x=E;break e}x=a.return}}if(Q=i,ur(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(lu,t)}catch{}r=!0}return r}finally{J=n,xt.transition=e}}return!1}function yg(t,e,n){e=ji(n,e),e=e0(t,e,1),t=Kn(t,e,1),e=ot(),t!==null&&(bo(t,1,e),pt(t,e))}function de(t,e,n){if(t.tag===3)yg(t,t,n);else for(;e!==null;){if(e.tag===3){yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){t=ji(n,t),t=t0(e,t,1),e=Kn(e,t,1),t=ot(),e!==null&&(bo(e,1,t),pt(e,t));break}}e=e.return}}function KS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,De===t&&($e&n)===n&&(Se===4||Se===3&&($e&130023424)===$e&&500>ge()-Of?Nr(t,0):xf|=n),pt(t,e)}function w0(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=ot();t=Tn(t,e),t!==null&&(bo(t,e,n),pt(t,n))}function GS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w0(t,n)}function QS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),w0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,MS(t,e,n);ct=!!(t.flags&131072)}else ct=!1,ae&&e.flags&1048576&&Av(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qa(t,e),t=e.pendingProps;var i=Fi(e,Je.current);ki(e,n),i=Cf(null,e,r,t,i,n);var s=Rf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,_l(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wf(e),i.updater=pu,e.stateNode=i,i._reactInternals=e,Kh(e,r,t,n),e=Yh(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&pf(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XS(r),t=bt(r,t),i){case 0:e=Qh(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=sg(null,e,r,t,n);break e;case 14:e=og(null,e,r,bt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Qh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),ag(t,e,r,i,n);case 3:e:{if(s0(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kv(t,e),Il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(A(423)),e),e=lg(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(A(424)),e),e=lg(t,e,r,n,i);break e}else for(_t=Hn(e.stateNode.containerInfo.firstChild),Et=e,ae=!0,Ut=null,n=Ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){e=In(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return Vv(e),t===null&&Wh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$h(r,i)?o=null:s!==null&&$h(r,s)&&(e.flags|=32),i0(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&Wh(e),null;case 13:return o0(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),sg(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(wl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!dt.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=_n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ki(e,n),i=Vt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),og(t,e,r,i,n);case 15:return n0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Qa(t,e),e.tag=1,ft(r)?(t=!0,_l(e)):t=!1,ki(e,n),Dv(e,r,i),Kh(e,r,i,n),Yh(null,e,r,!0,t,n);case 19:return a0(t,e,n);case 22:return r0(t,e,n)}throw Error(A(156,e.tag))};function I0(t,e){return Q_(t,e)}function YS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new YS(t,e,n,r)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XS(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tf)return 11;if(t===nf)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return Dr(n.children,i,s,e);case ef:o=8,i|=8;break;case yh:return t=Dt(12,n,e,i|2),t.elementType=yh,t.lanes=s,t;case _h:return t=Dt(13,n,e,i),t.elementType=_h,t.lanes=s,t;case vh:return t=Dt(19,n,e,i),t.elementType=vh,t.lanes=s,t;case x_:return _u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N_:o=10;break e;case D_:o=9;break e;case tf:o=11;break e;case nf:o=14;break e;case Dn:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=x_,t.lanes=n,t.stateNode={isHidden:!1},t}function $c(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bf(t,e,n,r,i,s,o,a,l){return t=new JS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function ZS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return rr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(ft(n))return Iv(t,n,e)}return e}function A0(t,e,n,r,i,s,o,a,l){return t=bf(n,r,!0,t,i,s,o,a,l),t.context=S0(null),n=t.current,r=ot(),i=Qn(n),s=_n(r,i),s.callback=e??null,Kn(n,s,i),t.current.lanes=i,bo(t,i,r),pt(t,r),t}function vu(t,e,n,r){var i=e.current,s=ot(),o=Qn(i);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kn(i,e,o),t!==null&&(Bt(t,i,o,s),Ha(t,i,o)),o}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $f(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function eA(){return null}var C0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}Eu.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));vu(t,e,null,null)};Eu.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){vu(null,t,null,null)}),e[wn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&iv(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function tA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dl(o);s.call(u)}}var o=A0(e,r,t,0,null,!1,!1,"",vg);return t._reactRootContainer=o,t[wn]=o.current,ao(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dl(l);a.call(u)}}var l=bf(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=l,t[wn]=l.current,ao(t.nodeType===8?t.parentNode:t),br(function(){vu(e,l,n,r)}),l}function Tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dl(o);a.call(l)}}vu(e,o,t,i)}else o=tA(n,e,t,i,r);return Dl(o)}ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(of(e,n|1),pt(e,ge()),!(Q&6)&&(Bi=ge()+500,ur()))}break;case 13:br(function(){var r=Tn(t,1);if(r!==null){var i=ot();Bt(r,t,1,i)}}),$f(t,1)}};af=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=ot();Bt(e,t,134217728,n)}$f(t,134217728)}};tv=function(t){if(t.tag===13){var e=Qn(t),n=Tn(t,e);if(n!==null){var r=ot();Bt(n,t,e,r)}$f(t,e)}};nv=function(){return J};rv=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};kh=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=du(r);if(!i)throw Error(A(90));V_(r),Th(r,i)}}}break;case"textarea":M_(t,n);break;case"select":e=n.value,e!=null&&Ai(t,!!n.multiple,e,!1)}};z_=Vf;W_=br;var nA={usingClientEntryPoint:!1,Events:[Uo,gi,du,j_,B_,Vf]},ys={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rA={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K_(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||eA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{lu=ka.inject(rA),en=ka}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nA;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(A(200));return ZS(t,e,null,n)};At.createRoot=function(t,e){if(!jf(t))throw Error(A(299));var n=!1,r="",i=C0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bf(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,ao(t.nodeType===8?t.parentNode:t),new Uf(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=K_(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return br(t)};At.hydrate=function(t,e,n){if(!wu(e))throw Error(A(200));return Tu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A0(e,null,t,1,n??null,i,!1,s,o),t[wn]=e.current,ao(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};At.render=function(t,e,n){if(!wu(e))throw Error(A(200));return Tu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!wu(t))throw Error(A(40));return t._reactRootContainer?(br(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};At.unstable_batchedUpdates=Vf;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wu(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Tu(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(t){console.error(t)}}R0(),A_.exports=At;var iA=A_.exports,Eg=iA;mh.createRoot=Eg.createRoot,mh.hydrateRoot=Eg.hydrateRoot;const sA="modulepreload",oA=function(t){return"https://Balanss.github.io/stamps/"+t},wg={},Iu=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=oA(o),o in wg)return;wg[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=s.length-1;h>=0;h--){const d=s[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":sA,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yo.apply(this,arguments)}var Un;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Un||(Un={}));const Tg="popstate";function aA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ld("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xl(i)}return uA(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lA(){return Math.random().toString(36).substr(2,8)}function Ig(t,e){return{usr:t.state,key:t.key,idx:e}}function ld(t,e,n,r){return n===void 0&&(n=null),yo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ts(e):e,{state:n,key:e&&e.key||r||lA()})}function xl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Un.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(yo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Un.Pop;let v=c(),m=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:m})}function d(v,m){a=Un.Push;let p=ld(_.location,v,m);n&&n(p,v),u=c()+1;let g=Ig(p,u),E=_.createHref(p);try{o.pushState(g,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function f(v,m){a=Un.Replace;let p=ld(_.location,v,m);n&&n(p,v),u=c();let g=Ig(p,u),E=_.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof v=="string"?v:xl(v);return we(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tg,h),l=v,()=>{i.removeEventListener(Tg,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let m=y(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(v){return o.go(v)}};return _}var Sg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sg||(Sg={}));function cA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ts(e):e,i=zf(r.pathname||"/",n);if(i==null)return null;let s=P0(t);hA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=EA(s[a],IA(i));return o}function P0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),P0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:_A(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of k0(s.path))i(s,o,l)}),e}function k0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=k0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dA=/^:\w+$/,fA=3,pA=2,mA=1,gA=10,yA=-2,Ag=t=>t==="*";function _A(t,e){let n=t.split("/"),r=n.length;return n.some(Ag)&&(r+=yA),e&&(r+=pA),n.filter(i=>!Ag(i)).reduce((i,s)=>i+(dA.test(s)?fA:s===""?mA:gA),r)}function vA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function EA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Xn([i,c.pathname]),pathnameBase:PA(Xn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Xn([i,c.pathnameBase]))}return s}function wA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=TA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:f}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[h];return f&&!y?u[d]=void 0:u[d]=SA(y||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function TA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function IA(t){try{return decodeURI(t)}catch(e){return Bf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function SA(t,e){try{return decodeURIComponent(t)}catch(n){return Bf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function AA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ts(t):t;return{pathname:n?n.startsWith("/")?n:CA(n,e):e,search:kA(r),hash:NA(i)}}function CA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function N0(t,e){let n=RA(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function D0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ts(t):(i=yo({},t),we(!i.pathname||!i.pathname.includes("?"),jc("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),jc("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),jc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=AA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),PA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const x0=["post","put","patch","delete"];new Set(x0);const xA=["get",...x0];new Set(xA);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}const Wf=T.createContext(null),OA=T.createContext(null),Jr=T.createContext(null),Su=T.createContext(null),Zr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),O0=T.createContext(null);function VA(t,e){let{relative:n}=e===void 0?{}:e;Bo()||we(!1);let{basename:r,navigator:i}=T.useContext(Jr),{hash:s,pathname:o,search:a}=L0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Bo(){return T.useContext(Su)!=null}function Au(){return Bo()||we(!1),T.useContext(Su).location}function V0(t){T.useContext(Jr).static||T.useLayoutEffect(t)}function Cu(){let{isDataRoute:t}=T.useContext(Zr);return t?KA():LA()}function LA(){Bo()||we(!1);let t=T.useContext(Wf),{basename:e,future:n,navigator:r}=T.useContext(Jr),{matches:i}=T.useContext(Zr),{pathname:s}=Au(),o=JSON.stringify(N0(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return V0(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=D0(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Xn([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function L0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Jr),{matches:i}=T.useContext(Zr),{pathname:s}=Au(),o=JSON.stringify(N0(i,r.v7_relativeSplatPath));return T.useMemo(()=>D0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function MA(t,e){return FA(t,e)}function FA(t,e,n,r){Bo()||we(!1);let{navigator:i}=T.useContext(Jr),{matches:s}=T.useContext(Zr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Au(),c;if(e){var h;let v=typeof e=="string"?ts(e):e;l==="/"||(h=v.pathname)!=null&&h.startsWith(l)||we(!1),c=v}else c=u;let d=c.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",y=cA(t,{pathname:f}),_=BA(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&_?T.createElement(Su.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Un.Pop}},_):_}function bA(){let t=HA(),e=DA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const $A=T.createElement(bA,null);class UA extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Zr.Provider,{value:this.props.routeContext},T.createElement(O0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jA(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Wf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Zr.Provider,{value:e},r)}function BA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||we(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:f}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let f,y=!1,_=null,v=null;n&&(f=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||$A,l&&(u<0&&d===0?(GA("route-fallback",!1),y=!0,v=null):u===d&&(y=!0,v=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),p=()=>{let g;return f?g=_:y?g=v:h.route.Component?g=T.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,T.createElement(jA,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?T.createElement(UA,{location:n.location,revalidation:n.revalidation,component:_,error:f,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var M0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(M0||{}),Ol=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ol||{});function zA(t){let e=T.useContext(Wf);return e||we(!1),e}function WA(t){let e=T.useContext(OA);return e||we(!1),e}function qA(t){let e=T.useContext(Zr);return e||we(!1),e}function F0(t){let e=qA(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function HA(){var t;let e=T.useContext(O0),n=WA(Ol.UseRouteError),r=F0(Ol.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KA(){let{router:t}=zA(M0.UseNavigateStable),e=F0(Ol.UseNavigateStable),n=T.useRef(!1);return V0(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_o({fromRouteId:e},s)))},[t,e])}const Cg={};function GA(t,e,n){!e&&!Cg[t]&&(Cg[t]=!0)}function Cs(t){we(!1)}function QA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Un.Pop,navigator:s,static:o=!1,future:a}=t;Bo()&&we(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:_o({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ts(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:y="default"}=r,_=T.useMemo(()=>{let v=zf(c,l);return v==null?null:{location:{pathname:v,search:h,hash:d,state:f,key:y},navigationType:i}},[l,c,h,d,f,y,i]);return _==null?null:T.createElement(Jr.Provider,{value:u},T.createElement(Su.Provider,{children:n,value:_}))}function YA(t){let{children:e,location:n}=t;return MA(ud(e),n)}new Promise(()=>{});function ud(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,ud(r.props.children,s));return}r.type!==Cs&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ud(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cd(){return cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cd.apply(this,arguments)}function XA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZA(t,e){return t.button===0&&(!e||e==="_self")&&!JA(t)}const eC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],tC="startTransition",Rg=GT[tC];function nC(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=aA({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(h=>{u&&Rg?Rg(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(QA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const rC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vl=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=XA(e,eC),{basename:f}=T.useContext(Jr),y,_=!1;if(typeof u=="string"&&iC.test(u)&&(y=u,rC))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=zf(E.pathname,f);E.origin===g.origin&&I!=null?u=I+E.search+E.hash:_=!0}catch{}let v=VA(u,{relative:i}),m=sC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(g){r&&r(g),g.defaultPrevented||m(g)}return T.createElement("a",cd({},d,{href:y||v,onClick:_||s?r:p,ref:n,target:l}))});var Pg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pg||(Pg={}));var kg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));function sC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Cu(),u=Au(),c=L0(t,{relative:o});return T.useCallback(h=>{if(ZA(h,n)){h.preventDefault();let d=r!==void 0?r:xl(u)===xl(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const b0="https://Balanss.github.io/stamps/assets/deal-stamps-logo-NJiSpKcL.png",$0="https://Balanss.github.io/stamps/assets/user-0zAmNmWp.png",U0="data:image/svg+xml,%3csvg%20width='20'%20height='12'%20viewBox='0%200%2020%2012'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%202L19%202C19.2652%202%2019.5196%201.89464%2019.7071%201.70711C19.8946%201.51957%2020%201.26522%2020%201C20%200.734784%2019.8946%200.480429%2019.7071%200.292892C19.5196%200.105356%2019.2652%200%2019%200L9%200C8.73478%200%208.48043%200.105356%208.29289%200.292892C8.10536%200.480429%208%200.734784%208%201C8%201.26522%208.10536%201.51957%208.29289%201.70711C8.48043%201.89464%208.73478%202%209%202ZM19%2010L1%2010C0.734784%2010%200.480429%2010.1054%200.292892%2010.2929C0.105356%2010.4804%200%2010.7348%200%2011C0%2011.2652%200.105356%2011.5196%200.292892%2011.7071C0.480429%2011.8946%200.734784%2012%201%2012L19%2012C19.2652%2012%2019.5196%2011.8946%2019.7071%2011.7071C19.8946%2011.5196%2020%2011.2652%2020%2011C20%2010.7348%2019.8946%2010.4804%2019.7071%2010.2929C19.5196%2010.1054%2019.2652%2010%2019%2010V10ZM1%207L19%207C19.2652%207%2019.5196%206.89464%2019.7071%206.70711C19.8946%206.51957%2020%206.26522%2020%206C20%205.73478%2019.8946%205.48043%2019.7071%205.29289C19.5196%205.10536%2019.2652%205%2019%205L1%205C0.734784%205%200.480429%205.10536%200.292892%205.29289C0.105356%205.48043%200%205.73478%200%206C0%206.26522%200.105356%206.51957%200.292892%206.70711C0.480429%206.89464%200.734784%207%201%207Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e";var Ng={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},B0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new aC;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lC=function(t){const e=j0(t);return B0.encodeByteArray(e,!0)},Ll=function(t){return lC(t).replace(/\./g,"")},z0=function(t){try{return B0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=()=>uC().__FIREBASE_DEFAULTS__,hC=()=>{if(typeof process>"u"||typeof Ng>"u")return;const t=Ng.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z0(t[1]);return e&&JSON.parse(e)},qf=()=>{try{return cC()||hC()||dC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W0=t=>{var e,n;return(n=(e=qf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fC=t=>{const e=W0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},q0=()=>{var t;return(t=qf())===null||t===void 0?void 0:t.config},H0=t=>{var e;return(e=qf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function K0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _C(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function G0(){try{return typeof indexedDB=="object"}catch{return!1}}function Q0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EC,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,r)}}function wC(t,e){return t.replace(TC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TC=/\{\$([^}]+)}/g;function IC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dg(s)&&Dg(o)){if(!vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SC(t,e){const n=new AC(t,e);return n.subscribe.bind(n)}class AC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bc),i.error===void 0&&(i.error=Bc),i.complete===void 0&&(i.complete=Bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=1e3,PC=2,kC=4*60*60*1e3,NC=.5;function xg(t,e=RC,n=PC){const r=e*Math.pow(n,t),i=Math.round(NC*r*(Math.random()-.5)*2);return Math.min(kC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class Wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OC(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xC(t){return t===Er?void 0:t}function OC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const LC={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},MC=K.INFO,FC={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},bC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ru{constructor(e){this.name=e,this._logLevel=MC,this._logHandler=bC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const $C=(t,e)=>e.some(n=>t instanceof n);let Og,Vg;function UC(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jC(){return Vg||(Vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y0=new WeakMap,hd=new WeakMap,X0=new WeakMap,zc=new WeakMap,Hf=new WeakMap;function BC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y0.set(n,t)}).catch(()=>{}),Hf.set(e,t),e}function zC(t){if(hd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hd.set(t,e)}let dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WC(t){dd=t(dd)}function qC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wc(this),e,...n);return X0.set(r,e.sort?e.sort():[e]),Jn(r)}:jC().includes(t)?function(...e){return t.apply(Wc(this),e),Jn(Y0.get(this))}:function(...e){return Jn(t.apply(Wc(this),e))}}function HC(t){return typeof t=="function"?qC(t):(t instanceof IDBTransaction&&zC(t),$C(t,UC())?new Proxy(t,dd):t)}function Jn(t){if(t instanceof IDBRequest)return BC(t);if(zc.has(t))return zc.get(t);const e=HC(t);return e!==t&&(zc.set(t,e),Hf.set(e,t)),e}const Wc=t=>Hf.get(t);function KC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jn(o.result),l.oldVersion,l.newVersion,Jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GC=["get","getKey","getAll","getAllKeys","count"],QC=["put","add","delete","clear"],qc=new Map;function Lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qc.set(e,s),s}WC(t=>({...t,get:(e,n,r)=>Lg(e,n)||t.get(e,n,r),has:(e,n)=>!!Lg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",Mg="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Ru("@firebase/app"),JC="@firebase/app-compat",ZC="@firebase/analytics-compat",eR="@firebase/analytics",tR="@firebase/app-check-compat",nR="@firebase/app-check",rR="@firebase/auth",iR="@firebase/auth-compat",sR="@firebase/database",oR="@firebase/database-compat",aR="@firebase/functions",lR="@firebase/functions-compat",uR="@firebase/installations",cR="@firebase/installations-compat",hR="@firebase/messaging",dR="@firebase/messaging-compat",fR="@firebase/performance",pR="@firebase/performance-compat",mR="@firebase/remote-config",gR="@firebase/remote-config-compat",yR="@firebase/storage",_R="@firebase/storage-compat",vR="@firebase/firestore",ER="@firebase/firestore-compat",wR="firebase",TR="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="[DEFAULT]",IR={[fd]:"fire-core",[JC]:"fire-core-compat",[eR]:"fire-analytics",[ZC]:"fire-analytics-compat",[nR]:"fire-app-check",[tR]:"fire-app-check-compat",[rR]:"fire-auth",[iR]:"fire-auth-compat",[sR]:"fire-rtdb",[oR]:"fire-rtdb-compat",[aR]:"fire-fn",[lR]:"fire-fn-compat",[uR]:"fire-iid",[cR]:"fire-iid-compat",[hR]:"fire-fcm",[dR]:"fire-fcm-compat",[fR]:"fire-perf",[pR]:"fire-perf-compat",[mR]:"fire-rc",[gR]:"fire-rc-compat",[yR]:"fire-gcs",[_R]:"fire-gcs-compat",[vR]:"fire-fst",[ER]:"fire-fst-compat","fire-js":"fire-js",[wR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map,md=new Map;function SR(t,e){try{t.container.addComponent(e)}catch(n){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(md.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;md.set(e,t);for(const n of Ml.values())SR(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new ei("app","Firebase",AR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=TR;function J0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=q0()),!n)throw Zn.create("no-options");const s=Ml.get(i);if(s){if(vo(n,s.options)&&vo(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new VC(i);for(const l of md.values())o.addComponent(l);const a=new CR(n,r,o);return Ml.set(i,a),a}function Kf(t=pd){const e=Ml.get(t);if(!e&&t===pd&&q0())return J0();if(!e)throw Zn.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=IR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(a.join(" "));return}an(new Wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="firebase-heartbeat-database",PR=1,Eo="firebase-heartbeat-store";let Hc=null;function Z0(){return Hc||(Hc=KC(RR,PR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Eo)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function kR(t){try{return await(await Z0()).transaction(Eo).objectStore(Eo).get(eE(t))}catch(e){if(e instanceof Kt)$r.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(n.message)}}}async function Fg(t,e){try{const r=(await Z0()).transaction(Eo,"readwrite");await r.objectStore(Eo).put(e,eE(t)),await r.done}catch(n){if(n instanceof Kt)$r.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$r.warn(r.message)}}}function eE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=1024,DR=30*24*60*60*1e3;class xR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:r,unsentEntries:i}=OR(this._heartbeatsCache.heartbeats),s=Ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bg(){return new Date().toISOString().substring(0,10)}function OR(t,e=NR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$g(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G0()?Q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $g(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){an(new Wt("platform-logger",e=>new YC(e),"PRIVATE")),an(new Wt("heartbeat",e=>new xR(e),"PRIVATE")),Ot(fd,Mg,t),Ot(fd,Mg,"esm2017"),Ot("fire-js","")}LR("");function Gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MR=tE,nE=new ei("auth","Firebase",tE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Ru("@firebase/auth");function FR(t,...e){Fl.logLevel<=K.WARN&&Fl.warn(`Auth (${ns}): ${t}`,...e)}function Za(t,...e){Fl.logLevel<=K.ERROR&&Fl.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw Qf(t,...e)}function nn(t,...e){return Qf(t,...e)}function rE(t,e,n){const r=Object.assign(Object.assign({},MR()),{[e]:n});return new ei("auth","Firebase",r).create(e,{appName:t.name})}function bR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mt(t,"argument-error"),rE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nE.create(t,...e)}function U(t,e,...n){if(!t)throw Qf(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function Sn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $R(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($R()||K0()||"connection"in navigator)?navigator.onLine:!0}function jR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=gC()||yC()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Wo(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,i={}){return sE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iE.fetch()(oE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BR),e);try{const i=new qR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Na(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rE(t,c,u);Mt(t,c)}}catch(i){if(i instanceof Kt)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function qo(t,e,n,r,i={}){const s=await hr(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yf(t.config,i):`${t.config.apiScheme}://${i}`}function WR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),zR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function jg(t){return t!==void 0&&t.enterprise!==void 0}class HR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function KR(t,e){return hr(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function QR(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YR(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=Xf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(Kc(i.auth_time)),issuedAtTime:zs(Kc(i.iat)),expirationTime:zs(Kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function Xf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const i=z0(n);return i?JSON.parse(i):(Za("Failed to decode base64 JWT payload"),null)}catch(i){return Za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XR(t){const e=Xf(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&JR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wo(t,QR(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nP(s.providerUserInfo):[],a=tP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function eP(t){const e=fe(t);await bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nP(t){return t.map(e=>{var{providerId:n}=e,r=Gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e){const n=await sE(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iP(t,e){return hr(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new To;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YR(this,e)}reload(){return eP(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wo(this,GR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:I,providerData:C,stsTokenManager:P}=n;U(g&&P,e,"internal-error");const k=To.fromJSON(this.name,P);U(typeof g=="string",e,"internal-error"),Nn(h,e.name),Nn(d,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof I=="boolean",e,"internal-error"),Nn(f,e.name),Nn(y,e.name),Nn(_,e.name),Nn(v,e.name),Nn(m,e.name),Nn(p,e.name);const H=new xr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:k,createdAt:m,lastLoginAt:p});return C&&Array.isArray(C)&&(H.providerData=C.map(b=>Object.assign({},b))),v&&(H._redirectEventId=v),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new To;i.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Map;function gn(t){Sn(t instanceof Function,"Expected a class definition");let e=Bg.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lE.type="NONE";const zg=lE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,s),this.fullPersistenceKey=el("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(gn(zg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gn(zg);const o=el(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=xr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Di(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fE(e))return"Blackberry";if(pE(e))return"Webos";if(Jf(e))return"Safari";if((e.includes("chrome/")||cE(e))&&!e.includes("edge/"))return"Chrome";if(dE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uE(t=Ze()){return/firefox\//i.test(t)}function Jf(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cE(t=Ze()){return/crios\//i.test(t)}function hE(t=Ze()){return/iemobile/i.test(t)}function dE(t=Ze()){return/android/i.test(t)}function fE(t=Ze()){return/blackberry/i.test(t)}function pE(t=Ze()){return/webos/i.test(t)}function Pu(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sP(t=Ze()){var e;return Pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oP(){return _C()&&document.documentMode===10}function mE(t=Ze()){return Pu(t)||dE(t)||pE(t)||fE(t)||/windows phone/i.test(t)||hE(t)}function aP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t,e=[]){let n;switch(t){case"Browser":n=Wg(Ze());break;case"Worker":n=`${Wg(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e={}){return hr(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=6;class hP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new lP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uP(this),n=new hP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return fe(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=SC(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fP().appendChild(r)})}function pP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mP="https://www.google.com/recaptcha/enterprise.js?render=",gP="recaptcha-enterprise",yP="NO_RECAPTCHA";class _P{constructor(e){this.type=gP,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{KR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new HR(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(yP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&jg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yE(mP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hg(t,e,n,r=!1){const i=new _P(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Hg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){const n=ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vo(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function EP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wP(t,e,n){const r=dr(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_E(e),{host:o,port:a}=TP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IP()}function _E(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TP(t){const e=_E(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kg(o)}}}function Kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function SP(t,e){return hr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function RP(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Zf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,n,"signInWithPassword",AP);case"emailLink":return CP(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,r,"signUpPassword",SP);case"emailLink":return RP(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="http://localhost";class Ur extends Zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:PP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NP(t){const e=Rs(Ps(t)).link,n=e?Rs(Ps(e)).deep_link_id:null,r=Rs(Ps(t)).deep_link_id;return(r?Rs(Ps(r)).link:null)||r||n||e||t}class ep{constructor(e){var n,r,i,s,o,a;const l=Rs(Ps(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=kP((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=NP(e);try{return new ep(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ep.parseLink(n);return U(r,"argument-error"),Io._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Ho{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ho{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return qo(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xr._fromIdTokenResponse(e,r,i),o=Gg(r);return new jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gg(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $l(e,n,r,i)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(t,s,e,r):s})}async function xP(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await wo(t,vE(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Xf(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t,e,n=!1){const r="signIn",i=await vE(t,r,e),s=await jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VP(t,e){return EE(dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eL(t,e,n){const r=dr(t),o=await yd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wE(t),l}),a=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tL(t,e,n){return VP(fe(t),rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wE(t),r})}function LP(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function MP(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function FP(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}function bP(t){return fe(t).signOut()}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(){const t=Ze();return Jf(t)||Pu(t)}const UP=1e3,jP=10;class IE extends TE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$P()&&aP(),this.fallbackToPolling=mE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IE.type="LOCAL";const BP=IE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends TE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const AE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await zP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=np("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function qP(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function HP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GP(){return CE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="firebaseLocalStorageDb",QP=1,jl="firebaseLocalStorage",PE="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function YP(){const t=indexedDB.deleteDatabase(RE);return new Ko(t).toPromise()}function _d(){const t=indexedDB.open(RE,QP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await YP(),e(await _d()))})})}async function Qg(t,e,n){const r=Nu(t,!0).put({[PE]:e,value:n});return new Ko(r).toPromise()}async function XP(t,e){const n=Nu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=Nu(t,!0).delete(e);return new Ko(n).toPromise()}const JP=800,ZP=3;class kE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(GP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HP(),!this.activeServiceWorker)return;this.sender=new WP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await Qg(e,Ul,"1"),await Yg(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nu(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kE.type="LOCAL";const ek=kE;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){return e?gn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends Zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tk(t){return EE(t.auth,new rp(t),t.bypassAuthState)}function nk(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),OP(n,new rp(t),t.bypassAuthState)}async function rk(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),xP(n,new rp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tk;case"linkViaPopup":case"linkViaRedirect":return rk;case"reauthViaPopup":case"reauthViaRedirect":return nk;default:Mt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new Wo(2e3,1e4);async function nL(t,e,n){const r=dr(t);bR(t,e,tp);const i=NE(r,n);return new Ar(r,"signInViaPopup",e,i).executeNotNull()}class Ar extends DE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ik.get())};e()}}Ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="pendingRedirect",tl=new Map;class ok extends DE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await ak(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ak(t,e){const n=ck(e),r=uk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lk(t,e){tl.set(t._key(),e)}function uk(t){return gn(t._redirectPersistence)}function ck(t){return el(sk,t.config.apiKey,t.name)}async function hk(t,e,n=!1){const r=dr(t),i=NE(r,e),o=await new ok(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=10*60*1e3;class fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yk=/^https?/;async function _k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mk(t);for(const n of e)try{if(vk(n))return}catch{}Mt(t,"unauthorized-domain")}function vk(t){const e=gd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yk.test(n))return!1;if(gk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Wo(3e4,6e4);function Jg(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wk(t){return new Promise((e,n)=>{var r,i,s;function o(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(nn(t,"network-request-failed"))},timeout:Ek.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=pP("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},yE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nl=null,e})}let nl=null;function Tk(t){return nl=nl||wk(t),nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=new Wo(5e3,15e3),Sk="__/auth/iframe",Ak="emulator/auth/iframe",Ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pk(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yf(e,Ak):`https://${t.config.authDomain}/${Sk}`,r={apiKey:e.apiKey,appName:t.name,v:ns},i=Rk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zo(r).slice(1)}`}async function kk(t){const e=await Tk(t),n=rn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Pk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ck,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},Ik.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dk=500,xk=600,Ok="_blank",Vk="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lk(t,e,n,r=Dk,i=xk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Nk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ze().toLowerCase();n&&(a=cE(u)?Ok:n),uE(u)&&(e=e||Vk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(sP(u)&&a!=="_self")return Mk(e||"",a),new Zg(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Zg(h)}function Mk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="__/auth/handler",bk="emulator/auth/handler",$k=encodeURIComponent("fac");async function ey(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:i};if(e instanceof tp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ho){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${$k}=${encodeURIComponent(l)}`:"";return`${Uk(t)}?${zo(a).slice(1)}${u}`}function Uk({config:t}){return t.emulator?Yf(t,bk):`https://${t.authDomain}/${Fk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class jk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=hk,this._overrideRedirectResult=lk}async _openPopup(e,n,r,i){var s;Sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ey(e,n,r,gd(),i);return Lk(e,o,np())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ey(e,n,r,gd(),i);return qP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kk(e),r=new fk(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mE()||Jf()||Pu()}}const Bk=jk;var ty="@firebase/auth",ny="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qk(t){an(new Wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gE(t)},u=new dP(r,i,s,l);return EP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Wt("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new zk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(ty,ny,Wk(t)),Ot(ty,ny,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=5*60,Kk=H0("authIdTokenMaxAge")||Hk;let ry=null;const Gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kk)return;const i=n==null?void 0:n.token;ry!==i&&(ry=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qk(t=Kf()){const e=ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vP(t,{popupRedirectResolver:Bk,persistence:[ek,BP,AE]}),r=H0("authTokenSyncURL");if(r){const s=Gk(r);MP(n,s,()=>s(n.currentUser)),LP(n,o=>s(o))}const i=W0("auth");return i&&wP(n,`http://${i}`),n}qk("Browser");var Yk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,ip=ip||{},j=Yk||self;function Du(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Go(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xk(t){return Object.prototype.hasOwnProperty.call(t,Qc)&&t[Qc]||(t[Qc]=++Jk)}var Qc="closure_uid_"+(1e9*Math.random()>>>0),Jk=0;function Zk(t,e,n){return t.call.apply(t.bind,arguments)}function e2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=Zk:Qe=e2,Qe.apply(null,arguments)}function Da(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function fr(){this.s=this.s,this.o=this.o}var t2=0;fr.prototype.s=!1;fr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),t2!=0)&&Xk(this)};fr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const OE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function iy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Du(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var n2=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};j.addEventListener("test",n,e),j.removeEventListener("test",n,e)}catch{}return t}();function So(t){return/^[\s\xa0]*$/.test(t)}function xu(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return xu().indexOf(t)!=-1}function op(t){return op[" "](t),t}op[" "]=function(){};function r2(t,e){var n=Q2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var i2=Xt("Opera"),zi=Xt("Trident")||Xt("MSIE"),VE=Xt("Edge"),vd=VE||zi,LE=Xt("Gecko")&&!(xu().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),s2=xu().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function ME(){var t=j.document;return t?t.documentMode:void 0}var Ed;e:{var Yc="",Xc=function(){var t=xu();if(LE)return/rv:([^\);]+)(\)|;)/.exec(t);if(VE)return/Edge\/([\d\.]+)/.exec(t);if(zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(s2)return/WebKit\/(\S+)/.exec(t);if(i2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xc&&(Yc=Xc?Xc[1]:""),zi){var Jc=ME();if(Jc!=null&&Jc>parseFloat(Yc)){Ed=String(Jc);break e}}Ed=Yc}var wd;if(j.document&&zi){var sy=ME();wd=sy||parseInt(Ed,10)||void 0}else wd=void 0;var o2=wd;function Ao(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(LE){e:{try{op(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:a2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ao.$.h.call(this)}}Oe(Ao,Ye);var a2={2:"touch",3:"pen",4:"mouse"};Ao.prototype.h=function(){Ao.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qo="closure_listenable_"+(1e6*Math.random()|0),l2=0;function u2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++l2,this.fa=this.ia=!1}function Ou(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ap(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function c2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function FE(t){const e={};for(const n in t)e[n]=t[n];return e}const oy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<oy.length;s++)n=oy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vu(t){this.src=t,this.g={},this.h=0}Vu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Id(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new u2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Td(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=OE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ou(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Id(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var lp="closure_lm_"+(1e6*Math.random()|0),Zc={};function $E(t,e,n,r,i){if(r&&r.once)return jE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$E(t,e[s],n,r,i);return null}return n=hp(n),t&&t[Qo]?t.O(e,n,Go(r)?!!r.capture:!!r,i):UE(t,e,n,!1,r,i)}function UE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Go(i)?!!i.capture:!!i,a=cp(t);if(a||(t[lp]=a=new Vu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=h2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)n2||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(zE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function h2(){function t(n){return e.call(t.src,t.listener,n)}const e=d2;return t}function jE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jE(t,e[s],n,r,i);return null}return n=hp(n),t&&t[Qo]?t.P(e,n,Go(r)?!!r.capture:!!r,i):UE(t,e,n,!0,r,i)}function BE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)BE(t,e[s],n,r,i);else r=Go(r)?!!r.capture:!!r,n=hp(n),t&&t[Qo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Id(s,n,r,i),-1<n&&(Ou(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=cp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Id(e,n,r,i)),(n=-1<t?e[t]:null)&&up(n))}function up(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qo])Td(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=cp(e))?(Td(n,t),n.h==0&&(n.src=null,e[lp]=null)):Ou(t)}}}function zE(t){return t in Zc?Zc[t]:Zc[t]="on"+t}function d2(t,e){if(t.fa)t=!0;else{e=new Ao(e,this);var n=t.listener,r=t.la||t.src;t.ia&&up(t),t=n.call(r,e)}return t}function cp(t){return t=t[lp],t instanceof Vu?t:null}var eh="__closure_events_fn_"+(1e9*Math.random()>>>0);function hp(t){return typeof t=="function"?t:(t[eh]||(t[eh]=function(e){return t.handleEvent(e)}),t[eh])}function xe(){fr.call(this),this.i=new Vu(this),this.S=this,this.J=null}Oe(xe,fr);xe.prototype[Qo]=!0;xe.prototype.removeEventListener=function(t,e,n,r){BE(this,t,e,n,r)};function Ue(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),bE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xa(o,r,!0,e)&&i}if(o=e.g=t,i=xa(o,r,!0,e)&&i,i=xa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xa(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ou(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function xa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Td(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var dp=j.JSON.stringify;class f2{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function p2(){var t=fp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class m2{constructor(){this.h=this.g=null}add(e,n){const r=WE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var WE=new f2(()=>new g2,t=>t.reset());class g2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function y2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _2(t){j.setTimeout(()=>{throw t},0)}let Co,Ro=!1,fp=new m2,qE=()=>{const t=j.Promise.resolve(void 0);Co=()=>{t.then(v2)}};var v2=()=>{for(var t;t=p2();){try{t.h.call(t.g)}catch(n){_2(n)}var e=WE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ro=!1};function Lu(t,e){xe.call(this),this.h=t||1,this.g=e||j,this.j=Qe(this.qb,this),this.l=Date.now()}Oe(Lu,xe);R=Lu.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ue(this,"tick"),this.ga&&(pp(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){Lu.$.N.call(this),pp(this),delete this.g};function mp(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function HE(t){t.g=mp(()=>{t.g=null,t.i&&(t.i=!1,HE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class E2 extends fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HE(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Po(t){fr.call(this),this.h=t,this.g={}}Oe(Po,fr);var ay=[];function KE(t,e,n,r){Array.isArray(n)||(n&&(ay[0]=n.toString()),n=ay);for(var i=0;i<n.length;i++){var s=$E(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function GE(t){ap(t.g,function(e,n){this.g.hasOwnProperty(n)&&up(e)},t),t.g={}}Po.prototype.N=function(){Po.$.N.call(this),GE(this)};Po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mu(){this.g=!0}Mu.prototype.Ea=function(){this.g=!1};function w2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function T2(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ii(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+S2(t,n)+(r?" "+r:"")})}function I2(t,e){t.info(function(){return"TIMEOUT: "+e})}Mu.prototype.info=function(){};function S2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dp(n)}catch{return e}}var ni={},ly=null;function Fu(){return ly=ly||new xe}ni.Ta="serverreachability";function QE(t){Ye.call(this,ni.Ta,t)}Oe(QE,Ye);function ko(t){const e=Fu();Ue(e,new QE(e))}ni.STAT_EVENT="statevent";function YE(t,e){Ye.call(this,ni.STAT_EVENT,t),this.stat=e}Oe(YE,Ye);function st(t){const e=Fu();Ue(e,new YE(e,t))}ni.Ua="timingevent";function XE(t,e){Ye.call(this,ni.Ua,t),this.size=e}Oe(XE,Ye);function Yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var bu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gp(){}gp.prototype.h=null;function uy(t){return t.h||(t.h=t.i())}function ZE(){}var Xo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yp(){Ye.call(this,"d")}Oe(yp,Ye);function _p(){Ye.call(this,"c")}Oe(_p,Ye);var Sd;function $u(){}Oe($u,gp);$u.prototype.g=function(){return new XMLHttpRequest};$u.prototype.i=function(){return{}};Sd=new $u;function Jo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Po(this),this.P=A2,t=vd?125:void 0,this.V=new Lu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ew}function ew(){this.i=null,this.g="",this.h=!1}var A2=45e3,tw={},Ad={};R=Jo.prototype;R.setTimeout=function(t){this.P=t};function Cd(t,e,n){t.L=1,t.A=ju(An(e)),t.u=n,t.S=!0,nw(t,null)}function nw(t,e){t.G=Date.now(),Zo(t),t.B=An(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),cw(n.i,"t",r),t.o=0,n=t.l.J,t.h=new ew,t.g=Dw(t.l,n?e:null,!t.u),0<t.O&&(t.M=new E2(Qe(t.Pa,t,t.g),t.O)),KE(t.U,t.g,"readystatechange",t.nb),e=t.I?FE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ko(),w2(t.j,t.v,t.B,t.m,t.W,t.u)}R.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||vd||this.g&&(this.h.h||this.g.ja()||fy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ko(3):ko(2)),Uu(this);var n=this.g.da();this.ca=n;t:if(rw(this)){var r=fy(this.g);t="";var i=r.length,s=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ws(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,T2(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!So(a)){var u=a;break t}}u=null}if(n=u)Ii(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rd(this,n);else{this.i=!1,this.s=3,st(12),Cr(this),Ws(this);break e}}this.S?(iw(this,c,o),vd&&this.i&&c==3&&(KE(this.U,this.V,"tick",this.mb),this.V.start())):(Ii(this.j,this.m,o,null),Rd(this,o)),c==4&&Cr(this),this.i&&!this.J&&(c==4?Rw(this.l,this):(this.i=!1,Zo(this)))}else H2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Cr(this),Ws(this)}}}catch{}finally{}};function rw(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function iw(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=C2(t,n),i==Ad){e==4&&(t.s=4,st(14),r=!1),Ii(t.j,t.m,null,"[Incomplete Response]");break}else if(i==tw){t.s=4,st(15),Ii(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ii(t.j,t.m,i,null),Rd(t,i);rw(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,st(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sp(e),e.M=!0,st(11))):(Ii(t.j,t.m,n,"[Invalid Chunked Response]"),Cr(t),Ws(t))}R.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.o<e.length&&(Uu(this),iw(this,t,e),this.i&&t!=4&&Zo(this))}};function C2(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ad:(n=Number(e.substring(n,r)),isNaN(n)?tw:(r+=1,r+n>e.length?Ad:(e=e.slice(r,r+n),t.o=r+n,e)))}R.cancel=function(){this.J=!0,Cr(this)};function Zo(t){t.Y=Date.now()+t.P,sw(t,t.P)}function sw(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Yo(Qe(t.lb,t),e)}function Uu(t){t.C&&(j.clearTimeout(t.C),t.C=null)}R.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(I2(this.j,this.B),this.L!=2&&(ko(),st(17)),Cr(this),this.s=2,Ws(this)):sw(this,this.Y-t)};function Ws(t){t.l.H==0||t.J||Rw(t.l,t)}function Cr(t){Uu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,pp(t.V),GE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Rd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pd(n.i,t))){if(!t.K&&Pd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wl(n),qu(n);else break e;Ip(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Yo(Qe(n.ib,n),6e3));if(1>=fw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Rr(n,11)}else if((t.K||n.g==t)&&Wl(n),!So(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(vp(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ie(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Nw(r,r.J?r.pa:null,r.Y),o.K){pw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Uu(a),Zo(a)),r.g=o}else Aw(r);0<n.j.length&&Hu(n)}else u[0]!="stop"&&u[0]!="close"||Rr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rr(n,7):Tp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ko(4)}catch{}}function R2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Du(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function P2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Du(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ow(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Du(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=P2(t),r=R2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var aw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function k2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Or(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Or){this.h=t.h,Bl(this,t.j),this.s=t.s,this.g=t.g,zl(this,t.m),this.l=t.l;var e=t.i,n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cy(this,n),this.o=t.o}else t&&(e=String(t).match(aw))?(this.h=!1,Bl(this,e[1]||"",!0),this.s=ks(e[2]||""),this.g=ks(e[3]||"",!0),zl(this,e[4]),this.l=ks(e[5]||"",!0),cy(this,e[6]||"",!0),this.o=ks(e[7]||"")):(this.h=!1,this.i=new No(null,this.h))}Or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,hy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,hy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?x2:D2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,V2)),t.join("")};function An(t){return new Or(t)}function Bl(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cy(t,e,n){e instanceof No?(t.i=e,L2(t.i,t.h)):(n||(e=Ns(e,O2)),t.i=new No(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function ju(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,N2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function N2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hy=/[#\/\?@]/g,D2=/[#\?:]/g,x2=/[#\?]/g,O2=/[#\?@]/g,V2=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pr(t){t.g||(t.g=new Map,t.h=0,t.i&&k2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=No.prototype;R.add=function(t,e){pr(this),this.i=null,t=is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lw(t,e){pr(t),e=is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uw(t,e){return pr(t),e=is(t,e),t.g.has(e)}R.forEach=function(t,e){pr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){pr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){pr(this);let e=[];if(typeof t=="string")uw(this,t)&&(e=e.concat(this.g.get(is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return pr(this),this.i=null,t=is(this,t),uw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cw(t,e,n){lw(t,e),0<n.length&&(t.i=null,t.g.set(is(t,e),sp(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function L2(t,e){e&&!t.j&&(pr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(lw(this,r),cw(this,i,n))},t)),t.j=e}var M2=class{constructor(t,e){this.g=t,this.map=e}};function hw(t){this.l=t||F2,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var F2=10;function dw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fw(t){return t.h?1:t.g?t.g.size:0}function Pd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vp(t,e){t.g?t.g.add(e):t.h=e}function pw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hw.prototype.cancel=function(){if(this.i=mw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return sp(t.i)}var b2=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function $2(){this.g=new b2}function U2(t,e,n){const r=n||"";try{ow(t,function(i,s){let o=i;Go(i)&&(o=dp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function j2(t,e){const n=new Mu;if(j.Image){const r=new Image;r.onload=Da(Oa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Da(Oa,n,r,"TestLoadImage: error",!1,e),r.onabort=Da(Oa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Da(Oa,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Oa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Bu(t){this.l=t.ec||null,this.j=t.ob||!1}Oe(Bu,gp);Bu.prototype.g=function(){return new zu(this.l,this.j)};Bu.prototype.i=function(t){return function(){return t}}({});function zu(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ep,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(zu,xe);var Ep=0;R=zu.prototype;R.open=function(t,e){if(this.readyState!=Ep)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Do(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=Ep};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ea(this):Do(this),this.readyState==3&&gw(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,ea(this))};R.Ya=function(t){this.g&&(this.response=t,ea(this))};R.ka=function(){this.g&&ea(this)};function ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Do(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Do(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var B2=j.JSON.parse;function pe(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yw,this.L=this.M=!1}Oe(pe,xe);var yw="",z2=/^https?$/i,W2=["POST","PUT"];R=pe.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sd.g(),this.C=this.u?uy(this.u):uy(Sd),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){dy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=OE(W2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ew(this),0<this.B&&((this.L=q2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=mp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){dy(this,s)}};function q2(t){return zi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof ip<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function dy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_w(t),Wu(t)}function _w(t){t.F||(t.F=!0,Ue(t,"complete"),Ue(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),Wu(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wu(this,!0)),pe.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?vw(this):this.kb())};R.kb=function(){vw(this)};function vw(t){if(t.h&&typeof ip<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)mp(t.La,0,t);else if(Ue(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(aw)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!z2.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var s=2<Jt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",_w(t)}}finally{Wu(t)}}}}function Wu(t,e){if(t.g){Ew(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ew(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),B2(e)}};function fy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case yw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function H2(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(So(t[r]))continue;var n=y2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}c2(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ww(t){let e="";return ap(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function wp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ww(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function _s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tw(t){this.Ga=0,this.j=[],this.l=new Mu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_s("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_s("baseRetryDelayMs",5e3,t),this.hb=_s("retryDelaySeedMs",1e4,t),this.eb=_s("forwardChannelMaxRetries",2,t),this.xa=_s("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hw(t&&t.concurrentRequestLimit),this.Ja=new $2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=Tw.prototype;R.ra=8;R.H=1;function Tp(t){if(Iw(t),t.H==3){var e=t.W++,n=An(t.I);if(ie(n,"SID",t.K),ie(n,"RID",e),ie(n,"TYPE","terminate"),ta(t,n),e=new Jo(t,t.l,e),e.L=2,e.A=ju(An(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.A,n=!0),n||(e.g=Dw(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Zo(e)}kw(t)}function qu(t){t.g&&(Sp(t),t.g.cancel(),t.g=null)}function Iw(t){qu(t),t.u&&(j.clearTimeout(t.u),t.u=null),Wl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Hu(t){if(!dw(t.i)&&!t.m){t.m=!0;var e=t.Na;Co||qE(),Ro||(Co(),Ro=!0),fp.add(e,t),t.C=0}}function K2(t,e){return fw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yo(Qe(t.Na,t,e),Pw(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Jo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=FE(s),bE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Sw(this,i,e),n=An(this.I),ie(n,"RID",t),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),ta(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ww(s)))+"&"+e:this.o&&wp(n,this.o,s)),vp(this.i,i),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",e),ie(n,"SID","null"),i.aa=!0,Cd(i,n,null)):Cd(i,n,e),this.H=2}}else this.H==3&&(t?py(this,t):this.j.length==0||dw(this.i)||py(this))};function py(t,e){var n;e?n=e.m:n=t.W++;const r=An(t.I);ie(r,"SID",t.K),ie(r,"RID",n),ie(r,"AID",t.V),ta(t,r),t.o&&t.s&&wp(r,t.o,t.s),n=new Jo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Sw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),vp(t.i,n),Cd(n,r,e)}function ta(t,e){t.na&&ap(t.na,function(n,r){ie(e,r,n)}),t.h&&ow({},function(n,r){ie(e,r,n)})}function Sw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{U2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Aw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Co||qE(),Ro||(Co(),Ro=!0),fp.add(e,t),t.A=0}}function Ip(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yo(Qe(t.Ma,t),Pw(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,Cw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Yo(Qe(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),qu(this),Cw(this))};function Sp(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Cw(t){t.g=new Jo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=An(t.wa);ie(e,"RID","rpc"),ie(e,"SID",t.K),ie(e,"AID",t.V),ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ie(e,"TO",t.qa),ie(e,"TYPE","xmlhttp"),ta(t,e),t.o&&t.s&&wp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ju(An(e)),n.u=null,n.S=!0,nw(n,t)}R.ib=function(){this.v!=null&&(this.v=null,qu(this),Ip(this),st(19))};function Wl(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Rw(t,e){var n=null;if(t.g==e){Wl(t),Sp(t),t.g=null;var r=2}else if(Pd(t.i,e))n=e.F,pw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Fu(),Ue(r,new XE(r,n)),Hu(t)}else Aw(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&K2(t,e)||r==2&&Ip(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Rr(t,5);break;case 4:Rr(t,10);break;case 3:Rr(t,6);break;default:Rr(t,2)}}}function Pw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Rr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Qe(t.pb,t);n||(n=new Or("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Bl(n,"https"),ju(n)),j2(n.toString(),r)}else st(2);t.H=0,t.h&&t.h.za(e),kw(t),Iw(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function kw(t){if(t.H=0,t.ma=[],t.h){const e=mw(t.i);(e.length!=0||t.j.length!=0)&&(iy(t.ma,e),iy(t.ma,t.j),t.i.i.length=0,sp(t.j),t.j.length=0),t.h.ya()}}function Nw(t,e,n){var r=n instanceof Or?An(n):new Or(n);if(r.g!="")e&&(r.g=e+"."+r.g),zl(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Or(null);r&&Bl(s,r),e&&(s.g=e),i&&zl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ie(r,n,e),ie(r,"VER",t.ra),ta(t,r),r}function Dw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new pe(new Bu({ob:n})):new pe(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function xw(){}R=xw.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function ql(){if(zi&&!(10<=Number(o2)))throw Error("Environmental error: no available transport.")}ql.prototype.g=function(t,e){return new St(t,e)};function St(t,e){xe.call(this),this.g=new Tw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!So(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!So(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ss(this)}Oe(St,xe);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Nw(t,null,t.Y),Hu(t)};St.prototype.close=function(){Tp(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dp(t),t=n);e.j.push(new M2(e.fb++,t)),e.H==3&&Hu(e)};St.prototype.N=function(){this.g.h=null,delete this.j,Tp(this.g),delete this.g,St.$.N.call(this)};function Ow(t){yp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(Ow,yp);function Vw(){_p.call(this),this.status=1}Oe(Vw,_p);function ss(t){this.g=t}Oe(ss,xw);ss.prototype.Ba=function(){Ue(this.g,"a")};ss.prototype.Aa=function(t){Ue(this.g,new Ow(t))};ss.prototype.za=function(t){Ue(this.g,new Vw)};ss.prototype.ya=function(){Ue(this.g,"b")};function G2(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Oe(qt,G2);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function th(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)th(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){th(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){th(this,r),i=0;break}}this.h=i,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Q2={};function Ap(t){return-128<=t&&128>t?r2(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return Oi;if(0>t)return Fe(Zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kd;return new Z(e,0)}function Lw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(Lw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),r=Oi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Zt(Math.pow(e,s)),r=r.R(s).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var kd=4294967296,Oi=Ap(0),Nd=Ap(1),my=Ap(16777216);R=Z.prototype;R.ea=function(){if(Nt(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kd+r)*e,e*=kd}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yn(this))return"0";if(Nt(this))return"-"+Fe(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,r="";;){var i=Kl(n,e).g;n=Hl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,yn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}R.X=function(t){return t=Hl(this,t),Nt(t)?-1:yn(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(Nd)}R.abs=function(){return Nt(this)?Fe(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Hl(t,e){return t.add(Fe(e))}R.R=function(t){if(yn(this)||yn(t))return Oi;if(Nt(this))return Nt(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(Nt(t))return Fe(this.R(Fe(t)));if(0>this.X(my)&&0>t.X(my))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Va(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Va(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Va(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Va(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function Va(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function vs(t,e){this.g=t,this.h=e}function Kl(t,e){if(yn(e))throw Error("division by zero");if(yn(t))return new vs(Oi,Oi);if(Nt(t))return e=Kl(Fe(t),e),new vs(Fe(e.g),Fe(e.h));if(Nt(e))return e=Kl(t,Fe(e)),new vs(Fe(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Nd,r=e;0>=r.X(t);)n=gy(n),r=gy(r);var i=ai(n,1),s=ai(r,1);for(r=ai(r,2),n=ai(n,2);!yn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ai(r,1),n=ai(n,1)}return e=Hl(t,i.R(e)),new vs(i,e)}for(i=Oi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(n),o=s.R(e);Nt(o)||0<o.X(t);)n-=r,s=Zt(n),o=s.R(e);yn(s)&&(s=Nd),i=i.add(s),t=Hl(t,o)}return new vs(i,t)}R.gb=function(t){return Kl(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function gy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function ai(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}ql.prototype.createWebChannel=ql.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;bu.NO_ERROR=0;bu.TIMEOUT=8;bu.HTTP_ERROR=6;JE.COMPLETE="complete";ZE.EventType=Xo;Xo.OPEN="a";Xo.CLOSE="b";Xo.ERROR="c";Xo.MESSAGE="d";xe.prototype.listen=xe.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Zt;Z.fromString=Lw;var Y2=function(){return new ql},X2=function(){return Fu()},nh=bu,J2=JE,Z2=ni,yy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},La=ZE,eN=pe,tN=qt,Vi=Z;const _y="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Ru("@firebase/firestore");function Es(){return Br.logLevel}function V(t,...e){if(Br.logLevel<=K.DEBUG){const n=e.map(Cp);Br.debug(`Firestore (${os}): ${t}`,...n)}}function Cn(t,...e){if(Br.logLevel<=K.ERROR){const n=e.map(Cp);Br.error(`Firestore (${os}): ${t}`,...n)}}function Wi(t,...e){if(Br.logLevel<=K.WARN){const n=e.map(Cp);Br.warn(`Firestore (${os}): ${t}`,...n)}}function Cp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function X(t,e){t||M()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class rN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iN{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new Mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Ke(e)}}class sN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.R=n.token,new aN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new Ae(0,0))}static max(){return new F(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends xo{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const cN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends xo{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return cN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}function hN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new ir(i,L.empty(),e)}function dN(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(F.min(),L.empty(),-1)}static max(){return new ir(F.max(),L.empty(),-1)}}function fN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==pN)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ra(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Rp._e=-1;function ia(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function gN(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new he(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??Me.EMPTY,this.right=s??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ey(this.data.getIterator())}getIteratorFrom(e){return new Ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new vt([])}unionWith(e){let n=new je(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $w("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const yN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(X(!!t),typeof t=="string"){let e=0;const n=yN.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kp(t){const e=t.mapValue.fields.__previous_value__;return Pp(e)?kp(e):e}function Oo(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pp(t)?4:vN(t)?9007199254740991:10:M()}function ln(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=sr(i.timestampValue),a=sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zr(i.bytesValue).isEqual(zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_e(i.doubleValue),a=_e(s.doubleValue);return o===a?Gl(o)===Gl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(vy(o)!==vy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ln(o[l],a[l])))return!1;return!0}(t,e);default:return M()}}function Lo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=_e(s.integerValue||s.doubleValue),l=_e(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return wy(t.timestampValue,e.timestampValue);case 4:return wy(Oo(t),Oo(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(s,o){const a=zr(s),l=zr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Y(a[u],l[u]);if(c!==0)return c}return Y(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Y(_e(s.latitude),_e(o.latitude));return a!==0?a:Y(_e(s.longitude),_e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Hi(a[u],l[u]);if(c)return c}return Y(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fa.mapValue&&o===Fa.mapValue)return 0;if(s===Fa.mapValue)return 1;if(o===Fa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Y(l[h],c[h]);if(d!==0)return d;const f=Hi(a[l[h]],u[c[h]]);if(f!==0)return f}return Y(l.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function wy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=sr(t),r=sr(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function Ki(t){return Dd(t)}function Dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dd(n.fields[o])}`;return i+"}"}(t.mapValue):M()}function Ty(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xd(t){return!!t&&"integerValue"in t}function Np(t){return!!t&&"arrayValue"in t}function Iy(t){return!!t&&"nullValue"in t}function Sy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rl(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rt(qs(this.value))}}function Uw(t){const e=[];return ri(t.fields,(n,r)=>{const i=new be([n]);if(rl(r)){const s=Uw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,F.min(),F.min(),F.min(),rt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ne(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Ne(e,2,n,F.min(),F.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,F.min(),F.min(),rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function Ay(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Hi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function EN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{}class Ee extends jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TN(e,n,r):n==="array-contains"?new AN(e,r):n==="in"?new CN(e,r):n==="not-in"?new RN(e,r):n==="array-contains-any"?new PN(e,r):new Ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IN(e,r):new SN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends jw{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ht(e,n)}matches(e){return Bw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Bw(t){return t.op==="and"}function zw(t){return wN(t)&&Bw(t)}function wN(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Od(t){if(t instanceof Ee)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(zw(t))return t.filters.map(e=>Od(e)).join(",");{const e=t.filters.map(n=>Od(n)).join(",");return`${t.op}(${e})`}}function Ww(t,e){return t instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ww(o,i.filters[a]),!0):!1}(t,e):void M()}function qw(t){return t instanceof Ee?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(qw).join(" ,")+"}"}(t):"Filter"}class TN extends Ee{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class IN extends Ee{constructor(e,n){super(e,"in",n),this.keys=Hw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SN extends Ee{constructor(e,n){super(e,"not-in",n),this.keys=Hw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class AN extends Ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Np(n)&&Lo(n.arrayValue,this.value)}}class CN extends Ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class RN extends Ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class PN extends Ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ry(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kN(t,e,n,r,i,s,o)}function Dp(t){const e=B(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ia(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.ce=n}return e.ce}function xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cy(t.startAt,e.startAt)&&Cy(t.endAt,e.endAt)}function Vd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function NN(t,e,n,r,i,s,o,a){return new sa(t,e,n,r,i,s,o,a)}function Ku(t){return new sa(t)}function Py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kw(t){return t.collectionGroup!==null}function Hs(t){const e=B(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new je(be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Yl(s,r))}),n.has(be.keyField().canonicalString())||e.le.push(new Yl(be.keyField(),r))}return e.le}function sn(t){const e=B(t);return e.he||(e.he=DN(e,Hs(t))),e.he}function DN(t,e){if(t.limitType==="F")return Ry(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yl(i.field,s)});const n=t.endAt?new Ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ql(t.startAt.position,t.startAt.inclusive):null;return Ry(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ld(t,e){const n=t.filters.concat([e]);return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Md(t,e,n){return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gu(t,e){return xp(sn(t),sn(e))&&t.limitType===e.limitType}function Gw(t){return`${Dp(sn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qw(i)).join(", ")}]`),ia(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ki(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ki(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Qu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Hs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Ay(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Hs(r),i)||r.endAt&&!function(o,a,l){const u=Ay(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Hs(r),i))}(t,e)}function xN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qw(t){return(e,n)=>{let r=!1;for(const i of Hs(t)){const s=ON(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ON(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Hi(l,u):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new he(L.comparator);function Rn(){return VN}const Yw=new he(L.comparator);function Ds(...t){let e=Yw;for(const n of t)e=e.insert(n.key,n);return e}function Xw(t){let e=Yw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Ks()}function Jw(){return Ks()}function Ks(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const LN=new he(L.comparator),MN=new je(L.comparator);function W(...t){let e=MN;for(const n of t)e=e.add(n);return e}const FN=new je(Y);function bN(){return FN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function e1(t){return{integerValue:""+t}}function $N(t,e){return gN(e)?e1(e):Zw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this._=void 0}}function UN(t,e,n){return t instanceof Xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pp(s)&&(s=kp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Gi?n1(t,e):t instanceof Qi?r1(t,e):function(i,s){const o=t1(i,s),a=ky(o)+ky(i.Ie);return xd(o)&&xd(i.Ie)?e1(a):Zw(i.serializer,a)}(t,e)}function jN(t,e,n){return t instanceof Gi?n1(t,e):t instanceof Qi?r1(t,e):n}function t1(t,e){return t instanceof Jl?function(r){return xd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xl extends Yu{}class Gi extends Yu{constructor(e){super(),this.elements=e}}function n1(t,e){const n=i1(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qi extends Yu{constructor(e){super(),this.elements=e}}function r1(t,e){let n=i1(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class Jl extends Yu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ky(t){return _e(t.integerValue||t.doubleValue)}function i1(t){return Np(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n){this.field=e,this.transform=n}}function BN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Gi&&i instanceof Gi||r instanceof Qi&&i instanceof Qi?qi(r.elements,i.elements,ln):r instanceof Jl&&i instanceof Jl?ln(r.Ie,i.Ie):r instanceof Xl&&i instanceof Xl}(t.transform,e.transform)}class zN{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function o1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Op(t.key,it.none()):new oa(t.key,t.data,it.none());{const n=t.data,r=rt.empty();let i=new je(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new vt(i.toArray()),it.none())}}function WN(t,e,n){t instanceof oa?function(i,s,o){const a=i.value.clone(),l=Dy(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(i,s,o){if(!il(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dy(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(a1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof oa?function(s,o,a,l){if(!il(s.precondition,o))return a;const u=s.value.clone(),c=xy(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(s,o,a,l){if(!il(s.precondition,o))return a;const u=xy(s.fieldTransforms,l,o),c=o.data;return c.setAll(a1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return il(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function qN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=t1(r.transform,i||null);s!=null&&(n===null&&(n=rt.empty()),n.set(r.field,s))}return n||null}function Ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qi(r,i,(s,o)=>BN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends Xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends Xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function a1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dy(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jN(o,a,n[i]))}return r}function xy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,UN(s,o,e))}return r}class Op extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l1 extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=o1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>Ny(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>Ny(n,r))}}class Vp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=function(){return LN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,G;function u1(t){switch(t){default:return M();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function c1(t){if(t===void 0)return Cn("GRPC error has no .code"),w.UNKNOWN;switch(t){case ye.OK:return w.OK;case ye.CANCELLED:return w.CANCELLED;case ye.UNKNOWN:return w.UNKNOWN;case ye.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ye.INTERNAL:return w.INTERNAL;case ye.UNAVAILABLE:return w.UNAVAILABLE;case ye.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ye.NOT_FOUND:return w.NOT_FOUND;case ye.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ye.ABORTED:return w.ABORTED;case ye.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ye.DATA_LOSS:return w.DATA_LOSS;default:return M()}}(G=ye||(ye={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=new Vi([4294967295,4294967295],0);function Oy(t){const e=QN().encode(t),n=new tN;return n.update(e),new Uint8Array(n.digest())}function Vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vi([n,r],0),new Vi([i,s],0)]}class Lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xs(`Invalid padding: ${n}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Vi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Vi.fromNumber(r)));return i.compare(YN)===1&&(i=new Vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Oy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Lp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Oy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ju(F.min(),i,new he(Y),Rn(),W())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class h1{constructor(e,n){this.targetId=e,this.fe=n}}class d1{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ly{constructor(){this.ge=0,this.pe=Fy(),this.ye=et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=W(),n=W(),r=W();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new aa(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Fy()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,X(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class XN{constructor(e){this.Le=e,this.ke=new Map,this.qe=Rn(),this.Qe=My(),this.Ke=new he(Y)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Vd(s))if(r===0){const o=new L(s.path);this.We(n,o,Ne.newNoDocument(o,F.min()))}else X(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=zr(r).toUint8Array()}catch(l){if(l instanceof $w)return Wi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Lp(o,i,s)}catch(l){return Wi(l instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Vd(a.target)){const l=new L(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ne.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=W();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ju(e,n,this.Ke,this.qe,r);return this.qe=Rn(),this.Qe=My(),this.Ke=new he(Y),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Ly,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new je(Y),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Ly),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function My(){return new he(L.comparator)}function Fy(){return new he(L.comparator)}const JN={asc:"ASCENDING",desc:"DESCENDING"},ZN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eD={and:"AND",or:"OR"};class tD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fd(t,e){return t.useProto3Json||ia(e)?e:{value:e}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nD(t,e){return Zl(t,e.toTimestamp())}function wt(t){return X(!!t),F.fromTimestamp(function(n){const r=sr(n);return new Ae(r.seconds,r.nanos)}(t))}function Mp(t,e){return function(r){return new se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function p1(t){const e=se.fromString(t);return X(v1(e)),e}function eu(t,e){return Mp(t.databaseId,e.path)}function Qs(t,e){const n=p1(e);if(n.get(1)!==t.databaseId.projectId)throw new D(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(m1(n))}function bd(t,e){return Mp(t.databaseId,e)}function rD(t){const e=p1(t);return e.length===4?se.emptyPath():m1(e)}function Mo(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m1(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function by(t,e,n){return{name:eu(t,e),fields:n.value.mapValue.fields}}function iD(t,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=Qs(r,i.found.name),o=wt(i.found.updateTime),a=i.found.createTime?wt(i.found.createTime):F.min(),l=new rt({mapValue:{fields:i.found.fields}});return Ne.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=Qs(r,i.missing),o=wt(i.readTime);return Ne.newNoDocument(s,o)}(t,e):M()}function sD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(X(c===void 0||typeof c=="string"),et.fromBase64String(c||"")):(X(c===void 0||c instanceof Uint8Array),et.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:c1(u.code);return new D(c,u.message||"")}(o);n=new d1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qs(t,r.document.name),s=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):F.min(),a=new rt({mapValue:{fields:r.document.fields}}),l=Ne.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new sl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qs(t,r.document),s=r.readTime?wt(r.readTime):F.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qs(t,r.document),s=r.removedTargetIds||[];n=new sl([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new GN(i,s),a=r.targetId;n=new h1(a,o)}}return n}function g1(t,e){let n;if(e instanceof oa)n={update:by(t,e.key,e.value)};else if(e instanceof Op)n={delete:eu(t,e.key)};else if(e instanceof mr)n={update:by(t,e.key,e.data),updateMask:pD(e.fieldMask)};else{if(!(e instanceof l1))return M();n={verify:eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(t,e.precondition)),n}function oD(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?wt(i.updateTime):wt(s);return o.isEqual(F.min())&&(o=wt(s)),new zN(o,i.transformResults||[])}(n,e))):[]}function aD(t,e){return{documents:[bd(t,e.path)]}}function lD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=bd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return _1(Ht.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ui(h.field),direction:hD(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Fd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function uD(t){let e=rD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=y1(h);return d instanceof Ht&&zw(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Yl(ci(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ia(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ql(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Ql(f,d)}(n.endAt)),NN(e,i,o,s,a,"F",l,u)}function cD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function y1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return Ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return Ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return Ee.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>y1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function hD(t){return JN[t]}function dD(t){return ZN[t]}function fD(t){return eD[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return be.fromServerFormat(t.fieldPath)}function _1(t){return t instanceof Ee?function(n){if(n.op==="=="){if(Sy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(Iy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(Iy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:dD(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>_1(i));return r.length===1?r[0]:{compositeFilter:{op:fD(n.op),filters:r}}}(t):M()}function pD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function v1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.ut=e}}function gD(t){const e=uD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Md(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.on=new _D}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(ir.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class _D{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Yi(0)}static Nn(){return new Yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Gs(r.mutation,i,vt.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rn();const o=Ks(),a=function(){return Ks()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof mr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Gs(c.mutation,u,c.mutation.getFieldMask(),Ae.now())):o.set(u.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new ED(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ks();let i=new he((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||vt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Jw();c.forEach(d=>{if(!s.has(d)){const f=o1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Pr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:Xw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(h,d){return new sa(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ne.newInvalidDocument(c)))});let a=Ds();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Gs(c.mutation,u,vt.empty(),Ae.now()),Qu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wt(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:gD(i.bundledQuery),readTime:wt(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.overlays=new he(L.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new he((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Pr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Pr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KN(n,r));let s=this.lr.get(n);s===void 0&&(s=W(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.hr=new je(Pe.Pr),this.Ir=new je(Pe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Pe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new L(new se([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new L(new se([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=W();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return L.comparator(e.key,n.key)||Y(e.gr,n.gr)}static Tr(e,n){return Y(e.gr,n.gr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new je(Pe.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(Y);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new L(s),0);let a=new je(Y);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.Cr=e,this.docs=function(){return new he(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fN(dN(c),r)<=0||(i.has(c.key)||Qu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CD(this)}getSize(e){return S.resolve(this.size)}}class CD extends vD{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.persistence=e,this.Fr=new as(n=>Dp(n),xp),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Fp,this.targetCount=0,this.Nr=Yi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Rp(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new RD(this),this.indexManager=new yD,this.remoteDocumentCache=function(i){return new AD(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new mD(n),this.Kr=new TD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ID,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new SD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new kD(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class kD extends mN{constructor(e){super(),this.currentSequenceNumber=e}}class bp{constructor(e){this.persistence=e,this.Gr=new Fp,this.zr=null}static jr(e){return new bp(e)}get Hr(){if(this.zr)return this.zr;throw M()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const i=L.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $p(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ND;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Es()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Es()<=K.DEBUG&&V("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Es()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):S.resolve())}zi(e,n){if(Py(n))return S.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Md(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Md(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Py(n)||i.isEqual(F.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?S.resolve(null):(Es()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.Xi(e,o,n,hN(i,-1)).next(a=>a))})}Yi(e,n){let r=new je(Qw(e));return n.forEach((i,s)=>{Qu(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Es()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",li(n)),this.Gi.getDocumentsMatchingQuery(e,n,ir.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new he(Y),this.ns=new as(s=>Dp(s),xp),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wD(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function OD(t,e,n,r){return new xD(t,e,n,r)}async function E1(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function VD(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=S.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);X(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function w1(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function LD(t,e){const n=B(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(et.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,v,m){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.qr.updateTargetData(s,f))});let l=Rn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(MD(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(F.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function MD(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function FD(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bD(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function $d(t,e,n){const r=B(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ra(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function $y(t,e,n){const r=B(t);let i=F.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=B(l),d=h.ns.get(c);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:W())).next(a=>($D(r,xN(e),a),{documents:a,ls:s})))}function $D(t,e,n){let r=t.rs.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Uy{constructor(){this.activeTargetIds=bN()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UD{constructor(){this.eo=new Uy,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function rh(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class WD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=rh(),l=this.So(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(V("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Wi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=BD[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=rh();return new Promise((o,a)=>{const l=new eN;l.setWithCredentials(!0),l.listenOnce(J2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nh.NO_ERROR:const c=l.getResponseJson();V(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case nh.TIMEOUT:V(He,`RPC '${e}' ${s} timed out`),a(new D(w.DEADLINE_EXCEEDED,"Request time out"));break;case nh.HTTP_ERROR:const h=l.getStatus();if(V(He,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const m=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(f.status);a(new D(y,f.message))}else a(new D(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(w.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(He,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V(He,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=rh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Y2(),a=X2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V(He,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new zD({co:v=>{f?V(He,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(V(He,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),V(He,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),_=(v,m,p)=>{v.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,La.EventType.OPEN,()=>{f||V(He,`RPC '${e}' stream ${i} transport opened.`)}),_(h,La.EventType.CLOSE,()=>{f||(f=!0,V(He,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),_(h,La.EventType.ERROR,v=>{f||(f=!0,Wi(He,`RPC '${e}' stream ${i} transport errored:`,v),y.Ro(new D(w.UNAVAILABLE,"The operation could not be completed")))}),_(h,La.EventType.MESSAGE,v=>{var m;if(!f){const p=v.data[0];X(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){V(He,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let C=function(H){const b=ye[H];if(b!==void 0)return c1(b)}(I),P=E.message;C===void 0&&(C=w.INTERNAL,P="Unknown error status: "+I+" with message "+E.message),f=!0,y.Ro(new D(C,P)),h.close()}else V(He,`RPC '${e}' stream ${i} received:`,p),y.Vo(p)}}),_(a,Z2.STAT_EVENT,v=>{v.stat===yy.PROXY?V(He,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===yy.NOPROXY&&V(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function ih(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){return new tD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Up(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new D(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qD extends T1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=sD(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?wt(o.readTime):F.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Mo(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Vd(l)?{documents:aD(s,l)}:{query:lD(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=f1(s,o.resumeToken);const u=Fd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=Zl(s,o.snapshotVersion.toTimestamp());const u=Fd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=cD(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Mo(this.serializer),n.removeTarget=e,this.e_(n)}}class HD extends T1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=oD(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.I_(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Mo(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>g1(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new D(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(w.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(w.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class GD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Cn(n),this.f_=!1):V("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ii(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=B(l);u.C_.add(4),await la(u),u.M_.set("Unknown"),u.C_.delete(4),await ec(u)}(this))})}),this.M_=new GD(r,i)}}async function ec(t){if(ii(t))for(const e of t.v_)await e(!0)}async function la(t){for(const e of t.v_)await e(!1)}function I1(t,e){const n=B(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),zp(n)?Bp(n):ls(n).Ho()&&jp(n,e))}function S1(t,e){const n=B(t),r=ls(n);n.D_.delete(e),r.Ho()&&A1(n,e),n.D_.size===0&&(r.Ho()?r.Zo():ii(n)&&n.M_.set("Unknown"))}function jp(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ls(t).u_(e)}function A1(t,e){t.x_.Oe(e),ls(t).c_(e)}function Bp(t){t.x_=new XN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.M_.g_()}function zp(t){return ii(t)&&!ls(t).jo()&&t.D_.size>0}function ii(t){return B(t).C_.size===0}function C1(t){t.x_=void 0}async function YD(t){t.D_.forEach((e,n)=>{jp(t,e)})}async function XD(t,e){C1(t),zp(t)?(t.M_.w_(e),Bp(t)):t.M_.set("Unknown")}async function JD(t,e,n){if(t.M_.set("Online"),e instanceof d1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tu(t,r)}else if(e instanceof sl?t.x_.$e(e):e instanceof h1?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(F.min()))try{const r=await w1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),A1(s,l);const h=new jn(c.target,l,u,c.sequenceNumber);jp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await tu(t,r)}}async function tu(t,e,n){if(!ra(e))throw e;t.C_.add(1),await la(t),t.M_.set("Offline"),n||(n=()=>w1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ec(t)})}function R1(t,e){return e().catch(n=>tu(t,n,e))}async function tc(t){const e=B(t),n=or(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ZD(e);)try{const i=await FD(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,ex(e,i)}catch(i){await tu(e,i)}P1(e)&&k1(e)}function ZD(t){return ii(t)&&t.b_.length<10}function ex(t,e){t.b_.push(e);const n=or(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function P1(t){return ii(t)&&!or(t).jo()&&t.b_.length>0}function k1(t){or(t).start()}async function tx(t){or(t).E_()}async function nx(t){const e=or(t);for(const n of t.b_)e.P_(n.mutations)}async function rx(t,e,n){const r=t.b_.shift(),i=Vp.from(r,e,n);await R1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tc(t)}async function ix(t,e){e&&or(t).h_&&await async function(r,i){if(function(o){return u1(o)&&o!==w.ABORTED}(i.code)){const s=r.b_.shift();or(r).Yo(),await R1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tc(r)}}(t,e),P1(t)&&k1(t)}async function By(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=ii(n);n.C_.add(3),await la(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ec(n)}async function sx(t,e){const n=B(t);e?(n.C_.delete(2),await ec(n)):e||(n.C_.add(2),await la(n),n.M_.set("Unknown"))}function ls(t){return t.O_||(t.O_=function(n,r,i){const s=B(n);return s.A_(),new qD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:YD.bind(null,t),Io:XD.bind(null,t),a_:JD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),zp(t)?Bp(t):t.M_.set("Unknown")):(await t.O_.stop(),C1(t))})),t.O_}function or(t){return t.N_||(t.N_=function(n,r,i){const s=B(n);return s.A_(),new HD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:tx.bind(null,t),Io:ix.bind(null,t),T_:nx.bind(null,t),I_:rx.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await tc(t)):(await t.N_.stop(),t.b_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Wp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qp(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),ra(t))return new D(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new Li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.B_=new he(L.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):M():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xi(e,n,Li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.k_=void 0,this.listeners=[]}}class ax{constructor(){this.queries=new as(e=>Gw(e),Gu),this.onlineState="Unknown",this.q_=new Set}}async function N1(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ox),i)try{s.k_=await n.onListen(r)}catch(o){const a=qp(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Hp(n)}async function D1(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lx(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Hp(n)}function ux(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hp(t){t.q_.forEach(e=>{e.next()})}class x1{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.key=e}}class V1{constructor(e){this.key=e}}class cx{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=W(),this.mutatedKeys=W(),this._a=Qw(e),this.aa=new Li(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new zy,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Qu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this._a(f,l)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,h)=>function(f,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return _(f)-_(y)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new Xi(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new zy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=W(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new V1(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new O1(r))}),n}da(e){this.ia=e.ls,this.oa=W();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Xi.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class hx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dx{constructor(e){this.key=e,this.Ra=!1}}class fx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new as(a=>Gw(a),Gu),this.fa=new Map,this.ga=new Set,this.pa=new he(L.comparator),this.ya=new Map,this.wa=new Fp,this.Sa={},this.ba=new Map,this.Da=Yi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function px(t,e){const n=Sx(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await bD(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await mx(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&I1(n.remoteStore,o)}return i}async function mx(t,e,n,r,i){t.va=(h,d,f)=>async function(_,v,m,p){let g=v.view.ca(m);g.Zi&&(g=await $y(_.localStore,v.query,!1).then(({documents:P})=>v.view.ca(P,g)));const E=p&&p.targetChanges.get(v.targetId),I=p&&p.targetMismatches.get(v.targetId)!=null,C=v.view.applyChanges(g,_.isPrimaryClient,E,I);return qy(_,v.targetId,C.Ta),C.snapshot}(t,h,d,f);const s=await $y(t.localStore,e,!0),o=new cx(e,s.ls),a=o.ca(s.documents),l=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);qy(t,n,u.Ta);const c=new hx(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function gx(t,e){const n=B(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Gu(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $d(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),S1(n.remoteStore,r.targetId),Ud(n,r.targetId)}).catch(na)):(Ud(n,r.targetId),await $d(n.localStore,r.targetId,!0))}async function yx(t,e,n){const r=Ax(t);try{const i=await function(o,a){const l=B(o),u=Ae.now(),c=a.reduce((f,y)=>f.add(y.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Rn(),_=W();return l.ss.getEntries(f,c).next(v=>{y=v,y.forEach((m,p)=>{p.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(v=>{h=v;const m=[];for(const p of a){const g=qN(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new mr(p.key,g,Uw(g.value.mapValue),it.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(v=>{d=v;const m=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,m)})}).then(()=>({batchId:d.batchId,changes:Xw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new he(Y)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ua(r,i.changes),await tc(r.remoteStore)}catch(i){const s=qp(i,"Failed to persist write");n.reject(s)}}async function L1(t,e){const n=B(t);try{const r=await LD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?X(o.Ra):i.removedDocuments.size>0&&(X(o.Ra),o.Ra=!1))}),await ua(n,r,e)}catch(r){await na(r)}}function Wy(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=B(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&Hp(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _x(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new he(L.comparator);o=o.insert(s,Ne.newNoDocument(s,F.min()));const a=W().add(s),l=new Ju(F.min(),new Map,new he(Y),o,a);await L1(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Kp(r)}else await $d(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(na)}async function vx(t,e){const n=B(t),r=e.batch.batchId;try{const i=await VD(n.localStore,e);F1(n,r,null),M1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await na(i)}}async function Ex(t,e,n){const r=B(t);try{const i=await function(o,a){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(X(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);F1(r,e,n),M1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await na(i)}}function M1(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function F1(t,e,n){const r=B(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||b1(t,r)})}function b1(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(S1(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Kp(t))}function qy(t,e,n){for(const r of n)r instanceof O1?(t.wa.addReference(r.key,e),wx(t,r)):r instanceof V1?(V("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||b1(t,r.key)):M()}function wx(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(V("SyncEngine","New document in limbo: "+n),t.ga.add(r),Kp(t))}function Kp(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new L(se.fromString(e)),r=t.Da.next();t.ya.set(r,new dx(n)),t.pa=t.pa.insert(n,r),I1(t.remoteStore,new jn(sn(Ku(n.path)),r,"TargetPurposeLimboResolution",Rp._e))}}async function ua(t,e,n){const r=B(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=$p.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=B(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(u,d=>S.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ra(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(d,_)}}}(r.localStore,s))}async function Tx(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await E1(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new D(w.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r._s)}}function Ix(t,e){const n=B(t),r=n.ya.get(e);if(r&&r.Ra)return W().add(r.key);{let i=W();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function Sx(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=L1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ix.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_x.bind(null,e),e.Va.a_=lx.bind(null,e.eventManager),e.Va.Fa=ux.bind(null,e.eventManager),e}function Ax(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ex.bind(null,e),e}class Hy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return OD(this.persistence,new DD,e.initialUser,this.serializer)}createPersistence(e){return new PD(bp.jr,this.serializer)}createSharedClientState(e){return new UD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tx.bind(null,this.syncEngine),await sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ax}()}createDatastore(e){const n=Zu(e.databaseInfo.databaseId),r=function(s){return new WD(s)}(e.databaseInfo);return function(s,o,a,l){return new KD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new QD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Wy(this.syncEngine,n,0),function(){return jy.D()?new jy:new jD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new fx(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=B(n);V("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await la(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new D(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=B(i),a=Mo(o.serializer)+"/documents",l={documents:s.map(d=>eu(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=iD(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());X(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Op(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new l1(i,this.precondition(i)))}),await async function(r,i){const s=B(r),o=Mo(s.serializer)+"/documents",a={writes:i.map(l=>g1(s.serializer,l))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=F.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new D(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(F.min())?it.exists(!1):it.updateTime(n):it.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(F.min()))throw new D(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return it.updateTime(n)}return it.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new Up(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new Rx(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!ia(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!u1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=Fw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sh(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await E1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ky(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dx(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>By(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>By(e.remoteStore,s)),t._onlineComponents=e}function Nx(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Dx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Nx(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await sh(t,new Hy)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await sh(t,new Hy);return t._offlineComponents}async function Gp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Ky(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Ky(t,new Cx))),t._onlineComponents}function xx(t){return Gp(t).then(e=>e.syncEngine)}function Ox(t){return Gp(t).then(e=>e.datastore)}async function jd(t){const e=await Gp(t),n=e.eventManager;return n.onListen=px.bind(null,e.syncEngine),n.onUnlisten=gx.bind(null,e.syncEngine),n}function Vx(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new $1({next:d=>{o.enqueueAndForget(()=>D1(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new D(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new D(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new x1(Ku(a.path),c,{includeMetadataChanges:!0,J_:!0});return N1(s,h)}(await jd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e,n){if(!n)throw new D(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lx(t,e,n,r){if(e===!0&&r===!0)throw new D(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qy(t){if(!L.isDocumentKey(t))throw new D(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yy(t){if(L.isDocumentKey(t))throw new D(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new D(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=U1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nN;switch(r.type){case"firstParty":return new oN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gy.get(n);r&&(V("ComponentProvider","Removing Datastore"),Gy.delete(n),r.terminate())}(this),Promise.resolve()}}function Mx(t,e,n,r={}){var i;const s=(t=on(t,rc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ke.MOCK_USER;else{a=mC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ke(u)}t._authCredentials=new rN(new Mw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class er extends us{constructor(e,n,r){super(e,n,Ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new L(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function oL(t,e,...n){if(t=fe(t),j1("collection","path",e),t instanceof rc){const r=se.fromString(e,...n);return Yy(r),new er(t,null,r)}{if(!(t instanceof Xe||t instanceof er))throw new D(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return Yy(r),new er(t.firestore,null,r)}}function B1(t,e,...n){if(t=fe(t),arguments.length===1&&(e=Fw.newId()),j1("doc","path",e),t instanceof rc){const r=se.fromString(e,...n);return Qy(r),new Xe(t,null,new L(r))}{if(!(t instanceof Xe||t instanceof er))throw new D(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return Qy(r),new Xe(t.firestore,t instanceof er?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Up(this,"async_queue_retry"),this.iu=()=>{const n=ih();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ih();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new vn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ra(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Wp.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&M()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Jy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class qr extends rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Fx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||W1(this),this._firestoreClient.terminate()}}function z1(t,e){const n=typeof t=="object"?t:Kf(),r=typeof t=="string"?t:e||"(default)",i=ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fC("firestore");s&&Mx(i,...s)}return i}function ic(t){return t._firestoreClient||W1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function W1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new _N(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,U1(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new kx(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hr(et.fromBase64String(e))}catch(n){throw new D(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hr(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=/^__.*__$/;class $x{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class q1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function H1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class oc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return nu(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(H1(this.Iu)&&bx.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Ux{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zu(e)}pu(e,n,r,i=!1){return new oc({Iu:e,methodName:n,gu:r,path:be.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ac(t){const e=t._freezeSettings(),n=Zu(t._databaseId);return new Ux(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yp(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Xp("Data must be an object, but it was:",o,r);const a=G1(r,o);let l,u;if(s.merge)l=new vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Bd(e,h,n);if(!o.contains(d))throw new D(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Y1(c,d)||c.push(d)}l=new vt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new $x(new rt(a),l,u)}class lc extends ca{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function K1(t,e,n){return new oc({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class jx extends ca{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=K1(this,e,!0),r=this.yu.map(s=>si(s,n)),i=new Gi(r);return new s1(e.path,i)}isEqual(e){return this===e}}class Bx extends ca{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=K1(this,e,!0),r=this.yu.map(s=>si(s,n)),i=new Qi(r);return new s1(e.path,i)}isEqual(e){return this===e}}function zx(t,e,n,r){const i=t.pu(1,e,n);Xp("Data must be an object, but it was:",i,r);const s=[],o=rt.empty();ri(r,(l,u)=>{const c=Jp(e,l,n);u=fe(u);const h=i.Ru(c);if(u instanceof lc)s.push(c);else{const d=si(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new vt(s);return new q1(o,a,i.fieldTransforms)}function Wx(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Bd(e,r,n)],l=[i];if(s.length%2!=0)throw new D(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Bd(e,s[d])),l.push(s[d+1]);const u=[],c=rt.empty();for(let d=a.length-1;d>=0;--d)if(!Y1(u,a[d])){const f=a[d];let y=l[d];y=fe(y);const _=o.Ru(f);if(y instanceof lc)u.push(f);else{const v=si(y,_);v!=null&&(u.push(f),c.set(f,v))}}const h=new vt(u);return new q1(c,h,o.fieldTransforms)}function qx(t,e,n,r=!1){return si(n,t.pu(r?4:3,e))}function si(t,e){if(Q1(t=fe(t)))return Xp("Unsupported field value:",e,t),G1(t,e);if(t instanceof ca)return function(r,i){if(!H1(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=si(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $N(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:Zl(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(i.serializer,s)}}if(r instanceof Qp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hr)return{bytesValue:f1(i.serializer,r._byteString)};if(r instanceof Xe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${nc(r)}`)}(t,e)}function G1(t,e){const n={};return bw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(r,i)=>{const s=si(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Q1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Qp||t instanceof Hr||t instanceof Xe||t instanceof ca)}function Xp(t,e,n){if(!Q1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=nc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Bd(t,e,n){if((e=fe(e))instanceof sc)return e._internalPath;if(typeof e=="string")return Jp(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hx=new RegExp("[~\\*/\\[\\]]");function Jp(t,e,n){if(e.search(Hx)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sc(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(w.INVALID_ARGUMENT,a+t+l)}function Y1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(X1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kx extends ru{data(){return super.data()}}function X1(t,e){return typeof e=="string"?Jp(t,e):e instanceof sc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zp{}class Qx extends Zp{}function aL(t,e,...n){let r=[];e instanceof Zp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof tm).length,a=s.filter(l=>l instanceof em).length;if(o>1||o>0&&a>0)throw new D(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class em extends Qx{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new em(e,n,r)}_apply(e){const n=this._parse(e);return J1(e._query,n),new us(e.firestore,e.converter,Ld(e._query,n))}_parse(e){const n=ac(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){e_(h,c);const f=[];for(const y of h)f.push(Zy(l,s,y));d={arrayValue:{values:f}}}else d=Zy(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||e_(h,c),d=qx(a,o,h,c==="in"||c==="not-in");return Ee.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class tm extends Zp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)J1(o,l),o=Ld(o,l)}(e._query,n),new us(e.firestore,e.converter,Ld(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Zy(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new D(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kw(e)&&n.indexOf("/")!==-1)throw new D(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!L.isDocumentKey(r))throw new D(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ty(t,new L(r))}if(n instanceof Xe)return Ty(t,n._key);throw new D(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function e_(t,e){if(!Array.isArray(t)||t.length===0)throw new D(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function J1(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Z1{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qp(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=sr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);X(v1(r));const i=new Vo(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Yx extends Z1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rm extends ru{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(X1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ol extends rm{data(e={}){return super.data(e)}}class Xx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Si(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ol(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Si(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Si(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Jx(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Jx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){t=on(t,Xe);const e=on(t.firestore,qr);return Vx(ic(e),t._key).then(n=>tT(e,t,n))}class im extends Z1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function lL(t,e,n){t=on(t,Xe);const r=on(t.firestore,qr),i=nm(t.converter,e,n);return eT(r,[Yp(ac(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,it.none())])}function uL(t,e){const n=on(t.firestore,qr),r=B1(t),i=nm(t.converter,e);return eT(n,[Yp(ac(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then(()=>r)}function cL(t,...e){var n,r,i;t=fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Jy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Xe)u=on(t.firestore,qr),c=Ku(t._key.path),l={next:h=>{e[o]&&e[o](tT(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=on(t,us);u=on(h.firestore,qr),c=h._query;const d=new im(u);l={next:f=>{e[o]&&e[o](new Xx(u,d,h,f))},error:e[o+1],complete:e[o+2]},Gx(t._query)}return function(d,f,y,_){const v=new $1(_),m=new x1(f,v,y);return d.asyncQueue.enqueueAndForget(async()=>N1(await jd(d),m)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>D1(await jd(d),m))}}(ic(u),c,a,l)}function eT(t,e){return function(r,i){const s=new vn;return r.asyncQueue.enqueueAndForget(async()=>yx(await xx(r),i,s)),s.promise}(ic(t),e)}function tT(t,e,n){const r=n.docs.get(e._key),i=new im(t);return new rm(t,i,e._key,r,new Si(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={maxAttempts:5};function ws(t,e){if((t=fe(t)).firestore!==e)throw new D(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ac(n)}get(n){const r=ws(n,this._firestore),i=new Yx(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return M();const o=s[0];if(o.isFoundDocument())return new ru(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ru(this._firestore,i,r._key,null,r.converter);throw M()})}set(n,r,i){const s=ws(n,this._firestore),o=nm(s.converter,r,i),a=Yp(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=ws(n,this._firestore);let a;return a=typeof(r=fe(r))=="string"||r instanceof sc?Wx(this._dataReader,"Transaction.update",o._key,r,i,s):zx(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=ws(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ws(e,this._firestore),r=new im(this._firestore);return super.get(e).then(i=>new rm(this._firestore,r,n._key,i._document,new Si(!1,!1),n.converter))}}function dL(t,e,n){t=on(t,qr);const r=Object.assign(Object.assign({},eO),n);return function(s){if(s.maxAttempts<1)throw new D(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new vn;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Ox(s);new Px(s.asyncQueue,u,a,o,l).run()}),l.promise}(ic(t),i=>e(new tO(t,i)),r)}function fL(...t){return new jx("arrayUnion",t)}function pL(...t){return new Bx("arrayRemove",t)}(function(e,n=!0){(function(i){os=i})(ns),an(new Wt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new qr(new iN(r.getProvider("auth-internal")),new lN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ot(_y,"4.4.0",e),Ot(_y,"4.4.0","esm2017")})();var nO="firebase",rO="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(nO,rO,"app");const iO=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function sO(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oO(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nT=new WeakMap,zd=new WeakMap,rT=new WeakMap,oh=new WeakMap,sm=new WeakMap;function aO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nT.set(n,t)}).catch(()=>{}),sm.set(e,t),e}function lO(t){if(zd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zd.set(t,e)}let Wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uO(t){Wd=t(Wd)}function cO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return rT.set(r,e.sort?e.sort():[e]),tr(r)}:oO().includes(t)?function(...e){return t.apply(ah(this),e),tr(nT.get(this))}:function(...e){return tr(t.apply(ah(this),e))}}function hO(t){return typeof t=="function"?cO(t):(t instanceof IDBTransaction&&lO(t),iO(t,sO())?new Proxy(t,Wd):t)}function tr(t){if(t instanceof IDBRequest)return aO(t);if(oh.has(t))return oh.get(t);const e=hO(t);return e!==t&&(oh.set(t,e),sm.set(e,t)),e}const ah=t=>sm.get(t);function dO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const fO=["get","getKey","getAll","getAllKeys","count"],pO=["put","add","delete","clear"],lh=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lh.set(e,s),s}uO(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));const iT="@firebase/installations",om="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1e4,oT=`w:${om}`,aT="FIS_v2",mO="https://firebaseinstallations.googleapis.com/v1",gO=60*60*1e3,yO="installations",_O="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kr=new ei(yO,_O,vO);function lT(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT({projectId:t}){return`${mO}/projects/${t}/installations`}function cT(t){return{token:t.token,requestStatus:2,expiresIn:wO(t.expiresIn),creationTime:Date.now()}}async function hT(t,e){const r=(await e.json()).error;return Kr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function EO(t,{refreshToken:e}){const n=dT(t);return n.append("Authorization",TO(e)),n}async function fT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wO(t){return Number(t.replace("s","000"))}function TO(t){return`${aT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uT(t),i=dT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:aT,appId:t.appId,sdkVersion:oT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:cT(u.authToken)}}else throw await hT("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=/^[cdef][\w-]{21}$/,qd="";function CO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=RO(t);return AO.test(n)?n:qd}catch{return qd}}function RO(t){return SO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Map;function gT(t,e){const n=uc(t);yT(n,e),PO(n,e)}function yT(t,e){const n=mT.get(t);if(n)for(const r of n)r(e)}function PO(t,e){const n=kO();n&&n.postMessage({key:t,fid:e}),NO()}let kr=null;function kO(){return!kr&&"BroadcastChannel"in self&&(kr=new BroadcastChannel("[Firebase] FID Change"),kr.onmessage=t=>{yT(t.data.key,t.data.fid)}),kr}function NO(){mT.size===0&&kr&&(kr.close(),kr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO="firebase-installations-database",xO=1,Gr="firebase-installations-store";let uh=null;function am(){return uh||(uh=dO(DO,xO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}})),uh}async function iu(t,e){const n=uc(t),i=(await am()).transaction(Gr,"readwrite"),s=i.objectStore(Gr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&gT(t,e.fid),e}async function _T(t){const e=uc(t),r=(await am()).transaction(Gr,"readwrite");await r.objectStore(Gr).delete(e),await r.done}async function cc(t,e){const n=uc(t),i=(await am()).transaction(Gr,"readwrite"),s=i.objectStore(Gr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&gT(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t){let e;const n=await cc(t.appConfig,r=>{const i=OO(r),s=VO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OO(t){const e=t||{fid:CO(),registrationStatus:0};return vT(e)}function VO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=LO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MO(t)}:{installationEntry:e}}async function LO(t,e){try{const n=await IO(t,e);return iu(t.appConfig,n)}catch(n){throw lT(n)&&n.customData.serverCode===409?await _T(t.appConfig):await iu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MO(t){let e=await i_(t.appConfig);for(;e.registrationStatus===1;)await pT(100),e=await i_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lm(t);return r||n}return e}function i_(t){return cc(t,e=>{if(!e)throw Kr.create("installation-not-found");return vT(e)})}function vT(t){return FO(t)?{fid:t.fid,registrationStatus:0}:t}function FO(t){return t.registrationStatus===1&&t.registrationTime+sT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO({appConfig:t,heartbeatServiceProvider:e},n){const r=$O(t,n),i=EO(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:oT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fT(()=>fetch(r,a));if(l.ok){const u=await l.json();return cT(u)}else throw await hT("Generate Auth Token",l)}function $O(t,{fid:e}){return`${uT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e=!1){let n;const r=await cc(t.appConfig,s=>{if(!ET(s))throw Kr.create("not-registered");const o=s.authToken;if(!e&&BO(o))return s;if(o.requestStatus===1)return n=UO(t,e),s;{if(!navigator.onLine)throw Kr.create("app-offline");const a=WO(s);return n=jO(t,a),a}});return n?await n:r.authToken}async function UO(t,e){let n=await s_(t.appConfig);for(;n.authToken.requestStatus===1;)await pT(100),n=await s_(t.appConfig);const r=n.authToken;return r.requestStatus===0?um(t,e):r}function s_(t){return cc(t,e=>{if(!ET(e))throw Kr.create("not-registered");const n=e.authToken;return qO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jO(t,e){try{const n=await bO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await iu(t.appConfig,r),n}catch(n){if(lT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _T(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await iu(t.appConfig,r)}throw n}}function ET(t){return t!==void 0&&t.registrationStatus===2}function BO(t){return t.requestStatus===2&&!zO(t)}function zO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gO}function WO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function qO(t){return t.requestStatus===1&&t.requestTime+sT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t){const e=t,{installationEntry:n,registrationPromise:r}=await lm(e);return r?r.catch(console.error):um(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(t,e=!1){const n=t;return await GO(n),(await um(n,e)).token}async function GO(t){const{registrationPromise:e}=await lm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){if(!t||!t.options)throw ch("App Configuration");if(!t.name)throw ch("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ch(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ch(t){return Kr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="installations",YO="installations-internal",XO=t=>{const e=t.getProvider("app").getImmediate(),n=QO(e),r=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JO=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,wT).getImmediate();return{getId:()=>HO(n),getToken:i=>KO(n,i)}};function ZO(){an(new Wt(wT,XO,"PUBLIC")),an(new Wt(YO,JO,"PRIVATE"))}ZO();Ot(iT,om);Ot(iT,om,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="analytics",eV="firebase_id",tV="origin",nV=60*1e3,rV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Ru("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new ei("analytics","Analytics",iV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t){if(!t.startsWith(cm)){const e=Tt.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function TT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function oV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function aV(t,e){const n=oV("firebase-js-sdk-policy",{createScriptURL:sV}),r=document.createElement("script"),i=`${cm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function lV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function uV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await TT(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){mt.error(a)}t("config",i,s)}async function cV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await TT(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function hV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await cV(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await uV(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){mt.error(a)}}return i}function dV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=hV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function fV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=30,mV=1e3;class gV{constructor(e={},n=mV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const IT=new gV;function yV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _V(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:yV(r)},s=rV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function vV(t,e=IT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Tt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new TV;return setTimeout(async()=>{a.abort()},n!==void 0?n:nV),ST({appId:r,apiKey:i,measurementId:s},o,a,e)}async function ST(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=IT){var s;const{appId:o,measurementId:a}=t;try{await EV(r,e)}catch(l){if(a)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await _V(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!wV(u)){if(i.deleteThrottleMetadata(o),a)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?xg(n,i.intervalMillis,pV):xg(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),mt.debug(`Calling attemptFetch again in ${c} millis`),ST(t,h,r,i)}}function EV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wV(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class TV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function IV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SV(){if(G0())try{await Q0()}catch(t){return mt.warn(Tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AV(t,e,n,r,i,s,o){var a;const l=vV(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>mt.error(f)),e.push(l);const u=SV().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);fV(s)||aV(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[tV]="firebase",d.update=!0,h!=null&&(d[eV]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e){this.app=e}_delete(){return delete Ys[this.app.options.appId],Promise.resolve()}}let Ys={},o_=[];const a_={};let hh="dataLayer",RV="gtag",l_,AT,u_=!1;function PV(){const t=[];if(K0()&&t.push("This is a browser extension environment."),vC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function kV(t,e,n){PV();const r=t.options.appId;if(!r)throw Tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(Ys[r]!=null)throw Tt.create("already-exists",{id:r});if(!u_){lV(hh);const{wrappedGtag:s,gtagCore:o}=dV(Ys,o_,a_,hh,RV);AT=s,l_=o,u_=!0}return Ys[r]=AV(t,o_,a_,e,l_,hh,n),new CV(t)}function NV(t=Kf()){t=fe(t);const e=ti(t,su);return e.isInitialized()?e.getImmediate():DV(t)}function DV(t,e={}){const n=ti(t,su);if(n.isInitialized()){const i=n.getImmediate();if(vo(e,n.getOptions()))return i;throw Tt.create("already-initialized")}return n.initialize({options:e})}function xV(t,e,n,r){t=fe(t),IV(AT,Ys[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const c_="@firebase/analytics",h_="0.10.0";function OV(){an(new Wt(su,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return kV(r,i,n)},"PUBLIC")),an(new Wt("analytics-internal",t,"PRIVATE")),Ot(c_,h_),Ot(c_,h_,"esm2017");function t(e){try{const n=e.getProvider(su).getImmediate();return{logEvent:(r,i,s)=>xV(n,r,i,s)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}OV();var VV={VITE_API_KEy:"AIzaSyBf4kMvENB5VvD1l5DaJ6gVtesrZewhr64",BASE_URL:"https://Balanss.github.io/stamps",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const LV={apiKey:VV.VITE_API_KEY,authDomain:"deal-stamps.firebaseapp.com",projectId:"deal-stamps",storageBucket:"deal-stamps.appspot.com",messagingSenderId:"928243830570",appId:"1:928243830570:web:40630495e7d7549fc19853",measurementId:"G-MKFW91R1NM"},hc=J0(LV);NV(hc);const CT=Qk(hc),mL=z1(hc);new dn;const MV=z1(hc),hm=T.createContext(),FV=({children:t})=>{const[e,n]=T.useState(null),[r,i]=T.useState(null),[s,o]=T.useState(null);return T.useEffect(()=>FP(CT,l=>{if(l){const u=B1(MV,"BusinessUsers",l.uid);Zx(u).then(c=>{if(c.exists()){const h=c.data();h&&h.email===l.email&&(n(h.name),i(h.premium),o(h.Company))}})}else n(null)}),[]),O.jsx(hm.Provider,{value:{currentUser:e,isUserPremium:r,UserCompanyName:s},children:t})};function RT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=RT(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Bn(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=RT(t))&&(r&&(r+=" "),r+=e);return r}const Xs=t=>typeof t=="number"&&!isNaN(t),Qr=t=>typeof t=="string",ht=t=>typeof t=="function",al=t=>Qr(t)||ht(t)?t:null,dh=t=>T.isValidElement(t)||Qr(t)||ht(t)||Xs(t);function bV(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function dc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d}=o;const f=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,_=T.useRef(0);return T.useLayoutEffect(()=>{const v=h.current,m=f.split(" "),p=g=>{g.target===h.current&&(v.dispatchEvent(new Event("d")),v.removeEventListener("animationend",p),v.removeEventListener("animationcancel",p),_.current===0&&g.type!=="animationcancel"&&v.classList.remove(...m))};v.classList.add(...m),v.addEventListener("animationend",p),v.addEventListener("animationcancel",p)},[]),T.useEffect(()=>{const v=h.current,m=()=>{v.removeEventListener("animationend",m),i?bV(v,c,s):c()};d||(u?m():(_.current=1,v.className+=` ${y}`,v.addEventListener("animationend",m)))},[d]),ee.createElement(ee.Fragment,null,a)}}function d_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Rt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},$a=t=>{let{theme:e,type:n,...r}=t;return ee.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},fh={info:function(t){return ee.createElement($a,{...t},ee.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ee.createElement($a,{...t},ee.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ee.createElement($a,{...t},ee.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ee.createElement($a,{...t},ee.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ee.createElement("div",{className:"Toastify__spinner"})}};function $V(t){const[,e]=T.useReducer(f=>f+1,0),[n,r]=T.useState([]),i=T.useRef(null),s=T.useRef(new Map).current,o=f=>n.indexOf(f)!==-1,a=T.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:f=>s.get(f)}).current;function l(f){let{containerId:y}=f;const{limit:_}=a.props;!_||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(f){r(y=>f==null?[]:y.filter(_=>_!==f))}function c(){const{toastContent:f,toastProps:y,staleId:_}=a.queue.shift();d(f,y,_)}function h(f,y){let{delay:_,staleId:v,...m}=y;if(!dh(f)||function(Ce){return!i.current||a.props.enableMultiContainer&&Ce.containerId!==a.props.containerId||s.has(Ce.toastId)&&Ce.updateId==null}(m))return;const{toastId:p,updateId:g,data:E}=m,{props:I}=a,C=()=>u(p),P=g==null;P&&a.count++;const k={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(Ce=>{let[tt,ze]=Ce;return ze!=null})),toastId:p,updateId:g,data:E,closeToast:C,isIn:!1,className:al(m.className||I.toastClassName),bodyClassName:al(m.bodyClassName||I.bodyClassName),progressClassName:al(m.progressClassName||I.progressClassName),autoClose:!m.isLoading&&(H=m.autoClose,b=I.autoClose,H===!1||Xs(H)&&H>0?H:b),deleteToast(){const Ce=d_(s.get(p),"removed");s.delete(p),Rt.emit(4,Ce);const tt=a.queue.length;if(a.count=p==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),tt>0){const ze=p==null?a.props.limit:1;if(tt===1||ze===1)a.displayedToast++,c();else{const un=ze>tt?tt:ze;a.displayedToast=un;for(let Ve=0;Ve<un;Ve++)c()}}else e()}};var H,b;k.iconOut=function(Ce){let{theme:tt,type:ze,isLoading:un,icon:Ve}=Ce,gt=null;const N={theme:tt,type:ze};return Ve===!1||(ht(Ve)?gt=Ve(N):T.isValidElement(Ve)?gt=T.cloneElement(Ve,N):Qr(Ve)||Xs(Ve)?gt=Ve:un?gt=fh.spinner():($=>$ in fh)(ze)&&(gt=fh[ze](N))),gt}(k),ht(m.onOpen)&&(k.onOpen=m.onOpen),ht(m.onClose)&&(k.onClose=m.onClose),k.closeButton=I.closeButton,m.closeButton===!1||dh(m.closeButton)?k.closeButton=m.closeButton:m.closeButton===!0&&(k.closeButton=!dh(I.closeButton)||I.closeButton);let Te=f;T.isValidElement(f)&&!Qr(f.type)?Te=T.cloneElement(f,{closeToast:C,toastProps:k,data:E}):ht(f)&&(Te=f({closeToast:C,toastProps:k,data:E})),I.limit&&I.limit>0&&a.count>I.limit&&P?a.queue.push({toastContent:Te,toastProps:k,staleId:v}):Xs(_)?setTimeout(()=>{d(Te,k,v)},_):d(Te,k,v)}function d(f,y,_){const{toastId:v}=y;_&&s.delete(_);const m={content:f,props:y};s.set(v,m),r(p=>[...p,v].filter(g=>g!==_)),Rt.emit(4,d_(m,m.props.updateId==null?"added":"updated"))}return T.useEffect(()=>(a.containerId=t.containerId,Rt.cancelEmit(3).on(0,h).on(1,f=>i.current&&u(f)).on(5,l).emit(2,a),()=>{s.clear(),Rt.emit(3,a)}),[]),T.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(f){const y=new Map,_=Array.from(s.values());return t.newestOnTop&&_.reverse(),_.forEach(v=>{const{position:m}=v.props;y.has(m)||y.set(m,[]),y.get(m).push(v)}),Array.from(y,v=>f(v[0],v[1]))},containerRef:i,isToastActive:o}}function f_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function p_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function UV(t){const[e,n]=T.useState(!1),[r,i]=T.useState(!1),s=T.useRef(null),o=T.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=T.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:d}=t;function f(E){if(t.draggable){E.nativeEvent.type==="touchstart"&&E.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p),document.addEventListener("touchmove",m),document.addEventListener("touchend",p);const I=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=I.getBoundingClientRect(),I.style.transition="",o.x=f_(E.nativeEvent),o.y=p_(E.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(E){if(o.boundingRect){const{top:I,bottom:C,left:P,right:k}=o.boundingRect;E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=P&&o.x<=k&&o.y>=I&&o.y<=C?v():_()}}function _(){n(!0)}function v(){n(!1)}function m(E){const I=s.current;o.canDrag&&I&&(o.didMove=!0,e&&v(),o.x=f_(E),o.y=p_(E),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,I.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",p);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();E.style.transition="transform 0.2s, opacity 0.2s",E.style.transform=`translate${t.draggableDirection}(0)`,E.style.opacity="1"}}T.useEffect(()=>{a.current=t}),T.useEffect(()=>(s.current&&s.current.addEventListener("d",_,{once:!0}),ht(t.onOpen)&&t.onOpen(T.isValidElement(t.children)&&t.children.props),()=>{const E=a.current;ht(E.onClose)&&E.onClose(T.isValidElement(E.children)&&E.children.props)}),[]),T.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",_),window.addEventListener("blur",v)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",v))}),[t.pauseOnFocusLoss]);const g={onMouseDown:f,onTouchStart:f,onMouseUp:y,onTouchEnd:y};return l&&u&&(g.onMouseEnter=v,g.onMouseLeave=_),d&&(g.onClick=E=>{h&&h(E),o.canCloseOnClick&&c()}),{playToast:_,pauseToast:v,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function PT(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return ee.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},ee.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ee.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function jV(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const f=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:f?0:1};l&&(y.transform=`scaleX(${u})`);const _=Bn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),v=ht(o)?o({rtl:c,type:i,defaultClassName:_}):Bn(_,o);return ee.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:v,style:y,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const BV=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=UV(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:d,position:f,className:y,style:_,bodyClassName:v,bodyStyle:m,progressClassName:p,progressStyle:g,updateId:E,role:I,progress:C,rtl:P,toastId:k,deleteToast:H,isIn:b,isLoading:Te,iconOut:Ce,closeOnClick:tt,theme:ze}=t,un=Bn("Toastify__toast",`Toastify__toast-theme--${ze}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":tt}),Ve=ht(y)?y({rtl:P,position:f,type:u,defaultClassName:un}):Bn(un,y),gt=!!C||!a,N={closeToast:h,type:u,theme:ze};let $=null;return s===!1||($=ht(s)?s(N):T.isValidElement(s)?T.cloneElement(s,N):PT(N)),ee.createElement(d,{isIn:b,done:H,position:f,preventExitTransition:n,nodeRef:r},ee.createElement("div",{id:k,onClick:l,className:Ve,...i,style:_,ref:r},ee.createElement("div",{...b&&{role:I},className:ht(v)?v({type:u}):Bn("Toastify__toast-body",v),style:m},Ce!=null&&ee.createElement("div",{className:Bn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Te})},Ce),ee.createElement("div",null,o)),$,ee.createElement(jV,{...E&&!gt?{key:`pb-${E}`}:{},rtl:P,theme:ze,delay:a,isRunning:e,isIn:b,closeToast:h,hide:c,type:u,style:g,className:p,controlledProgress:gt,progress:C||0})))},fc=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},zV=dc(fc("bounce",!0));dc(fc("slide",!0));dc(fc("zoom"));dc(fc("flip"));const Hd=T.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=$V(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=Bn("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return ht(s)?s({position:c,rtl:a,defaultClassName:h}):Bn(h,al(s))}return T.useEffect(()=>{e&&(e.current=r.current)},[]),ee.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const d=h.length?{...o}:{...o,pointerEvents:"none"};return ee.createElement("div",{className:u(c),style:d,key:`container-${c}`},h.map((f,y)=>{let{content:_,props:v}=f;return ee.createElement(BV,{...v,isIn:i(v.toastId),style:{...v.style,"--nth":y+1,"--len":h.length},key:`toast-${v.key}`},_)}))}))});Hd.displayName="ToastContainer",Hd.defaultProps={position:"top-right",transition:zV,autoClose:5e3,closeButton:PT,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ph,wr=new Map,Os=[],WV=1;function kT(){return""+WV++}function qV(t){return t&&(Qr(t.toastId)||Xs(t.toastId))?t.toastId:kT()}function Js(t,e){return wr.size>0?Rt.emit(0,t,e):Os.push({content:t,options:e}),e.toastId}function ou(t,e){return{...e,type:e&&e.type||t,toastId:qV(e)}}function Ua(t){return(e,n)=>Js(e,ou(t,n))}function re(t,e){return Js(t,ou("default",e))}re.loading=(t,e)=>Js(t,ou("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),re.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Qr(i)?re.loading(i,n):re.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,d)=>{if(h==null)return void re.dismiss(r);const f={type:c,...a,...n,data:d},y=Qr(h)?{render:h}:h;return r?re.update(r,{...f,...y}):re(y.render,{...f,...y}),d},u=ht(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},re.success=Ua("success"),re.info=Ua("info"),re.error=Ua("error"),re.warning=Ua("warning"),re.warn=re.warning,re.dark=(t,e)=>Js(t,ou("default",{theme:"dark",...e})),re.dismiss=t=>{wr.size>0?Rt.emit(1,t):Os=Os.filter(e=>t!=null&&e.options.toastId!==t)},re.clearWaitingQueue=function(t){return t===void 0&&(t={}),Rt.emit(5,t)},re.isActive=t=>{let e=!1;return wr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},re.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=wr.get(s||ph);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:kT()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Js(o,s)}},0)},re.done=t=>{re.update(t,{progress:1})},re.onChange=t=>(Rt.on(4,t),()=>{Rt.off(4,t)}),re.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},re.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Rt.on(2,t=>{ph=t.containerId||t,wr.set(ph,t),Os.forEach(e=>{Rt.emit(0,e.content,e.options)}),Os=[]}).on(3,t=>{wr.delete(t.containerId||t),wr.size===0&&Rt.off(0).off(1).off(5)});const NT=()=>{const t=Cu(),e=async()=>{try{await bP(CT),re.success("Logged out successfully"),t.push("/")}catch(n){console.error(n),re.error("Failed to log out")}};return O.jsxs("div",{children:[O.jsx(Hd,{}),O.jsx("button",{onClick:e,children:"Logout"})]})};function HV(){const[t,e]=T.useState(""),[n,r]=T.useState(!1),{currentUser:i,isUserPremium:s,UserCompanyName:o}=T.useContext(hm),a=Cu();T.useEffect(()=>{r(window.innerWidth<1023)},[window.innerWidth]);const l=d=>{e(d.target.value)},u=()=>{r(!n)};console.log(n);const c=()=>{a(`/profile/${i}/${o}`)},h=()=>{a("/")};return O.jsx(O.Fragment,{children:O.jsxs("div",{className:`${n?"flex flex-col gap-5 items-center justify-center bg-white-100 mb-4 text-black":"flex flex-row gap-5 items-center p-2 mb-4 justify-center bg-white-100 text-black"}`,children:[O.jsx("img",{src:b0,className:"w-18 h-16 cursor-pointer",alt:"Deal Stamps Logo",onClick:h}),O.jsx("img",{src:U0,className:`${n?"w-12 h-12  bg-black-100 p-2":"hidden"}`,onClick:u,alt:"Hamburger Menu"}),!n&&O.jsxs(O.Fragment,{children:[O.jsxs("section",{className:`${n?"flex flex-row gap-10 justify-center items-center":"flex gap-5 flex-row"}`,children:[O.jsx("input",{className:"border border-gray-400 rounded-md w-80 h-10 p-2 mt-2",type:"text",placeholder:"Search...",value:t,onChange:l}),O.jsx("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:" Emergency# "}),O.jsx("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:" Popular Ads "}),O.jsx("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:" Find ATM "})]}),O.jsx("section",{className:"ml-10",children:i===null?O.jsxs(O.Fragment,{children:[O.jsx(Vl,{to:"/signup",children:"Sign Up"}),O.jsx(Vl,{to:"/login",children:"Log In"})]}):O.jsxs(O.Fragment,{children:[O.jsx("img",{src:$0,className:"w-12 h-12 rounded-full cursor-pointer",onClick:c}),O.jsx(NT,{})]})})]})]})})}const KV="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4099%209L16.7099%202.71C16.8982%202.5217%2017.004%202.2663%2017.004%202C17.004%201.7337%2016.8982%201.47831%2016.7099%201.29C16.5216%201.1017%2016.2662%200.995911%2015.9999%200.995911C15.7336%200.995911%2015.4782%201.1017%2015.2899%201.29L8.99994%207.59L2.70994%201.29C2.52164%201.1017%202.26624%200.995911%201.99994%200.995911C1.73364%200.995911%201.47824%201.1017%201.28994%201.29C1.10164%201.47831%200.995847%201.7337%200.995847%202C0.995847%202.2663%201.10164%202.5217%201.28994%202.71L7.58994%209L1.28994%2015.29C1.19621%2015.383%201.12182%2015.4936%201.07105%2015.6154C1.02028%2015.7373%200.994141%2015.868%200.994141%2016C0.994141%2016.132%201.02028%2016.2627%201.07105%2016.3846C1.12182%2016.5064%201.19621%2016.617%201.28994%2016.71C1.3829%2016.8037%201.4935%2016.8781%201.61536%2016.9289C1.73722%2016.9797%201.86793%2017.0058%201.99994%2017.0058C2.13195%2017.0058%202.26266%2016.9797%202.38452%2016.9289C2.50638%2016.8781%202.61698%2016.8037%202.70994%2016.71L8.99994%2010.41L15.2899%2016.71C15.3829%2016.8037%2015.4935%2016.8781%2015.6154%2016.9289C15.7372%2016.9797%2015.8679%2017.0058%2015.9999%2017.0058C16.132%2017.0058%2016.2627%2016.9797%2016.3845%2016.9289C16.5064%2016.8781%2016.617%2016.8037%2016.7099%2016.71C16.8037%2016.617%2016.8781%2016.5064%2016.9288%2016.3846C16.9796%2016.2627%2017.0057%2016.132%2017.0057%2016C17.0057%2015.868%2016.9796%2015.7373%2016.9288%2015.6154C16.8781%2015.4936%2016.8037%2015.383%2016.7099%2015.29L10.4099%209Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e";function GV(){const[t,e]=T.useState(""),[n,r]=T.useState(!1),{currentUser:i,isUserPremium:s,UserCompanyName:o}=T.useContext(hm),a=Cu();T.useEffect(()=>{r(window.innerWidth<1023)},[window.innerWidth]);const l=d=>{e(d.target.value)},u=()=>{r(!n)},c=()=>{a(`/profile/${i}/${o}`)},h=()=>{a("/")};return O.jsx(O.Fragment,{children:O.jsxs("div",{className:`${n?"flex flex-row gap-5 items-center p-2 mb-4 justify-center bg-white-100 text-black":"flex flex-col gap-5 items-center justify-center bg-white-100 mb-4 text-black"}`,children:[O.jsx("img",{src:b0,className:"w-18 h-16 cursor-pointer",alt:"Deal Stamps Logo",onClick:h}),O.jsx("img",{src:n?U0:KV,className:"w-12 h-12  bg-black-100 p-2",onClick:u,alt:"Hamburger Menu"}),!n&&O.jsxs(O.Fragment,{children:[O.jsxs("section",{className:`${n?null:"flex gap-5 flex-col w-4/5 m-auto justify-center items-center"}`,children:[O.jsx("input",{className:"border border-gray-400 rounded-md  h-10 p-2 mt-2",type:"text",placeholder:"Search...",value:t,onChange:l}),O.jsx("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:" Emergency# "}),O.jsx("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:" Popular Ads "}),O.jsx("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:" Find ATM "})]}),O.jsx("section",{className:"pb-4",children:i===null?O.jsxs(O.Fragment,{children:[O.jsx(Vl,{to:"/signup",children:"Sign Up"}),O.jsx(Vl,{to:"/login",children:"Log In"})]}):O.jsxs(O.Fragment,{children:[O.jsx("img",{src:$0,className:"w-12 h-12 rounded-full cursor-pointer",onClick:c}),O.jsx(NT,{})]})})]})]})})}const QV=T.lazy(()=>Iu(()=>import("./Home-J6T-XvGZ.js"),__vite__mapDeps([]))),YV=T.lazy(()=>Iu(()=>import("./Signup-ZNEIrgYF.js"),__vite__mapDeps([]))),XV=T.lazy(()=>Iu(()=>import("./Login-ZCHzLBEk.js"),__vite__mapDeps([]))),JV=T.lazy(()=>Iu(()=>import("./ProfilePage-W3qh-Nah.js"),__vite__mapDeps([])));function ZV(){return O.jsx(O.Fragment,{children:O.jsx(FV,{children:O.jsx(nC,{children:O.jsxs(T.Suspense,{fallback:O.jsx("div",{children:"Loading..."}),children:[O.jsx("div",{className:"fixed top-0  z-[1] w-screen",children:window.innerWidth<1023?O.jsx(GV,{}):O.jsx(HV,{})}),O.jsxs(YA,{children:[O.jsx(Cs,{path:"/",element:O.jsx(QV,{})}),O.jsx(Cs,{path:"/signup",element:O.jsx(YV,{})}),O.jsx(Cs,{path:"/login",element:O.jsx(XV,{})}),O.jsx(Cs,{path:"/profile/:userid/:companyName",element:O.jsx(JV,{})})]})]})})})})}mh.createRoot(document.getElementById("root")).render(O.jsx(ZV,{}));export{pL as A,fL as B,Wt as C,Kt as F,dn as G,re as Q,ns as S,Ae as T,hm as U,Iu as _,CT as a,lL as b,eL as c,B1 as d,tL as e,MV as f,fe as g,ti as h,fC as i,O as j,Hd as k,b0 as l,Kf as m,an as n,Ot as o,mC as p,z1 as q,T as r,nL as s,uL as t,Cu as u,oL as v,aL as w,cL as x,mL as y,dL as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}