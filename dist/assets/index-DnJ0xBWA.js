(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))u(b);new MutationObserver(b=>{for(const A of b)if(A.type==="childList")for(const D of A.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&u(D)}).observe(document,{childList:!0,subtree:!0});function f(b){const A={};return b.integrity&&(A.integrity=b.integrity),b.referrerPolicy&&(A.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?A.credentials="include":b.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function u(b){if(b.ep)return;b.ep=!0;const A=f(b);fetch(b.href,A)}})();function nm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ws={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function zp(){if(Ih)return Aa;Ih=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(u,b,A){var D=null;if(A!==void 0&&(D=""+A),b.key!==void 0&&(D=""+b.key),"key"in b){A={};for(var j in b)j!=="key"&&(A[j]=b[j])}else A=b;return b=A.ref,{$$typeof:o,type:u,key:D,ref:b!==void 0?b:null,props:A}}return Aa.Fragment=c,Aa.jsx=f,Aa.jsxs=f,Aa}var Mh;function Up(){return Mh||(Mh=1,ws.exports=zp()),ws.exports}var d=Up(),Ss={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function jp(){if(qh)return ue;qh=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),z=Symbol.iterator;function oe(h){return h===null||typeof h!="object"?null:(h=z&&h[z]||h["@@iterator"],typeof h=="function"?h:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,le={};function Q(h,T,I){this.props=h,this.context=T,this.refs=le,this.updater=I||ee}Q.prototype.isReactComponent={},Q.prototype.setState=function(h,T){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,T,"setState")},Q.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function ne(){}ne.prototype=Q.prototype;function H(h,T,I){this.props=h,this.context=T,this.refs=le,this.updater=I||ee}var Z=H.prototype=new ne;Z.constructor=H,P(Z,Q.prototype),Z.isPureReactComponent=!0;var ae=Array.isArray;function Y(){}var _={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function V(h,T,I){var G=I.ref;return{$$typeof:o,type:h,key:T,ref:G!==void 0?G:null,props:I}}function X(h,T){return V(h.type,T,h.props)}function he(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function be(h){var T={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(I){return T[I]})}var ke=/\/+/g;function He(h,T){return typeof h=="object"&&h!==null&&h.key!=null?be(""+h.key):T.toString(36)}function ie(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Y,Y):(h.status="pending",h.then(function(T){h.status==="pending"&&(h.status="fulfilled",h.value=T)},function(T){h.status==="pending"&&(h.status="rejected",h.reason=T)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function S(h,T,I,G,C){var J=typeof h;(J==="undefined"||J==="boolean")&&(h=null);var se=!1;if(h===null)se=!0;else switch(J){case"bigint":case"string":case"number":se=!0;break;case"object":switch(h.$$typeof){case o:case c:se=!0;break;case B:return se=h._init,S(se(h._payload),T,I,G,C)}}if(se)return C=C(h),se=G===""?"."+He(h,0):G,ae(C)?(I="",se!=null&&(I=se.replace(ke,"$&/")+"/"),S(C,T,I,"",function(Ue){return Ue})):C!=null&&(he(C)&&(C=X(C,I+(C.key==null||h&&h.key===C.key?"":(""+C.key).replace(ke,"$&/")+"/")+se)),T.push(C)),1;se=0;var Oe=G===""?".":G+":";if(ae(h))for(var ye=0;ye<h.length;ye++)G=h[ye],J=Oe+He(G,ye),se+=S(G,T,I,J,C);else if(ye=oe(h),typeof ye=="function")for(h=ye.call(h),ye=0;!(G=h.next()).done;)G=G.value,J=Oe+He(G,ye++),se+=S(G,T,I,J,C);else if(J==="object"){if(typeof h.then=="function")return S(ie(h),T,I,G,C);throw T=String(h),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return se}function U(h,T,I){if(h==null)return h;var G=[],C=0;return S(h,G,"","",function(J){return T.call(I,J,C++)}),G}function $(h){if(h._status===-1){var T=h._result;T=T(),T.then(function(I){(h._status===0||h._status===-1)&&(h._status=1,h._result=I)},function(I){(h._status===0||h._status===-1)&&(h._status=2,h._result=I)}),h._status===-1&&(h._status=0,h._result=T)}if(h._status===1)return h._result.default;throw h._result}var me=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},Ee={map:U,forEach:function(h,T,I){U(h,function(){T.apply(this,arguments)},I)},count:function(h){var T=0;return U(h,function(){T++}),T},toArray:function(h){return U(h,function(T){return T})||[]},only:function(h){if(!he(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return ue.Activity=q,ue.Children=Ee,ue.Component=Q,ue.Fragment=f,ue.Profiler=b,ue.PureComponent=H,ue.StrictMode=u,ue.Suspense=L,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,ue.__COMPILER_RUNTIME={__proto__:null,c:function(h){return _.H.useMemoCache(h)}},ue.cache=function(h){return function(){return h.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(h,T,I){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var G=P({},h.props),C=h.key;if(T!=null)for(J in T.key!==void 0&&(C=""+T.key),T)!R.call(T,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&T.ref===void 0||(G[J]=T[J]);var J=arguments.length-2;if(J===1)G.children=I;else if(1<J){for(var se=Array(J),Oe=0;Oe<J;Oe++)se[Oe]=arguments[Oe+2];G.children=se}return V(h.type,C,G)},ue.createContext=function(h){return h={$$typeof:D,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},ue.createElement=function(h,T,I){var G,C={},J=null;if(T!=null)for(G in T.key!==void 0&&(J=""+T.key),T)R.call(T,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(C[G]=T[G]);var se=arguments.length-2;if(se===1)C.children=I;else if(1<se){for(var Oe=Array(se),ye=0;ye<se;ye++)Oe[ye]=arguments[ye+2];C.children=Oe}if(h&&h.defaultProps)for(G in se=h.defaultProps,se)C[G]===void 0&&(C[G]=se[G]);return V(h,J,C)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(h){return{$$typeof:j,render:h}},ue.isValidElement=he,ue.lazy=function(h){return{$$typeof:B,_payload:{_status:-1,_result:h},_init:$}},ue.memo=function(h,T){return{$$typeof:x,type:h,compare:T===void 0?null:T}},ue.startTransition=function(h){var T=_.T,I={};_.T=I;try{var G=h(),C=_.S;C!==null&&C(I,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Y,me)}catch(J){me(J)}finally{T!==null&&I.types!==null&&(T.types=I.types),_.T=T}},ue.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},ue.use=function(h){return _.H.use(h)},ue.useActionState=function(h,T,I){return _.H.useActionState(h,T,I)},ue.useCallback=function(h,T){return _.H.useCallback(h,T)},ue.useContext=function(h){return _.H.useContext(h)},ue.useDebugValue=function(){},ue.useDeferredValue=function(h,T){return _.H.useDeferredValue(h,T)},ue.useEffect=function(h,T){return _.H.useEffect(h,T)},ue.useEffectEvent=function(h){return _.H.useEffectEvent(h)},ue.useId=function(){return _.H.useId()},ue.useImperativeHandle=function(h,T,I){return _.H.useImperativeHandle(h,T,I)},ue.useInsertionEffect=function(h,T){return _.H.useInsertionEffect(h,T)},ue.useLayoutEffect=function(h,T){return _.H.useLayoutEffect(h,T)},ue.useMemo=function(h,T){return _.H.useMemo(h,T)},ue.useOptimistic=function(h,T){return _.H.useOptimistic(h,T)},ue.useReducer=function(h,T,I){return _.H.useReducer(h,T,I)},ue.useRef=function(h){return _.H.useRef(h)},ue.useState=function(h){return _.H.useState(h)},ue.useSyncExternalStore=function(h,T,I){return _.H.useSyncExternalStore(h,T,I)},ue.useTransition=function(){return _.H.useTransition()},ue.version="19.2.7",ue}var zh;function Ds(){return zh||(zh=1,Ss.exports=jp()),Ss.exports}var M=Ds();const Xn=nm(M);var Es={exports:{}},La={},Ts={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function Bp(){return Uh||(Uh=1,(function(o){function c(S,U){var $=S.length;S.push(U);e:for(;0<$;){var me=$-1>>>1,Ee=S[me];if(0<b(Ee,U))S[me]=U,S[$]=Ee,$=me;else break e}}function f(S){return S.length===0?null:S[0]}function u(S){if(S.length===0)return null;var U=S[0],$=S.pop();if($!==U){S[0]=$;e:for(var me=0,Ee=S.length,h=Ee>>>1;me<h;){var T=2*(me+1)-1,I=S[T],G=T+1,C=S[G];if(0>b(I,$))G<Ee&&0>b(C,I)?(S[me]=C,S[G]=$,me=G):(S[me]=I,S[T]=$,me=T);else if(G<Ee&&0>b(C,$))S[me]=C,S[G]=$,me=G;else break e}}return U}function b(S,U){var $=S.sortIndex-U.sortIndex;return $!==0?$:S.id-U.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var D=Date,j=D.now();o.unstable_now=function(){return D.now()-j}}var L=[],x=[],B=1,q=null,z=3,oe=!1,ee=!1,P=!1,le=!1,Q=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function Z(S){for(var U=f(x);U!==null;){if(U.callback===null)u(x);else if(U.startTime<=S)u(x),U.sortIndex=U.expirationTime,c(L,U);else break;U=f(x)}}function ae(S){if(P=!1,Z(S),!ee)if(f(L)!==null)ee=!0,Y||(Y=!0,be());else{var U=f(x);U!==null&&ie(ae,U.startTime-S)}}var Y=!1,_=-1,R=5,V=-1;function X(){return le?!0:!(o.unstable_now()-V<R)}function he(){if(le=!1,Y){var S=o.unstable_now();V=S;var U=!0;try{e:{ee=!1,P&&(P=!1,ne(_),_=-1),oe=!0;var $=z;try{t:{for(Z(S),q=f(L);q!==null&&!(q.expirationTime>S&&X());){var me=q.callback;if(typeof me=="function"){q.callback=null,z=q.priorityLevel;var Ee=me(q.expirationTime<=S);if(S=o.unstable_now(),typeof Ee=="function"){q.callback=Ee,Z(S),U=!0;break t}q===f(L)&&u(L),Z(S)}else u(L);q=f(L)}if(q!==null)U=!0;else{var h=f(x);h!==null&&ie(ae,h.startTime-S),U=!1}}break e}finally{q=null,z=$,oe=!1}U=void 0}}finally{U?be():Y=!1}}}var be;if(typeof H=="function")be=function(){H(he)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,He=ke.port2;ke.port1.onmessage=he,be=function(){He.postMessage(null)}}else be=function(){Q(he,0)};function ie(S,U){_=Q(function(){S(o.unstable_now())},U)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(S){S.callback=null},o.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<S?Math.floor(1e3/S):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_next=function(S){switch(z){case 1:case 2:case 3:var U=3;break;default:U=z}var $=z;z=U;try{return S()}finally{z=$}},o.unstable_requestPaint=function(){le=!0},o.unstable_runWithPriority=function(S,U){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var $=z;z=S;try{return U()}finally{z=$}},o.unstable_scheduleCallback=function(S,U,$){var me=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,S){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=$+Ee,S={id:B++,callback:U,priorityLevel:S,startTime:$,expirationTime:Ee,sortIndex:-1},$>me?(S.sortIndex=$,c(x,S),f(L)===null&&S===f(x)&&(P?(ne(_),_=-1):P=!0,ie(ae,$-me))):(S.sortIndex=Ee,c(L,S),ee||oe||(ee=!0,Y||(Y=!0,be()))),S},o.unstable_shouldYield=X,o.unstable_wrapCallback=function(S){var U=z;return function(){var $=z;z=U;try{return S.apply(this,arguments)}finally{z=$}}}})(Ns)),Ns}var jh;function Hp(){return jh||(jh=1,Ts.exports=Bp()),Ts.exports}var Cs={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function Fp(){if(Bh)return et;Bh=1;var o=Ds();function c(L){var x="https://react.dev/errors/"+L;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)x+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+L+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},b=Symbol.for("react.portal");function A(L,x,B){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:q==null?null:""+q,children:L,containerInfo:x,implementation:B}}var D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(L,x){if(L==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,et.createPortal=function(L,x){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(c(299));return A(L,x,null,B)},et.flushSync=function(L){var x=D.T,B=u.p;try{if(D.T=null,u.p=2,L)return L()}finally{D.T=x,u.p=B,u.d.f()}},et.preconnect=function(L,x){typeof L=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(L,x))},et.prefetchDNS=function(L){typeof L=="string"&&u.d.D(L)},et.preinit=function(L,x){if(typeof L=="string"&&x&&typeof x.as=="string"){var B=x.as,q=j(B,x.crossOrigin),z=typeof x.integrity=="string"?x.integrity:void 0,oe=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;B==="style"?u.d.S(L,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:q,integrity:z,fetchPriority:oe}):B==="script"&&u.d.X(L,{crossOrigin:q,integrity:z,fetchPriority:oe,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},et.preinitModule=function(L,x){if(typeof L=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var B=j(x.as,x.crossOrigin);u.d.M(L,{crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(L)},et.preload=function(L,x){if(typeof L=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var B=x.as,q=j(B,x.crossOrigin);u.d.L(L,B,{crossOrigin:q,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},et.preloadModule=function(L,x){if(typeof L=="string")if(x){var B=j(x.as,x.crossOrigin);u.d.m(L,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(L)},et.requestFormReset=function(L){u.d.r(L)},et.unstable_batchedUpdates=function(L,x){return L(x)},et.useFormState=function(L,x,B){return D.H.useFormState(L,x,B)},et.useFormStatus=function(){return D.H.useHostTransitionStatus()},et.version="19.2.7",et}var Hh;function Gp(){if(Hh)return Cs.exports;Hh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Cs.exports=Fp(),Cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Wp(){if(Fh)return La;Fh=1;var o=Hp(),c=Ds(),f=Gp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function D(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(A(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return L(a),e;if(r===i)return L(a),t;r=r.sibling}throw Error(u(188))}if(n.return!==i.return)n=a,i=r;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,i=r;break}if(s===i){l=!0,i=a,n=r;break}s=s.sibling}if(!l){for(s=r.child;s;){if(s===n){l=!0,n=r,i=a;break}if(s===i){l=!0,i=r,n=a;break}s=s.sibling}if(!l)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,z=Symbol.for("react.element"),oe=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),H=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=he&&e[he]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function He(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case Q:return"Profiler";case le:return"StrictMode";case ae:return"Suspense";case Y:return"SuspenseList";case V:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case H:return e.displayName||"Context";case ne:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:He(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}var ie=Array.isArray,S=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function h(e){return{current:e}}function T(e){0>Ee||(e.current=me[Ee],me[Ee]=null,Ee--)}function I(e,t){Ee++,me[Ee]=e.current,e.current=t}var G=h(null),C=h(null),J=h(null),se=h(null);function Oe(e,t){switch(I(J,t),I(C,e),I(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ih(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ih(t),e=ah(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(G),I(G,e)}function ye(){T(G),T(C),T(J)}function Ue(e){e.memoizedState!==null&&I(se,e);var t=G.current,n=ah(t,e.type);t!==n&&(I(C,e),I(G,n))}function An(e){C.current===e&&(T(G),T(C)),se.current===e&&(T(se),Na._currentValue=$)}var Jn,qa;function Dt(e){if(Jn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jn=t&&t[1]||"",qa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jn+e+qa}var Kn=!1;function Zn(e,t){if(!e||Kn)return"";Kn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(E){var w=E}Reflect.construct(e,[],O)}else{try{O.call()}catch(E){w=E}e.call(O.prototype)}}else{try{throw Error()}catch(E){w=E}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(E){if(E&&w&&typeof E.stack=="string")return[E.stack,w.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),l=r[0],s=r[1];if(l&&s){var m=l.split(`
`),v=s.split(`
`);for(a=i=0;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;for(;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;if(i===m.length||a===v.length)for(i=m.length-1,a=v.length-1;1<=i&&0<=a&&m[i]!==v[a];)a--;for(;1<=i&&0<=a;i--,a--)if(m[i]!==v[a]){if(i!==1||a!==1)do if(i--,a--,0>a||m[i]!==v[a]){var N=`
`+m[i].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=i&&0<=a);break}}}finally{Kn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Dt(n):""}function mm(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Zn(e.type,!1);case 11:return Zn(e.type.render,!1);case 1:return Zn(e.type,!0);case 31:return Dt("Activity");default:return""}}function Is(e){try{var t="",n=null;do t+=mm(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var rl=Object.prototype.hasOwnProperty,ll=o.unstable_scheduleCallback,ol=o.unstable_cancelCallback,fm=o.unstable_shouldYield,pm=o.unstable_requestPaint,ut=o.unstable_now,gm=o.unstable_getCurrentPriorityLevel,Ms=o.unstable_ImmediatePriority,qs=o.unstable_UserBlockingPriority,za=o.unstable_NormalPriority,xm=o.unstable_LowPriority,zs=o.unstable_IdlePriority,ym=o.log,vm=o.unstable_setDisableYieldValue,zi=null,ct=null;function nn(e){if(typeof ym=="function"&&vm(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(zi,e)}catch{}}var dt=Math.clz32?Math.clz32:Sm,bm=Math.log,wm=Math.LN2;function Sm(e){return e>>>=0,e===0?32:31-(bm(e)/wm|0)|0}var Ua=256,ja=262144,Ba=4194304;function Ln(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ha(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var s=i&134217727;return s!==0?(i=s&~r,i!==0?a=Ln(i):(l&=s,l!==0?a=Ln(l):n||(n=s&~e,n!==0&&(a=Ln(n))))):(s=i&~r,s!==0?a=Ln(s):l!==0?a=Ln(l):n||(n=i&~e,n!==0&&(a=Ln(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ui(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Em(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Us(){var e=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tm(e,t,n,i,a,r){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,m=e.expirationTimes,v=e.hiddenUpdates;for(n=l&~n;0<n;){var N=31-dt(n),O=1<<N;s[N]=0,m[N]=-1;var w=v[N];if(w!==null)for(v[N]=null,N=0;N<w.length;N++){var E=w[N];E!==null&&(E.lane&=-536870913)}n&=~O}i!==0&&js(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function js(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-dt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-dt(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Hs(e,t){var n=t&-t;return n=(n&42)!==0?1:ul(n),(n&(e.suspendedLanes|t))!==0?0:n}function ul(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fs(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:kh(e.type))}function Gs(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}var an=Math.random().toString(36).slice(2),Je="__reactFiber$"+an,nt="__reactProps$"+an,Pn="__reactContainer$"+an,dl="__reactEvents$"+an,Nm="__reactListeners$"+an,Cm="__reactHandles$"+an,Ws="__reactResources$"+an,Bi="__reactMarker$"+an;function hl(e){delete e[Je],delete e[nt],delete e[dl],delete e[Nm],delete e[Cm]}function $n(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dh(e);e!==null;){if(n=e[Je])return n;e=dh(e)}return t}e=n,n=e.parentNode}return null}function ei(e){if(e=e[Je]||e[Pn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ti(e){var t=e[Ws];return t||(t=e[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Bi]=!0}var Ys=new Set,Qs={};function _n(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(Qs[e]=t,e=0;e<t.length;e++)Ys.add(t[e])}var km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Xs={};function Om(e){return rl.call(Xs,e)?!0:rl.call(Vs,e)?!1:km.test(e)?Xs[e]=!0:(Vs[e]=!0,!1)}function Fa(e,t,n){if(Om(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ga(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ut(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ml(e){if(!e._valueTracker){var t=Js(e)?"checked":"value";e._valueTracker=Am(e,t,""+e[t])}}function Ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Js(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lm=/[\n"\\]/g;function wt(e){return e.replace(Lm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fl(e,t,n,i,a,r,l,s){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?pl(e,l,bt(t)):n!=null?pl(e,l,bt(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+bt(s):e.removeAttribute("name")}function Zs(e,t,n,i,a,r,l,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){ml(e);return}n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),ml(e)}function pl(e,t,n){t==="number"&&Wa(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ii(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ps(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function $s(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(ie(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ml(e)}function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||_m.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function tu(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&eu(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&eu(e,r,t[r])}function gl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ya(e){return Dm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var xl=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ri=null,li=null;function nu(e){var t=ei(e);if(t&&(e=t.stateNode)){var n=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[nt]||null;if(!a)throw Error(u(90));fl(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ks(i)}break e;case"textarea":Ps(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ii(e,!!n.multiple,t,!1)}}}var vl=!1;function iu(e,t,n){if(vl)return e(t,n);vl=!0;try{var i=e(t);return i}finally{if(vl=!1,(ri!==null||li!==null)&&(Rr(),ri&&(t=ri,e=li,li=ri=null,nu(t),e)))for(t=0;t<e.length;t++)nu(e[t])}}function Fi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[nt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=!1;if(Bt)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{bl=!1}var rn=null,wl=null,Qa=null;function au(){if(Qa)return Qa;var e,t=wl,n=t.length,i,a="value"in rn?rn.value:rn.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(i=1;i<=l&&t[n-i]===a[r-i];i++);return Qa=a.slice(e,1<i?1-i:void 0)}function Va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function ru(){return!1}function it(e){function t(n,i,a,r,l){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Xa:ru,this.isPropagationStopped=ru,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=it(Rn),Wi=q({},Rn,{view:0,detail:0}),Im=it(Wi),Sl,El,Yi,Ka=q({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(Sl=e.screenX-Yi.screenX,El=e.screenY-Yi.screenY):El=Sl=0,Yi=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),lu=it(Ka),Mm=q({},Ka,{dataTransfer:0}),qm=it(Mm),zm=q({},Wi,{relatedTarget:0}),Tl=it(zm),Um=q({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=it(Um),Bm=q({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=it(Bm),Fm=q({},Rn,{data:0}),ou=it(Fm),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ym[e])?!!t[e]:!1}function Nl(){return Qm}var Vm=q({},Wi,{key:function(e){if(e.key){var t=Gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=it(Vm),Jm=q({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=it(Jm),Km=q({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),Zm=it(Km),Pm=q({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$m=it(Pm),ef=q({},Ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=it(ef),nf=q({},Rn,{newState:0,oldState:0}),af=it(nf),rf=[9,13,27,32],Cl=Bt&&"CompositionEvent"in window,Qi=null;Bt&&"documentMode"in document&&(Qi=document.documentMode);var lf=Bt&&"TextEvent"in window&&!Qi,uu=Bt&&(!Cl||Qi&&8<Qi&&11>=Qi),cu=" ",du=!1;function hu(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function of(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(du=!0,cu);case"textInput":return e=t.data,e===cu&&du?null:e;default:return null}}function sf(e,t){if(oi)return e==="compositionend"||!Cl&&hu(e,t)?(e=au(),Qa=wl=rn=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uu&&t.locale!=="ko"?null:t.data;default:return null}}var uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uf[e.type]:t==="textarea"}function pu(e,t,n,i){ri?li?li.push(i):li=[i]:ri=i,t=jr(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Vi=null,Xi=null;function cf(e){Zd(e,0)}function Za(e){var t=Hi(e);if(Ks(t))return e}function gu(e,t){if(e==="change")return t}var xu=!1;if(Bt){var kl;if(Bt){var Ol="oninput"in document;if(!Ol){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),Ol=typeof yu.oninput=="function"}kl=Ol}else kl=!1;xu=kl&&(!document.documentMode||9<document.documentMode)}function vu(){Vi&&(Vi.detachEvent("onpropertychange",bu),Xi=Vi=null)}function bu(e){if(e.propertyName==="value"&&Za(Xi)){var t=[];pu(t,Xi,e,yl(e)),iu(cf,t)}}function df(e,t,n){e==="focusin"?(vu(),Vi=t,Xi=n,Vi.attachEvent("onpropertychange",bu)):e==="focusout"&&vu()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(Xi)}function mf(e,t){if(e==="click")return Za(t)}function ff(e,t){if(e==="input"||e==="change")return Za(t)}function pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:pf;function Ji(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!rl.call(t,a)||!ht(e[a],t[a]))return!1}return!0}function wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=wu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wu(n)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wa(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wa(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gf=Bt&&"documentMode"in document&&11>=document.documentMode,si=null,Ll=null,Ki=null,_l=!1;function Nu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||si==null||si!==Wa(i)||(i=si,"selectionStart"in i&&Al(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Ji(Ki,i)||(Ki=i,i=jr(Ll,"onSelect"),0<i.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=si)))}function Dn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ui={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionrun:Dn("Transition","TransitionRun"),transitionstart:Dn("Transition","TransitionStart"),transitioncancel:Dn("Transition","TransitionCancel"),transitionend:Dn("Transition","TransitionEnd")},Rl={},Cu={};Bt&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function In(e){if(Rl[e])return Rl[e];if(!ui[e])return e;var t=ui[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cu)return Rl[e]=t[n];return e}var ku=In("animationend"),Ou=In("animationiteration"),Au=In("animationstart"),xf=In("transitionrun"),yf=In("transitionstart"),vf=In("transitioncancel"),Lu=In("transitionend"),_u=new Map,Dl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dl.push("scrollEnd");function Lt(e,t){_u.set(e,t),_n(t,[e])}var Pa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],ci=0,Il=0;function $a(){for(var e=ci,t=Il=ci=0;t<e;){var n=St[t];St[t++]=null;var i=St[t];St[t++]=null;var a=St[t];St[t++]=null;var r=St[t];if(St[t++]=null,i!==null&&a!==null){var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}r!==0&&Ru(n,a,r)}}function er(e,t,n,i){St[ci++]=e,St[ci++]=t,St[ci++]=n,St[ci++]=i,Il|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ml(e,t,n,i){return er(e,t,n,i),tr(e)}function Mn(e,t){return er(e,null,null,t),tr(e)}function Ru(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-dt(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function tr(e){if(50<ya)throw ya=0,Yo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function bf(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,i){return new bf(e,t,n,i)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Du(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nr(e,t,n,i,a,r){var l=0;if(i=e,typeof e=="function")ql(e)&&(l=1);else if(typeof e=="string")l=Np(e,n,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V:return e=mt(31,n,t,a),e.elementType=V,e.lanes=r,e;case P:return qn(n.children,a,r,t);case le:l=8,a|=24;break;case Q:return e=mt(12,n,t,a|2),e.elementType=Q,e.lanes=r,e;case ae:return e=mt(13,n,t,a),e.elementType=ae,e.lanes=r,e;case Y:return e=mt(19,n,t,a),e.elementType=Y,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:l=10;break e;case ne:l=9;break e;case Z:l=11;break e;case _:l=14;break e;case R:l=16,i=null;break e}l=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=mt(l,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function qn(e,t,n,i){return e=mt(7,e,i,t),e.lanes=n,e}function zl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Iu(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function Ul(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mu=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Mu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Is(t)},Mu.set(e,t),t)}return{value:e,source:t,stack:Is(t)}}var hi=[],mi=0,ir=null,Zi=0,Tt=[],Nt=0,ln=null,It=1,Mt="";function Ft(e,t){hi[mi++]=Zi,hi[mi++]=ir,ir=e,Zi=t}function qu(e,t,n){Tt[Nt++]=It,Tt[Nt++]=Mt,Tt[Nt++]=ln,ln=e;var i=It;e=Mt;var a=32-dt(i)-1;i&=~(1<<a),n+=1;var r=32-dt(t)+a;if(30<r){var l=a-a%5;r=(i&(1<<l)-1).toString(32),i>>=l,a-=l,It=1<<32-dt(t)+a|n<<a|i,Mt=r+e}else It=1<<r|n<<a|i,Mt=e}function jl(e){e.return!==null&&(Ft(e,1),qu(e,1,0))}function Bl(e){for(;e===ir;)ir=hi[--mi],hi[mi]=null,Zi=hi[--mi],hi[mi]=null;for(;e===ln;)ln=Tt[--Nt],Tt[Nt]=null,Mt=Tt[--Nt],Tt[Nt]=null,It=Tt[--Nt],Tt[Nt]=null}function zu(e,t){Tt[Nt++]=It,Tt[Nt++]=Mt,Tt[Nt++]=ln,It=t.id,Mt=t.overflow,ln=e}var Ke=null,De=null,ve=!1,on=null,Ct=!1,Hl=Error(u(519));function sn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pi(Et(t,e)),Hl}function Uu(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[nt]=i,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<ba.length;n++)pe(ba[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Zs(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),$s(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||th(t.textContent,n)?(i.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),i.onScroll!=null&&pe("scroll",t),i.onScrollEnd!=null&&pe("scrollend",t),i.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||sn(e,!0)}function ju(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ke=Ke.return}}function fi(e){if(e!==Ke)return!1;if(!ve)return ju(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ls(e.type,e.memoizedProps)),n=!n),n&&De&&sn(e),ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));De=ch(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));De=ch(e)}else t===27?(t=De,Sn(e.type)?(e=ds,ds=null,De=e):De=t):De=Ke?Ot(e.stateNode.nextSibling):null;return!0}function zn(){De=Ke=null,ve=!1}function Fl(){var e=on;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),on=null),e}function Pi(e){on===null?on=[e]:on.push(e)}var Gl=h(null),Un=null,Gt=null;function un(e,t,n){I(Gl,t._currentValue),t._currentValue=n}function Wt(e){e._currentValue=Gl.current,T(Gl)}function Wl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Yl(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var l=a.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=a;for(var m=0;m<t.length;m++)if(s.context===t[m]){r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Wl(r.return,n,e),i||(l=null);break e}r=s.next}}else if(a.tag===18){if(l=a.return,l===null)throw Error(u(341));l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),Wl(l,n,e),l=null}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===e){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}}function pi(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var l=a.alternate;if(l===null)throw Error(u(387));if(l=l.memoizedProps,l!==null){var s=a.type;ht(a.pendingProps.value,l.value)||(e!==null?e.push(s):e=[s])}}else if(a===se.current){if(l=a.alternate,l===null)throw Error(u(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Na):e=[Na])}a=a.return}e!==null&&Yl(t,e,n,i),t.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jn(e){Un=e,Gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Bu(Un,e)}function rr(e,t){return Un===null&&jn(e),Bu(e,t)}function Bu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gt===null){if(e===null)throw Error(u(308));Gt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gt=Gt.next=t;return n}var wf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sf=o.unstable_scheduleCallback,Ef=o.unstable_NormalPriority,Fe={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ql(){return{controller:new wf,data:new Map,refCount:0}}function $i(e){e.refCount--,e.refCount===0&&Sf(Ef,function(){e.controller.abort()})}var ea=null,Vl=0,gi=0,xi=null;function Tf(e,t){if(ea===null){var n=ea=[];Vl=0,gi=Zo(),xi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Vl++,t.then(Hu,Hu),t}function Hu(){if(--Vl===0&&ea!==null){xi!==null&&(xi.status="fulfilled");var e=ea;ea=null,gi=0,xi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nf(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Fu=S.S;S.S=function(e,t){Nd=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Tf(e,t),Fu!==null&&Fu(e,t)};var Bn=h(null);function Xl(){var e=Bn.current;return e!==null?e:Re.pooledCache}function lr(e,t){t===null?I(Bn,Bn.current):I(Bn,t.pool)}function Gu(){var e=Xl();return e===null?null:{parent:Fe._currentValue,pool:e}}var yi=Error(u(460)),Jl=Error(u(474)),or=Error(u(542)),sr={then:function(){}};function Wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jt,jt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vu(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vu(e),e}throw Fn=t,yi}}function Hn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fn=n,yi):n}}var Fn=null;function Qu(){if(Fn===null)throw Error(u(459));var e=Fn;return Fn=null,e}function Vu(e){if(e===yi||e===or)throw Error(u(483))}var vi=null,ta=0;function ur(e){var t=ta;return ta+=1,vi===null&&(vi=[]),Yu(vi,e,t)}function na(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===z?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xu(e){function t(g,p){if(e){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function i(g){for(var p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function a(g,p){return g=Ht(g,p),g.index=0,g.sibling=null,g}function r(g,p,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=67108866,p):y):(g.flags|=67108866,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function s(g,p,y,k){return p===null||p.tag!==6?(p=zl(y,g.mode,k),p.return=g,p):(p=a(p,y),p.return=g,p)}function m(g,p,y,k){var te=y.type;return te===P?N(g,p,y.props.children,k,y.key):p!==null&&(p.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===R&&Hn(te)===p.type)?(p=a(p,y.props),na(p,y),p.return=g,p):(p=nr(y.type,y.key,y.props,null,g.mode,k),na(p,y),p.return=g,p)}function v(g,p,y,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ul(y,g.mode,k),p.return=g,p):(p=a(p,y.children||[]),p.return=g,p)}function N(g,p,y,k,te){return p===null||p.tag!==7?(p=qn(y,g.mode,k,te),p.return=g,p):(p=a(p,y),p.return=g,p)}function O(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=zl(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oe:return y=nr(p.type,p.key,p.props,null,g.mode,y),na(y,p),y.return=g,y;case ee:return p=Ul(p,g.mode,y),p.return=g,p;case R:return p=Hn(p),O(g,p,y)}if(ie(p)||be(p))return p=qn(p,g.mode,y,null),p.return=g,p;if(typeof p.then=="function")return O(g,ur(p),y);if(p.$$typeof===H)return O(g,rr(g,p),y);cr(g,p)}return null}function w(g,p,y,k){var te=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return te!==null?null:s(g,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oe:return y.key===te?m(g,p,y,k):null;case ee:return y.key===te?v(g,p,y,k):null;case R:return y=Hn(y),w(g,p,y,k)}if(ie(y)||be(y))return te!==null?null:N(g,p,y,k,null);if(typeof y.then=="function")return w(g,p,ur(y),k);if(y.$$typeof===H)return w(g,p,rr(g,y),k);cr(g,y)}return null}function E(g,p,y,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return g=g.get(y)||null,s(p,g,""+k,te);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oe:return g=g.get(k.key===null?y:k.key)||null,m(p,g,k,te);case ee:return g=g.get(k.key===null?y:k.key)||null,v(p,g,k,te);case R:return k=Hn(k),E(g,p,y,k,te)}if(ie(k)||be(k))return g=g.get(y)||null,N(p,g,k,te,null);if(typeof k.then=="function")return E(g,p,y,ur(k),te);if(k.$$typeof===H)return E(g,p,y,rr(p,k),te);cr(p,k)}return null}function W(g,p,y,k){for(var te=null,we=null,K=p,de=p=0,xe=null;K!==null&&de<y.length;de++){K.index>de?(xe=K,K=null):xe=K.sibling;var Se=w(g,K,y[de],k);if(Se===null){K===null&&(K=xe);break}e&&K&&Se.alternate===null&&t(g,K),p=r(Se,p,de),we===null?te=Se:we.sibling=Se,we=Se,K=xe}if(de===y.length)return n(g,K),ve&&Ft(g,de),te;if(K===null){for(;de<y.length;de++)K=O(g,y[de],k),K!==null&&(p=r(K,p,de),we===null?te=K:we.sibling=K,we=K);return ve&&Ft(g,de),te}for(K=i(K);de<y.length;de++)xe=E(K,g,de,y[de],k),xe!==null&&(e&&xe.alternate!==null&&K.delete(xe.key===null?de:xe.key),p=r(xe,p,de),we===null?te=xe:we.sibling=xe,we=xe);return e&&K.forEach(function(kn){return t(g,kn)}),ve&&Ft(g,de),te}function re(g,p,y,k){if(y==null)throw Error(u(151));for(var te=null,we=null,K=p,de=p=0,xe=null,Se=y.next();K!==null&&!Se.done;de++,Se=y.next()){K.index>de?(xe=K,K=null):xe=K.sibling;var kn=w(g,K,Se.value,k);if(kn===null){K===null&&(K=xe);break}e&&K&&kn.alternate===null&&t(g,K),p=r(kn,p,de),we===null?te=kn:we.sibling=kn,we=kn,K=xe}if(Se.done)return n(g,K),ve&&Ft(g,de),te;if(K===null){for(;!Se.done;de++,Se=y.next())Se=O(g,Se.value,k),Se!==null&&(p=r(Se,p,de),we===null?te=Se:we.sibling=Se,we=Se);return ve&&Ft(g,de),te}for(K=i(K);!Se.done;de++,Se=y.next())Se=E(K,g,de,Se.value,k),Se!==null&&(e&&Se.alternate!==null&&K.delete(Se.key===null?de:Se.key),p=r(Se,p,de),we===null?te=Se:we.sibling=Se,we=Se);return e&&K.forEach(function(qp){return t(g,qp)}),ve&&Ft(g,de),te}function _e(g,p,y,k){if(typeof y=="object"&&y!==null&&y.type===P&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oe:e:{for(var te=y.key;p!==null;){if(p.key===te){if(te=y.type,te===P){if(p.tag===7){n(g,p.sibling),k=a(p,y.props.children),k.return=g,g=k;break e}}else if(p.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===R&&Hn(te)===p.type){n(g,p.sibling),k=a(p,y.props),na(k,y),k.return=g,g=k;break e}n(g,p);break}else t(g,p);p=p.sibling}y.type===P?(k=qn(y.props.children,g.mode,k,y.key),k.return=g,g=k):(k=nr(y.type,y.key,y.props,null,g.mode,k),na(k,y),k.return=g,g=k)}return l(g);case ee:e:{for(te=y.key;p!==null;){if(p.key===te)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),k=a(p,y.children||[]),k.return=g,g=k;break e}else{n(g,p);break}else t(g,p);p=p.sibling}k=Ul(y,g.mode,k),k.return=g,g=k}return l(g);case R:return y=Hn(y),_e(g,p,y,k)}if(ie(y))return W(g,p,y,k);if(be(y)){if(te=be(y),typeof te!="function")throw Error(u(150));return y=te.call(y),re(g,p,y,k)}if(typeof y.then=="function")return _e(g,p,ur(y),k);if(y.$$typeof===H)return _e(g,p,rr(g,y),k);cr(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),k=a(p,y),k.return=g,g=k):(n(g,p),k=zl(y,g.mode,k),k.return=g,g=k),l(g)):n(g,p)}return function(g,p,y,k){try{ta=0;var te=_e(g,p,y,k);return vi=null,te}catch(K){if(K===yi||K===or)throw K;var we=mt(29,K,null,g.mode);return we.lanes=k,we.return=g,we}finally{}}}var Gn=Xu(!0),Ju=Xu(!1),cn=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Te&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=tr(e),Ru(e,null,n),t}return er(e,i,t,n),tr(e)}function ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Bs(e,n)}}function Pl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=l:r=r.next=l,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $l=!1;function aa(){if($l){var e=xi;if(e!==null)throw e}}function ra(e,t,n,i){$l=!1;var a=e.updateQueue;cn=!1;var r=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var m=s,v=m.next;m.next=null,l===null?r=v:l.next=v,l=m;var N=e.alternate;N!==null&&(N=N.updateQueue,s=N.lastBaseUpdate,s!==l&&(s===null?N.firstBaseUpdate=v:s.next=v,N.lastBaseUpdate=m))}if(r!==null){var O=a.baseState;l=0,N=v=m=null,s=r;do{var w=s.lane&-536870913,E=w!==s.lane;if(E?(ge&w)===w:(i&w)===w){w!==0&&w===gi&&($l=!0),N!==null&&(N=N.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var W=e,re=s;w=t;var _e=n;switch(re.tag){case 1:if(W=re.payload,typeof W=="function"){O=W.call(_e,O,w);break e}O=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=re.payload,w=typeof W=="function"?W.call(_e,O,w):W,w==null)break e;O=q({},O,w);break e;case 2:cn=!0}}w=s.callback,w!==null&&(e.flags|=64,E&&(e.flags|=8192),E=a.callbacks,E===null?a.callbacks=[w]:E.push(w))}else E={lane:w,tag:s.tag,payload:s.payload,callback:s.callback,next:null},N===null?(v=N=E,m=O):N=N.next=E,l|=w;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;E=s,s=E.next,E.next=null,a.lastBaseUpdate=E,a.shared.pending=null}}while(!0);N===null&&(m=O),a.baseState=m,a.firstBaseUpdate=v,a.lastBaseUpdate=N,r===null&&(a.shared.lanes=0),xn|=l,e.lanes=l,e.memoizedState=O}}function Ku(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Zu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ku(n[e],t)}var bi=h(null),dr=h(0);function Pu(e,t){e=$t,I(dr,e),I(bi,t),$t=e|t.baseLanes}function eo(){I(dr,$t),I(bi,bi.current)}function to(){$t=dr.current,T(bi),T(dr)}var ft=h(null),kt=null;function mn(e){var t=e.alternate;I(je,je.current&1),I(ft,e),kt===null&&(t===null||bi.current!==null||t.memoizedState!==null)&&(kt=e)}function no(e){I(je,je.current),I(ft,e),kt===null&&(kt=e)}function $u(e){e.tag===22?(I(je,je.current),I(ft,e),kt===null&&(kt=e)):fn()}function fn(){I(je,je.current),I(ft,ft.current)}function pt(e){T(ft),kt===e&&(kt=null),T(je)}var je=h(0);function hr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||us(n)||cs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,ce=null,Ae=null,Ge=null,mr=!1,wi=!1,Wn=!1,fr=0,la=0,Si=null,Cf=0;function qe(){throw Error(u(321))}function io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ao(e,t,n,i,a,r){return Yt=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?qc:bo,Wn=!1,r=n(i,a),Wn=!1,wi&&(r=tc(t,n,i,a)),ec(e),r}function ec(e){S.H=ua;var t=Ae!==null&&Ae.next!==null;if(Yt=0,Ge=Ae=ce=null,mr=!1,la=0,Si=null,t)throw Error(u(300));e===null||We||(e=e.dependencies,e!==null&&ar(e)&&(We=!0))}function tc(e,t,n,i){ce=e;var a=0;do{if(wi&&(Si=null),la=0,wi=!1,25<=a)throw Error(u(301));if(a+=1,Ge=Ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}S.H=zc,r=t(n,i)}while(wi);return r}function kf(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?oa(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(ce.flags|=1024),t}function ro(){var e=fr!==0;return fr=0,e}function lo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function oo(e){if(mr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mr=!1}Yt=0,Ge=Ae=ce=null,wi=!1,la=fr=0,Si=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ce.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Be(){if(Ae===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ge===null?ce.memoizedState:Ge.next;if(t!==null)Ge=t,Ae=e;else{if(e===null)throw ce.alternate===null?Error(u(467)):Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ge===null?ce.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function pr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oa(e){var t=la;return la+=1,Si===null&&(Si=[]),e=Yu(Si,e,t),t=ce,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?qc:bo),e}function gr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oa(e);if(e.$$typeof===H)return Ze(e)}throw Error(u(438,String(e)))}function so(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=pr(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=X;return t.index++,n}function Qt(e,t){return typeof t=="function"?t(e):t}function xr(e){var t=Be();return uo(t,Ae,e)}function uo(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var l=a.next;a.next=r.next,r.next=l}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var s=l=null,m=null,v=t,N=!1;do{var O=v.lane&-536870913;if(O!==v.lane?(ge&O)===O:(Yt&O)===O){var w=v.revertLane;if(w===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),O===gi&&(N=!0);else if((Yt&w)===w){v=v.next,w===gi&&(N=!0);continue}else O={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},m===null?(s=m=O,l=r):m=m.next=O,ce.lanes|=w,xn|=w;O=v.action,Wn&&n(r,O),r=v.hasEagerState?v.eagerState:n(r,O)}else w={lane:O,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},m===null?(s=m=w,l=r):m=m.next=w,ce.lanes|=O,xn|=O;v=v.next}while(v!==null&&v!==t);if(m===null?l=r:m.next=s,!ht(r,e.memoizedState)&&(We=!0,N&&(n=xi,n!==null)))throw n;e.memoizedState=r,e.baseState=l,e.baseQueue=m,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function co(e){var t=Be(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do r=e(r,l.action),l=l.next;while(l!==a);ht(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function nc(e,t,n){var i=ce,a=Be(),r=ve;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var l=!ht((Ae||a).memoizedState,n);if(l&&(a.memoizedState=n,We=!0),a=a.queue,fo(rc.bind(null,i,a,e),[e]),a.getSnapshot!==t||l||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Ei(9,{destroy:void 0},ac.bind(null,i,a,n,t),null),Re===null)throw Error(u(349));r||(Yt&127)!==0||ic(i,t,n)}return n}function ic(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=pr(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ac(e,t,n,i){t.value=n,t.getSnapshot=i,lc(t)&&oc(e)}function rc(e,t,n){return n(function(){lc(t)&&oc(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function oc(e){var t=Mn(e,2);t!==null&&st(t,e,2)}function ho(e){var t=tt();if(typeof e=="function"){var n=e;if(e=n(),Wn){nn(!0);try{n()}finally{nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function sc(e,t,n,i){return e.baseState=n,uo(e,Ae,typeof i=="function"?i:Qt)}function Of(e,t,n,i,a){if(br(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};S.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,uc(t,r)):(r.next=n.next,t.pending=n.next=r)}}function uc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=S.T,l={};S.T=l;try{var s=n(a,i),m=S.S;m!==null&&m(l,s),cc(e,t,s)}catch(v){mo(e,t,v)}finally{r!==null&&l.types!==null&&(r.types=l.types),S.T=r}}else try{r=n(a,i),cc(e,t,r)}catch(v){mo(e,t,v)}}function cc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){dc(e,t,i)},function(i){return mo(e,t,i)}):dc(e,t,n)}function dc(e,t,n){t.status="fulfilled",t.value=n,hc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,uc(e,n)))}function mo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,hc(t),t=t.next;while(t!==i)}e.action=null}function hc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mc(e,t){return t}function fc(e,t){if(ve){var n=Re.formState;if(n!==null){e:{var i=ce;if(ve){if(De){t:{for(var a=De,r=Ct;a.nodeType!==8;){if(!r){a=null;break t}if(a=Ot(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){De=Ot(a.nextSibling),i=a.data==="F!";break e}}sn(i)}i=!1}i&&(t=n[0])}}return n=tt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:t},n.queue=i,n=Dc.bind(null,ce,i),i.dispatch=n,i=ho(!1),r=vo.bind(null,ce,!1,i.queue),i=tt(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Of.bind(null,ce,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function pc(e){var t=Be();return gc(t,Ae,e)}function gc(e,t,n){if(t=uo(e,t,mc)[0],e=xr(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=oa(t)}catch(l){throw l===yi?or:l}else i=t;t=Be();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,Ei(9,{destroy:void 0},Af.bind(null,a,n),null)),[i,r,e]}function Af(e,t){e.action=t}function xc(e){var t=Be(),n=Ae;if(n!==null)return gc(t,n,e);Be(),t=t.memoizedState,n=Be();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ei(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ce.updateQueue,t===null&&(t=pr(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function yc(){return Be().memoizedState}function yr(e,t,n,i){var a=tt();ce.flags|=e,a.memoizedState=Ei(1|t,{destroy:void 0},n,i===void 0?null:i)}function vr(e,t,n,i){var a=Be();i=i===void 0?null:i;var r=a.memoizedState.inst;Ae!==null&&i!==null&&io(i,Ae.memoizedState.deps)?a.memoizedState=Ei(t,r,n,i):(ce.flags|=e,a.memoizedState=Ei(1|t,r,n,i))}function vc(e,t){yr(8390656,8,e,t)}function fo(e,t){vr(2048,8,e,t)}function Lf(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=pr(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bc(e){var t=Be().memoizedState;return Lf({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function wc(e,t){return vr(4,2,e,t)}function Sc(e,t){return vr(4,4,e,t)}function Ec(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tc(e,t,n){n=n!=null?n.concat([e]):null,vr(4,4,Ec.bind(null,t,e),n)}function po(){}function Nc(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&io(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&io(t,i[1]))return i[0];if(i=e(),Wn){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[i,t],i}function go(e,t,n){return n===void 0||(Yt&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=kd(),ce.lanes|=e,xn|=e,n)}function kc(e,t,n,i){return ht(n,t)?n:bi.current!==null?(e=go(e,n,i),ht(e,t)||(We=!0),e):(Yt&42)===0||(Yt&1073741824)!==0&&(ge&261930)===0?(We=!0,e.memoizedState=n):(e=kd(),ce.lanes|=e,xn|=e,t)}function Oc(e,t,n,i,a){var r=U.p;U.p=r!==0&&8>r?r:8;var l=S.T,s={};S.T=s,vo(e,!1,t,n);try{var m=a(),v=S.S;if(v!==null&&v(s,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=Nf(m,i);sa(e,t,N,yt(e))}else sa(e,t,i,yt(e))}catch(O){sa(e,t,{then:function(){},status:"rejected",reason:O},yt())}finally{U.p=r,l!==null&&s.types!==null&&(l.types=s.types),S.T=l}}function _f(){}function xo(e,t,n,i){if(e.tag!==5)throw Error(u(476));var a=Ac(e).queue;Oc(e,a,t,$,n===null?_f:function(){return Lc(e),n(i)})}function Ac(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lc(e){var t=Ac(e);t.next===null&&(t=e.alternate.memoizedState),sa(e,t.next.queue,{},yt())}function yo(){return Ze(Na)}function _c(){return Be().memoizedState}function Rc(){return Be().memoizedState}function Rf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=dn(n);var i=hn(t,e,n);i!==null&&(st(i,t,n),ia(i,t,n)),t={cache:Ql()},e.payload=t;return}t=t.return}}function Df(e,t,n){var i=yt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},br(e)?Ic(t,n):(n=Ml(e,t,n,i),n!==null&&(st(n,e,i),Mc(n,t,i)))}function Dc(e,t,n){var i=yt();sa(e,t,n,i)}function sa(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(br(e))Ic(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,s=r(l,n);if(a.hasEagerState=!0,a.eagerState=s,ht(s,l))return er(e,t,a,0),Re===null&&$a(),!1}catch{}finally{}if(n=Ml(e,t,a,i),n!==null)return st(n,e,i),Mc(n,t,i),!0}return!1}function vo(e,t,n,i){if(i={lane:2,revertLane:Zo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},br(e)){if(t)throw Error(u(479))}else t=Ml(e,n,i,2),t!==null&&st(t,e,2)}function br(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Ic(e,t){wi=mr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mc(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Bs(e,n)}}var ua={readContext:Ze,use:gr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};ua.useEffectEvent=qe;var qc={readContext:Ze,use:gr,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:vc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yr(4194308,4,Ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yr(4194308,4,e,t)},useInsertionEffect:function(e,t){yr(4,2,e,t)},useMemo:function(e,t){var n=tt();t=t===void 0?null:t;var i=e();if(Wn){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=tt();if(n!==void 0){var a=n(t);if(Wn){nn(!0);try{n(t)}finally{nn(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Df.bind(null,ce,e),[i.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=ho(e);var t=e.queue,n=Dc.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:po,useDeferredValue:function(e,t){var n=tt();return go(n,e,t)},useTransition:function(){var e=ho(!1);return e=Oc.bind(null,ce,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ce,a=tt();if(ve){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Re===null)throw Error(u(349));(ge&127)!==0||ic(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,vc(rc.bind(null,i,r,e),[e]),i.flags|=2048,Ei(9,{destroy:void 0},ac.bind(null,i,r,n,t),null),n},useId:function(){var e=tt(),t=Re.identifierPrefix;if(ve){var n=Mt,i=It;n=(i&~(1<<32-dt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Cf++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yo,useFormState:fc,useActionState:fc,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=vo.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:so,useCacheRefresh:function(){return tt().memoizedState=Rf.bind(null,ce)},useEffectEvent:function(e){var t=tt(),n={impl:e};return t.memoizedState=n,function(){if((Te&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},bo={readContext:Ze,use:gr,useCallback:Nc,useContext:Ze,useEffect:fo,useImperativeHandle:Tc,useInsertionEffect:wc,useLayoutEffect:Sc,useMemo:Cc,useReducer:xr,useRef:yc,useState:function(){return xr(Qt)},useDebugValue:po,useDeferredValue:function(e,t){var n=Be();return kc(n,Ae.memoizedState,e,t)},useTransition:function(){var e=xr(Qt)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:oa(e),t]},useSyncExternalStore:nc,useId:_c,useHostTransitionStatus:yo,useFormState:pc,useActionState:pc,useOptimistic:function(e,t){var n=Be();return sc(n,Ae,e,t)},useMemoCache:so,useCacheRefresh:Rc};bo.useEffectEvent=bc;var zc={readContext:Ze,use:gr,useCallback:Nc,useContext:Ze,useEffect:fo,useImperativeHandle:Tc,useInsertionEffect:wc,useLayoutEffect:Sc,useMemo:Cc,useReducer:co,useRef:yc,useState:function(){return co(Qt)},useDebugValue:po,useDeferredValue:function(e,t){var n=Be();return Ae===null?go(n,e,t):kc(n,Ae.memoizedState,e,t)},useTransition:function(){var e=co(Qt)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:oa(e),t]},useSyncExternalStore:nc,useId:_c,useHostTransitionStatus:yo,useFormState:xc,useActionState:xc,useOptimistic:function(e,t){var n=Be();return Ae!==null?sc(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:so,useCacheRefresh:Rc};zc.useEffectEvent=bc;function wo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=yt(),a=dn(i);a.payload=t,n!=null&&(a.callback=n),t=hn(e,a,i),t!==null&&(st(t,e,i),ia(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=yt(),a=dn(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=hn(e,a,i),t!==null&&(st(t,e,i),ia(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),i=dn(n);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,n),t!==null&&(st(t,e,n),ia(t,e,n))}};function Uc(e,t,n,i,a,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,l):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,i)||!Ji(a,r):!0}function jc(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function Yn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=q({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Bc(e){Pa(e)}function Hc(e){console.error(e)}function Fc(e){Pa(e)}function wr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Gc(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Eo(e,t,n){return n=dn(n),n.tag=3,n.payload={element:null},n.callback=function(){wr(e,t)},n}function Wc(e){return e=dn(e),e.tag=3,e}function Yc(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Gc(t,n,i)}}var l=n.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Gc(t,n,i),typeof a!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function If(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&pi(t,n,a,!0),n=ft.current,n!==null){switch(n.tag){case 31:case 13:return kt===null?Dr():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===sr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Xo(e,i,a)),!1;case 22:return n.flags|=65536,i===sr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Xo(e,i,a)),!1}throw Error(u(435,n.tag))}return Xo(e,i,a),Dr(),!1}if(ve)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Hl&&(e=Error(u(422),{cause:i}),Pi(Et(e,n)))):(i!==Hl&&(t=Error(u(423),{cause:i}),Pi(Et(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Et(i,n),a=Eo(e.stateNode,i,a),Pl(e,a),ze!==4&&(ze=2)),!1;var r=Error(u(520),{cause:i});if(r=Et(r,n),xa===null?xa=[r]:xa.push(r),ze!==4&&(ze=2),t===null)return!0;i=Et(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Eo(n.stateNode,i,e),Pl(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Wc(a),Yc(a,e,n,i),Pl(n,a),!1}n=n.return}while(n!==null);return!1}var To=Error(u(461)),We=!1;function Pe(e,t,n,i){t.child=e===null?Ju(t,null,n,i):Gn(t,e.child,n,i)}function Qc(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var l={};for(var s in i)s!=="ref"&&(l[s]=i[s])}else l=i;return jn(t),i=ao(e,t,n,l,r,a),s=ro(),e!==null&&!We?(lo(e,t,a),Vt(e,t,a)):(ve&&s&&jl(t),t.flags|=1,Pe(e,t,i,a),t.child)}function Vc(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!ql(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Xc(e,t,r,i,a)):(e=nr(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ro(e,a)){var l=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(l,i)&&e.ref===t.ref)return Vt(e,t,a)}return t.flags|=1,e=Ht(r,i),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(Ji(r,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=r,Ro(e,a))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,Vt(e,t,a)}return No(e,t,n,i,a)}function Jc(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return Kc(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,r!==null?r.cachePool:null),r!==null?Pu(t,r):eo(),$u(t);else return i=t.lanes=536870912,Kc(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(lr(t,r.cachePool),Pu(t,r),fn(),t.memoizedState=null):(e!==null&&lr(t,null),eo(),fn());return Pe(e,t,a,n),t.child}function ca(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kc(e,t,n,i,a){var r=Xl();return r=r===null?null:{parent:Fe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&lr(t,null),eo(),$u(t),e!==null&&pi(e,t,i,!0),t.childLanes=a,null}function Sr(e,t){return t=Tr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zc(e,t,n){return Gn(t,e.child,null,n),e=Sr(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function Mf(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(i.mode==="hidden")return e=Sr(t,i),t.lanes=536870912,ca(null,e);if(no(t),(e=De)?(e=uh(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ln!==null?{id:It,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},n=Iu(e),n.return=t,t.child=n,Ke=t,De=null)):e=null,e===null)throw sn(t);return t.lanes=536870912,null}return Sr(t,i)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=Zc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(We||pi(e,t,n,!1),a=(n&e.childLanes)!==0,We||a){if(i=Re,i!==null&&(l=Hs(i,n),l!==0&&l!==r.retryLane))throw r.retryLane=l,Mn(e,l),st(i,e,l),To;Dr(),t=Zc(e,t,n)}else e=r.treeContext,De=Ot(l.nextSibling),Ke=t,ve=!0,on=null,Ct=!1,e!==null&&zu(t,e),t=Sr(t,i),t.flags|=4096;return t}return e=Ht(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Er(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function No(e,t,n,i,a){return jn(t),n=ao(e,t,n,i,void 0,a),i=ro(),e!==null&&!We?(lo(e,t,a),Vt(e,t,a)):(ve&&i&&jl(t),t.flags|=1,Pe(e,t,n,a),t.child)}function Pc(e,t,n,i,a,r){return jn(t),t.updateQueue=null,n=tc(t,i,n,a),ec(e),i=ro(),e!==null&&!We?(lo(e,t,r),Vt(e,t,r)):(ve&&i&&jl(t),t.flags|=1,Pe(e,t,n,r),t.child)}function $c(e,t,n,i,a){if(jn(t),t.stateNode===null){var r=di,l=n.contextType;typeof l=="object"&&l!==null&&(r=Ze(l)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=So,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Kl(t),l=n.contextType,r.context=typeof l=="object"&&l!==null?Ze(l):di,r.state=t.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(wo(t,n,l,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&So.enqueueReplaceState(r,r.state,null),ra(t,i,r,a),aa(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,m=Yn(n,s);r.props=m;var v=r.context,N=n.contextType;l=di,typeof N=="object"&&N!==null&&(l=Ze(N));var O=n.getDerivedStateFromProps;N=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||v!==l)&&jc(t,r,i,l),cn=!1;var w=t.memoizedState;r.state=w,ra(t,i,r,a),aa(),v=t.memoizedState,s||w!==v||cn?(typeof O=="function"&&(wo(t,n,O,i),v=t.memoizedState),(m=cn||Uc(t,n,m,i,w,v,l))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=v),r.props=i,r.state=v,r.context=l,i=m):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Zl(e,t),l=t.memoizedProps,N=Yn(n,l),r.props=N,O=t.pendingProps,w=r.context,v=n.contextType,m=di,typeof v=="object"&&v!==null&&(m=Ze(v)),s=n.getDerivedStateFromProps,(v=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==O||w!==m)&&jc(t,r,i,m),cn=!1,w=t.memoizedState,r.state=w,ra(t,i,r,a),aa();var E=t.memoizedState;l!==O||w!==E||cn||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof s=="function"&&(wo(t,n,s,i),E=t.memoizedState),(N=cn||Uc(t,n,N,i,w,E,m)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(v||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,E,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,E,m)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=E),r.props=i,r.state=E,r.context=m,i=N):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Er(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Gn(t,e.child,null,a),t.child=Gn(t,null,n,a)):Pe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Vt(e,t,a),e}function ed(e,t,n,i){return zn(),t.flags|=256,Pe(e,t,n,i),t.child}var Co={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ko(e){return{baseLanes:e,cachePool:Gu()}}function Oo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xt),e}function td(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),l&&(a=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(a?mn(t):fn(),(e=De)?(e=uh(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ln!==null?{id:It,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},n=Iu(e),n.return=t,t.child=n,Ke=t,De=null)):e=null,e===null)throw sn(t);return cs(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,a?(fn(),a=t.mode,s=Tr({mode:"hidden",children:s},a),i=qn(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=ko(n),i.childLanes=Oo(e,l,n),t.memoizedState=Co,ca(null,i)):(mn(t),Ao(t,s))}var m=e.memoizedState;if(m!==null&&(s=m.dehydrated,s!==null)){if(r)t.flags&256?(mn(t),t.flags&=-257,t=Lo(e,t,n)):t.memoizedState!==null?(fn(),t.child=e.child,t.flags|=128,t=null):(fn(),s=i.fallback,a=t.mode,i=Tr({mode:"visible",children:i.children},a),s=qn(s,a,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Gn(t,e.child,null,n),i=t.child,i.memoizedState=ko(n),i.childLanes=Oo(e,l,n),t.memoizedState=Co,t=ca(null,i));else if(mn(t),cs(s)){if(l=s.nextSibling&&s.nextSibling.dataset,l)var v=l.dgst;l=v,i=Error(u(419)),i.stack="",i.digest=l,Pi({value:i,source:null,stack:null}),t=Lo(e,t,n)}else if(We||pi(e,t,n,!1),l=(n&e.childLanes)!==0,We||l){if(l=Re,l!==null&&(i=Hs(l,n),i!==0&&i!==m.retryLane))throw m.retryLane=i,Mn(e,i),st(l,e,i),To;us(s)||Dr(),t=Lo(e,t,n)}else us(s)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,De=Ot(s.nextSibling),Ke=t,ve=!0,on=null,Ct=!1,e!==null&&zu(t,e),t=Ao(t,i.children),t.flags|=4096);return t}return a?(fn(),s=i.fallback,a=t.mode,m=e.child,v=m.sibling,i=Ht(m,{mode:"hidden",children:i.children}),i.subtreeFlags=m.subtreeFlags&65011712,v!==null?s=Ht(v,s):(s=qn(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,ca(null,i),i=t.child,s=e.child.memoizedState,s===null?s=ko(n):(a=s.cachePool,a!==null?(m=Fe._currentValue,a=a.parent!==m?{parent:m,pool:m}:a):a=Gu(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Oo(e,l,n),t.memoizedState=Co,ca(e.child,i)):(mn(t),n=e.child,e=n.sibling,n=Ht(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=n,t.memoizedState=null,n)}function Ao(e,t){return t=Tr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Tr(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function Lo(e,t,n){return Gn(t,e.child,null,n),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Wl(e.return,t,n)}function _o(e,t,n,i,a,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=a,l.treeForkCount=r)}function id(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var l=je.current,s=(l&2)!==0;if(s?(l=l&1|2,t.flags|=128):l&=1,I(je,l),Pe(e,t,i,n),i=ve?Zi:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,n,t);else if(e.tag===19)nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&hr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),_o(t,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&hr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}_o(t,!0,n,null,r,i);break;case"together":_o(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function qf(e,t,n){switch(t.tag){case 3:Oe(t,t.stateNode.containerInfo),un(t,Fe,e.memoizedState.cache),zn();break;case 27:case 5:Ue(t);break;case 4:Oe(t,t.stateNode.containerInfo);break;case 10:un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(mn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?td(e,t,n):(mn(t),e=Vt(e,t,n),e!==null?e.sibling:null);mn(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(pi(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return id(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),I(je,je.current),i)break;return null;case 22:return t.lanes=0,Jc(e,t,n,t.pendingProps);case 24:un(t,Fe,e.memoizedState.cache)}return Vt(e,t,n)}function ad(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Ro(e,n)&&(t.flags&128)===0)return We=!1,qf(e,t,n);We=(e.flags&131072)!==0}else We=!1,ve&&(t.flags&1048576)!==0&&qu(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Hn(t.elementType),t.type=e,typeof e=="function")ql(e)?(i=Yn(e,i),t.tag=1,t=$c(null,t,e,i,n)):(t.tag=0,t=No(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Z){t.tag=11,t=Qc(null,t,e,i,n);break e}else if(a===_){t.tag=14,t=Vc(null,t,e,i,n);break e}}throw t=He(e)||e,Error(u(306,t,""))}}return t;case 0:return No(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Yn(i,t.pendingProps),$c(e,t,i,a,n);case 3:e:{if(Oe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Zl(e,t),ra(t,i,null,n);var l=t.memoizedState;if(i=l.cache,un(t,Fe,i),i!==r.cache&&Yl(t,[Fe],n,!0),aa(),i=l.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ed(e,t,i,n);break e}else if(i!==a){a=Et(Error(u(424)),t),Pi(a),t=ed(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Ot(e.firstChild),Ke=t,ve=!0,on=null,Ct=!0,n=Ju(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zn(),i===a){t=Vt(e,t,n);break e}Pe(e,t,i,n)}t=t.child}return t;case 26:return Er(e,t),e===null?(n=ph(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,i=Br(J.current).createElement(n),i[Je]=t,i[nt]=e,$e(i,n,e),Ve(i),t.stateNode=i):t.memoizedState=ph(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ue(t),e===null&&ve&&(i=t.stateNode=hh(t.type,t.pendingProps,J.current),Ke=t,Ct=!0,a=De,Sn(t.type)?(ds=a,De=Ot(i.firstChild)):De=a),Pe(e,t,t.pendingProps.children,n),Er(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((a=i=De)&&(i=hp(i,t.type,t.pendingProps,Ct),i!==null?(t.stateNode=i,Ke=t,De=Ot(i.firstChild),Ct=!1,a=!0):a=!1),a||sn(t)),Ue(t),a=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,ls(a,r)?i=null:l!==null&&ls(a,l)&&(t.flags|=32),t.memoizedState!==null&&(a=ao(e,t,kf,null,null,n),Na._currentValue=a),Er(e,t),Pe(e,t,i,n),t.child;case 6:return e===null&&ve&&((e=n=De)&&(n=mp(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,Ke=t,De=null,e=!0):e=!1),e||sn(t)),null;case 13:return td(e,t,n);case 4:return Oe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Gn(t,null,i,n):Pe(e,t,i,n),t.child;case 11:return Qc(e,t,t.type,t.pendingProps,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,un(t,t.type,i.value),Pe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,jn(t),a=Ze(a),i=i(a),t.flags|=1,Pe(e,t,i,n),t.child;case 14:return Vc(e,t,t.type,t.pendingProps,n);case 15:return Xc(e,t,t.type,t.pendingProps,n);case 19:return id(e,t,n);case 31:return Mf(e,t,n);case 22:return Jc(e,t,n,t.pendingProps);case 24:return jn(t),i=Ze(Fe),e===null?(a=Xl(),a===null&&(a=Re,r=Ql(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Kl(t),un(t,Fe,a)):((e.lanes&n)!==0&&(Zl(e,t),ra(t,null,null,n),aa()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),un(t,Fe,i)):(i=r.cache,un(t,Fe,i),i!==a.cache&&Yl(t,[Fe],n,!0))),Pe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Xt(e){e.flags|=4}function Do(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(_d())e.flags|=8192;else throw Fn=sr,Jl}else e.flags&=-16777217}function rd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(t))if(_d())e.flags|=8192;else throw Fn=sr,Jl}function Nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Us():536870912,e.lanes|=t,ki|=t)}function da(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function zf(e,t,n){var i=t.pendingProps;switch(Bl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Wt(Fe),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fi(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fl())),Ie(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(Xt(t),r!==null?(Ie(t),rd(t,r)):(Ie(t),Do(t,a,null,i,n))):r?r!==e.memoizedState?(Xt(t),Ie(t),rd(t,r)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Xt(t),Ie(t),Do(t,a,e,i,n)),null;case 27:if(An(t),n=J.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ie(t),null}e=G.current,fi(t)?Uu(t):(e=hh(a,i,n),t.stateNode=e,Xt(t))}return Ie(t),null;case 5:if(An(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ie(t),null}if(r=G.current,fi(t))Uu(t);else{var l=Br(J.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?l.createElement(a,{is:i.is}):l.createElement(a)}}r[Je]=t,r[nt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch($e(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Xt(t)}}return Ie(t),Do(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=J.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Ke,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||th(e.nodeValue,n)),e||sn(t,!0)}else e=Br(e).createTextNode(i),e[Je]=t,t.stateNode=e}return Ie(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=fi(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Je]=t}else zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else n=Fl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ie(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[Je]=t}else zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),a=!1}else a=Fl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nr(t,t.updateQueue),Ie(t),null);case 4:return ye(),e===null&&ts(t.stateNode.containerInfo),Ie(t),null;case 10:return Wt(t.type),Ie(t),null;case 19:if(T(je),i=t.memoizedState,i===null)return Ie(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)da(i,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=hr(e),r!==null){for(t.flags|=128,da(i,!1),e=r.updateQueue,t.updateQueue=e,Nr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Du(n,e),n=n.sibling;return I(je,je.current&1|2),ve&&Ft(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ut()>Lr&&(t.flags|=128,a=!0,da(i,!1),t.lanes=4194304)}else{if(!a)if(e=hr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nr(t,e),da(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ve)return Ie(t),null}else 2*ut()-i.renderingStartTime>Lr&&n!==536870912&&(t.flags|=128,a=!0,da(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ut(),e.sibling=null,n=je.current,I(je,a?n&1|2:n&1),ve&&Ft(t,i.treeForkCount),e):(Ie(t),null);case 22:case 23:return pt(t),to(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),n=t.updateQueue,n!==null&&Nr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&T(Bn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Fe),Ie(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Uf(e,t){switch(Bl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Fe),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(u(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(je),null;case 4:return ye(),null;case 10:return Wt(t.type),null;case 22:case 23:return pt(t),to(),e!==null&&T(Bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Fe),null;case 25:return null;default:return null}}function ld(e,t){switch(Bl(t),t.tag){case 3:Wt(Fe),ye();break;case 26:case 27:case 5:An(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:T(je);break;case 10:Wt(t.type);break;case 22:case 23:pt(t),to(),e!==null&&T(Bn);break;case 24:Wt(Fe)}}function ha(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,l=n.inst;i=r(),l.destroy=i}n=n.next}while(n!==a)}}catch(s){Ce(t,t.return,s)}}function pn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var l=i.inst,s=l.destroy;if(s!==void 0){l.destroy=void 0,a=t;var m=n,v=s;try{v()}catch(N){Ce(a,m,N)}}}i=i.next}while(i!==r)}}catch(N){Ce(t,t.return,N)}}function od(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zu(t,n)}catch(i){Ce(e,e.return,i)}}}function sd(e,t,n){n.props=Yn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ce(e,t,i)}}function ma(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){Ce(e,t,a)}}function qt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ce(e,t,a)}else n.current=null}function ud(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Ce(e,e.return,a)}}function Io(e,t,n){try{var i=e.stateNode;lp(i,e.type,n,t),i[nt]=t}catch(a){Ce(e,e.return,a)}}function cd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sn(e.type)||e.tag===4}function Mo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jt));else if(i!==4&&(i===27&&Sn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qo(e,t,n),e=e.sibling;e!==null;)qo(e,t,n),e=e.sibling}function Cr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Sn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Cr(e,t,n),e=e.sibling;e!==null;)Cr(e,t,n),e=e.sibling}function dd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,i,n),t[Je]=e,t[nt]=n}catch(r){Ce(e,e.return,r)}}var Jt=!1,Ye=!1,zo=!1,hd=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function jf(e,t){if(e=e.containerInfo,as=Vr,e=Tu(e),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var l=0,s=-1,m=-1,v=0,N=0,O=e,w=null;t:for(;;){for(var E;O!==n||a!==0&&O.nodeType!==3||(s=l+a),O!==r||i!==0&&O.nodeType!==3||(m=l+i),O.nodeType===3&&(l+=O.nodeValue.length),(E=O.firstChild)!==null;)w=O,O=E;for(;;){if(O===e)break t;if(w===n&&++v===a&&(s=l),w===r&&++N===i&&(m=l),(E=O.nextSibling)!==null)break;O=w,w=O.parentNode}O=E}n=s===-1||m===-1?null:{start:s,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},Vr=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var W=Yn(n.type,a);e=i.getSnapshotBeforeUpdate(W,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ce(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ss(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ss(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function md(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Zt(e,n),i&4&&ha(5,n);break;case 1:if(Zt(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(l){Ce(n,n.return,l)}else{var a=Yn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Ce(n,n.return,l)}}i&64&&od(n),i&512&&ma(n,n.return);break;case 3:if(Zt(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zu(e,t)}catch(l){Ce(n,n.return,l)}}break;case 27:t===null&&i&4&&dd(n);case 26:case 5:Zt(e,n),t===null&&i&4&&ud(n),i&512&&ma(n,n.return);break;case 12:Zt(e,n);break;case 31:Zt(e,n),i&4&&gd(e,n);break;case 13:Zt(e,n),i&4&&xd(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xf.bind(null,n),fp(e,n))));break;case 22:if(i=n.memoizedState!==null||Jt,!i){t=t!==null&&t.memoizedState!==null||Ye,a=Jt;var r=Ye;Jt=i,(Ye=t)&&!r?Pt(e,n,(n.subtreeFlags&8772)!==0):Zt(e,n),Jt=a,Ye=r}break;case 30:break;default:Zt(e,n)}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,at=!1;function Kt(e,t,n){for(n=n.child;n!==null;)pd(e,t,n),n=n.sibling}function pd(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 26:Ye||qt(n,t),Kt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||qt(n,t);var i=Me,a=at;Sn(n.type)&&(Me=n.stateNode,at=!1),Kt(e,t,n),Sa(n.stateNode),Me=i,at=a;break;case 5:Ye||qt(n,t);case 6:if(i=Me,a=at,Me=null,Kt(e,t,n),Me=i,at=a,Me!==null)if(at)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(r){Ce(n,t,r)}else try{Me.removeChild(n.stateNode)}catch(r){Ce(n,t,r)}break;case 18:Me!==null&&(at?(e=Me,oh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mi(e)):oh(Me,n.stateNode));break;case 4:i=Me,a=at,Me=n.stateNode.containerInfo,at=!0,Kt(e,t,n),Me=i,at=a;break;case 0:case 11:case 14:case 15:pn(2,n,t),Ye||pn(4,n,t),Kt(e,t,n);break;case 1:Ye||(qt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&sd(n,t,i)),Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:Ye=(i=Ye)||n.memoizedState!==null,Kt(e,t,n),Ye=i;break;default:Kt(e,t,n)}}function gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mi(e)}catch(n){Ce(t,t.return,n)}}}function xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mi(e)}catch(n){Ce(t,t.return,n)}}function Bf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hd),t;default:throw Error(u(435,e.tag))}}function kr(e,t){var n=Bf(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Jf.bind(null,e,i);i.then(a,a)}})}function rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 27:if(Sn(s.type)){Me=s.stateNode,at=!1;break e}break;case 5:Me=s.stateNode,at=!1;break e;case 3:case 4:Me=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(Me===null)throw Error(u(160));pd(r,l,a),Me=null,at=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}var _t=null;function yd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),lt(e),i&4&&(pn(3,e,e.return),ha(3,e),pn(5,e,e.return));break;case 1:rt(t,e),lt(e),i&512&&(Ye||n===null||qt(n,n.return)),i&64&&Jt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=_t;if(rt(t,e),lt(e),i&512&&(Ye||n===null||qt(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Bi]||r[Je]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),$e(r,i,n),r[Je]=e,Ve(r),i=r;break e;case"link":var l=yh("link","href",a).get(i+(n.href||""));if(l){for(var s=0;s<l.length;s++)if(r=l[s],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(s,1);break t}}r=a.createElement(i),$e(r,i,n),a.head.appendChild(r);break;case"meta":if(l=yh("meta","content",a).get(i+(n.content||""))){for(s=0;s<l.length;s++)if(r=l[s],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){l.splice(s,1);break t}}r=a.createElement(i),$e(r,i,n),a.head.appendChild(r);break;default:throw Error(u(468,i))}r[Je]=e,Ve(r),i=r}e.stateNode=i}else vh(a,e.type,e.stateNode);else e.stateNode=xh(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?vh(a,e.type,e.stateNode):xh(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Io(e,e.memoizedProps,n.memoizedProps)}break;case 27:rt(t,e),lt(e),i&512&&(Ye||n===null||qt(n,n.return)),n!==null&&i&4&&Io(e,e.memoizedProps,n.memoizedProps);break;case 5:if(rt(t,e),lt(e),i&512&&(Ye||n===null||qt(n,n.return)),e.flags&32){a=e.stateNode;try{ai(a,"")}catch(W){Ce(e,e.return,W)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Io(e,a,n!==null?n.memoizedProps:a)),i&1024&&(zo=!0);break;case 6:if(rt(t,e),lt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(W){Ce(e,e.return,W)}}break;case 3:if(Gr=null,a=_t,_t=Hr(t.containerInfo),rt(t,e),_t=a,lt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(W){Ce(e,e.return,W)}zo&&(zo=!1,vd(e));break;case 4:i=_t,_t=Hr(e.stateNode.containerInfo),rt(t,e),lt(e),_t=i;break;case 12:rt(t,e),lt(e);break;case 31:rt(t,e),lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 13:rt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ar=ut()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 22:a=e.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,v=Jt,N=Ye;if(Jt=v||a,Ye=N||m,rt(t,e),Ye=N,Jt=v,lt(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||m||Jt||Ye||Qn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(r=m.stateNode,a)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{s=m.stateNode;var O=m.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(W){Ce(m,m.return,W)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(W){Ce(m,m.return,W)}}}else if(t.tag===18){if(n===null){m=t;try{var E=m.stateNode;a?sh(E,!0):sh(m.stateNode,!1)}catch(W){Ce(m,m.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,kr(e,n))));break;case 19:rt(t,e),lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 30:break;case 21:break;default:rt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(cd(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var a=n.stateNode,r=Mo(e);Cr(e,r,a);break;case 5:var l=n.stateNode;n.flags&32&&(ai(l,""),n.flags&=-33);var s=Mo(e);Cr(e,s,l);break;case 3:case 4:var m=n.stateNode.containerInfo,v=Mo(e);qo(e,v,m);break;default:throw Error(u(161))}}catch(N){Ce(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)md(e,t.alternate,t),t=t.sibling}function Qn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pn(4,t,t.return),Qn(t);break;case 1:qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&sd(t,t.return,n),Qn(t);break;case 27:Sa(t.stateNode);case 26:case 5:qt(t,t.return),Qn(t);break;case 22:t.memoizedState===null&&Qn(t);break;case 30:Qn(t);break;default:Qn(t)}e=e.sibling}}function Pt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:Pt(a,r,n),ha(4,r);break;case 1:if(Pt(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(v){Ce(i,i.return,v)}if(i=r,a=i.updateQueue,a!==null){var s=i.stateNode;try{var m=a.shared.hiddenCallbacks;if(m!==null)for(a.shared.hiddenCallbacks=null,a=0;a<m.length;a++)Ku(m[a],s)}catch(v){Ce(i,i.return,v)}}n&&l&64&&od(r),ma(r,r.return);break;case 27:dd(r);case 26:case 5:Pt(a,r,n),n&&i===null&&l&4&&ud(r),ma(r,r.return);break;case 12:Pt(a,r,n);break;case 31:Pt(a,r,n),n&&l&4&&gd(a,r);break;case 13:Pt(a,r,n),n&&l&4&&xd(a,r);break;case 22:r.memoizedState===null&&Pt(a,r,n),ma(r,r.return);break;case 30:break;default:Pt(a,r,n)}t=t.sibling}}function Uo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$i(n))}function jo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e))}function Rt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bd(e,t,n,i),t=t.sibling}function bd(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,n,i),a&2048&&ha(9,t);break;case 1:Rt(e,t,n,i);break;case 3:Rt(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e)));break;case 12:if(a&2048){Rt(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,s=r.onPostCommit;typeof s=="function"&&s(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){Ce(t,t.return,m)}}else Rt(e,t,n,i);break;case 31:Rt(e,t,n,i);break;case 13:Rt(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Rt(e,t,n,i):fa(e,t):r._visibility&2?Rt(e,t,n,i):(r._visibility|=2,Ti(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Uo(l,t);break;case 24:Rt(e,t,n,i),a&2048&&jo(t.alternate,t);break;default:Rt(e,t,n,i)}}function Ti(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,s=n,m=i,v=l.flags;switch(l.tag){case 0:case 11:case 15:Ti(r,l,s,m,a),ha(8,l);break;case 23:break;case 22:var N=l.stateNode;l.memoizedState!==null?N._visibility&2?Ti(r,l,s,m,a):fa(r,l):(N._visibility|=2,Ti(r,l,s,m,a)),a&&v&2048&&Uo(l.alternate,l);break;case 24:Ti(r,l,s,m,a),a&&v&2048&&jo(l.alternate,l);break;default:Ti(r,l,s,m,a)}t=t.sibling}}function fa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:fa(n,i),a&2048&&Uo(i.alternate,i);break;case 24:fa(n,i),a&2048&&jo(i.alternate,i);break;default:fa(n,i)}t=t.sibling}}var pa=8192;function Ni(e,t,n){if(e.subtreeFlags&pa)for(e=e.child;e!==null;)wd(e,t,n),e=e.sibling}function wd(e,t,n){switch(e.tag){case 26:Ni(e,t,n),e.flags&pa&&e.memoizedState!==null&&Cp(n,_t,e.memoizedState,e.memoizedProps);break;case 5:Ni(e,t,n);break;case 3:case 4:var i=_t;_t=Hr(e.stateNode.containerInfo),Ni(e,t,n),_t=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=pa,pa=16777216,Ni(e,t,n),pa=i):Ni(e,t,n));break;default:Ni(e,t,n)}}function Sd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ga(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Xe=i,Td(i,e)}Sd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ed(e),e=e.sibling}function Ed(e){switch(e.tag){case 0:case 11:case 15:ga(e),e.flags&2048&&pn(9,e,e.return);break;case 3:ga(e);break;case 12:ga(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Or(e)):ga(e);break;default:ga(e)}}function Or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Xe=i,Td(i,e)}Sd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pn(8,t,t.return),Or(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Or(t));break;default:Or(t)}e=e.sibling}}function Td(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:pn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:$i(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Xe=i;else e:for(n=e;Xe!==null;){i=Xe;var a=i.sibling,r=i.return;if(fd(i),i===n){Xe=null;break e}if(a!==null){a.return=r,Xe=a;break e}Xe=r}}}var Hf={getCacheForType:function(e){var t=Ze(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ze(Fe).controller.signal}},Ff=typeof WeakMap=="function"?WeakMap:Map,Te=0,Re=null,fe=null,ge=0,Ne=0,gt=null,gn=!1,Ci=!1,Bo=!1,$t=0,ze=0,xn=0,Vn=0,Ho=0,xt=0,ki=0,xa=null,ot=null,Fo=!1,Ar=0,Nd=0,Lr=1/0,_r=null,yn=null,Qe=0,vn=null,Oi=null,en=0,Go=0,Wo=null,Cd=null,ya=0,Yo=null;function yt(){return(Te&2)!==0&&ge!==0?ge&-ge:S.T!==null?Zo():Fs()}function kd(){if(xt===0)if((ge&536870912)===0||ve){var e=ja;ja<<=1,(ja&3932160)===0&&(ja=262144),xt=e}else xt=536870912;return e=ft.current,e!==null&&(e.flags|=32),xt}function st(e,t,n){(e===Re&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Ai(e,0),bn(e,ge,xt,!1)),ji(e,n),((Te&2)===0||e!==Re)&&(e===Re&&((Te&2)===0&&(Vn|=n),ze===4&&bn(e,ge,xt,!1)),zt(e))}function Od(e,t,n){if((Te&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ui(e,t),a=i?Yf(e,t):Vo(e,t,!0),r=i;do{if(a===0){Ci&&!i&&bn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Gf(n)){a=Vo(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var s=e;a=xa;var m=s.current.memoizedState.isDehydrated;if(m&&(Ai(s,l).flags|=256),l=Vo(s,l,!1),l!==2){if(Bo&&!m){s.errorRecoveryDisabledLanes|=r,Vn|=r,a=4;break e}r=ot,ot=a,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}a=l}if(r=!1,a!==2)continue}}if(a===1){Ai(e,0),bn(e,t,0,!0);break}e:{switch(i=e,r=a,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:bn(i,t,xt,!gn);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(a=Ar+300-ut(),10<a)){if(bn(i,t,xt,!gn),Ha(i,0,!0)!==0)break e;en=t,i.timeoutHandle=rh(Ad.bind(null,i,n,ot,_r,Fo,t,xt,Vn,ki,gn,r,"Throttled",-0,0),a);break e}Ad(i,n,ot,_r,Fo,t,xt,Vn,ki,gn,r,null,-0,0)}}break}while(!0);zt(e)}function Ad(e,t,n,i,a,r,l,s,m,v,N,O,w,E){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},wd(t,r,O);var W=(r&62914560)===r?Ar-ut():(r&4194048)===r?Nd-ut():0;if(W=kp(O,W),W!==null){en=r,e.cancelPendingCommit=W(zd.bind(null,e,t,r,n,i,a,l,s,m,N,O,null,w,E)),bn(e,r,l,!v);return}}zd(e,t,r,n,i,a,l,s,m)}function Gf(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!ht(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t,n,i){t&=~Ho,t&=~Vn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-dt(a),l=1<<r;i[r]=-1,a&=~l}n!==0&&js(e,n,t)}function Rr(){return(Te&6)===0?(va(0),!1):!0}function Qo(){if(fe!==null){if(Ne===0)var e=fe.return;else e=fe,Gt=Un=null,oo(e),vi=null,ta=0,e=fe;for(;e!==null;)ld(e.alternate,e),e=e.return;fe=null}}function Ai(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,up(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),en=0,Qo(),Re=e,fe=n=Ht(e.current,null),ge=t,Ne=0,gt=null,gn=!1,Ci=Ui(e,t),Bo=!1,ki=xt=Ho=Vn=xn=ze=0,ot=xa=null,Fo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-dt(i),r=1<<a;t|=e[a],i&=~r}return $t=t,$a(),n}function Ld(e,t){ce=null,S.H=ua,t===yi||t===or?(t=Qu(),Ne=3):t===Jl?(t=Qu(),Ne=4):Ne=t===To?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,fe===null&&(ze=1,wr(e,Et(t,e.current)))}function _d(){var e=ft.current;return e===null?!0:(ge&4194048)===ge?kt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===kt:!1}function Rd(){var e=S.H;return S.H=ua,e===null?ua:e}function Dd(){var e=S.A;return S.A=Hf,e}function Dr(){ze=4,gn||(ge&4194048)!==ge&&ft.current!==null||(Ci=!0),(xn&134217727)===0&&(Vn&134217727)===0||Re===null||bn(Re,ge,xt,!1)}function Vo(e,t,n){var i=Te;Te|=2;var a=Rd(),r=Dd();(Re!==e||ge!==t)&&(_r=null,Ai(e,t)),t=!1;var l=ze;e:do try{if(Ne!==0&&fe!==null){var s=fe,m=gt;switch(Ne){case 8:Qo(),l=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var v=Ne;if(Ne=0,gt=null,Li(e,s,m,v),n&&Ci){l=0;break e}break;default:v=Ne,Ne=0,gt=null,Li(e,s,m,v)}}Wf(),l=ze;break}catch(N){Ld(e,N)}while(!0);return t&&e.shellSuspendCounter++,Gt=Un=null,Te=i,S.H=a,S.A=r,fe===null&&(Re=null,ge=0,$a()),l}function Wf(){for(;fe!==null;)Id(fe)}function Yf(e,t){var n=Te;Te|=2;var i=Rd(),a=Dd();Re!==e||ge!==t?(_r=null,Lr=ut()+500,Ai(e,t)):Ci=Ui(e,t);e:do try{if(Ne!==0&&fe!==null){t=fe;var r=gt;t:switch(Ne){case 1:Ne=0,gt=null,Li(e,t,r,1);break;case 2:case 9:if(Wu(r)){Ne=0,gt=null,Md(t);break}t=function(){Ne!==2&&Ne!==9||Re!==e||(Ne=7),zt(e)},r.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Wu(r)?(Ne=0,gt=null,Md(t)):(Ne=0,gt=null,Li(e,t,r,7));break;case 5:var l=null;switch(fe.tag){case 26:l=fe.memoizedState;case 5:case 27:var s=fe;if(l?bh(l):s.stateNode.complete){Ne=0,gt=null;var m=s.sibling;if(m!==null)fe=m;else{var v=s.return;v!==null?(fe=v,Ir(v)):fe=null}break t}}Ne=0,gt=null,Li(e,t,r,5);break;case 6:Ne=0,gt=null,Li(e,t,r,6);break;case 8:Qo(),ze=6;break e;default:throw Error(u(462))}}Qf();break}catch(N){Ld(e,N)}while(!0);return Gt=Un=null,S.H=i,S.A=a,Te=n,fe!==null?0:(Re=null,ge=0,$a(),ze)}function Qf(){for(;fe!==null&&!fm();)Id(fe)}function Id(e){var t=ad(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Ir(e):fe=t}function Md(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Pc(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=Pc(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:oo(t);default:ld(n,t),t=fe=Du(t,$t),t=ad(n,t,$t)}e.memoizedProps=e.pendingProps,t===null?Ir(e):fe=t}function Li(e,t,n,i){Gt=Un=null,oo(t),vi=null,ta=0;var a=t.return;try{if(If(e,a,t,n,ge)){ze=1,wr(e,Et(n,e.current)),fe=null;return}}catch(r){if(a!==null)throw fe=a,r;ze=1,wr(e,Et(n,e.current)),fe=null;return}t.flags&32768?(ve||i===1?e=!0:Ci||(ge&536870912)!==0?e=!1:(gn=e=!0,(i===2||i===9||i===3||i===6)&&(i=ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),qd(t,e)):Ir(t)}function Ir(e){var t=e;do{if((t.flags&32768)!==0){qd(t,gn);return}e=t.return;var n=zf(t.alternate,t,$t);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ze===0&&(ze=5)}function qd(e,t){do{var n=Uf(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);ze=6,fe=null}function zd(e,t,n,i,a,r,l,s,m){e.cancelPendingCommit=null;do Mr();while(Qe!==0);if((Te&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Il,Tm(e,n,r,l,s,m),e===Re&&(fe=Re=null,ge=0),Oi=t,vn=e,en=n,Go=r,Wo=a,Cd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kf(za,function(){return Fd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=S.T,S.T=null,a=U.p,U.p=2,l=Te,Te|=4;try{jf(e,t,n)}finally{Te=l,U.p=a,S.T=i}}Qe=1,Ud(),jd(),Bd()}}function Ud(){if(Qe===1){Qe=0;var e=vn,t=Oi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=S.T,S.T=null;var i=U.p;U.p=2;var a=Te;Te|=4;try{yd(t,e);var r=rs,l=Tu(e.containerInfo),s=r.focusedElem,m=r.selectionRange;if(l!==s&&s&&s.ownerDocument&&Eu(s.ownerDocument.documentElement,s)){if(m!==null&&Al(s)){var v=m.start,N=m.end;if(N===void 0&&(N=v),"selectionStart"in s)s.selectionStart=v,s.selectionEnd=Math.min(N,s.value.length);else{var O=s.ownerDocument||document,w=O&&O.defaultView||window;if(w.getSelection){var E=w.getSelection(),W=s.textContent.length,re=Math.min(m.start,W),_e=m.end===void 0?re:Math.min(m.end,W);!E.extend&&re>_e&&(l=_e,_e=re,re=l);var g=Su(s,re),p=Su(s,_e);if(g&&p&&(E.rangeCount!==1||E.anchorNode!==g.node||E.anchorOffset!==g.offset||E.focusNode!==p.node||E.focusOffset!==p.offset)){var y=O.createRange();y.setStart(g.node,g.offset),E.removeAllRanges(),re>_e?(E.addRange(y),E.extend(p.node,p.offset)):(y.setEnd(p.node,p.offset),E.addRange(y))}}}}for(O=[],E=s;E=E.parentNode;)E.nodeType===1&&O.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var k=O[s];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Vr=!!as,rs=as=null}finally{Te=a,U.p=i,S.T=n}}e.current=t,Qe=2}}function jd(){if(Qe===2){Qe=0;var e=vn,t=Oi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=S.T,S.T=null;var i=U.p;U.p=2;var a=Te;Te|=4;try{md(e,t.alternate,t)}finally{Te=a,U.p=i,S.T=n}}Qe=3}}function Bd(){if(Qe===4||Qe===3){Qe=0,pm();var e=vn,t=Oi,n=en,i=Cd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Oi=vn=null,Hd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(yn=null),cl(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(zi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=S.T,a=U.p,U.p=2,S.T=null;try{for(var r=e.onRecoverableError,l=0;l<i.length;l++){var s=i[l];r(s.value,{componentStack:s.stack})}}finally{S.T=t,U.p=a}}(en&3)!==0&&Mr(),zt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Yo?ya++:(ya=0,Yo=e):ya=0,va(0)}}function Hd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$i(t)))}function Mr(){return Ud(),jd(),Bd(),Fd()}function Fd(){if(Qe!==5)return!1;var e=vn,t=Go;Go=0;var n=cl(en),i=S.T,a=U.p;try{U.p=32>n?32:n,S.T=null,n=Wo,Wo=null;var r=vn,l=en;if(Qe=0,Oi=vn=null,en=0,(Te&6)!==0)throw Error(u(331));var s=Te;if(Te|=4,Ed(r.current),bd(r,r.current,l,n),Te=s,va(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(zi,r)}catch{}return!0}finally{U.p=a,S.T=i,Hd(e,t)}}function Gd(e,t,n){t=Et(n,t),t=Eo(e.stateNode,t,2),e=hn(e,t,2),e!==null&&(ji(e,2),zt(e))}function Ce(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yn===null||!yn.has(i))){e=Et(n,e),n=Wc(2),i=hn(t,n,2),i!==null&&(Yc(n,i,t,e),ji(i,2),zt(i));break}}t=t.return}}function Xo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ff;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Bo=!0,a.add(n),e=Vf.bind(null,e,t,n),t.then(e,e))}function Vf(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(ge&n)===n&&(ze===4||ze===3&&(ge&62914560)===ge&&300>ut()-Ar?(Te&2)===0&&Ai(e,0):Ho|=n,ki===ge&&(ki=0)),zt(e)}function Wd(e,t){t===0&&(t=Us()),e=Mn(e,t),e!==null&&(ji(e,t),zt(e))}function Xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wd(e,n)}function Jf(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),Wd(e,n)}function Kf(e,t){return ll(e,t)}var qr=null,_i=null,Jo=!1,zr=!1,Ko=!1,wn=0;function zt(e){e!==_i&&e.next===null&&(_i===null?qr=_i=e:_i=_i.next=e),zr=!0,Jo||(Jo=!0,Pf())}function va(e,t){if(!Ko&&zr){Ko=!0;do for(var n=!1,i=qr;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var l=i.suspendedLanes,s=i.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=a&~(l&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Xd(i,r))}else r=ge,r=Ha(i,i===Re?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ui(i,r)||(n=!0,Xd(i,r));i=i.next}while(n);Ko=!1}}function Zf(){Yd()}function Yd(){zr=Jo=!1;var e=0;wn!==0&&sp()&&(e=wn);for(var t=ut(),n=null,i=qr;i!==null;){var a=i.next,r=Qd(i,t);r===0?(i.next=null,n===null?qr=a:n.next=a,a===null&&(_i=n)):(n=i,(e!==0||(r&3)!==0)&&(zr=!0)),i=a}Qe!==0&&Qe!==5||va(e),wn!==0&&(wn=0)}function Qd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-dt(r),s=1<<l,m=a[l];m===-1?((s&n)===0||(s&i)!==0)&&(a[l]=Em(s,t)):m<=t&&(e.expiredLanes|=s),r&=~s}if(t=Re,n=ge,n=Ha(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ol(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ui(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ol(i),cl(n)){case 2:case 8:n=qs;break;case 32:n=za;break;case 268435456:n=zs;break;default:n=za}return i=Vd.bind(null,e),n=ll(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ol(i),e.callbackPriority=2,e.callbackNode=null,2}function Vd(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var i=ge;return i=Ha(e,e===Re?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Od(e,i,t),Qd(e,ut()),e.callbackNode!=null&&e.callbackNode===n?Vd.bind(null,e):null)}function Xd(e,t){if(Mr())return null;Od(e,t,!0)}function Pf(){cp(function(){(Te&6)!==0?ll(Ms,Zf):Yd()})}function Zo(){if(wn===0){var e=gi;e===0&&(e=Ua,Ua<<=1,(Ua&261888)===0&&(Ua=256)),wn=e}return wn}function Jd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ya(""+e)}function Kd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function $f(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Jd((a[nt]||null).action),l=i.submitter;l&&(t=(t=l[nt]||null)?Jd(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var s=new Ja("action","action",null,i,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wn!==0){var m=l?Kd(a,l):new FormData(a);xo(n,{pending:!0,data:m,method:a.method,action:r},null,m)}}else typeof r=="function"&&(s.preventDefault(),m=l?Kd(a,l):new FormData(a),xo(n,{pending:!0,data:m,method:a.method,action:r},r,m))},currentTarget:a}]})}}for(var Po=0;Po<Dl.length;Po++){var $o=Dl[Po],ep=$o.toLowerCase(),tp=$o[0].toUpperCase()+$o.slice(1);Lt(ep,"on"+tp)}Lt(ku,"onAnimationEnd"),Lt(Ou,"onAnimationIteration"),Lt(Au,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(xf,"onTransitionRun"),Lt(yf,"onTransitionStart"),Lt(vf,"onTransitionCancel"),Lt(Lu,"onTransitionEnd"),ni("onMouseEnter",["mouseout","mouseover"]),ni("onMouseLeave",["mouseout","mouseover"]),ni("onPointerEnter",["pointerout","pointerover"]),ni("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var l=i.length-1;0<=l;l--){var s=i[l],m=s.instance,v=s.currentTarget;if(s=s.listener,m!==r&&a.isPropagationStopped())break e;r=s,a.currentTarget=v;try{r(a)}catch(N){Pa(N)}a.currentTarget=null,r=m}else for(l=0;l<i.length;l++){if(s=i[l],m=s.instance,v=s.currentTarget,s=s.listener,m!==r&&a.isPropagationStopped())break e;r=s,a.currentTarget=v;try{r(a)}catch(N){Pa(N)}a.currentTarget=null,r=m}}}}function pe(e,t){var n=t[dl];n===void 0&&(n=t[dl]=new Set);var i=e+"__bubble";n.has(i)||(Pd(t,e,2,!1),n.add(i))}function es(e,t,n){var i=0;t&&(i|=4),Pd(n,e,i,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[Ur]){e[Ur]=!0,Ys.forEach(function(n){n!=="selectionchange"&&(np.has(n)||es(n,!1,e),es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,es("selectionchange",!1,t))}}function Pd(e,t,n,i){switch(kh(t)){case 2:var a=Lp;break;case 8:a=_p;break;default:a=gs}n=a.bind(null,t,n,e),a=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ns(e,t,n,i,a){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var s=i.stateNode.containerInfo;if(s===a)break;if(l===4)for(l=i.return;l!==null;){var m=l.tag;if((m===3||m===4)&&l.stateNode.containerInfo===a)return;l=l.return}for(;s!==null;){if(l=$n(s),l===null)return;if(m=l.tag,m===5||m===6||m===26||m===27){i=r=l;continue e}s=s.parentNode}}i=i.return}iu(function(){var v=r,N=yl(n),O=[];e:{var w=_u.get(e);if(w!==void 0){var E=Ja,W=e;switch(e){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":E=Xm;break;case"focusin":W="focus",E=Tl;break;case"focusout":W="blur",E=Tl;break;case"beforeblur":case"afterblur":E=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Zm;break;case ku:case Ou:case Au:E=jm;break;case Lu:E=$m;break;case"scroll":case"scrollend":E=Im;break;case"wheel":E=tf;break;case"copy":case"cut":case"paste":E=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=su;break;case"toggle":case"beforetoggle":E=af}var re=(t&4)!==0,_e=!re&&(e==="scroll"||e==="scrollend"),g=re?w!==null?w+"Capture":null:w;re=[];for(var p=v,y;p!==null;){var k=p;if(y=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||y===null||g===null||(k=Fi(p,g),k!=null&&re.push(wa(p,k,y))),_e)break;p=p.return}0<re.length&&(w=new E(w,W,null,n,N),O.push({event:w,listeners:re}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&n!==xl&&(W=n.relatedTarget||n.fromElement)&&($n(W)||W[Pn]))break e;if((E||w)&&(w=N.window===N?N:(w=N.ownerDocument)?w.defaultView||w.parentWindow:window,E?(W=n.relatedTarget||n.toElement,E=v,W=W?$n(W):null,W!==null&&(_e=A(W),re=W.tag,W!==_e||re!==5&&re!==27&&re!==6)&&(W=null)):(E=null,W=v),E!==W)){if(re=lu,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(re=su,k="onPointerLeave",g="onPointerEnter",p="pointer"),_e=E==null?w:Hi(E),y=W==null?w:Hi(W),w=new re(k,p+"leave",E,n,N),w.target=_e,w.relatedTarget=y,k=null,$n(N)===v&&(re=new re(g,p+"enter",W,n,N),re.target=y,re.relatedTarget=_e,k=re),_e=k,E&&W)t:{for(re=ip,g=E,p=W,y=0,k=g;k;k=re(k))y++;k=0;for(var te=p;te;te=re(te))k++;for(;0<y-k;)g=re(g),y--;for(;0<k-y;)p=re(p),k--;for(;y--;){if(g===p||p!==null&&g===p.alternate){re=g;break t}g=re(g),p=re(p)}re=null}else re=null;E!==null&&$d(O,w,E,re,!1),W!==null&&_e!==null&&$d(O,_e,W,re,!0)}}e:{if(w=v?Hi(v):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var we=gu;else if(fu(w))if(xu)we=ff;else{we=hf;var K=df}else E=w.nodeName,!E||E.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?v&&gl(v.elementType)&&(we=gu):we=mf;if(we&&(we=we(e,v))){pu(O,we,n,N);break e}K&&K(e,w,v),e==="focusout"&&v&&w.type==="number"&&v.memoizedProps.value!=null&&pl(w,"number",w.value)}switch(K=v?Hi(v):window,e){case"focusin":(fu(K)||K.contentEditable==="true")&&(si=K,Ll=v,Ki=null);break;case"focusout":Ki=Ll=si=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Nu(O,n,N);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":Nu(O,n,N)}var de;if(Cl)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else oi?hu(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(uu&&n.locale!=="ko"&&(oi||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&oi&&(de=au()):(rn=N,wl="value"in rn?rn.value:rn.textContent,oi=!0)),K=jr(v,xe),0<K.length&&(xe=new ou(xe,e,null,n,N),O.push({event:xe,listeners:K}),de?xe.data=de:(de=mu(n),de!==null&&(xe.data=de)))),(de=lf?of(e,n):sf(e,n))&&(xe=jr(v,"onBeforeInput"),0<xe.length&&(K=new ou("onBeforeInput","beforeinput",null,n,N),O.push({event:K,listeners:xe}),K.data=de)),$f(O,e,v,n,N)}Zd(O,t)})}function wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Fi(e,n),a!=null&&i.unshift(wa(e,a,r)),a=Fi(e,t),a!=null&&i.push(wa(e,a,r))),e.tag===3)return i;e=e.return}return[]}function ip(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $d(e,t,n,i,a){for(var r=t._reactName,l=[];n!==null&&n!==i;){var s=n,m=s.alternate,v=s.stateNode;if(s=s.tag,m!==null&&m===i)break;s!==5&&s!==26&&s!==27||v===null||(m=v,a?(v=Fi(n,r),v!=null&&l.unshift(wa(n,v,m))):a||(v=Fi(n,r),v!=null&&l.push(wa(n,v,m)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ap=/\r\n?/g,rp=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(rp,"")}function th(e,t){return t=eh(t),eh(e)===t}function Le(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ai(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ai(e,""+i);break;case"className":Ga(e,"class",i);break;case"tabIndex":Ga(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ga(e,n,i);break;case"style":tu(e,i,r);break;case"data":if(t!=="object"){Ga(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ya(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Le(e,t,"name",a.name,a,null),Le(e,t,"formEncType",a.formEncType,a,null),Le(e,t,"formMethod",a.formMethod,a,null),Le(e,t,"formTarget",a.formTarget,a,null)):(Le(e,t,"encType",a.encType,a,null),Le(e,t,"method",a.method,a,null),Le(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ya(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=jt);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ya(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Fa(e,"popover",i);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Fa(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Rm.get(n)||n,Fa(e,n,i))}}function is(e,t,n,i,a,r){switch(n){case"style":tu(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ai(e,i):(typeof i=="number"||typeof i=="bigint")&&ai(e,""+i);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[nt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Fa(e,n,i)}}}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(l!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Le(e,t,r,l,n,null)}}a&&Le(e,t,"srcSet",n.srcSet,n,null),i&&Le(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var s=r=l=a=null,m=null,v=null;for(i in n)if(n.hasOwnProperty(i)){var N=n[i];if(N!=null)switch(i){case"name":a=N;break;case"type":l=N;break;case"checked":m=N;break;case"defaultChecked":v=N;break;case"value":r=N;break;case"defaultValue":s=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:Le(e,t,i,N,n,null)}}Zs(e,r,s,m,v,l,a,!1);return;case"select":pe("invalid",e),i=l=r=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":i=s;default:Le(e,t,a,s,n,null)}t=r,n=l,e.multiple=!!i,t!=null?ii(e,!!i,t,!1):n!=null&&ii(e,!!i,n,!0);return;case"textarea":pe("invalid",e),r=a=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":a=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:Le(e,t,l,s,n,null)}$s(e,i,a,r);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(i=n[m],i!=null))switch(m){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Le(e,t,m,i,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(i=0;i<ba.length;i++)pe(ba[i],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in n)if(n.hasOwnProperty(v)&&(i=n[v],i!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Le(e,t,v,i,n,null)}return;default:if(gl(t)){for(N in n)n.hasOwnProperty(N)&&(i=n[N],i!==void 0&&is(e,t,N,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(i=n[s],i!=null&&Le(e,t,s,i,n,null))}function lp(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,l=null,s=null,m=null,v=null,N=null;for(E in n){var O=n[E];if(n.hasOwnProperty(E)&&O!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=O;default:i.hasOwnProperty(E)||Le(e,t,E,null,i,O)}}for(var w in i){var E=i[w];if(O=n[w],i.hasOwnProperty(w)&&(E!=null||O!=null))switch(w){case"type":r=E;break;case"name":a=E;break;case"checked":v=E;break;case"defaultChecked":N=E;break;case"value":l=E;break;case"defaultValue":s=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:E!==O&&Le(e,t,w,E,i,O)}}fl(e,l,s,m,v,N,r,a);return;case"select":E=l=s=w=null;for(r in n)if(m=n[r],n.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":E=m;default:i.hasOwnProperty(r)||Le(e,t,r,null,i,m)}for(a in i)if(r=i[a],m=n[a],i.hasOwnProperty(a)&&(r!=null||m!=null))switch(a){case"value":w=r;break;case"defaultValue":s=r;break;case"multiple":l=r;default:r!==m&&Le(e,t,a,r,i,m)}t=s,n=l,i=E,w!=null?ii(e,!!n,w,!1):!!i!=!!n&&(t!=null?ii(e,!!n,t,!0):ii(e,!!n,n?[]:"",!1));return;case"textarea":E=w=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Le(e,t,s,null,i,a)}for(l in i)if(a=i[l],r=n[l],i.hasOwnProperty(l)&&(a!=null||r!=null))switch(l){case"value":w=a;break;case"defaultValue":E=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==r&&Le(e,t,l,a,i,r)}Ps(e,w,E);return;case"option":for(var W in n)if(w=n[W],n.hasOwnProperty(W)&&w!=null&&!i.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Le(e,t,W,null,i,w)}for(m in i)if(w=i[m],E=n[m],i.hasOwnProperty(m)&&w!==E&&(w!=null||E!=null))switch(m){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Le(e,t,m,w,i,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)w=n[re],n.hasOwnProperty(re)&&w!=null&&!i.hasOwnProperty(re)&&Le(e,t,re,null,i,w);for(v in i)if(w=i[v],E=n[v],i.hasOwnProperty(v)&&w!==E&&(w!=null||E!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:Le(e,t,v,w,i,E)}return;default:if(gl(t)){for(var _e in n)w=n[_e],n.hasOwnProperty(_e)&&w!==void 0&&!i.hasOwnProperty(_e)&&is(e,t,_e,void 0,i,w);for(N in i)w=i[N],E=n[N],!i.hasOwnProperty(N)||w===E||w===void 0&&E===void 0||is(e,t,N,w,i,E);return}}for(var g in n)w=n[g],n.hasOwnProperty(g)&&w!=null&&!i.hasOwnProperty(g)&&Le(e,t,g,null,i,w);for(O in i)w=i[O],E=n[O],!i.hasOwnProperty(O)||w===E||w==null&&E==null||Le(e,t,O,w,i,E)}function nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,l=a.initiatorType,s=a.duration;if(r&&s&&nh(l)){for(l=0,s=a.responseEnd,i+=1;i<n.length;i++){var m=n[i],v=m.startTime;if(v>s)break;var N=m.transferSize,O=m.initiatorType;N&&nh(O)&&(m=m.responseEnd,l+=N*(m<s?1:(s-v)/(m-v)))}if(--i,t+=8*(r+l)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var as=null,rs=null;function Br(e){return e.nodeType===9?e:e.ownerDocument}function ih(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ah(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=null;function sp(){var e=window.event;return e&&e.type==="popstate"?e===os?!1:(os=e,!0):(os=null,!1)}var rh=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(e){return lh.resolve(null).then(e).catch(dp)}:rh;function dp(e){setTimeout(function(){throw e})}function Sn(e){return e==="head"}function oh(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Mi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Sa(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Sa(n);for(var r=n.firstChild;r;){var l=r.nextSibling,s=r.nodeName;r[Bi]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=l}}else n==="body"&&Sa(e.ownerDocument.body);n=a}while(n);Mi(t)}function sh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ss(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ss(n),hl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function hp(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Bi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function mp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ot(e.nextSibling),e===null))return null;return e}function uh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function us(e){return e.data==="$?"||e.data==="$~"}function cs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ds=null;function ch(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ot(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function dh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function hh(e,t,n){switch(t=Br(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Sa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hl(e)}var At=new Map,mh=new Set;function Hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tn=U.d;U.d={f:pp,r:gp,D:xp,C:yp,L:vp,m:bp,X:Sp,S:wp,M:Ep};function pp(){var e=tn.f(),t=Rr();return e||t}function gp(e){var t=ei(e);t!==null&&t.tag===5&&t.type==="form"?Lc(t):tn.r(e)}var Ri=typeof document>"u"?null:document;function fh(e,t,n){var i=Ri;if(i&&typeof t=="string"&&t){var a=wt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),mh.has(a)||(mh.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),$e(t,"link",e),Ve(t),i.head.appendChild(t)))}}function xp(e){tn.D(e),fh("dns-prefetch",e,null)}function yp(e,t){tn.C(e,t),fh("preconnect",e,t)}function vp(e,t,n){tn.L(e,t,n);var i=Ri;if(i&&e&&t){var a='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+wt(n.imageSizes)+'"]')):a+='[href="'+wt(e)+'"]';var r=a;switch(t){case"style":r=Di(e);break;case"script":r=Ii(e)}At.has(r)||(e=q({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),At.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ea(r))||t==="script"&&i.querySelector(Ta(r))||(t=i.createElement("link"),$e(t,"link",e),Ve(t),i.head.appendChild(t)))}}function bp(e,t){tn.m(e,t);var n=Ri;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+wt(i)+'"][href="'+wt(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ii(e)}if(!At.has(r)&&(e=q({rel:"modulepreload",href:e},t),At.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ta(r)))return}i=n.createElement("link"),$e(i,"link",e),Ve(i),n.head.appendChild(i)}}}function wp(e,t,n){tn.S(e,t,n);var i=Ri;if(i&&e){var a=ti(i).hoistableStyles,r=Di(e);t=t||"default";var l=a.get(r);if(!l){var s={loading:0,preload:null};if(l=i.querySelector(Ea(r)))s.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},n),(n=At.get(r))&&hs(e,n);var m=l=i.createElement("link");Ve(m),$e(m,"link",e),m._p=new Promise(function(v,N){m.onload=v,m.onerror=N}),m.addEventListener("load",function(){s.loading|=1}),m.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Fr(l,t,i)}l={type:"stylesheet",instance:l,count:1,state:s},a.set(r,l)}}}function Sp(e,t){tn.X(e,t);var n=Ri;if(n&&e){var i=ti(n).hoistableScripts,a=Ii(e),r=i.get(a);r||(r=n.querySelector(Ta(a)),r||(e=q({src:e,async:!0},t),(t=At.get(a))&&ms(e,t),r=n.createElement("script"),Ve(r),$e(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Ep(e,t){tn.M(e,t);var n=Ri;if(n&&e){var i=ti(n).hoistableScripts,a=Ii(e),r=i.get(a);r||(r=n.querySelector(Ta(a)),r||(e=q({src:e,async:!0,type:"module"},t),(t=At.get(a))&&ms(e,t),r=n.createElement("script"),Ve(r),$e(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function ph(e,t,n,i){var a=(a=J.current)?Hr(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Di(n.href),n=ti(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Di(n.href);var r=ti(a).hoistableStyles,l=r.get(e);if(l||(a=a.ownerDocument||a,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=a.querySelector(Ea(e)))&&!r._p&&(l.instance=r,l.state.loading=5),At.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},At.set(e,n),r||Tp(a,e,n,l.state))),t&&i===null)throw Error(u(528,""));return l}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ii(n),n=ti(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Di(e){return'href="'+wt(e)+'"'}function Ea(e){return'link[rel="stylesheet"]['+e+"]"}function gh(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function Tp(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),$e(t,"link",n),Ve(t),e.head.appendChild(t))}function Ii(e){return'[src="'+wt(e)+'"]'}function Ta(e){return"script[async]"+e}function xh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(i)return t.instance=i,Ve(i),i;var a=q({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ve(i),$e(i,"style",a),Fr(i,n.precedence,e),t.instance=i;case"stylesheet":a=Di(n.href);var r=e.querySelector(Ea(a));if(r)return t.state.loading|=4,t.instance=r,Ve(r),r;i=gh(n),(a=At.get(a))&&hs(i,a),r=(e.ownerDocument||e).createElement("link"),Ve(r);var l=r;return l._p=new Promise(function(s,m){l.onload=s,l.onerror=m}),$e(r,"link",i),t.state.loading|=4,Fr(r,n.precedence,e),t.instance=r;case"script":return r=Ii(n.src),(a=e.querySelector(Ta(r)))?(t.instance=a,Ve(a),a):(i=n,(a=At.get(r))&&(i=q({},n),ms(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ve(a),$e(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Fr(i,n.precedence,e));return t.instance}function Fr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,l=0;l<i.length;l++){var s=i[l];if(s.dataset.precedence===t)r=s;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gr=null;function yh(e,t,n){if(Gr===null){var i=new Map,a=Gr=new Map;a.set(n,i)}else a=Gr,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Bi]||r[Je]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var s=i.get(l);s?s.push(r):i.set(l,[r])}}return i}function vh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Np(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cp(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Di(i.href),r=t.querySelector(Ea(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Ve(r);return}r=t.ownerDocument||t,i=gh(i),(a=At.get(a))&&hs(i,a),r=r.createElement("link"),Ve(r);var l=r;l._p=new Promise(function(s,m){l.onload=s,l.onerror=m}),$e(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Wr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var fs=0;function kp(e,t){return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&fs===0&&(fs=62500*op());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>fs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yr=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yr=new Map,t.forEach(Op,e),Yr=null,Wr.call(e))}function Op(e,t){if(!(t.state.loading&4)){var n=Yr.get(e);if(n)var i=n.get(null);else{n=new Map,Yr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var l=a[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(n.set(l.dataset.precedence,l),i=l)}i&&n.set(null,i)}a=t.instance,l=a.getAttribute("data-precedence"),r=n.get(l)||i,r===i&&n.set(null,a),n.set(l,a),this.count++,i=Wr.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Na={$$typeof:H,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Ap(e,t,n,i,a,r,l,s,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.hiddenUpdates=sl(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function wh(e,t,n,i,a,r,l,s,m,v,N,O){return e=new Ap(e,t,n,l,m,v,N,O,s),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=Ql(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Kl(r),e}function Sh(e){return e?(e=di,e):di}function Eh(e,t,n,i,a,r){a=Sh(a),i.context===null?i.context=a:i.pendingContext=a,i=dn(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=hn(e,i,t),n!==null&&(st(n,e,t),ia(n,e,t))}function Th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ps(e,t){Th(e,t),(e=e.alternate)&&Th(e,t)}function Nh(e){if(e.tag===13||e.tag===31){var t=Mn(e,67108864);t!==null&&st(t,e,67108864),ps(e,67108864)}}function Ch(e){if(e.tag===13||e.tag===31){var t=yt();t=ul(t);var n=Mn(e,t);n!==null&&st(n,e,t),ps(e,t)}}var Vr=!0;function Lp(e,t,n,i){var a=S.T;S.T=null;var r=U.p;try{U.p=2,gs(e,t,n,i)}finally{U.p=r,S.T=a}}function _p(e,t,n,i){var a=S.T;S.T=null;var r=U.p;try{U.p=8,gs(e,t,n,i)}finally{U.p=r,S.T=a}}function gs(e,t,n,i){if(Vr){var a=xs(i);if(a===null)ns(e,t,i,Xr,n),Oh(e,i);else if(Dp(a,e,t,n,i))i.stopPropagation();else if(Oh(e,i),t&4&&-1<Rp.indexOf(e)){for(;a!==null;){var r=ei(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Ln(r.pendingLanes);if(l!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var m=1<<31-dt(l);s.entanglements[1]|=m,l&=~m}zt(r),(Te&6)===0&&(Lr=ut()+500,va(0))}}break;case 31:case 13:s=Mn(r,2),s!==null&&st(s,r,2),Rr(),ps(r,2)}if(r=xs(i),r===null&&ns(e,t,i,Xr,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else ns(e,t,i,null,n)}}function xs(e){return e=yl(e),ys(e)}var Xr=null;function ys(e){if(Xr=null,e=$n(e),e!==null){var t=A(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=D(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xr=e,null}function kh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gm()){case Ms:return 2;case qs:return 8;case za:case xm:return 32;case zs:return 268435456;default:return 32}default:return 32}}var vs=!1,En=null,Tn=null,Nn=null,Ca=new Map,ka=new Map,Cn=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function Oa(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ei(t),t!==null&&Nh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Dp(e,t,n,i,a){switch(t){case"focusin":return En=Oa(En,e,t,n,i,a),!0;case"dragenter":return Tn=Oa(Tn,e,t,n,i,a),!0;case"mouseover":return Nn=Oa(Nn,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Ca.set(r,Oa(Ca.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,ka.set(r,Oa(ka.get(r)||null,e,t,n,i,a)),!0}return!1}function Ah(e){var t=$n(e.target);if(t!==null){var n=A(t);if(n!==null){if(t=n.tag,t===13){if(t=D(n),t!==null){e.blockedOn=t,Gs(e.priority,function(){Ch(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,Gs(e.priority,function(){Ch(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xs(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);xl=i,n.target.dispatchEvent(i),xl=null}else return t=ei(n),t!==null&&Nh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Jr(e)&&n.delete(t)}function Ip(){vs=!1,En!==null&&Jr(En)&&(En=null),Tn!==null&&Jr(Tn)&&(Tn=null),Nn!==null&&Jr(Nn)&&(Nn=null),Ca.forEach(Lh),ka.forEach(Lh)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ip)))}var Zr=null;function _h(e){Zr!==e&&(Zr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zr===e&&(Zr=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(ys(i||n)===null)continue;break}var r=ei(n);r!==null&&(e.splice(t,3),t-=3,xo(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Mi(e){function t(m){return Kr(m,e)}En!==null&&Kr(En,e),Tn!==null&&Kr(Tn,e),Nn!==null&&Kr(Nn,e),Ca.forEach(t),ka.forEach(t);for(var n=0;n<Cn.length;n++){var i=Cn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Ah(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],l=a[nt]||null;if(typeof r=="function")l||_h(n);else if(l){var s=null;if(r&&r.hasAttribute("formAction")){if(a=r,l=r[nt]||null)s=l.formAction;else if(ys(a)!==null)continue}else s=l.action;typeof s=="function"?n[i+1]=s:(n.splice(i,3),i-=3),_h(n)}}}function Rh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return a=l})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function bs(e){this._internalRoot=e}Pr.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=yt();Eh(n,i,e,t,null,null)},Pr.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Eh(e.current,2,null,e,null,null),Rr(),t[Pn]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&Ah(e)}};var Dh=c.version;if(Dh!=="19.2.7")throw Error(u(527,Dh,"19.2.7"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{zi=$r.inject(Mp),ct=$r}catch{}}return La.createRoot=function(e,t){if(!b(e))throw Error(u(299));var n=!1,i="",a=Bc,r=Hc,l=Fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=wh(e,1,!1,null,null,n,i,null,a,r,l,Rh),e[Pn]=t.current,ts(e),new bs(t)},La.hydrateRoot=function(e,t,n){if(!b(e))throw Error(u(299));var i=!1,a="",r=Bc,l=Hc,s=Fc,m=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(m=n.formState)),t=wh(e,1,!0,t,n??null,i,a,m,r,l,s,Rh),t.context=Sh(null),n=t.current,i=yt(),i=ul(i),a=dn(i),a.callback=null,hn(n,a,i),n=i,t.current.lanes=n,ji(t,n),zt(t),e[Pn]=t.current,ts(e),new Pr(t)},La.version="19.2.7",La}var Gh;function Yp(){if(Gh)return Es.exports;Gh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Es.exports=Wp(),Es.exports}var Qp=Yp();const Vp=nm(Qp);function Xp({allProblems:o,activeDay:c,setActiveDay:f,solvedStatus:u,roadmap:b,setRoadmap:A,sqlTiers:D,activeSqlTier:j,setActiveSqlTier:L,isOpen:x}){let B=0,q=0;if(b==="algorithms")B=Object.values(o).reduce((P,le)=>P+le.problems.length,0),q=Object.keys(u).filter(P=>{const le=parseInt(P);return u[P]&&Object.values(o).some(Q=>Q.problems.some(ne=>ne.id===le))}).length;else{const P=new Set;Object.values(D).forEach(le=>le.problems.forEach(Q=>P.add(Q.id))),B=P.size,q=Array.from(P).filter(le=>u[le]).length}const z=B?Math.round(q/B*100):0,oe=P=>{const le=o[P];if(!le)return{solved:0,total:0,pct:0};const Q=le.problems.length,ne=le.problems.filter(H=>u[H.id]).length;return{solved:ne,total:Q,pct:Q?Math.round(ne/Q*100):0}},ee=P=>{const le=D[P];if(!le)return{solved:0,total:0,pct:0};const Q=new Set(le.problems.map(Z=>Z.id)),ne=Q.size,H=Array.from(Q).filter(Z=>u[Z]).length;return{solved:H,total:ne,pct:ne?Math.round(H/ne*100):0}};return d.jsxs("aside",{className:`glass sidebar${x?" open":""}`,style:{borderRight:"1px solid rgba(255,255,255,0.06)",borderTop:"none",borderLeft:"none",borderBottom:"none"},children:[d.jsxs("div",{style:{padding:"22px 20px 14px"},children:[d.jsx("div",{style:{fontSize:20,fontWeight:700,letterSpacing:"-0.5px",background:"linear-gradient(135deg, #a78bff 0%, #e879f9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Algomorph"}),d.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:2,fontWeight:500},children:b==="algorithms"?"10-Day Coding Roadmap":"SQL Database Roadmap"})]}),d.jsxs("div",{className:"neu-inset",style:{display:"flex",padding:3,borderRadius:99,margin:"0 16px 14px"},children:[d.jsx("button",{onClick:()=>A("algorithms"),className:b==="algorithms"?"neu-raised":"",style:{flex:1,padding:"7px 0",fontSize:11,fontWeight:700,borderRadius:99,border:"none",cursor:"pointer",background:b==="algorithms"?void 0:"transparent",color:b==="algorithms"?"#a78bff":"rgba(255,255,255,0.4)",boxShadow:b==="algorithms"?"0 1px 3px rgba(0,0,0,0.4)":"none",transition:"all 0.15s"},children:"Algorithms"}),d.jsx("button",{onClick:()=>A("sql"),className:b==="sql"?"neu-raised":"",style:{flex:1,padding:"7px 0",fontSize:11,fontWeight:700,borderRadius:99,border:"none",cursor:"pointer",background:b==="sql"?void 0:"transparent",color:b==="sql"?"#a78bff":"rgba(255,255,255,0.4)",boxShadow:b==="sql"?"0 1px 3px rgba(0,0,0,0.4)":"none",transition:"all 0.15s"},children:"SQL DB"})]}),d.jsx("div",{style:{padding:"0 16px 16px"},children:d.jsxs("div",{className:"neu-inset",style:{padding:"12px 14px",borderRadius:12},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:11},children:[d.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontWeight:500},children:"Overall Progress"}),d.jsxs("span",{style:{color:"#a78bff",fontWeight:700},children:[q,"/",B]})]}),d.jsx("div",{style:{height:4,background:"rgba(255,255,255,0.05)",borderRadius:99,overflow:"hidden"},children:d.jsx("div",{className:"progress-fill",style:{height:"100%",width:`${z}%`,borderRadius:99,transition:"width 0.4s ease"}})}),d.jsxs("div",{style:{textAlign:"right",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:5,fontWeight:600},children:[z,"% complete"]})]})}),d.jsx("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.05)",marginBottom:8}}),d.jsx("div",{style:{flex:1,overflowY:"auto",padding:"4px 10px 12px"},children:b==="algorithms"?Object.keys(o).map(P=>{const le=o[P],Q=parseInt(P)===c,{solved:ne,total:H,pct:Z}=oe(P),ae=ne===H&&H>0;return d.jsxs("button",{onClick:()=>f(parseInt(P)),className:Q?"neu-raised":"",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"10px 12px",borderRadius:10,marginBottom:3,cursor:"pointer",textAlign:"left",background:Q?void 0:"transparent",border:Q?"1px solid rgba(167,139,255,0.15)":"1px solid transparent",transition:"all 0.15s"},onMouseEnter:Y=>{Q||(Y.currentTarget.style.background="rgba(255,255,255,0.03)")},onMouseLeave:Y=>{Q||(Y.currentTarget.style.background="transparent")},children:[d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsxs("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:Q?"#a78bff":"rgba(255,255,255,0.2)",marginBottom:2},children:["Day ",P]}),d.jsx("div",{style:{fontSize:12.5,fontWeight:500,color:Q?"#dddde8":"rgba(255,255,255,0.45)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:le.title}),d.jsx("div",{style:{marginTop:5,height:2,background:"rgba(255,255,255,0.05)",borderRadius:99,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",width:`${Z}%`,background:ae?"#4ade80":"linear-gradient(90deg,#7c6fff,#e879f9)",borderRadius:99,transition:"width 0.3s ease"}})})]}),d.jsx("div",{style:{fontSize:11,fontWeight:700,marginLeft:10,flexShrink:0,color:ae?"#4ade80":Q?"#a78bff":"rgba(255,255,255,0.18)"},children:ae?"✓":`${ne}/${H}`})]},P)}):Object.keys(D).map(P=>{const le=D[P],Q=parseInt(P)===j,{solved:ne,total:H,pct:Z}=ee(P),ae=ne===H&&H>0;return d.jsxs("button",{onClick:()=>L(parseInt(P)),className:Q?"neu-raised":"",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"10px 12px",borderRadius:10,marginBottom:3,cursor:"pointer",textAlign:"left",background:Q?void 0:"transparent",border:Q?"1px solid rgba(167,139,255,0.15)":"1px solid transparent",transition:"all 0.15s"},onMouseEnter:Y=>{Q||(Y.currentTarget.style.background="rgba(255,255,255,0.03)")},onMouseLeave:Y=>{Q||(Y.currentTarget.style.background="transparent")},children:[d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsxs("div",{style:{fontSize:9.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:Q?"#a78bff":"rgba(255,255,255,0.2)",marginBottom:2},children:["Tier ",P]}),d.jsx("div",{style:{fontSize:12.5,fontWeight:500,color:Q?"#dddde8":"rgba(255,255,255,0.45)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:le.title}),d.jsx("div",{style:{marginTop:5,height:2,background:"rgba(255,255,255,0.05)",borderRadius:99,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",width:`${Z}%`,background:ae?"#4ade80":"linear-gradient(90deg,#7c6fff,#e879f9)",borderRadius:99,transition:"width 0.3s ease"}})})]}),d.jsx("div",{style:{fontSize:11,fontWeight:700,marginLeft:10,flexShrink:0,color:ae?"#4ade80":Q?"#a78bff":"rgba(255,255,255,0.18)"},children:ae?"✓":`${ne}/${H}`})]},P)})})]})}function Jp({activeProblem:o}){const[c,f]=M.useState(()=>{if(!o)return[];const z=localStorage.getItem(`leet10_chat_${o.id}`);if(z)try{return JSON.parse(z)}catch{}return[{id:"welcome",sender:"bot",text:`Ask me anything about **${o.name}**.`,chips:[{label:"💡 Intuition",type:"intuition"},{label:"⏱ Complexity",type:"complexity"},{label:"⚠ Edge Cases",type:"edgeCases"},{label:"🐞 Debug Tips",type:"debugging"}]}]}),[u,b]=M.useState(""),[A,D]=M.useState(!1),j=M.useRef(null);M.useEffect(()=>{if(!o)return;const z=localStorage.getItem(`leet10_chat_${o.id}`);if(z)try{f(JSON.parse(z));return}catch{}f([{id:"welcome",sender:"bot",text:`Ask me anything about **${o.name}**.`,chips:[{label:"💡 Intuition",type:"intuition"},{label:"⏱ Complexity",type:"complexity"},{label:"⚠ Edge Cases",type:"edgeCases"},{label:"🐞 Debug Tips",type:"debugging"}]}])},[o]),M.useEffect(()=>{o&&c.length>0&&localStorage.setItem(`leet10_chat_${o.id}`,JSON.stringify(c))},[c,o]),M.useEffect(()=>{var z;(z=j.current)==null||z.scrollIntoView({behavior:"smooth"})},[c,A]);const L=z=>{D(!0),setTimeout(()=>{D(!1),f(oe=>[...oe,{id:Date.now().toString(),sender:"bot",text:z}])},Math.min(900,z.length*4))},x=z=>{const oe=o.chatbotData[z]||"No data for this topic yet.";f(ee=>[...ee,{id:Date.now().toString(),sender:"user",text:z}]),L(oe)},B=z=>{if(z.preventDefault(),!u.trim())return;const oe=u.toLowerCase();f(P=>[...P,{id:Date.now().toString(),sender:"user",text:u}]),b("");let ee;oe.match(/time|space|complexity|big.?o|fast|slow/)?ee=o.chatbotData.complexity:oe.match(/intuition|approach|how|logic|concept|why/)?ee=o.chatbotData.intuition:oe.match(/edge|corner|null|empty|boundary/)?ee=o.chatbotData.edgeCases:oe.match(/bug|debug|wrong|error|fail|crash/)?ee=o.chatbotData.debugging:ee=o.chatbotData.intuition,L(ee)},q=z=>z.split(`
`).map((oe,ee)=>d.jsx("p",{style:{margin:ee>0?"6px 0 0":0},children:oe.split("**").map((P,le)=>le%2===1?d.jsx("strong",{style:{color:"#c4b8ff",fontWeight:700},children:P},le):P)},ee));return d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[d.jsx("div",{style:{padding:"14px 16px 12px",borderBottom:"1px solid rgba(255,255,255,0.05)",flexShrink:0},children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#a78bff",boxShadow:"0 0 8px rgba(167,139,255,0.8)",animation:"pulse-dot 2.5s ease-in-out infinite"}}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12.5,fontWeight:700,color:"#dddde8"},children:"Study Assistant"}),d.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:1},children:o==null?void 0:o.name})]})]})}),d.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"14px 14px 6px"},children:[c.map(z=>d.jsx("div",{style:{marginBottom:16},children:z.sender==="user"?d.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:d.jsx("div",{className:"neu-raised",style:{maxWidth:"80%",fontSize:12.5,color:"rgba(255,255,255,0.7)",padding:"8px 12px",borderRadius:"10px 10px 2px 10px",border:"1px solid rgba(255,255,255,0.05)"},children:z.text})}):d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12.5,color:"rgba(255,255,255,0.5)",lineHeight:1.7},children:q(z.text)}),z.chips&&d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:10},children:z.chips.map((oe,ee)=>d.jsx("button",{className:"chip-btn",onClick:()=>x(oe.type),children:oe.label},ee))})]})},z.id)),A&&d.jsx("div",{style:{display:"flex",gap:4,padding:"2px 0",marginBottom:8},children:[0,150,300].map(z=>d.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:"rgba(167,139,255,0.5)",animation:"chatBounce 1s ease-in-out infinite",animationDelay:`${z}ms`}},z))}),d.jsx("div",{ref:j})]}),d.jsxs("form",{onSubmit:B,style:{padding:"10px 12px",borderTop:"1px solid rgba(255,255,255,0.05)",gap:8,display:"flex",flexShrink:0},children:[d.jsx("input",{type:"text",value:u,onChange:z=>b(z.target.value),placeholder:"Ask anything...",className:"neu-inset",style:{flex:1,fontSize:12.5,color:"rgba(255,255,255,0.7)",padding:"8px 12px",borderRadius:8,outline:"none",border:"none",fontFamily:"Inter, sans-serif",background:void 0}}),d.jsx("button",{type:"submit",disabled:!u.trim(),style:{fontSize:11,fontWeight:700,padding:"7px 14px",borderRadius:8,flexShrink:0,background:u.trim()?"linear-gradient(135deg,#7c6fff,#e879f9)":"rgba(255,255,255,0.04)",color:u.trim()?"#fff":"rgba(255,255,255,0.2)",border:"none",cursor:u.trim()?"pointer":"default",boxShadow:u.trim()?"0 2px 12px rgba(124,111,255,0.4)":"none",transition:"all 0.2s"},children:"Send"})]}),d.jsx("style",{children:`
        @keyframes chatBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 6px rgba(167,139,255,0.6); }
          50% { box-shadow: 0 0 14px rgba(167,139,255,1), 0 0 20px rgba(232,121,249,0.4); }
        }
      `})]})}function Wh(o,c){(c==null||c>o.length)&&(c=o.length);for(var f=0,u=Array(c);f<c;f++)u[f]=o[f];return u}function Kp(o){if(Array.isArray(o))return o}function Zp(o,c,f){return(c=ag(c))in o?Object.defineProperty(o,c,{value:f,enumerable:!0,configurable:!0,writable:!0}):o[c]=f,o}function Pp(o,c){var f=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(f!=null){var u,b,A,D,j=[],L=!0,x=!1;try{if(A=(f=f.call(o)).next,c!==0)for(;!(L=(u=A.call(f)).done)&&(j.push(u.value),j.length!==c);L=!0);}catch(B){x=!0,b=B}finally{try{if(!L&&f.return!=null&&(D=f.return(),Object(D)!==D))return}finally{if(x)throw b}}return j}}function $p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yh(o,c){var f=Object.keys(o);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);c&&(u=u.filter(function(b){return Object.getOwnPropertyDescriptor(o,b).enumerable})),f.push.apply(f,u)}return f}function Qh(o){for(var c=1;c<arguments.length;c++){var f=arguments[c]!=null?arguments[c]:{};c%2?Yh(Object(f),!0).forEach(function(u){Zp(o,u,f[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(f)):Yh(Object(f)).forEach(function(u){Object.defineProperty(o,u,Object.getOwnPropertyDescriptor(f,u))})}return o}function eg(o,c){if(o==null)return{};var f,u,b=tg(o,c);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);for(u=0;u<A.length;u++)f=A[u],c.indexOf(f)===-1&&{}.propertyIsEnumerable.call(o,f)&&(b[f]=o[f])}return b}function tg(o,c){if(o==null)return{};var f={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(c.indexOf(u)!==-1)continue;f[u]=o[u]}return f}function ng(o,c){return Kp(o)||Pp(o,c)||rg(o,c)||$p()}function ig(o,c){if(typeof o!="object"||!o)return o;var f=o[Symbol.toPrimitive];if(f!==void 0){var u=f.call(o,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}function ag(o){var c=ig(o,"string");return typeof c=="symbol"?c:c+""}function rg(o,c){if(o){if(typeof o=="string")return Wh(o,c);var f={}.toString.call(o).slice(8,-1);return f==="Object"&&o.constructor&&(f=o.constructor.name),f==="Map"||f==="Set"?Array.from(o):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?Wh(o,c):void 0}}function lg(o,c,f){return c in o?Object.defineProperty(o,c,{value:f,enumerable:!0,configurable:!0,writable:!0}):o[c]=f,o}function Vh(o,c){var f=Object.keys(o);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);c&&(u=u.filter(function(b){return Object.getOwnPropertyDescriptor(o,b).enumerable})),f.push.apply(f,u)}return f}function Xh(o){for(var c=1;c<arguments.length;c++){var f=arguments[c]!=null?arguments[c]:{};c%2?Vh(Object(f),!0).forEach(function(u){lg(o,u,f[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(f)):Vh(Object(f)).forEach(function(u){Object.defineProperty(o,u,Object.getOwnPropertyDescriptor(f,u))})}return o}function og(){for(var o=arguments.length,c=new Array(o),f=0;f<o;f++)c[f]=arguments[f];return function(u){return c.reduceRight(function(b,A){return A(b)},u)}}function Ra(o){return function c(){for(var f=this,u=arguments.length,b=new Array(u),A=0;A<u;A++)b[A]=arguments[A];return b.length>=o.length?o.apply(this,b):function(){for(var D=arguments.length,j=new Array(D),L=0;L<D;L++)j[L]=arguments[L];return c.apply(f,[].concat(b,j))}}}function il(o){return{}.toString.call(o).includes("Object")}function sg(o){return!Object.keys(o).length}function Ia(o){return typeof o=="function"}function ug(o,c){return Object.prototype.hasOwnProperty.call(o,c)}function cg(o,c){return il(c)||On("changeType"),Object.keys(c).some(function(f){return!ug(o,f)})&&On("changeField"),c}function dg(o){Ia(o)||On("selectorType")}function hg(o){Ia(o)||il(o)||On("handlerType"),il(o)&&Object.values(o).some(function(c){return!Ia(c)})&&On("handlersType")}function mg(o){o||On("initialIsRequired"),il(o)||On("initialType"),sg(o)&&On("initialContent")}function fg(o,c){throw new Error(o[c]||o.default)}var pg={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},On=Ra(fg)(pg),el={changes:cg,selector:dg,handler:hg,initial:mg};function gg(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};el.initial(o),el.handler(c);var f={current:o},u=Ra(vg)(f,c),b=Ra(yg)(f),A=Ra(el.changes)(o),D=Ra(xg)(f);function j(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(B){return B};return el.selector(x),x(f.current)}function L(x){og(u,b,A,D)(x)}return[j,L]}function xg(o,c){return Ia(c)?c(o.current):c}function yg(o,c){return o.current=Xh(Xh({},o.current),c),c}function vg(o,c,f){return Ia(c)?c(o.current):Object.keys(f).forEach(function(u){var b;return(b=c[u])===null||b===void 0?void 0:b.call(c,o.current[u])}),f}var bg={create:gg},wg={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Sg(o){return function c(){for(var f=this,u=arguments.length,b=new Array(u),A=0;A<u;A++)b[A]=arguments[A];return b.length>=o.length?o.apply(this,b):function(){for(var D=arguments.length,j=new Array(D),L=0;L<D;L++)j[L]=arguments[L];return c.apply(f,[].concat(b,j))}}}function Eg(o){return{}.toString.call(o).includes("Object")}function Tg(o){return o||Jh("configIsRequired"),Eg(o)||Jh("configType"),o.urls?(Ng(),{paths:{vs:o.urls.monacoBase}}):o}function Ng(){console.warn(im.deprecation)}function Cg(o,c){throw new Error(o[c]||o.default)}var im={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Jh=Sg(Cg)(im),kg={config:Tg},Og=function(){for(var c=arguments.length,f=new Array(c),u=0;u<c;u++)f[u]=arguments[u];return function(b){return f.reduceRight(function(A,D){return D(A)},b)}};function am(o,c){return Object.keys(c).forEach(function(f){c[f]instanceof Object&&o[f]&&Object.assign(c[f],am(o[f],c[f]))}),Qh(Qh({},o),c)}var Ag={type:"cancelation",msg:"operation is manually canceled"};function ks(o){var c=!1,f=new Promise(function(u,b){o.then(function(A){return c?b(Ag):u(A)}),o.catch(b)});return f.cancel=function(){return c=!0},f}var Lg=["monaco"],_g=bg.create({config:wg,isInitialized:!1,resolve:null,reject:null,monaco:null}),rm=ng(_g,2),Ma=rm[0],al=rm[1];function Rg(o){var c=kg.config(o),f=c.monaco,u=eg(c,Lg);al(function(b){return{config:am(b.config,u),monaco:f}})}function Dg(){var o=Ma(function(c){var f=c.monaco,u=c.isInitialized,b=c.resolve;return{monaco:f,isInitialized:u,resolve:b}});if(!o.isInitialized){if(al({isInitialized:!0}),o.monaco)return o.resolve(o.monaco),ks(Os);if(window.monaco&&window.monaco.editor)return lm(window.monaco),o.resolve(window.monaco),ks(Os);Og(Ig,qg)(zg)}return ks(Os)}function Ig(o){return document.body.appendChild(o)}function Mg(o){var c=document.createElement("script");return o&&(c.src=o),c}function qg(o){var c=Ma(function(u){var b=u.config,A=u.reject;return{config:b,reject:A}}),f=Mg("".concat(c.config.paths.vs,"/loader.js"));return f.onload=function(){return o()},f.onerror=c.reject,f}function zg(){var o=Ma(function(f){var u=f.config,b=f.resolve,A=f.reject;return{config:u,resolve:b,reject:A}}),c=window.require;c.config(o.config),c(["vs/editor/editor.main"],function(f){var u=f.m||f;lm(u),o.resolve(u)},function(f){o.reject(f)})}function lm(o){Ma().monaco||al({monaco:o})}function Ug(){return Ma(function(o){var c=o.monaco;return c})}var Os=new Promise(function(o,c){return al({resolve:o,reject:c})}),om={config:Rg,init:Dg,__getMonacoInstance:Ug},jg={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},As=jg,Bg={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Hg=Bg;function Fg({children:o}){return Xn.createElement("div",{style:Hg.container},o)}var Gg=Fg,Wg=Gg;function Yg({width:o,height:c,isEditorReady:f,loading:u,_ref:b,className:A,wrapperProps:D}){return Xn.createElement("section",{style:{...As.wrapper,width:o,height:c},...D},!f&&Xn.createElement(Wg,null,u),Xn.createElement("div",{ref:b,style:{...As.fullWidth,...!f&&As.hide},className:A}))}var Qg=Yg,sm=M.memo(Qg);function Vg(o){M.useEffect(o,[])}var um=Vg;function Xg(o,c,f=!0){let u=M.useRef(!0);M.useEffect(u.current||!f?()=>{u.current=!1}:o,c)}var vt=Xg;function Da(){}function qi(o,c,f,u){return Jg(o,u)||Kg(o,c,f,u)}function Jg(o,c){return o.editor.getModel(cm(o,c))}function Kg(o,c,f,u){return o.editor.createModel(c,f,u?cm(o,u):void 0)}function cm(o,c){return o.Uri.parse(c)}function Zg({original:o,modified:c,language:f,originalLanguage:u,modifiedLanguage:b,originalModelPath:A,modifiedModelPath:D,keepCurrentOriginalModel:j=!1,keepCurrentModifiedModel:L=!1,theme:x="light",loading:B="Loading...",options:q={},height:z="100%",width:oe="100%",className:ee,wrapperProps:P={},beforeMount:le=Da,onMount:Q=Da}){let[ne,H]=M.useState(!1),[Z,ae]=M.useState(!0),Y=M.useRef(null),_=M.useRef(null),R=M.useRef(null),V=M.useRef(Q),X=M.useRef(le),he=M.useRef(!1);um(()=>{let ie=om.init();return ie.then(S=>(_.current=S)&&ae(!1)).catch(S=>(S==null?void 0:S.type)!=="cancelation"&&console.error("Monaco initialization: error:",S)),()=>Y.current?He():ie.cancel()}),vt(()=>{if(Y.current&&_.current){let ie=Y.current.getOriginalEditor(),S=qi(_.current,o||"",u||f||"text",A||"");S!==ie.getModel()&&ie.setModel(S)}},[A],ne),vt(()=>{if(Y.current&&_.current){let ie=Y.current.getModifiedEditor(),S=qi(_.current,c||"",b||f||"text",D||"");S!==ie.getModel()&&ie.setModel(S)}},[D],ne),vt(()=>{let ie=Y.current.getModifiedEditor();ie.getOption(_.current.editor.EditorOption.readOnly)?ie.setValue(c||""):c!==ie.getValue()&&(ie.executeEdits("",[{range:ie.getModel().getFullModelRange(),text:c||"",forceMoveMarkers:!0}]),ie.pushUndoStop())},[c],ne),vt(()=>{var ie,S;(S=(ie=Y.current)==null?void 0:ie.getModel())==null||S.original.setValue(o||"")},[o],ne),vt(()=>{let{original:ie,modified:S}=Y.current.getModel();_.current.editor.setModelLanguage(ie,u||f||"text"),_.current.editor.setModelLanguage(S,b||f||"text")},[f,u,b],ne),vt(()=>{var ie;(ie=_.current)==null||ie.editor.setTheme(x)},[x],ne),vt(()=>{var ie;(ie=Y.current)==null||ie.updateOptions(q)},[q],ne);let be=M.useCallback(()=>{var U;if(!_.current)return;X.current(_.current);let ie=qi(_.current,o||"",u||f||"text",A||""),S=qi(_.current,c||"",b||f||"text",D||"");(U=Y.current)==null||U.setModel({original:ie,modified:S})},[f,c,b,o,u,A,D]),ke=M.useCallback(()=>{var ie;!he.current&&R.current&&(Y.current=_.current.editor.createDiffEditor(R.current,{automaticLayout:!0,...q}),be(),(ie=_.current)==null||ie.editor.setTheme(x),H(!0),he.current=!0)},[q,x,be]);M.useEffect(()=>{ne&&V.current(Y.current,_.current)},[ne]),M.useEffect(()=>{!Z&&!ne&&ke()},[Z,ne,ke]);function He(){var S,U,$,me;let ie=(S=Y.current)==null?void 0:S.getModel();j||((U=ie==null?void 0:ie.original)==null||U.dispose()),L||(($=ie==null?void 0:ie.modified)==null||$.dispose()),(me=Y.current)==null||me.dispose()}return Xn.createElement(sm,{width:oe,height:z,isEditorReady:ne,loading:B,_ref:R,className:ee,wrapperProps:P})}var Pg=Zg;M.memo(Pg);function $g(o){let c=M.useRef();return M.useEffect(()=>{c.current=o},[o]),c.current}var ex=$g,tl=new Map;function tx({defaultValue:o,defaultLanguage:c,defaultPath:f,value:u,language:b,path:A,theme:D="light",line:j,loading:L="Loading...",options:x={},overrideServices:B={},saveViewState:q=!0,keepCurrentModel:z=!1,width:oe="100%",height:ee="100%",className:P,wrapperProps:le={},beforeMount:Q=Da,onMount:ne=Da,onChange:H,onValidate:Z=Da}){let[ae,Y]=M.useState(!1),[_,R]=M.useState(!0),V=M.useRef(null),X=M.useRef(null),he=M.useRef(null),be=M.useRef(ne),ke=M.useRef(Q),He=M.useRef(),ie=M.useRef(u),S=ex(A),U=M.useRef(!1),$=M.useRef(!1);um(()=>{let h=om.init();return h.then(T=>(V.current=T)&&R(!1)).catch(T=>(T==null?void 0:T.type)!=="cancelation"&&console.error("Monaco initialization: error:",T)),()=>X.current?Ee():h.cancel()}),vt(()=>{var T,I,G,C;let h=qi(V.current,o||u||"",c||b||"",A||f||"");h!==((T=X.current)==null?void 0:T.getModel())&&(q&&tl.set(S,(I=X.current)==null?void 0:I.saveViewState()),(G=X.current)==null||G.setModel(h),q&&((C=X.current)==null||C.restoreViewState(tl.get(A))))},[A],ae),vt(()=>{var h;(h=X.current)==null||h.updateOptions(x)},[x],ae),vt(()=>{!X.current||u===void 0||(X.current.getOption(V.current.editor.EditorOption.readOnly)?X.current.setValue(u):u!==X.current.getValue()&&($.current=!0,X.current.executeEdits("",[{range:X.current.getModel().getFullModelRange(),text:u,forceMoveMarkers:!0}]),X.current.pushUndoStop(),$.current=!1))},[u],ae),vt(()=>{var T,I;let h=(T=X.current)==null?void 0:T.getModel();h&&b&&((I=V.current)==null||I.editor.setModelLanguage(h,b))},[b],ae),vt(()=>{var h;j!==void 0&&((h=X.current)==null||h.revealLine(j))},[j],ae),vt(()=>{var h;(h=V.current)==null||h.editor.setTheme(D)},[D],ae);let me=M.useCallback(()=>{var h;if(!(!he.current||!V.current)&&!U.current){ke.current(V.current);let T=A||f,I=qi(V.current,u||o||"",c||b||"",T||"");X.current=(h=V.current)==null?void 0:h.editor.create(he.current,{model:I,automaticLayout:!0,...x},B),q&&X.current.restoreViewState(tl.get(T)),V.current.editor.setTheme(D),j!==void 0&&X.current.revealLine(j),Y(!0),U.current=!0}},[o,c,f,u,b,A,x,B,q,D,j]);M.useEffect(()=>{ae&&be.current(X.current,V.current)},[ae]),M.useEffect(()=>{!_&&!ae&&me()},[_,ae,me]),ie.current=u,M.useEffect(()=>{var h,T;ae&&H&&((h=He.current)==null||h.dispose(),He.current=(T=X.current)==null?void 0:T.onDidChangeModelContent(I=>{$.current||H(X.current.getValue(),I)}))},[ae,H]),M.useEffect(()=>{if(ae){let h=V.current.editor.onDidChangeMarkers(T=>{var G;let I=(G=X.current.getModel())==null?void 0:G.uri;if(I&&T.find(C=>C.path===I.path)){let C=V.current.editor.getModelMarkers({resource:I});Z==null||Z(C)}});return()=>{h==null||h.dispose()}}return()=>{}},[ae,Z]);function Ee(){var h,T;(h=He.current)==null||h.dispose(),z?q&&tl.set(A,X.current.saveViewState()):(T=X.current.getModel())==null||T.dispose(),X.current.dispose()}return Xn.createElement(sm,{width:oe,height:ee,isEditorReady:ae,loading:L,_ref:he,className:P,wrapperProps:le})}var nx=tx,ix=M.memo(nx),dm=ix;const ax="modulepreload",rx=function(o){return"/"+o},Kh={},lx=function(c,f,u){let b=Promise.resolve();if(f&&f.length>0){let D=function(x){return Promise.all(x.map(B=>Promise.resolve(B).then(q=>({status:"fulfilled",value:q}),q=>({status:"rejected",reason:q}))))};document.getElementsByTagName("link");const j=document.querySelector("meta[property=csp-nonce]"),L=(j==null?void 0:j.nonce)||(j==null?void 0:j.getAttribute("nonce"));b=D(f.map(x=>{if(x=rx(x),x in Kh)return;Kh[x]=!0;const B=x.endsWith(".css"),q=B?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${q}`))return;const z=document.createElement("link");if(z.rel=B?"stylesheet":ax,B||(z.as="script"),z.crossOrigin="",z.href=x,L&&z.setAttribute("nonce",L),document.head.appendChild(z),B)return new Promise((oe,ee)=>{z.addEventListener("load",oe),z.addEventListener("error",()=>ee(new Error(`Unable to preload CSS for ${x}`)))})}))}function A(D){const j=new Event("vite:preloadError",{cancelable:!0});if(j.payload=D,window.dispatchEvent(j),!j.defaultPrevented)throw D}return b.then(D=>{for(const j of D||[])j.status==="rejected"&&A(j.reason);return c().catch(A)})};let nl=null;async function ox(){if(nl)return nl;const o=(await lx(async()=>{const{default:c}=await import("./sql-wasm-browser-_3vonqGF.js").then(f=>f.s);return{default:c}},[])).default;return nl=await o({locateFile:()=>"/sql-wasm.wasm"}),nl}async function sx(o,c){const f=await ox(),u=new f.Database;try{c!=null&&c.setup&&u.run(c.setup);const b=u.exec(o.trim());if(!(b!=null&&b.length))return{columns:[],rows:[],error:null,rowCount:0,message:"Query executed successfully (no rows returned)."};const{columns:A,values:D}=b[b.length-1];return{columns:A,rows:D,error:null,rowCount:D.length}}catch(b){return{columns:[],rows:[],error:b.message,rowCount:0}}finally{u.close()}}const Zh={175:{description:"Person(personId, lastName, firstName) left-joined with Address(addressId, personId, city, state)",setup:`
      CREATE TABLE Person (personId INT, lastName TEXT, firstName TEXT);
      INSERT INTO Person VALUES (1,'Wang','Allen'),(2,'Alice','Bob');
      CREATE TABLE Address (addressId INT, personId INT, city TEXT, state TEXT);
      INSERT INTO Address VALUES (1,2,'New York City','New York'),(2,3,'Leetcode','California');
    `},176:{description:"Employee(id, salary)",setup:`
      CREATE TABLE Employee (id INT, salary INT);
      INSERT INTO Employee VALUES (1,100),(2,200),(3,300);
    `},177:{description:"Employee(id, salary)",setup:`
      CREATE TABLE Employee (id INT, salary INT);
      INSERT INTO Employee VALUES (1,100),(2,200),(3,300);
    `},178:{description:"Scores(id, score)",setup:`
      CREATE TABLE Scores (id INT, score REAL);
      INSERT INTO Scores VALUES (1,3.50),(2,3.65),(3,4.00),(4,3.85),(5,4.00),(6,3.65);
    `},180:{description:"Logs(id, num)",setup:`
      CREATE TABLE Logs (id INT, num INT);
      INSERT INTO Logs VALUES (1,1),(2,1),(3,1),(4,2),(5,1),(6,2),(7,2);
    `},181:{description:"Employee(id, name, salary, managerId)",setup:`
      CREATE TABLE Employee (id INT, name TEXT, salary INT, managerId INT);
      INSERT INTO Employee VALUES (1,'Joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,NULL),(4,'Max',90000,NULL);
    `},182:{description:"Person(id, email)",setup:`
      CREATE TABLE Person (id INT, email TEXT);
      INSERT INTO Person VALUES (1,'a@b.com'),(2,'c@d.com'),(3,'a@b.com');
    `},183:{description:"Customers(id, name), Orders(id, customerId)",setup:`
      CREATE TABLE Customers (id INT, name TEXT);
      INSERT INTO Customers VALUES (1,'Joe'),(2,'Henry'),(3,'Sam'),(4,'Max');
      CREATE TABLE Orders (id INT, customerId INT);
      INSERT INTO Orders VALUES (1,3),(2,1);
    `},184:{description:"Employee(id, name, salary, departmentId), Department(id, name)",setup:`
      CREATE TABLE Department (id INT, name TEXT);
      INSERT INTO Department VALUES (1,'IT'),(2,'Sales');
      CREATE TABLE Employee (id INT, name TEXT, salary INT, departmentId INT);
      INSERT INTO Employee VALUES (1,'Joe',70000,1),(2,'Jim',90000,1),(3,'Henry',80000,2),(4,'Sam',60000,2),(5,'Max',90000,1);
    `},185:{description:"Employee(id, name, salary, departmentId), Department(id, name)",setup:`
      CREATE TABLE Department (id INT, name TEXT);
      INSERT INTO Department VALUES (1,'IT'),(2,'Sales');
      CREATE TABLE Employee (id INT, name TEXT, salary INT, departmentId INT);
      INSERT INTO Employee VALUES (1,'Joe',85000,1),(2,'Henry',80000,2),(3,'Sam',60000,2),(4,'Max',90000,1),(5,'Janet',69000,1),(6,'Randy',85000,1),(7,'Will',70000,1);
    `},196:{description:"Person(id, email) — delete duplicates keeping lowest id",setup:`
      CREATE TABLE Person (id INT, email TEXT);
      INSERT INTO Person VALUES (1,'john@example.com'),(2,'bob@example.com'),(3,'john@example.com');
    `},197:{description:"Weather(id, recordDate, temperature)",setup:`
      CREATE TABLE Weather (id INT, recordDate TEXT, temperature INT);
      INSERT INTO Weather VALUES (1,'2015-01-01',10),(2,'2015-01-02',25),(3,'2015-01-03',20),(4,'2015-01-04',30);
    `},262:{description:"Trips(id, client_id, driver_id, city_id, status, request_at), Users(users_id, banned, role)",setup:`
      CREATE TABLE Users (users_id INT, banned TEXT, role TEXT);
      INSERT INTO Users VALUES (1,'No','client'),(2,'Yes','client'),(3,'No','client'),(4,'No','driver'),(10,'No','driver'),(11,'No','driver'),(12,'No','driver'),(13,'No','driver');
      CREATE TABLE Trips (id INT, client_id INT, driver_id INT, city_id INT, status TEXT, request_at TEXT);
      INSERT INTO Trips VALUES (1,1,10,1,'completed','2013-10-01'),(2,2,11,1,'cancelled_by_driver','2013-10-01'),(3,3,12,6,'completed','2013-10-01'),(4,4,13,6,'cancelled_by_client','2013-10-01'),(5,1,10,1,'completed','2013-10-02'),(6,2,11,6,'completed','2013-10-02'),(7,3,12,6,'completed','2013-10-02'),(8,2,12,12,'completed','2013-10-03'),(9,3,10,12,'completed','2013-10-03'),(10,4,13,12,'cancelled_by_driver','2013-10-03');
    `},511:{description:"Activity(player_id, device_id, event_date, games_played)",setup:`
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `},512:{description:"Activity(player_id, device_id, event_date, games_played)",setup:`
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `},534:{description:"Activity(player_id, device_id, event_date, games_played)",setup:`
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `},550:{description:"Activity(player_id, device_id, event_date, games_played)",setup:`
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `},569:{description:"Employee(id, company, salary)",setup:`
      CREATE TABLE Employee (id INT, company TEXT, salary INT);
      INSERT INTO Employee VALUES (1,'A',2341),(2,'A',341),(3,'A',15),(4,'A',15314),(5,'A',451),(6,'A',513),(7,'B',15),(8,'B',13),(9,'B',1154),(10,'B',1),(11,'B',454),(12,'B',400),(13,'C',2345),(14,'C',2645),(15,'C',2645),(16,'C',2652),(17,'C',65);
    `},570:{description:"Employee(id, name, department, managerId)",setup:`
      CREATE TABLE Employee (id INT, name TEXT, department TEXT, managerId INT);
      INSERT INTO Employee VALUES (101,'John','A',NULL),(102,'Dan','A',101),(103,'James','A',101),(104,'Amy','A',101),(105,'Anne','A',101),(106,'Ron','B',101);
    `},571:{description:"Numbers(num, frequency)",setup:`
      CREATE TABLE Numbers (num INT, frequency INT);
      INSERT INTO Numbers VALUES (0,7),(1,1),(2,3),(3,1);
    `},574:{description:"Candidate(id, name), Vote(id, candidateId)",setup:`
      CREATE TABLE Candidate (id INT, name TEXT);
      INSERT INTO Candidate VALUES (1,'A'),(2,'B'),(3,'C'),(4,'D'),(5,'E');
      CREATE TABLE Vote (id INT, candidateId INT);
      INSERT INTO Vote VALUES (1,2),(2,4),(3,3),(4,2),(5,5);
    `},577:{description:"Employee(empId, name, supervisor, salary), Bonus(empId, bonus)",setup:`
      CREATE TABLE Employee (empId INT, name TEXT, supervisor INT, salary INT);
      INSERT INTO Employee VALUES (3,'Brad',NULL,4000),(1,'John',3,1000),(2,'Dan',3,2000),(4,'Thomas',3,4000);
      CREATE TABLE Bonus (empId INT, bonus INT);
      INSERT INTO Bonus VALUES (2,500),(4,2000);
    `},578:{description:"SurveyLog(id, action, question_id, answer_id, q_num, timestamp)",setup:`
      CREATE TABLE SurveyLog (id INT, action TEXT, question_id INT, answer_id INT, q_num INT, timestamp INT);
      INSERT INTO SurveyLog VALUES (5,'show',285,NULL,1,123),(5,'answer',285,124124,1,124),(5,'show',369,NULL,2,125),(5,'skip',369,NULL,2,126);
    `},580:{description:"Student(student_id, student_name, gender, dept_id), Department(dept_id, dept_name)",setup:`
      CREATE TABLE Department (dept_id INT, dept_name TEXT);
      INSERT INTO Department VALUES (1,'Engineering'),(2,'Science'),(3,'Law');
      CREATE TABLE Student (student_id INT, student_name TEXT, gender TEXT, dept_id INT);
      INSERT INTO Student VALUES (1,'Jack','M',1),(2,'Jane','F',1),(3,'Mark','M',2);
    `},584:{description:"Customer(id, name, referee_id)",setup:`
      CREATE TABLE Customer (id INT, name TEXT, referee_id INT);
      INSERT INTO Customer VALUES (1,'Will',NULL),(2,'Jane',NULL),(3,'Alex',2),(4,'Bill',NULL),(5,'Zack',1),(6,'Mark',2);
    `},585:{description:"Insurance(pid, tiv_2015, tiv_2016, lat, lon)",setup:`
      CREATE TABLE Insurance (pid INT, tiv_2015 REAL, tiv_2016 REAL, lat REAL, lon REAL);
      INSERT INTO Insurance VALUES (1,10,5,10,10),(2,20,20,20,20),(3,10,30,20,20),(4,10,40,40,40);
    `},586:{description:"Orders(order_number, customer_number)",setup:`
      CREATE TABLE Orders (order_number INT, customer_number INT);
      INSERT INTO Orders VALUES (1,1),(2,2),(3,3),(4,3);
    `},595:{description:"World(name, continent, area, population, gdp)",setup:`
      CREATE TABLE World (name TEXT, continent TEXT, area INT, population INT, gdp BIGINT);
      INSERT INTO World VALUES ('Afghanistan','Asia',652230,25500100,20343000000),('Albania','Europe',28748,2831741,12960000000),('Algeria','Africa',2381741,37100000,188681000000),('Andorra','Europe',468,78115,3712000000),('Angola','Africa',1246700,20609294,100990000000);
    `},596:{description:"Courses(student, class)",setup:`
      CREATE TABLE Courses (student TEXT, class TEXT);
      INSERT INTO Courses VALUES ('A','Math'),('B','English'),('C','Math'),('D','Biology'),('E','Math'),('F','Computer'),('G','Math'),('H','Math'),('I','Math');
    `},597:{description:"FriendRequest(sender_id, send_to_id, request_date), RequestAccepted(requester_id, accepter_id, accept_date)",setup:`
      CREATE TABLE FriendRequest (sender_id INT, send_to_id INT, request_date TEXT);
      INSERT INTO FriendRequest VALUES (1,2,'2016/06/01'),(1,3,'2016/06/01'),(1,4,'2016/06/01'),(2,3,'2016/06/02'),(3,4,'2016/06/09');
      CREATE TABLE RequestAccepted (requester_id INT, accepter_id INT, accept_date TEXT);
      INSERT INTO RequestAccepted VALUES (1,2,'2016/06/03'),(1,3,'2016/06/08'),(2,3,'2016/06/08'),(3,4,'2016/06/09'),(3,4,'2016/06/10');
    `},601:{description:"Stadium(id, visit_date, people)",setup:`
      CREATE TABLE Stadium (id INT, visit_date TEXT, people INT);
      INSERT INTO Stadium VALUES (1,'2017-01-01',10),(2,'2017-01-02',109),(3,'2017-01-03',150),(4,'2017-01-04',99),(5,'2017-01-05',145),(6,'2017-01-06',1455),(7,'2017-01-07',199),(8,'2017-01-09',188);
    `},602:{description:"RequestAccepted(requester_id, accepter_id, accept_date)",setup:`
      CREATE TABLE RequestAccepted (requester_id INT, accepter_id INT, accept_date TEXT);
      INSERT INTO RequestAccepted VALUES (1,2,'2016/06/03'),(1,3,'2016/06/08'),(2,3,'2016/06/08'),(3,4,'2016/06/09');
    `},607:{description:"SalesPerson(sales_id, name, salary, commission_rate, hire_date), Company(com_id, name, city), Orders(order_id, order_date, com_id, sales_id, amount)",setup:`
      CREATE TABLE SalesPerson (sales_id INT, name TEXT, salary INT, commission_rate INT, hire_date TEXT);
      INSERT INTO SalesPerson VALUES (1,'John',100000,6,'4/1/2006'),(2,'Amy',12000,5,'5/1/2010'),(3,'Mark',65000,12,'12/25/2008'),(4,'Pam',25000,25,'1/1/2005'),(5,'Alex',5000,10,'2/3/2007');
      CREATE TABLE Company (com_id INT, name TEXT, city TEXT);
      INSERT INTO Company VALUES (1,'RED','Boston'),(2,'ORANGE','New York'),(3,'YELLOW','Boston'),(4,'GREEN','Wisconsin');
      CREATE TABLE Orders (order_id INT, order_date TEXT, com_id INT, sales_id INT, amount INT);
      INSERT INTO Orders VALUES (1,'1/1/2014',3,4,10000),(2,'2/1/2014',4,5,5000),(3,'3/1/2014',1,1,50000),(4,'4/1/2014',1,4,25000);
    `},608:{description:"Tree(id, p_id)",setup:`
      CREATE TABLE Tree (id INT, p_id INT);
      INSERT INTO Tree VALUES (1,NULL),(2,1),(3,1),(4,2),(5,2);
    `},610:{description:"Triangle(x, y, z)",setup:`
      CREATE TABLE Triangle (x INT, y INT, z INT);
      INSERT INTO Triangle VALUES (13,15,30),(10,20,15);
    `},612:{description:"Point2D(x, y)",setup:`
      CREATE TABLE Point2D (x INT, y INT);
      INSERT INTO Point2D VALUES (-1,-1),(0,0),(2,2);
    `},613:{description:"Point(x)",setup:`
      CREATE TABLE Point (x INT);
      INSERT INTO Point VALUES (-1),(0),(2);
    `},614:{description:"Follow(followee, follower)",setup:`
      CREATE TABLE Follow (followee TEXT, follower TEXT);
      INSERT INTO Follow VALUES ('A','B'),('B','C'),('B','D'),('D','E');
    `},615:{description:"Employee(id, company, salary)",setup:`
      CREATE TABLE Employee (id INT, company TEXT, salary INT);
      INSERT INTO Employee VALUES (1,'A',2341),(2,'A',341),(3,'A',15),(4,'A',15314),(5,'A',451),(6,'A',513),(7,'B',15),(8,'B',13),(9,'B',1154),(10,'B',1),(11,'B',454),(12,'B',400),(13,'C',2345),(14,'C',2645),(15,'C',2645),(16,'C',2652),(17,'C',65);
    `},619:{description:"MyNumbers(num)",setup:`
      CREATE TABLE MyNumbers (num INT);
      INSERT INTO MyNumbers VALUES (8),(8),(3),(3),(1),(4),(5),(6);
    `},620:{description:"Cinema(id, movie, description, rating)",setup:`
      CREATE TABLE Cinema (id INT, movie TEXT, description TEXT, rating REAL);
      INSERT INTO Cinema VALUES (1,'War','great 3D',8.9),(2,'Science','boring',8.5),(3,'irish','boring',6.2),(4,'Ice song','Fantasy',8.6),(5,'House card','Interesting',9.1);
    `},626:{description:"Seat(id, student)",setup:`
      CREATE TABLE Seat (id INT, student TEXT);
      INSERT INTO Seat VALUES (1,'Abbot'),(2,'Doris'),(3,'Emerson'),(4,'Green'),(5,'Jeames');
    `},1045:{description:"Customer(customer_id, product_key), Product(product_key)",setup:`
      CREATE TABLE Product (product_key INT);
      INSERT INTO Product VALUES (5),(6);
      CREATE TABLE Customer (customer_id INT, product_key INT);
      INSERT INTO Customer VALUES (1,5),(2,6),(3,5),(3,6),(1,6);
    `},1050:{description:"ActorDirector(actor_id, director_id, timestamp)",setup:`
      CREATE TABLE ActorDirector (actor_id INT, director_id INT, timestamp INT);
      INSERT INTO ActorDirector VALUES (1,1,0),(1,1,1),(1,1,2),(1,2,3),(1,2,4),(2,1,5),(2,1,6);
    `},1070:{description:"Sales(sale_id, product_id, year, quantity, price), Product(product_id, product_name)",setup:`
      CREATE TABLE Product (product_id INT, product_name TEXT);
      INSERT INTO Product VALUES (1,'Nokia'),(2,'Apple'),(3,'Samsung');
      CREATE TABLE Sales (sale_id INT, product_id INT, year INT, quantity INT, price INT);
      INSERT INTO Sales VALUES (1,1,2008,10,5000),(2,1,2009,10,5000),(7,2,2011,15,9000);
    `},1164:{description:"Products(product_id, new_price, change_date)",setup:`
      CREATE TABLE Products (product_id INT, new_price INT, change_date TEXT);
      INSERT INTO Products VALUES (1,20,'2019-08-14'),(2,50,'2019-08-14'),(1,30,'2019-08-15'),(1,35,'2019-08-16'),(2,65,'2019-08-17'),(3,20,'2019-08-18');
    `},1193:{description:"Transactions(id, country, state, amount, trans_date)",setup:`
      CREATE TABLE Transactions (id INT, country TEXT, state TEXT, amount INT, trans_date TEXT);
      INSERT INTO Transactions VALUES (121,'US','approved',1000,'2018-12-18'),(122,'US','declined',2000,'2018-12-19'),(123,'US','approved',2000,'2019-01-01'),(124,'DE','approved',2000,'2019-01-07');
    `},1204:{description:"Queue(person_id, person_name, weight, turn)",setup:`
      CREATE TABLE Queue (person_id INT, person_name TEXT, weight INT, turn INT);
      INSERT INTO Queue VALUES (5,'Alice',250,1),(4,'Bob',175,5),(3,'Alex',350,2),(6,'John Cena',400,3),(1,'Winston',500,6),(2,'Marie',200,4);
    `},1321:{description:"Customer(customer_id, name, visited_on, amount)",setup:`
      CREATE TABLE Customer (customer_id INT, name TEXT, visited_on TEXT, amount INT);
      INSERT INTO Customer VALUES (1,'Jhon','2019-01-01',100),(2,'Daniel','2019-01-02',110),(3,'Jade','2019-01-03',120),(4,'Khaled','2019-01-04',130),(5,'Winston','2019-01-05',110),(6,'Elvis','2019-01-06',140),(7,'Anna','2019-01-07',150),(8,'Maria','2019-01-08',80),(9,'Jaze','2019-01-09',110),(1,'Jhon','2019-01-10',130),(3,'Jade','2019-01-10',150);
    `},1341:{description:"Movies(movie_id, title), Users(user_id, name), MovieRating(movie_id, user_id, rating, created_at)",setup:`
      CREATE TABLE Movies (movie_id INT, title TEXT);
      INSERT INTO Movies VALUES (1,'Avengers'),(2,'Frozen 2'),(3,'Joker');
      CREATE TABLE Users (user_id INT, name TEXT);
      INSERT INTO Users VALUES (1,'Daniel'),(2,'Monica'),(3,'Maria'),(4,'James');
      CREATE TABLE MovieRating (movie_id INT, user_id INT, rating INT, created_at TEXT);
      INSERT INTO MovieRating VALUES (1,1,3,'2020-01-12'),(1,2,4,'2020-02-11'),(1,3,2,'2020-02-12'),(1,4,1,'2020-01-01'),(2,1,5,'2020-02-17'),(2,2,2,'2020-02-01'),(2,3,2,'2020-03-01'),(3,1,3,'2020-02-22'),(3,2,4,'2020-02-25');
    `},1393:{description:"Stocks(stock_name, operation, operation_day, price)",setup:`
      CREATE TABLE Stocks (stock_name TEXT, operation TEXT, operation_day INT, price INT);
      INSERT INTO Stocks VALUES ('Leetcode','Buy',1,1000),('Corona Masks','Buy',2,10),('Leetcode','Sell',5,9000),('Handbags','Buy',17,30000),('Corona Masks','Sell',3,1010),('Corona Masks','Buy',4,1000),('Corona Masks','Sell',5,500),('Corona Masks','Buy',6,1000),('Handbags','Sell',29,7000),('Corona Masks','Sell',10,10000);
    `},1407:{description:"Users(id, name), Rides(id, user_id, distance)",setup:`
      CREATE TABLE Users (id INT, name TEXT);
      INSERT INTO Users VALUES (1,'Alice'),(2,'Bob'),(3,'Alex'),(4,'Donald'),(7,'Lee'),(13,'Jonathan'),(19,'Elvis');
      CREATE TABLE Rides (id INT, user_id INT, distance INT);
      INSERT INTO Rides VALUES (1,1,120),(2,2,317),(3,3,222),(4,7,100),(5,13,312),(6,19,50),(7,7,120),(8,19,400),(9,7,50);
    `},1484:{description:"Activities(sell_date, product)",setup:`
      CREATE TABLE Activities (sell_date TEXT, product TEXT);
      INSERT INTO Activities VALUES ('2020-05-30','Headphone'),('2020-06-01','Pencil'),('2020-06-02','Mask'),('2020-05-30','Basketball'),('2020-06-01','Bible'),('2020-06-02','Mask'),('2020-05-30','T-Shirt');
    `},1517:{description:"Users(user_id, name, mail)",setup:`
      CREATE TABLE Users (user_id INT, name TEXT, mail TEXT);
      INSERT INTO Users VALUES (1,'Winston','winston@leetcode.com'),(2,'Jonathan','jonathanisgreat'),(3,'Annabelle','bella-@leetcode.com'),(4,'Sally','sally.come@leetcode.com'),(5,'Marwan','quarz#2020@leetcode.com'),(6,'David','david69@gmail.com'),(7,'Shapiro','.shapo@leetcode.com');
    `},1527:{description:"Patients(patient_id, patient_name, conditions)",setup:`
      CREATE TABLE Patients (patient_id INT, patient_name TEXT, conditions TEXT);
      INSERT INTO Patients VALUES (1,'Daniel','YFEV COUGH'),(2,'Alice',''),(3,'Bob','DIAB100 MYOP'),(4,'George','ACNE DIAB100'),(5,'Alain','DIAB201');
    `},1667:{description:"Users(user_id, name)",setup:`
      CREATE TABLE Users (user_id INT, name TEXT);
      INSERT INTO Users VALUES (1,'aLice'),(2,'bOB');
    `},1683:{description:"Tweets(tweet_id, content)",setup:`
      CREATE TABLE Tweets (tweet_id INT, content TEXT);
      INSERT INTO Tweets VALUES (1,'Vote for Biden'),(2,'Let us make America great again!');
    `},1693:{description:"DailySales(date_id, make_name, lead_id, partner_id)",setup:`
      CREATE TABLE DailySales (date_id TEXT, make_name TEXT, lead_id INT, partner_id INT);
      INSERT INTO DailySales VALUES ('2020-12-8','toyota',0,1),('2020-12-8','toyota',1,0),('2020-12-8','toyota',1,2),('2020-12-7','toyota',0,2),('2020-12-7','toyota',0,1),('2020-12-8','honda',1,2),('2020-12-8','honda',2,1),('2020-12-7','honda',0,1),('2020-12-7','honda',1,2),('2020-12-7','honda',1,3);
    `},1729:{description:"Followers(user_id, follower_id)",setup:`
      CREATE TABLE Followers (user_id INT, follower_id INT);
      INSERT INTO Followers VALUES (0,1),(1,0),(2,0),(2,1);
    `},1731:{description:"Employees(employee_id, name, reports_to, age)",setup:`
      CREATE TABLE Employees (employee_id INT, name TEXT, reports_to INT, age INT);
      INSERT INTO Employees VALUES (9,'Hercy',NULL,43),(6,'Alice',9,41),(4,'Bob',9,36),(2,'Winston',NULL,37);
    `},1741:{description:"Employees(emp_id, event_day, in_time, out_time)",setup:`
      CREATE TABLE Employees (emp_id INT, event_day TEXT, in_time INT, out_time INT);
      INSERT INTO Employees VALUES (1,'2020-11-28',4,32),(1,'2020-11-28',55,200),(1,'2020-12-03',1,42),(2,'2020-11-28',3,33),(2,'2020-12-09',47,74);
    `},1757:{description:"Products(product_id, low_fats, recyclable)",setup:`
      CREATE TABLE Products (product_id INT, low_fats TEXT, recyclable TEXT);
      INSERT INTO Products VALUES (0,'Y','N'),(1,'Y','Y'),(2,'N','Y'),(3,'Y','Y'),(4,'N','N');
    `},1789:{description:"Employee(employee_id, department_id, primary_flag)",setup:`
      CREATE TABLE Employee (employee_id INT, department_id INT, primary_flag TEXT);
      INSERT INTO Employee VALUES (1,1,'N'),(2,1,'Y'),(2,2,'N'),(3,3,'N'),(4,2,'N'),(4,3,'Y'),(4,4,'N');
    `},1907:{description:"Accounts(account_id, income)",setup:`
      CREATE TABLE Accounts (account_id INT, income INT);
      INSERT INTO Accounts VALUES (3,108939),(2,12747),(8,87709),(6,91796);
    `},1934:{description:"Signups(user_id, time_stamp), Confirmations(user_id, time_stamp, action)",setup:`
      CREATE TABLE Signups (user_id INT, time_stamp TEXT);
      INSERT INTO Signups VALUES (3,'2020-03-21 10:16:13'),(7,'2020-01-04 13:57:59'),(2,'2020-07-29 23:09:44'),(6,'2020-12-09 10:39:37');
      CREATE TABLE Confirmations (user_id INT, time_stamp TEXT, action TEXT);
      INSERT INTO Confirmations VALUES (3,'2021-01-06 03:30:46','timeout'),(3,'2021-07-14 14:00:00','timeout'),(7,'2021-06-12 11:57:29','confirmed'),(7,'2021-06-13 12:58:28','confirmed'),(7,'2021-06-14 13:59:27','confirmed'),(2,'2021-01-22 00:00:00','confirmed'),(2,'2021-02-28 23:59:59','timeout');
    `}},Rs={1:{cpp:(o,c)=>`
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

${c?o:`
class Solution {
public:
    ${o}
};
`}

struct TestCase {
    vector<int> nums;
    int target;
    vector<int> expected;
};

int main() {
    vector<TestCase> cases = {
        {{2,7,11,15}, 9, {0,1}},
        {{3,2,4}, 6, {1,2}},
        {{3,3}, 6, {0,1}},
        {{1,2,3,4,5}, 8, {2,4}},
        {{0,4,3,0}, 0, {0,3}},
        {{-1,-2,-3,-4,-5}, -8, {2,4}},
        {{10,20,30,40}, 50, {0,3}},
        {{1,3,5,7,9}, 12, {2,3}},
        {{1,5,10,20,50}, 60, {2,4}},
        {{100,500,1000}, 1500, {1,2}},
        {{5,25,75,10}, 35, {1,3}},
        {{7,11,15,20,25}, 36, {2,4}}
    };
    
    Solution sol;
    int passed = 0;
    for(size_t i=0; i<cases.size(); ++i) {
        auto res = sol.twoSum(cases[i].nums, cases[i].target);
        if(res.size() != 2) {
            cout << "Case " << (i+1) << ": FAILED (Expected pair, got size " << res.size() << ")\\n";
            continue;
        }
        auto r_sorted = res;
        auto e_sorted = cases[i].expected;
        sort(r_sorted.begin(), r_sorted.end());
        sort(e_sorted.begin(), e_sorted.end());
        if(r_sorted == e_sorted) {
            cout << "Case " << (i+1) << ": PASSED\\n";
            passed++;
        } else {
            cout << "Case " << (i+1) << ": FAILED (Expected [" << cases[i].expected[0] << "," << cases[i].expected[1] << "], Got [" << res[0] << "," << res[1] << "])\\n";
        }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}
`,python:(o,c)=>`
${o}

${c?"":`
class Solution:
    def twoSum(self, nums, target):
        return twoSum(nums, target)
`}

test_cases = [
    ([2,7,11,15], 9, [0,1]),
    ([3,2,4], 6, [1,2]),
    ([3,3], 6, [0,1]),
    ([1,2,3,4,5], 8, [2,4]),
    ([0,4,3,0], 0, [0,3]),
    ([-1,-2,-3,-4,-5], -8, [2,4]),
    ([10,20,30,40], 50, [0,3]),
    ([1,3,5,7,9], 12, [2,3]),
    ([1,5,10,20,50], 60, [2,4]),
    ([100,500,1000], 1500, [1,2]),
    ([5,25,75,10], 35, [1,3]),
    ([7,11,15,20,25], 36, [2,4])
]

sol = Solution()
passed = 0
for i, tc in enumerate(test_cases):
    try:
        res = sol.twoSum(tc[0], tc[1])
        if res and len(res) == 2 and sorted(res) == sorted(tc[2]):
            print(f"Case {i+1}: PASSED")
            passed += 1
        else:
            print(f"Case {i+1}: FAILED (Expected {tc[2]}, Got {res})")
    except Exception as e:
        print(f"Case {i+1}: ERROR ({e})")

print(f"\\n[Test Results] {passed}/{len(test_cases)} cases passed.")
`,java:(o,c)=>`
import java.util.*;

${c?o:`
class Solution {
    ${o}
}
`}

public class Main {
    static class TestCase {
        int[] nums;
        int target;
        int[] expected;
        TestCase(int[] n, int t, int[] e) {
            nums = n; target = t; expected = e;
        }
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        List<TestCase> cases = new ArrayList<>();
        cases.add(new TestCase(new int[]{2,7,11,15}, 9, new int[]{0,1}));
        cases.add(new TestCase(new int[]{3,2,4}, 6, new int[]{1,2}));
        cases.add(new TestCase(new int[]{3,3}, 6, new int[]{0,1}));
        cases.add(new TestCase(new int[]{1,2,3,4,5}, 8, new int[]{2,4}));
        cases.add(new TestCase(new int[]{0,4,3,0}, 0, new int[]{0,3}));
        cases.add(new TestCase(new int[]{-1,-2,-3,-4,-5}, -8, new int[]{2,4}));
        cases.add(new TestCase(new int[]{10,20,30,40}, 50, new int[]{0,3}));
        cases.add(new TestCase(new int[]{1,3,5,7,9}, 12, new int[]{2,3}));
        cases.add(new TestCase(new int[]{1,5,10,20,50}, 60, new int[]{2,4}));
        cases.add(new TestCase(new int[]{100,500,1000}, 1500, new int[]{1,2}));
        cases.add(new TestCase(new int[]{5,25,75,10}, 35, new int[]{1,3}));
        cases.add(new TestCase(new int[]{7,11,15,20,25}, 36, new int[]{2,4}));

        int passed = 0;
        for(int i=0; i<cases.size(); ++i) {
            try {
                TestCase tc = cases.get(i);
                int[] res = sol.twoSum(tc.nums, tc.target);
                if(res == null || res.length != 2) {
                    System.out.println("Case " + (i+1) + ": FAILED");
                    continue;
                }
                int[] r_sorted = res.clone();
                int[] e_sorted = tc.expected.clone();
                Arrays.sort(r_sorted);
                Arrays.sort(e_sorted);
                if(Arrays.equals(r_sorted, e_sorted)) {
                    System.out.println("Case " + (i+1) + ": PASSED");
                    passed++;
                } else {
                    System.out.println("Case " + (i+1) + ": FAILED (Expected " + Arrays.toString(tc.expected) + ", Got " + Arrays.toString(res) + ")");
                }
            } catch(Exception e) {
                System.out.println("Case " + (i+1) + ": ERROR (" + e.getMessage() + ")");
            }
        }
        System.out.println("\\n[Test Results] " + passed + "/" + cases.size() + " cases passed.");
    }
}
`},217:{cpp:(o,c)=>`
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

${c?o:`
class Solution {
public:
    ${o}
};
`}

struct TestCase {
    vector<int> nums;
    bool expected;
};

int main() {
    vector<TestCase> cases = {
        {{1,2,3,1}, true},
        {{1,2,3,4}, false},
        {{1,1,1,3,3,4,3,2,4,2}, true},
        {{}, false},
        {{5}, false},
        {{9,9}, true},
        {{1,2,3,4,5,6,7,8,9,10}, false},
        {{1,2,3,4,5,6,7,8,9,1}, true},
        {{-1,-2,-3,-1}, true},
        {{-1,-2,-3,-4}, false}
    };

    Solution sol;
    int passed = 0;
    for(size_t i=0; i<cases.size(); ++i) {
        bool res = sol.containsDuplicate(cases[i].nums);
        if(res == cases[i].expected) {
            cout << "Case " << (i+1) << ": PASSED\\n";
            passed++;
        } else {
            cout << "Case " << (i+1) << ": FAILED (Expected " << (cases[i].expected ? "true" : "false") << ", Got " << (res ? "true" : "false") << ")\\n";
        }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}
`,python:(o,c)=>`
${o}

${c?"":`
class Solution:
    def containsDuplicate(self, nums):
        return containsDuplicate(nums)
`}

test_cases = [
    ([1,2,3,1], True),
    ([1,2,3,4], False),
    ([1,1,1,3,3,4,3,2,4,2], True),
    ([], False),
    ([5], False),
    ([9,9], True),
    ([1,2,3,4,5,6,7,8,9,10], False),
    ([1,2,3,4,5,6,7,8,9,1], True),
    ([-1,-2,-3,-1], True),
    ([-1,-2,-3,-4], False)
]

sol = Solution()
passed = 0
for i, tc in enumerate(test_cases):
    try:
        res = sol.containsDuplicate(tc[0])
        if res == tc[1]:
            print(f"Case {i+1}: PASSED")
            passed += 1
        else:
            print(f"Case {i+1}: FAILED (Expected {tc[1]}, Got {res})")
    except Exception as e:
        print(f"Case {i+1}: ERROR ({e})")

print(f"\\n[Test Results] {passed}/{len(test_cases)} cases passed.")
`,java:(o,c)=>`
import java.util.*;

${c?o:`
class Solution {
    ${o}
}
`}

public class Main {
    static class TestCase {
        int[] nums;
        boolean expected;
        TestCase(int[] n, boolean e) { nums = n; expected = e; }
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        List<TestCase> cases = new ArrayList<>();
        cases.add(new TestCase(new int[]{1,2,3,1}, true));
        cases.add(new TestCase(new int[]{1,2,3,4}, false));
        cases.add(new TestCase(new int[]{1,1,1,3,3,4,3,2,4,2}, true));
        cases.add(new TestCase(new int[]{}, false));
        cases.add(new TestCase(new int[]{5}, false));
        cases.add(new TestCase(new int[]{9,9}, true));
        cases.add(new TestCase(new int[]{1,2,3,4,5,6,7,8,9,10}, false));
        cases.add(new TestCase(new int[]{1,2,3,4,5,6,7,8,9,1}, true));
        cases.add(new TestCase(new int[]{-1,-2,-3,-1}, true));
        cases.add(new TestCase(new int[]{-1,-2,-3,-4}, false));

        int passed = 0;
        for(int i=0; i<cases.size(); ++i) {
            try {
                TestCase tc = cases.get(i);
                boolean res = sol.containsDuplicate(tc.nums);
                if(res == tc.expected) {
                    System.out.println("Case " + (i+1) + ": PASSED");
                    passed++;
                } else {
                    System.out.println("Case " + (i+1) + ": FAILED (Expected " + tc.expected + ", Got " + res + ")");
                }
            } catch(Exception e) {
                System.out.println("Case " + (i+1) + ": ERROR (" + e.getMessage() + ")");
            }
        }
        System.out.println("\\n[Test Results] " + passed + "/" + cases.size() + " cases passed.");
    }
}
`}};function Ph(o,c,f){const u=Rs[String(o)];if(u&&u[c]){const b=/class\s+\w+/.test(f);return u[c](f,b)}return f}function ux(o,c){return!!(Rs[String(o)]&&Rs[String(o)][c])}const cx=[{id:"cpp",label:"C++",onecompiler:"cpp",monacoLang:"cpp"},{id:"python",label:"Python",onecompiler:"python",monacoLang:"python"},{id:"java",label:"Java",onecompiler:"java",monacoLang:"java"}],dx=[{id:"mysql",label:"MySQL",monacoLang:"sql"},{id:"postgresql",label:"PostgreSQL",monacoLang:"sql"},{id:"mssql",label:"MS SQL",monacoLang:"sql"}],hx="dark";function hm(o){o.editor.defineTheme("leet10-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6a737d",fontStyle:"italic"},{token:"keyword",foreground:"c792ea",fontStyle:"bold"},{token:"string",foreground:"a8ff78"},{token:"number",foreground:"f78c6c"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"89ddff"},{token:"operator",foreground:"89ddff"}],colors:{"editor.background":"#0a0a18","editor.lineHighlightBackground":"#151530","editorLineNumber.foreground":"#3c3c58","editorLineNumber.activeForeground":"#7c6fff","editor.selectionBackground":"#3c3c7040","editorCursor.foreground":"#a78bff","scrollbarSlider.background":"#2a2a44","scrollbarSlider.hoverBackground":"#3a3a5a"}})}function mx({label:o,color:c}){return d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"3px 10px",borderRadius:99,fontSize:11,fontWeight:700,background:`${c}18`,border:`1px solid ${c}40`,color:c},children:[d.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:c}}),o]})}function fx({columns:o,rows:c}){return o!=null&&o.length?d.jsx("div",{style:{overflowX:"auto",maxHeight:"100%"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"JetBrains Mono, monospace",fontSize:11.5},children:[d.jsx("thead",{children:d.jsx("tr",{children:o.map(f=>d.jsx("th",{style:{padding:"6px 12px",textAlign:"left",fontSize:10,fontWeight:700,color:"#a78bff",letterSpacing:"0.06em",borderBottom:"1px solid rgba(124,111,255,0.3)",background:"rgba(124,111,255,0.06)",textTransform:"uppercase"},children:f},f))})}),d.jsx("tbody",{children:c.map((f,u)=>d.jsx("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:f.map((b,A)=>d.jsx("td",{style:{padding:"5px 12px",color:b===null?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.75)",fontStyle:b===null?"italic":"normal",fontSize:11.5},children:b===null?"NULL":String(b)},A))},u))})]})}):null}function px(){return d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.4)"},children:[d.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(124,111,255,0.2)",borderTopColor:"#a78bff",animation:"spin 0.6s linear infinite"}}),d.jsx("span",{style:{fontSize:11.5},children:"Executing SQL…"}),d.jsx("style",{children:"@keyframes spin{to{transform:rotate(360deg)}}"})]})}function gx({label:o,content:c,color:f}){return d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:`${f}99`,marginBottom:4},children:o}),d.jsx("pre",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:11,lineHeight:1.6,color:"rgba(255,255,255,0.65)",background:"rgba(0,0,0,0.25)",border:`1px solid ${f}22`,borderRadius:8,padding:"8px 10px",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0,maxHeight:140,overflowY:"auto"},children:c.trimEnd()})]})}function xx({problem:o,activeLang:c,code:f,onLangChange:u,langs:b}){var Y;const[A,D]=M.useState(()=>{const _=localStorage.getItem(`leet10_code_${o.id}_${c}`);return _!==null?_:f}),[j,L]=M.useState(""),[x,B]=M.useState(!1),[q,z]=M.useState(0),oe=M.useRef(null),ee=M.useRef(null);M.useEffect(()=>{var V,X;const _=localStorage.getItem(`leet10_code_${o.id}_${c}`),R=_!==null?_:f;D(R),(X=(V=oe.current)==null?void 0:V.setValue)==null||X.call(V,R),L(""),B(!1)},[f,c,o.id]);const P=(_,R)=>{oe.current=_,hm(R),R.editor.setTheme("leet10-dark"),_.updateOptions({fontFamily:"'JetBrains Mono', monospace",fontSize:13,lineHeight:22,tabSize:4})},le=_=>{const R=_??"";D(R),localStorage.setItem(`leet10_code_${o.id}_${c}`,R)},Q=()=>{var he,be;D(f),(be=(he=oe.current)==null?void 0:he.setValue)==null||be.call(he,f),localStorage.setItem(`leet10_code_${o.id}_${c}`,f),L(""),B(!1);const _=ee.current,R=b.find(ke=>ke.id===c),V=(R==null?void 0:R.onecompiler)||c,X=V==="python"?"main.py":V==="cpp"?"main.cpp":"Main.java";_&&_.contentWindow&&_.contentWindow.postMessage({eventType:"populateCode",language:V,files:[{name:X,content:f}]},"*")},ne=()=>{const _=ee.current,R=b.find(ke=>ke.id===c),V=(R==null?void 0:R.onecompiler)||c,X=V==="python"?"main.py":V==="cpp"?"main.cpp":"Main.java",he=ux(o.id,c),be=Ph(o.id,c,A);_&&_.contentWindow&&_.contentWindow.postMessage({eventType:"populateCode",language:V,files:[{name:X,content:be}]},"*"),B(!0),L(he?"✓ 12 test cases injected! Click Run inside sandbox console.":"✓ Code synced! Click Run inside sandbox console."),setTimeout(()=>L(""),5e3)},H=()=>{const _=ee.current,R=b.find(be=>be.id===c),V=(R==null?void 0:R.onecompiler)||c,X=V==="python"?"main.py":V==="cpp"?"main.cpp":"Main.java",he=Ph(o.id,c,A);_&&_.contentWindow&&_.contentWindow.postMessage({eventType:"populateCode",language:V,files:[{name:X,content:he}]},"*")},Z=()=>b.find(_=>_.id===c),ae=()=>{const _=Z();return`https://onecompiler.com/embed/${(_==null?void 0:_.onecompiler)||c}?theme=${hx}&hideNew=true&hideLanguageSelection=true&listenToEvents=true`};return d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden",background:"#0a0a18"},children:[d.jsxs("div",{style:{height:46,display:"flex",alignItems:"center",gap:4,padding:"0 12px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(0,0,0,0.25)",flexShrink:0},children:[b.map(_=>d.jsx("button",{onClick:()=>u(_.id),style:{fontSize:10.5,fontWeight:700,padding:"4px 10px",borderRadius:7,border:c===_.id?"1px solid rgba(167,139,255,0.25)":"1px solid transparent",background:c===_.id?"rgba(124,111,255,0.12)":"transparent",color:c===_.id?"#c4b8ff":"rgba(255,255,255,0.3)",cursor:"pointer",transition:"all 0.15s",whiteSpace:"nowrap"},children:_.label},_.id)),d.jsx("div",{style:{flex:1}}),d.jsx("button",{onClick:Q,title:"Reset to solution code",style:{fontSize:10,fontWeight:700,padding:"4px 8px",borderRadius:7,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)",color:"rgba(255,255,255,0.28)",cursor:"pointer",transition:"all 0.15s"},children:"↺ Reset"})]}),d.jsx("div",{style:{flex:1,minHeight:0,overflow:"hidden",position:"relative"},children:d.jsx(dm,{height:"100%",language:((Y=Z())==null?void 0:Y.monacoLang)||"cpp",value:A,theme:"leet10-dark",onChange:le,onMount:P,options:{minimap:{enabled:!1},fontSize:13,lineHeight:22,fontFamily:"'JetBrains Mono', monospace",fontLigatures:!0,wordWrap:"on",scrollBeyondLastLine:!1,renderLineHighlight:"gutter",bracketPairColorization:{enabled:!0},padding:{top:12,bottom:12},smoothScrolling:!0,cursorBlinking:"smooth",scrollbar:{verticalScrollbarSize:5,horizontalScrollbarSize:5}}})}),d.jsxs("div",{style:{height:x?320:40,borderTop:"1px solid rgba(255,255,255,0.05)",background:"#080812",display:"flex",flexDirection:"column",transition:"height 0.2s ease",overflow:"hidden",flexShrink:0},children:[d.jsxs("div",{onClick:()=>B(!x),style:{height:40,padding:"0 16px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",background:"rgba(255,255,255,0.01)",userSelect:"none",flexShrink:0},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{fontSize:11.5,fontWeight:700,color:x?"#a78bff":"rgba(255,255,255,0.4)"},children:"Console "}),j&&d.jsx("span",{style:{fontSize:10.5,color:"#4ade80",transition:"all 0.3s ease"},children:j})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},onClick:_=>_.stopPropagation(),children:[d.jsx("button",{onClick:ne,style:{fontSize:10.5,fontWeight:700,padding:"4px 12px",borderRadius:6,border:"none",cursor:"pointer",background:"linear-gradient(135deg,#7c6fff,#e879f9)",color:"#fff",boxShadow:"0 2px 8px rgba(124,111,255,0.3)"},children:"⚡ Inject Cases & Run"}),d.jsx("span",{onClick:()=>B(!x),style:{fontSize:12,color:"rgba(255,255,255,0.3)",cursor:"pointer",transform:x?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease",display:"inline-block",padding:"0 4px"},children:"▲"})]})]}),d.jsx("div",{style:{flex:1,display:x?"block":"none",position:"relative",background:"#0a0a18"},children:d.jsx("iframe",{ref:ee,onLoad:H,src:ae(),title:"OneCompiler Playground",style:{width:"100%",height:"100%",border:"none"},sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts"},c)})]})]})}function yx({problem:o,activeLang:c,code:f,onLangChange:u,langs:b}){var ne;const[A,D]=M.useState(()=>{const H=localStorage.getItem(`leet10_code_${o.id}_${c}`);return H!==null?H:f}),[j,L]=M.useState(!1),[x,B]=M.useState(()=>{const H=localStorage.getItem(`leet10_result_${o.id}_${c}`);return H?JSON.parse(H):null}),[q,z]=M.useState(!1),oe=M.useRef(null);M.useEffect(()=>{var Y,_;const H=localStorage.getItem(`leet10_code_${o.id}_${c}`),Z=H!==null?H:f;D(Z),(_=(Y=oe.current)==null?void 0:Y.setValue)==null||_.call(Y,Z);const ae=localStorage.getItem(`leet10_result_${o.id}_${c}`);B(ae?JSON.parse(ae):null),z(!1)},[f,c,o.id]);const ee=(H,Z)=>{oe.current=H,hm(Z),Z.editor.setTheme("leet10-dark"),H.updateOptions({fontFamily:"'JetBrains Mono', monospace",fontSize:13,lineHeight:22})},P=H=>{const Z=H??"";D(Z),localStorage.setItem(`leet10_code_${o.id}_${c}`,Z)},le=M.useCallback(async()=>{L(!0),B(null),z(!0),localStorage.removeItem(`leet10_result_${o.id}_${c}`);try{const H=Zh[String(o.id)],Z=await sx(A,H);B(Z),localStorage.setItem(`leet10_result_${o.id}_${c}`,JSON.stringify(Z))}catch(H){const Z={error:H.message,columns:[],rows:[],rowCount:0};B(Z),localStorage.setItem(`leet10_result_${o.id}_${c}`,JSON.stringify(Z))}finally{L(!1)}},[A,o.id,c]);M.useEffect(()=>{const H=Z=>{(Z.ctrlKey||Z.metaKey)&&Z.key==="Enter"&&(Z.preventDefault(),j||le())};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[le,j]);const Q=Zh[String(o.id)];return d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden",background:"#0a0a18"},children:[d.jsxs("div",{style:{height:46,display:"flex",alignItems:"center",gap:4,padding:"0 12px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(0,0,0,0.25)",flexShrink:0},children:[b.map(H=>d.jsx("button",{onClick:()=>u(H.id),style:{fontSize:10.5,fontWeight:700,padding:"4px 10px",borderRadius:7,border:c===H.id?"1px solid rgba(167,139,255,0.25)":"1px solid transparent",background:c===H.id?"rgba(124,111,255,0.12)":"transparent",color:c===H.id?"#c4b8ff":"rgba(255,255,255,0.3)",cursor:"pointer",transition:"all 0.15s"},children:H.label},H.id)),d.jsx("div",{style:{flex:1}})]}),d.jsxs("div",{style:{flex:1,minHeight:0,overflow:"hidden",position:"relative"},children:[d.jsx(dm,{height:"100%",language:"sql",value:A,theme:"leet10-dark",onChange:P,onMount:ee,options:{minimap:{enabled:!1},fontSize:13,lineHeight:22,fontFamily:"'JetBrains Mono', monospace",fontLigatures:!0,wordWrap:"on",scrollBeyondLastLine:!1,padding:{top:12,bottom:12},smoothScrolling:!0,scrollbar:{verticalScrollbarSize:5,horizontalScrollbarSize:5}}}),d.jsxs("div",{style:{position:"absolute",bottom:8,right:12,pointerEvents:"none",fontSize:10,color:"rgba(255,255,255,0.12)",fontFamily:"JetBrains Mono, monospace"},children:[navigator.platform.includes("Mac")?"⌘":"Ctrl","+Enter to run"]})]}),d.jsxs("div",{style:{height:q?300:40,borderTop:"1px solid rgba(255,255,255,0.05)",background:"#080812",display:"flex",flexDirection:"column",transition:"height 0.2s ease",overflow:"hidden",flexShrink:0},children:[d.jsxs("div",{onClick:()=>z(!q),style:{height:40,padding:"0 16px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",background:"rgba(255,255,255,0.01)",userSelect:"none",flexShrink:0},children:[d.jsx("span",{style:{fontSize:11.5,fontWeight:700,color:q?"#a78bff":"rgba(255,255,255,0.4)"},children:"Query Results 📊"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},onClick:H=>H.stopPropagation(),children:[d.jsx("button",{onClick:le,disabled:j,title:"Run SQL (Ctrl+Enter)",style:{fontSize:10.5,fontWeight:700,padding:"4px 14px",borderRadius:6,border:"none",cursor:j?"not-allowed":"pointer",background:j?"rgba(124,111,255,0.2)":"linear-gradient(135deg,#6c5ce7,#9333ea)",color:j?"rgba(255,255,255,0.4)":"#fff",boxShadow:j?"none":"0 2px 8px rgba(124,111,255,0.3)"},children:j?"◌ Running…":"▶ Run SQL"}),d.jsx("span",{onClick:()=>z(!q),style:{fontSize:12,color:"rgba(255,255,255,0.3)",cursor:"pointer",transform:q?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease",display:"inline-block",padding:"0 4px"},children:"▲"})]})]}),d.jsxs("div",{style:{flex:1,display:q?"flex":"none",overflow:"hidden",padding:"12px 14px"},children:[d.jsxs("div",{style:{width:180,borderRight:"1px solid rgba(255,255,255,0.05)",paddingRight:12,overflowY:"auto",flexShrink:0},children:[d.jsx("div",{style:{fontSize:9.5,fontWeight:700,textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:4},children:"Schema"}),d.jsx("p",{style:{fontSize:10.5,color:"rgba(255,255,255,0.35)",lineHeight:1.5,margin:0},children:Q==null?void 0:Q.description})]}),d.jsxs("div",{style:{flex:1,paddingLeft:12,overflowY:"auto"},children:[d.jsx("div",{style:{fontSize:9.5,fontWeight:700,textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:6},children:"Output Table"}),j&&d.jsx(px,{}),!j&&!x&&d.jsx("p",{style:{fontSize:11.5,color:"rgba(255,255,255,0.18)",fontStyle:"italic",margin:0},children:"Execute query to show output."}),x&&!j&&(x.error?d.jsx(gx,{label:"SQL Error",content:x.error,color:"#f87171"}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[d.jsx(mx,{label:"Success",color:"#4ade80"}),d.jsxs("span",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",fontFamily:"JetBrains Mono, monospace"},children:[x.rowCount," row",x.rowCount!==1?"s":""]})]}),x.message&&!((ne=x.columns)!=null&&ne.length)&&d.jsx("p",{style:{fontSize:11.5,color:"rgba(255,255,255,0.4)",fontStyle:"italic",margin:0},children:x.message}),d.jsx(fx,{columns:x.columns,rows:x.rows})]}))]})]})]})]})}function $h({problem:o}){var D;const c=!!((D=o.solutions)!=null&&D.mysql),f=c?dx:cx,[u,b]=M.useState(c?"mysql":"cpp");M.useEffect(()=>{b(c?"mysql":"cpp")},[o.id,c]);const A=()=>{var j,L;return((L=(j=o.solutions)==null?void 0:j[u])==null?void 0:L.code)??(c?`-- Write your ${u.toUpperCase()} query here
SELECT * FROM ...;`:`// Write your ${u} solution here
`)};return c?d.jsx(yx,{problem:o,activeLang:u,code:A(),onLangChange:b,langs:f}):d.jsx(xx,{problem:o,activeLang:u,code:A(),onLangChange:b,langs:f})}const F={keyword:"#569CD6",control:"#C586C0",type:"#4EC9B0",fn:"#DCDCAA",string:"#CE9178",number:"#B5CEA8",comment:"#6A9955",operator:"#D4D4D4",variable:"#9CDCFE",plain:"#D4D4D4"},vx=new Set(["alignas","alignof","and","and_eq","asm","auto","bitand","bitor","bool","break","case","catch","char","char8_t","char16_t","char32_t","class","compl","concept","const","consteval","constexpr","constinit","const_cast","continue","co_await","co_return","co_yield","decltype","default","delete","do","double","dynamic_cast","else","enum","explicit","export","extern","false","float","for","friend","goto","if","inline","int","long","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","private","protected","public","register","reinterpret_cast","requires","return","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","while","xor","xor_eq"]),bx=new Set(["string","wstring","u8string","u16string","u32string","vector","array","deque","list","forward_list","map","multimap","unordered_map","unordered_multimap","set","multiset","unordered_set","unordered_multiset","stack","queue","priority_queue","pair","tuple","optional","variant","any","function","unique_ptr","shared_ptr","weak_ptr","iterator","const_iterator","size_type","value_type","iostream","ostream","istream","stringstream","fstream","ListNode","TreeNode","Node","Graph","INT_MAX","INT_MIN","LLONG_MAX","LLONG_MIN"]),wx=new Set(["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield","self","cls"]),Sx=new Set(["abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","List","Dict","Set","Tuple","Optional","Union","Any","Callable","Iterable","Iterator","Generator","Sequence","Mapping","deque","defaultdict","Counter","OrderedDict","heapq","math","collections","ListNode","TreeNode","Node"]),Ex=new Set(["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","false","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","null","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","true","try","var","void","volatile","while","record","sealed","permits","yield"]),Tx=new Set(["String","Integer","Long","Double","Float","Boolean","Character","Byte","Short","Number","Object","Class","Void","List","ArrayList","LinkedList","Vector","Map","HashMap","TreeMap","LinkedHashMap","Hashtable","Set","HashSet","TreeSet","LinkedHashSet","Queue","Deque","ArrayDeque","PriorityQueue","Stack","Collections","Arrays","Math","System","Objects","StringBuilder","StringBuffer","Scanner","Comparator","Comparable","Iterable","Iterator","Optional","Stream","Collectors","ListNode","TreeNode","Node","Graph"]),Nx=new Set(["select","from","where","join","left","right","inner","outer","cross","on","group","by","having","order","asc","desc","limit","offset","union","all","as","and","or","not","in","is","null","case","when","then","else","end","with","update","delete","set","insert","into","values","exists","any","some","between","like","ilike","over","partition","rows","range","following","preceding","unbounded","current","row","true","false","into","as","using","distinct","having","offset"]),Cx=new Set(["dense_rank","rank","row_number","sum","count","max","min","avg","coalesce","datediff","date_format","substring","concat","group_concat","string_agg","extract","lead","lag","ifnull","nullif","round","mod","abs","date_add","date_sub","now","curdate","year","month","day","str_to_date"]);function kx(o,c){if(!o)return[{text:" ",color:F.plain}];const f=[];let u=0;const b=o.length;for(;u<b;){let A=!1;for(const D of Ax(c)){D.re.lastIndex=0;const j=D.re.exec(o.slice(u));if(j&&j.index===0){const L=j[0];let x=D.color;D.isIdent&&(x=Ox(L,c,D.isCall)),f.push({text:L,color:x}),u+=L.length,A=!0;break}}A||(f.push({text:o[u],color:F.plain}),u++)}return f}function Ox(o,c,f){if(c==="cpp")return vx.has(o)?F.keyword:bx.has(o)||/^[A-Z]/.test(o)?F.type:f?F.fn:F.variable;if(c==="python")return wx.has(o)?F.keyword:Sx.has(o)||/^[A-Z]/.test(o)?F.type:f?F.fn:F.variable;if(c==="java")return Ex.has(o)?F.keyword:Tx.has(o)||/^[A-Z]/.test(o)?F.type:f?F.fn:F.variable;if(c==="mysql"||c==="postgresql"||c==="mssql"){const u=o.toLowerCase();return Nx.has(u)?F.keyword:Cx.has(u)?F.fn:F.variable}return F.plain}function Ax(o){return o==="cpp"?Lx:o==="python"?_x:o==="java"?em:o==="mysql"||o==="postgresql"||o==="mssql"?Rx:em}const Lx=[{re:/^#\s*(?:include|define|ifdef|ifndef|endif|pragma|undef|if|else|elif)\b.*/,color:F.control},{re:/^\/\/.*/,color:F.comment},{re:/^\/\*.*?\*\//,color:F.comment},{re:/^\/\*.*/,color:F.comment},{re:/^"(?:[^"\\]|\\.)*"/,color:F.string},{re:/^'(?:[^'\\]|\\.)*'/,color:F.string},{re:/^0x[\da-fA-F]+[uUlL]*/,color:F.number},{re:/^\d+\.?\d*(?:[eE][+-]?\d+)?[fFlLuU]*/,color:F.number},{re:/^[A-Za-z_]\w*(?=\s*\()/,color:F.fn,isIdent:!0,isCall:!0},{re:/^[A-Za-z_]\w*/,color:F.variable,isIdent:!0,isCall:!1},{re:/^(?:::|-[->]|[+\-*/%=<>!&|^~?:]+|[.])/,color:F.operator},{re:/^[{}()[\],;]/,color:F.plain},{re:/^\s+/,color:F.plain}],_x=[{re:/^#.*/,color:F.comment},{re:/^"""[\s\S]*?"""/,color:F.string},{re:/^'''[\s\S]*?'''/,color:F.string},{re:/^f?"(?:[^"\\]|\\.)*"/,color:F.string},{re:/^f?'(?:[^'\\]|\\.)*'/,color:F.string},{re:/^@[A-Za-z_]\w*/,color:F.control},{re:/^0[xXoObB][\da-fA-F_]+/,color:F.number},{re:/^\d[\d_]*\.?[\d_]*(?:[eE][+-]?\d+)?[jJ]?/,color:F.number},{re:/^[A-Za-z_]\w*(?=\s*\()/,color:F.fn,isIdent:!0,isCall:!0},{re:/^[A-Za-z_]\w*/,color:F.variable,isIdent:!0,isCall:!1},{re:/^(?:->|[+\-*/%=<>!&|^~?:]+|[.])/,color:F.operator},{re:/^[{}()[\],;]/,color:F.plain},{re:/^\s+/,color:F.plain}],em=[{re:/^\/\/.*/,color:F.comment},{re:/^\/\*.*?\*\//,color:F.comment},{re:/^\/\*.*/,color:F.comment},{re:/^@[A-Za-z_]\w*/,color:F.control},{re:/^"(?:[^"\\]|\\.)*"/,color:F.string},{re:/^'(?:[^'\\]|\\.)*'/,color:F.string},{re:/^0[xXbB][\da-fA-F_]+[lL]?/,color:F.number},{re:/^\d[\d_]*\.?[\d_]*(?:[eE][+-]?\d+)?[fFdDlL]?/,color:F.number},{re:/^[A-Za-z_]\w*(?=\s*\()/,color:F.fn,isIdent:!0,isCall:!0},{re:/^[A-Za-z_]\w*/,color:F.variable,isIdent:!0,isCall:!1},{re:/^(?:->|::|\.\.\.|[+\-*/%=<>!&|^~?:]+|[.])/,color:F.operator},{re:/^[{}()[\],;]/,color:F.plain},{re:/^\s+/,color:F.plain}],Rx=[{re:/^--.*/,color:F.comment},{re:/^#.*/,color:F.comment},{re:/^\/\*.*?\*\//,color:F.comment},{re:/^\/\*.*/,color:F.comment},{re:/^'(?:[^'\\]|\\.)*'/,color:F.string},{re:/^"(?:[^"\\]|\\.)*"/,color:F.string},{re:/^`[^`]+`/,color:F.variable},{re:/^\[[^\]]+\]/,color:F.variable},{re:/^\d+\.?\d*(?:[eE][+-]?\d+)?/,color:F.number},{re:/^[A-Za-z_]\w*(?=\s*\()/,color:F.fn,isIdent:!0,isCall:!0},{re:/^[A-Za-z_]\w*/,color:F.variable,isIdent:!0,isCall:!1},{re:/^(?:[+\-*/%=<>!&|^~?:]+|[.])/,color:F.operator},{re:/^[{}()[\],;]/,color:F.plain},{re:/^\s+/,color:F.plain}],Dx=[{id:1,name:"Two Sum",difficulty:"Easy",topic:"HashMap",leetcodeUrl:"https://leetcode.com/problems/two-sum/",tip:"Use a hash map (dictionary) to store visited numbers and their indices. This lets you find the complement in O(1) time instead of nested loops.",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",chatbotData:{intuition:"Instead of searching for pairs from scratch (which takes O(N²)), we can remember numbers we have already seen. For any number x, we look for its complement (target - x) in a hash map. If it's already there, we found our pair! Otherwise, we store x and its index, then keep moving.",complexity:`Time Complexity: O(N) because we iterate through the list of N elements exactly once, and hash map operations (lookups/insertions) take O(1) average time.
Space Complexity: O(N) since in the worst case we will store up to N elements in our hash map.`,edgeCases:`1. The array contains duplicate numbers (e.g., nums = [3, 3], target = 6). The map handles this correctly because we look for the partner *before* adding the current duplicate.
2. The complement is the element itself (cannot use same element twice). Since we check the map before adding the current element, we never match a number with itself.`,debugging:"If your solution returns the same index twice, make sure you check if the complement exists in the map *before* adding the current element."},solutions:{cpp:{code:`vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap; // value -> index
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (numMap.count(complement)) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {};
}`,explanation:[{line:1,text:"Function declaration: takes a reference to vector of ints `nums` and `target` int, returns vector of two indices."},{line:2,text:"Declare an unordered_map `numMap` where keys are the numbers we've seen and values are their array indices."},{line:3,text:"Iterate through the array from index `0` to the size of the array."},{line:4,text:"Calculate the `complement` which is the value we need to find to reach the target."},{line:5,text:"Check if this `complement` is already a key in our map using `numMap.count()`."},{line:6,text:"If it exists, return the index of the complement and the current index `i`."},{line:8,text:"If the complement doesn't exist, save the current number and its index `i` into the map for future lookups."},{line:10,text:"Return an empty vector as a fallback (though the problem guarantees a solution exists)."}]},python:{code:`def twoSum(nums: list[int], target: int) -> list[int]:
    num_map = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`,explanation:[{line:1,text:"Define function `twoSum` with type annotations. It returns a list of integers."},{line:2,text:"Create an empty dictionary `num_map` to map visited numbers to their indices."},{line:3,text:"Loop through `nums` using `enumerate` to get both the index `i` and value `num`."},{line:4,text:"Compute `complement` (the number needed to add up to `target`)."},{line:5,text:"Check if the complement is in our dictionary."},{line:6,text:"If it is, return the stored index of the complement and the current index `i`."},{line:7,text:"Otherwise, add the current number and index to the dictionary."},{line:8,text:"Return an empty list if no pair is found."}]},java:{code:`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> numMap = new HashMap<>(); // value -> index
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (numMap.containsKey(complement)) {
            return new int[] { numMap.get(complement), i };
        }
        numMap.put(nums[i], i);
    }
    return new int[] {};
}`,explanation:[{line:1,text:"Declare method `twoSum` returning an array of two integers."},{line:2,text:"Create a new HashMap mapping Integer values to Integer indices."},{line:3,text:"Loop through the `nums` array from index 0 to `nums.length - 1`."},{line:4,text:"Find the complement needed to make `target` with the current element."},{line:5,text:"Use `numMap.containsKey()` to check if the complement has been stored."},{line:6,text:"If it exists, return a new array containing the complement's index and `i`."},{line:8,text:"If not, put the current element and its index into the map."},{line:10,text:"Return an empty array if no solution is found."}]}}},{id:217,name:"Contains Duplicate",difficulty:"Easy",topic:"Array",leetcodeUrl:"https://leetcode.com/problems/contains-duplicate/",tip:"Use a Hash Set. As you iterate, check if the element is already in the set. If yes, you found a duplicate.",description:"Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",chatbotData:{intuition:"A set only stores unique elements. We can walk through the array and insert each element into a set. If we see an element that's already in the set, we immediately know there's a duplicate. If we reach the end of the array without seeing any duplicates, all elements are unique.",complexity:`Time Complexity: O(N) because we iterate through the array of length N once, and set lookups/insertions are O(1) on average.
Space Complexity: O(N) to store elements in the set in the worst-case scenario (when all elements are unique).`,edgeCases:`1. Empty array: return false.
2. Single element: return false.
3. Large duplicates: returns true on first duplicate, which is highly efficient.`,debugging:"Make sure you insert the elements into the set *during* iteration, so you can check and exit early."},solutions:{cpp:{code:`bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.count(num)) {
            return true;
        }
        seen.insert(num);
    }
    return false;
}`,explanation:[{line:1,text:"Define the function taking a reference to the integer vector, returning a boolean."},{line:2,text:"Declare an unordered_set `seen` to store the numbers we encounter."},{line:3,text:"Use a range-based for loop to iterate through each number `num` in the vector."},{line:4,text:"Check if the current number is already in the set using `seen.count(num)`."},{line:5,text:"If `seen.count` is 1 (true), we've seen it before: return `true`."},{line:7,text:"If it's new, insert it into our set."},{line:9,text:"If loop ends without returning true, all elements are unique: return `false`."}]},python:{code:`def containsDuplicate(nums: list[int]) -> bool:
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`,explanation:[{line:1,text:"Define function `containsDuplicate` which takes a list of integers and returns a boolean."},{line:2,text:"Initialize an empty set called `seen`."},{line:3,text:"Iterate through each number `num` in `nums`."},{line:4,text:"Check if `num` already exists in our `seen` set (O(1) lookup)."},{line:5,text:"If it exists, we found a duplicate: return `True`."},{line:6,text:"If not, add `num` to our set."},{line:7,text:"If the loop finishes, all elements are unique: return `False`."}]},java:{code:`public boolean containsDuplicate(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    for (int num : nums) {
        if (seen.contains(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}`,explanation:[{line:1,text:"Method definition: takes an int array and returns a boolean."},{line:2,text:"Create a HashSet `seen` to store visited numbers."},{line:3,text:"Iterate through the array using an enhanced for-loop."},{line:4,text:"Use `seen.contains()` to check if the current element is in the set."},{line:5,text:"If true, return `true` (duplicate found)."},{line:7,text:"Otherwise, add the number to the set."},{line:9,text:"If loop completes, no duplicates were found: return `false`."}]}}},{id:242,name:"Valid Anagram",difficulty:"Easy",topic:"String / HashMap",leetcodeUrl:"https://leetcode.com/problems/valid-anagram/",tip:"Use a frequency array or hash map. Increment counts for characters in string s, and decrement for string t. All counts should end at 0.",description:"Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",chatbotData:{intuition:"An anagram means both strings have the exact same character frequencies. First, if their lengths differ, they can't be anagrams. Then, we can count the frequency of each character in string `s` and subtract the counts of characters in string `t`. If all character counts end up as exactly zero, the strings are anagrams.",complexity:`Time Complexity: O(N) where N is the length of string s (or t), since we iterate over both strings once.
Space Complexity: O(1) or O(K) where K is the alphabet size (26 for lowercase English letters), which fits in a fixed-size array.`,edgeCases:`1. Different lengths: handled immediately with a length check.
2. Unicode characters: using a hash map is better for Unicode than a fixed size 26-array. The beginner codes here use a 26-array assuming standard lowercase English letters, which is common in interviews.`,debugging:"Ensure you check the length at the start to return false immediately for strings of different sizes."},solutions:{cpp:{code:`bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    int count[26] = {0};
    for (int i = 0; i < s.length(); i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }
    for (int c : count) {
        if (c != 0) return false;
    }
    return true;
}`,explanation:[{line:1,text:"Function declaration: takes two strings and returns a boolean."},{line:2,text:"If the lengths of `s` and `t` are not equal, they cannot be anagrams: return `false` immediately."},{line:3,text:"Initialize an integer array of size 26 with all zeros to track counts of characters 'a' through 'z'."},{line:4,text:"Loop through strings `s` and `t` (we know they are of equal length now)."},{line:5,text:"Increment the count for the character at `s[i]`. `s[i] - 'a'` maps character 'a' to index 0, 'b' to 1, etc."},{line:6,text:"Decrement the count for the character at `t[i]` using the same index mapping."},{line:8,text:"Loop through our count array to make sure every value is 0."},{line:9,text:"If any character count is not 0, it means the frequencies did not match: return `false`."},{line:11,text:"If all character counts are 0, they are anagrams: return `true`."}]},python:{code:`def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    count = [0] * 26
    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1
    for val in count:
        if val != 0:
            return False
    return True`,explanation:[{line:1,text:"Define function `isAnagram` taking two strings `s` and `t`."},{line:2,text:"Check if the lengths are different. If so, they cannot be anagrams."},{line:4,text:"Create a list of 26 zeros representing alphabet counts."},{line:5,text:"Loop through the indices of the strings."},{line:6,text:"Use `ord()` to get Unicode values, subtracting `ord('a')` to map 'a'-'z' to indices 0-25. Increment for string `s`."},{line:7,text:"Decrement for character in string `t` at the same index."},{line:8,text:"Iterate through the frequency array."},{line:9,text:"If any character frequency is non-zero, return `False`."},{line:11,text:"Otherwise, return `True`."}]},java:{code:`public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] count = new int[26];
    for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
    }
    for (int val : count) {
        if (val != 0) return false;
    }
    return true;
}`,explanation:[{line:1,text:"Declare method `isAnagram` returning boolean."},{line:2,text:"Verify that lengths match. If not, return false."},{line:3,text:"Create an int array of size 26 for the 26 lowercase English letters."},{line:4,text:"Loop through the characters of both strings."},{line:5,text:"Increment the count for character in `s` at position `i`. `charAt(i) - 'a'` calculates index."},{line:6,text:"Decrement count for character in `t` at position `i`."},{line:8,text:"Check if all values in the `count` array are zero."},{line:9,text:"If any cell is not 0, return false."},{line:11,text:"Return true if all counts are balanced."}]}}},{id:268,name:"Missing Number",difficulty:"Easy",topic:"Array / Math",leetcodeUrl:"https://leetcode.com/problems/missing-number/",tip:"Use the Gauss formula: sum of numbers 0 to n is n * (n + 1) / 2. Subtract the sum of the array elements from this expected sum to find the missing number.",description:"Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",chatbotData:{intuition:"We know that the array is missing exactly one number in the range [0, n]. The sum of all numbers from 0 to n can be calculated in O(1) using Gauss's formula: S = n * (n + 1) / 2. If we calculate the actual sum of the array and subtract it from the expected sum S, the remainder must be the missing number!",complexity:`Time Complexity: O(N) because we sum up the array elements (takes one pass).
Space Complexity: O(1) as we only use a few variables for tracking sums.`,edgeCases:`1. Missing number is 0: works, because expected sum will exceed actual sum by 0.
2. Missing number is n (at the end): works perfectly.
3. Array size is 1: e.g. [0], n=1, expected sum=1, actual sum=0. Missing is 1.`,debugging:"Make sure you use the length of the array `n = nums.length` to calculate the expected sum, not the maximum element in the array."},solutions:{cpp:{code:`int missingNumber(vector<int>& nums) {
    int n = nums.size();
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;
    for (int num : nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}`,explanation:[{line:1,text:"Function declaration taking vector `nums` reference and returning the missing integer."},{line:2,text:"Get the array size `n` which represents the range maximum."},{line:3,text:"Calculate `expectedSum` of all integers from `0` to `n` using formula `n * (n + 1) / 2`."},{line:4,text:"Initialize `actualSum` to 0."},{line:5,text:"Iterate through each number `num` in the array."},{line:6,text:"Add the current number to `actualSum`."},{line:8,text:"The difference between the expected and actual sum is the missing number: return it."}]},python:{code:`def missingNumber(nums: list[int]) -> int:
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum`,explanation:[{line:1,text:"Define function `missingNumber` taking list and returning int."},{line:2,text:"Get length of `nums` as `n`."},{line:3,text:"Compute expected sum from `0` to `n` using integer division `//`."},{line:4,text:"Compute the sum of elements in `nums` using built-in `sum()` function."},{line:5,text:"Return the difference."}]},java:{code:`public int missingNumber(int[] nums) {
    int n = nums.length;
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;
    for (int num : nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}`,explanation:[{line:1,text:"Declare method `missingNumber` taking int array and returning int."},{line:2,text:"Get length of `nums` array."},{line:3,text:"Calculate the expected sum using Gauss's formula."},{line:4,text:"Initialize `actualSum` to 0."},{line:5,text:"Iterate through elements in `nums`."},{line:6,text:"Add current element to `actualSum`."},{line:8,text:"Subtract `actualSum` from `expectedSum` to find the missing integer."}]}}},{id:283,name:"Move Zeroes",difficulty:"Easy",topic:"Array",leetcodeUrl:"https://leetcode.com/problems/move-zeroes/",tip:"Use a write pointer to keep track of where the next non-zero element should go. After copying all non-zeros, fill the rest of the array with zeroes.",description:"Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements in-place.",chatbotData:{intuition:"We can maintain a pointer, let's call it `writePointer`, which starts at index 0. We iterate through the array. Whenever we see a non-zero element, we write it at `writePointer` and increment `writePointer`. Once the loop ends, all non-zero elements have been shifted to the front. We then fill all indices from `writePointer` to the end of the array with 0.",complexity:`Time Complexity: O(N) because we iterate through the array once to copy non-zero elements and then another partial pass to write zeroes. This takes at most 2N operations.
Space Complexity: O(1) auxiliary space as we modify the array in-place.`,edgeCases:`1. No zeroes in the array (e.g. [1, 2, 3]): no changes made, works.
2. All zeroes in the array (e.g. [0, 0, 0]): array stays all zeroes, works.
3. Zeroes at the beginning/end: handled correctly.`,debugging:"Remember that the question asks you to do this in-place; do not create a new array to copy elements."},solutions:{cpp:{code:`void moveZeroes(vector<int>& nums) {
    int writeIdx = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            nums[writeIdx] = nums[i];
            writeIdx++;
        }
    }
    for (int i = writeIdx; i < nums.size(); i++) {
        nums[i] = 0;
    }
}`,explanation:[{line:1,text:"Function declaration: returns void since we modify in-place."},{line:2,text:"Initialize `writeIdx` at 0. This tracks the position for the next non-zero value."},{line:3,text:"Iterate through the array using index `i`."},{line:4,text:"If the current element `nums[i]` is not zero."},{line:5,text:"Copy the non-zero element to `nums[writeIdx]`."},{line:6,text:"Increment `writeIdx` to point to the next slot."},{line:9,text:"Start a second loop from the current `writeIdx` to the end of the array."},{line:10,text:"Fill these remaining indices with 0."}]},python:{code:`def moveZeroes(nums: list[int]) -> None:
    write_idx = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[write_idx] = nums[i]
            write_idx += 1
    for i in range(write_idx, len(nums)):
        nums[i] = 0`,explanation:[{line:1,text:"Define function `moveZeroes` returning `None` (modifies list in place)."},{line:2,text:"Set write pointer `write_idx` to 0."},{line:3,text:"Loop through indices of `nums` from 0 to length - 1."},{line:4,text:"Check if the current element is non-zero."},{line:5,text:"Move the non-zero element forward to `write_idx` position."},{line:6,text:"Increment `write_idx` by 1."},{line:7,text:"Start loop from `write_idx` to the end of the list."},{line:8,text:"Set each remaining position to 0."}]},java:{code:`public void moveZeroes(int[] nums) {
    int writeIdx = 0;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[writeIdx] = nums[i];
            writeIdx++;
        }
    }
    for (int i = writeIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
}`,explanation:[{line:1,text:"Declare method `moveZeroes` returning void."},{line:2,text:"Declare a write pointer index initialized to 0."},{line:3,text:"Loop through the input array `nums`."},{line:4,text:"If `nums[i]` is not equal to 0."},{line:5,text:"Move the current non-zero value to `writeIdx` position."},{line:6,text:"Increment `writeIdx`."},{line:9,text:"Fill the rest of the array with zeroes, starting from `writeIdx`."},{line:10,text:"Set index `i` of array `nums` to 0."}]}}},{id:49,name:"Group Anagrams",difficulty:"Medium",topic:"HashMap",leetcodeUrl:"https://leetcode.com/problems/group-anagrams/",tip:"Use a hash map where the key is the sorted version of the string, and the value is a list of strings that match that sorted pattern.",description:"Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",chatbotData:{intuition:"Two words are anagrams of each other if they contain the exact same letters. If we sort the characters of an anagram, they will both produce the exact same sorted string (e.g., 'eat' and 'tea' both sort to 'aet'). We can use this sorted string as a unique key in a hash map, and append the original string to the list of values matching that key.",complexity:`Time Complexity: O(N * K log K) where N is the number of strings and K is the maximum length of a string. For each string, we sort it which takes O(K log K) time.
Space Complexity: O(N * K) to store the strings in the hash map.`,edgeCases:`1. Empty input list: returns empty list.
2. Single character strings or empty strings: handled correctly.
3. No anagrams: each string forms its own group.`,debugging:"Be sure to pass keys by value or copy when inserting/retrieving from maps, and extract only the values of the map to construct the final return list."},solutions:{cpp:{code:`vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    for (string s : strs) {
        string sorted_s = s;
        sort(sorted_s.begin(), sorted_s.end());
        groups[sorted_s].push_back(s);
    }
    vector<vector<string>> result;
    for (auto pair : groups) {
        result.push_back(pair.second);
    }
    return result;
}`,explanation:[{line:1,text:"Function signature taking a vector of strings, returning a vector of string vectors."},{line:2,text:"Declare an unordered_map `groups` mapping sorted keys to their list of anagrams."},{line:3,text:"Loop through each string `s` in the input vector `strs`."},{line:4,text:"Create a copy of string `s` called `sorted_s`."},{line:5,text:"Sort the characters in `sorted_s` alphabetically so anagrams have the same key."},{line:6,text:"Add the original string `s` to the vector of anagrams associated with key `sorted_s`."},{line:8,text:"Declare `result` vector to store grouped lists."},{line:9,text:"Iterate through each key-value pair in our hash map."},{line:10,text:"Push the vector of anagrams (`pair.second`) into the `result` list."},{line:12,text:"Return the list of groups."}]},python:{code:`def groupAnagrams(strs: list[str]) -> list[list[str]]:
    groups = {}
    for s in strs:
        sorted_s = "".join(sorted(s))
        if sorted_s not in groups:
            groups[sorted_s] = []
        groups[sorted_s].append(s)
    return list(groups.values())`,explanation:[{line:1,text:"Define function `groupAnagrams` returning list of string lists."},{line:2,text:"Initialize dictionary `groups` to hold the sorted key mapping."},{line:3,text:"Iterate through each string `s` in the list `strs`."},{line:4,text:"Sort the characters of `s` and join them back into a string to use as a key."},{line:5,text:"If the key is not in `groups`, initialize it with an empty list."},{line:7,text:"Append the original string `s` to the list of the corresponding sorted key."},{line:8,text:"Return the values of the dictionary as a list of lists."}]},java:{code:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> groups = new HashMap<>();
    for (String s : strs) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        if (!groups.containsKey(key)) {
            groups.put(key, new ArrayList<>());
        }
        groups.get(key).add(s);
    }
    return new ArrayList<>(groups.values());
}`,explanation:[{line:1,text:"Declare method returning list of string lists."},{line:2,text:"Initialize a HashMap to store sorted key mappings to string lists."},{line:3,text:"Iterate over every string `s` in the array."},{line:4,text:"Convert the string to a character array `chars`."},{line:5,text:"Sort the character array."},{line:6,text:"Create a new string from the sorted chars to serve as the map key."},{line:7,text:"If map does not have the key, insert it with a new empty ArrayList."},{line:10,text:"Add the original string `s` to the list corresponding to the key."},{line:12,text:"Construct and return a new ArrayList from the values in the map."}]}}},{id:128,name:"Longest Consecutive Sequence",difficulty:"Medium",topic:"HashMap",leetcodeUrl:"https://leetcode.com/problems/longest-consecutive-sequence/",tip:"Put all numbers in a Hash Set. Only start a sequence from a number if its predecessor (num - 1) is NOT in the set. This ensures O(n) total run time.",description:"Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.",chatbotData:{intuition:"If we search for consecutive numbers for every single number, it would be O(N²). To do this in O(N), we first store all numbers in a hash set. Then, we only start building a consecutive sequence if the current number is the *start* of a sequence. We know a number `x` is the start of a sequence if `x - 1` is not in the set. If it is the start, we check for `x + 1`, `x + 2`, etc., and record the sequence length.",complexity:`Time Complexity: O(N) because each number is visited at most twice (once during iteration and at most once inside the while loop as part of a sequence).
Space Complexity: O(N) to store the numbers in the Hash Set.`,edgeCases:`1. Empty array: returns 0.
2. All elements are the same: returns 1 (duplicates do not extend consecutive sequences).
3. Negatives and positives combined: handled correctly by set.`,debugging:"Do not forget the check `!set.contains(num - 1)`. Without this check, the complexity drops to O(N²)."},solutions:{cpp:{code:`int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    int longestStreak = 0;
    for (int num : numSet) {
        if (!numSet.count(num - 1)) {
            int currentNum = num;
            int currentStreak = 1;
            while (numSet.count(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference and returns the longest consecutive count."},{line:2,text:"Create an `unordered_set` from `nums` to remove duplicates and enable O(1) lookups."},{line:3,text:"Initialize `longestStreak` tracker to 0."},{line:4,text:"Iterate through each unique number `num` in the set."},{line:5,text:"Check if `num - 1` is in the set. If NOT, then `num` can be the beginning of a sequence."},{line:6,text:"Initialize variables to keep track of the current sequence number."},{line:7,text:"Initialize the `currentStreak` length to 1."},{line:8,text:"While `currentNum + 1` exists in our set."},{line:9,text:"Increment the sequence number by 1."},{line:10,text:"Increment the current streak size."},{line:12,text:"Update `longestStreak` if the current streak is larger."},{line:15,text:"Return the longest consecutive sequence length found."}]},python:{code:`def longestConsecutive(nums: list[int]) -> int:
    num_set = set(nums)
    longest_streak = 0
    for num in num_set:
        if (num - 1) not in num_set:
            current_num = num
            current_streak = 1
            while (current_num + 1) in num_set:
                current_num += 1
                current_streak += 1
            longest_streak = max(longest_streak, current_streak)
    return longest_streak`,explanation:[{line:1,text:"Define function `longestConsecutive` taking list of integers and returning integer."},{line:2,text:"Convert the input list to a set to enable O(1) average lookups."},{line:3,text:"Set `longest_streak` accumulator to 0."},{line:4,text:"Iterate through the unique numbers in the set."},{line:5,text:"Check if `num - 1` is in the set. If it is NOT, `num` is a sequence start."},{line:6,text:"Set `current_num` to the starting number."},{line:7,text:"Initialize `current_streak` to 1."},{line:8,text:"Use a while loop to find consecutive numbers onwards."},{line:10,text:"Increment streak as we find each consecutive element."},{line:11,text:"Record the maximum streak found so far."},{line:12,text:"Return the result."}]},java:{code:`public int longestConsecutive(int[] nums) {
    Set<Integer> numSet = new HashSet<>();
    for (int num : nums) numSet.add(num);
    int longestStreak = 0;
    for (int num : numSet) {
        if (!numSet.contains(num - 1)) {
            int currentNum = num;
            int currentStreak = 1;
            while (numSet.contains(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}`,explanation:[{line:1,text:"Declare method returning the size of the sequence."},{line:2,text:"Create a HashSet `numSet` to store numbers."},{line:3,text:"Populate the set with all numbers in `nums` to remove duplicates."},{line:4,text:"Initialize `longestStreak` to 0."},{line:5,text:"Iterate over elements in `numSet`."},{line:6,text:"If `numSet` does not contain `num - 1`, we can start a new streak."},{line:7,text:"Set helper variable `currentNum` to current `num`."},{line:8,text:"Set `currentStreak` to 1."},{line:9,text:"Check for sequential integers in the hash set."},{line:12,text:"Save the maximum of current streak vs global streak."},{line:16,text:"Return the final streak result."}]}}},{id:238,name:"Product of Array Except Self",difficulty:"Medium",topic:"Array",leetcodeUrl:"https://leetcode.com/problems/product-of-array-except-self/",tip:"Do NOT use division. Instead, make a prefix product pass from left to right, then a suffix product pass from right to left, multiplying them together.",description:"Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.",chatbotData:{intuition:"For any element at index `i`, its result is (product of all numbers to its left) * (product of all numbers to its right). We can calculate the prefix products of all elements in one pass. Then we iterate backwards, keeping a running suffix product and multiplying it into our answer array. This allows us to solve it in O(N) time with O(1) extra space (since the output array does not count as extra space).",complexity:`Time Complexity: O(N) because we make exactly two linear passes over the array of size N.
Space Complexity: O(1) auxiliary space (excluding the output array, which is allowed by the problem description).`,edgeCases:"1. Zeroes in the array: if there is one zero, all other positions are 0 except the zero position. If there are multiple zeroes, all positions become 0. This approach handles both cases naturally without crashing (unlike division which would cause division by zero errors).",debugging:"Keep a running variable `suffix` that is updated at each step of the backward loop. Do not reinitialize it."},solutions:{cpp:{code:`vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> ans(n, 1);
    for (int i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix;
        suffix = suffix * nums[i];
    }
    return ans;
}`,explanation:[{line:1,text:"Function signature taking reference to integer vector, returning vector of products."},{line:2,text:"Get size `n` of the vector."},{line:3,text:"Initialize output vector `ans` of size `n` filled with 1s."},{line:4,text:"Loop from index 1 to `n - 1` to compute prefix products."},{line:5,text:"Set `ans[i]` to prefix product of all elements to the left (current index element times previous prefix)."},{line:7,text:"Initialize `suffix` product tracker to 1."},{line:8,text:"Loop backward from `n - 1` down to 0."},{line:9,text:"Multiply `ans[i]` (which currently holds prefix product) by `suffix` (right product)."},{line:10,text:"Update `suffix` by multiplying it with the current element `nums[i]`."},{line:12,text:"Return the filled product vector."}]},python:{code:`def productExceptSelf(nums: list[int]) -> list[int]:
    n = len(nums)
    ans = [1] * n
    for i in range(1, n):
        ans[i] = ans[i - 1] * nums[i - 1]
    suffix = 1
    for i in range(n - 1, -1, -1):
        ans[i] = ans[i] * suffix
        suffix = suffix * nums[i]
    return ans`,explanation:[{line:1,text:"Define function `productExceptSelf` returning a list of integers."},{line:2,text:"Find the size of input list `nums`."},{line:3,text:"Initialize `ans` array of size `n` with 1."},{line:4,text:"Loop forward from index 1 to `n - 1`."},{line:5,text:"Store prefix product (product of elements before index `i`) in `ans[i]`."},{line:6,text:"Initialize `suffix` tracking variable to 1."},{line:7,text:"Loop backward from `n - 1` to 0."},{line:8,text:"Multiply current prefix product in `ans[i]` by `suffix`."},{line:9,text:"Multiply `suffix` by current element `nums[i]` to update it for the next element."},{line:10,text:"Return the result array."}]},java:{code:`public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] ans = new int[n];
    ans[0] = 1;
    for (int i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix;
        suffix = suffix * nums[i];
    }
    return ans;
}`,explanation:[{line:1,text:"Declare method returning an integer array of products."},{line:2,text:"Get length of array `nums`."},{line:3,text:"Create output array `ans` of size `n`."},{line:4,text:"Set first element of output array to 1 (prefix of index 0 is 1)."},{line:5,text:"Loop from 1 to `n - 1`."},{line:6,text:"Store prefix products in `ans[i]`."},{line:8,text:"Set suffix variable to 1."},{line:9,text:"Loop backward from `n - 1` down to 0."},{line:10,text:"Multiply prefix in `ans[i]` by suffix."},{line:11,text:"Update suffix by multiplying with `nums[i]`."},{line:13,text:"Return final array."}]}}}],Ix=[{id:125,name:"Valid Palindrome",difficulty:"Easy",topic:"Two Pointer",leetcodeUrl:"https://leetcode.com/problems/valid-palindrome/",tip:"Use two pointers, one at the start (left) and one at the end (right). Skip non-alphanumeric characters. Compare characters case-insensitively while moving inwards.",description:"Given a string `s`, return `true` if it is a palindrome, or `false` otherwise, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.",chatbotData:{intuition:"A palindrome reads the same backwards and forwards. We place a pointer `left` at the start of the string, and `right` at the end. We move them towards each other. If a pointer points to a non-alphanumeric character (not a letter or number), we skip it. Otherwise, we compare the lowercase version of the characters. If they differ, it's not a palindrome. If the pointers meet without any mismatch, it is a palindrome.",complexity:`Time Complexity: O(N) because we visit each character at most once with our two pointers.
Space Complexity: O(1) as we check in-place without creating a new filtered string.`,edgeCases:`1. Empty string or string with only spaces/punctuation: returns true (empty string is a valid palindrome).
2. Single character: returns true.
3. Mixed cases and special chars: correctly handled by skipping and converting to lowercase.`,debugging:"Make sure you include the condition `left < right` inside the inner while loops that skip non-alphanumeric characters, otherwise pointers could go out of bounds."},solutions:{cpp:{code:`bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) {
            left++;
        }
        while (left < right && !isalnum(s[right])) {
            right--;
        }
        if (tolower(s[left]) != tolower(s[right])) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`,explanation:[{line:1,text:"Function declaration: takes a string `s` and returns a boolean."},{line:2,text:"Initialize `left` pointer at index 0 and `right` pointer at the last index."},{line:3,text:"Loop while the `left` pointer is to the left of the `right` pointer."},{line:4,text:"Skip non-alphanumeric characters from the left. `isalnum` checks if char is a letter/number."},{line:5,text:"Increment `left` pointer to skip the non-alphanumeric character."},{line:7,text:"Skip non-alphanumeric characters from the right side."},{line:8,text:"Decrement `right` pointer to skip."},{line:10,text:"Compare characters case-insensitively using `tolower()`. If they don't match, return `false`."},{line:13,text:"Move both pointers inwards by incrementing `left` and decrementing `right`."},{line:16,text:"If the pointers meet, all alphanumeric characters matched: return `true`."}]},python:{code:`def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True`,explanation:[{line:1,text:"Define function `isPalindrome` returning bool."},{line:2,text:"Initialize `left` to 0 and `right` to the last index of `s`."},{line:3,text:"Run loop while pointers have not met."},{line:4,text:"Skip non-alphanumeric characters from the left side using `isalnum()`."},{line:6,text:"Skip non-alphanumeric characters from the right side."},{line:8,text:"Convert characters to lowercase using `lower()` and compare them. Return `False` if they differ."},{line:10,text:"Move pointers inwards by one position."},{line:12,text:"Return `True` if no mismatches are found."}]},java:{code:`public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
            left++;
        }
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
            right--;
        }
        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`,explanation:[{line:1,text:"Declare method `isPalindrome` returning a boolean."},{line:2,text:"Set pointers `left` to index 0, and `right` to the last index."},{line:3,text:"Loop while pointers are valid."},{line:4,text:"Use `Character.isLetterOrDigit()` to find next valid alphanumeric character from left."},{line:7,text:"Use `Character.isLetterOrDigit()` to find next valid alphanumeric character from right."},{line:10,text:"Compare characters using `Character.toLowerCase()`. Return false on mismatch."},{line:13,text:"Move pointers inwards."},{line:16,text:"Return true when comparison completes successfully."}]}}},{id:26,name:"Remove Duplicates from Sorted Array",difficulty:"Easy",topic:"Two Pointer",leetcodeUrl:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",tip:"Use a slow pointer 'writeIdx' at index 1. Iterate with a fast pointer 'i'. If nums[i] is different from the element before it, copy it to writeIdx and increment writeIdx.",description:"Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements `k`.",chatbotData:{intuition:"Since the array is sorted, duplicates are grouped together. We can use two pointers: a fast pointer `i` that scans the array, and a slow pointer `writeIdx` that marks where the next unique element should be written. Since the first element is always unique, we start `writeIdx` at 1. Whenever the fast pointer finds a number that is different from the previous number (`nums[i] != nums[i-1]`), it means we found a new unique element. We copy it to `writeIdx` and increment `writeIdx`.",complexity:`Time Complexity: O(N) because we iterate through the array of length N exactly once.
Space Complexity: O(1) since we perform all operations in-place without using extra memory.`,edgeCases:`1. Empty array: returns 0.
2. Array with no duplicates: array remains unchanged, returns length.
3. Array with all duplicates: returns 1, first element is kept.`,debugging:"Start your iteration from index 1, not index 0, because the element at index 0 has no predecessor and is always part of the unique subarray."},solutions:{cpp:{code:`int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    int writeIdx = 1;
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] != nums[i - 1]) {
            nums[writeIdx] = nums[i];
            writeIdx++;
        }
    }
    return writeIdx;
}`,explanation:[{line:1,text:"Function declaration: returns the count of unique elements, modifies the array in place."},{line:2,text:"If the vector is empty, return 0 immediately."},{line:3,text:"Initialize `writeIdx` pointer to 1. The first element is always unique, so we start writing at index 1."},{line:4,text:"Loop through the array starting from index 1 to the end."},{line:5,text:"Check if the current element is different from the previous element."},{line:6,text:"If it's different, write the unique element at the `writeIdx` position."},{line:7,text:"Increment `writeIdx` to prepare for the next unique element."},{line:10,text:"Return `writeIdx`, which represents the count of unique elements."}]},python:{code:`def removeDuplicates(nums: list[int]) -> int:
    if not nums:
        return 0
    write_idx = 1
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[write_idx] = nums[i]
            write_idx += 1
    return write_idx`,explanation:[{line:1,text:"Define function `removeDuplicates` taking a list of integers, returning the count of unique elements."},{line:2,text:"Return 0 if the list is empty."},{line:4,text:"Set write pointer `write_idx` to 1."},{line:5,text:"Loop from index 1 to the end of the list."},{line:6,text:"Check if current element is different from the preceding element."},{line:7,text:"If it is new, move it to `write_idx` position."},{line:8,text:"Increment write pointer `write_idx`."},{line:9,text:"Return `write_idx`."}]},java:{code:`public int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int writeIdx = 1;
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[writeIdx] = nums[i];
            writeIdx++;
        }
    }
    return writeIdx;
}`,explanation:[{line:1,text:"Declare method `removeDuplicates` returning int."},{line:2,text:"Handle the empty array edge case."},{line:3,text:"Initialize write pointer `writeIdx` to 1."},{line:4,text:"Loop through array elements starting at index 1."},{line:5,text:"If current element `nums[i]` is not equal to `nums[i - 1]`."},{line:6,text:"Overwrite `nums[writeIdx]` with the unique element `nums[i]`."},{line:7,text:"Increment the write index pointer."},{line:10,text:"Return the final index (which equals the length of unique portion)."}]}}},{id:11,name:"Container With Most Water",difficulty:"Medium",topic:"Two Pointer",leetcodeUrl:"https://leetcode.com/problems/container-with-most-water/",tip:"Use two pointers, one at the start and one at the end. Calculate water area, update maximum. Move the pointer pointing to the shorter line inwards.",description:"You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",chatbotData:{intuition:"The volume of water is limited by the shorter of the two lines and the distance between them: Area = min(height[left], height[right]) * (right - left). We start with pointers at the extreme ends (`left` and `right`) to maximize width. To find a larger area, we must look for taller lines. Since the area is bottlenecked by the shorter line, moving the taller pointer inwards would never increase the height bottleneck but would definitely decrease the width. Therefore, we always move the pointer pointing to the shorter line inwards.",complexity:`Time Complexity: O(N) because the two pointers start at the ends and move closer until they meet, making a single pass.
Space Complexity: O(1) since we only store index variables and the maximum area.`,edgeCases:`1. Two elements: minimum possible size, calculated immediately.
2. All lines are of equal height: pointers move inwards, width decreases, area decreases, handled correctly.`,debugging:"Make sure you use `Math.min(height[left], height[right])` for the height of the container, not `Math.max`."},solutions:{cpp:{code:`int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxWater = 0;
    while (left < right) {
        int h = min(height[left], height[right]);
        int w = right - left;
        maxWater = max(maxWater, h * w);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference of heights and returns the max area."},{line:2,text:"Initialize `left` pointer to 0 and `right` pointer to the last element index."},{line:3,text:"Initialize `maxWater` tracker to 0."},{line:4,text:"Loop while the left pointer is less than the right pointer."},{line:5,text:"Find the bottleneck height: the minimum of the two boundaries."},{line:6,text:"Find the width of the container: `right - left`."},{line:7,text:"Update `maxWater` if the current container's volume (`h * w`) is larger."},{line:8,text:"If the left line is shorter than the right line, move the left pointer rightward to search for a taller boundary."},{line:10,text:"Otherwise, move the right pointer leftward."},{line:14,text:"Return the maximum water calculated."}]},python:{code:`def maxArea(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        h = min(height[left], height[right])
        w = right - left
        max_water = max(max_water, h * w)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water`,explanation:[{line:1,text:"Define function `maxArea` returning integer."},{line:2,text:"Initialize two pointers at the ends of the array."},{line:3,text:"Initialize `max_water` to 0."},{line:4,text:"Loop until the pointers meet."},{line:5,text:"Get the limiting height of the container."},{line:6,text:"Calculate the container width."},{line:7,text:"Update the maximum water recorded."},{line:8,text:"If left boundary is shorter, increment `left` to try and find a taller height."},{line:10,text:"Otherwise, decrement `right` pointer."},{line:12,text:"Return maximum water capacity."}]},java:{code:`public int maxArea(int[] height) {
    int left = 0, right = height.length - 1;
    int maxWater = 0;
    while (left < right) {
        int h = Math.min(height[left], height[right]);
        int w = right - left;
        maxWater = Math.max(maxWater, h * w);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}`,explanation:[{line:1,text:"Declare method `maxArea` returning int."},{line:2,text:"Initialize two pointers at index 0 and index `height.length - 1`."},{line:3,text:"Initialize `maxWater` variable."},{line:4,text:"Loop while `left` index is less than `right` index."},{line:5,text:"Find the shorter boundary height."},{line:6,text:"Find the horizontal width."},{line:7,text:"Update `maxWater` with the larger of itself vs current container volume."},{line:8,text:"Compare heights to decide which pointer to shift."},{line:9,text:"Increment `left` if the left boundary is shorter."},{line:11,text:"Decrement `right` if the right boundary is shorter or equal."},{line:14,text:"Return `maxWater` result."}]}}},{id:15,name:"3Sum",difficulty:"Medium",topic:"Two Pointer",leetcodeUrl:"https://leetcode.com/problems/3sum/",tip:"Sort the array first. Loop through the array, fixing the first element `nums[i]`. Use two pointers (`left` and `right`) to find the other two numbers that sum to `-nums[i]`. Skip duplicates.",description:"Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. The solution set must not contain duplicate triplets.",chatbotData:{intuition:"Sort the array. Sorting allows us to easily skip duplicate elements to avoid duplicate triplets in the output and enables us to use the Two Pointer technique. We iterate through the array, fixing the first number `nums[i]`. If `nums[i] > 0`, we can stop immediately since a sum of three positive numbers can never be 0. Otherwise, we set up `left = i + 1` and `right = len - 1`. If their sum is too small, we increment `left`. If too large, we decrement `right`. If it is exactly 0, we add it to the result and move both pointers, skipping duplicates.",complexity:`Time Complexity: O(N²) because we have a outer loop of N and a two-pointer scan of O(N) inside it. Sorting takes O(N log N), which is dominated by the O(N²) loop.
Space Complexity: O(log N) or O(N) depending on the language's sorting algorithm implementation.`,edgeCases:`1. Fewer than 3 elements: returns empty array.
2. All zeroes (e.g., [0,0,0,0]): returns [[0,0,0]]. Duplicates are properly skipped.
3. Large array with no triplets that sum to 0: returns empty list.`,debugging:"Always check and skip duplicate values for all three pointers (`i`, `left`, and `right`) to prevent duplicate triplets from appearing in the output."},solutions:{cpp:{code:`vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> result;
    sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int left = i + 1, right = nums.size() - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push_back({nums[i], nums[left], nums[right]});
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
}`,explanation:[{line:1,text:"Function declaration returning a list of integer triplets."},{line:2,text:"Declare `result` vector to store triplets."},{line:3,text:"Sort the input array. This is critical for two pointers and skipping duplicates."},{line:4,text:"Loop through the sorted array. `i` is the first element of our triplet."},{line:5,text:"Since the array is sorted, if `nums[i]` is positive, all subsequent numbers are positive. They can't sum to 0: break loop."},{line:6,text:"Skip duplicate elements for the first position to avoid duplicate triplets."},{line:7,text:"Initialize `left` pointer to `i + 1` and `right` pointer to the end of the array."},{line:8,text:"Run two pointer scan for the remaining two elements."},{line:9,text:"Calculate the sum of the triplet."},{line:10,text:"If the sum is negative, we need a larger value: increment `left` pointer."},{line:12,text:"If the sum is positive, we need a smaller value: decrement `right` pointer."},{line:14,text:"Triplet found! Push it into the `result` vector."},{line:15,text:"Skip duplicate elements for the `left` pointer position."},{line:16,text:"Skip duplicate elements for the `right` pointer position."},{line:17,text:"Advance both pointers inwards to look for other pairs."},{line:21,text:"Return the unique triplets list."}]},python:{code:`def threeSum(nums: list[int]) -> list[list[int]]:
    result = []
    nums.sort()
    for i in range(len(nums)):
        if nums[i] > 0:
            break
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
    return result`,explanation:[{line:1,text:"Define function `threeSum` returning list of lists."},{line:2,text:"Initialize `result` accumulator."},{line:3,text:"Sort the list in-place."},{line:4,text:"Loop through indices."},{line:5,text:"Break early if current element is positive."},{line:7,text:"Skip identical values for index `i`."},{line:9,text:"Initialize `left` and `right` pointers."},{line:10,text:"Scan array using two pointers."},{line:11,text:"Compute triplet sum."},{line:12,text:"Shift `left` pointer if sum is too low."},{line:14,text:"Shift `right` pointer if sum is too high."},{line:16,text:"Append matched triplet to result."},{line:18,text:"Skip duplicate items for the `left` pointer."},{line:20,text:"Skip duplicate items for the `right` pointer."},{line:22,text:"Move both pointers inwards for the next search."},{line:25,text:"Return triplets list."}]},java:{code:`public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int left = i + 1, right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
}`,explanation:[{line:1,text:"Declare method returning list of integer lists."},{line:2,text:"Initialize `result` ArrayList."},{line:3,text:"Sort the array using `Arrays.sort()`."},{line:4,text:"Loop through elements."},{line:5,text:"If current number is positive, stop because sum of positive values cannot be 0."},{line:6,text:"Skip duplicates for index `i`."},{line:7,text:"Set pointers `left` and `right`."},{line:8,text:"Loop until pointers meet."},{line:9,text:"Find total sum."},{line:10,text:"If sum < 0, increment `left` pointer."},{line:12,text:"If sum > 0, decrement `right` pointer."},{line:15,text:"Add matching triplets as a list to our results."},{line:16,text:"Skip elements identical to current `left` boundary."},{line:17,text:"Skip elements identical to current `right` boundary."},{line:18,text:"Advance pointers."},{line:23,text:"Return the resulting nested list."}]}}},{id:75,name:"Sort Colors",difficulty:"Medium",topic:"Two Pointer",leetcodeUrl:"https://leetcode.com/problems/sort-colors/",tip:"Use the Dutch National Flag algorithm. Maintain three pointers: `low` (boundary for 0s), `i` (current element), and `high` (boundary for 2s). Swap accordingly.",description:"Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue (represented as 0, 1, and 2 respectively).",chatbotData:{intuition:"This is the classic Dutch National Flag sorting problem. We keep 0s at the left (tracked by pointer `low`), 2s at the right (tracked by pointer `high`), and iterate using `i`. When `nums[i] == 0`, we swap it with `nums[low]` and increment both `low` and `i`. When `nums[i] == 2`, we swap it with `nums[high]` and decrement `high` (we do *not* increment `i` because the swapped element from the back hasn't been checked yet). When `nums[i] == 1`, we just increment `i`.",complexity:`Time Complexity: O(N) because we make a single pass through the array of length N.
Space Complexity: O(1) auxiliary space since we sort in-place.`,edgeCases:`1. Empty or single element array: returns immediately.
2. Already sorted: works correctly.
3. Array with only one color (e.g., all 2s): pointers correctly bound it.`,debugging:"When swapping `nums[i]` with `nums[high]`, do NOT increment `i` in the same step. The new element swapped from `high` into index `i` could be a 0 or 2, and must be inspected in the next iteration."},solutions:{cpp:{code:`void sortColors(vector<int>& nums) {
    int low = 0, i = 0, high = nums.size() - 1;
    while (i <= high) {
        if (nums[i] == 0) {
            swap(nums[i], nums[low]);
            low++;
            i++;
        } else if (nums[i] == 2) {
            swap(nums[i], nums[high]);
            high--;
        } else {
            i++;
        }
    }
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference and returns void."},{line:2,text:"Initialize `low` at 0 (boundary for 0s), `i` at 0 (current scanner), and `high` at the last index (boundary for 2s)."},{line:3,text:"Iterate while `i` is less than or equal to `high`."},{line:4,text:"If the current element is 0."},{line:5,text:"Swap the current element with the element at the `low` pointer."},{line:6,text:"Increment `low` to shift the 0s boundary rightward."},{line:7,text:"Increment `i` since we know the swapped element at index `low` was already inspected or is 1."},{line:8,text:"If the current element is 2."},{line:9,text:"Swap the current element with the element at the `high` pointer."},{line:10,text:"Decrement `high` to shift the 2s boundary leftward. (Do NOT increment `i` here)."},{line:11,text:"If the element is 1."},{line:12,text:"Simply increment `i` to leave it in the middle."}]},python:{code:`def sortColors(nums: list[int]) -> None:
    low, i, high = 0, 0, len(nums) - 1
    while i <= high:
        if nums[i] == 0:
            nums[i], nums[low] = nums[low], nums[i]
            low += 1
            i += 1
        elif nums[i] == 2:
            nums[i], nums[high] = nums[high], nums[i]
            high -= 1
        else:
            i += 1`,explanation:[{line:1,text:"Define function `sortColors` modifying list in-place."},{line:2,text:"Initialize pointers: `low` at 0, `i` at 0, `high` at the last index."},{line:3,text:"Iterate while the current index has not crossed the `high` pointer."},{line:4,text:"If element is 0, swap with `low` position."},{line:5,text:"Perform swap in Python using tuple assignment."},{line:6,text:"Increment `low`."},{line:7,text:"Increment `i`."},{line:8,text:"If element is 2, swap with `high` position."},{line:10,text:"Decrement `high`. (Do not change `i` because we must evaluate the swapped element)."},{line:11,text:"If element is 1."},{line:12,text:"Increment `i` to move to the next item."}]},java:{code:`public void sortColors(int[] nums) {
    int low = 0, i = 0, high = nums.length - 1;
    while (i <= high) {
        if (nums[i] == 0) {
            int temp = nums[i];
            nums[i] = nums[low];
            nums[low] = temp;
            low++;
            i++;
        } else if (nums[i] == 2) {
            int temp = nums[i];
            nums[i] = nums[high];
            nums[high] = temp;
            high--;
        } else {
            i++;
        }
    }
}`,explanation:[{line:1,text:"Declare method `sortColors` returning void."},{line:2,text:"Initialize three pointers: `low` = 0, `i` = 0, `high` = last index."},{line:3,text:"Loop while the scanner index `i` is less than or equal to `high`."},{line:4,text:"If current number is 0."},{line:5,text:"Perform in-place swap using temporary variable `temp`."},{line:8,text:"Increment `low` and `i` pointers."},{line:10,text:"If current number is 2, swap with index `high`."},{line:14,text:"Decrement `high` pointer to contract the right side."},{line:15,text:"If current number is 1, it belongs in the middle: increment `i`."}]}}},{id:3,name:"Longest Substring Without Repeating Chars",difficulty:"Medium",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",tip:"Use a sliding window. Expand the window with a right pointer. If a duplicate is found, shrink the window from the left until the duplicate is removed.",description:"Given a string `s`, find the length of the longest substring without repeating characters.",chatbotData:{intuition:"We maintain a sliding window `[left, right]` containing unique characters. We expand the window by moving the `right` pointer to the right. We use a set to track characters currently inside the window. If we encounter a character that is already in the set, we shrink the window from the `left` by removing characters from the set until the repeated character is removed. At each step, we record the maximum window length (`right - left + 1`).",complexity:`Time Complexity: O(N) because each character is added and removed from the set at most once. Both pointers travel at most N steps.
Space Complexity: O(min(N, M)) where N is string length and M is character set size (e.g. 26 or 128 for ASCII).`,edgeCases:`1. Empty string: returns 0.
2. All repeating characters (e.g. 'bbbbb'): returns 1.
3. Already unique (e.g. 'abcdef'): returns 6.`,debugging:"Make sure you use a `while` loop, not an `if` statement, when shrinking the window from the left, because you may need to slide past multiple characters to remove the duplicate."},solutions:{cpp:{code:`int lengthOfLongestSubstring(string s) {
    unordered_set<char> charSet;
    int left = 0, maxLength = 0;
    for (int right = 0; right < s.length(); right++) {
        while (charSet.count(s[right])) {
            charSet.erase(s[left]);
            left++;
        }
        charSet.insert(s[right]);
        maxLength = max(maxLength, right - left + 1);
    }
    return maxLength;
}`,explanation:[{line:1,text:"Function declaration: takes string `s`, returns length of longest unique substring."},{line:2,text:"Declare an unordered_set `charSet` to store characters currently in our active window."},{line:3,text:"Initialize `left` pointer to 0, and `maxLength` tracker to 0."},{line:4,text:"Iterate `right` pointer from 0 to string end, expanding the window."},{line:5,text:"While the character at `s[right]` already exists in our set."},{line:6,text:"Erase the character at `s[left]` from our set to shrink the window."},{line:7,text:"Increment `left` pointer to move the window starting edge."},{line:9,text:"Insert the new character `s[right]` into our set."},{line:10,text:"Update `maxLength` with the size of the current valid window (`right - left + 1`)."},{line:12,text:"Return the maximum length found."}]},python:{code:`def lengthOfLongestSubstring(s: str) -> int:
    char_set = set()
    left = 0
    max_length = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    return max_length`,explanation:[{line:1,text:"Define function `lengthOfLongestSubstring` returning int."},{line:2,text:"Initialize a set `char_set` to store unique characters."},{line:3,text:"Initialize left pointer `left` to 0."},{line:4,text:"Initialize max length tracker `max_length` to 0."},{line:5,text:"Expand window by moving `right` pointer across index range."},{line:6,text:"If the character at `right` is already present in the set, shrink window from left."},{line:7,text:"Remove character at `left` from set."},{line:8,text:"Increment `left` pointer by 1."},{line:9,text:"Add current character at `right` to set."},{line:10,text:"Calculate current window width and update `max_length`."},{line:11,text:"Return final max length."}]},java:{code:`public int lengthOfLongestSubstring(String s) {
    Set<Character> charSet = new HashSet<>();
    int left = 0, maxLength = 0;
    for (int right = 0; right < s.length(); right++) {
        while (charSet.contains(s.charAt(right))) {
            charSet.remove(s.charAt(left));
            left++;
        }
        charSet.add(s.charAt(right));
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}`,explanation:[{line:1,text:"Declare method `lengthOfLongestSubstring` returning int."},{line:2,text:"Create HashSet `charSet` to check character uniqueness."},{line:3,text:"Initialize pointers `left` = 0 and `maxLength` = 0."},{line:4,text:"Iterate right boundary pointer `right` through the string."},{line:5,text:"Check if set already contains character at `right`."},{line:6,text:"Remove left boundary character from set."},{line:7,text:"Increment `left` to contract the window."},{line:9,text:"Add current character at `right` to set."},{line:10,text:"Update `maxLength` with current window length."},{line:12,text:"Return the result."}]}}},{id:424,name:"Longest Repeating Character Replacement",difficulty:"Medium",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/longest-repeating-character-replacement/",tip:"Use a sliding window and frequency map. Track the maximum frequency of any character in the current window. If (window_size - max_frequency) > k, shrink window from left.",description:"You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. Return the length of the longest substring containing the same letter you can get after performing at most `k` operations.",chatbotData:{intuition:"In any window `[left, right]`, the number of characters we need to replace to make all characters identical is: `WindowSize - MaxFrequencyOfAnyCharacter`. We want to keep this replacement count <= `k`. We expand the window with `right` and update the character frequencies. We track `maxFreq` (highest frequency of any character seen in the current window). If the characters to replace `(right - left + 1) - maxFreq` exceeds `k`, the window is invalid. We shrink it by decrementing the frequency of `s[left]` and incrementing `left` pointer.",complexity:`Time Complexity: O(N) because the right and left pointers iterate over the string of size N at most once, and frequency table lookups are O(1) (size 26).
Space Complexity: O(1) or O(26) to store the character counts.`,edgeCases:`1. k is larger than string length: returns string length.
2. All same characters: no replacements needed, returns string length.
3. k = 0: returns length of longest substring of repeating chars.`,debugging:"Note that `maxFreq` does not need to be updated downward when we shrink the window. It is mathematically correct to only update `maxFreq` when it increases, as a smaller `maxFreq` can never produce a larger valid window than one we have already found."},solutions:{cpp:{code:`int characterReplacement(string s, int k) {
    int count[26] = {0};
    int left = 0, maxFreq = 0, maxLength = 0;
    for (int right = 0; right < s.length(); right++) {
        count[s[right] - 'A']++;
        maxFreq = max(maxFreq, count[s[right] - 'A']);
        int windowSize = right - left + 1;
        if (windowSize - maxFreq > k) {
            count[s[left] - 'A']--;
            left++;
        }
        maxLength = max(maxLength, right - left + 1);
    }
    return maxLength;
}`,explanation:[{line:1,text:"Function declaration: takes string `s` and integer `k`, returns maximum length."},{line:2,text:"Initialize count array of size 26 to store frequencies of uppercase letters."},{line:3,text:"Initialize `left` pointer, `maxFreq` tracker, and `maxLength` tracker to 0."},{line:4,text:"Iterate `right` pointer to expand the sliding window."},{line:5,text:"Increment the frequency of the current character `s[right]`."},{line:6,text:"Update `maxFreq` if the current character frequency is the new maximum."},{line:7,text:"Calculate the current `windowSize`."},{line:8,text:"Check if the number of replacement operations needed (`windowSize - maxFreq`) is greater than `k`."},{line:9,text:"If invalid, decrement the frequency of the character leaving the window on the left."},{line:10,text:"Increment `left` pointer to shrink the window."},{line:12,text:"Calculate and record the maximum valid window size found."},{line:14,text:"Return `maxLength`."}]},python:{code:`def characterReplacement(s: str, k: int) -> int:
    count = {}
    left = 0
    max_freq = 0
    max_length = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_freq = max(max_freq, count[s[right]])
        if (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1
        max_length = max(max_length, right - left + 1)
    return max_length`,explanation:[{line:1,text:"Define function `characterReplacement` taking string and integer, returning integer."},{line:2,text:"Initialize an empty dictionary `count` to track character frequencies."},{line:3,text:"Set pointers and trackers."},{line:6,text:"Loop through indices to expand the right edge of the window."},{line:7,text:"Increment the count of character `s[right]` in the dictionary."},{line:8,text:"Update `max_freq` with the max frequency seen in the current window."},{line:9,text:"Check if replacements needed `(window_size - max_freq)` exceed `k`."},{line:10,text:"Decrement count of left element since it's sliding out of the window."},{line:11,text:"Increment `left` pointer."},{line:12,text:"Update maximum length seen."},{line:13,text:"Return the result."}]},java:{code:`public int characterReplacement(String s, int k) {
    int[] count = new int[26];
    int left = 0, maxFreq = 0, maxLength = 0;
    for (int right = 0; right < s.length(); right++) {
        count[s.charAt(right) - 'A']++;
        maxFreq = Math.max(maxFreq, count[s.charAt(right) - 'A']);
        if ((right - left + 1) - maxFreq > k) {
            count[s.charAt(left) - 'A']--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}`,explanation:[{line:1,text:"Declare method `characterReplacement` returning integer."},{line:2,text:"Create integer array `count` of size 26 for frequencies."},{line:3,text:"Initialize `left` pointer, `maxFreq` and `maxLength`."},{line:4,text:"Loop using pointer `right` through the string."},{line:5,text:"Increment frequency of character at index `right`."},{line:6,text:"Update `maxFreq` with current character's new count."},{line:7,text:"If the window size minus max frequency exceeds `k`, the window is invalid."},{line:8,text:"Decrement count of character at `left`."},{line:9,text:"Increment `left` to shift window."},{line:11,text:"Update `maxLength` if this window is the largest so far."},{line:13,text:"Return the result."}]}}},{id:567,name:"Permutation in String",difficulty:"Medium",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/permutation-in-string/",tip:"This is a fixed-size sliding window of size `len(s1)`. Maintain count arrays for characters. Slide the window over `s2` and check if the count array of the window matches `s1`'s count array.",description:"Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.",chatbotData:{intuition:"A permutation means a substring in `s2` has the exact same character frequencies as `s1`. Since the permutation must be a continuous substring, the window size in `s2` must be exactly `len(s1)`. We can calculate the character counts for `s1` and the first window of `s2`. Then, we slide the window of size `len(s1)` across `s2` by adding one character from the right and removing one from the left. If at any point the counts match, we return `true`.",complexity:"Time Complexity: O(N) where N is the length of string `s2`, since sliding the window is O(1) per step and comparing two frequency tables of size 26 takes O(26) which is constant time.\nSpace Complexity: O(1) as we use two fixed-size count arrays of size 26.",edgeCases:"1. `s1` is longer than `s2`: returns `false` immediately.\n2. `s1` is equal to `s2` length: performs a single check and returns.",debugging:"Make sure you compare the full frequency arrays at each step. In Java/C++, you can write a helper function or check equality directly."},solutions:{cpp:{code:`bool checkInclusion(string s1, string s2) {
    if (s1.length() > s2.length()) return false;
    int s1_count[26] = {0};
    int s2_count[26] = {0};
    for (int i = 0; i < s1.length(); i++) {
        s1_count[s1[i] - 'a']++;
        s2_count[s2[i] - 'a']++;
    }
    for (int i = 0; i <= s2.length() - s1.length(); i++) {
        bool match = true;
        for (int j = 0; j < 26; j++) {
            if (s1_count[j] != s2_count[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
        if (i < s2.length() - s1.length()) {
            s2_count[s2[i] - 'a']--;
            s2_count[s2[i + s1.length()] - 'a']++;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Function declaration: returns true if s2 contains a permutation of s1."},{line:2,text:"If `s1` is longer than `s2`, a permutation cannot fit: return `false`."},{line:3,text:"Initialize alphabet count arrays for `s1` and the sliding window in `s2`."},{line:5,text:"Populate the count for `s1` and the initial window of size `s1.length()` in `s2`."},{line:9,text:"Loop through `s2`, shifting the window rightward. Index `i` is the left edge of the window."},{line:10,text:"Check if the character counts match."},{line:11,text:"Compare frequencies of all 26 lowercase English letters."},{line:17,text:"If they match, a permutation exists: return `true`."},{line:18,text:"If we haven't reached the end, shift the window: remove `s2[i]` (left) and add `s2[i + s1.length()]` (right)."}]},python:{code:`def checkInclusion(s1: str, s2: str) -> bool:
    if len(s1) > len(s2):
        return False
    s1_count = [0] * 26
    s2_count = [0] * 26
    for i in range(len(s1)):
        s1_count[ord(s1[i]) - ord('a')] += 1
        s2_count[ord(s2[i]) - ord('a')] += 1
    for i in range(len(s2) - len(s1) + 1):
        if s1_count == s2_count:
            return True
        if i < len(s2) - len(s1):
            s2_count[ord(s2[i]) - ord('a')] -= 1
            s2_count[ord(s2[i + len(s1)]) - ord('a')] += 1
    return False`,explanation:[{line:1,text:"Define function `checkInclusion` returning boolean."},{line:2,text:"Check if `s1` length is greater than `s2`. If so, return `False`."},{line:4,text:"Initialize frequency list for `s1` and initial window in `s2`."},{line:6,text:"Count frequencies of letters in both strings up to `len(s1)`."},{line:9,text:"Loop through indices where the window can start."},{line:10,text:"Check if lists `s1_count` and `s2_count` are identical (O(26) comparison)."},{line:11,text:"If identical, return `True`."},{line:12,text:"If not at the last window, shift the window counts."},{line:13,text:"Remove leftmost character `s2[i]` count from current window."},{line:14,text:"Add rightmost new character `s2[i + len(s1)]` count to window."},{line:15,text:"Return `False` if no matches are found."}]},java:{code:`public boolean checkInclusion(String s1, String s2) {
    if (s1.length() > s2.length()) return false;
    int[] s1Count = new int[26];
    int[] s2Count = new int[26];
    for (int i = 0; i < s1.length(); i++) {
        s1Count[s1.charAt(i) - 'a']++;
        s2Count[s2.charAt(i) - 'a']++;
    }
    for (int i = 0; i <= s2.length() - s1.length(); i++) {
        if (matches(s1Count, s2Count)) return true;
        if (i < s2.length() - s1.length()) {
            s2Count[s2.charAt(i) - 'a']--;
            s2Count[s2.charAt(i + s1.length()) - 'a']++;
        }
    }
    return false;
}

private boolean matches(int[] s1Count, int[] s2Count) {
    for (int i = 0; i < 26; i++) {
        if (s1Count[i] != s2Count[i]) return false;
    }
    return true;
}`,explanation:[{line:1,text:"Declare method `checkInclusion` returning boolean."},{line:2,text:"Verify `s1` can fit inside `s2`."},{line:3,text:"Create frequency count tables of size 26."},{line:5,text:"Fill counts for `s1` and the first window of `s2`."},{line:9,text:"Iterate window start pointer `i` through the string `s2`."},{line:10,text:"Call helper method `matches` to compare count tables. Return true if equal."},{line:11,text:"If there's a next character, update sliding window counts."},{line:12,text:"Remove character leaving window at index `i`."},{line:13,text:"Add character entering window at index `i + s1.length()`."},{line:19,text:"Private helper method to compare two 26-element arrays in O(26) time."}]}}}],Mx=[{id:704,name:"Binary Search",difficulty:"Easy",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/binary-search/",tip:"Always define `low` and `high` pointers clearly. Find `mid = low + (high - low) / 2` to avoid integer overflow. Compare `nums[mid]` to target, then search left or right.",description:"Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.",chatbotData:{intuition:"Since the array is sorted, we can search it in logarithmic time O(log N) instead of linear time O(N). We place pointers `low` and `high` at the bounds of our search space. We look at the middle element `mid`. If `nums[mid] == target`, we return `mid`. If `nums[mid] < target`, it means target is in the right half, so we move `low = mid + 1`. If `nums[mid] > target`, it means target is in the left half, so we move `high = mid - 1`.",complexity:`Time Complexity: O(log N) because we cut the search space in half at each step.
Space Complexity: O(1) as we only use a few tracking pointers.`,edgeCases:`1. Target is at the very beginning or end: handled correctly.
2. Array size is 1: loop runs once, checks mid, returns correctly.
3. Target is not in the array: low will cross high, loop terminates, returns -1.`,debugging:"Calculate `mid` using `low + (high - low) / 2` instead of `(low + high) / 2` to prevent potential integer overflow bugs in languages like C++ and Java."},solutions:{cpp:{code:`int search(vector<int>& nums, int target) {
    int low = 0, high = nums.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference and target int, returns index or -1."},{line:2,text:"Initialize `low` pointer to 0 and `high` pointer to the last element index."},{line:3,text:"Loop while the search space is valid (`low` is less than or equal to `high`)."},{line:4,text:"Calculate the middle index. Using `low + (high - low)/2` prevents integer overflow."},{line:5,text:"If the middle element is our target, return its index."},{line:7,text:"If the middle element is smaller than target, search the right half: move `low` pointer."},{line:9,text:"If the middle element is larger than target, search the left half: move `high` pointer."},{line:13,text:"If the loop terminates without finding target, it's not present: return -1."}]},python:{code:`def search(nums: list[int], target: int) -> int:
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,explanation:[{line:1,text:"Define function `search` returning integer."},{line:2,text:"Initialize pointers at the bounds of the list."},{line:3,text:"Loop while `low` pointer is less than or equal to `high`."},{line:4,text:"Calculate integer midpoint `mid` using double slash floor division `//`."},{line:5,text:"If the midpoint value equals target, return its index."},{line:7,text:"If mid value is too small, search right side by updating `low`."},{line:9,text:"If mid value is too large, search left side by updating `high`."},{line:11,text:"Return -1 if target is not found."}]},java:{code:`public int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,explanation:[{line:1,text:"Declare method `search` returning int."},{line:2,text:"Initialize `low` pointer to 0 and `high` pointer to array length - 1."},{line:3,text:"Loop while pointers don't cross."},{line:4,text:"Find middle index `mid` avoiding integer overflow."},{line:5,text:"Compare `nums[mid]` with `target`. Return `mid` if they are equal."},{line:7,text:"If mid value is less than target, search right half by setting `low = mid + 1`."},{line:9,text:"If mid value is greater than target, search left half by setting `high = mid - 1`."},{line:13,text:"Return -1 if target is not present in the array."}]}}},{id:33,name:"Search in Rotated Sorted Array",difficulty:"Medium",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/search-in-rotated-sorted-array/",tip:"In a rotated sorted array, one half (either left or right) is ALWAYS normally sorted. Find which half is sorted first, then check if target lies in its range.",description:"There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated. Return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.",chatbotData:{intuition:"Even after rotation, if we divide the array in half, at least one of the halves will always remain sorted. For example, in `[4, 5, 6, 7, 0, 1, 2]`, mid is 7. The left half `[4, 5, 6, 7]` is sorted. We can determine if the left half is sorted by checking if `nums[low] <= nums[mid]`. If the left half is sorted, we check if target lies within its bounds. If it does, we search the left half. If not, we search the right half. We do the symmetric check if the right half is sorted.",complexity:`Time Complexity: O(log N) because we split the search space in half at each step.
Space Complexity: O(1) since it runs iteratively without extra memory.`,edgeCases:"1. Size 1 or 2 array: correctly handled.\n2. No rotation (already fully sorted): works normally.\n3. Target at boundary indices: handled by inclusive boundary conditions `<=`, `>=`.",debugging:"When checking boundaries (e.g. `nums[low] <= target && target < nums[mid]`), be sure to use `<=` for `low` because the target could be exactly at the index `low`."},solutions:{cpp:{code:`int search(vector<int>& nums, int target) {
    int low = 0, high = nums.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector and target, returns index or -1."},{line:2,text:"Initialize `low` and `high` search boundaries."},{line:3,text:"Loop while the search space remains valid."},{line:4,text:"Compute middle index `mid`."},{line:5,text:"If middle element is the target, return its index immediately."},{line:6,text:"Check if the left half `[low, mid]` is sorted normally (`nums[low] <= nums[mid]`)."},{line:7,text:"If sorted, check if target falls in the range of the left half."},{line:8,text:"If yes, search the left half: move `high = mid - 1`."},{line:10,text:"If no, search the right half: move `low = mid + 1`."},{line:12,text:"Otherwise, the right half `[mid, high]` must be sorted."},{line:13,text:"Check if target falls in the range of the right half."},{line:14,text:"If yes, search the right half: move `low = mid + 1`."},{line:16,text:"If no, search the left half: move `high = mid - 1`."}]},python:{code:`def search(nums: list[int], target: int) -> int:
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target:
            return mid
        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1`,explanation:[{line:1,text:"Define search function in Python."},{line:2,text:"Initialize pointers."},{line:3,text:"Start binary search loop."},{line:4,text:"Calculate `mid` using integer division."},{line:5,text:"Check if mid equals target."},{line:7,text:"Verify if left side is sorted."},{line:8,text:"Check if target is bounded within the sorted left side."},{line:12,text:"Otherwise, right side must be sorted."},{line:13,text:"Check if target is bounded within the sorted right side."}]},java:{code:`public int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}`,explanation:[{line:1,text:"Declare search method."},{line:2,text:"Initialize `low` and `high` pointers."},{line:3,text:"Loop while pointers are valid."},{line:5,text:"Check target match at `mid`."},{line:6,text:"Determine if left subarray is sorted."},{line:7,text:"Target is in sorted left subarray: contract right side."},{line:12,text:"Right subarray is sorted."},{line:13,text:"Target is in sorted right subarray: contract left side."}]}}},{id:34,name:"Find First and Last Position",difficulty:"Medium",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",tip:"Run binary search twice. Once to find the first occurrence (when target is found, set `high = mid - 1` and keep searching), and once to find the last occurrence (set `low = mid + 1`).",description:"Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If target is not found in the array, return `[-1, -1]`.",chatbotData:{intuition:"Instead of searching linearly (which takes O(N)), we can perform binary search twice. When we do normal binary search and find `nums[mid] == target`, we don't stop. For finding the first position, we record `mid` as a potential answer and continue searching the left half (`high = mid - 1`). For finding the last position, we record `mid` and continue searching the right half (`low = mid + 1`). This maintains the O(log N) runtime.",complexity:`Time Complexity: O(log N) because we perform two binary searches sequentially.
Space Complexity: O(1) auxiliary space.`,edgeCases:"1. Empty array: returns `[-1, -1]`.\n2. Target not present: returns `[-1, -1]`.\n3. All elements are target (e.g. [8, 8, 8], target 8): returns `[0, 2]`.",debugging:"Be sure to initialize your result to -1 inside the helper function so that if the element is not found, it naturally returns -1."},solutions:{cpp:{code:`int findBound(vector<int>& nums, int target, bool isFirst) {
    int low = 0, high = nums.size() - 1, ans = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) {
            ans = mid;
            if (isFirst) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

vector<int> searchRange(vector<int>& nums, int target) {
    return {findBound(nums, target, true), findBound(nums, target, false)};
}`,explanation:[{line:1,text:"Helper function declaration to find either the first or last boundary of target."},{line:2,text:"Initialize `low`, `high`, and `ans` to -1."},{line:3,text:"Run binary search loop."},{line:5,text:"If we find target at `mid`, record this index in `ans`."},{line:7,text:"If searching for the first occurrence, search left half to find if there's an earlier one."},{line:9,text:"If searching for the last occurrence, search right half."},{line:12,text:"If mid value is smaller than target, search right half."},{line:14,text:"If mid value is larger than target, search left half."},{line:20,text:"Main function: calls `findBound` for the first (true) and last (false) occurrence, and returns the pair."}]},python:{code:`def searchRange(nums: list[int], target: int) -> list[int]:
    def findBound(is_first: bool) -> int:
        low, high, ans = 0, len(nums) - 1, -1
        while low <= high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                ans = mid
                if is_first:
                    high = mid - 1
                else:
                    low = mid + 1
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return ans
    
    return [findBound(True), findBound(False)]`,explanation:[{line:1,text:"Define searchRange function."},{line:2,text:"Define nested helper function `findBound` taking boolean parameter."},{line:3,text:"Initialize pointers and answer tracker."},{line:6,text:"Check target match at `mid`."},{line:7,text:"Record current match index."},{line:8,text:"If looking for first index, shrink search space to left side."},{line:10,text:"If looking for last index, shrink search space to right side."},{line:18,text:"Call helper function twice: once for start index (True) and once for end index (False)."}]},java:{code:`public int[] searchRange(int[] nums, int target) {
    return new int[] { findBound(nums, target, true), findBound(nums, target, false) };
}

private int findBound(int[] nums, int target, boolean isFirst) {
    int low = 0, high = nums.length - 1, ans = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) {
            ans = mid;
            if (isFirst) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}`,explanation:[{line:1,text:"Declare main method returning two bounds as an array."},{line:2,text:"Call `findBound` for start (true) and end (false) positions."},{line:5,text:"Declare helper method `findBound` returning index of target boundary."},{line:6,text:"Initialize parameters and search pointer values."},{line:9,text:"If target is found at mid, update result index `ans`."},{line:11,text:"Shrink boundary leftward if `isFirst` is true."},{line:13,text:"Shrink boundary rightward if `isFirst` is false."},{line:21,text:"Return target boundary index."}]}}},{id:74,name:"Search a 2D Matrix",difficulty:"Medium",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/search-a-2d-matrix/",tip:"Treat the 2D matrix as a flat 1D array of size `m * n`. A virtual index `mid` in 1D maps to 2D coordinates: `row = mid / n` and `col = mid % n`.",description:"You are given an `m x n` integer matrix `matrix` with the following two properties:\n1. Each row is sorted in non-decreasing order.\n2. The first integer of each row is greater than the last integer of the previous row.\nGiven an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.",chatbotData:{intuition:"Because the first element of a row is greater than the last element of the previous row, the entire matrix behaves like a single sorted 1D array of length `rows * cols`. We can do a standard binary search on this virtual 1D array with `low = 0` and `high = (rows * cols) - 1`. For any index `mid` in 1D, we convert it back to 2D coordinates: row = `mid / cols` and col = `mid % cols`, then compare `matrix[row][col]` to the target.",complexity:`Time Complexity: O(log(M * N)) where M is rows and N is columns.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. Matrix has 1 row or 1 column: works correctly.
2. Target is smaller than smallest or larger than largest element: returns false early or terminates after full search.
3. Target exists at boundary of two rows: handled naturally.`,debugging:"Ensure you use the correct division and modulo logic: `row = mid / cols` (using column count) and `col = mid % cols`. Do not divide by the row count."},solutions:{cpp:{code:`bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int m = matrix.size(), n = matrix[0].size();
    int low = 0, high = m * n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int row = mid / n;
        int col = mid % n;
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Function declaration: takes 2D matrix and target, returns boolean."},{line:2,text:"Check if matrix is empty. If so, return false."},{line:3,text:"Get row count `m` and column count `n`."},{line:4,text:"Set `low` to 0 and `high` to the last virtual index `m * n - 1`."},{line:5,text:"Standard binary search loop."},{line:6,text:"Find middle virtual index `mid`."},{line:7,text:"Convert virtual 1D index `mid` to 2D row: `mid / n`."},{line:8,text:"Convert virtual 1D index `mid` to 2D column: `mid % n`."},{line:9,text:"Check if matrix element matches target. If yes, return true."},{line:11,text:"If element is too small, search right side."},{line:13,text:"If element is too large, search left side."}]},python:{code:`def searchMatrix(matrix: list[list[int]], target: int) -> bool:
    if not matrix or not matrix[0]:
        return False
    m, n = len(matrix), len(matrix[0])
    low, high = 0, m * n - 1
    while low <= high:
        mid = low + (high - low) // 2
        row = mid // n
        col = mid % n
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            low = mid + 1
        else:
            high = mid - 1
    return False`,explanation:[{line:1,text:"Define searchMatrix function in Python."},{line:2,text:"Handle empty matrix edge case."},{line:4,text:"Determine rows `m` and columns `n`."},{line:5,text:"Initialize bounds of virtual 1D array."},{line:6,text:"Run binary search loop."},{line:7,text:"Calculate midpoint virtual index."},{line:8,text:"Calculate row index using integer floor division `// n`."},{line:9,text:"Calculate column index using modulo `% n`."},{line:10,text:"If target matched, return `True`."}]},java:{code:`public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    int m = matrix.length, n = matrix[0].length;
    int low = 0, high = m * n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int row = mid / n;
        int col = mid % n;
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Declare method `searchMatrix` returning boolean."},{line:2,text:"Verify matrix sizes are valid."},{line:3,text:"Obtain row count `m` and column count `n`."},{line:4,text:"Set boundary variables for virtual 1D matrix search."},{line:5,text:"Perform binary search."},{line:7,text:"Determine cell row."},{line:8,text:"Determine cell column."},{line:9,text:"If element matches target, return true."}]}}},{id:153,name:"Find Minimum in Rotated Sorted Array",difficulty:"Medium",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",tip:"Compare `nums[mid]` with `nums[high]`. If `nums[mid] > nums[high]`, the minimum is in the right half (move `low = mid + 1`). Otherwise, it's in the left half including mid (move `high = mid`).",description:"Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in `O(log n)` time.",chatbotData:{intuition:"In a rotated sorted array, the minimum element represents the inflection point. We compare `nums[mid]` with the rightmost element `nums[high]`. If `nums[mid] > nums[high]`, it means the inflection point (minimum) must lie in the right half, so we search right (`low = mid + 1`). If `nums[mid] <= nums[high]`, the right half is normally sorted, so the minimum is either at `mid` or to its left, so we search left including mid (`high = mid`). Eventually, `low` and `high` meet at the minimum element.",complexity:`Time Complexity: O(log N) since we divide the search space in half at each step.
Space Complexity: O(1) auxiliary space.`,edgeCases:"1. Array is not rotated (fully sorted): works correctly, low moves to index 0.\n2. Size 1 array: loop condition `low < high` fails immediately, returns element.\n3. Size 2 array: correctly compares the two and returns min.",debugging:"Use `low < high` (not `low <= high`) in the loop condition, and when searching left, set `high = mid` (not `mid - 1`), because the element at `mid` itself could be the minimum."},solutions:{cpp:{code:`int findMin(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}`,explanation:[{line:1,text:"Function declaration: takes integer vector, returns minimum integer."},{line:2,text:"Initialize `low` at 0 and `high` at the last index."},{line:3,text:"Loop while `low` is strictly less than `high`. When they meet, we've found the minimum."},{line:4,text:"Calculate the middle index `mid`."},{line:5,text:"If `nums[mid] > nums[high]`, the left side is sorted and the inflection point is in the right half."},{line:6,text:"Search the right half: set `low = mid + 1`."},{line:7,text:"Otherwise, the minimum must be in the left half, and could be `mid` itself."},{line:8,text:"Search the left half (including mid): set `high = mid`."},{line:11,text:"Return the element at the meeting point `nums[low]`."}]},python:{code:`def findMin(nums: list[int]) -> int:
    low, high = 0, len(nums) - 1
    while low < high:
        mid = low + (high - low) // 2
        if nums[mid] > nums[high]:
            low = mid + 1
        else:
            high = mid
    return nums[low]`,explanation:[{line:1,text:"Define findMin function."},{line:2,text:"Initialize pointers."},{line:3,text:"Loop until pointers meet."},{line:4,text:"Compute midpoint."},{line:5,text:"If mid value is larger than high value, pivot lies to the right."},{line:6,text:"Shift search space rightwards."},{line:8,text:"Shift search space leftwards, keeping `mid` as a candidate."},{line:9,text:"Return the element at `low` when pointers converge."}]},java:{code:`public int findMin(int[] nums) {
    int low = 0, high = nums.length - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}`,explanation:[{line:1,text:"Declare method `findMin` returning int."},{line:2,text:"Initialize boundaries."},{line:3,text:"Loop until boundaries converge."},{line:4,text:"Find middle index."},{line:5,text:"Compare `nums[mid]` with `nums[high]`."},{line:6,text:"Pivot is in right half: set `low = mid + 1`."},{line:8,text:"Pivot is in left half: set `high = mid`."},{line:11,text:"Return the converged value."}]}}},{id:162,name:"Find Peak Element",difficulty:"Medium",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/find-peak-element/",tip:"Compare `nums[mid]` with its right neighbor `nums[mid + 1]`. If `nums[mid] < nums[mid + 1]`, a peak must lie on the right side (move `low = mid + 1`). Otherwise, it's on the left side (move `high = mid`).",description:"A peak element is an element that is strictly greater than its neighbors. Given an 0-indexed integer array `nums`, find a peak element, and return its index. You must write an algorithm that runs in `O(log n)` time.",chatbotData:{intuition:"We can find a peak in O(log N) using binary search by comparing `nums[mid]` to its neighbor `nums[mid + 1]`. If `nums[mid] < nums[mid + 1]`, we are on an ascending slope, meaning a peak must exist somewhere in the right half. So, we search the right half (`low = mid + 1`). If `nums[mid] >= nums[mid + 1]`, we are on a descending slope, meaning a peak must exist at `mid` or in the left half, so we search the left half (`high = mid`).",complexity:`Time Complexity: O(log N) because we halve the search space at each step.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. Array size is 1: loop terminates, returns index 0.
2. Peak at boundary (e.g. index 0 or n-1): handles correctly, since the problem treats out-of-bound neighbors as negative infinity.`,debugging:"Use `low < high` inside the loop condition, and when moving the right boundary set `high = mid` so we don't accidentally skip a peak that happens to be at `mid`."},solutions:{cpp:{code:`int findPeakElement(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector, returns a peak element's index."},{line:2,text:"Initialize search bounds."},{line:3,text:"Loop while pointers have not met."},{line:4,text:"Compute middle index."},{line:5,text:"Compare the middle element with its right neighbor."},{line:6,text:"If mid element is smaller, slope is rising: a peak is in the right half. Set `low = mid + 1`."},{line:8,text:"Otherwise, slope is falling: a peak is at `mid` or in the left half. Set `high = mid`."},{line:11,text:"Return the index where the pointers met."}]},python:{code:`def findPeakElement(nums: list[int]) -> int:
    low, high = 0, len(nums) - 1
    while low < high:
        mid = low + (high - low) // 2
        if nums[mid] < nums[mid + 1]:
            low = mid + 1
        else:
            high = mid
    return low`,explanation:[{line:1,text:"Define findPeakElement function."},{line:2,text:"Initialize pointers."},{line:3,text:"Start binary search loop."},{line:4,text:"Find middle index."},{line:5,text:"If mid value is smaller than right neighbor, go right."},{line:8,text:"Otherwise, go left including `mid`."},{line:9,text:"Return index."}]},java:{code:`public int findPeakElement(int[] nums) {
    int low = 0, high = nums.length - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}`,explanation:[{line:1,text:"Declare method returning peak index."},{line:2,text:"Set low and high pointers."},{line:3,text:"Loop while pointers are separate."},{line:4,text:"Compute midpoint."},{line:5,text:"Compare midpoint with right neighbor."},{line:6,text:"Ascending slope: move low pointer."},{line:8,text:"Descending slope: move high pointer."},{line:11,text:"Return peak index."}]}}},{id:240,name:"Search a 2D Matrix II",difficulty:"Medium",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/search-a-2d-matrix-ii/",tip:"Start at the top-right corner. If the element is equal to target, return true. If it is greater, move left (decrease column). If it is smaller, move down (increase row).",description:"Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:\n1. Integers in each row are sorted in ascending from left to right.\n2. Integers in each column are sorted in ascending from top to bottom.",chatbotData:{intuition:"Instead of searching the entire matrix (O(M*N)) or binary searching each row (O(M log N)), we can start search from the top-right corner `(row = 0, col = cols - 1)`. At this position, all elements to the left in the same row are smaller, and all elements below in the same column are larger. If the current element is larger than target, we know the target cannot be in this column: we move left `col--`. If the current element is smaller, we know target cannot be in this row: we move down `row++`.",complexity:`Time Complexity: O(M + N) because at each step we either eliminate one row or one column. M is rows and N is columns.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. Matrix is empty: returns false.
2. Target is outside the matrix ranges: row/col index becomes out of bounds, loop terminates, returns false.`,debugging:"Verify that you start at either top-right or bottom-left corner. Starting at top-left or bottom-right will not work because both directions from those corners either increase or decrease the values, making path decisions ambiguous."},solutions:{cpp:{code:`bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int row = 0;
    int col = matrix[0].size() - 1;
    while (row < matrix.size() && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Function declaration: takes 2D matrix reference and target, returns boolean."},{line:2,text:"Handle empty matrix edge case."},{line:3,text:"Start row pointer at 0 (top row)."},{line:4,text:"Start col pointer at `matrix[0].size() - 1` (rightmost column)."},{line:5,text:"Loop while pointers remain inside the matrix bounds."},{line:6,text:"If current element matches target, return true."},{line:8,text:"If current element is greater than target, target must be in a column to the left: decrement `col`."},{line:10,text:"If current element is smaller than target, target must be in a row below: increment `row`."},{line:14,text:"Return false if pointers go out of bounds."}]},python:{code:`def searchMatrix(matrix: list[list[int]], target: int) -> bool:
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] > target:
            col -= 1
        else:
            row += 1
    return False`,explanation:[{line:1,text:"Define searchMatrix function in Python."},{line:2,text:"Return False if matrix is empty."},{line:4,text:"Initialize pointer at top-right corner."},{line:5,text:"Loop while row is within height and col is within width."},{line:6,text:"Check target match. Return True if found."},{line:8,text:"If element is too big, move leftwards (eliminate column)."},{line:10,text:"If element is too small, move downwards (eliminate row)."}]},java:{code:`public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    int row = 0;
    int col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Declare searchMatrix method."},{line:2,text:"Verify matrix sizes."},{line:3,text:"Set starting row position to 0."},{line:4,text:"Set starting col position to last column index."},{line:5,text:"Loop while pointers are within limits."},{line:6,text:"Check target match at current index."},{line:8,text:"Move left if element is larger than target."},{line:10,text:"Move down if element is smaller than target."}]}}},{id:4,name:"Median of Two Sorted Arrays",difficulty:"Hard",topic:"Binary Search",leetcodeUrl:"https://leetcode.com/problems/median-of-two-sorted-arrays/",tip:"Use binary search on the partition index of the smaller array. Partition both arrays such that the left half has the same number of elements as the right half. Ensure elements at boundaries are correctly sorted.",description:"Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.",chatbotData:{intuition:"Instead of merging the arrays (which takes O(M+N)), we want to find a partition in both arrays. We binary search the partition point in the smaller array `A` (say size X). Let's call this partition `i`, and the corresponding partition in the larger array `B` (size Y) is `j = (X + Y + 1) / 2 - i`. This partition splits the merged array into two halves of equal size. We check if the partition is correct: the largest element on the left must be <= the smallest element on the right (i.e. `A[i-1] <= B[j]` and `B[j-1] <= A[i]`). If it's correct, we compute the median.",complexity:`Time Complexity: O(log(min(M, N))) because we perform binary search only on the smaller array.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. One array is empty: handled correctly by returning the median of the non-empty array.
2. Boundaries (index out of bounds): handled by treating out-of-bounds left elements as -infinity and right elements as +infinity.`,debugging:"Always ensure `nums1` is the smaller array. If not, swap `nums1` and `nums2` at the beginning of the function to ensure the correct complexity and prevent out-of-bounds calculations."},solutions:{cpp:{code:`double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) {
        return findMedianSortedArrays(nums2, nums1);
    }
    int x = nums1.size();
    int y = nums2.size();
    int low = 0, high = x;
    while (low <= high) {
        int partitionX = low + (high - low) / 2;
        int partitionY = (x + y + 1) / 2 - partitionX;
        int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
        int minRightX = (partitionX == x) ? INT_MAX : nums1[partitionX];
        int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
        int minRightY = (partitionY == y) ? INT_MAX : nums2[partitionY];
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 == 0) {
                return ((double)max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;
            } else {
                return (double)max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    return 0.0;
}`,explanation:[{line:1,text:"Function declaration: takes two sorted vectors, returns median as double."},{line:2,text:"If `nums1` is larger than `nums2`, swap them to binary search on the smaller array. This ensures O(log(min(M, N))) time."},{line:5,text:"Define sizes of both arrays as `x` and `y`."},{line:7,text:"Initialize binary search range `[0, x]` on the smaller array."},{line:8,text:"Loop while the binary search space is valid."},{line:9,text:"Find partition index `partitionX` in the smaller array."},{line:10,text:"Calculate partition index `partitionY` in the larger array to keep equal left/right halves."},{line:11,text:"If `partitionX` is at 0, there are no left elements in X: use `INT_MIN`. Otherwise, use `nums1[partitionX-1]`."},{line:12,text:"If `partitionX` is at X, there are no right elements: use `INT_MAX`. Otherwise, use `nums1[partitionX]`."},{line:13,text:"Do the same out-of-bound checks for array Y."},{line:15,text:"Check if we found the correct partition: left elements are <= right elements."},{line:16,text:"If total size is even, median is average of the maximum left element and minimum right element."},{line:18,text:"If total size is odd, median is the maximum of the left elements."},{line:21,text:"If `maxLeftX > minRightY`, partition X is too far right: search left half by decreasing `high`."},{line:23,text:"Otherwise, partition X is too far left: search right half by increasing `low`."}]},python:{code:`def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:
    if len(nums1) > len(nums2):
        return findMedianSortedArrays(nums2, nums1)
    x, y = len(nums1), len(nums2)
    low, high = 0, x
    while low <= high:
        partitionX = low + (high - low) // 2
        partitionY = (x + y + 1) // 2 - partitionX
        maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
        minRightX = float('inf') if partitionX == x else nums1[partitionX]
        maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
        minRightY = float('inf') if partitionY == y else nums2[partitionY]
        if maxLeftX <= minRightY and maxLeftY <= minRightX:
            if (x + y) % 2 == 0:
                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0
            else:
                return float(max(maxLeftX, maxLeftY))
        elif maxLeftX > minRightY:
            high = partitionX - 1
        else:
            low = partitionX + 1
    return 0.0`,explanation:[{line:1,text:"Define median function."},{line:2,text:"Ensure `nums1` is the smaller list."},{line:4,text:"Get lengths `x` and `y`."},{line:5,text:"Set pointers for partition search."},{line:7,text:"Calculate partition points."},{line:9,text:"Handle boundary values using positive/negative infinity."},{line:13,text:"If partition boundary conditions are met, calculate median."},{line:14,text:"Even total size calculation."},{line:16,text:"Odd total size calculation."},{line:18,text:"If X partition is too large, move left."},{line:20,text:"If X partition is too small, move right."}]},java:{code:`public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    int x = nums1.length, y = nums2.length;
    int low = 0, high = x;
    while (low <= high) {
        int partitionX = low + (high - low) / 2;
        int partitionY = (x + y + 1) / 2 - partitionX;
        int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
        int minRightX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];
        int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
        int minRightY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 == 0) {
                return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
            } else {
                return (double)Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    return 0.0;
}`,explanation:[{line:1,text:"Declare method findMedianSortedArrays."},{line:2,text:"Swap if nums1 is larger."},{line:5,text:"Define arrays lengths."},{line:6,text:"Initialize boundaries."},{line:8,text:"Compute partitions."},{line:10,text:"Set boundary boundary elements using `Integer.MIN_VALUE` and `Integer.MAX_VALUE`."},{line:14,text:"Verify partition conditions."},{line:15,text:"Median calculation for even lengths sum."},{line:17,text:"Median calculation for odd lengths sum."}]}}}],qx=[{id:21,name:"Merge Two Sorted Lists",difficulty:"Easy",topic:"Linked List",leetcodeUrl:"https://leetcode.com/problems/merge-two-sorted-lists/",tip:"Use a dummy head node. This simplifies edge cases when inserting the first element, as you can always append to `tail->next`.",description:"You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",chatbotData:{intuition:"We can build the merged list node by node. We create a `dummy` node to act as the head of the new list, and maintain a `tail` pointer. We compare the values at `list1` and `list2`. We append the smaller node to `tail.next` and move that list's pointer forward. We also move `tail` forward. Once one of the lists becomes empty, we simply link the rest of the other list to the end.",complexity:`Time Complexity: O(N + M) where N and M are the sizes of the two lists, since we visit each node exactly once.
Space Complexity: O(1) auxiliary space as we reuse the existing nodes.`,edgeCases:`1. One or both lists are empty: handled correctly by appending the remaining list.
2. All elements in list1 are smaller than list2: list1 is traversed first, then tail links to list2.`,debugging:"Remember to return `dummy.next` (or `dummy->next`), not `dummy`, because the dummy node itself is just a placeholder and is not part of the sorted lists."},solutions:{cpp:{code:`ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    while (list1 != nullptr && list2 != nullptr) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }
    tail->next = (list1 != nullptr) ? list1 : list2;
    return dummy.next;
}`,explanation:[{line:1,text:"Function declaration: takes head pointers of two lists, returns head pointer of merged list."},{line:2,text:"Create a local stack-allocated `dummy` ListNode with value 0 to avoid dynamic memory allocation."},{line:3,text:"Set `tail` pointer to point to the address of `dummy`."},{line:4,text:"Loop while both lists have nodes remaining."},{line:5,text:"Compare values of the current nodes in both lists."},{line:6,text:"If `list1` node is smaller or equal, append `list1` node to `tail->next`."},{line:7,text:"Advance `list1` pointer to its next node."},{line:9,text:"Otherwise, append `list2` node to `tail->next`."},{line:10,text:"Advance `list2` pointer."},{line:12,text:"Advance the `tail` pointer to the newly appended node."},{line:14,text:"Once loop ends, append the remaining elements of the non-empty list directly to the tail."},{line:15,text:"Return the node after dummy, which is the actual start of the merged list."}]},python:{code:`def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(0)
    tail = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next
    tail.next = list1 if list1 else list2
    return dummy.next`,explanation:[{line:1,text:"Define mergeTwoLists function."},{line:2,text:"Create a dummy ListNode."},{line:3,text:"Set `tail` pointer to dummy node."},{line:4,text:"Loop while both `list1` and `list2` are not None."},{line:5,text:"Compare node values."},{line:6,text:"Link smaller node to `tail.next` and advance list pointer."},{line:11,text:"Advance `tail` pointer."},{line:12,text:"Link any remaining nodes from the non-empty list."},{line:13,text:"Return the head of merged list (`dummy.next`)."}]},java:{code:`public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = (list1 != null) ? list1 : list2;
    return dummy.next;
}`,explanation:[{line:1,text:"Declare mergeTwoLists method."},{line:2,text:"Create dummy head node."},{line:3,text:"Set tail pointer to dummy."},{line:4,text:"Loop while both lists are non-null."},{line:5,text:"If `list1` has a smaller value, append it and advance `list1`."},{line:8,text:"If `list2` has a smaller value, append it and advance `list2`."},{line:12,text:"Move tail pointer forward."},{line:14,text:"Append remaining nodes of whichever list is not null."},{line:15,text:"Return dummy's next node."}]}}},{id:141,name:"Linked List Cycle",difficulty:"Easy",topic:"Fast & Slow Pointer",leetcodeUrl:"https://leetcode.com/problems/linked-list-cycle/",tip:"Use Floyd's Cycle Finding Algorithm (two pointers). The slow pointer moves by 1 step, the fast pointer moves by 2 steps. If they meet, there is a cycle.",description:"Given `head`, the head of a linked list, determine if the linked list has a cycle in it. Return `true` if there is a cycle, and `false` otherwise.",chatbotData:{intuition:"Think of two runners on a circular track. A fast runner will eventually lap the slow runner and meet them from behind. We initialize a `slow` pointer and a `fast` pointer at the head. In each iteration, `slow` moves 1 node, and `fast` moves 2 nodes. If there is no cycle, `fast` will eventually reach the end of the list (`null`). If there is a cycle, `fast` will enter the loop first, and `slow` will follow. Eventually, `fast` and `slow` will point to the same node, indicating a cycle.",complexity:`Time Complexity: O(N) where N is the number of nodes in the list. If there is no cycle, fast reaches the end in N/2 steps. If there is a cycle, fast meets slow in at most N steps.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. Empty list or single node: returns false immediately.
2. Cycle of size 2: handled correctly, pointers meet on second step.`,debugging:"Always verify `fast != null` and `fast.next != null` inside the loop condition to avoid NullPointerExceptions."},solutions:{cpp:{code:`bool hasCycle(ListNode *head) {
    if (head == nullptr) return false;
    ListNode* slow = head;
    ListNode* fast = head;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Function declaration: takes a head pointer, returns boolean."},{line:2,text:"If the list is empty, there can't be a cycle: return false."},{line:3,text:"Initialize `slow` pointer at the head."},{line:4,text:"Initialize `fast` pointer at the head."},{line:5,text:"Loop while `fast` and `fast->next` are not null (i.e. we haven't reached list end)."},{line:6,text:"Move `slow` pointer forward by one node."},{line:7,text:"Move `fast` pointer forward by two nodes."},{line:8,text:"Check if the two pointers have met."},{line:9,text:"If they met, a cycle is present: return true."},{line:12,text:"If loop ends, it means we reached the end of list: return false."}]},python:{code:`def hasCycle(head: Optional[ListNode]) -> bool:
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,explanation:[{line:1,text:"Define hasCycle function."},{line:2,text:"Set both pointers to the head."},{line:3,text:"Loop while `fast` and its next node exist."},{line:4,text:"Advance slow by 1, fast by 2."},{line:6,text:"Check if pointers are at the same node. If so, cycle found."},{line:8,text:"Return False if loop finishes without collision."}]},java:{code:`public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
}`,explanation:[{line:1,text:"Declare hasCycle method."},{line:2,text:"Check if the head node is null."},{line:3,text:"Initialize slow pointer."},{line:4,text:"Initialize fast pointer."},{line:5,text:"Loop while fast pointer is not null."},{line:6,text:"Move slow 1 step."},{line:7,text:"Move fast 2 steps."},{line:8,text:"Compare nodes: return true if they match."},{line:12,text:"Return false when end is reached."}]}}},{id:206,name:"Reverse Linked List",difficulty:"Easy",topic:"Linked List",leetcodeUrl:"https://leetcode.com/problems/reverse-linked-list/",tip:"Use three pointers: `prev` (initialized to null), `curr` (initialized to head), and `nextTemp` (to temporarily store `curr->next` before reversing).",description:"Given the `head` of a singly linked list, reverse the list, and return the reversed list.",chatbotData:{intuition:"To reverse a list, we must change the direction of each node's `next` pointer. Normally, `nodeA.next` points to `nodeB`. We want it to point to `prev` (the node before it). We iterate through the list. For each node `curr`, we temporarily store its next node `nextTemp = curr.next` (otherwise we would lose the rest of the list). Then we reverse the link: `curr.next = prev`. Finally, we move our pointers forward: `prev` becomes `curr`, and `curr` becomes `nextTemp`.",complexity:`Time Complexity: O(N) because we visit each of the N nodes exactly once.
Space Complexity: O(1) auxiliary space as we reverse in-place by changing pointer references.`,edgeCases:`1. Empty list: returns null.
2. Single node: returns the node itself (reversing a single node does nothing).`,debugging:"Don't forget to temporarily save `curr.next` before overwriting it with `prev`. Otherwise, you will break the chain and have no way to access the remaining nodes."},solutions:{cpp:{code:`ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`,explanation:[{line:1,text:"Function declaration: takes list head pointer, returns reversed head pointer."},{line:2,text:"Initialize `prev` pointer to `nullptr`. This will eventually be the new head."},{line:3,text:"Initialize `curr` pointer to `head`."},{line:4,text:"Loop while the `curr` pointer is not null."},{line:5,text:"Temporarily store the next node in `nextTemp` so we don't lose access to it."},{line:6,text:"Reverse the link: make `curr->next` point to the previous node `prev`."},{line:7,text:"Shift `prev` pointer forward to the current node."},{line:8,text:"Shift `curr` pointer forward to the saved next node."},{line:10,text:"After loop ends, `prev` points to the new head node: return it."}]},python:{code:`def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev`,explanation:[{line:1,text:"Define reverseList function."},{line:2,text:"Initialize `prev` to None."},{line:3,text:"Initialize `curr` to head."},{line:4,text:"Loop through nodes."},{line:5,text:"Save `curr.next` in `next_temp`."},{line:6,text:"Reverse current node pointer to face backward."},{line:7,text:"Move `prev` to `curr`."},{line:8,text:"Move `curr` to `next_temp`."},{line:9,text:"Return `prev` (new head of reversed list)."}]},java:{code:`public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`,explanation:[{line:1,text:"Declare method reverseList."},{line:2,text:"Initialize `prev` pointer to null."},{line:3,text:"Initialize `curr` pointer to head."},{line:4,text:"Loop while curr is not null."},{line:5,text:"Save next node reference."},{line:6,text:"Link current node's next field to previous node."},{line:7,text:"Advance prev pointer."},{line:8,text:"Advance curr pointer."},{line:10,text:"Return prev pointer."}]}}},{id:234,name:"Palindrome Linked List",difficulty:"Easy",topic:"Linked List",leetcodeUrl:"https://leetcode.com/problems/palindrome-linked-list/",tip:"Use fast & slow pointers to find the midpoint. Reverse the second half of the linked list. Compare the first half and the reversed second half. (Optional: restore the list).",description:"Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.",chatbotData:{intuition:"We can check if a linked list is a palindrome in O(N) time and O(1) space. First, we use a `slow` and `fast` pointer to find the middle of the list. Then, we reverse the second half of the list starting from `slow`. Finally, we compare the nodes of the first half (starting at `head`) with the reversed second half (starting at the new head of the reversed half). If any values differ, it's not a palindrome.",complexity:`Time Complexity: O(N) since we make a pass to find the midpoint, a pass to reverse the second half, and a pass to compare values.
Space Complexity: O(1) auxiliary space as we modify list pointers in-place.`,edgeCases:`1. Single node: returns true.
2. Two nodes (e.g. 1 -> 2): middle found, second half reversed, compared, returns false.`,debugging:"Make sure you handle cases with odd numbers of elements. The first half will be slightly longer or equal to the second, so loop check should run while the reversed second half pointer is not null."},solutions:{cpp:{code:`ListNode* reverse(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

bool isPalindrome(ListNode* head) {
    if (head == nullptr || head->next == nullptr) return true;
    ListNode* slow = head;
    ListNode* fast = head;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    ListNode* secondHalf = reverse(slow);
    ListNode* firstHalf = head;
    while (secondHalf != nullptr) {
        if (firstHalf->val != secondHalf->val) {
            return false;
        }
        firstHalf = firstHalf->next;
        secondHalf = secondHalf->next;
    }
    return true;
}`,explanation:[{line:1,text:"Helper function declaration to reverse a linked list."},{line:12,text:"Main function declaration."},{line:13,text:"A list of size 0 or 1 is automatically a palindrome: return true."},{line:14,text:"Initialize slow and fast pointers to head."},{line:16,text:"Loop to advance slow by 1 and fast by 2. When fast reaches the end, slow is at the midpoint."},{line:20,text:"Reverse the second half of the list starting from the midpoint `slow`."},{line:21,text:"Set pointer `firstHalf` to start at `head`."},{line:22,text:"Loop while the reversed second half has nodes."},{line:23,text:"Compare values at both pointers. If they differ, return false."},{line:26,text:"Advance both pointers forward."},{line:29,text:"If all nodes match, return true."}]},python:{code:`def isPalindrome(head: Optional[ListNode]) -> bool:
    if not head or not head.next:
        return True
    
    # Find mid
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
    # Reverse second half
    prev = None
    curr = slow
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
        
    # Compare halves
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    return True`,explanation:[{line:1,text:"Define isPalindrome function."},{line:2,text:"Return True for lists of size <= 1."},{line:6,text:"Initialize fast/slow pointers."},{line:7,text:"Run loop to place `slow` at the middle."},{line:12,text:"Initialize pointers to reverse second half in-place."},{line:14,text:"Reverse links from `slow` node to the end of list."},{line:21,text:"Compare first half (`left`) and reversed second half (`right`)."},{line:23,text:"Return False if any value is unequal."},{line:27,text:"Return True when right pointer reaches end successfully."}]},java:{code:`public boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) return true;
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    ListNode prev = null;
    ListNode curr = slow;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    ListNode left = head;
    ListNode right = prev;
    while (right != null) {
        if (left.val != right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
}`,explanation:[{line:1,text:"Declare method `isPalindrome`."},{line:2,text:"Handle empty or single element lists."},{line:3,text:"Find midpoint using slow and fast pointers."},{line:9,text:"Initialize parameters to reverse list starting at `slow`."},{line:11,text:"Reverse the second half of the list."},{line:17,text:"Initialize left pointer at head and right pointer at reversed second half's head."},{line:19,text:"Loop through reversed half to compare values."},{line:20,text:"Return false if a mismatch is found."},{line:24,text:"Return true if all characters are symmetric."}]}}},{id:2,name:"Add Two Numbers",difficulty:"Medium",topic:"Linked List",leetcodeUrl:"https://leetcode.com/problems/add-two-numbers/",tip:"Iterate through both lists simultaneously. Maintain a `carry` variable. Create new nodes with `(val1 + val2 + carry) % 10` and calculate new `carry` using division `/ 10`.",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",chatbotData:{intuition:"Since the digits are stored in reverse order, the head of the list holds the least significant digit (ones place). This is exactly how we perform manual addition (right-to-left)! We traverse both lists together, calculating the sum of matching digits plus any `carry` from the previous step. The new digit is `sum % 10`, and the new carry is `sum / 10`. We append each new digit to our output list.",complexity:`Time Complexity: O(max(N, M)) where N and M are the lengths of the two lists, since we iterate through the longest list once.
Space Complexity: O(max(N, M)) to store the resulting sum linked list.`,edgeCases:`1. Lists of different lengths (e.g. 99 + 1): carry propagates past the end of the shorter list, and might create an extra node at the end (e.g. 100).
2. One list is 0: works naturally.`,debugging:"Make sure you include a check for `carry > 0` in your loop condition or after the loop. If there is a leftover carry after reaching the end of both lists, you must append one final node containing that carry value."},solutions:{cpp:{code:`ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    int carry = 0;
    while (l1 != nullptr || l2 != nullptr || carry > 0) {
        int val1 = (l1 != nullptr) ? l1->val : 0;
        int val2 = (l2 != nullptr) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        tail->next = new ListNode(sum % 10);
        tail = tail->next;
        if (l1 != nullptr) l1 = l1->next;
        if (l2 != nullptr) l2 = l2->next;
    }
    return dummy.next;
}`,explanation:[{line:1,text:"Function declaration: takes two list heads, returns head of the sum list."},{line:2,text:"Create a `dummy` head node to simplify node appending."},{line:3,text:"Initialize `tail` pointer pointing to dummy."},{line:4,text:"Initialize `carry` variable to 0."},{line:5,text:"Loop while there are nodes left in `l1` OR `l2` OR there is a leftover carry from the last addition."},{line:6,text:"Get value of current `l1` node, or 0 if we reached its end."},{line:7,text:"Get value of current `l2` node, or 0."},{line:8,text:"Calculate the total sum (val1 + val2 + carry)."},{line:9,text:"Calculate the new carry for the next digits (using division by 10)."},{line:10,text:"Create a new node with digit `sum % 10` and link it to `tail->next`."},{line:11,text:"Advance the `tail` pointer."},{line:12,text:"Move `l1` pointer to next node if it exists."},{line:13,text:"Move `l2` pointer if it exists."},{line:15,text:"Return the node after dummy, which is the start of the sum list."}]},python:{code:`def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(0)
    tail = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        tail.next = ListNode(total % 10)
        tail = tail.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return dummy.next`,explanation:[{line:1,text:"Define addTwoNumbers function."},{line:2,text:"Create dummy node."},{line:3,text:"Initialize tail and carry."},{line:5,text:"Loop while l1, l2, or carry exists."},{line:6,text:"Get digit values or default to 0."},{line:8,text:"Sum digits and carry."},{line:9,text:"Find new carry using integer floor division."},{line:10,text:"Create new node with modulo value and append it."},{line:12,text:"Advance list nodes."},{line:14,text:"Return merged result starting at `dummy.next`."}]},java:{code:`public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;
    int carry = 0;
    while (l1 != null || l2 != null || carry > 0) {
        int val1 = (l1 != null) ? l1.val : 0;
        int val2 = (l2 != null) ? l2.val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    return dummy.next;
}`,explanation:[{line:1,text:"Declare addTwoNumbers method."},{line:2,text:"Create dummy ListNode."},{line:3,text:"Set tail and carry trackers."},{line:5,text:"Loop while list nodes remain or carry is positive."},{line:6,text:"Get values, handling null positions."},{line:8,text:"Sum digits and carry."},{line:9,text:"Set carry."},{line:10,text:"Instantiate new node with digit and link to tail."},{line:11,text:"Advance tail."},{line:15,text:"Return dummy's next node."}]}}},{id:19,name:"Remove Nth Node From End",difficulty:"Medium",topic:"Two Pointer",leetcodeUrl:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",tip:"Use a dummy head. Set two pointers `first` and `second` at dummy. Move `first` pointer `n + 1` steps ahead first. Then move both together until `first` hits null. `second` will point right before the node to delete.",description:"Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.",chatbotData:{intuition:"To remove the Nth node from the end in one pass, we use two pointers: `fast` and `slow`. We first place them at a `dummy` node. We advance `fast` by `n + 1` steps. This establishes a gap of exactly `n` nodes between `fast` and `slow`. Then, we advance both pointers at the same speed (1 step at a time) until `fast` becomes null. Because of the gap, when `fast` reaches the end, `slow` will point *exactly* to the node preceding the Nth node from the end. We delete it by doing `slow.next = slow.next.next`.",complexity:`Time Complexity: O(N) since we traverse the list of N nodes in a single pass.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. List has only 1 element and n=1: dummy node handles it perfectly, returns null.
2. Deleting the head node: because slow starts at dummy, it correctly deletes the head and dummy.next points to the new head.`,debugging:"Make sure you initialize the pointers at a dummy head node. Without a dummy node, deleting the head of the list requires custom edge-case conditions, which increases code complexity."},solutions:{cpp:{code:`ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode dummy(0);
    dummy.next = head;
    ListNode* first = &dummy;
    ListNode* second = &dummy;
    for (int i = 1; i <= n + 1; i++) {
        first = first->next;
    }
    while (first != nullptr) {
        first = first->next;
        second = second->next;
    }
    second->next = second->next->next;
    return dummy.next;
}`,explanation:[{line:1,text:"Function declaration: takes head pointer and integer n, returns modified head pointer."},{line:2,text:"Create a dummy head node with value 0."},{line:3,text:"Link `dummy.next` to the head of the list."},{line:4,text:"Initialize `first` pointer to point to the dummy node."},{line:5,text:"Initialize `second` pointer to point to the dummy node."},{line:6,text:"Move `first` pointer `n + 1` steps forward to create a gap of `n` nodes between `first` and `second`."},{line:9,text:"Move both pointers forward until `first` pointer reaches the end (`nullptr`)."},{line:13,text:"Skip the target node: make `second->next` point to `second->next->next`."},{line:14,text:"Return the node after dummy (the head of our modified list)."}]},python:{code:`def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:
    dummy = ListNode(0)
    dummy.next = head
    first = dummy
    second = dummy
    for i in range(n + 1):
        first = first.next
    while first:
        first = first.next
        second = second.next
    second.next = second.next.next
    return dummy.next`,explanation:[{line:1,text:"Define removeNthFromEnd function."},{line:2,text:"Create a dummy node."},{line:4,text:"Initialize both pointers to dummy."},{line:6,text:"Move `first` pointer `n + 1` steps forward."},{line:8,text:"Move both pointers together until `first` is None."},{line:11,text:"Unlink the N-th node from the end by skipping it."},{line:12,text:"Return `dummy.next`."}]},java:{code:`public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy;
    ListNode second = dummy;
    for (int i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}`,explanation:[{line:1,text:"Declare method removeNthFromEnd."},{line:2,text:"Create dummy node."},{line:4,text:"Set pointers to dummy node."},{line:6,text:"Move `first` pointer `n + 1` steps."},{line:9,text:"Loop until `first` is null."},{line:13,text:"Point `second.next` to the node after the one we want to delete."},{line:14,text:"Return the head of list."}]}}},{id:142,name:"Linked List Cycle II",difficulty:"Medium",topic:"Fast & Slow Pointer",leetcodeUrl:"https://leetcode.com/problems/linked-list-cycle-ii/",tip:"Find the meeting point of slow and fast pointers. Then, reset the slow pointer to the head of the list. Move both pointers at the same speed (1 step); the node where they meet is the start of the cycle.",description:"Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.",chatbotData:{intuition:"Using Floyd's Cycle Detection, when `slow` (1 step) and `fast` (2 steps) meet, they are at some node inside the cycle. Let the distance from head to cycle entrance be `D`, and distance from entrance to meeting point be `K`. It is mathematically provable that the remaining distance from the meeting point to the cycle entrance is also `D` (plus some cycles). Therefore, if we reset `slow` to the `head` and leave `fast` at the meeting point, and move both at 1 step per turn, they will meet exactly at the cycle entrance!",complexity:`Time Complexity: O(N) where N is the number of nodes in the list. Both pointers travel at most 2N steps.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. No cycle: fast reaches null, returns null.
2. Cycle starts at head: slow and fast meet, slow reset to head, they meet immediately at head.`,debugging:"Make sure you do not reset both pointers. Only reset one pointer (e.g. `slow` to `head`), and leave the other pointer at the collision node."},solutions:{cpp:{code:`ListNode *detectCycle(ListNode *head) {
    if (head == nullptr || head->next == nullptr) return nullptr;
    ListNode* slow = head;
    ListNode* fast = head;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return nullptr;
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    return slow;
}`,explanation:[{line:1,text:"Function declaration: takes head pointer, returns pointer to cycle start or nullptr."},{line:2,text:"Handle empty list or single node cases."},{line:3,text:"Initialize slow and fast pointers at head."},{line:5,text:"Boolean flag to track if a cycle is found."},{line:6,text:"Standard Floyd's cycle detection loop."},{line:9,text:"Pointers collided: cycle exists! Set flag to true and break loop."},{line:14,text:"If no cycle was found, return nullptr."},{line:15,text:"Reset the `slow` pointer to the head of the list."},{line:16,text:"Loop while the two pointers are not equal."},{line:17,text:"Move `slow` forward by 1 node."},{line:18,text:"Move `fast` forward by 1 node (at the same speed as slow)."},{line:20,text:"The meeting node is the cycle start: return it."}]},python:{code:`def detectCycle(head: Optional[ListNode]) -> Optional[ListNode]:
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    else:
        return None
        
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow`,explanation:[{line:1,text:"Define detectCycle function."},{line:2,text:"Set both pointers to head."},{line:3,text:"Detect cycle loop."},{line:6,text:"Collision found: break loop."},{line:8,text:"Python `while-else` construct: runs if loop finished without breaking (meaning no cycle): return None."},{line:11,text:"Reset `slow` pointer to the head."},{line:12,text:"Move both pointers 1 step at a time until they collide."},{line:15,text:"Return the node where they meet."}]},java:{code:`public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) return null;
    ListNode slow = head;
    ListNode fast = head;
    boolean hasCycle = false;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return null;
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}`,explanation:[{line:1,text:"Declare detectCycle method."},{line:2,text:"Verify basic list dimensions."},{line:3,text:"Set up fast and slow pointers."},{line:6,text:"Standard collision check."},{line:9,text:"Record cycle exists and break loop."},{line:14,text:"Return null if no cycle."},{line:15,text:"Reset slow pointer to head."},{line:16,text:"Loop while pointers are different."},{line:20,text:"Return start node."}]}}},{id:146,name:"LRU Cache",difficulty:"Medium",topic:"Design / HashMap",leetcodeUrl:"https://leetcode.com/problems/lru-cache/",tip:"Use a Doubly Linked List and a Hash Map. The doubly linked list maintains the usage order (head = most recent, tail = least recent). The hash map maps keys to list node addresses for O(1) access.",description:"Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class with `get` and `put` operations in `O(1)` time complexity.",chatbotData:{intuition:"To achieve O(1) for both `get` and `put`, we need a combination of two data structures: a Hash Map and a Doubly Linked List. The doubly linked list keeps track of the order of access. We place the most recently used items at the head, and the least recently used at the tail. The Hash Map stores `key -> Node` mappings, allowing us to find any node in the list in O(1) time. When we access or update an item, we move its node to the head. If we exceed capacity during a `put`, we delete the node at the tail.",complexity:"Time Complexity: O(1) for both `get` and `put` operations since map lookups and list node additions/deletions take O(1) time.\nSpace Complexity: O(Capacity) to store at most `capacity` number of items in the map and list.",edgeCases:`1. Capacity of 1: node is evicted on every new put.
2. Updating an existing key: updates value and moves node to the head of the list, doesn't increase size.`,debugging:"Implement helper methods like `addNode(Node*)` (add to head) and `removeNode(Node*)` (delete from list). This keeps code clean and prevents pointers from getting messed up during complex updates."},solutions:{cpp:{code:`class LRUCache {
private:
    struct Node {
        int key, val;
        Node* prev;
        Node* next;
        Node(int k, int v) : key(k), val(v), prev(nullptr), next(nullptr) {}
    };
    
    int capacity;
    unordered_map<int, Node*> map;
    Node* head = new Node(-1, -1);
    Node* tail = new Node(-1, -1);
    
    void addNode(Node* node) {
        Node* temp = head->next;
        node->next = temp;
        node->prev = head;
        head->next = node;
        temp->prev = node;
    }
    
    void removeNode(Node* node) {
        Node* prevNode = node->prev;
        Node* nextNode = node->next;
        prevNode->next = nextNode;
        nextNode->prev = prevNode;
    }
    
    void moveToHead(Node* node) {
        removeNode(node);
        addNode(node);
    }

public:
    LRUCache(int cap) {
        capacity = cap;
        head->next = tail;
        tail->prev = head;
    }
    
    int get(int key) {
        if (map.find(key) == map.end()) return -1;
        Node* node = map[key];
        moveToHead(node);
        return node->val;
    }
    
    void put(int key, int value) {
        if (map.find(key) != map.end()) {
            Node* node = map[key];
            node->val = value;
            moveToHead(node);
        } else {
            if (map.size() == capacity) {
                Node* lru = tail->prev;
                removeNode(lru);
                map.erase(lru->key);
                delete lru;
            }
            Node* newNode = new Node(key, value);
            map[key] = newNode;
            addNode(newNode);
        }
    }
};`,explanation:[{line:3,text:"Define a private `Node` structure for our Doubly Linked List containing key, val, prev, and next pointers."},{line:10,text:"Declare capacity variable."},{line:11,text:"Declare hash map mapping key to node pointer."},{line:12,text:"Create dummy head and tail nodes to avoid null pointer boundary checks."},{line:15,text:"Helper function: inserts a node directly after the dummy `head` (most recently used position)."},{line:23,text:"Helper function: removes an existing node from the list by updating its neighbors' pointers."},{line:30,text:"Helper function: moves a node to the head of the list (marks as recently used) by removing and re-adding it."},{line:36,text:"Constructor: initializes capacity and links head and tail dummy nodes together."},{line:42,text:"get() function: checks if key exists in map. If not, returns -1."},{line:44,text:"If key exists, retrieve the node, move it to the head, and return its value."},{line:49,text:"put() function: checks if key already exists. If yes, update value and move node to head."},{line:54,text:"If key is new, check if cache is full. If full, get the LRU node (`tail->prev`), remove it from map and list, and free memory."},{line:60,text:"Create the new node, insert it in the map, and add it to the head of the list."}]},python:{code:`class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.map = {}
        self.head = Node(-1, -1)
        self.tail = Node(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add(self, node):
        temp = self.head.next
        node.next = temp
        node.prev = self.head
        self.head.next = node
        temp.prev = node

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def get(self, key: int) -> int:
        if key not in self.map:
            return -1
        node = self.map[key]
        self._remove(node)
        self._add(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            node = self.map[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.map) == self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.map[lru.key]
            new_node = Node(key, value)
            self.map[key] = new_node
            self._add(new_node)`,explanation:[{line:1,text:"Define Node class with key, value, prev, next."},{line:8,text:"Define LRUCache class."},{line:9,text:"Constructor: initialize variables and setup dummy head/tail links."},{line:17,text:"Helper method to add a node right after head."},{line:24,text:"Helper method to remove node from list."},{line:28,text:"get(): check key presence. Return -1 if absent."},{line:31,text:"If present, move node to head of list and return value."},{line:36,text:"put(): if key exists, update value and move node to head."},{line:43,text:"If key is new and capacity exceeded, remove LRU node (`tail.prev`) from list and dict."},{line:47,text:"Create new node, save in dictionary, and insert at head."}]},java:{code:`class LRUCache {
    private class Node {
        int key, val;
        Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }
    
    private int capacity;
    private Map<Integer, Node> map = new HashMap<>();
    private Node head = new Node(-1, -1);
    private Node tail = new Node(-1, -1);
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }
    
    private void add(Node node) {
        Node temp = head.next;
        node.next = temp;
        node.prev = head;
        head.next = node;
        temp.prev = node;
    }
    
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        remove(node);
        add(node);
        return node.val;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node node = map.get(key);
            node.val = value;
            remove(node);
            add(node);
        } else {
            if (map.size() == capacity) {
                Node lru = tail.prev;
                remove(lru);
                map.remove(lru.key);
            }
            Node newNode = new Node(key, value);
            map.put(key, newNode);
            add(newNode);
        }
    }
}`,explanation:[{line:1,text:"Declare LRUCache class."},{line:2,text:"Define inner Node class."},{line:9,text:"Initialize hash map mapping keys to nodes."},{line:10,text:"Initialize dummy nodes."},{line:19,text:"Add node to head helper."},{line:27,text:"Remove node helper."},{line:32,text:"get(): return -1 if key not found; otherwise move node to head and return val."},{line:40,text:"put(): if key exists, update value and move to head. If new, evict LRU node if full, then save new node."}]}}}],zx=[{id:20,name:"Valid Parentheses",difficulty:"Easy",topic:"Stack",leetcodeUrl:"https://leetcode.com/problems/valid-parentheses/",tip:"Use a Stack. Push opening brackets `(`, `{`, `[` onto the stack. When you encounter a closing bracket, check if the stack is non-empty and the top matches. If yes, pop it. Otherwise, invalid.",description:"Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.",chatbotData:{intuition:"Brackets must close in the reverse order they open (LIFO - Last In First Out). A Stack is perfect for this. We loop through the characters. If we see an opening bracket, we push it onto the stack. If we see a closing bracket, we check the top of the stack. If the stack is empty or the top doesn't match the closing bracket, it is invalid. If it matches, we pop the opening bracket. At the end, the stack must be empty.",complexity:`Time Complexity: O(N) since we inspect each of the N characters exactly once.
Space Complexity: O(N) to store up to N characters in the stack in the worst case (e.g. all opening brackets).`,edgeCases:`1. Only opening brackets (e.g., '((('): returns false because stack won't be empty at the end.
2. Only closing brackets (e.g., '))'): returns false because stack is empty when trying to inspect top.
3. Empty string: returns true.`,debugging:"Do not forget to check `stack.empty()` before calling `stack.top()` (or `peek()` / `pop()`) to avoid a program crash or out-of-bounds errors when processing strings that start with closing brackets."},solutions:{cpp:{code:`bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}`,explanation:[{line:1,text:"Function declaration: takes string reference, returns boolean."},{line:2,text:"Declare a stack of characters `st`."},{line:3,text:"Iterate through each character `c` in the string."},{line:4,text:"If the character is an opening bracket, push it onto the stack."},{line:7,text:"Otherwise, it is a closing bracket: check if the stack is empty."},{line:8,text:"If current closing bracket doesn't match the top opening bracket, return false."},{line:11,text:"If it matches, pop the opening bracket off the stack."},{line:14,text:"If the stack is empty, all brackets were matched: return true. Otherwise, return false."}]},python:{code:`def isValid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping.values():
            stack.append(char)
        elif char in mapping:
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
    return len(stack) == 0`,explanation:[{line:1,text:"Define isValid function."},{line:2,text:"Use a Python list `stack` as a stack (append/pop)."},{line:3,text:"Define a dictionary to map closing brackets to opening brackets."},{line:4,text:"Iterate through each character in the string."},{line:5,text:"If character is an opening bracket, append to stack."},{line:7,text:"Otherwise, check if stack is empty or the last element doesn't match."},{line:10,text:"Pop the matching bracket off the stack."},{line:11,text:"Return True if stack is empty, meaning all brackets matched."}]},java:{code:`public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char top = stack.peek();
            if (c == ')' && top != '(') return false;
            if (c == '}' && top != '{') return false;
            if (c == ']' && top != '[') return false;
            stack.pop();
        }
    }
    return stack.isEmpty();
}`,explanation:[{line:1,text:"Declare isValid method."},{line:2,text:"Instantiate a new Stack of Character objects."},{line:3,text:"Loop through characters."},{line:4,text:"If opening bracket, push onto stack."},{line:7,text:"Verify stack isn't empty before peeking."},{line:8,text:"Get top character using `stack.peek()`."},{line:9,text:"Validate matching pairs."},{line:12,text:"Pop the matching bracket."},{line:15,text:"Return true if stack is empty."}]}}},{id:225,name:"Implement Stack using Queues",difficulty:"Easy",topic:"Design",leetcodeUrl:"https://leetcode.com/problems/implement-stack-using-queues/",tip:"You can implement a Stack using just ONE Queue. When pushing an element, append it to the queue, then rotate the queue by popping and re-appending all previous elements.",description:"Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).",chatbotData:{intuition:"A Queue is FIFO (First In First Out), while a Stack is LIFO. To make a queue behave like a stack, we can make the `push` operation do all the work so that the top element is always at the front of the queue. When we push `x` into the queue, we first add it to the back. Then, we find the size of the queue before `x` was added. We pop elements from the front and push them back to the end of the queue one by one. This rotates the queue, placing `x` at the front!",complexity:"Time Complexity: `push` is O(N) because we rotate all existing N elements. `pop`, `top`, and `empty` are O(1) time.\nSpace Complexity: O(N) to store N elements in the queue.",edgeCases:"1. Empty operations: user is assumed to call pop/top only on non-empty stacks, but `empty()` handles empty state correctly.",debugging:"Ensure you rotate exactly `size - 1` elements. Rotating too few or too many will mess up the stack order."},solutions:{cpp:{code:`class MyStack {
private:
    queue<int> q;

public:
    MyStack() {}
    
    void push(int x) {
        q.push(x);
        int size = q.size();
        for (int i = 0; i < size - 1; i++) {
            q.push(q.front());
            q.pop();
        }
    }
    
    int pop() {
        int val = q.front();
        q.pop();
        return val;
    }
    
    int top() {
        return q.front();
    }
    
    bool empty() {
        return q.empty();
    }
};`,explanation:[{line:3,text:"Declare a private standard queue `q`."},{line:8,text:"push() function: pushes new element to the back of the queue."},{line:10,text:"Get the current size of the queue."},{line:11,text:"Loop `size - 1` times to rotate all elements that were already in the queue."},{line:12,text:"Push the element at the front of the queue to the back."},{line:13,text:"Pop the front element. This shifts the new element `x` to the front."},{line:17,text:"pop() function: returns and removes the front element of the queue (which represents stack top)."},{line:23,text:"top() function: returns the front element without removing it."},{line:27,text:"empty() function: returns whether the queue is empty."}]},python:{code:`from collections import deque

class MyStack:
    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0`,explanation:[{line:1,text:"Import `deque` (double-ended queue) from collections."},{line:4,text:"Constructor: initialize an empty deque `q`."},{line:7,text:"push(): append `x` to the end of the deque."},{line:9,text:"Rotate the deque: pop from the left and append to the right `size - 1` times."},{line:12,text:"pop(): pop and return the leftmost element (front of queue)."},{line:15,text:"top(): return the element at index 0 (front of queue)."},{line:18,text:"empty(): check if deque length is 0."}]},java:{code:`class MyStack {
    private Queue<Integer> q = new LinkedList<>();

    public MyStack() {}
    
    public void push(int x) {
        q.add(x);
        int size = q.size();
        for (int i = 0; i < size - 1; i++) {
            q.add(q.remove());
        }
    }
    
    public int pop() {
        return q.remove();
    }
    
    public int top() {
        return q.peek();
    }
    
    public boolean empty() {
        return q.isEmpty();
    }
}`,explanation:[{line:1,text:"Declare class MyStack."},{line:2,text:"Initialize `q` as a LinkedList which implements the Queue interface."},{line:6,text:"push(): add the element to queue."},{line:8,text:"Get queue size."},{line:9,text:"Loop `size - 1` times: remove the element from the front and add it to the back."},{line:14,text:"pop(): remove and return the element at the front."},{line:18,text:"top(): peek the front element."},{line:22,text:"empty(): return queue's empty status."}]}}},{id:232,name:"Implement Queue using Stacks",difficulty:"Easy",topic:"Design",leetcodeUrl:"https://leetcode.com/problems/implement-queue-using-stacks/",tip:"Use two stacks: `input` and `output`. For `push`, push onto the `input` stack. For `pop` / `peek`, if `output` stack is empty, pop all elements from `input` and push them onto `output`. Then operate on `output`.",description:"Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).",chatbotData:{intuition:"A stack reverses order. If we push items into stack `input` and then pop them into stack `output`, the order is reversed *twice*, which restores the original FIFO order! When we push, we simply push onto `input` (O(1)). When we pop or peek, we check if `output` has elements. If it doesn't, we transfer all elements from `input` to `output`. This guarantees that the oldest element is always at the top of `output`.",complexity:"Time Complexity: `push` and `empty` are O(1). `pop` and `peek` are O(1) amortized, because each element is pushed, popped, and transferred at most a constant number of times.\nSpace Complexity: O(N) to store N elements in the two stacks.",edgeCases:"1. Alternating push and pop: elements are transferred only when output is empty, maintaining correct ordering.",debugging:"Do not transfer elements from `input` to `output` on every push. Only transfer when `output` is completely empty during a pop or peek operation."},solutions:{cpp:{code:`class MyQueue {
private:
    stack<int> input;
    stack<int> output;
    
    void transfer() {
        if (output.empty()) {
            while (!input.empty()) {
                output.push(input.top());
                input.pop();
            }
        }
    }

public:
    MyQueue() {}
    
    void push(int x) {
        input.push(x);
    }
    
    int pop() {
        transfer();
        int val = output.top();
        output.pop();
        return val;
    }
    
    int peek() {
        transfer();
        return output.top();
    }
    
    bool empty() {
        return input.empty() && output.empty();
    }
};`,explanation:[{line:3,text:"Declare private stack `input` for incoming pushes."},{line:4,text:"Declare private stack `output` for outgoing pops/peeks."},{line:6,text:"Helper function `transfer`: if `output` is empty, move all items from `input` to `output` in reverse order."},{line:18,text:"push() function: push `x` onto the `input` stack (O(1))."},{line:22,text:"pop() function: call transfer, get the top element of `output`, pop it and return it."},{line:29,text:"peek() function: call transfer, return top of `output` without popping."},{line:34,text:"empty() function: returns true only if BOTH stacks are empty."}]},python:{code:`class MyQueue:
    def __init__(self):
        self.input = []
        self.output = []

    def _transfer(self):
        if not self.output:
            while self.input:
                self.output.append(self.input.pop())

    def push(self, x: int) -> None:
        self.input.append(x)

    def pop(self) -> int:
        self._transfer()
        return self.output.pop()

    def peek(self) -> int:
        self._transfer()
        return self.output[-1]

    def empty(self) -> bool:
        return not self.input and not self.output`,explanation:[{line:1,text:"Define MyQueue class."},{line:3,text:"Initialize `input` and `output` lists acting as stacks."},{line:6,text:"Helper `_transfer()`: if `output` is empty, pop all from `input` and append to `output`."},{line:11,text:"push(): append `x` to `input`."},{line:14,text:"pop(): ensure elements are transferred, then pop from `output`."},{line:18,text:"peek(): ensure elements are transferred, then return last element in `output`."},{line:22,text:"empty(): return true if both lists are empty."}]},java:{code:`class MyQueue {
    private Stack<Integer> input = new Stack<>();
    private Stack<Integer> output = new Stack<>();

    public MyQueue() {}
    
    private void transfer() {
        if (output.isEmpty()) {
            while (!input.isEmpty()) {
                output.push(input.pop());
            }
        }
    }
    
    public void push(int x) {
        input.push(x);
    }
    
    public int pop() {
        transfer();
        return output.pop();
    }
    
    public int peek() {
        transfer();
        return output.peek();
    }
    
    public boolean empty() {
        return input.isEmpty() && output.isEmpty();
    }
}`,explanation:[{line:1,text:"Declare class MyQueue."},{line:2,text:"Create input and output Stack objects."},{line:7,text:"Helper to move elements when output stack is empty."},{line:15,text:"push(): push to input stack."},{line:19,text:"pop(): transfer if needed, then pop."},{line:24,text:"peek(): transfer if needed, then peek."},{line:29,text:"empty(): return true if both stacks are empty."}]}}},{id:150,name:"Evaluate Reverse Polish Notation",difficulty:"Medium",topic:"Stack",leetcodeUrl:"https://leetcode.com/problems/evaluate-reverse-polish-notation/",tip:"Use a Stack. Iterate through the tokens. If the token is a number, push it onto the stack. If it is an operator, pop the top two numbers, apply the operator, and push the result back.",description:"You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression.",chatbotData:{intuition:"Reverse Polish Notation (postfix) places operators *after* their operands (e.g., `['2', '1', '+']` means `2 + 1`). We process tokens from left to right. When we see a number, we push it onto the stack. When we see an operator (+, -, *, /), we pop the top two numbers from the stack. Crucially, the first popped number `b` is the *right* operand, and the second popped number `a` is the *left* operand. We calculate `a [operator] b`, and push the result back onto the stack.",complexity:`Time Complexity: O(N) since we process each of the N tokens exactly once.
Space Complexity: O(N) to store values in the stack.`,edgeCases:`1. Division by negative numbers: standard integer division handles this.
2. Negatives (e.g. '-11'): parsed as numbers, not operators.`,debugging:"When popping operands, note the order: `secondOperand = pop()`, then `firstOperand = pop()`. For operations like subtraction and division, `firstOperand / secondOperand` is correct, whereas `secondOperand / firstOperand` will give the wrong result."},solutions:{cpp:{code:`int evalRPN(vector<string>& tokens) {
    stack<int> st;
    for (string s : tokens) {
        if (s == "+" || s == "-" || s == "*" || s == "/") {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            if (s == "+") st.push(a + b);
            else if (s == "-") st.push(a - b);
            else if (s == "*") st.push(a * b);
            else if (s == "/") st.push(a / b);
        } else {
            st.push(stoi(s));
        }
    }
    return st.top();
}`,explanation:[{line:1,text:"Function declaration: takes list of token strings, returns evaluation result."},{line:2,text:"Declare integer stack `st`."},{line:3,text:"Loop through each token `s` in the vector."},{line:4,text:"Check if the token is one of the four basic operators."},{line:5,text:"Pop the first operand `b` (the right operand)."},{line:6,text:"Pop the second operand `a` (the left operand)."},{line:7,text:"Apply operators and push the resulting calculation back onto the stack."},{line:11,text:"If the token is a number, convert it to an integer using `stoi(s)` and push it."},{line:15,text:"Return the final result remaining at the top of the stack."}]},python:{code:`def evalRPN(tokens: list[str]) -> int:
    stack = []
    for token in tokens:
        if token in {"+", "-", "*", "/"}:
            b = stack.pop()
            a = stack.pop()
            if token == "+":
                stack.append(a + b)
            elif token == "-":
                stack.append(a - b)
            elif token == "*":
                stack.append(a * b)
            elif token == "/":
                # Integer division truncating toward zero
                stack.append(int(a / b))
        else:
            stack.append(int(token))
    return stack[0]`,explanation:[{line:1,text:"Define evalRPN function."},{line:2,text:"Initialize stack list."},{line:3,text:"Loop through tokens."},{line:4,text:"Identify if the token is an operator."},{line:5,text:"Pop the right operand `b` and left operand `a`."},{line:7,text:"Perform addition, subtraction, or multiplication."},{line:13,text:"Perform division. `int(a / b)` correctly truncates toward zero in Python (unlike `a // b` which floors)."},{line:16,text:"Otherwise, cast token string to integer and push."},{line:18,text:"Return the final value."}]},java:{code:`public int evalRPN(String[] tokens) {
    Stack<Integer> stack = new Stack<>();
    for (String s : tokens) {
        if (s.equals("+") || s.equals("-") || s.equals("*") || s.equals("/")) {
            int b = stack.pop();
            int a = stack.pop();
            if (s.equals("+")) stack.push(a + b);
            else if (s.equals("-")) stack.push(a - b);
            else if (s.equals("*")) stack.push(a * b);
            else if (s.equals("/")) stack.push(a / b);
        } else {
            stack.push(Integer.parseInt(s));
        }
    }
    return stack.peek();
}`,explanation:[{line:1,text:"Declare evalRPN method."},{line:2,text:"Create integer Stack."},{line:3,text:"Loop through tokens, using `.equals()` for string comparison."},{line:4,text:"If operator, pop operands `b` and `a`."},{line:7,text:"Compute and push result."},{line:11,text:"Otherwise, parse string as integer and push."},{line:15,text:"Return the top of the stack."}]}}},{id:155,name:"Min Stack",difficulty:"Medium",topic:"Stack / Design",leetcodeUrl:"https://leetcode.com/problems/min-stack/",tip:"Use two stacks: a main `valStack` to store values, and a `minStack` that keeps track of the minimum value at each point. When pushing `x`, push `min(x, minStack.top())` onto `minStack`.",description:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time `O(1)`.",chatbotData:{intuition:"To retrieve the minimum in O(1) time, we must keep track of the minimum element at *every* stage of the stack. We do this by maintaining a secondary stack `minStack`. When we push a value `x` onto our main stack, we look at the top of `minStack`. We push the smaller of `x` and the current minimum onto `minStack`. When we pop from the main stack, we also pop from `minStack`. The top of `minStack` will always represent the minimum value in the stack.",complexity:"Time Complexity: O(1) for all operations (`push`, `pop`, `top`, `getMin`) since we only perform basic stack pushes/pops/peeks.\nSpace Complexity: O(N) to store elements in the two stacks.",edgeCases:"1. Negative values: handled correctly.\n2. Pushing the same minimum value multiple times: `minStack` correctly duplicates it, keeping counts synchronized.",debugging:"When pushing to `minStack` for the first time (when stack is empty), push the value itself directly without comparing (or compare against infinity)."},solutions:{cpp:{code:`class MinStack {
private:
    stack<int> valStack;
    stack<int> minStack;

public:
    MinStack() {}
    
    void push(int val) {
        valStack.push(val);
        if (minStack.empty()) {
            minStack.push(val);
        } else {
            minStack.push(min(val, minStack.top()));
        }
    }
    
    void pop() {
        valStack.pop();
        minStack.pop();
    }
    
    int top() {
        return valStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};`,explanation:[{line:3,text:"Declare `valStack` to store the actual data values."},{line:4,text:"Declare `minStack` to store the running minimums."},{line:9,text:"push() function: push the value onto `valStack`."},{line:11,text:"If `minStack` is empty, this value is the first minimum: push it directly."},{line:14,text:"Otherwise, compare `val` to current minimum (`minStack.top()`) and push the smaller one."},{line:18,text:"pop() function: pop from both stacks to keep them synchronized."},{line:23,text:"top() function: return the top of `valStack`."},{line:27,text:"getMin() function: return the top of `minStack` (the current minimum)."}]},python:{code:`class MinStack:
    def __init__(self):
        self.val_stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.val_stack.append(val)
        if not self.min_stack:
            self.min_stack.append(val)
        else:
            self.min_stack.append(min(val, self.min_stack[-1]))

    def pop(self) -> None:
        self.val_stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.val_stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]`,explanation:[{line:1,text:"Define MinStack class."},{line:2,text:"Constructor: initialize two list stacks."},{line:6,text:"push(): append `val` to value stack."},{line:8,text:"If min stack is empty, append `val` directly."},{line:11,text:"Otherwise, append the minimum of `val` and current minimum `self.min_stack[-1]`."},{line:13,text:"pop(): pop from both list stacks."},{line:17,text:"top(): return last element of value stack."},{line:20,text:"getMin(): return last element of min stack."}]},java:{code:`class MinStack {
    private Stack<Integer> valStack = new Stack<>();
    private Stack<Integer> minStack = new Stack<>();

    public MinStack() {}
    
    public void push(int val) {
        valStack.push(val);
        if (minStack.isEmpty()) {
            minStack.push(val);
        } else {
            minStack.push(Math.min(val, minStack.peek()));
        }
    }
    
    public void pop() {
        valStack.pop();
        minStack.pop();
    }
    
    public int top() {
        return valStack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}`,explanation:[{line:1,text:"Declare class MinStack."},{line:2,text:"Initialize the two stacks."},{line:7,text:"push(): push to valStack, and push min value to minStack."},{line:16,text:"pop(): pop from both stacks."},{line:21,text:"top(): peek valStack."},{line:25,text:"getMin(): peek minStack."}]}}},{id:394,name:"Decode String",difficulty:"Medium",topic:"Stack",leetcodeUrl:"https://leetcode.com/problems/decode-string/",tip:"Use two stacks: one for numbers (`countStack`) and one for strings (`stringStack`). Loop through the characters. Build numbers and current strings, pushing/popping on brackets.",description:"Given an encoded string, return its decoded string. The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times.",chatbotData:{intuition:"When we see nested brackets, it behaves like a stack evaluation. We maintain a `currentString` and a `currentK`. When we see a digit, we parse it into `currentK`. When we see an alphabet, we append it to `currentString`. When we see `[`, we push the `currentString` and `currentK` onto their respective stacks, and reset them. When we see `]`, we pop the repeat count and previous string. We repeat `currentString` by count, and prepend the popped previous string to it.",complexity:`Time Complexity: O(N) where N is the length of the decoded string, since we write each output character once.
Space Complexity: O(N) to store characters in the stacks.`,edgeCases:`1. Nested brackets (e.g., '3[a2[c]]' -> 'accaccacc'): handled correctly by stacking intermediate strings.
2. Multiple digits (e.g. '100[a]'): handled by accumulating digit string.`,debugging:"Ensure you reset `currentK` to 0 and `currentString` to empty when pushing onto the stacks after encountering `[`."},solutions:{cpp:{code:`string decodeString(string s) {
    stack<int> countStack;
    stack<string> stringStack;
    string currentString = "";
    int currentK = 0;
    for (char c : s) {
        if (isdigit(c)) {
            currentK = currentK * 10 + (c - 'a' + 49); // c - '0'
        } else if (c == '[') {
            countStack.push(currentK);
            stringStack.push(currentString);
            currentK = 0;
            currentString = "";
        } else if (c == ']') {
            string prevString = stringStack.top(); stringStack.pop();
            int repeatTimes = countStack.top(); countStack.pop();
            string temp = "";
            for (int i = 0; i < repeatTimes; i++) {
                temp += currentString;
            }
            currentString = prevString + temp;
        } else {
            currentString += c;
        }
    }
    return currentString;
}`,explanation:[{line:1,text:"Function declaration: takes encoded string, returns decoded string."},{line:2,text:"Declare stack of integers to store repeat factors."},{line:3,text:"Declare stack of strings to store intermediate decoded prefixes."},{line:4,text:"Initialize current string builder and multiplier."},{line:6,text:"Loop through each character in string `s`."},{line:7,text:"If char is a digit, update `currentK` (accumulate digits for numbers >= 10)."},{line:9,text:"If char is `[`, push `currentK` and `currentString` to stacks, then reset them."},{line:14,text:"If char is `]`, pop the previous string prefix and repeat count."},{line:17,text:"Generate the repeated string block."},{line:21,text:"Combine the previous prefix with the repeated block to form the new `currentString`."},{line:22,text:"Otherwise, the character is a letter: append it to `currentString`."},{line:26,text:"Return the final fully decoded string."}]},python:{code:`def decodeString(s: str) -> str:
    count_stack = []
    string_stack = []
    current_string = ""
    current_k = 0
    for char in s:
        if char.isdigit():
            current_k = current_k * 10 + int(char)
        elif char == '[':
            count_stack.append(current_k)
            string_stack.append(current_string)
            current_k = 0
            current_string = ""
        elif char == ']':
            prev_string = string_stack.pop()
            repeat_times = count_stack.pop()
            current_string = prev_string + current_string * repeat_times
        else:
            current_string += char
    return current_string`,explanation:[{line:1,text:"Define decodeString function."},{line:2,text:"Initialize stacks."},{line:4,text:"Initialize current trackers."},{line:6,text:"Loop through characters."},{line:7,text:"Accumulate digit characters."},{line:9,text:"Push states to stacks on open bracket, reset variables."},{line:14,text:"Pop states and reconstruct repeated segments on closing bracket."},{line:18,text:"Append alphabetical character to builder."},{line:20,text:"Return result."}]},java:{code:`public String decodeString(String s) {
    Stack<Integer> countStack = new Stack<>();
    Stack<StringBuilder> stringStack = new Stack<>();
    StringBuilder currentString = new StringBuilder();
    int currentK = 0;
    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) {
            currentK = currentK * 10 + (c - '0');
        } else if (c == '[') {
            countStack.push(currentK);
            stringStack.push(currentString);
            currentK = 0;
            currentString = new StringBuilder();
        } else if (c == ']') {
            StringBuilder prevString = stringStack.pop();
            int repeatTimes = countStack.pop();
            StringBuilder temp = new StringBuilder();
            for (int i = 0; i < repeatTimes; i++) {
                temp.append(currentString);
            }
            currentString = prevString.append(temp);
        } else {
            currentString.append(c);
        }
    }
    return currentString.toString();
}`,explanation:[{line:1,text:"Declare method returning decoded String."},{line:2,text:"Create integer and StringBuilder stacks."},{line:6,text:"Iterate through character array."},{line:7,text:"Accumulate number counts."},{line:9,text:"Push number and string to stacks, clear active builders."},{line:14,text:"On `]`, pop states, construct loop block, append to prefix."},{line:22,text:"Otherwise, append letter to current StringBuilder."},{line:26,text:"Return decoded string."}]}}},{id:503,name:"Next Greater Element II",difficulty:"Medium",topic:"Monotonic Stack",leetcodeUrl:"https://leetcode.com/problems/next-greater-element-ii/",tip:"Since the array is circular, double the search space (loop from `2 * n - 1` down to 0). Use a monotonic stack to store indices, and use `i % n` for array indexing.",description:"Given a circular integer array `nums`, return the next greater number for every element in `nums`.",chatbotData:{intuition:"To find the next greater element in a circular array, we can pretend the array is concatenated with itself (doubling its length to `2 * N`). We iterate backwards from index `2 * N - 1` down to 0, using `i % N` to reference the array. We maintain a monotonic decreasing stack of values. When looking at `nums[i % N]`, we pop all values from the stack that are <= `nums[i % N]`. The top of the stack will be the next greater element. Then, we push `nums[i % N]` onto the stack.",complexity:`Time Complexity: O(N) because we make at most two passes over the array, and each element is pushed and popped from the stack at most once.
Space Complexity: O(N) to store the stack of size at most N.`,edgeCases:`1. No greater element exists (e.g. max element): stack becomes empty, result is -1.
2. Already sorted in descending order: stack finds next element at index 0 correctly.`,debugging:"When referencing the array, always use index modulo `i % n` to avoid OutOfBounds errors, since `i` ranges up to `2 * n`."},solutions:{cpp:{code:`vector<int> nextGreaterElements(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, -1);
    stack<int> st; // stores values
    for (int i = 2 * n - 1; i >= 0; i--) {
        while (!st.empty() && st.top() <= nums[i % n]) {
            st.pop();
        }
        if (i < n) {
            if (!st.empty()) res[i] = st.top();
        }
        st.push(nums[i % n]);
    }
    return res;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference, returns next greater elements vector."},{line:2,text:"Get array size `n`."},{line:3,text:"Initialize result vector `res` of size `n` filled with -1."},{line:4,text:"Declare stack `st` to hold candidate elements."},{line:5,text:"Loop backwards from `2 * n - 1` to 0. This simulates a circular array traversal."},{line:6,text:"Pop all elements from stack that are smaller or equal to the current element."},{line:9,text:"If we are in the first pass (`i < n`), record the top of the stack (which is the next greater element) in `res[i]`."},{line:12,text:"Push the current element `nums[i % n]` onto the stack."},{line:14,text:"Return the result vector."}]},python:{code:`def nextGreaterElements(nums: list[int]) -> list[int]:
    n = len(nums)
    res = [-1] * n
    stack = []
    for i in range(2 * n - 1, -1, -1):
        while stack and stack[-1] <= nums[i % n]:
            stack.pop()
        if i < n:
            if stack:
                res[i] = stack[-1]
        stack.append(nums[i % n])
    return res`,explanation:[{line:1,text:"Define nextGreaterElements function."},{line:2,text:"Setup sizes and result lists."},{line:4,text:"Initialize empty stack."},{line:5,text:"Loop backward across a virtual double-length list index."},{line:6,text:"Maintain monotonic decreasing property: pop smaller elements."},{line:8,text:"If we are within range of original list, capture next greater element if stack is not empty."},{line:11,text:"Push current item onto stack."},{line:12,text:"Return results."}]},java:{code:`public int[] nextGreaterElements(int[] nums) {
    int n = nums.length;
    int[] res = new int[n];
    Arrays.fill(res, -1);
    Stack<Integer> stack = new Stack<>();
    for (int i = 2 * n - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() <= nums[i % n]) {
            stack.pop();
        }
        if (i < n) {
            if (!stack.isEmpty()) res[i] = stack.peek();
        }
        stack.push(nums[i % n]);
    }
    return res;
}`,explanation:[{line:1,text:"Declare method returning next greater elements array."},{line:2,text:"Get length of array."},{line:3,text:"Create and fill result array with -1."},{line:5,text:"Initialize Stack."},{line:6,text:"Iterate circular search index range backwards."},{line:7,text:"Pop smaller items."},{line:10,text:"Assign next greater element if in first half."},{line:13,text:"Push current element."}]}}},{id:739,name:"Daily Temperatures",difficulty:"Medium",topic:"Monotonic Stack",leetcodeUrl:"https://leetcode.com/problems/daily-temperatures/",tip:"Use a Monotonic Stack storing indices. Iterate through the array. While the current temperature is hotter than the temperature at the index at stack top, pop the index and write the difference (`current_index - popped_index`) to the answer.",description:"Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature.",chatbotData:{intuition:"We want to find the next warmer temperature for each day. We can use a monotonic stack that stores the *indices* of days we haven't found a warmer day for yet. We iterate through the days. While the stack is not empty and the current day's temperature is warmer than the temperature at the index on the top of the stack, we pop the index. The waiting time is `currentDayIndex - poppedIndex`. We store this in our result, then push the current index onto the stack.",complexity:`Time Complexity: O(N) because each index is pushed and popped from the stack at most once.
Space Complexity: O(N) to store indices in the stack.`,edgeCases:`1. Temperatures keep decreasing: nothing gets popped, stack grows, results remain 0, handled correctly.
2. Single day: returns [0].`,debugging:"Remember to store the *indices* in the stack, not the temperatures themselves, so you can easily calculate the waiting distance `current_index - popped_index`."},solutions:{cpp:{code:`vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();
    vector<int> ans(n, 0);
    stack<int> st; // stores indices
    for (int i = 0; i < n; i++) {
        while (!st.empty() && temperatures[i] > temperatures[st.top()]) {
            int prevIdx = st.top();
            st.pop();
            ans[prevIdx] = i - prevIdx;
        }
        st.push(i);
    }
    return ans;
}`,explanation:[{line:1,text:"Function declaration: takes temperatures vector, returns wait days vector."},{line:2,text:"Get array size `n`."},{line:3,text:"Initialize answer vector `ans` with all 0s."},{line:4,text:"Declare stack `st` which will store indices of elements."},{line:5,text:"Loop through temperatures from left to right."},{line:6,text:"While stack is not empty and current temperature is greater than temperature at the stack top index."},{line:7,text:"Retrieve index at stack top."},{line:8,text:"Pop the index from the stack."},{line:9,text:"Write the waiting distance `i - prevIdx` to the corresponding position in our answer."},{line:11,text:"Push the current index `i` onto the stack for future comparisons."}]},python:{code:`def dailyTemperatures(temperatures: list[int]) -> list[int]:
    n = len(temperatures)
    ans = [0] * n
    stack = []  # stores indices
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev_idx = stack.pop()
            ans[prev_idx] = i - prev_idx
        stack.append(i)
    return ans`,explanation:[{line:1,text:"Define dailyTemperatures function."},{line:2,text:"Setup sizes and result lists."},{line:4,text:"Initialize index stack."},{line:5,text:"Iterate index through array."},{line:6,text:"If current temp is warmer than temp at top stack index, pop it."},{line:8,text:"Write waiting distance to result list."},{line:9,text:"Push current index to stack."},{line:10,text:"Return answer."}]},java:{code:`public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] ans = new int[n];
    Stack<Integer> stack = new Stack<>(); // stores indices
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
            int prevIdx = stack.pop();
            ans[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }
    return ans;
}`,explanation:[{line:1,text:"Declare method returning waiting days."},{line:2,text:"Get length of array."},{line:3,text:"Create result array."},{line:4,text:"Initialize index Stack."},{line:5,text:"Iterate indices."},{line:6,text:"Pop and write differences for all colder elements in stack."},{line:10,text:"Push current index."}]}}}],Ux=[{id:104,name:"Maximum Depth of Binary Tree",difficulty:"Easy",topic:"Tree / DFS",leetcodeUrl:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",tip:"Use simple recursion. The max depth of a tree is `1 + max(depth(left), depth(right))`. Base case is `root == null` returning `0`.",description:"Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",chatbotData:{intuition:"We can find the depth of a tree recursively. The depth of an empty tree is 0 (our base case). For any non-empty node, its depth is 1 (the node itself) plus the maximum of the depths of its left and right subtrees. This is a post-order traversal because we calculate subtree depths first, then combine them at the parent.",complexity:`Time Complexity: O(N) where N is the number of nodes, since we must visit each node exactly once.
Space Complexity: O(H) where H is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), H = N; in the best case (balanced tree), H = log N.`,edgeCases:`1. Empty tree: returns 0.
2. Single node: left/right depths are 0, returns 1.`,debugging:"Make sure you include the base case `if (root == nullptr) return 0;` at the very beginning to prevent infinite recursion and segmentation faults."},solutions:{cpp:{code:`int maxDepth(TreeNode* root) {
    if (root == nullptr) return 0;
    int leftDepth = maxDepth(root->left);
    int rightDepth = maxDepth(root->right);
    return 1 + max(leftDepth, rightDepth);
}`,explanation:[{line:1,text:"Function declaration: takes TreeNode pointer, returns tree height."},{line:2,text:"Base case: if the root is null, the depth is 0."},{line:3,text:"Recursively calculate the maximum depth of the left subtree."},{line:4,text:"Recursively calculate the maximum depth of the right subtree."},{line:5,text:"Return 1 (current node) plus the maximum of the left and right subtree depths."}]},python:{code:`def maxDepth(root: Optional[TreeNode]) -> int:
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,explanation:[{line:1,text:"Define maxDepth function."},{line:2,text:"Base case: return 0 if root is None."},{line:4,text:"Return 1 plus the maximum depth of left and right children recursively."}]},java:{code:`public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    int left = maxDepth(root.left);
    int right = maxDepth(root.right);
    return 1 + Math.max(left, right);
}`,explanation:[{line:1,text:"Declare method maxDepth."},{line:2,text:"Return 0 if root is null."},{line:3,text:"Recursively find left subtree depth."},{line:4,text:"Recursively find right subtree depth."},{line:5,text:"Return 1 plus max of child depths."}]}}},{id:226,name:"Invert Binary Tree",difficulty:"Easy",topic:"Tree",leetcodeUrl:"https://leetcode.com/problems/invert-binary-tree/",tip:"Swap the left and right children of the current node. Then recursively call `invertTree` on the left child and right child.",description:"Given the `root` of a binary tree, invert the tree, and return its root.",chatbotData:{intuition:"Inverting a binary tree means making a mirror image of it. For every node in the tree, we swap its left child and right child. We can do this recursively: swap the current node's children, and then recursively invert its left child and right child. Once we reach a null node, we stop.",complexity:`Time Complexity: O(N) because we visit each of the N nodes exactly once.
Space Complexity: O(H) where H is the height of the tree, representing the recursion stack depth.`,edgeCases:`1. Empty tree: returns null.
2. Single node: returns node itself.
3. Skewed tree: inverted correctly.`,debugging:"When swapping in languages like Java/C++, use a temporary variable to hold the left node before overwriting it, otherwise you will lose reference to it."},solutions:{cpp:{code:`TreeNode* invertTree(TreeNode* root) {
    if (root == nullptr) return nullptr;
    TreeNode* temp = root->left;
    root->left = root->right;
    root->right = temp;
    invertTree(root->left);
    invertTree(root->right);
    return root;
}`,explanation:[{line:1,text:"Function declaration: takes root pointer, returns inverted root pointer."},{line:2,text:"Base case: if the tree is empty, return nullptr."},{line:3,text:"Save the left child in a temporary pointer `temp`."},{line:4,text:"Swap the left child reference with the right child."},{line:5,text:"Place the saved left child (`temp`) into the right child slot."},{line:6,text:"Recursively invert the left subtree."},{line:7,text:"Recursively invert the right subtree."},{line:8,text:"Return the root node of the inverted tree."}]},python:{code:`def invertTree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`,explanation:[{line:1,text:"Define invertTree function."},{line:2,text:"Base case: return None if root is None."},{line:4,text:"Swap left and right children in a single line using tuple unpacking."},{line:5,text:"Recursively invert left child."},{line:6,text:"Recursively invert right child."},{line:7,text:"Return the modified root."}]},java:{code:`public TreeNode invertTree(TreeNode root) {
    if (root == null) return null;
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
}`,explanation:[{line:1,text:"Declare method invertTree."},{line:2,text:"Base case: return null if root is null."},{line:3,text:"Store left node in temporary variable."},{line:4,text:"Swap left and right node references."},{line:5,text:"Put temp node into right slot."},{line:6,text:"Recursively process left subtree."},{line:7,text:"Recursively process right subtree."},{line:8,text:"Return the root."}]}}},{id:543,name:"Diameter of Binary Tree",difficulty:"Easy",topic:"Tree / DFS",leetcodeUrl:"https://leetcode.com/problems/diameter-of-binary-tree/",tip:"The diameter at any node is `depth(left) + depth(right)`. Maintain a global maximum diameter variable. Recursively compute depth, updating the max diameter at each node.",description:"Given the `root` of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.",chatbotData:{intuition:"The longest path between two nodes (diameter) must go up to some node `X` and then go down. The length of this path is the sum of the maximum depths of the left and right subtrees of `X`: `diameter = leftDepth + rightDepth`. We perform a recursive DFS. For each node, we calculate the depths of its left and right subtrees, update our global maximum diameter with `leftDepth + rightDepth`, and return the node's depth (`1 + max(leftDepth, rightDepth)`) to its parent.",complexity:`Time Complexity: O(N) because we visit each of the N nodes exactly once.
Space Complexity: O(H) where H is the height of the tree, representing the recursion stack depth.`,edgeCases:`1. Empty tree: returns 0.
2. Single node: returns 0 (path requires edges, single node has 0 edges).`,debugging:"Be sure to track the diameter (number of edges) which is `leftDepth + rightDepth`. The return value of the recursive helper function should be the height (number of nodes), which is `1 + max(leftDepth, rightDepth)`."},solutions:{cpp:{code:`class Solution {
private:
    int maxDiameter = 0;
    
    int depth(TreeNode* node) {
        if (node == nullptr) return 0;
        int left = depth(node->left);
        int right = depth(node->right);
        maxDiameter = max(maxDiameter, left + right);
        return 1 + max(left, right);
    }

public:
    int diameterOfBinaryTree(TreeNode* root) {
        depth(root);
        return maxDiameter;
    }
};`,explanation:[{line:3,text:"Declare private variable `maxDiameter` to track the longest path found."},{line:5,text:"Helper function `depth`: calculates subtree depth and updates diameter."},{line:6,text:"Base case: if node is null, return 0."},{line:7,text:"Get depth of left child recursively."},{line:8,text:"Get depth of right child recursively."},{line:9,text:"Update `maxDiameter` with path crossing this node: `left + right`."},{line:10,text:"Return height of current node to its parent: `1 + max(left, right)`."},{line:14,text:"Main function: calls recursive helper `depth` on root, then returns the global maximum."}]},python:{code:`class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.max_diameter = 0
        
        def depth(node):
            if not node:
                return 0
            left = depth(node.left)
            right = depth(node.right)
            self.max_diameter = max(self.max_diameter, left + right)
            return 1 + max(left, right)
            
        depth(root)
        return self.max_diameter`,explanation:[{line:1,text:"Define Solution class."},{line:3,text:"Initialize `max_diameter` property to 0."},{line:5,text:"Define nested recursive helper function `depth`."},{line:6,text:"Return 0 if node is None."},{line:8,text:"Recursively get left and right subtree depths."},{line:10,text:"Update max diameter seen so far with `left + right`."},{line:11,text:"Return height: `1 + max(left, right)`."},{line:13,text:"Call helper function on root."},{line:14,text:"Return calculated maximum diameter."}]},java:{code:`class Solution {
    private int maxDiameter = 0;
    
    public int diameterOfBinaryTree(TreeNode root) {
        depth(root);
        return maxDiameter;
    }
    
    private int depth(TreeNode node) {
        if (node == null) return 0;
        int left = depth(node.left);
        int right = depth(node.right);
        maxDiameter = Math.max(maxDiameter, left + right);
        return 1 + Math.max(left, right);
    }
}`,explanation:[{line:1,text:"Declare Solution wrapper class."},{line:2,text:"Private global diameter tracker."},{line:4,text:"Main method calling helper method `depth`."},{line:9,text:"Helper method `depth` returning node height."},{line:10,text:"Base case: return 0."},{line:11,text:"Compute left subtree height."},{line:12,text:"Compute right subtree height."},{line:13,text:"Update global diameter."},{line:14,text:"Return current subtree height."}]}}},{id:98,name:"Validate Binary Search Tree",difficulty:"Medium",topic:"BST",leetcodeUrl:"https://leetcode.com/problems/validate-binary-search-tree/",tip:"A BST is valid if every node is within a valid range `(min, max)`. Pass these bounds recursively. For left child, range is `(min, node->val)`. For right child, range is `(node->val, max)`.",description:"Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).",chatbotData:{intuition:"It is a common mistake to only check if a node's left child is smaller and right child is larger. In a valid BST, *all* nodes in the left subtree must be smaller than the root, and *all* nodes in the right subtree must be larger. To enforce this, we write a recursive helper function that accepts validation bounds: `isValid(node, minBound, maxBound)`. For the left child, the maximum bound becomes the parent's value. For the right child, the minimum bound becomes the parent's value.",complexity:`Time Complexity: O(N) because we check each of the N nodes exactly once.
Space Complexity: O(H) where H is the height of the tree, representing the call stack.`,edgeCases:"1. Node value is equal to min/max integer (e.g. `2147483647`): using `long` values or pointers in C++/Java prevents overflow bugs.",debugging:"Use range limits that can represent values larger/smaller than standard integer limits (like using `long long` in C++ or `Long` in Java), because node values in LeetCode test cases can equal `INT_MAX` or `INT_MIN`."},solutions:{cpp:{code:`bool validate(TreeNode* node, long long minVal, long long maxVal) {
    if (node == nullptr) return true;
    if (node->val <= minVal || node->val >= maxVal) return false;
    return validate(node->left, minVal, node->val) && 
           validate(node->right, node->val, maxVal);
}

bool isValidBST(TreeNode* root) {
    return validate(root, LLONG_MIN, LLONG_MAX);
}`,explanation:[{line:1,text:"Helper function declaration taking node pointer and `long long` min/max boundaries."},{line:2,text:"Base case: an empty tree is a valid BST: return true."},{line:3,text:"Check if the current node's value violates the boundary conditions. If it does, return false."},{line:4,text:"Validate the left subtree: update `maxVal` to the current node's value."},{line:5,text:"Validate the right subtree: update `minVal` to the current node's value. Return true only if both sides are valid."},{line:8,text:"Main function: calls the helper function with the absolute minimum and maximum values possible for a 64-bit integer."}]},python:{code:`def isValidBST(root: Optional[TreeNode]) -> bool:
    def validate(node, min_val, max_val):
        if not node:
            return True
        if node.val <= min_val or node.val >= max_val:
            return False
        return validate(node.left, min_val, node.val) and \\
               validate(node.right, node.val, max_val)
               
    return validate(root, float('-inf'), float('inf'))`,explanation:[{line:1,text:"Define isValidBST function."},{line:2,text:"Define nested helper function `validate` taking node and boundary values."},{line:3,text:"Empty node is valid: return True."},{line:5,text:"Check if value is out of bounds."},{line:7,text:"Recursively check left and right subtrees with updated bounds."},{line:10,text:"Call helper using negative and positive infinity as initial boundaries."}]},java:{code:`public boolean isValidBST(TreeNode root) {
    return validate(root, null, null);
}

private boolean validate(TreeNode node, Integer min, Integer max) {
    if (node == null) return true;
    if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
        return false;
    }
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}`,explanation:[{line:1,text:"Declare main method."},{line:2,text:"Call helper method starting with null bounds (null means infinity)."},{line:5,text:"Declare helper method using Integer wrappers to allow null pointers for infinity representation."},{line:6,text:"Return true for null subtrees."},{line:7,text:"Check boundary limits, skipping checks if min/max are null."},{line:10,text:"Recursively call validate on left (max=node.val) and right (min=node.val) subtrees."}]}}},{id:102,name:"Binary Tree Level Order Traversal",difficulty:"Medium",topic:"BFS / Tree",leetcodeUrl:"https://leetcode.com/problems/binary-tree-level-order-traversal/",tip:"Use BFS with a Queue. In each step, record the size of the queue. This size represents the number of nodes in the current level. Loop `size` times to process only the current level.",description:"Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",chatbotData:{intuition:"To traverse a tree level-by-level, we use Breadth-First Search (BFS) with a queue. We push the root onto the queue. While the queue is not empty, we find its current size, which is exactly the count of nodes in the current level. We loop `size` times, popping nodes from the queue, adding their values to a list for the current level, and pushing their children onto the queue. This separates each level clearly in the output.",complexity:`Time Complexity: O(N) because we visit each of the N nodes exactly once.
Space Complexity: O(N) since the queue holds up to N/2 nodes (the maximum width of the tree) at the bottom level.`,edgeCases:`1. Empty tree: returns empty list.
2. Only left children (skewed): level order list has 1 element per list, handled correctly.`,debugging:"Remember to store the queue size *before* starting the level loop. Inside the level loop, new children are added to the queue, which increases queue size. If you use `q.size()` directly in the loop condition, it will cause an infinite loop."},solutions:{cpp:{code:`vector<vector<int>> levelOrder(TreeNode* root) {
    if (root == nullptr) return {};
    vector<vector<int>> result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;
        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            currentLevel.push_back(node->val);
            if (node->left != nullptr) q.push(node->left);
            if (node->right != nullptr) q.push(node->right);
        }
        result.push_back(currentLevel);
    }
    return result;
}`,explanation:[{line:1,text:"Function declaration: takes root pointer, returns a 2D vector of level values."},{line:2,text:"If tree is empty, return an empty vector."},{line:3,text:"Declare `result` vector."},{line:4,text:"Declare queue `q` to store nodes to visit."},{line:5,text:"Push the root node onto the queue."},{line:6,text:"Loop while there are nodes remaining to process."},{line:7,text:"Record `levelSize`, which is the count of nodes in the current level."},{line:8,text:"Create vector `currentLevel` to store values of this level."},{line:9,text:"Loop exactly `levelSize` times to process only current level nodes."},{line:10,text:"Get front node in queue."},{line:11,text:"Pop the node from queue."},{line:12,text:"Add node value to current level list."},{line:13,text:"Push left child if it exists."},{line:14,text:"Push right child if it exists."},{line:16,text:"Push the completed level vector into our results."}]},python:{code:`from collections import deque

def levelOrder(root: Optional[TreeNode]) -> list[list[int]]:
    if not root:
        return []
    result = []
    q = deque([root])
    while q:
        level_size = len(q)
        current_level = []
        for _ in range(level_size):
            node = q.popleft()
            current_level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        result.append(current_level)
    return result`,explanation:[{line:1,text:"Import `deque` from collections."},{line:3,text:"Define levelOrder function."},{line:4,text:"Return empty list for empty trees."},{line:7,text:"Initialize queue with root."},{line:8,text:"Loop while queue is not empty."},{line:9,text:"Get count of nodes in this level."},{line:11,text:"Iterate level size times."},{line:12,text:"Pop node from front of queue."},{line:13,text:"Add node value to current level list."},{line:14,text:"Append children to back of queue."},{line:18,text:"Append level list to result."}]},java:{code:`public List<List<Integer>> levelOrder(TreeNode root) {
    if (root == null) return new ArrayList<>();
    List<List<Integer>> result = new ArrayList<>();
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    while (!q.isEmpty()) {
        int levelSize = q.size();
        List<Integer> currentLevel = new ArrayList<>();
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = q.remove();
            currentLevel.add(node.val);
            if (node.left != null) q.add(node.left);
            if (node.right != null) q.add(node.right);
        }
        result.add(currentLevel);
    }
    return result;
}`,explanation:[{line:1,text:"Declare levelOrder method."},{line:2,text:"Handle null root case."},{line:4,text:"Initialize BFS queue."},{line:5,text:"Add root to queue."},{line:6,text:"BFS loop."},{line:7,text:"Get number of nodes in this level."},{line:9,text:"Process current level nodes."},{line:10,text:"Pop node from queue."},{line:12,text:"Add child nodes to queue."},{line:15,text:"Add level list to result."}]}}},{id:199,name:"Binary Tree Right Side View",difficulty:"Medium",topic:"BFS / Tree",leetcodeUrl:"https://leetcode.com/problems/binary-tree-right-side-view/",tip:"Use level order traversal (BFS). For each level, append only the LAST node of that level (index `size - 1`) to the result.",description:"Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",chatbotData:{intuition:"Standing on the right side of a tree, you can only see the rightmost node of each level. We can use level-order traversal (BFS) with a queue. When we process a level, we loop through all nodes in that level. If it is the last node of the current level loop (index `i == levelSize - 1`), we add its value to our result list.",complexity:`Time Complexity: O(N) since we traverse each node once.
Space Complexity: O(N) or O(W) where W is the maximum width of the tree, representing the queue size.`,edgeCases:`1. Empty tree: returns empty list.
2. Left-skewed tree: the leftmost nodes are visible because they are the *only* nodes at those levels, handled correctly.`,debugging:"Check that you append to result when `i == levelSize - 1`, which represents the rightmost node. Do not check `node.right == null` as that does not tell you if it's the rightmost node visible from the side."},solutions:{cpp:{code:`vector<int> rightSideView(TreeNode* root) {
    if (root == nullptr) return {};
    vector<int> result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int levelSize = q.size();
        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            if (i == levelSize - 1) {
                result.push_back(node->val);
            }
            if (node->left != nullptr) q.push(node->left);
            if (node->right != nullptr) q.push(node->right);
        }
    }
    return result;
}`,explanation:[{line:1,text:"Function declaration: takes root pointer, returns vector of visible right-side values."},{line:2,text:"Return empty vector for empty trees."},{line:4,text:"Initialize BFS queue."},{line:5,text:"Push root node."},{line:6,text:"BFS loop."},{line:7,text:"Find count of nodes in the current level."},{line:8,text:"Loop through current level nodes."},{line:9,text:"Pop node from front."},{line:11,text:"If `i == levelSize - 1`, this is the rightmost node of this level: add its value to `result`."},{line:14,text:"Queue left and right children for the next level."}]},python:{code:`from collections import deque

def rightSideView(root: Optional[TreeNode]) -> list[int]:
    if not root:
        return []
    result = []
    q = deque([root])
    while q:
        level_size = len(q)
        for i in range(level_size):
            node = q.popleft()
            if i == level_size - 1:
                result.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
    return result`,explanation:[{line:1,text:"Import deque."},{line:3,text:"Define rightSideView function."},{line:4,text:"Check empty root."},{line:7,text:"Initialize queue."},{line:8,text:"BFS queue loop."},{line:9,text:"Get level size."},{line:10,text:"Loop level indices."},{line:12,text:"If current index is `level_size - 1`, append to output."},{line:14,text:"Append children to queue."}]},java:{code:`public List<Integer> rightSideView(TreeNode root) {
    if (root == null) return new ArrayList<>();
    List<Integer> result = new ArrayList<>();
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    while (!q.isEmpty()) {
        int levelSize = q.size();
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = q.remove();
            if (i == levelSize - 1) {
                result.add(node.val);
            }
            if (node.left != null) q.add(node.left);
            if (node.right != null) q.add(node.right);
        }
    }
    return result;
}`,explanation:[{line:1,text:"Declare rightSideView method."},{line:2,text:"Handle null head."},{line:4,text:"Initialize Queue."},{line:6,text:"Loop while Queue is not empty."},{line:7,text:"Determine level node count."},{line:8,text:"Iterate nodes."},{line:10,text:"If index matches `levelSize - 1`, add to list."},{line:13,text:"Add children to queue."}]}}},{id:230,name:"Kth Smallest Element in a BST",difficulty:"Medium",topic:"BST",leetcodeUrl:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",tip:"An in-order traversal (Left, Root, Right) of a BST visits nodes in sorted ascending order. Perform in-order traversal, decrement `k` at each visit. When `k == 0`, record the node's value and stop.",description:"Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.",chatbotData:{intuition:"In a Binary Search Tree, an In-Order traversal (Left -> Node -> Right) visits elements in sorted, ascending order. We can perform an in-order traversal and maintain a counter. Each time we 'visit' a node (after finishing its left subtree), we decrement `k` by 1. When `k` reaches 0, the current node is the Kth smallest element, so we store its value and terminate the traversal.",complexity:`Time Complexity: O(N) or O(H + K) where H is the tree height. We search until we find the Kth element.
Space Complexity: O(H) representing the recursive call stack.`,edgeCases:`1. K = 1: returns the minimum element (leftmost leaf node).
2. K is the size of the tree: returns the maximum element (rightmost node).`,debugging:"Use a member variable or helper return structure to pass the updated value of `k` across recursive calls, so the decrement propagates correctly."},solutions:{cpp:{code:`class Solution {
private:
    int count;
    int result = -1;
    
    void inorder(TreeNode* node) {
        if (node == nullptr || count == 0) return;
        inorder(node->left);
        count--;
        if (count == 0) {
            result = node->val;
            return;
        }
        inorder(node->right);
    }

public:
    int kthSmallest(TreeNode* root, int k) {
        count = k;
        inorder(root);
        return result;
    }
};`,explanation:[{line:3,text:"Declare class member variable `count` to track remaining visits needed."},{line:4,text:"Declare member variable `result` to store the Kth smallest value."},{line:6,text:"In-order traversal helper function."},{line:7,text:"Base case: return if node is null OR if we already found the result (`count == 0`)."},{line:8,text:"Traverse the left subtree recursively."},{line:9,text:"Decrement visit counter `count`."},{line:10,text:"If `count` reaches 0, we found our target node."},{line:11,text:"Save the current node's value in `result`."},{line:14,text:"Traverse the right subtree."},{line:18,text:"Main function: initializes `count` to `k`, triggers in-order DFS, and returns the result."}]},python:{code:`class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.k = k
        self.result = None
        
        def inorder(node):
            if not node or self.result is not None:
                return
            inorder(node.left)
            self.k -= 1
            if self.k == 0:
                self.result = node.val
                return
            inorder(node.right)
            
        inorder(root)
        return self.result`,explanation:[{line:1,text:"Define Solution class."},{line:3,text:"Store K in self.k so it is accessible in nested functions."},{line:4,text:"Initialize result to None."},{line:6,text:"Define recursive inorder helper."},{line:7,text:"Exit early if node is None or result is already found."},{line:9,text:"Traverse left child."},{line:10,text:"Decrement `self.k`."},{line:11,text:"If counter is 0, record value and exit."},{line:14,text:"Traverse right child."}]},java:{code:`class Solution {
    private int count;
    private int result = -1;
    
    public int kthSmallest(TreeNode root, int k) {
        count = k;
        inorder(root);
        return result;
    }
    
    private void inorder(TreeNode node) {
        if (node == null || count == 0) return;
        inorder(node.left);
        count--;
        if (count == 0) {
            result = node.val;
            return;
        }
        inorder(node.right);
    }
}`,explanation:[{line:1,text:"Declare Solution wrapper class."},{line:2,text:"Private counters."},{line:5,text:"Main function calling inorder traversal."},{line:11,text:"Helper method performing recursive in-order traversal."},{line:12,text:"Base case: return if null or result found."},{line:13,text:"Traverse left child."},{line:14,text:"Decrement counter."},{line:15,text:"Set result if counter hits 0."},{line:19,text:"Traverse right child."}]}}},{id:236,name:"LCA of Binary Tree",difficulty:"Medium",topic:"Tree / DFS",leetcodeUrl:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",tip:"Use DFS. Recursively search left and right subtrees. If a subtree contains p or q, it returns the node. If both subtrees return non-null, the current node is the LCA.",description:"Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",chatbotData:{intuition:"We traverse the tree recursively. If we find `p` or `q`, we return that node. If a node is null, we return null. For any node, we search its left and right subtrees. If the left search returns a node and the right search also returns a node, it means `p` is in one subtree and `q` is in the other, making the current node their Lowest Common Ancestor! If only one side returns a node (non-null), it means both `p` and `q` are located on that side, so we pass that result up.",complexity:`Time Complexity: O(N) because we visit each of the N nodes at most once.
Space Complexity: O(H) where H is the height of the tree, representing the call stack.`,edgeCases:"1. One node is the ancestor of another: handles correctly because the search returns the ancestor node first and doesn't need to traverse below it.",debugging:"When checking matching targets, check `if (root == p || root == q) return root;` at the beginning of your recursive search."},solutions:{cpp:{code:`TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (root == nullptr || root == p || root == q) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if (left != nullptr && right != nullptr) {
        return root;
    }
    return (left != nullptr) ? left : right;
}`,explanation:[{line:1,text:"Function declaration: takes root, p, and q pointers, returns LCA pointer."},{line:2,text:"Base case: if root is null OR matches either `p` or `q`, return `root`."},{line:3,text:"Recursively search for `p` and `q` in the left subtree."},{line:4,text:"Recursively search for `p` and `q` in the right subtree."},{line:5,text:"If both left and right searches return non-null, it means p and q are split across current node: return current node."},{line:8,text:"If only one side is non-null, both nodes lie in that subtree: return the non-null result."}]},python:{code:`def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    if not root or root == p or root == q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right`,explanation:[{line:1,text:"Define lowestCommonAncestor function."},{line:2,text:"Base case: return root if null or matching p/q."},{line:4,text:"Search left and right subtrees recursively."},{line:6,text:"If both subtrees returned a node, the current node is the LCA."},{line:8,text:"Otherwise, return the non-None subtree result."}]},java:{code:`public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) {
        return root;
    }
    return (left != null) ? left : right;
}`,explanation:[{line:1,text:"Declare lowestCommonAncestor method."},{line:2,text:"Check base conditions (null or matching search targets)."},{line:3,text:"Traverse left child."},{line:4,text:"Traverse right child."},{line:5,text:"If both are non-null, root is LCA: return root."},{line:8,text:"Return the non-null subtree result."}]}}},{id:124,name:"Binary Tree Maximum Path Sum",difficulty:"Hard",topic:"Tree / DFS",leetcodeUrl:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",tip:"Use post-order DFS. At each node, calculate the max path sum that can go down the left and right subtrees. Ignore negative sums (use `max(0, sum)`). The max path sum passing through the current node is `val + leftSum + rightSum`. Update the global maximum.",description:"A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Given the `root` of a binary tree, return the maximum path sum of any non-empty path.",chatbotData:{intuition:"A path can start and end at any node in the tree. For any node, the maximum path sum that *curves* at this node is: `node.val + maxLeftPath + maxRightPath`. We write a recursive DFS function that computes the maximum path sum extending down from a node. If a child's path sum is negative, we ignore it by taking `max(0, childSum)`. At each node, we check if the curved path sum (`node.val + left + right`) is greater than our global maximum, and update it. Then we return `node.val + max(left, right)` to let the parent node extend the path.",complexity:`Time Complexity: O(N) because we visit each of the N nodes exactly once.
Space Complexity: O(H) where H is the height of the tree, representing the recursion stack.`,edgeCases:"1. All node values are negative: the code handles this by using a global maximum initialized to `INT_MIN` and updating it with the best single negative node val.",debugging:"When passing child sums up, do not return `node.val + left + right`. You can only choose ONE branch (either left or right) to continue a valid path upward. Return `node.val + max(left, right)`."},solutions:{cpp:{code:`class Solution {
private:
    int maxSum = INT_MIN;
    
    int maxGain(TreeNode* node) {
        if (node == nullptr) return 0;
        int leftGain = max(0, maxGain(node->left));
        int rightGain = max(0, maxGain(node->right));
        int currentPathSum = node->val + leftGain + rightGain;
        maxSum = max(maxSum, currentPathSum);
        return node->val + max(leftGain, rightGain);
    }

public:
    int maxPathSum(TreeNode* root) {
        maxGain(root);
        return maxSum;
    }
};`,explanation:[{line:3,text:"Declare member variable `maxSum` initialized to minimum integer limit."},{line:5,text:"Helper function `maxGain`: calculates one-way max path sum from node."},{line:6,text:"Base case: return 0 for null nodes."},{line:7,text:"Get max gain from left child. If negative, ignore it by using `max(0, ...)`."},{line:8,text:"Get max gain from right child."},{line:9,text:"Calculate the path sum that curves through the current node: `val + leftGain + rightGain`."},{line:10,text:"Update the global `maxSum` with the curved path sum."},{line:11,text:"Return the maximum single path gain extending from this node: `val + max(leftGain, rightGain)`."},{line:15,text:"Main function: starts DFS and returns the updated global maximum path sum."}]},python:{code:`class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.max_sum = float('-inf')
        
        def max_gain(node):
            if not node:
                return 0
            left = max(0, max_gain(node.left))
            right = max(0, max_gain(node.right))
            current_path_sum = node.val + left + right
            self.max_sum = max(self.max_sum, current_path_sum)
            return node.val + max(left, right)
            
        max_gain(root)
        return self.max_sum`,explanation:[{line:1,text:"Define Solution class."},{line:3,text:"Initialize `max_sum` to negative infinity."},{line:5,text:"Define recursive helper `max_gain`."},{line:6,text:"Return 0 if node is None."},{line:8,text:"Calculate left and right gains, discarding negative values."},{line:10,text:"Calculate sum of path curving at current node."},{line:11,text:"Update global maximum sum."},{line:12,text:"Return max branch path sum."},{line:14,text:"Execute search."},{line:15,text:"Return max sum."}]},java:{code:`class Solution {
    private int maxSum = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return maxSum;
    }
    
    private int maxGain(TreeNode node) {
        if (node == null) return 0;
        int left = Math.max(0, maxGain(node.left));
        int right = Math.max(0, maxGain(node.right));
        int currentPathSum = node.val + left + right;
        maxSum = Math.max(maxSum, currentPathSum);
        return node.val + Math.max(left, right);
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:2,text:"Private global maximum path sum tracker."},{line:4,text:"Main method running DFS."},{line:9,text:"Helper method `maxGain` calculating height path values."},{line:10,text:"Base case: return 0."},{line:11,text:"Recursively get left branch value, discarding if < 0."},{line:12,text:"Recursively get right branch value."},{line:13,text:"Calculate sum when treating current node as path peak."},{line:14,text:"Update global max path sum."},{line:15,text:"Return the best single branch path sum."}]}}}],jx=[{id:200,name:"Number of Islands",difficulty:"Medium",topic:"Graph / BFS / DFS",leetcodeUrl:"https://leetcode.com/problems/number-of-islands/",tip:"Iterate through the grid. When you find '1' (land), increment the island count and run DFS (or BFS) to sink the entire island by changing all adjacent '1's to '0's.",description:"Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.",chatbotData:{intuition:"We scan the 2D grid cell by cell. When we find a land cell `'1'`, it means we've discovered a new island. To avoid counting the same island multiple times, we use DFS (or BFS) starting from this cell to visit all connected land cells (up, down, left, right) and mark them as `'0'` (sinking the island). The number of times we initiate this search is the total number of islands.",complexity:`Time Complexity: O(M * N) where M is rows and N is columns. We visit each grid cell at most once.
Space Complexity: O(M * N) in the worst case (for the DFS recursion stack if the entire grid is land).`,edgeCases:`1. Empty grid: returns 0.
2. Grid with no land: returns 0.
3. Grid with only 1s: starts DFS at (0,0), sinks all cells, returns 1.`,debugging:"Check that you do not step out of grid bounds when making recursive calls to neighboring cells (`row < 0`, `row >= m`, `col < 0`, `col >= n`)."},solutions:{cpp:{code:`void dfs(vector<vector<char>>& grid, int r, int c) {
    int m = grid.size();
    int n = grid[0].size();
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;
    grid[r][c] = '0'; // sink the land
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}

int numIslands(vector<vector<char>>& grid) {
    if (grid.empty()) return 0;
    int count = 0;
    for (int r = 0; r < grid.size(); r++) {
        for (int c = 0; c < grid[0].size(); c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}`,explanation:[{line:1,text:"DFS helper: recursively visits and sinks connected land cells."},{line:4,text:"Base case: if coordinates are out of bounds OR cell is water ('0'), return."},{line:5,text:"Sink the current cell by setting it to '0'. This acts as a 'visited' marker."},{line:6,text:"Visit neighbor above."},{line:7,text:"Visit neighbor below."},{line:8,text:"Visit neighbor to the left."},{line:9,text:"Visit neighbor to the right."},{line:12,text:"Main function: returns the number of islands."},{line:15,text:"Double loop to scan the entire 2D grid."},{line:17,text:"If we find an unvisited land cell ('1'), we found a new island."},{line:18,text:"Increment the island count."},{line:19,text:"Run DFS to sink all connected land cells of this island."}]},python:{code:`def numIslands(grid: list[list[str]]) -> int:
    if not grid:
        return 0
    m, n = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == '0':
            return
        grid[r][c] = '0'  # sink land
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
        
    for r in range(m):
        for c in range(n):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,explanation:[{line:1,text:"Define numIslands function."},{line:4,text:"Calculate rows and columns."},{line:7,text:"Define nested DFS helper function."},{line:8,text:"Check bounds and water state."},{line:10,text:"Mark cell as water to avoid visiting again."},{line:11,text:"Recursively sink all neighbors."},{line:16,text:"Scan the grid. When land is found, increment counter and trigger DFS."}]},java:{code:`public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    int m = grid.length, n = grid[0].length;
    int count = 0;
    for (int r = 0; r < m; r++) {
        for (int c = 0; c < n; c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}

private void dfs(char[][] grid, int r, int c) {
    int m = grid.length, n = grid[0].length;
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;
    grid[r][c] = '0';
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}`,explanation:[{line:1,text:"Declare main method."},{line:5,text:"Scan grid cells using rows and cols indices."},{line:7,text:"If unvisited land, increment count and sink island."},{line:16,text:"Helper method dfs for depth-first island sinking."},{line:18,text:"Boundary and water checks."},{line:19,text:"Mark cell visited ('0')."},{line:20,text:"Recurse into neighbors."}]}}},{id:133,name:"Clone Graph",difficulty:"Medium",topic:"Graph / DFS",leetcodeUrl:"https://leetcode.com/problems/clone-graph/",tip:"Use DFS and a Hash Map. The hash map maps `originalNode -> clonedNode`. When visiting a node, if it is in the map, return the clone. Otherwise, clone it, save in map, and recursively clone neighbors.",description:"Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",chatbotData:{intuition:"A deep copy means creating new node instances with the same values and structure. Because the graph can have cycles, if we just copy nodes recursively we will enter an infinite loop. We use a Hash Map `originalNode -> clonedNode` to keep track of nodes we have already copied. When we visit a node, if it's already in our map, we return its clone. If not, we create a new clone, put it in the map, and recursively copy all its neighbors, appending them to the clone's neighbors list.",complexity:`Time Complexity: O(V + E) where V is vertices and E is edges, since we visit each node and traverse each edge once.
Space Complexity: O(V) to store the clone mappings in the hash map and the DFS recursion stack.`,edgeCases:`1. Empty graph (null node): returns null.
2. Single node: returns the single cloned node with an empty neighbors list.`,debugging:"Be sure to insert the cloned node into the map *before* recursively cloning its neighbors. If you do it after, circular connections will lead to an infinite loop and crash your program."},solutions:{cpp:{code:`class Solution {
private:
    unordered_map<Node*, Node*> visited;

public:
    Node* cloneGraph(Node* node) {
        if (node == nullptr) return nullptr;
        if (visited.count(node)) return visited[node];
        Node* clone = new Node(node->val);
        visited[node] = clone;
        for (Node* neighbor : node->neighbors) {
            clone->neighbors.push_back(cloneGraph(neighbor));
        }
        return clone;
    }
};`,explanation:[{line:3,text:"Declare a hash map `visited` to store mappings of `originalNode -> clonedNode`."},{line:6,text:"Main function: returns the cloned graph."},{line:7,text:"If the input node is null, return nullptr."},{line:8,text:"If the node has already been cloned, return its clone from the map."},{line:9,text:"Create a new clone node with the original node's value."},{line:10,text:"Store the mapping in our `visited` map *before* cloning neighbors."},{line:11,text:"Loop through each neighbor of the original node."},{line:12,text:"Recursively clone the neighbor and append the result to our clone's neighbors list."},{line:14,text:"Return the cloned node."}]},python:{code:`class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        visited = {}
        
        def dfs(curr):
            if not curr:
                return None
            if curr in visited:
                return visited[curr]
            clone = Node(curr.val)
            visited[curr] = clone
            for neighbor in curr.neighbors:
                clone.neighbors.append(dfs(neighbor))
            return clone
            
        return dfs(node)`,explanation:[{line:1,text:"Define Solution class."},{line:3,text:"Create empty dictionary `visited`."},{line:5,text:"Define recursive DFS function."},{line:8,text:"If node already cloned, return the clone from dictionary."},{line:10,text:"Create a new Node copy."},{line:11,text:"Store copy in `visited`."},{line:12,text:"Recursively clone neighbors and append to copy's neighbors list."}]},java:{code:`class Solution {
    private Map<Node, Node> visited = new HashMap<>();
    
    public Node cloneGraph(Node node) {
        if (node == null) return null;
        if (visited.containsKey(node)) return visited.get(node);
        Node clone = new Node(node.val);
        visited.put(node, clone);
        for (Node neighbor : node.neighbors) {
            clone.neighbors.add(cloneGraph(neighbor));
        }
        return clone;
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:2,text:"Initialize hash map to track cloned nodes."},{line:5,text:"Return null if input node is null."},{line:6,text:"If node is in map, return the clone."},{line:7,text:"Instantiate a new node."},{line:8,text:"Put original and clone into map."},{line:9,text:"Loop neighbors, recursively clone, and add to list."}]}}},{id:207,name:"Course Schedule",difficulty:"Medium",topic:"Topological Sort",leetcodeUrl:"https://leetcode.com/problems/course-schedule/",tip:"This is a cycle detection problem in a directed graph. Represent prerequisites as an adjacency list. Use DFS with a `visited` array (0 = unvisited, 1 = visiting, 2 = visited). If you visit a node that is 'visiting', a cycle exists.",description:"There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\nReturn `true` if you can finish all courses. Otherwise, return `false`.",chatbotData:{intuition:"Taking courses with prerequisites represents a Directed Graph where courses are nodes and prerequisites are directed edges. Finishing all courses is only possible if there are no circular dependencies (cycles) in this graph. We can represent this with 3 states for each node during DFS: 0 (Unvisited), 1 (Visiting - currently in DFS recursion path), and 2 (Visited - fully processed). If DFS encounters a node in state 1, it means we found a cycle (back-edge), so we return false.",complexity:"Time Complexity: O(V + E) where V is `numCourses` and E is prerequisites count, since we build the adjacency list and run DFS visiting each node/edge once.\nSpace Complexity: O(V + E) to store the adjacency list graph and the DFS state arrays.",edgeCases:`1. No prerequisites: returns true.
2. Self loop (course depends on itself): returns false.
3. Multiple disconnected subgraphs: DFS loops over all nodes, handling it correctly.`,debugging:"Remember to reset the state of the current node to 2 (Visited) after successfully finishing its DFS traversal, so that subsequent DFS calls do not mistake it for a cycle."},solutions:{cpp:{code:`bool hasCycle(int node, vector<vector<int>>& adj, vector<int>& visited) {
    if (visited[node] == 1) return true; // cycle detected
    if (visited[node] == 2) return false;
    visited[node] = 1; // mark as visiting
    for (int neighbor : adj[node]) {
        if (hasCycle(neighbor, adj, visited)) return true;
    }
    visited[node] = 2; // mark as fully processed
    return false;
}

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> adj(numCourses);
    for (auto pre : prerequisites) {
        adj[pre[1]].push_back(pre[0]);
    }
    vector<int> visited(numCourses, 0); // 0=unvisited, 1=visiting, 2=visited
    for (int i = 0; i < numCourses; i++) {
        if (hasCycle(i, adj, visited)) return false;
    }
    return true;
}`,explanation:[{line:1,text:"Helper function: returns true if a cycle exists starting from this node."},{line:2,text:"If node is state 1 (visiting), we hit it again in the same DFS path: cycle detected, return true."},{line:3,text:"If node is state 2 (visited), it was already checked and is safe: return false."},{line:4,text:"Mark current node as 1 (visiting)."},{line:5,text:"Iterate through all nodes depending on this course."},{line:6,text:"Recursively check for cycles. If any branch has a cycle, return true."},{line:8,text:"Mark current node as 2 (visited) once all branches are verified safe."},{line:12,text:"Main function: builds adjacency list and runs cycle checks."},{line:13,text:"Initialize adjacency list."},{line:14,text:"Populate adjacency list using prerequisites. Course `pre[1]` must be taken before `pre[0]`."},{line:17,text:"Initialize `visited` array of size `numCourses` with 0s (unvisited)."},{line:18,text:"Check every course. If any course starts a path containing a cycle, return false."}]},python:{code:`def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:
    adj = [[] for _ in range(numCourses)]
    for course, pre in prerequisites:
        adj[pre].append(course)
    visited = [0] * numCourses  # 0=unvisited, 1=visiting, 2=visited
    
    def hasCycle(node):
        if visited[node] == 1:
            return True
        if visited[node] == 2:
            return False
        visited[node] = 1
        for neighbor in adj[node]:
            if hasCycle(neighbor):
                return True
        visited[node] = 2
        return False
        
    for i in range(numCourses):
        if hasCycle(i):
            return False
    return True`,explanation:[{line:1,text:"Define canFinish function."},{line:2,text:"Build adjacency list."},{line:5,text:"Initialize visited status array."},{line:7,text:"Define DFS cycle checker."},{line:8,text:"If node is 1 (visiting), cycle exists."},{line:12,text:"Mark node visiting."},{line:13,text:"Run DFS on all dependents."},{line:16,text:"Mark node fully processed (visited)."},{line:19,text:"Verify cycle status for every course in the graph."}]},java:{code:`public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
    for (int[] pre : prerequisites) {
        adj.get(pre[1]).add(pre[0]);
    }
    int[] visited = new int[numCourses]; // 0=unvisited, 1=visiting, 2=visited
    for (int i = 0; i < numCourses; i++) {
        if (hasCycle(i, adj, visited)) return false;
    }
    return true;
}

private boolean hasCycle(int node, List<List<Integer>> adj, int[] visited) {
    if (visited[node] == 1) return true;
    if (visited[node] == 2) return false;
    visited[node] = 1;
    for (int neighbor : adj.get(node)) {
        if (hasCycle(neighbor, adj, visited)) return true;
    }
    visited[node] = 2;
    return false;
}`,explanation:[{line:1,text:"Declare canFinish method."},{line:2,text:"Initialize adjacency list using nested lists."},{line:4,text:"Populate adjacency list."},{line:7,text:"Create visited state array."},{line:8,text:"Run cycle checker on all courses."},{line:14,text:"Helper method hasCycle."},{line:15,text:"Verify visited states: return true if visiting, false if visited."},{line:17,text:"Set visiting state (1)."},{line:18,text:"Loop dependents."}]}}},{id:210,name:"Course Schedule II",difficulty:"Medium",topic:"Topological Sort",leetcodeUrl:"https://leetcode.com/problems/course-schedule-ii/",tip:"Use DFS Topological Sort. Keep a visited array and a stack (or list). Run DFS; after visiting all neighbors of a course, push it onto the stack. The reversed stack is the correct order.",description:"Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",chatbotData:{intuition:"This is an extension of Course Schedule I. Instead of just checking for cycles, we need to return the topological order of the directed graph. We use DFS with cycle detection (states 0, 1, 2). When a node is fully processed (state 2, meaning all its dependencies have been traversed), we push it onto a stack or list. Since DFS goes deep first, a course is pushed only *after* all courses that depend on it are visited. Reversing this list gives us the correct order.",complexity:"Time Complexity: O(V + E) where V is `numCourses` and E is prerequisites count.\nSpace Complexity: O(V + E) to store adjacency lists, recursion stack, and result arrays.",edgeCases:"1. Impossible scheduling (cycle exists): returns empty array `[]`.\n2. Disconnected graph components: handled correctly by exploring all unvisited nodes in outer loop.",debugging:"If a cycle is detected during DFS, return an empty array immediately. Ensure you reverse the final order list if you add elements after their recursive calls finish."},solutions:{cpp:{code:`class Solution {
private:
    bool hasCycle(int node, vector<vector<int>>& adj, vector<int>& visited, vector<int>& order) {
        if (visited[node] == 1) return true;
        if (visited[node] == 2) return false;
        visited[node] = 1;
        for (int neighbor : adj[node]) {
            if (hasCycle(neighbor, adj, visited, order)) return true;
        }
        visited[node] = 2;
        order.push_back(node); // add to topological order after processing dependencies
        return false;
    }

public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj(numCourses);
        for (auto pre : prerequisites) {
            adj[pre[1]].push_back(pre[0]);
        }
        vector<int> visited(numCourses, 0);
        vector<int> order;
        for (int i = 0; i < numCourses; i++) {
            if (hasCycle(i, adj, visited, order)) return {};
        }
        reverse(order.begin(), order.end());
        return order;
    }
};`,explanation:[{line:3,text:"Helper function returns true if a cycle is found. Otherwise populates `order`."},{line:11,text:"Push the node into `order` list after all its dependent nodes have been processed."},{line:16,text:"Main function: returns sorted order list."},{line:17,text:"Build adjacency list."},{line:21,text:"Initialize `visited` tracker."},{line:23,text:"Loop through all courses. If a cycle is detected anywhere, return empty vector `{}`."},{line:26,text:"Reverse the `order` list because the leaves (dependent courses) were added first."}]},python:{code:`def findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:
    adj = [[] for _ in range(numCourses)]
    for course, pre in prerequisites:
        adj[pre].append(course)
    visited = [0] * numCourses
    order = []
    
    def dfs(node):
        if visited[node] == 1:
            return True
        if visited[node] == 2:
            return False
        visited[node] = 1
        for neighbor in adj[node]:
            if dfs(neighbor):
                return True
        visited[node] = 2
        order.append(node)
        return False
        
    for i in range(numCourses):
        if dfs(i):
            return []
    return order[::-1]`,explanation:[{line:1,text:"Define findOrder function."},{line:2,text:"Initialize adjacency lists."},{line:5,text:"Create visited tracker and order list."},{line:8,text:"DFS cycle checker and topological sorter."},{line:18,text:"Append course to `order` after visiting all dependent nodes."},{line:21,text:"Check all courses. Return empty list if cycle detected."},{line:24,text:"Return the reversed order list using slice notation `[::-1]`."}]},java:{code:`class Solution {
    private List<Integer> order = new ArrayList<>();
    
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
        for (int[] pre : prerequisites) {
            adj.get(pre[1]).add(pre[0]);
        }
        int[] visited = new int[numCourses];
        for (int i = 0; i < numCourses; i++) {
            if (hasCycle(i, adj, visited)) return new int[0];
        }
        int[] result = new int[numCourses];
        for (int i = 0; i < numCourses; i++) {
            result[i] = order.get(numCourses - 1 - i);
        }
        return result;
    }
    
    private boolean hasCycle(int node, List<List<Integer>> adj, int[] visited) {
        if (visited[node] == 1) return true;
        if (visited[node] == 2) return false;
        visited[node] = 1;
        for (int neighbor : adj.get(node)) {
            if (hasCycle(neighbor, adj, visited)) return true;
        }
        visited[node] = 2;
        order.add(node);
        return false;
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:2,text:"List to store topological order."},{line:4,text:"Main method to arrange courses."},{line:10,text:"Create visited status array."},{line:11,text:"Run cycle checking DFS."},{line:14,text:"Reconstruct result in reverse order."},{line:21,text:"Helper method hasCycle to detect loops and populate order."}]}}},{id:547,name:"Number of Provinces",difficulty:"Medium",topic:"Graph / Union Find",leetcodeUrl:"https://leetcode.com/problems/number-of-provinces/",tip:"Use DFS. Iterate through the nodes. For each unvisited node, increment the province count and run DFS to visit all directly and indirectly connected nodes, marking them as visited.",description:"There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`. A province is a group of directly or indirectly connected cities. Return the total number of provinces.",chatbotData:{intuition:"This problem asks us to find the number of connected components in an undirected graph. We represent the cities as nodes and connections as edges. We keep a `visited` array for all cities. We loop through each city from 0 to N-1. If a city is not visited, it marks the start of a new province. We increment our province count and start a DFS from this city, traversing all its neighbors (and their neighbors) and marking them as visited.",complexity:`Time Complexity: O(N²) because we traverse the adjacency matrix of size N x N.
Space Complexity: O(N) to store the visited array and recursion stack.`,edgeCases:`1. No connections (identity matrix): returns N.
2. All connected: returns 1.
3. Disconnected islands of cities: correctly computed.`,debugging:"In the DFS helper loop `for (int neighbor = 0; neighbor < n; neighbor++)`, verify that `isConnected[node][neighbor] == 1` and the neighbor is unvisited before recursing."},solutions:{cpp:{code:`void dfs(int node, vector<vector<int>>& isConnected, vector<bool>& visited) {
    visited[node] = true;
    for (int neighbor = 0; neighbor < isConnected.size(); neighbor++) {
        if (isConnected[node][neighbor] == 1 && !visited[neighbor]) {
            dfs(neighbor, isConnected, visited);
        }
    }
}

int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    int provinces = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
            dfs(i, isConnected, visited);
        }
    }
    return provinces;
}`,explanation:[{line:1,text:"DFS helper: marks node as visited and recursively visits all its connected neighbors."},{line:2,text:"Mark the current city `node` as visited."},{line:3,text:"Loop through all other cities in the matrix."},{line:4,text:"If city `node` is connected to `neighbor` AND `neighbor` is not yet visited."},{line:5,text:"Run DFS on the neighbor city."},{line:10,text:"Main function: returns province count."},{line:12,text:"Initialize `visited` array of size `n` with `false`."},{line:13,text:"Initialize `provinces` counter to 0."},{line:14,text:"Loop through each city in the network."},{line:15,text:"If city `i` is not visited yet, it starts a new province."},{line:16,text:"Increment province count."},{line:17,text:"Run DFS to mark all connected cities of this province."}]},python:{code:`def findCircleNum(isConnected: list[list[int]]) -> int:
    n = len(isConnected)
    visited = [False] * n
    provinces = 0
    
    def dfs(node):
        visited[node] = True
        for neighbor in range(n):
            if isConnected[node][neighbor] == 1 and not visited[neighbor]:
                dfs(neighbor)
                
    for i in range(n):
        if not visited[i]:
            provinces += 1
            dfs(i)
    return provinces`,explanation:[{line:1,text:"Define findCircleNum function."},{line:3,text:"Create visited boolean list."},{line:4,text:"Initialize provinces counter."},{line:6,text:"Define DFS search helper."},{line:7,text:"Mark city as visited."},{line:8,text:"Loop through all possible cities in network."},{line:9,text:"Check connection and visit status before calling recursively."},{line:12,text:"Find unvisited cities, increment province count, and run DFS."}]},java:{code:`public int findCircleNum(int[][] isConnected) {
    int n = isConnected.length;
    boolean[] visited = new boolean[n];
    int provinces = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
            dfs(i, isConnected, visited);
        }
    }
    return provinces;
}

private void dfs(int node, int[][] isConnected, boolean[] visited) {
    visited[node] = true;
    for (int neighbor = 0; neighbor < isConnected.length; neighbor++) {
        if (isConnected[node][neighbor] == 1 && !visited[neighbor]) {
            dfs(neighbor, isConnected, visited);
        }
    }
}`,explanation:[{line:1,text:"Declare findCircleNum method."},{line:3,text:"Create visited boolean array."},{line:5,text:"Scan through all cities."},{line:7,text:"Increment province count and run DFS for unvisited component."},{line:14,text:"DFS helper method."},{line:15,text:"Mark city visited."},{line:16,text:"Traverse neighbors in adjacency row."}]}}},{id:695,name:"Max Area of Island",difficulty:"Medium",topic:"Graph / DFS",leetcodeUrl:"https://leetcode.com/problems/max-area-of-island/",tip:"Similar to Number of Islands. Instead of just counting islands, make your DFS return the area of the island (`1 + area(neighbors)`). Track the maximum area.",description:"You are given an `m x n` binary matrix `grid`. An island is a group of `1`'s (representing land) connected 4-directionally. The area of an island is the number of cells with a value `1` in the island. Return the maximum area of an island in `grid`.",chatbotData:{intuition:"We scan the grid for land `'1'`. When found, we count how many land cells are connected to it. We write a recursive DFS function `dfs(r, c)` that returns the area of the island starting at `(r, c)`. The base case returns 0 if out of bounds or water. Otherwise, it marks the current cell as 0 (visited) and returns `1 + dfs(up) + dfs(down) + dfs(left) + dfs(right)`. We keep track of the maximum area returned.",complexity:`Time Complexity: O(M * N) since we visit each cell in the M x N grid at most once.
Space Complexity: O(M * N) for the recursion stack in the worst case.`,edgeCases:`1. Grid with no land: returns 0.
2. Grid with only one land cell: returns 1.`,debugging:"Ensure you return the sum of the DFS calls plus 1 (representing the current cell), and ensure you sink/visit-mark the current cell before recurse calls to prevent infinite recursion loops."},solutions:{cpp:{code:`int dfs(vector<vector<int>>& grid, int r, int c) {
    int m = grid.size();
    int n = grid[0].size();
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return 0;
    grid[r][c] = 0; // mark visited
    return 1 + dfs(grid, r - 1, c) +
               dfs(grid, r + 1, c) +
               dfs(grid, r, c - 1) +
               dfs(grid, r, c + 1);
}

int maxAreaOfIsland(vector<vector<int>>& grid) {
    if (grid.empty()) return 0;
    int maxArea = 0;
    for (int r = 0; r < grid.size(); r++) {
        for (int c = 0; c < grid[0].size(); c++) {
            if (grid[r][c] == 1) {
                maxArea = max(maxArea, dfs(grid, r, c));
            }
        }
    }
    return maxArea;
}`,explanation:[{line:1,text:"DFS helper: returns the area of the island containing cell (r, c)."},{line:4,text:"Base case: return 0 if out of bounds or water."},{line:5,text:"Sink the current land cell to mark it visited."},{line:6,text:"Return 1 (current cell) plus the areas of all four neighboring directions recursively."},{line:12,text:"Main function: returns max area."},{line:15,text:"Double loop to scan grid."},{line:17,text:"If land is found, run DFS and update `maxArea` with the larger value."}]},python:{code:`def maxAreaOfIsland(grid: list[list[int]]) -> int:
    if not grid:
        return 0
    m, n = len(grid), len(grid[0])
    max_area = 0
    
    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 0:
            return 0
        grid[r][c] = 0  # mark visited
        return 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1)
        
    for r in range(m):
        for c in range(n):
            if grid[r][c] == 1:
                max_area = max(max_area, dfs(r, c))
    return max_area`,explanation:[{line:1,text:"Define maxAreaOfIsland function."},{line:4,text:"Get dimensions."},{line:7,text:"Define nested DFS helper."},{line:8,text:"Return 0 if bounds are invalid or water."},{line:10,text:"Mark cell visited."},{line:11,text:"Accumulate and return 1 plus neighbors' areas."},{line:13,text:"Loop through grid cells, starting DFS at land nodes."}]},java:{code:`public int maxAreaOfIsland(int[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    int m = grid.length, n = grid[0].length;
    int maxArea = 0;
    for (int r = 0; r < m; r++) {
        for (int c = 0; c < n; c++) {
            if (grid[r][c] == 1) {
                maxArea = Math.max(maxArea, dfs(grid, r, c));
            }
        }
    }
    return maxArea;
}

private int dfs(int[][] grid, int r, int c) {
    int m = grid.length, n = grid[0].length;
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return 0;
    grid[r][c] = 0;
    return 1 + dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1);
}`,explanation:[{line:1,text:"Declare maxAreaOfIsland method."},{line:5,text:"Scan grid."},{line:7,text:"Update max area with DFS output."},{line:15,text:"DFS helper method."},{line:17,text:"Check boundaries."},{line:18,text:"Mark cell visited."},{line:19,text:"Sum and return area."}]}}},{id:785,name:"Is Graph Bipartite?",difficulty:"Medium",topic:"Graph / BFS",leetcodeUrl:"https://leetcode.com/problems/is-graph-bipartite/",tip:"Use BFS/DFS coloring. Color the graph nodes using two colors (0 and 1). For any node, all its neighbors must have the opposite color. If a neighbor already has the same color, the graph is not bipartite.",description:"There is an undirected graph with `n` nodes, where each node is numbered between `0` and `n - 1`. Return `true` if the graph is bipartite, or `false` otherwise.",chatbotData:{intuition:"A graph is bipartite if we can partition its nodes into two independent sets such that no edges exist between nodes in the same set. This is equivalent to coloring the graph with 2 colors (e.g. 1 and -1) such that no two adjacent nodes share the same color. We can traverse the graph using BFS/DFS. We color an uncolored node 1, then traverse its neighbors, coloring them the opposite color (-1). If we see a neighbor that is already colored with the *same* color as the current node, the graph cannot be bipartite.",complexity:`Time Complexity: O(V + E) where V is nodes and E is edges, since we color each node and edge at most once.
Space Complexity: O(V) to store the color array and BFS queue.`,edgeCases:`1. Disconnected graph: outer loop over all nodes ensures all components are colored.
2. Single node or 0 edges: trivially bipartite, returns true.`,debugging:"Make sure you traverse all nodes in an outer loop `for (int i = 0; i < n; i++)`, as the graph could be disconnected (have multiple separate components)."},solutions:{cpp:{code:`bool validColor(int node, int c, vector<vector<int>>& graph, vector<int>& colors) {
    colors[node] = c;
    for (int neighbor : graph[node]) {
        if (colors[neighbor] == colors[node]) return false; // same color neighbor
        if (colors[neighbor] == 0) {
            if (!validColor(neighbor, -c, graph, colors)) return false;
        }
    }
    return true;
}

bool isBipartite(vector<vector<int>>& graph) {
    int n = graph.size();
    vector<int> colors(n, 0); // 0=uncolored, 1=color A, -1=color B
    for (int i = 0; i < n; i++) {
        if (colors[i] == 0) {
            if (!validColor(i, 1, graph, colors)) return false;
        }
    }
    return true;
}`,explanation:[{line:1,text:"Helper function: attempts to color node and neighbors recursively. Returns false if color collision occurs."},{line:2,text:"Set current node's color to `c`."},{line:3,text:"Iterate through neighbors of current node."},{line:4,text:"If neighbor has the same color, bipartite property is violated: return false."},{line:5,text:"If neighbor is uncolored (color 0)."},{line:6,text:"Recursively color the neighbor with the opposite color `-c`. Return false if that branch fails."},{line:12,text:"Main function."},{line:14,text:"Initialize colors array. 0 represents uncolored, 1 is color A, -1 is color B."},{line:15,text:"Loop through all nodes to cover disconnected graph components."},{line:16,text:"If node is uncolored, start coloring it with color 1."}]},python:{code:`def isBipartite(graph: list[list[int]]) -> bool:
    n = len(graph)
    colors = [0] * n  # 0=uncolored, 1=A, -1=B
    
    def dfs(node, color):
        colors[node] = color
        for neighbor in graph[node]:
            if colors[neighbor] == colors[node]:
                return False
            if colors[neighbor] == 0:
                if not dfs(neighbor, -color):
                    return False
        return True
        
    for i in range(n):
        if colors[i] == 0:
            if not dfs(i, 1):
                return False
    return True`,explanation:[{line:1,text:"Define isBipartite function."},{line:3,text:"Initialize colors list with 0."},{line:5,text:"Define DFS coloring helper."},{line:6,text:"Color the node."},{line:7,text:"Check neighbors. Return False if color conflict."},{line:10,text:"Recurse color for uncolored neighbors with opposite color value `-color`."},{line:15,text:"Ensure all nodes (and components) are processed."}]},java:{code:`public boolean isBipartite(int[][] graph) {
    int n = graph.length;
    int[] colors = new int[n]; // 0=uncolored, 1=A, -1=B
    for (int i = 0; i < n; i++) {
        if (colors[i] == 0) {
            if (!validColor(i, 1, graph, colors)) return false;
        }
    }
    return true;
}

private boolean validColor(int node, int color, int[][] graph, int[] colors) {
    colors[node] = color;
    for (int neighbor : graph[node]) {
        if (colors[neighbor] == colors[node]) return false;
        if (colors[neighbor] == 0) {
            if (!validColor(neighbor, -color, graph, colors)) return false;
        }
    }
    return true;
}`,explanation:[{line:1,text:"Declare isBipartite method."},{line:3,text:"Create colors array."},{line:4,text:"Scan all nodes in outer loop."},{line:12,text:"DFS coloring helper method."},{line:13,text:"Assign color."},{line:15,text:"Conflict check."},{line:17,text:"Recursively color uncolored neighbors with opposite color value."}]}}},{id:994,name:"Rotting Oranges",difficulty:"Medium",topic:"BFS / Multi-source",leetcodeUrl:"https://leetcode.com/problems/rotting-oranges/",tip:"Use Multi-source BFS. Count fresh oranges first. Push all rotten oranges (value 2) into the queue. Run BFS level-by-level, incrementing minutes. If fresh count becomes 0, return minutes. Otherwise, -1.",description:"You are given an `m x n` grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange). Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.",chatbotData:{intuition:"This is a shortest path problem in a grid. Because multiple oranges can rot simultaneously, the rot spreads from all rotten oranges at the same time. This is a Multi-Source BFS. We scan the grid to count fresh oranges and push the coordinates of all initially rotten oranges into a queue. We run BFS level by level (each level represents 1 minute). When we rot a fresh orange, we decrement the fresh count. We stop when the queue is empty. If the fresh count is 0, we return minutes, else -1.",complexity:`Time Complexity: O(M * N) since we visit each cell in the grid a constant number of times.
Space Complexity: O(M * N) to store the BFS queue.`,edgeCases:`1. 0 fresh oranges: returns 0 minutes immediately.
2. Fresh orange blocked by empty cells (unreachable): BFS ends, fresh count > 0, returns -1.`,debugging:"When incrementing the time (minutes), ensure you only increment it if we actually rotted at least one fresh orange in the current level cycle. If we didn't, the last step didn't spread any rot and shouldn't add to the timer."},solutions:{cpp:{code:`int orangesRotting(vector<vector<int>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    queue<pair<int, int>> q;
    int fresh = 0;
    for (int r = 0; r < m; r++) {
        for (int c = 0; c < n; c++) {
            if (grid[r][c] == 2) {
                q.push({r, c});
            } else if (grid[r][c] == 1) {
                fresh++;
            }
        }
    }
    if (fresh == 0) return 0;
    int minutes = 0;
    int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    while (!q.empty() && fresh > 0) {
        int size = q.size();
        minutes++;
        for (int i = 0; i < size; i++) {
            auto [r, c] = q.front();
            q.pop();
            for (auto dir : dirs) {
                int nr = r + dir[0];
                int nc = c + dir[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2; // rot the orange
                    fresh--;
                    q.push({nr, nc});
                }
            }
        }
    }
    return (fresh == 0) ? minutes : -1;
}`,explanation:[{line:1,text:"Function declaration: takes grid, returns minutes or -1."},{line:4,text:"Declare queue of coordinate pairs for BFS."},{line:5,text:"Initialize fresh orange counter."},{line:6,text:"Scan grid to record all rotten orange coordinates and count fresh oranges."},{line:15,text:"If there are no fresh oranges, no time is needed: return 0."},{line:17,text:"Define direction offsets for top, bottom, left, right neighbors."},{line:18,text:"Loop while queue is not empty AND there are still fresh oranges left."},{line:19,text:"Get count of rotten oranges in the current wave (level)."},{line:20,text:"Increment minutes elapsed."},{line:21,text:"Process all rotten oranges in the current level."},{line:24,text:"Check all 4 adjacent directions."},{line:27,text:"If coordinates are valid and neighbor is a fresh orange."},{line:28,text:"Rot the fresh orange (set to 2)."},{line:29,text:"Decrement the fresh orange counter."},{line:30,text:"Push the new rotten orange's coordinates onto the queue for the next minute wave."}]},python:{code:`from collections import deque

def orangesRotting(grid: list[list[int]]) -> int:
    m, n = len(grid), len(grid[0])
    q = deque()
    fresh = 0
    for r in range(m):
        for c in range(n):
            if grid[r][c] == 2:
                q.append((r, c))
            elif grid[r][c] == 1:
                fresh += 1
    if fresh == 0:
        return 0
        
    minutes = 0
    while q and fresh > 0:
        minutes += 1
        for _ in range(len(q)):
            r, c = q.popleft()
            for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    grid[nr][nc] = 2  # rot
                    fresh -= 1
                    q.append((nr, nc))
    return minutes if fresh == 0 else -1`,explanation:[{line:1,text:"Import deque."},{line:3,text:"Define orangesRotting function."},{line:7,text:"Queue coordinates of rotten oranges and count fresh oranges."},{line:13,text:"If no fresh oranges exist, return 0."},{line:17,text:"BFS loop, ticking minutes. Process level by level."},{line:21,text:"Check neighbors in four directions."},{line:24,text:"Rot fresh orange, decrement fresh counter, and push to queue."},{line:27,text:"Return elapsed minutes if no fresh oranges remain, otherwise -1."}]},java:{code:`public int orangesRotting(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    Queue<int[]> q = new LinkedList<>();
    int fresh = 0;
    for (int r = 0; r < m; r++) {
        for (int c = 0; c < n; c++) {
            if (grid[r][c] == 2) {
                q.add(new int[]{r, c});
            } else if (grid[r][c] == 1) {
                fresh++;
            }
        }
    }
    if (fresh == 0) return 0;
    int minutes = 0;
    int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    while (!q.isEmpty() && fresh > 0) {
        int size = q.size();
        minutes++;
        for (int i = 0; i < size; i++) {
            int[] curr = q.remove();
            for (int[] dir : dirs) {
                int nr = curr[0] + dir[0];
                int nc = curr[1] + dir[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    q.add(new int[]{nr, nc});
                }
            }
        }
    }
    return (fresh == 0) ? minutes : -1;
}`,explanation:[{line:1,text:"Declare orangesRotting method."},{line:3,text:"Initialize Queue and orange counters."},{line:14,text:"Return 0 if fresh == 0."},{line:17,text:"BFS queue loop."},{line:18,text:"Get count of rotten oranges in current wave."},{line:21,text:"Pop coordinates from queue."},{line:25,text:"Rot fresh adjacent oranges, decrement fresh count, and add to queue."},{line:33,text:"Return output status."}]}}}],Bx=[{id:70,name:"Climbing Stairs",difficulty:"Easy",topic:"DP / Fibonacci",leetcodeUrl:"https://leetcode.com/problems/climbing-stairs/",tip:"This is the Fibonacci sequence. The number of ways to reach step `n` is `ways(n-1) + ways(n-2)`. Optimize space by only tracking the last two steps.",description:"You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",chatbotData:{intuition:"To reach step `n`, you can only come from step `n-1` (by taking 1 step) or step `n-2` (by taking 2 steps). Thus, the number of ways to reach step `n` is the sum of ways to reach `n-1` and ways to reach `n-2`: `dp[n] = dp[n-1] + dp[n-2]`. This is exactly the Fibonacci sequence! We can calculate this bottom-up. Instead of storing the entire array, we just need to keep track of the ways to reach the last two steps.",complexity:`Time Complexity: O(N) because we run a loop from step 3 to N.
Space Complexity: O(1) as we only store the values of the last two steps in two variables.`,edgeCases:`1. n = 1: returns 1.
2. n = 2: returns 2.
3. Large n: fits within standard integer bounds.`,debugging:"Make sure you handle the small base cases `n <= 2` separately at the beginning of the function to avoid errors or loops."},solutions:{cpp:{code:`int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1; // ways(1)
    int prev1 = 2; // ways(2)
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}`,explanation:[{line:1,text:"Function declaration: takes steps count `n` and returns total ways."},{line:2,text:"Base cases: for 1 step there is 1 way, for 2 steps there are 2 ways: return `n`."},{line:3,text:"Initialize `prev2` to represent ways to reach step 1."},{line:4,text:"Initialize `prev1` to represent ways to reach step 2."},{line:5,text:"Loop from step 3 up to `n`."},{line:6,text:"The ways to reach the current step is the sum of ways to reach the previous two steps."},{line:7,text:"Shift `prev2` forward to the value of `prev1`."},{line:8,text:"Shift `prev1` forward to the value of `current`."},{line:10,text:"After loop ends, `prev1` holds the ways to reach step `n`: return it."}]},python:{code:`def climbStairs(n: int) -> int:
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    return prev1`,explanation:[{line:1,text:"Define climbStairs function."},{line:2,text:"Base cases."},{line:4,text:"Initialize last two values."},{line:5,text:"Loop up to n."},{line:6,text:"Sum last two steps to get current steps ways."},{line:7,text:"Shift tracking variables."},{line:9,text:"Return ways."}]},java:{code:`public int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1;
    int prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}`,explanation:[{line:1,text:"Declare method climbStairs."},{line:2,text:"Base cases return."},{line:3,text:"Set steps 1 and 2 values."},{line:5,text:"Compute values iteratively from step 3."},{line:6,text:"Add last two results."},{line:10,text:"Return answer."}]}}},{id:121,name:"Best Time to Buy and Sell Stock",difficulty:"Easy",topic:"DP / Greedy",leetcodeUrl:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",tip:"Maintain a `minPrice` variable. As you iterate, update `minPrice` if current price is lower. Otherwise, calculate profit (`price - minPrice`) and update maximum profit.",description:"You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit.",chatbotData:{intuition:"To maximize profit, we want to buy at the lowest possible price and sell at the highest possible price in the future. We iterate through the prices. We maintain `minPrice` (the lowest price we've seen so far). If the current day's price is cheaper than `minPrice`, we update it. Otherwise, if we sell on the current day, our profit would be `price - minPrice`. We update `maxProfit` if this profit is larger than our previous maximum.",complexity:`Time Complexity: O(N) since we make a single pass through the array of length N.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. Prices keep decreasing (e.g. [5, 4, 3, 2]): minPrice updates, profit is always 0, returns 0.
2. Single day: loop doesn't find a future day, profit is 0, returns 0.`,debugging:"Make sure you initialize `minPrice` to a very large value (like `INT_MAX`) so it correctly updates on the first element, and `maxProfit` to 0."},solutions:{cpp:{code:`int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;
    for (int price : prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = max(maxProfit, price - minPrice);
        }
    }
    return maxProfit;
}`,explanation:[{line:1,text:"Function declaration: takes stock prices vector, returns max profit."},{line:2,text:"Initialize `minPrice` to maximum possible integer value."},{line:3,text:"Initialize `maxProfit` to 0."},{line:4,text:"Loop through each price in the vector."},{line:5,text:"If current price is lower than the lowest seen, update `minPrice`."},{line:7,text:"Otherwise, calculate profit if we sell today, and update `maxProfit` if it's the largest."},{line:11,text:"Return the maximum profit."}]},python:{code:`def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        else:
            max_profit = max(max_profit, price - min_price)
    return max_profit`,explanation:[{line:1,text:"Define maxProfit function."},{line:2,text:"Set min price to infinity."},{line:3,text:"Set max profit to 0."},{line:4,text:"Iterate prices list."},{line:5,text:"Update min price if current price is lower."},{line:7,text:"Otherwise, calculate and update max profit."},{line:9,text:"Return profit."}]},java:{code:`public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int price : prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    return maxProfit;
}`,explanation:[{line:1,text:"Declare method maxProfit."},{line:2,text:"Initialize minPrice to `Integer.MAX_VALUE`."},{line:4,text:"Enhanced for loop across prices."},{line:5,text:"Update minPrice if current price is smaller."},{line:7,text:"Calculate and save max profit."},{line:11,text:"Return results."}]}}},{id:53,name:"Maximum Subarray",difficulty:"Medium",topic:"DP / Kadane",leetcodeUrl:"https://leetcode.com/problems/maximum-subarray/",tip:"Use Kadane's Algorithm. Maintain `currentSum` and `maxSum`. For each element, `currentSum = max(num, currentSum + num)`. Update `maxSum = max(maxSum, currentSum)`.",description:"Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",chatbotData:{intuition:"This is solved in O(N) using Kadane's Algorithm. For any index `i`, the maximum subarray sum ending at `i` is either the number itself `nums[i]` (starting a new subarray), or the sum of the previous maximum subarray plus the number `currentSum + nums[i]`. So, `currentSum = max(nums[i], currentSum + nums[i])`. We update our global maximum `maxSum` at each step.",complexity:`Time Complexity: O(N) since we make a single pass through the array of length N.
Space Complexity: O(1) auxiliary space.`,edgeCases:"1. All negative numbers (e.g. [-2, -1, -3]): max_sum correctly identifies the largest negative number (-1), because we don't default our sums to 0.",debugging:"Initialize `maxSum` to the first element `nums[0]`, not 0. If all elements in the array are negative, initializing to 0 will yield an incorrect result of 0."},solutions:{cpp:{code:`int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference, returns maximum sum."},{line:2,text:"Initialize global `maxSum` with the first element of the array."},{line:3,text:"Initialize running `currentSum` with the first element."},{line:4,text:"Loop through the rest of the array starting from index 1."},{line:5,text:"Decide whether to add the current element to the existing subarray OR start a new subarray: `max(nums[i], currentSum + nums[i])`."},{line:6,text:"Update the global maximum sum if the current subarray sum is larger."},{line:8,text:"Return the maximum subarray sum found."}]},python:{code:`def maxSubArray(nums: list[int]) -> int:
    max_sum = nums[0]
    current_sum = nums[0]
    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    return max_sum`,explanation:[{line:1,text:"Define maxSubArray function."},{line:2,text:"Initialize both variables to the first element."},{line:4,text:"Loop from index 1 to the end."},{line:5,text:"Compute new current sum."},{line:6,text:"Compute global max sum."},{line:7,text:"Return results."}]},java:{code:`public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,explanation:[{line:1,text:"Declare method maxSubArray."},{line:2,text:"Set global max to first element."},{line:3,text:"Set running max to first element."},{line:4,text:"Loop through elements starting at index 1."},{line:5,text:"Apply Kadane's recurrence relation."},{line:6,text:"Update global maximum."},{line:8,text:"Return results."}]}}},{id:62,name:"Unique Paths",difficulty:"Medium",topic:"DP / 2D",leetcodeUrl:"https://leetcode.com/problems/unique-paths/",tip:"Use a 2D DP array. The robot can only arrive at `(r, c)` from above `(r-1, c)` or left `(r, c-1)`. So, `paths[r][c] = paths[r-1][c] + paths[r][c-1]`. Optimize to 1D row array to save space.",description:"There is a robot on an `m x n` grid. The robot is initially located at the top-left corner and tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. Return the number of possible unique paths.",chatbotData:{intuition:"For any cell `(r, c)`, the robot can only arrive there by moving Down from `(r-1, c)` or moving Right from `(r, c-1)`. Therefore, the number of unique paths to `(r, c)` is: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`. The top row and leftmost column are filled with 1s because there is only one way to reach them (going straight right or straight down). We can build the rest of the grid using these base cases.",complexity:`Time Complexity: O(M * N) since we fill out the M x N grid.
Space Complexity: O(N) if we optimize the DP array to a single 1D row array (representing the previous row's paths).`,edgeCases:"1. m = 1 or n = 1: returns 1 path (robot can only go straight).",debugging:"Initialize your DP array with 1s, which naturally handles the top row and left column boundaries."},solutions:{cpp:{code:`int uniquePaths(int m, int n) {
    vector<int> row(n, 1);
    for (int r = 1; r < m; r++) {
        for (int c = 1; c < n; c++) {
            row[c] = row[c] + row[c - 1];
        }
    }
    return row[n - 1];
}`,explanation:[{line:1,text:"Function declaration: takes rows `m` and columns `n`, returns paths count."},{line:2,text:"Initialize a 1D vector `row` of size `n` with 1s. This represents the top row of the grid."},{line:3,text:"Outer loop: iterates through each row starting from row 1."},{line:4,text:"Inner loop: iterates through each column starting from column 1."},{line:5,text:"The new value `row[c]` is the sum of the value in the row above (`row[c]`) and the value to the left (`row[c-1]`)."},{line:8,text:"Return the last element of the row, representing the bottom-right corner."}]},python:{code:`def uniquePaths(m: int, n: int) -> int:
    row = [1] * n
    for r in range(1, m):
        for c in range(1, n):
            row[c] = row[c] + row[c - 1]
    return row[n - 1]`,explanation:[{line:1,text:"Define uniquePaths function."},{line:2,text:"Initialize row list with 1s."},{line:3,text:"Loop rows."},{line:4,text:"Loop columns."},{line:5,text:"Update paths count in-place."},{line:6,text:"Return last cell value."}]},java:{code:`public int uniquePaths(int m, int n) {
    int[] row = new int[n];
    Arrays.fill(row, 1);
    for (int r = 1; r < m; r++) {
        for (int c = 1; c < n; c++) {
            row[c] = row[c] + row[c - 1];
        }
    }
    return row[n - 1];
}`,explanation:[{line:1,text:"Declare method uniquePaths."},{line:2,text:"Create row array of size `n`."},{line:3,text:"Fill it with 1s."},{line:4,text:"Iterate rows."},{line:5,text:"Iterate columns, adding previous row value (`row[c]`) and left cell value (`row[c-1]`)."},{line:9,text:"Return bottom right cell value."}]}}},{id:198,name:"House Robber",difficulty:"Medium",topic:"DP",leetcodeUrl:"https://leetcode.com/problems/house-robber/",tip:"For each house, you have two choices: rob it (which means adding its value to the max profit from `i-2` houses back) or skip it (profit is max from `i-1` houses). So, `dp[i] = max(nums[i] + dp[i-2], dp[i-1])`.",description:"You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Return the maximum amount of money you can rob tonight without alerting the police.",chatbotData:{intuition:"For each house `i`, we have two options:\n1. Rob the house: we get its money `nums[i]` plus the max money we robbed up to house `i-2` (since we cannot rob adjacent house `i-1`).\n2. Skip the house: we keep the max money robbed up to house `i-1`.\nSo, the recurrence relation is: `dp[i] = max(nums[i] + dp[i-2], dp[i-1])`. We can solve this with bottom-up DP using only two variables to track the max profits of the last two steps.",complexity:`Time Complexity: O(N) since we visit each house exactly once.
Space Complexity: O(1) since we only track the last two profits.`,edgeCases:"1. No houses: returns 0.\n2. One house: returns `nums[0]`.\n3. Two houses: returns `max(nums[0], nums[1])`.",debugging:"Make sure you initialize your variables correctly: `rob1` represents `dp[i-2]` (initially 0) and `rob2` represents `dp[i-1]` (initially 0)."},solutions:{cpp:{code:`int rob(vector<int>& nums) {
    int rob1 = 0; // dp[i - 2]
    int rob2 = 0; // dp[i - 1]
    for (int num : nums) {
        int temp = max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}`,explanation:[{line:1,text:"Function declaration: takes house values vector, returns maximum cash."},{line:2,text:"Initialize `rob1` (representing max cash possible 2 houses back) to 0."},{line:3,text:"Initialize `rob2` (representing max cash possible 1 house back) to 0."},{line:4,text:"Loop through each house value `num` in the vector."},{line:5,text:"Calculate the maximum cash if we rob this house (`num + rob1`) vs if we skip it (`rob2`)."},{line:6,text:"Shift `rob1` forward to equal the value of `rob2`."},{line:7,text:"Shift `rob2` forward to the new calculated maximum."},{line:9,text:"Return the final maximum cash recorded in `rob2`."}]},python:{code:`def rob(nums: list[int]) -> int:
    rob1, rob2 = 0, 0
    for num in nums:
        temp = max(num + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    return rob2`,explanation:[{line:1,text:"Define rob function."},{line:2,text:"Set initial variables to 0."},{line:3,text:"Loop through nums."},{line:4,text:"Compute maximum of robbing current + `rob1` vs skipping (`rob2`)."},{line:5,text:"Shift variables forward."},{line:7,text:"Return max cash."}]},java:{code:`public int rob(int[] nums) {
    int rob1 = 0;
    int rob2 = 0;
    for (int num : nums) {
        int temp = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}`,explanation:[{line:1,text:"Declare method rob."},{line:2,text:"Set trackers to 0."},{line:4,text:"Iterate house cash."},{line:5,text:"Calculate decision using Math.max."},{line:6,text:"Update tracking state."},{line:9,text:"Return maximum cash."}]}}},{id:213,name:"House Robber II",difficulty:"Medium",topic:"DP / Circular",leetcodeUrl:"https://leetcode.com/problems/house-robber-ii/",tip:"Since the first and last houses are connected, you cannot rob both. Solve the problem twice: once excluding the first house, and once excluding the last house. The answer is `max(result1, result2)`.",description:"You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. Return the maximum amount of money you can rob tonight without alerting the police.",chatbotData:{intuition:"Because the houses are circular, the first house is adjacent to the last house. This means if we rob the first house, we cannot rob the last house. We can split the problem into two subproblems:\n1. Rob houses from index `0` to `n-2` (excluding the last house).\n2. Rob houses from index `1` to `n-1` (excluding the first house).\nWe run the standard House Robber I algorithm on both ranges and return the maximum of the two. This breaks the circular dependency.",complexity:`Time Complexity: O(N) because we run standard House Robber I algorithm twice on arrays of size N-1.
Space Complexity: O(1) auxiliary space.`,edgeCases:"1. Only 1 house: return `nums[0]`. (This is an important edge case because running the two-range logic on a size-1 array could fail).",debugging:"Ensure you check `nums.length == 1` at the beginning of the function to return `nums[0]` immediately. Otherwise, ranges [0, n-2] and [1, n-1] will become invalid."},solutions:{cpp:{code:`class Solution {
private:
    int robHelper(vector<int>& nums, int start, int end) {
        int rob1 = 0, rob2 = 0;
        for (int i = start; i <= end; i++) {
            int temp = max(nums[i] + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }

public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 1) return nums[0];
        return max(robHelper(nums, 0, n - 2), robHelper(nums, 1, n - 1));
    }
};`,explanation:[{line:3,text:"Helper function: runs standard House Robber DFS/DP on a specific index range `[start, end]`."},{line:4,text:"Initialize last two steps tracker."},{line:5,text:"Loop from `start` index to `end` index."},{line:6,text:"Perform the standard transition equation."},{line:14,text:"Main function."},{line:16,text:"Edge case: if there's only 1 house, return its value immediately."},{line:17,text:"Return the maximum profit of: robbing without the last house (`0` to `n-2`) vs robbing without the first house (`1` to `n-1`)."}]},python:{code:`class Solution:
    def rob(self, nums: list[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
            
        def rob_helper(start, end):
            rob1, rob2 = 0, 0
            for i in range(start, end + 1):
                temp = max(nums[i] + rob1, rob2)
                rob1 = rob2
                rob2 = temp
            return rob2
            
        return max(rob_helper(0, n - 2), rob_helper(1, n - 1))`,explanation:[{line:1,text:"Define Solution class."},{line:4,text:"If list has 1 element, return it."},{line:7,text:"Define nested helper function to run DP on index ranges."},{line:9,text:"Run DP loop from start to end index."},{line:15,text:"Return the maximum of the two subproblems (excluding last vs excluding first)."}]},java:{code:`class Solution {
    public int rob(int[] nums) {
        int n = nums.length;
        if (n == 1) return nums[0];
        return Math.max(robHelper(nums, 0, n - 2), robHelper(nums, 1, n - 1));
    }
    
    private int robHelper(int[] nums, int start, int end) {
        int rob1 = 0, rob2 = 0;
        for (int i = start; i <= end; i++) {
            int temp = Math.max(nums[i] + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:4,text:"Return first element if length is 1."},{line:5,text:"Find max of two ranges."},{line:8,text:"Helper method robHelper."},{line:10,text:"Iterate and run recurrence relation."},{line:15,text:"Return profit."}]}}},{id:300,name:"Longest Increasing Subsequence",difficulty:"Medium",topic:"DP",leetcodeUrl:"https://leetcode.com/problems/longest-increasing-subsequence/",tip:"Use a 1D DP array. `dp[i]` represents the length of the LIS ending at index `i`. For each element, look backwards at all smaller elements `j < i`, and `dp[i] = max(dp[i], dp[j] + 1)`. Initialize all `dp` values to 1.",description:"Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",chatbotData:{intuition:"We can solve this with dynamic programming. Let `dp[i]` be the length of the longest increasing subsequence that ends with the number `nums[i]`. Initially, every element on its own forms a subsequence of length 1, so we fill the `dp` array with 1s. To compute `dp[i]`, we look at all previous elements `nums[j]` where `j < i`. If `nums[j] < nums[i]`, it means we can append `nums[i]` to the subsequence ending at `j`. So, `dp[i] = max(dp[i], dp[j] + 1)`. The answer is the maximum value in `dp`.",complexity:`Time Complexity: O(N²) because we use nested loops to check all pairs of elements.
Space Complexity: O(N) to store the DP array.`,edgeCases:`1. Empty array: returns 0.
2. Decreasing array (e.g. [5,4,3]): DP values remain 1, returns 1.`,debugging:"Make sure you initialize the DP array with 1s, not 0s, since any single element is always an increasing subsequence of length 1."},solutions:{cpp:{code:`int lengthOfLIS(vector<int>& nums) {
    if (nums.empty()) return 0;
    int n = nums.size();
    vector<int> dp(n, 1);
    int maxLIS = 1;
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        maxLIS = max(maxLIS, dp[i]);
    }
    return maxLIS;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference, returns LIS length."},{line:2,text:"If the vector is empty, return 0."},{line:4,text:"Create vector `dp` of size `n` initialized to 1. `dp[i]` is LIS length ending at `i`."},{line:5,text:"Initialize `maxLIS` to 1."},{line:6,text:"Outer loop: iterate `i` from 1 to `n - 1`."},{line:7,text:"Inner loop: scan `j` from 0 to `i - 1`."},{line:8,text:"If previous element `nums[j]` is smaller than current element `nums[i]`."},{line:9,text:"Extend LIS at `j`: update `dp[i]` with the maximum of its current value vs `dp[j] + 1`."},{line:12,text:"Update the global LIS maximum."},{line:14,text:"Return `maxLIS`."}]},python:{code:`def lengthOfLIS(nums: list[int]) -> int:
    if not nums:
        return 0
    n = len(nums)
    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)`,explanation:[{line:1,text:"Define lengthOfLIS function."},{line:2,text:"Handle empty array case."},{line:5,text:"Initialize DP list with 1s."},{line:6,text:"Iterate outer index `i`."},{line:7,text:"Iterate inner index `j` up to `i`."},{line:8,text:"If `nums[j] < nums[i]`, update DP value."},{line:10,text:"Return the maximum value present in the DP list."}]},java:{code:`public int lengthOfLIS(int[] nums) {
    if (nums.length == 0) return 0;
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    int maxLIS = 1;
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLIS = Math.max(maxLIS, dp[i]);
    }
    return maxLIS;
}`,explanation:[{line:1,text:"Declare method lengthOfLIS."},{line:2,text:"Handle zero length."},{line:4,text:"Initialize DP array and fill with 1."},{line:7,text:"Loop through outer pointer `i`."},{line:8,text:"Loop through inner pointer `j`."},{line:9,text:"Compare values and set DP transition."},{line:13,text:"Save the maximum LIS length."},{line:15,text:"Return maximum."}]}}},{id:322,name:"Coin Change",difficulty:"Medium",topic:"DP / BFS",leetcodeUrl:"https://leetcode.com/problems/coin-change/",tip:"Use a 1D DP array. `dp[i]` represents the min coins needed to make amount `i`. For each amount, iterate through the coins: `dp[i] = min(dp[i], dp[i - coin] + 1)`. Initialize `dp` with a large value.",description:"You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up by any combination of the coins, return `-1`.",chatbotData:{intuition:"Let `dp[i]` be the minimum coins needed to make amount `i`. The base case is `dp[0] = 0` (0 coins to make amount 0). For any amount `i`, we can try taking every coin in our list. If we take a coin of value `c`, the remaining amount is `i - c`. The coins needed would be `1 + dp[i - c]`. We want the minimum over all coins: `dp[i] = min(dp[i], dp[i - c] + 1)`. We initialize the DP array with a value larger than the amount (like `amount + 1`) to represent infinity.",complexity:`Time Complexity: O(Amount * C) where C is the number of coin types. We run a loop up to Amount and check each coin.
Space Complexity: O(Amount) to store the DP array.`,edgeCases:"1. Amount is 0: returns 0.\n2. Amount cannot be reached: DP value remains `amount + 1`, returns -1.",debugging:"Initialize `dp` array with size `amount + 1` filled with `amount + 1` (a value representing infinity), and set `dp[0] = 0`."},solutions:{cpp:{code:`int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i - coin >= 0) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return (dp[amount] > amount) ? -1 : dp[amount];
}`,explanation:[{line:1,text:"Function declaration: takes coins list and target amount, returns coin count or -1."},{line:2,text:"Create vector `dp` of size `amount + 1` initialized to `amount + 1` (representing infinity)."},{line:3,text:"Base case: 0 coins are needed to make amount 0."},{line:4,text:"Outer loop: iterate through each amount `i` from 1 to `amount`."},{line:5,text:"Inner loop: iterate through each coin value."},{line:6,text:"If the coin value is smaller than or equal to the current amount `i`."},{line:7,text:"Update `dp[i]` with the minimum of its current value vs `dp[i - coin] + 1`."},{line:11,text:"If `dp[amount]` is still the initialized value, the amount is unreachable: return -1. Otherwise, return `dp[amount]`."}]},python:{code:`def coinChange(coins: list[int], amount: int) -> int:
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] <= amount else -1`,explanation:[{line:1,text:"Define coinChange function."},{line:2,text:"Create DP list initialized to `amount + 1` representing infinity."},{line:3,text:"Set amount 0 cost to 0."},{line:4,text:"Loop amounts from 1 to `amount`."},{line:5,text:"Check each coin."},{line:6,text:"If coin can fit, update minimum count."},{line:8,text:"Return answer, check if unreachable."}]},java:{code:`public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return (dp[amount] > amount) ? -1 : dp[amount];
}`,explanation:[{line:1,text:"Declare method coinChange."},{line:2,text:"Initialize DP array."},{line:3,text:"Fill with infinity value."},{line:4,text:"Set base case `dp[0] = 0`."},{line:5,text:"Iterate amounts."},{line:6,text:"Iterate coin types."},{line:7,text:"Update DP transitions."},{line:12,text:"Evaluate return results."}]}}},{id:416,name:"Partition Equal Subset Sum",difficulty:"Medium",topic:"DP / Knapsack",leetcodeUrl:"https://leetcode.com/problems/partition-equal-subset-sum/",tip:"If the total sum is odd, return false (cannot partition equally). Otherwise, search for a subset that sums to `target = total_sum / 2`. This is a 0/1 Knapsack problem solved using a 1D DP boolean array.",description:"Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal, or `false` otherwise.",chatbotData:{intuition:"Partitioning an array into two subsets of equal sum means each subset must sum to exactly `TotalSum / 2`. If `TotalSum` is odd, it is impossible, so we return false immediately. Otherwise, our `target` is `TotalSum / 2`. We want to find if there is a subset in the array that sums to `target`. We use a boolean DP array of size `target + 1` where `dp[i]` is true if amount `i` can be formed. We initialize `dp[0] = true`. For each number `num` in the array, we iterate backwards and update `dp[i] = dp[i] || dp[i - num]`.",complexity:"Time Complexity: O(N * Target) where N is array size and Target is `TotalSum / 2`.\nSpace Complexity: O(Target) to store the boolean DP table.",edgeCases:`1. Total sum is odd: returns false immediately.
2. Single element: total sum is odd or target is unreachable, returns false.`,debugging:"When updating the DP table for a number `num`, you MUST loop backwards from `target` down to `num` `for (int i = target; i >= num; i--)`. If you loop forwards, you will reuse the same number multiple times (like in the Unbounded Knapsack problem), which violates the condition that each element can only be used once."},solutions:{cpp:{code:`bool canPartition(vector<int>& nums) {
    int sum = 0;
    for (int num : nums) sum += num;
    if (sum % 2 != 0) return false;
    int target = sum / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums) {
        for (int i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[target];
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference, returns boolean."},{line:2,text:"Calculate the total sum of the array elements."},{line:4,text:"If the total sum is odd, we cannot divide it into two equal integer subsets: return false."},{line:5,text:"Set our subset target sum to `sum / 2`."},{line:6,text:"Create a boolean vector `dp` of size `target + 1` initialized to `false`."},{line:7,text:"Base case: sum of 0 is always achievable (empty subset)."},{line:8,text:"Loop through each number `num` in the array."},{line:9,text:"Loop backwards from `target` down to `num` to prevent using the same number twice."},{line:10,text:"Update `dp[i]` to be true if we can form sum `i` without `num` OR by adding `num` to subset sum `i - num`."},{line:13,text:"Return whether the target sum is achievable."}]},python:{code:`def canPartition(nums: list[int]) -> bool:
    total_sum = sum(nums)
    if total_sum % 2 != 0:
        return False
    target = total_sum // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for i in range(target, num - 1, -1):
            dp[i] = dp[i] or dp[i - num]
    return dp[target]`,explanation:[{line:1,text:"Define canPartition function."},{line:2,text:"Sum array elements."},{line:3,text:"Return False if sum is odd."},{line:5,text:"Set target sum."},{line:6,text:"Create boolean DP list."},{line:7,text:"Set base case `dp[0] = True`."},{line:8,text:"Iterate nums."},{line:9,text:"Loop backwards from target to num to avoid duplicate element usage."},{line:11,text:"Return target achievement status."}]},java:{code:`public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) sum += num;
    if (sum % 2 != 0) return false;
    int target = sum / 2;
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    for (int num : nums) {
        for (int i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[target];
}`,explanation:[{line:1,text:"Declare method canPartition."},{line:4,text:"Check odd sum."},{line:5,text:"Define target."},{line:6,text:"Create boolean DP table."},{line:7,text:"Set `dp[0] = true`."},{line:8,text:"Loop elements."},{line:9,text:"Loop backwards through targets."},{line:13,text:"Return answer."}]}}},{id:1143,name:"Longest Common Subsequence",difficulty:"Medium",topic:"DP / 2D",leetcodeUrl:"https://leetcode.com/problems/longest-common-subsequence/",tip:"Use a 2D DP table of size `(m+1) x (n+1)`. If `text1[i-1] == text2[j-1]`, then `dp[i][j] = dp[i-1][j-1] + 1`. Otherwise, `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.",description:"Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.",chatbotData:{intuition:"Let `dp[i][j]` be the length of the longest common subsequence of prefixes `text1[0...i-1]` and `text2[0...j-1]`. We build the table bottom-up:\n1. If characters match (`text1[i-1] == text2[j-1]`), they contribute to the subsequence: `dp[i][j] = 1 + dp[i-1][j-1]` (1 plus the LCSC length excluding these characters).\n2. If they don't match, we take the best we can get by either ignoring `text1`'s character or `text2`'s character: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.",complexity:`Time Complexity: O(M * N) since we fill out a M x N grid. M and N are the lengths of the two strings.
Space Complexity: O(M * N) to store the 2D DP table.`,edgeCases:`1. No matching characters: returns 0.
2. One string is empty: returns 0.`,debugging:"Note that index `i` in the DP table maps to character index `i-1` in the string (due to 1-based indexing for DP table to accommodate empty string base case)."},solutions:{cpp:{code:`int longestCommonSubsequence(string text1, string text2) {
    int m = text1.length();
    int n = text2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}`,explanation:[{line:1,text:"Function declaration: takes two strings and returns the LCS length."},{line:2,text:"Get length of `text1` as `m`."},{line:3,text:"Get length of `text2` as `n`."},{line:4,text:"Declare 2D vector `dp` of size `(m + 1) x (n + 1)` initialized to 0."},{line:5,text:"Outer loop: iterate `i` from 1 to `m`."},{line:6,text:"Inner loop: iterate `j` from 1 to `n`."},{line:7,text:"If characters in both strings match (at indices `i-1` and `j-1` due to DP table offset)."},{line:8,text:"Add 1 to the diagonal value: `dp[i - 1][j - 1] + 1`."},{line:10,text:"If they don't match, take the maximum of skipping character in `text1` (`dp[i - 1][j]`) or in `text2` (`dp[i][j - 1]`)."},{line:14,text:"Return the bottom-right cell value, which holds the final LCS length."}]},python:{code:`def longestCommonSubsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,explanation:[{line:1,text:"Define longestCommonSubsequence function."},{line:2,text:"Find lengths."},{line:3,text:"Initialize 2D list with 0s."},{line:4,text:"Iterate rows from 1 to `m`."},{line:5,text:"Iterate cols from 1 to `n`."},{line:6,text:"If characters match, increment diagonal value."},{line:9,text:"If characters mismatch, take max of top or left cell."},{line:10,text:"Return answer."}]},java:{code:`public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}`,explanation:[{line:1,text:"Declare method longestCommonSubsequence."},{line:2,text:"Get string sizes."},{line:3,text:"Create 2D DP array."},{line:4,text:"Iterate string indices."},{line:6,text:"Compare characters using `charAt`. If equal, add 1 to diagonal value."},{line:9,text:"If unequal, set cell to max of left or top."},{line:13,text:"Return bottom right cell."}]}}}],Hx=[{id:39,name:"Combination Sum",difficulty:"Medium",topic:"Backtracking",leetcodeUrl:"https://leetcode.com/problems/combination-sum/",tip:"Use DFS Backtracking. In each step, you can either include the current candidate (allowing repetition by staying at index `i`) or skip it (move to index `i+1`). Base cases are `target == 0` (success) and `target < 0` (fail).",description:"Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.",chatbotData:{intuition:"We can visualize the search space as a decision tree. At each node, we choose whether to add the candidate at the current index to our combination. If we add it, we subtract its value from target, and recursively search *starting from the same index* (since we can reuse the same candidate). If we skip it, we move to the next candidate. We backtrack by popping the last added candidate to restore state.",complexity:`Time Complexity: O(2^T) where T is the target value. The height of the decision tree is at most target / min_candidate.
Space Complexity: O(T/min_candidate) to store the current combination and recursion stack.`,edgeCases:`1. Empty candidates: returns empty array.
2. Target is smaller than any candidate: returns empty array.`,debugging:"When backtracking, make sure you pop the element from your current path list (`path.pop_back()` or `path.pop()`) *after* the recursive call returns, to keep the path state correct for other search branches."},solutions:{cpp:{code:`class Solution {
private:
    void backtrack(int i, vector<int>& candidates, int target, vector<int>& current, vector<vector<int>>& result) {
        if (target == 0) {
            result.push_back(current);
            return;
        }
        if (i >= candidates.size() || target < 0) {
            return;
        }
        // Option 1: Choose the candidate at index i
        current.push_back(candidates[i]);
        backtrack(i, candidates, target - candidates[i], current, result);
        current.pop_back(); // backtrack
        
        // Option 2: Skip the candidate and move to next index
        backtrack(i + 1, candidates, target, current, result);
    }

public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(0, candidates, target, current, result);
        return result;
    }
};`,explanation:[{line:3,text:"DFS backtracking helper function. `i` is current candidate index, `target` is remaining target, `current` is active path."},{line:4,text:"Base case: if remaining target is 0, we found a valid combination: save it."},{line:8,text:"Base case: if we run out of candidates OR target becomes negative (overshoot), terminate branch."},{line:12,text:"Choose the current candidate: add it to our path."},{line:13,text:"Recurse, subtracting candidate value from target. We pass index `i` (not `i + 1`) to allow reuse."},{line:14,text:"Backtrack: remove the candidate from our path to restore state for other options."},{line:17,text:"Choose to skip the current candidate and move to next index `i + 1`."},{line:21,text:"Main function: initializes search variables and returns result list."}]},python:{code:`class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        result = []
        
        def backtrack(i, current, total):
            if total == target:
                result.append(list(current))
                return
            if i >= len(candidates) or total > target:
                return
            
            # Option 1: Choose candidate
            current.append(candidates[i])
            backtrack(i, current, total + candidates[i])
            current.pop() # backtrack
            
            # Option 2: Skip candidate
            backtrack(i + 1, current, total)
            
        backtrack(0, [], 0)
        return result`,explanation:[{line:1,text:"Define Solution class."},{line:3,text:"Initialize output list."},{line:5,text:"Define recursive backtracking helper with target tracker `total`."},{line:6,text:"If `total` matches target, append a copy of `current` to results."},{line:9,text:"If invalid path, exit recursive branch."},{line:13,text:"Choose element: append it, run recursion, then pop to backtrack."},{line:18,text:"Skip element: call recursion with index `i + 1`."}]},java:{code:`class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(0, candidates, target, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int i, int[] candidates, int target, List<Integer> current, List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        if (i >= candidates.length || target < 0) return;
        
        current.add(candidates[i]);
        backtrack(i, candidates, target - candidates[i], current, result);
        current.remove(current.size() - 1);
        
        backtrack(i + 1, candidates, target, current, result);
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:2,text:"Main method returning combination lists."},{line:8,text:"Backtracking helper method."},{line:9,text:"On success, add a copy of the path `new ArrayList<>(current)` to results."},{line:15,text:"Add element, recurse, then remove last element to backtrack."},{line:19,text:"Recurse on next index."}]}}},{id:46,name:"Permutations",difficulty:"Medium",topic:"Backtracking",leetcodeUrl:"https://leetcode.com/problems/permutations/",tip:"Use backtracking. Track visited numbers using a boolean array or set. Loop through candidates, choosing unvisited numbers, recursing, and unchoosing them.",description:"Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",chatbotData:{intuition:"To form all permutations of size N, we must place each number in every position. We write a backtracking function. We maintain a list of numbers in our `current` permutation path. In each recursive call, we loop through all numbers in `nums`. If a number is already in our path, we skip it. If not, we add it, recurse to fill the next position, and then backtrack by popping it.",complexity:`Time Complexity: O(N * N!) since there are N! permutations, and creating a copy of each takes O(N) time.
Space Complexity: O(N) to store the recursion stack and path array.`,edgeCases:"1. Size 1 array: returns [[element]].",debugging:"Do not forget to copy/clone the path list when appending to the final result, otherwise you will append references that get modified in subsequent backtracking steps."},solutions:{cpp:{code:`class Solution {
private:
    void backtrack(vector<int>& nums, vector<bool>& used, vector<int>& current, vector<vector<int>>& result) {
        if (current.size() == nums.size()) {
            result.push_back(current);
            return;
        }
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;
            used[i] = true;
            current.push_back(nums[i]);
            backtrack(nums, used, current, result);
            current.pop_back(); // backtrack
            used[i] = false;
        }
    }

public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        vector<bool> used(nums.size(), false);
        backtrack(nums, used, current, result);
        return result;
    }
};`,explanation:[{line:3,text:"DFS backtracking helper: takes candidates, visited states, current path, and result accumulator."},{line:4,text:"Base case: if the path length matches candidate length, we formed a full permutation: save it."},{line:8,text:"Loop through all numbers in `nums`."},{line:9,text:"If the number is already used in our current path, skip it."},{line:10,text:"Mark the number as used."},{line:11,text:"Add the number to `current` path."},{line:12,text:"Recursively build the rest of the permutation."},{line:13,text:"Backtrack: remove the number from path."},{line:14,text:"Mark the number as unused for other branches."}]},python:{code:`def permute(nums: list[int]) -> list[list[int]]:
    result = []
    
    def backtrack(current):
        if len(current) == len(nums):
            result.append(list(current))
            return
        for num in nums:
            if num not in current:
                current.append(num)
                backtrack(current)
                current.pop() # backtrack
                
    backtrack([])
    return result`,explanation:[{line:1,text:"Define permute function."},{line:4,text:"Define helper: uses list containment `num not in current` to check visited state."},{line:5,text:"Save copy if full permutation is formed."},{line:10,text:"Choose, recurse, and pop to backtrack."}]},java:{code:`class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, new boolean[nums.length], new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int[] nums, boolean[] used, List<Integer> current, List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            current.add(nums[i]);
            backtrack(nums, used, current, result);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:4,text:"Call backtracking helper with a boolean visited array."},{line:9,text:"Save a copy of path if complete."},{line:13,text:"Loop through nodes: mark used, add to list, recurse, backtrack."}]}}},{id:78,name:"Subsets",difficulty:"Medium",topic:"Backtracking",leetcodeUrl:"https://leetcode.com/problems/subsets/",tip:"Use backtracking. At each index, you have two choices: either include the current element in your subset and recurse, or skip it and recurse. (This builds the power set).",description:"Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",chatbotData:{intuition:"For each element in the array, we can choose to either include it in our subset or exclude it. This forms a decision tree of height N where each level represents an element. The leaf nodes of this tree represent all possible subsets (size 2^N). We write a DFS function `backtrack(i)` that explores both decisions: including `nums[i]` (adds to path, recurses, pops) and excluding it (recurses directly).",complexity:`Time Complexity: O(N * 2^N) because there are 2^N subsets, and copying each subset to result takes O(N) time.
Space Complexity: O(N) for the recursion stack.`,edgeCases:"1. Empty array: returns [[]].",debugging:"Make sure you increment the index parameter `i + 1` in both recursive branches (include and exclude) to move down the tree level."},solutions:{cpp:{code:`class Solution {
private:
    void backtrack(int i, vector<int>& nums, vector<int>& current, vector<vector<int>>& result) {
        if (i == nums.size()) {
            result.push_back(current);
            return;
        }
        // Option 1: Include nums[i]
        current.push_back(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.pop_back(); // backtrack
        
        // Option 2: Exclude nums[i]
        backtrack(i + 1, nums, current, result);
    }

public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(0, nums, current, result);
        return result;
    }
};`,explanation:[{line:3,text:"Helper function: takes current index `i`, inputs, current subset path, and results vector."},{line:4,text:"Base case: if index reaches end of array, we've decided on all elements: save subset."},{line:8,text:"Include: add `nums[i]` to path."},{line:10,text:"Recurse on next index `i + 1`."},{line:11,text:"Backtrack: remove `nums[i]`."},{line:14,text:"Exclude: run recursion on next index `i + 1` without adding `nums[i]`."}]},python:{code:`def subsets(nums: list[int]) -> list[list[int]]:
    result = []
    
    def backtrack(i, current):
        if i == len(nums):
            result.append(list(current))
            return
        # Include nums[i]
        current.append(nums[i])
        backtrack(i + 1, current)
        current.pop() # backtrack
        
        # Exclude nums[i]
        backtrack(i + 1, current)
        
    backtrack(0, [])
    return result`,explanation:[{line:1,text:"Define subsets function."},{line:4,text:"Define backtracking helper."},{line:5,text:"Save copy if index reaches list end."},{line:8,text:"Option 1: choose element, recurse, pop."},{line:13,text:"Option 2: skip element, recurse."}]},java:{code:`class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(0, nums, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int i, int[] nums, List<Integer> current, List<List<Integer>> result) {
        if (i == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        current.add(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.remove(current.size() - 1);
        
        backtrack(i + 1, nums, current, result);
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:4,text:"Call backtracking helper."},{line:9,text:"Add copy of subset when list index reaches the end."},{line:13,text:"Choose, recurse, backtrack, then recurse skip branch."}]}}},{id:79,name:"Word Search",difficulty:"Medium",topic:"Backtracking / DFS",leetcodeUrl:"https://leetcode.com/problems/word-search/",tip:"Use DFS Backtracking. From each grid cell, search for the word. Temp-mark the cell as visited (e.g. char `#`) before recursing, then restore its original character after backtracking.",description:"Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.",chatbotData:{intuition:"We scan the grid. If a cell matches the first letter of `word`, we start a DFS backtracking search from there. Our DFS matches the next character of the word in all 4 neighbor directions. To avoid using the same cell twice in a path, we temporarily mark the current cell as visited (e.g., replace it with `#`) before recurse calls. Once the recursive searches finish, we restore the original character (backtrack). If index reaches `word.length()`, we successfully matched the word.",complexity:`Time Complexity: O(M * N * 3^L) where M x N is board size and L is word length. At each cell, we search 3 directions (excluding the cell we came from).
Space Complexity: O(L) representing the DFS call stack.`,edgeCases:`1. Single cell matching: returns true.
2. Path intersects itself: backtracking visited marker prevents reusing cells, handled correctly.`,debugging:"Remember to restore `board[r][c] = temp` (backtrack) before returning from the function. If you skip this, cells will remain blocked for other searches."},solutions:{cpp:{code:`class Solution {
private:
    bool dfs(vector<vector<char>>& board, string& word, int r, int c, int index) {
        if (index == word.length()) return true;
        int m = board.size(), n = board[0].size();
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word[index]) return false;
        
        char temp = board[r][c];
        board[r][c] = '#'; // mark visited
        
        bool found = dfs(board, word, r - 1, c, index + 1) ||
                     dfs(board, word, r + 1, c, index + 1) ||
                     dfs(board, word, r, c - 1, index + 1) ||
                     dfs(board, word, r, c + 1, index + 1);
                     
        board[r][c] = temp; // backtrack
        return found;
    }

public:
    bool exist(vector<vector<char>>& board, string word) {
        for (int r = 0; r < board.size(); r++) {
            for (int c = 0; c < board[0].size(); c++) {
                if (dfs(board, word, r, c, 0)) return true;
            }
        }
        return false;
    }
};`,explanation:[{line:3,text:"Helper DFS function: checks if `word` exists starting from cell (r, c) matching characters from `index`."},{line:4,text:"Base case: if index matches word length, the entire word has been found: return true."},{line:6,text:"Base case: return false if out of bounds OR cell character doesn't match current word character."},{line:8,text:"Save cell value to `temp`."},{line:9,text:"Mark cell visited by replacing its character with `#`."},{line:11,text:"Recursively check all four directions for the next character (`index + 1`). If any direction succeeds, set `found` to true."},{line:16,text:"Backtrack: restore the original character saved in `temp`."},{line:17,text:"Return search result."},{line:22,text:"Main loops to find starting cell."}]},python:{code:`class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        m, n = len(board), len(board[0])
        
        def dfs(r, c, index):
            if index == len(word):
                return True
            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:
                return False
            
            temp = board[r][c]
            board[r][c] = '#'
            found = dfs(r - 1, c, index + 1) or \\
                    dfs(r + 1, c, index + 1) or \\
                    dfs(r, c - 1, index + 1) or \\
                    dfs(r, c + 1, index + 1)
            board[r][c] = temp
            return found
            
        for r in range(m):
            for c in range(n):
                if dfs(r, c, 0):
                    return True
        return False`,explanation:[{line:1,text:"Define Solution class."},{line:3,text:"Get dimensions."},{line:5,text:"Define DFS search helper."},{line:6,text:"Return True if index matches word length."},{line:8,text:"Verify bounds and mismatch."},{line:11,text:"Save character, mark visited with `#`, recurse neighbors, and restore character."}]},java:{code:`class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                if (dfs(board, word, r, c, 0)) return true;
            }
        }
        return false;
    }
    
    private boolean dfs(char[][] board, String word, int r, int c, int index) {
        if (index == word.length()) return true;
        int m = board.length, n = board[0].length;
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word.charAt(index)) return false;
        char temp = board[r][c];
        board[r][c] = '#';
        boolean found = dfs(board, word, r - 1, c, index + 1) ||
                        dfs(board, word, r + 1, c, index + 1) ||
                        dfs(board, word, r, c - 1, index + 1) ||
                        dfs(board, word, r, c + 1, index + 1);
        board[r][c] = temp;
        return found;
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:4,text:"Scan cells to find starting cell."},{line:12,text:"DFS backtracking helper method."},{line:13,text:"On word end reached, return true."},{line:15,text:"Verify valid coordinates and matches character at index using `charAt`."},{line:16,text:"Save value, mark visited, search neighbors, and restore state."}]}}},{id:131,name:"Palindrome Partitioning",difficulty:"Medium",topic:"Backtracking",leetcodeUrl:"https://leetcode.com/problems/palindrome-partitioning/",tip:"Use backtracking. Loop through indices to find prefix substrings. If the prefix `s[start...i]` is a palindrome, add it to your path and recurse from index `i + 1`. Pop to backtrack.",description:"Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.",chatbotData:{intuition:"We want to split the string into parts that are all palindromes. We write a backtracking function `backtrack(start)`. We iterate through index `i` from `start` to `end`. At each step, we look at the prefix `s[start...i]`. If this prefix is a palindrome, we add it to our path, and recursively partition the remaining string `s[i+1...end]`. When we reach the end of the string, we save a copy of our path.",complexity:`Time Complexity: O(N * 2^N) because there are 2^(N-1) possible partition structures, and checking if a substring is a palindrome takes O(N).
Space Complexity: O(N) representing the recursive stack.`,edgeCases:`1. Empty string: returns [[]].
2. String with all unique characters: only size-1 partitions are returned.`,debugging:"Verify that your palindrome check helper function correctly handles single characters and boundaries."},solutions:{cpp:{code:`class Solution {
private:
    bool isPalindrome(string& s, int l, int r) {
        while (l < r) {
            if (s[l] != s[r]) return false;
            l++; r--;
        }
        return true;
    }
    
    void backtrack(int start, string& s, vector<string>& current, vector<vector<string>>& result) {
        if (start == s.length()) {
            result.push_back(current);
            return;
        }
        for (int i = start; i < s.length(); i++) {
            if (isPalindrome(s, start, i)) {
                current.push_back(s.substr(start, i - start + 1));
                backtrack(i + 1, s, current, result);
                current.pop_back(); // backtrack
            }
        }
    }

public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> result;
        vector<string> current;
        backtrack(0, s, current, result);
        return result;
    }
};`,explanation:[{line:3,text:"Helper function: returns true if substring `s[l...r]` is a palindrome."},{line:11,text:"DFS backtracking helper: `start` is beginning index, `current` is list of partitions."},{line:12,text:"Base case: if start index reaches the end of the string, we successfully partitioned the whole string: save it."},{line:16,text:"Loop through possible ending indices `i` for our prefix."},{line:17,text:"If the prefix `s[start...i]` is a palindrome."},{line:18,text:"Extract the substring and add it to `current` path."},{line:19,text:"Recursively search starting from next character index `i + 1`."},{line:20,text:"Backtrack: remove the substring to explore other divisions."}]},python:{code:`class Solution:
    def partition(self, s: str) -> list[list[str]]:
        result = []
        
        def is_palindrome(sub):
            return sub == sub[::-1]
            
        def backtrack(start, current):
            if start == len(s):
                result.append(list(current))
                return
            for i in range(start, len(s)):
                prefix = s[start:i+1]
                if is_palindrome(prefix):
                    current.append(prefix)
                    backtrack(i + 1, current)
                    current.pop() # backtrack
                    
        backtrack(0, [])
        return result`,explanation:[{line:1,text:"Define Solution class."},{line:5,text:"Define palindrome checker using slice syntax `sub == sub[::-1]`."},{line:8,text:"Define backtracking helper."},{line:14,text:"Check if prefix is palindrome. If yes, append, recurse, and pop."}]},java:{code:`class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrack(0, s, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int start, String s, List<String> current, List<List<String>> result) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }
        for (int i = start; i < s.length(); i++) {
            if (isPalindrome(s, start, i)) {
                current.add(s.substring(start, i + 1));
                backtrack(i + 1, s, current, result);
                current.remove(current.size() - 1);
            }
        }
    }
    
    private boolean isPalindrome(String s, int l, int r) {
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) return false;
            l++; r--;
        }
        return true;
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:4,text:"Call backtracking helper."},{line:9,text:"Add copy of partition list on reaching end."},{line:13,text:"Loop partitions, check palindrome, add substring, recurse, backtrack."},{line:22,text:"Helper method isPalindrome."}]}}},{id:215,name:"Kth Largest Element",difficulty:"Medium",topic:"Heap",leetcodeUrl:"https://leetcode.com/problems/kth-largest-element-in-an-array/",tip:"Use a Min-Heap (priority queue) of size `k`. Push elements onto the heap. If heap size exceeds `k`, pop the smallest element. At the end, the top of the heap is the k-th largest element.",description:"Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.",chatbotData:{intuition:"Instead of sorting the entire array (O(N log N)), we can use a Min-Heap to find the Kth largest element in O(N log K) time. We maintain a Min-Heap of size at most `K`. When we push a number onto the heap, if the heap size exceeds `K`, we pop the smallest element (the root). By popping the smallest elements, the heap will always keep the `K` largest elements seen so far. At the end of the array, the smallest element of these `K` largest elements (which is the root at the top of the Min-Heap) is our answer.",complexity:`Time Complexity: O(N log K) since heap insertions/deletions take O(log K) time for N elements.
Space Complexity: O(K) to store K elements in the Min-Heap.`,edgeCases:`1. K = 1: returns the maximum element.
2. K = N: returns the minimum element.`,debugging:"Ensure you use a Min-Heap (keeps smallest elements at the top) rather than a Max-Heap (keeps largest elements at the top), because we want to discard small elements and keep the largest ones."},solutions:{cpp:{code:`int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    return minHeap.top();
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference and target k, returns value."},{line:2,text:"Declare a Min-Heap using `std::greater` comparator in `priority_queue`."},{line:3,text:"Loop through each number `num` in the array."},{line:4,text:"Push the current number onto our heap."},{line:5,text:"If the heap size grows larger than `k`."},{line:6,text:"Pop the smallest element from the top of the heap."},{line:9,text:"Return the top of the heap, which is the smallest of the k largest elements (the kth largest)."}]},python:{code:`import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]`,explanation:[{line:1,text:"Import `heapq` module."},{line:3,text:"Define findKthLargest function."},{line:4,text:"Initialize empty heap list."},{line:6,text:"Push number onto the heap (heapq treats lists as Min-Heaps by default)."},{line:7,text:"If heap size exceeds `k`, pop the smallest element."},{line:9,text:"Return the root element `min_heap[0]`."}]},java:{code:`public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // default is Min-Heap
    for (int num : nums) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return minHeap.peek();
}`,explanation:[{line:1,text:"Declare method findKthLargest."},{line:2,text:"Create a PriorityQueue (defaults to a Min-Heap in Java)."},{line:3,text:"Loop through array elements."},{line:4,text:"Add element to heap."},{line:5,text:"Evict smallest element if size exceeds `k`."},{line:9,text:"Return root element (`peek()`)."}]}}},{id:347,name:"Top K Frequent Elements",difficulty:"Medium",topic:"Heap / HashMap",leetcodeUrl:"https://leetcode.com/problems/top-k-frequent-elements/",tip:"Count character frequencies using a Hash Map. Push `(frequency, number)` pairs onto a Min-Heap of size `k`. Evict elements when size exceeds `k`. Extract numbers from heap at the end.",description:"Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",chatbotData:{intuition:"First, we count the frequencies of all numbers in a Hash Map `num -> frequency`. Then we want to find the `K` elements with the highest frequencies. We can use a Min-Heap of size `K`, where we store pairs of `(frequency, number)`. We push each map entry onto the heap. If heap size exceeds `K`, we pop the entry with the lowest frequency. The heap will end up with the `K` most frequent items.",complexity:`Time Complexity: O(N log K) since we insert up to N unique elements into a heap of size at most K.
Space Complexity: O(N) to store frequencies in the Hash Map.`,edgeCases:"1. K equals the count of unique elements: returns all unique elements.",debugging:"When defining the heap elements, make sure the comparison is based on the frequency, not the number itself. In C++/Java, use custom comparators or pair structures."},solutions:{cpp:{code:`vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> counts;
    for (int num : nums) counts[num]++;
    
    // Min-heap: pair<frequency, value>
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
    for (auto const& [val, count] : counts) {
        minHeap.push({count, val});
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top().second);
        minHeap.pop();
    }
    return result;
}`,explanation:[{line:1,text:"Function declaration: takes array and k, returns vector of top k frequent elements."},{line:2,text:"Populate frequency mapping `counts` for each number."},{line:6,text:"Declare Min-Heap storing `pair<frequency, value>`. Pairs sort by first element (frequency) automatically."},{line:7,text:"Iterate through each entry in the map."},{line:8,text:"Push pair of `{count, val}` onto the heap."},{line:9,text:"If heap size exceeds `k`, pop the pair with the lowest frequency."},{line:13,text:"Declare result vector."},{line:14,text:"Extract the value (`pair.second`) from remaining items in heap."}]},python:{code:`def topKFrequent(nums: list[int], k: int) -> list[int]:
    counts = {}
    for num in nums:
        counts[num] = counts.get(num, 0) + 1
    
    # min-heap: (frequency, value)
    min_heap = []
    for val, freq in counts.items():
        heapq.heappush(min_heap, (freq, val))
        if len(min_heap) > k:
            heapq.heappop(min_heap)
            
    return [item[1] for item in min_heap]`,explanation:[{line:1,text:"Define topKFrequent function."},{line:2,text:"Count frequencies in dictionary."},{line:7,text:"Initialize empty heap list."},{line:8,text:"Push `(freq, val)` tuples onto the heap."},{line:10,text:"Evict smallest frequency element when size exceeds `k`."},{line:13,text:"Extract values from remaining heap items."}]},java:{code:`public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> counts = new HashMap<>();
    for (int num : nums) counts.put(num, counts.getOrDefault(num, 0) + 1);
    
    // Compare entries by their frequency value
    PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    for (Map.Entry<Integer, Integer> entry : counts.entrySet()) {
        minHeap.add(new int[]{entry.getValue(), entry.getKey()});
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
        result[i] = minHeap.poll()[1];
    }
    return result;
}`,explanation:[{line:1,text:"Declare method topKFrequent."},{line:2,text:"Populate frequency map."},{line:6,text:"Create PriorityQueue of size-2 arrays using custom lambda comparator comparing by index 0 (frequency)."},{line:7,text:"Add map entries to heap, enforcing size limits."},{line:13,text:"Create result array of size `k`."},{line:14,text:"Poll heap elements and save values to result."}]}}},{id:208,name:"Implement Trie",difficulty:"Medium",topic:"Trie / Design",leetcodeUrl:"https://leetcode.com/problems/implement-trie-prefix-tree/",tip:"A TrieNode has an array/map of child pointers (size 26) and a boolean `isEndOfWord`. To insert/search, traverse down child nodes matching the word's characters.",description:"A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the `Trie` class.",chatbotData:{intuition:"A Trie (Prefix Tree) is a tree structure where each node represents a character. It allows word search and prefix search in O(WordLength) time. Each `TrieNode` has an array of child nodes (size 26 for standard lowercase English letters) and a boolean flag `isEndOfWord`. To insert a word, we start at root and traverse down. If a character node doesn't exist, we create it. At the last character, we set `isEndOfWord = true`. Search traverses similarly and checks the end flag. Prefix search just checks if the path exists.",complexity:"Time Complexity: O(L) for `insert`, `search`, and `startsWith`, where L is word/prefix length.\nSpace Complexity: O(N * L) where N is words count and L is average length, since nodes are shared between words with common prefixes.",edgeCases:`1. Empty searches: handled correctly.
2. Checking prefix of a word that is already fully inserted: startsWith returns true, search returns true.`,debugging:"Make sure you initialize the child pointers to null (or None) when creating a new `TrieNode` to avoid memory errors."},solutions:{cpp:{code:`class TrieNode {
public:
    TrieNode* children[26];
    bool isEndOfWord;
    TrieNode() {
        isEndOfWord = false;
        for (int i = 0; i < 26; i++) {
            children[i] = nullptr;
        }
    }
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* curr = root;
        for (char c : word) {
            int idx = c - 'a';
            if (curr->children[idx] == nullptr) {
                curr->children[idx] = new TrieNode();
            }
            curr = curr->children[idx];
        }
        curr->isEndOfWord = true;
    }
    
    bool search(string word) {
        TrieNode* curr = root;
        for (char c : word) {
            int idx = c - 'a';
            if (curr->children[idx] == nullptr) return false;
            curr = curr->children[idx];
        }
        return curr->isEndOfWord;
    }
    
    bool startsWith(string prefix) {
        TrieNode* curr = root;
        for (char c : prefix) {
            int idx = c - 'a';
            if (curr->children[idx] == nullptr) return false;
            curr = curr->children[idx];
        }
        return true;
    }
};`,explanation:[{line:1,text:"Define helper class `TrieNode` representing a node in our tree."},{line:3,text:"Array of 26 pointers for children ('a'-'z')."},{line:4,text:"Boolean flag representing if node is the end of an inserted word."},{line:5,text:"Constructor: sets flag false and initializes all children pointers to `nullptr`."},{line:13,text:"Define main class `Trie`."},{line:18,text:"Constructor: instantiates root node."},{line:22,text:"insert(): loops characters, maps 'a'-'z' to index `c - 'a'`. Creates new nodes if missing, advances pointer, marks `isEndOfWord = true` at end."},{line:34,text:"search(): traverses matching characters, returns false if a child is missing. At the end, returns true if `isEndOfWord` is true."},{line:44,text:"startsWith(): same search traversal, but returns true immediately on reaching end of prefix (regardless of `isEndOfWord` flag)."}]},python:{code:`class TrieNode:
    def __init__(self):
        self.children = {}  # char -> TrieNode
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end_of_word = True

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return curr.is_end_of_word

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for char in prefix:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return True`,explanation:[{line:1,text:"Define TrieNode class."},{line:3,text:"Use Python dictionary to map character to node."},{line:6,text:"Define Trie class."},{line:10,text:"insert(): traverse character keys, create node if key is absent, set end flag."},{line:18,text:"search(): return False on missing keys, return end flag at end."},{line:26,text:"startsWith(): check matching path existence, return True."}]},java:{code:`class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord = false;
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (curr.children[idx] == null) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }
        curr.isEndOfWord = true;
    }
    
    public boolean search(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (curr.children[idx] == null) return false;
            curr = curr.children[idx];
        }
        return curr.isEndOfWord;
    }
    
    public boolean startsWith(String prefix) {
        TrieNode curr = root;
        for (char c : prefix.toCharArray()) {
            int idx = c - 'a';
            if (curr.children[idx] == null) return false;
            curr = curr.children[idx];
        }
        return true;
    }
}`,explanation:[{line:1,text:"TrieNode class definition."},{line:6,text:"Trie class definition."},{line:13,text:"insert(): iterate char array, check array position index `c - 'a'`, instantiate node if null, mark end."},{line:25,text:"search(): trace path, return false on null nodes, return end boolean."},{line:35,text:"startsWith(): check path existence, return true."}]}}},{id:51,name:"N-Queens",difficulty:"Hard",topic:"Backtracking",leetcodeUrl:"https://leetcode.com/problems/n-queens/",tip:"Use DFS Backtracking row-by-row. Maintain sets to check column and diagonal attacks: `cols`, `diags1` (row + col), and `diags2` (row - col). Place queen, recurse, and backtrack.",description:"The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the n-queens puzzle.",chatbotData:{intuition:"We must place N queens on an N x N board. Since each row can have exactly one queen, we can solve this row-by-row. When placing a queen at `(row, col)`, we check if it is under attack from any previously placed queen. A queen can attack vertically (same column `col`) and diagonally. Diagonals can be tracked mathematically: positive diagonal values are constant for `row + col`, and negative diagonal values are constant for `row - col`. We use three sets to track occupied columns and diagonals in O(1) time.",complexity:`Time Complexity: O(N!) because we try placing a queen in N columns for the first row, N-2 columns for the second, etc.
Space Complexity: O(N²) to store the board state and recursion stack.`,edgeCases:`1. n = 1: returns [['Q']].
2. n = 2 or n = 3: no solutions exist, returns empty list.`,debugging:"When backtracking, make sure you remove the elements from your column and diagonal sets (`cols.erase`, `diags1.erase`, etc.) to allow other columns to use them in different search branches."},solutions:{cpp:{code:`class Solution {
private:
    unordered_set<int> cols;
    unordered_set<int> diags1; // row + col
    unordered_set<int> diags2; // row - col
    vector<vector<string>> result;
    
    void backtrack(int row, int n, vector<string>& board) {
        if (row == n) {
            result.push_back(board);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols.count(col) || diags1.count(row + col) || diags2.count(row - col)) {
                continue;
            }
            // Place queen
            board[row][col] = 'Q';
            cols.insert(col);
            diags1.insert(row + col);
            diags2.insert(row - col);
            
            backtrack(row + 1, n, board);
            
            // Backtrack
            board[row][col] = '.';
            cols.erase(col);
            diags1.erase(row + col);
            diags2.erase(row - col);
        }
    }

public:
    vector<vector<string>> solveNQueens(int n) {
        vector<string> board(n, string(n, '.'));
        backtrack(0, n, board);
        return result;
    }
};`,explanation:[{line:3,text:"Declare sets to track columns, positive diagonals (`row + col`), and negative diagonals (`row - col`) under attack."},{line:8,text:"DFS backtracking helper function, operating row-by-row."},{line:9,text:"Base case: if we successfully placed queens in all rows (`row == n`), save the board."},{line:13,text:"Loop through columns `col` in the current row."},{line:14,text:"If the column or either diagonal is already under attack, skip this placement."},{line:18,text:"Place the queen by writing 'Q' on the board."},{line:19,text:"Register the column and diagonals under attack in our sets."},{line:23,text:"Recursively place the next queen in `row + 1`."},{line:26,text:"Backtrack: remove the queen (write `.`) and remove column/diagonals from sets."}]},python:{code:`class Solution:
    def solveNQueens(self, n: int) -> list[list[str]]:
        result = []
        board = [["."] * n for _ in range(n)]
        cols = set()
        diags1 = set() # row + col
        diags2 = set() # row - col
        
        def backtrack(row):
            if row == n:
                result.append(["".join(r) for r in board])
                return
            for col in range(n):
                if col in cols or (row + col) in diags1 or (row - col) in diags2:
                    continue
                board[row][col] = "Q"
                cols.add(col)
                diags1.add(row + col)
                diags2.add(row - col)
                
                backtrack(row + 1)
                
                board[row][col] = "."
                cols.remove(col)
                diags1.remove(row + col)
                diags2.remove(row - col)
                
        backtrack(0)
        return result`,explanation:[{line:1,text:"Define Solution class."},{line:4,text:"Initialize 2D character list board representation and sets."},{line:9,text:"Define backtracking helper."},{line:10,text:"On all rows completed, join board characters to form strings and save."},{line:14,text:"Conflict verification using constant-time set checks."},{line:16,text:"Choose, add to sets, recurse, backtrack."}]},java:{code:`class Solution {
    private Set<Integer> cols = new HashSet<>();
    private Set<Integer> diags1 = new HashSet<>();
    private Set<Integer> diags2 = new HashSet<>();
    private List<List<String>> result = new ArrayList<>();
    
    public List<List<String>> solveNQueens(int n) {
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');
        backtrack(0, n, board);
        return result;
    }
    
    private void backtrack(int row, int n, char[][] board) {
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (int i = 0; i < n; i++) solution.add(new String(board[i]));
            result.add(solution);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols.contains(col) || diags1.contains(row + col) || diags2.contains(row - col)) continue;
            board[row][col] = 'Q';
            cols.add(col);
            diags1.add(row + col);
            diags2.add(row - col);
            backtrack(row + 1, n, board);
            board[row][col] = '.';
            cols.remove(col);
            diags1.remove(row + col);
            diags2.remove(row - col);
        }
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:7,text:"Initialize char grid board, fill with `.`, call backtracking DFS."},{line:15,text:"When row reaches n, copy board rows as strings to results list."},{line:21,text:"Verify placements, add to sets, recurse, backtrack by clearing Q and removing from sets."}]}}}],Fx=[{id:560,name:"Subarray Sum Equals K",difficulty:"Medium",topic:"HashMap / Prefix Sum",leetcodeUrl:"https://leetcode.com/problems/subarray-sum-equals-k/",tip:"Use a prefix sum and hash map. Maintain a running `sum`. The number of subarrays ending at current index with sum `k` is the count of `sum - k` in the map. Store prefix sum counts.",description:"Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",chatbotData:{intuition:"A subarray sum from index `i` to `j` is `PrefixSum[j] - PrefixSum[i-1]`. If we want this sum to equal `k`, then `PrefixSum[j] - PrefixSum[i-1] = k`, which means `PrefixSum[i-1] = PrefixSum[j] - k`. As we iterate through the array, we calculate the running prefix `sum`. If `sum - k` has been seen before as a prefix sum, it means there exist subarrays ending at the current index that sum to `k`. We use a Hash Map to store the frequencies of prefix sums we have seen.",complexity:`Time Complexity: O(N) since we make a single pass through the array of size N and map operations are O(1) average.
Space Complexity: O(N) to store the prefix sums in the map.`,edgeCases:`1. k is 0: works, count of prefix sum matches is accumulated.
2. Negatives in array: prefix sums can decrease and increase, map handles frequencies correctly.`,debugging:"Do not forget to initialize the map with `{0: 1}`. This is because if the running sum itself equals `k` at some index, the complement `sum - k` is 0. If 0 is not in the map with a frequency of 1, we will miss this valid subarray starting from index 0."},solutions:{cpp:{code:`int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixSumCount;
    prefixSumCount[0] = 1; // base case
    int sum = 0;
    int count = 0;
    for (int num : nums) {
        sum += num;
        if (prefixSumCount.count(sum - k)) {
            count += prefixSumCount[sum - k];
        }
        prefixSumCount[sum]++;
    }
    return count;
}`,explanation:[{line:1,text:"Function declaration: takes integer vector reference and target k, returns subarray count."},{line:2,text:"Declare an unordered_map `prefixSumCount` where keys are prefix sums and values are their frequencies."},{line:3,text:"Initialize map with prefix sum 0 having count 1. This handles subarrays starting from index 0."},{line:4,text:"Initialize running prefix `sum` and answer `count` to 0."},{line:6,text:"Loop through each number `num` in the array."},{line:7,text:"Add the current number to the running prefix `sum`."},{line:8,text:"Check if the complement `sum - k` has occurred as a prefix sum previously."},{line:9,text:"If it has, add its frequency to our answer `count`."},{line:11,text:"Increment the frequency of the current prefix `sum` in the map."}]},python:{code:`def subarraySum(nums: list[int], k: int) -> int:
    prefix_map = {0: 1}
    current_sum = 0
    count = 0
    for num in nums:
        current_sum += num
        if (current_sum - k) in prefix_map:
            count += prefix_map[current_sum - k]
        prefix_map[current_sum] = prefix_map.get(current_sum, 0) + 1
    return count`,explanation:[{line:1,text:"Define subarraySum function."},{line:2,text:"Initialize dictionary with base case `{0: 1}`."},{line:5,text:"Loop through list, accumulating prefix sum."},{line:7,text:"If `current_sum - k` is in map, add its frequency count to result."},{line:9,text:"Save the current prefix sum frequency."}]},java:{code:`public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixSumCount = new HashMap<>();
    prefixSumCount.put(0, 1);
    int sum = 0;
    int count = 0;
    for (int num : nums) {
        sum += num;
        if (prefixSumCount.containsKey(sum - k)) {
            count += prefixSumCount.get(sum - k);
        }
        prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
    }
    return count;
}`,explanation:[{line:1,text:"Declare method subarraySum."},{line:2,text:"Create HashMap."},{line:3,text:"Put base case `(0, 1)` into map."},{line:6,text:"Loop numbers, updating prefix sum."},{line:8,text:"If complement exists, fetch its count and add to result."},{line:11,text:"Increment current sum count using `getOrDefault`."}]}}},{id:647,name:"Palindromic Substrings",difficulty:"Medium",topic:"DP / Expand Around Center",leetcodeUrl:"https://leetcode.com/problems/palindromic-substrings/",tip:"Expand around centers. Each index `i` can be the center of an odd-length palindrome (expand from `i, i`) or an even-length palindrome (expand from `i, i+1`).",description:"Given a string `s`, return the number of palindromic substrings in it.",chatbotData:{intuition:"A substring is a palindrome if it reads the same backwards and forwards. Instead of generating all substrings and checking them (which is O(N³)), we can choose each index as a potential center and expand outwards. A palindrome can have an odd length (center is a single character `s[i]`) or an even length (center is between `s[i]` and `s[i+1]`). We expand while characters match, incrementing our count at each valid expansion.",complexity:`Time Complexity: O(N²) because we try expanding from 2N-1 centers, and each expansion takes O(N) time in the worst case.
Space Complexity: O(1) auxiliary space.`,edgeCases:`1. Single character: returns 1.
2. All same characters (e.g. 'aaa'): returns 6.`,debugging:"Make sure you include boundaries checking `left >= 0 && right < s.length()` in your expansion loop to prevent index out of bounds crashes."},solutions:{cpp:{code:`class Solution {
private:
    int expand(string& s, int l, int r) {
        int count = 0;
        while (l >= 0 && r < s.length() && s[l] == s[r]) {
            count++;
            l--;
            r++;
        }
        return count;
    }

public:
    int countSubstrings(string s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            count += expand(s, i, i);     // odd length
            count += expand(s, i, i + 1); // even length
        }
        return count;
    }
};`,explanation:[{line:3,text:"Helper function: expands outward from boundaries `l` and `r` while matching characters, returning count of palindromes found."},{line:5,text:"Loop while indices are inside boundaries AND characters at `s[l]` and `s[r]` match."},{line:6,text:"Increment palindrome count."},{line:7,text:"Expand boundaries outwards: decrement `l`, increment `r`."},{line:14,text:"Main function: loops through each index as a center."},{line:17,text:"Count odd-length palindromes centering at single character `i`."},{line:18,text:"Count even-length palindromes centering between `i` and `i + 1`."}]},python:{code:`class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0
        n = len(s)
        
        def expand(l, r):
            ans = 0
            while l >= 0 and r < n and s[l] == s[r]:
                ans += 1
                l -= 1
                r += 1
            return ans
            
        for i in range(n):
            count += expand(i, i)     # odd length
            count += expand(i, i + 1) # even length
        return count`,explanation:[{line:1,text:"Define Solution class."},{line:6,text:"Define helper: expands while characters match, returning count."},{line:8,text:"Loop expansion boundaries."},{line:14,text:"Try every position as an odd center `(i, i)` and even center `(i, i+1)`."}]},java:{code:`class Solution {
    public int countSubstrings(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            count += expand(s, i, i);
            count += expand(s, i, i + 1);
        }
        return count;
    }
    
    private int expand(String s, int l, int r) {
        int count = 0;
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            count++;
            l--;
            r++;
        }
        return count;
    }
}`,explanation:[{line:1,text:"Declare Solution class."},{line:4,text:"Loop through index centers, summing odd and even expansions."},{line:11,text:"Helper method expand."},{line:13,text:"Verify limits and character equivalence, shift bounds, and increment count."}]}}},{id:583,name:"Delete Operation for Two Strings",difficulty:"Medium",topic:"DP / LCS",leetcodeUrl:"https://leetcode.com/problems/delete-operation-for-two-strings/",tip:"This is a variant of Longest Common Subsequence (LCS). The minimum deletions needed is `len(word1) + len(word2) - 2 * LCS(word1, word2)`.",description:"Given two strings `word1` and `word2`, return the minimum number of steps required to make `word1` and `word2` the same, where in each step you can delete one character in either string.",chatbotData:{intuition:"To make two strings identical with the minimum number of deletions, we should preserve the longest common sequence of characters they share. This sequence is their Longest Common Subsequence (LCS). If the length of LCS is `L`, then the characters we delete from `word1` is `len(word1) - L`, and from `word2` is `len(word2) - L`. The total deletions are `len(word1) + len(word2) - 2 * L`.",complexity:`Time Complexity: O(M * N) to compute the LCS grid. M and N are the lengths of the two words.
Space Complexity: O(M * N) to store the 2D DP table.`,edgeCases:"1. Strings are already identical: LCS length equals string length, deletions = 0.\n2. Completely different strings: LCS is 0, deletions = `len(word1) + len(word2)`.",debugging:"Refer to the Longest Common Subsequence implementation to correctly compute the LCS length before performing the deletion subtraction."},solutions:{cpp:{code:`int minDistance(string word1, string word2) {
    int m = word1.length(), n = word2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    int lcs = dp[m][n];
    return m + n - 2 * lcs;
}`,explanation:[{line:1,text:"Function declaration: takes two strings, returns minimum deletions."},{line:2,text:"Calculate lengths of both words."},{line:3,text:"Declare 2D vector for LCS calculation."},{line:4,text:"Loop through character positions to fill LCS DP table."},{line:13,text:"Retrieve the LCS length from the bottom-right cell."},{line:14,text:"Calculate and return the result: `len(word1) + len(word2) - 2 * lcs`."}]},python:{code:`def minDistance(word1: str, word2: str) -> int:
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    lcs = dp[m][n]
    return m + n - 2 * lcs`,explanation:[{line:1,text:"Define minDistance function."},{line:3,text:"Initialize 2D DP grid."},{line:4,text:"Fill table based on LCS conditions."},{line:10,text:"Get LCS length."},{line:11,text:"Return deletion steps calculation."}]},java:{code:`public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    int lcs = dp[m][n];
    return m + n - 2 * lcs;
}`,explanation:[{line:1,text:"Declare method minDistance."},{line:3,text:"Create 2D DP array."},{line:4,text:"LCS nested loop traversal."},{line:13,text:"Get LCS."},{line:14,text:"Subtract double LCS from length sums."}]}}},{id:76,name:"Minimum Window Substring",difficulty:"Hard",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/minimum-window-substring/",tip:"Use a sliding window. Count frequency of characters in `t`. Move `right` to expand the window. Maintain a count of matching unique characters. When all matched, shrink from `left` to find the minimum valid window.",description:"Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window.",chatbotData:{intuition:"We count target frequencies in `t` using a map. We expand our sliding window in `s` using pointer `right`. We maintain a `have` count tracking how many unique characters meet their target frequency in the current window, compared to `need` (the total number of unique characters in `t`). When `have == need`, the window is valid. We record its size, then try to shrink it from the `left` by advancing `left` until the window becomes invalid again.",complexity:`Time Complexity: O(N + M) where N is length of s and M is length of t. Pointers travel at most N steps.
Space Complexity: O(1) or O(52) to store the character counts.`,edgeCases:"1. `t` is longer than `s`: returns empty string.\n2. No window exists: returns empty string.",debugging:"When updating counts, check if `windowCount[char] == targetCount[char]` to increment your matches, and decrement matches when a character's frequency falls below its target during contraction."},solutions:{cpp:{code:`string minWindow(string s, string t) {
    if (s.length() < t.length()) return "";
    int targetMap[128] = {0};
    int windowMap[128] = {0};
    for (char c : t) targetMap[c]++;
    
    int need = 0;
    for (int i = 0; i < 128; i++) {
        if (targetMap[i] > 0) need++;
    }
    
    int have = 0, left = 0;
    int minLen = INT_MAX, minStart = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s[right];
        windowMap[c]++;
        if (targetMap[c] > 0 && windowMap[c] == targetMap[c]) {
            have++;
        }
        while (have == need) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            char leftChar = s[left];
            windowMap[leftChar]--;
            if (targetMap[leftChar] > 0 && windowMap[leftChar] < targetMap[leftChar]) {
                have--;
            }
            left++;
        }
    }
    return (minLen == INT_MAX) ? "" : s.substr(minStart, minLen);
}`,explanation:[{line:1,text:"Function declaration: takes strings s and t, returns minimum substring."},{line:2,text:"If `s` is shorter than `t`, it can't contain the window: return empty string."},{line:3,text:"Initialize count arrays for ASCII characters (size 128) for target and active window."},{line:5,text:"Fill target character counts from string `t`."},{line:7,text:"Count `need`, which is the number of unique characters in `t`."},{line:12,text:"Initialize `have` (unique matches in window), `left` pointer, and trackers for minimum window."},{line:14,text:"Loop `right` pointer to expand window."},{line:17,text:"If character matches frequency requirement, increment `have`."},{line:20,text:"While window contains all target characters (`have == need`)."},{line:21,text:"Update minimum window length and start position."},{line:25,text:"Pop character at `left` from window."},{line:27,text:"If popped character causes its count to fall below target requirements, decrement `have`."},{line:30,text:"Increment `left` pointer to shrink the window."}]},python:{code:`def minWindow(s: str, t: str) -> str:
    if len(s) < len(t):
        return ""
    target_count = {}
    for c in t:
        target_count[c] = target_count.get(c, 0) + 1
    need = len(target_count)
    
    window_count = {}
    have = 0
    left = 0
    min_len = float('inf')
    min_start = 0
    for right, char in enumerate(s):
        window_count[char] = window_count.get(char, 0) + 1
        if char in target_count and window_count[char] == target_count[char]:
            have += 1
        while have == need:
            if (right - left + 1) < min_len:
                min_len = right - left + 1
                min_start = left
            left_char = s[left]
            window_count[left_char] -= 1
            if left_char in target_count and window_count[left_char] < target_count[left_char]:
                have -= 1
            left += 1
    return "" if min_len == float('inf') else s[min_start : min_start + min_len]`,explanation:[{line:1,text:"Define minWindow function."},{line:4,text:"Populate target character counts."},{line:7,text:"Get count of unique characters needed."},{line:10,text:"Initialize variables."},{line:14,text:"Expand window."},{line:16,text:"If current count matches target count exactly, increment unique match count `have`."},{line:18,text:"Shrink window while valid, recording best window values."}]},java:{code:`public String minWindow(String s, String t) {
    if (s.length() < t.length()) return "";
    int[] targetCount = new int[128];
    int[] windowCount = new int[128];
    for (char c : t.toCharArray()) targetCount[c]++;
    int need = 0;
    for (int count : targetCount) if (count > 0) need++;
    int have = 0, left = 0;
    int minLen = Integer.MAX_VALUE, minStart = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        windowCount[c]++;
        if (targetCount[c] > 0 && windowCount[c] == targetCount[c]) {
            have++;
        }
        while (have == need) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            char leftChar = s.charAt(left);
            windowCount[leftChar]--;
            if (targetCount[leftChar] > 0 && windowCount[leftChar] < targetCount[leftChar]) {
                have--;
            }
            left++;
        }
    }
    return (minLen == Integer.MAX_VALUE) ? "" : s.substring(minStart, minStart + minLen);
}`,explanation:[{line:1,text:"Declare method minWindow."},{line:3,text:"Setup character counters."},{line:5,text:"Populate target frequencies."},{line:10,text:"Loop right pointer."},{line:13,text:"Increment unique match `have` when frequency matches."},{line:16,text:"Loop while matches met: record minimums, update left elements, and advance left pointer."},{line:29,text:"Return substring."}]}}},{id:42,name:"Trapping Rain Water",difficulty:"Hard",topic:"Two Pointer / Stack",leetcodeUrl:"https://leetcode.com/problems/trapping-rain-water/",tip:"Use two pointers, `left` and `right` at the ends of the array. Track `leftMax` and `rightMax`. Move the pointer with the smaller max boundary inwards, accumulating `max_boundary - height`.",description:"Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",chatbotData:{intuition:"The volume of water trapped above bar `i` is determined by: `min(leftMax, rightMax) - height[i]`. We can calculate this in O(N) time and O(1) space using two pointers starting at the ends. We maintain `leftMax` (max height seen on the left) and `rightMax` (max height seen on the right). Since water is limited by the shorter boundary, if `leftMax < rightMax`, we process the left pointer: water trapped is `leftMax - height[left]`. We then increment `left`. Otherwise, we process the right pointer and decrement `right`.",complexity:`Time Complexity: O(N) since we visit each element with our two pointers exactly once.
Space Complexity: O(1) auxiliary space.`,edgeCases:"1. Empty or size < 3 array: cannot trap any water, returns 0.",debugging:"Make sure you update the boundaries `leftMax = max(leftMax, height[left])` *before* calculating the trapped water for the current cell."},solutions:{cpp:{code:`int trap(vector<int>& height) {
    if (height.empty()) return 0;
    int left = 0, right = height.size() - 1;
    int leftMax = height[left];
    int rightMax = height[right];
    int water = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    return water;
}`,explanation:[{line:1,text:"Function declaration: takes height vector, returns trapped water units."},{line:2,text:"If empty, return 0."},{line:3,text:"Initialize `left` at 0 and `right` at last index."},{line:4,text:"Initialize `leftMax` and `rightMax` boundary values."},{line:7,text:"Loop while pointers don't meet."},{line:8,text:"If left boundary is shorter, we know the bottleneck is on the left: process left side."},{line:9,text:"Increment `left` pointer."},{line:10,text:"Update `leftMax` with the new height."},{line:11,text:"Add water trapped above current index: `leftMax - height[left]` (could be 0)."},{line:12,text:"Otherwise, right boundary is shorter: process right side."},{line:13,text:"Decrement `right` pointer."},{line:14,text:"Update `rightMax`."},{line:15,text:"Add water trapped above right index."}]},python:{code:`def trap(height: list[int]) -> int:
    if not height:
        return 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    water = 0
    while left < right:
        if left_max < right_max:
            left += 1
            left_max = max(left_max, height[left])
            water += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            water += right_max - height[right]
    return water`,explanation:[{line:1,text:"Define trap function."},{line:4,text:"Initialize pointers."},{line:5,text:"Initialize boundary maxes."},{line:7,text:"Loop pointers."},{line:8,text:"If left boundary is shorter, move left pointer, update left max, accumulate water."},{line:12,text:"Otherwise, move right pointer, update right max, accumulate water."}]},java:{code:`public int trap(int[] height) {
    if (height.length == 0) return 0;
    int left = 0, right = height.length - 1;
    int leftMax = height[left], rightMax = height[right];
    int water = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    return water;
}`,explanation:[{line:1,text:"Declare method trap."},{line:3,text:"Initialize pointers and trackers."},{line:6,text:"Loop until convergence."},{line:7,text:"Process side with smaller height barrier."},{line:8,text:"Advance left pointer, calculate max, accumulate difference."},{line:11,text:"Advance right pointer, calculate max, accumulate difference."}]}}},{id:23,name:"Merge K Sorted Lists",difficulty:"Hard",topic:"Heap / Linked List",leetcodeUrl:"https://leetcode.com/problems/merge-k-sorted-lists/",tip:"Use a Min-Heap. Push the head nodes of all `k` lists onto the heap. While the heap is not empty, pop the smallest node, link it to the merged list, and push its next node onto the heap.",description:"You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",chatbotData:{intuition:"To merge K sorted lists, we must repeatedly find the node with the smallest value among the heads of all remaining lists. A Min-Heap is perfect for this. We push the head node of each of the K lists into a Min-Heap. The heap will sort them. While the heap is not empty, we pop the smallest node, attach it to our merged list `tail.next`, and if this popped node has a next node (`node.next`), we push `node.next` onto the heap.",complexity:`Time Complexity: O(N log K) where N is the total number of nodes across all lists and K is the number of lists. Heap size is at most K.
Space Complexity: O(K) to store the heads of the lists in the heap.`,edgeCases:`1. Empty input list list: returns null.
2. All lists are empty: returns null.`,debugging:"In C++ and Java, you must write a custom comparator for list nodes, because the default priority queue does not know how to compare `ListNode` pointers/objects."},solutions:{cpp:{code:`class Solution {
private:
    struct CompareNodes {
        bool operator()(ListNode* const& p1, ListNode* const& p2) {
            return p1->val > p2->val; // greater makes it a min-heap
        }
    };

public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode*, vector<ListNode*>, CompareNodes> minHeap;
        for (ListNode* head : lists) {
            if (head != nullptr) {
                minHeap.push(head);
            }
        }
        ListNode dummy(0);
        ListNode* tail = &dummy;
        while (!minHeap.empty()) {
            ListNode* node = minHeap.top();
            minHeap.pop();
            tail->next = node;
            tail = tail->next;
            if (node->next != nullptr) {
                minHeap.push(node->next);
            }
        }
        return dummy.next;
    }
};`,explanation:[{line:3,text:"Declare a comparator struct `CompareNodes` for `ListNode*`. Using `>` sets up a Min-Heap."},{line:10,text:"Main function: takes vector of list heads, returns merged head."},{line:11,text:"Declare Min-Heap priority queue using our comparator."},{line:12,text:"Loop through each list's head."},{line:13,text:"If the list head is not null, push it onto the heap."},{line:17,text:"Create dummy node."},{line:18,text:"Set tail pointer to dummy."},{line:19,text:"Loop while the heap contains nodes."},{line:20,text:"Pop the node with the smallest value from the top of the heap."},{line:22,text:"Link it to `tail->next`."},{line:23,text:"Advance the tail pointer."},{line:24,text:"If the popped node has a next node, push it onto the heap to continue sorting."}]},python:{code:`def mergeKLists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:
    # In Python, we can push tuples into heapq: (node.val, id, node)
    # 'id' prevents direct node comparison when values are identical
    min_heap = []
    for i, head in enumerate(lists):
        if head:
            heapq.heappush(min_heap, (head.val, i, head))
            
    dummy = ListNode(0)
    tail = dummy
    while min_heap:
        val, idx, node = heapq.heappop(min_heap)
        tail.next = node
        tail = tail.next
        if node.next:
            heapq.heappush(min_heap, (node.next.val, idx, node.next))
    return dummy.next`,explanation:[{line:1,text:"Define mergeKLists function."},{line:4,text:"Initialize heap list."},{line:5,text:"Push tuples containing node values, list indices, and node references onto the heap."},{line:9,text:"Create dummy head."},{line:11,text:"Loop while heap is not empty."},{line:12,text:"Pop tuple. Link node to tail."},{line:15,text:"If next node exists, push it onto heap using its list index `idx`."}]},java:{code:`public ListNode mergeKLists(ListNode[] lists) {
    PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);
    for (ListNode head : lists) {
        if (head != null) {
            minHeap.add(head);
        }
    }
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;
    while (!minHeap.isEmpty()) {
        ListNode node = minHeap.poll();
        tail.next = node;
        tail = tail.next;
        if (node.next != null) {
            minHeap.add(node.next);
        }
    }
    return dummy.next;
}`,explanation:[{line:1,text:"Declare method mergeKLists."},{line:2,text:"Create PriorityQueue using lambda comparator comparing node values."},{line:3,text:"Add all non-null head nodes."},{line:8,text:"Create dummy head and tail pointers."},{line:10,text:"Loop: poll smallest, link to tail, add next node to heap."}]}}},{id:295,name:"Find Median from Data Stream",difficulty:"Hard",topic:"Heap / Design",leetcodeUrl:"https://leetcode.com/problems/find-median-from-data-stream/",tip:"Use two Heaps: a Max-Heap `small` for the left half, and a Min-Heap `large` for the right half. Ensure their sizes differ by at most 1, and all elements in `small` are <= `large`. Median is either the top of the larger heap, or the average of their tops.",description:"Design a data structure that supports adding numbers from a data stream and finding the median of the numbers in constant time.",chatbotData:{intuition:"To find the median in O(1) time, we must divide the stream of numbers into two halves: the left half (smaller numbers) and the right half (larger numbers). We store the left half in a Max-Heap (so the largest number is at the top) and the right half in a Min-Heap (so the smallest number is at the top). When we add a number, we push it to the Max-Heap, then transfer the top element to the Min-Heap to keep them sorted. If the Min-Heap gets larger than the Max-Heap, we transfer the top element back. This keeps the heaps balanced.",complexity:"Time Complexity: O(log N) for `addNum` (heap insertions/deletions), and O(1) for `findMedian`.\nSpace Complexity: O(N) to store N elements in the two heaps.",edgeCases:"1. Empty data stream: findMedian returns 0 (handled by design).",debugging:"When balancing, make sure the difference in sizes between the Max-Heap and Min-Heap is at most 1. If sizes are equal, median is average of both tops. If unequal, it's the top of the heap with more elements."},solutions:{cpp:{code:`class MedianFinder {
private:
    priority_queue<int> maxHeap; // stores left half (smaller numbers)
    priority_queue<int, vector<int>, greater<int>> minHeap; // stores right half (larger numbers)

public:
    MedianFinder() {}
    
    void addNum(int num) {
        maxHeap.push(num);
        minHeap.push(maxHeap.top());
        maxHeap.pop();
        
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }
    
    double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.top();
        }
        return (maxHeap.top() + minHeap.top()) / 2.0;
    }
};`,explanation:[{line:3,text:"Declare `maxHeap` to store the smaller half of elements."},{line:4,text:"Declare `minHeap` to store the larger half of elements."},{line:9,text:"addNum() function: pushes value to maxHeap."},{line:11,text:"Transfer the largest element of maxHeap to minHeap to keep them sorted."},{line:14,text:"If minHeap becomes larger, transfer its smallest element back to maxHeap. This ensures maxHeap is always equal to or 1 element larger than minHeap."},{line:20,text:"findMedian() function: returns the median."},{line:21,text:"If maxHeap is larger, the median is its top element."},{line:24,text:"Otherwise, the size is even: return the average of the tops of both heaps."}]},python:{code:`import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max-heap (values inverted)
        self.large = []  # min-heap

    def addNum(self, num: int) -> None:
        # Push to small (inverted to act as max-heap)
        heapq.heappush(self.small, -num)
        # Transfer to large
        heapq.heappush(self.large, -heapq.heappop(self.small))
        # Rebalance sizes
        if len(self.small) < len(self.large):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0`,explanation:[{line:1,text:"Import heapq."},{line:4,text:"Constructor: initialize heaps. `self.small` is a Max-Heap, values are stored negative."},{line:10,text:"Push negative value to simulate max-heap."},{line:12,text:"Move element to min-heap to keep order."},{line:14,text:"Enforce that Max-Heap `small` is larger or equal in size."},{line:17,text:"findMedian(): retrieve values, reversing negations, and return median."}]},java:{code:`class MedianFinder {
    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    private PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    public MedianFinder() {}
    
    public void addNum(int num) {
        maxHeap.add(num);
        minHeap.add(maxHeap.poll());
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.add(minHeap.poll());
        }
    }
    
    public double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.peek();
        }
        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }
}`,explanation:[{line:1,text:"Declare class MedianFinder."},{line:2,text:"Create maxHeap using lambda descending order comparator."},{line:3,text:"Create minHeap."},{line:7,text:"addNum(): insert in maxHeap, transfer to minHeap, and rebalance sizes."},{line:15,text:"findMedian(): check size parity and return median."}]}}},{id:239,name:"Sliding Window Maximum",difficulty:"Hard",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/sliding-window-maximum/",tip:"Use a Doubly-Ended Queue (Deque) to store indices. Maintain the deque in a monotonically decreasing order of values. Remove indices that fall out of the window bounds from the front, and remove indices of smaller elements from the back.",description:"You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the max sliding window.",chatbotData:{intuition:"To solve this in O(N), we use a Monotonic Deque. The deque will store indices of elements in the current window. We maintain the deque such that the values corresponding to these indices are in decreasing order (so the maximum value's index is always at the front). When we process `nums[i]`:\n1. If the index at the front of the deque is out of bounds (`front <= i - k`), we remove it.\n2. While the deque is not empty and the value of the last index in the deque is smaller than `nums[i]`, we pop it (since these elements can never be the maximum again).\n3. We push `i` to the back. The maximum is `nums[deque.front()]` once our window size reaches `k`.",complexity:`Time Complexity: O(N) because we iterate through the array of length N once, and each index is added and removed from the deque at most once.
Space Complexity: O(K) to store indices in the deque.`,edgeCases:"1. K = 1: returns the array itself.",debugging:"Make sure you store the *indices* of the elements in the deque, not the values. Indices let you verify if an element has fallen out of the sliding window boundaries."},solutions:{cpp:{code:`vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq; // stores indices
    vector<int> result;
    for (int i = 0; i < nums.size(); i++) {
        // 1. Remove indices that are out of bounds
        if (!dq.empty() && dq.front() <= i - k) {
            dq.pop_front();
        }
        // 2. Remove indices of elements smaller than current element
        while (!dq.empty() && nums[dq.back()] < nums[i]) {
            dq.pop_back();
        }
        // 3. Add current index
        dq.push_back(i);
        
        // 4. Record maximum when window reaches size k
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    return result;
}`,explanation:[{line:1,text:"Function declaration: takes array reference and k, returns vector of maximums."},{line:2,text:"Declare deque `dq` to store array indices."},{line:3,text:"Declare result vector."},{line:4,text:"Loop through array elements."},{line:6,text:"Remove the index at the front of the deque if it has fallen out of the sliding window range (`i - k`)."},{line:10,text:"Remove indices from the back of the deque if their corresponding values are smaller than `nums[i]`, as they cannot be the window maximum."},{line:14,text:"Push the current index `i` onto the back of the deque."},{line:17,text:"If we have processed at least `k` elements, the front of the deque is the maximum of the current window: add it to result."}]},python:{code:`from collections import deque

def maxSlidingWindow(nums: list[int], k: int) -> list[int]:
    dq = deque()  # stores indices
    result = []
    for i in range(len(nums)):
        if dq and dq[0] <= i - k:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,explanation:[{line:1,text:"Import deque."},{line:3,text:"Define maxSlidingWindow function."},{line:4,text:"Create empty deque and result list."},{line:6,text:"Iterate indices."},{line:7,text:"Remove index from front if it is out of bounds."},{line:9,text:"Pop smaller elements from back to maintain monotonic property."},{line:11,text:"Append current index."},{line:12,text:"Append maximum (value at front index) when window reaches size `k`."}]},java:{code:`public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums.length == 0) return new int[0];
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> dq = new LinkedList<>(); // stores indices
    int rIdx = 0;
    for (int i = 0; i < n; i++) {
        if (!dq.isEmpty() && dq.peekFirst() <= i - k) {
            dq.pollFirst();
        }
        while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) {
            dq.pollLast();
        }
        dq.offerLast(i);
        if (i >= k - 1) {
            result[rIdx++] = nums[dq.peekFirst()];
        }
    }
    return result;
}`,explanation:[{line:1,text:"Declare method maxSlidingWindow."},{line:5,text:"Initialize Deque."},{line:7,text:"Loop elements."},{line:8,text:"Verify and poll out-of-bounds front index."},{line:11,text:"Poll smaller elements from back of deque."},{line:14,text:"Add current index to back."},{line:15,text:"If window is full, write maximum (value at front index) to results."}]}}}],_a=[{id:175,section:1,name:"Combine Two Tables",difficulty:"Easy",topic:"LEFT JOIN",leetcodeUrl:"https://leetcode.com/problems/combine-two-tables/",tip:"Use LEFT JOIN so that persons without an address are still returned with NULL values.",description:"Write a SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not in the Address table, report null instead.",chatbotData:{intuition:"We need all persons regardless of whether they have a matching address. A standard INNER JOIN would drop people who don't have records in the Address table. Thus, a LEFT OUTER JOIN (or just LEFT JOIN) from Person to Address is perfect here.",complexity:`Time Complexity: O(N + M) where N and M are the sizes of Person and Address tables respectively (assuming index lookups on personId).
Space Complexity: O(1) beyond sorting/hashing required by the database engine.`,edgeCases:`1. Person table has entries but Address is completely empty: returns all people with NULL city/state.
2. Address has entries but Person is empty: returns empty result.`,debugging:"If you are missing people, check if you accidentally used a comma join or INNER JOIN instead of LEFT JOIN."},solutions:{mysql:{code:`SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a
ON p.personId = a.personId;`,explanation:[{line:1,text:"Select the required columns: first name, last name, city, and state."},{line:2,text:"Specify the Person table as the left table (aliased as 'p')."},{line:3,text:"Use LEFT JOIN with Address (aliased as 'a') to retain all rows from Person."},{line:4,text:"Perform the join condition on the common 'personId' column."}]},postgresql:{code:`SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a
ON p.personId = a.personId;`,explanation:[{line:1,text:"Select fields from Person and Address."},{line:3,text:"Perform standard LEFT OUTER JOIN to match rows or return NULLs."}]},mssql:{code:`SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a
ON p.personId = a.personId;`,explanation:[{line:1,text:"Standard SQL-compliant LEFT JOIN works perfectly in SQL Server."}]}}},{id:176,section:1,name:"Second Highest Salary",difficulty:"Medium",topic:"Subquery / LIMIT",leetcodeUrl:"https://leetcode.com/problems/second-highest-salary/",tip:"Wrap your LIMIT/OFFSET query inside an outer SELECT statement to return NULL if it is empty.",description:"Write a SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report null.",chatbotData:{intuition:"Using LIMIT 1 OFFSET 1 with descending order grabs the second row. However, if there's only 1 row or no duplicates, it returns nothing (empty set). Wrapping it in a dummy SELECT statement forces the database to return NULL instead of an empty result set.",complexity:`Time Complexity: O(N log N) for sorting unless an index exists on the salary column.
Space Complexity: O(1) or O(N) for intermediate sorting space.`,edgeCases:`1. Only one unique salary: should return NULL.
2. Duplicate highest salaries: must use DISTINCT to ignore duplicates.`,debugging:"If your code returns empty instead of NULL on test cases with 1 row, wrap it inside: SELECT (your_query) AS SecondHighestSalary;"},solutions:{mysql:{code:`SELECT (
  SELECT DISTINCT salary
  FROM Employee
  ORDER BY salary DESC
  LIMIT 1 OFFSET 1
) AS SecondHighestSalary;`,explanation:[{line:1,text:"Outer SELECT wrapper: ensures that an empty subquery result becomes a single NULL."},{line:2,text:"Select unique salaries using DISTINCT to skip duplicate values."},{line:4,text:"Order from highest to lowest."},{line:5,text:"LIMIT 1 (take one row) OFFSET 1 (skip the absolute highest)."}]},postgresql:{code:`SELECT (
  SELECT DISTINCT salary
  FROM Employee
  ORDER BY salary DESC
  LIMIT 1 OFFSET 1
) AS "SecondHighestSalary";`,explanation:[{line:1,text:"Wrap inside standard subquery for NULL fallback."},{line:6,text:"Alias with double quotes if case preservation is needed in PostgreSQL."}]},mssql:{code:`SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (
  SELECT MAX(salary)
  FROM Employee
);`,explanation:[{line:1,text:"Query the maximum salary..."},{line:3,text:"...that is strictly less than..."},{line:4,text:"...the overall maximum salary. Since MAX of an empty set is NULL, it handles empty case naturally."}]}}},{id:181,section:1,name:"Employees Earning More Than Managers",difficulty:"Easy",topic:"Self JOIN",leetcodeUrl:"https://leetcode.com/problems/employees-earning-more-than-managers/",tip:"Perform a self-join linking Employee to itself on employee.managerId = manager.id.",description:"Write a SQL query to find the employees who earn more than their managers.",chatbotData:{intuition:"Since manager and employee data are in the same Employee table, we can join the table to itself. One side represents the employees, the other manager. Match on employee's managerId and manager's id, and filter where employee salary > manager salary.",complexity:`Time Complexity: O(N²) in the worst case, but O(N) if managerId and id are indexed.
Space Complexity: O(1) extra space.`,edgeCases:"1. Employee has no manager (managerId IS NULL): the join will filter them out, which is correct.",debugging:"Make sure you match Employee.managerId = Manager.id and NOT the other way around!"},solutions:{mysql:{code:`SELECT e.name AS Employee
FROM Employee e
JOIN Employee m
ON e.managerId = m.id
WHERE e.salary > m.salary;`,explanation:[{line:1,text:"Select employee name aliased as 'Employee'."},{line:2,text:"Load Employee table as 'e' (the employee)."},{line:3,text:"Join Employee table as 'm' (the manager)."},{line:4,text:"Join condition: employee's managerId equals manager's id."},{line:5,text:"Filter condition: employee salary exceeds manager salary."}]},postgresql:{code:`SELECT e.name AS Employee
FROM Employee e
JOIN Employee m
ON e.managerId = m.id
WHERE e.salary > m.salary;`,explanation:[{line:1,text:"Standard SQL self-join works identical in PostgreSQL."}]},mssql:{code:`SELECT e.name AS Employee
FROM Employee e
INNER JOIN Employee m
ON e.managerId = m.id
WHERE e.salary > m.salary;`,explanation:[{line:3,text:"Explicit INNER JOIN is standard in SQL Server."}]}}},{id:182,section:1,name:"Duplicate Emails",difficulty:"Easy",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/duplicate-emails/",tip:"Use GROUP BY email and filter with HAVING COUNT(email) > 1.",description:"Write a SQL query to report all the duplicate emails.",chatbotData:{intuition:"To find duplicates, we group the rows by email. This groups all matching emails together. Then, we use HAVING COUNT(email) > 1 to filter out groups that only appear once.",complexity:`Time Complexity: O(N) to traverse and group the emails.
Space Complexity: O(U) where U is the number of unique emails.`,edgeCases:`1. No duplicate emails: returns empty set.
2. All emails are duplicates: returns unique list of those emails.`,debugging:"Always write HAVING instead of WHERE when filtering based on aggregate counts."},solutions:{mysql:{code:`SELECT email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;`,explanation:[{line:1,text:"Select the email column."},{line:3,text:"Group rows by the email address."},{line:4,text:"Filter groups with occurrence count greater than one."}]},postgresql:{code:`SELECT email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;`,explanation:[{line:4,text:"Standard HAVING COUNT aggregation filters duplicates."}]},mssql:{code:`SELECT email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;`,explanation:[{line:1,text:"Works the same across all SQL Server versions."}]}}},{id:183,section:1,name:"Customers Who Never Order",difficulty:"Easy",topic:"LEFT JOIN",leetcodeUrl:"https://leetcode.com/problems/customers-who-never-order/",tip:"Perform a LEFT JOIN from Customers to Orders and filter for orders.customerId IS NULL.",description:"Write a SQL query to report all customers who never order anything.",chatbotData:{intuition:"A LEFT JOIN preserves all customers. If a customer has never ordered, their corresponding order columns will be NULL. We can filter on `o.customerId IS NULL` or use `NOT IN` / `NOT EXISTS` to find them.",complexity:`Time Complexity: O(N + M) assuming index on customerId.
Space Complexity: O(1).`,edgeCases:`1. All customers have ordered: returns empty.
2. No customers have ordered: returns all customers.`,debugging:"Make sure you filter for `Orders.customerId IS NULL` and not Customers.id!"},solutions:{mysql:{code:`SELECT c.name AS Customers
FROM Customers c
LEFT JOIN Orders o
ON c.id = o.customerId
WHERE o.customerId IS NULL;`,explanation:[{line:1,text:"Select the customer name and alias it as 'Customers'."},{line:2,text:"Select from the Customers table (aliased as 'c')."},{line:3,text:"LEFT JOIN Orders (aliased as 'o') on customer ID."},{line:5,text:"Filter for rows where the order's customerId is NULL, representing unmatched records."}]},postgresql:{code:`SELECT c.name AS "Customers"
FROM Customers c
LEFT JOIN Orders o
ON c.id = o.customerId
WHERE o.customerId IS NULL;`,explanation:[{line:1,text:"Use quotes for 'Customers' alias to preserve camelCase header format."}]},mssql:{code:`SELECT c.name AS Customers
FROM Customers c
LEFT OUTER JOIN Orders o
ON c.id = o.customerId
WHERE o.customerId IS NULL;`,explanation:[{line:3,text:"LEFT OUTER JOIN is functionally equivalent and SQL Server compliant."}]}}},{id:184,section:1,name:"Department Highest Salary",difficulty:"Medium",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/department-highest-salary/",tip:"Use a subquery to find maximum salaries grouped by department, then join with Employee.",description:"Write a SQL query to find employees who have the highest salary in each of the departments.",chatbotData:{intuition:"First, find the maximum salary for each departmentId. Then, filter the main Employee table to only rows whose departmentId and salary match that maximum pair.",complexity:`Time Complexity: O(N) with indexes on departmentId and salary.
Space Complexity: O(D) where D is the number of departments.`,edgeCases:`1. Multiple employees share the highest salary: all must be returned.
2. A department has no employees: it is ignored.`,debugging:"If your solution is missing tied highest earners, check if you grouped on Employee names instead of departmentId."},solutions:{mysql:{code:`SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (e.departmentId, e.salary) IN (
  SELECT departmentId, MAX(salary)
  FROM Employee
  GROUP BY departmentId
);`,explanation:[{line:1,text:"Select department name, employee name, and salary."},{line:3,text:"Join Employee and Department on department ID."},{line:4,text:"Filter using a row value constructor IN subquery..."},{line:5,text:"...to select the maximum salary grouped by department ID."}]},postgresql:{code:`SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (e.departmentId, e.salary) IN (
  SELECT departmentId, MAX(salary)
  FROM Employee
  GROUP BY departmentId
);`,explanation:[{line:4,text:"PostgreSQL supports tuple-based (row value constructor) IN subqueries."}]},mssql:{code:`SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
JOIN (
  SELECT departmentId, MAX(salary) AS max_sal
  FROM Employee
  GROUP BY departmentId
) m ON e.departmentId = m.departmentId AND e.salary = m.max_sal;`,explanation:[{line:4,text:"Since SQL Server does not support tuple-based IN (A, B) checks, join on an aggregate subquery instead."},{line:8,text:"Join matching both department ID and the maximum salary."}]}}},{id:185,section:1,name:"Department Top Three Salaries",difficulty:"Hard",topic:"Window Function",leetcodeUrl:"https://leetcode.com/problems/department-top-three-salaries/",tip:"Use DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) in a CTE.",description:"Write a SQL query to find the employees who are high earners in each of the departments (top 3 unique salaries).",chatbotData:{intuition:"We need the top 3 *unique* salaries. This is what DENSE_RANK() is built for. DENSE_RANK() assigns consecutive ranks without skipping numbers (e.g. 1, 2, 2, 3), whereas RANK() skips (e.g. 1, 2, 2, 4). Partition by department and filter for rank <= 3.",complexity:`Time Complexity: O(N log N) for partition sorting.
Space Complexity: O(N) to store ranked results.`,edgeCases:`1. Fewer than 3 employees in a department: returns all.
2. Tiers / multiple duplicates: DENSE_RANK correctly returns all matching employees.`,debugging:"Make sure you use DENSE_RANK() instead of RANK() or ROW_NUMBER() to handle duplicate salary ties correctly!"},solutions:{mysql:{code:`WITH RankedEmployees AS (
  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,
         DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
  FROM Employee e
  JOIN Department d ON e.departmentId = d.id
)
SELECT Department, Employee, Salary
FROM RankedEmployees
WHERE rnk <= 3;`,explanation:[{line:1,text:"Create a Common Table Expression (CTE) to calculate ranks."},{line:3,text:"Compute DENSE_RANK() partitioned by department, ordered descending by salary."},{line:4,text:"Join Employee with Department."},{line:7,text:"Query the CTE."},{line:9,text:"Filter out ranks greater than 3."}]},postgresql:{code:`WITH RankedEmployees AS (
  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,
         DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
  FROM Employee e
  JOIN Department d ON e.departmentId = d.id
)
SELECT Department, Employee, Salary
FROM RankedEmployees
WHERE rnk <= 3;`,explanation:[{line:3,text:"PostgreSQL fully supports window functions inside standard CTE expressions."}]},mssql:{code:`WITH RankedEmployees AS (
  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,
         DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
  FROM Employee e
  JOIN Department d ON e.departmentId = d.id
)
SELECT Department, Employee, Salary
FROM RankedEmployees
WHERE rnk <= 3;`,explanation:[{line:3,text:"Compatible across all SQL Server versions supporting window aggregates."}]}}},{id:196,section:1,name:"Delete Duplicate Emails",difficulty:"Easy",topic:"DML",leetcodeUrl:"https://leetcode.com/problems/delete-duplicate-emails/",tip:"Use a self-join deletion or a subquery to keep only the minimum id for each email.",description:"Write a SQL query to delete all duplicate email entries in a Person table, keeping only unique emails based on its smallest id.",chatbotData:{intuition:"We want to delete a row if another row exists with the same email but a smaller ID. We can express this by joining the table to itself on email and comparing ids.",complexity:`Time Complexity: O(N²) in the worst case without indexes, but O(N) optimized.
Space Complexity: O(1).`,edgeCases:`1. No duplicates: no deletions happen.
2. Multiple duplicates: all but the lowest ID are deleted.`,debugging:"Make sure you compare the ID fields correctly to keep the *smallest* ID (`p1.id > p2.id`)."},solutions:{mysql:{code:`DELETE p1
FROM Person p1, Person p2
WHERE p1.email = p2.email
AND p1.id > p2.id;`,explanation:[{line:1,text:"Delete from table instance 'p1'."},{line:2,text:"Declare two alias instances of Person: 'p1' and 'p2'."},{line:3,text:"Join on matching email addresses."},{line:4,text:"Condition: delete 'p1' if its ID is strictly greater than 'p2''s ID."}]},postgresql:{code:`DELETE FROM Person
WHERE id NOT IN (
  SELECT MIN(id)
  FROM Person
  GROUP BY email
);`,explanation:[{line:1,text:"Delete from Person..."},{line:2,text:"...where the ID is NOT the minimum ID..."},{line:4,text:"...for each distinct email address group."}]},mssql:{code:`WITH CTE AS (
  SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as rn
  FROM Person
)
DELETE FROM Person
WHERE id IN (
  SELECT id
  FROM CTE
  WHERE rn > 1
);`,explanation:[{line:1,text:"Define a CTE to identify duplicate rows."},{line:2,text:"Generate row numbers partitioned by email, ordering by ID."},{line:5,text:"Delete rows..."},{line:8,text:"...where the row number is greater than 1 (meaning it's a duplicate)."}]}}},{id:197,section:1,name:"Rising Temperature",difficulty:"Easy",topic:"Date Join",leetcodeUrl:"https://leetcode.com/problems/rising-temperature/",tip:"Use DATEDIFF or date addition to join Weather to itself with a 1-day difference.",description:"Write a SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).",chatbotData:{intuition:"We must join the Weather table to itself. One side represents today, the other yesterday. The join condition checks if today's recordDate is exactly 1 day after yesterday's. Then filter where today's temperature > yesterday's.",complexity:`Time Complexity: O(N log N) if recordDate is indexed.
Space Complexity: O(1).`,edgeCases:`1. Gaps in dates: if a date is missing, it won't join to a 'yesterday' and is ignored correctly.
2. Non-consecutive rows: join guarantees we match actual yesterday, not just previous row.`,debugging:"In MySQL, DATEDIFF(a, b) = 1 means a - b = 1. In SQL Server, DATEDIFF(day, b, a) = 1. Be careful with parameter order!"},solutions:{mysql:{code:`SELECT w1.id
FROM Weather w1
JOIN Weather w2
ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE w1.temperature > w2.temperature;`,explanation:[{line:1,text:"Select today's weather ID."},{line:2,text:"Load Weather as w1 (today) and w2 (yesterday)."},{line:4,text:"Join condition: DATEDIFF(today, yesterday) is exactly 1 day."},{line:5,text:"Filter: today's temperature exceeds yesterday's."}]},postgresql:{code:`SELECT w1.id
FROM Weather w1
JOIN Weather w2
ON w1.recordDate = w2.recordDate + INTERVAL '1 day'
WHERE w1.temperature > w2.temperature;`,explanation:[{line:4,text:"In PostgreSQL, add a 1-day interval to yesterday's date to match today's."}]},mssql:{code:`SELECT w1.id
FROM Weather w1
JOIN Weather w2
ON DATEDIFF(day, w2.recordDate, w1.recordDate) = 1
WHERE w1.temperature > w2.temperature;`,explanation:[{line:4,text:"In SQL Server, DATEDIFF takes the date part 'day' as the first argument, and computes w1 - w2."}]}}},{id:177,section:1,name:"Nth Highest Salary",difficulty:"Medium",topic:"Function / OFFSET",leetcodeUrl:"https://leetcode.com/problems/nth-highest-salary/",tip:"Subtract 1 from N first because OFFSET is 0-indexed.",description:"Write a SQL query to get the nth highest salary from the Employee table.",chatbotData:{intuition:"To find the Nth highest salary, we sort unique salaries descending, and skip N-1 rows. We wrap this in a user-defined function or CTE. Since OFFSET is 0-indexed, we must adjust N to N-1 before query execution.",complexity:`Time Complexity: O(N log N) for sorting.
Space Complexity: O(1).`,edgeCases:`1. Fewer than N distinct salaries: returns NULL.
2. N is non-positive: handled by pre-checks or returns NULL.`,debugging:"Do not put expressions like `N-1` directly inside `LIMIT 1 OFFSET N-1` in MySQL; you must set a variable `SET N = N - 1` beforehand."},solutions:{mysql:{code:`CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N = N - 1;
  RETURN (
      SELECT DISTINCT salary
      FROM Employee
      ORDER BY salary DESC
      LIMIT 1 OFFSET N
  );
END`,explanation:[{line:1,text:"Define MySQL function accepting parameter N, returning INT."},{line:3,text:"Decrement N by 1 to adjust for 0-indexed OFFSET."},{line:4,text:"Return the result of the query."},{line:5,text:"Select distinct salaries descending, skipping N rows, taking 1."}]},postgresql:{code:`CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT AS $$
BEGIN
  RETURN (
      SELECT DISTINCT salary
      FROM Employee
      ORDER BY salary DESC
      LIMIT 1 OFFSET N - 1
  );
END;
$$ LANGUAGE plpgsql;`,explanation:[{line:1,text:"PostgreSQL function syntax using standard plpgsql language."},{line:7,text:"PostgreSQL allows expressions directly in LIMIT/OFFSET, so offset N - 1 works directly."}]},mssql:{code:`CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
  RETURN (
      SELECT DISTINCT salary
      FROM Employee
      ORDER BY salary DESC
      OFFSET @N-1 ROWS FETCH NEXT 1 ROWS ONLY
  );
END`,explanation:[{line:1,text:"SQL Server function using @N parameter syntax."},{line:7,text:"Use OFFSET @N-1 ROWS FETCH NEXT 1 ROWS ONLY syntax for pagination in MS SQL."}]}}},{id:178,section:1,name:"Rank Scores",difficulty:"Medium",topic:"Window Function",leetcodeUrl:"https://leetcode.com/problems/rank-scores/",tip:"Use DENSE_RANK() ordered by score descending.",description:"Write a SQL query to rank scores. The scores should be ranked from the highest to the lowest.",chatbotData:{intuition:"We want contiguous ranks for scores. If there's a tie, they get the same rank, and the next rank should be the next consecutive integer. This is the exact definition of DENSE_RANK().",complexity:`Time Complexity: O(N log N) for sorting.
Space Complexity: O(N).`,edgeCases:`1. Empty table: returns empty.
2. All scores identical: all get rank 1.`,debugging:"In SQL, `rank` is often a reserved word. Make sure to alias it with quotes: `AS 'rank'` or `AS \"rank\"`."},solutions:{mysql:{code:`SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank'
FROM Scores;`,explanation:[{line:1,text:"Select score and compute DENSE_RANK() ordered descending."},{line:2,text:"Alias the output column as 'rank' using quotes to avoid reserved keyword conflicts."}]},postgresql:{code:`SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS "rank"
FROM Scores;`,explanation:[{line:1,text:"PostgreSQL requires double quotes to retain lowercase column names like 'rank'."}]},mssql:{code:`SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS [rank]
FROM Scores;`,explanation:[{line:1,text:"Use square brackets [rank] to escape reserved keyword in SQL Server."}]}}},{id:180,section:1,name:"Consecutive Numbers",difficulty:"Medium",topic:"Window Function",leetcodeUrl:"https://leetcode.com/problems/consecutive-numbers/",tip:"Use LAG(num, 1) and LAG(num, 2) to check if the current number matches the previous two.",description:"Write a SQL query to find all numbers that appear at least three times consecutively.",chatbotData:{intuition:"Consecutive means they appear one after another by ID order. We can use LAG() to look back 1 and 2 rows. If the current number matches the value from 1 row ago and 2 rows ago, it appears consecutively 3 times.",complexity:`Time Complexity: O(N log N) to sort rows for LAG lookups.
Space Complexity: O(N).`,edgeCases:`1. Fewer than 3 rows: returns empty.
2. ID gap: problem assumes contiguous IDs or consecutive order.`,debugging:"Make sure you use `DISTINCT` in the outer select; a number appearing 4 times consecutively would generate duplicate matches."},solutions:{mysql:{code:`SELECT DISTINCT num AS ConsecutiveNums
FROM (
  SELECT num,
         LAG(num, 1) OVER (ORDER BY id) AS prev1,
         LAG(num, 2) OVER (ORDER BY id) AS prev2
  FROM Logs
) t
WHERE num = prev1 AND num = prev2;`,explanation:[{line:1,text:"Select unique numbers satisfying the condition."},{line:4,text:"Use LAG(num, 1) to get the value of the previous row."},{line:5,text:"Use LAG(num, 2) to get the value of the row 2 steps back."},{line:8,text:"Filter where all three values match."}]},postgresql:{code:`SELECT DISTINCT num AS "ConsecutiveNums"
FROM (
  SELECT num,
         LAG(num, 1) OVER (ORDER BY id) AS prev1,
         LAG(num, 2) OVER (ORDER BY id) AS prev2
  FROM Logs
) t
WHERE num = prev1 AND num = prev2;`,explanation:[{line:1,text:"Same window approach; quotes on alias for matching Case requirements."}]},mssql:{code:`SELECT DISTINCT num AS ConsecutiveNums
FROM (
  SELECT num,
         LAG(num, 1) OVER (ORDER BY id) AS prev1,
         LAG(num, 2) OVER (ORDER BY id) AS prev2
  FROM Logs
) t
WHERE num = prev1 AND num = prev2;`,explanation:[{line:4,text:"LAG window function works natively across SQL Server."}]}}},{id:262,section:2,name:"Trips and Users",difficulty:"Medium",topic:"Conditional Aggregation",leetcodeUrl:"https://leetcode.com/problems/trips-and-users/",tip:"Join Trips to Users twice (for client and driver) to filter out banned users, then calculate cancellation rate.",description:"Write a SQL query to find the cancellation rate of requests with unbanned users (both client and driver) each day between '2013-10-01' and '2013-10-03'. Round to 2 decimal points.",chatbotData:{intuition:"Filter out trips with banned clients or banned drivers. Then group by day. The cancellation rate is total cancelled trips divided by total trips. Use CASE WHEN inside SUM to count cancellations.",complexity:`Time Complexity: O(N) where N is the number of trips, with index on request_at.
Space Complexity: O(D) where D is the number of days.`,edgeCases:`1. Days with 0 trips: won't be returned (cancellation rate is undefined).
2. Float conversion: in PostgreSQL, divide by COUNT(*) using decimal numbers (e.g. 1.0) to avoid integer division.`,debugging:"Verify you checked both driver AND client banned status. And make sure dates are exactly '2013-10-01' and '2013-10-03' inclusive."},solutions:{mysql:{code:`SELECT request_at AS Day,
       ROUND(SUM(CASE WHEN status != 'completed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS 'Cancellation Rate'
FROM Trips t
JOIN Users u1 ON t.client_id = u1.users_id AND u1.banned = 'No'
JOIN Users u2 ON t.driver_id = u2.users_id AND u2.banned = 'No'
WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at;`,explanation:[{line:2,text:"Compute ratio of cancelled trips (non-completed status) to total trips, rounding to 2 decimal places."},{line:4,text:"Join Users u1 on client ID to filter out banned clients."},{line:5,text:"Join Users u2 on driver ID to filter out banned drivers."},{line:6,text:"Restrict query to the requested 3-day window."}]},postgresql:{code:`SELECT request_at AS Day,
       ROUND(SUM(CASE WHEN status != 'completed' THEN 1.0 ELSE 0.0 END) / COUNT(*), 2) AS "Cancellation Rate"
FROM Trips t
JOIN Users u1 ON t.client_id = u1.users_id AND u1.banned = 'No'
JOIN Users u2 ON t.driver_id = u2.users_id AND u2.banned = 'No'
WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at;`,explanation:[{line:2,text:"Use 1.0 and 0.0 inside SUM to force floating-point math in PostgreSQL and prevent truncated division."}]},mssql:{code:`SELECT request_at AS Day,
       CAST(ROUND(SUM(CASE WHEN status != 'completed' THEN 1.0 ELSE 0.0 END) / COUNT(*), 2) AS DECIMAL(10,2)) AS [Cancellation Rate]
FROM Trips t
INNER JOIN Users u1 ON t.client_id = u1.users_id AND u1.banned = 'No'
INNER JOIN Users u2 ON t.driver_id = u2.users_id AND u2.banned = 'No'
WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at;`,explanation:[{line:2,text:"Cast to DECIMAL(10,2) to ensure trailing zeroes are preserved in output."}]}}},{id:511,section:2,name:"Game Play Analysis I",difficulty:"Easy",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/game-play-analysis-i/",tip:"Use MIN(event_date) grouped by player_id.",description:"Write a SQL query to report the first login date for each player.",chatbotData:{intuition:"The first login date is simply the minimum date recorded for each player. A simple GROUP BY player_id with MIN(event_date) solves this.",complexity:`Time Complexity: O(N) to scan the Activity table.
Space Complexity: O(P) where P is the number of distinct players.`,edgeCases:"1. A player has only 1 login: MIN returns that date.",debugging:"Ensure you group by player_id, not event_date."},solutions:{mysql:{code:`SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;`,explanation:[{line:1,text:"Select player ID and their minimum login date."},{line:3,text:"Group rows by player ID so aggregates apply per player."}]},postgresql:{code:`SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;`,explanation:[{line:1,text:"Standard GROUP BY aggregator."}]},mssql:{code:`SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;`,explanation:[{line:1,text:"Standard syntax compatible across SQL Server."}]}}},{id:512,section:2,name:"Game Play Analysis II",difficulty:"Medium",topic:"Subquery",leetcodeUrl:"https://leetcode.com/problems/game-play-analysis-ii/",tip:"Use an IN subquery with player_id and event_date matching the first login per player.",description:"Write a SQL query to report the device that each player used for their first login.",chatbotData:{intuition:"We cannot just select device_id in a GROUP BY player_id query because device_id is not part of the aggregation. Instead, we query the first login dates, and filter our main table to match those exact player_id and event_date combinations.",complexity:`Time Complexity: O(N log N) without indexes, O(N) with index.
Space Complexity: O(P) where P is the number of players.`,edgeCases:"1. Multiple logins on the same day: question assumes one login record per date.",debugging:"If your database doesn't support tuple IN checks (like SQL Server), use a JOIN with the aggregated subquery."},solutions:{mysql:{code:`SELECT player_id, device_id
FROM Activity
WHERE (player_id, event_date) IN (
  SELECT player_id, MIN(event_date)
  FROM Activity
  GROUP BY player_id
);`,explanation:[{line:1,text:"Select player and device."},{line:3,text:"Filter where both player_id and event_date..."},{line:4,text:"...exist in the subquery matching player to their first login date."}]},postgresql:{code:`SELECT player_id, device_id
FROM Activity
WHERE (player_id, event_date) IN (
  SELECT player_id, MIN(event_date)
  FROM Activity
  GROUP BY player_id
);`,explanation:[{line:3,text:"Tuple IN comparison works natively in PostgreSQL."}]},mssql:{code:`SELECT a.player_id, a.device_id
FROM Activity a
JOIN (
  SELECT player_id, MIN(event_date) AS min_date
  FROM Activity
  GROUP BY player_id
) m ON a.player_id = m.player_id AND a.event_date = m.min_date;`,explanation:[{line:3,text:"Join on a subquery containing player_id and their first login date."},{line:7,text:"Match on both player ID and the minimum login date to select the correct device."}]}}},{id:534,section:2,name:"Game Play Analysis III",difficulty:"Medium",topic:"Window Function",leetcodeUrl:"https://leetcode.com/problems/game-play-analysis-iii/",tip:"Use SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) to compute running totals.",description:"Write a SQL query to report for each player and date, how many games played so far by the player. That is, the total number of games played by the player until that date.",chatbotData:{intuition:"Running totals are best solved with window functions. We want to sum games_played, partition (group) by player_id, and order by event_date so the aggregation accumulates chronologically.",complexity:`Time Complexity: O(N log N) for window sorting.
Space Complexity: O(N).`,edgeCases:"1. Only 1 log: running total is just that value.",debugging:"Do not forget ORDER BY inside OVER(); otherwise, it sums the entire partition at once instead of computing a running total."},solutions:{mysql:{code:`SELECT player_id, event_date,
       SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far
FROM Activity;`,explanation:[{line:1,text:"Select player ID and event date."},{line:2,text:"Compute running SUM of games played, partitioned by player and sorted by date."}]},postgresql:{code:`SELECT player_id, event_date,
       SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far
FROM Activity;`,explanation:[{line:2,text:"Window SUM works natively in PostgreSQL."}]},mssql:{code:`SELECT player_id, event_date,
       SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far
FROM Activity;`,explanation:[{line:2,text:"Compatible across all SQL Server versions supporting window aggregates."}]}}},{id:550,section:2,name:"Game Play Analysis IV",difficulty:"Medium",topic:"Date Join",leetcodeUrl:"https://leetcode.com/problems/game-play-analysis-iv/",tip:"Self-join on a.player_id = first_login.player_id AND today = first_login + 1 day, then calculate fraction.",description:"Write a SQL query to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places.",chatbotData:{intuition:"Find the first login date for each player. Then left join the Activity table to this subquery where the activity date is exactly 1 day after the first login date. Count players with a match, divided by total unique players.",complexity:`Time Complexity: O(N log N) due to aggregation and join.
Space Complexity: O(P) to hold unique players.`,edgeCases:`1. No players logging in consecutive days: returns 0.00.
2. Date function formats: handle MySQL DATEDIFF vs PostgreSQL date math carefully.`,debugging:"Make sure you divide by the total number of *distinct* players in the entire table, not just those who logged in on day 2."},solutions:{mysql:{code:`SELECT ROUND(
  COUNT(DISTINCT a.player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity),
  2
) AS fraction
FROM Activity a
JOIN (
  SELECT player_id, MIN(event_date) AS first_date
  FROM Activity
  GROUP BY player_id
) f ON a.player_id = f.player_id AND DATEDIFF(a.event_date, f.first_date) = 1;`,explanation:[{line:1,text:"Calculate and round the fraction to 2 decimals."},{line:2,text:"Divide count of consecutive-login players by total unique players."},{line:8,text:"Join Activity table 'a' with subquery 'f' containing each player's first login date."},{line:10,text:"Match where player logged in exactly 1 day after first_date."}]},postgresql:{code:`SELECT ROUND(
  CAST(COUNT(DISTINCT a.player_id) AS DECIMAL) / (SELECT COUNT(DISTINCT player_id) FROM Activity),
  2
) AS fraction
FROM Activity a
JOIN (
  SELECT player_id, MIN(event_date) AS first_date
  FROM Activity
  GROUP BY player_id
) f ON a.player_id = f.player_id AND a.event_date = f.first_date + INTERVAL '1 day';`,explanation:[{line:2,text:"Cast numerator to DECIMAL in PostgreSQL to avoid integer division."},{line:10,text:"Use PG date arithmetic: event_date = first_date + INTERVAL '1 day'."}]},mssql:{code:`SELECT ROUND(
  CAST(COUNT(DISTINCT a.player_id) AS FLOAT) / (SELECT COUNT(DISTINCT player_id) FROM Activity),
  2
) AS fraction
FROM Activity a
JOIN (
  SELECT player_id, MIN(event_date) AS first_date
  FROM Activity
  GROUP BY player_id
) f ON a.player_id = f.player_id AND DATEDIFF(day, f.first_date, a.event_date) = 1;`,explanation:[{line:2,text:"Cast count to FLOAT in SQL Server to avoid integer truncation."},{line:10,text:"Use SQL Server DATEDIFF(day, start, end) = 1."}]}}},{id:570,section:2,name:"Managers with at Least 5 Reports",difficulty:"Medium",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/managers-with-at-least-5-reports/",tip:"Use GROUP BY managerId HAVING COUNT(*) >= 5 in a subquery, then join with Employee to get their names.",description:"Write a SQL query to report the managers who have at least five direct reports.",chatbotData:{intuition:"First, group employees by managerId and filter for groups with a size of 5 or more. Then join the resulting manager IDs back to the Employee table to retrieve the manager's name.",complexity:`Time Complexity: O(N) to aggregate and join.
Space Complexity: O(M) where M is the number of managers.`,edgeCases:`1. A manager has 5 reports but their own name is NULL: returns NULL.
2. No managers have >= 5 reports: returns empty.`,debugging:"Do not count reports by grouping on manager names directly, because names are not unique. Always group on ID fields (managerId)."},solutions:{mysql:{code:`SELECT e.name
FROM Employee e
JOIN (
  SELECT managerId
  FROM Employee
  GROUP BY managerId
  HAVING COUNT(id) >= 5
) m ON e.id = m.managerId;`,explanation:[{line:1,text:"Select manager's name."},{line:3,text:"Join Employee table with a subquery of qualifying manager IDs."},{line:4,text:"Subquery: Group employees by managerId..."},{line:6,text:"...and filter for managerId groups with 5 or more reports."}]},postgresql:{code:`SELECT e.name
FROM Employee e
JOIN (
  SELECT managerId
  FROM Employee
  GROUP BY managerId
  HAVING COUNT(id) >= 5
) m ON e.id = m.managerId;`,explanation:[{line:1,text:"PostgreSQL syntax matches MySQL for this aggregation join."}]},mssql:{code:`SELECT e.name
FROM Employee e
INNER JOIN (
  SELECT managerId
  FROM Employee
  GROUP BY managerId
  HAVING COUNT(id) >= 5
) m ON e.id = m.managerId;`,explanation:[{line:3,text:"INNER JOIN syntax is fully standard in SQL Server."}]}}},{id:602,section:2,name:"Friend Requests II",difficulty:"Medium",topic:"UNION ALL",leetcodeUrl:"https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/",tip:"Use UNION ALL to combine requester_id and accepter_id columns into a single column, then count occurrences.",description:"Write a SQL query to find the people who have the most friends and the most friends number.",chatbotData:{intuition:"A friendship is mutual. A user's total friends is their appearances as requester_id PLUS their appearances as accepter_id. We can use UNION ALL to merge both columns into one list of user IDs, then group by ID and count occurrences descending.",complexity:`Time Complexity: O(N log N) for grouping and sorting.
Space Complexity: O(N) to store temporary union records.`,edgeCases:"1. Multiple people tied for most friends: LeetCode tests usually guarantee a single winner or accept any one.",debugging:"Make sure you use `UNION ALL` instead of `UNION`. `UNION` removes duplicate rows, which would delete occurrences of users having multiple friendships!"},solutions:{mysql:{code:`WITH AllConnections AS (
  SELECT requester_id AS id FROM RequestAccepted
  UNION ALL
  SELECT accepter_id AS id FROM RequestAccepted
)
SELECT id, COUNT(*) AS num
FROM AllConnections
GROUP BY id
ORDER BY num DESC
LIMIT 1;`,explanation:[{line:1,text:"Create a CTE to combine requester and accepter columns."},{line:2,text:"Collect all user IDs that sent request."},{line:3,text:"UNION ALL retains duplicates so we don't lose occurrences."},{line:4,text:"Collect all user IDs that accepted request."},{line:8,text:"Group and count occurrences of each user ID, sorting highest to lowest."},{line:10,text:"Limit to 1 to return the user with the maximum friend count."}]},postgresql:{code:`WITH AllConnections AS (
  SELECT requester_id AS id FROM RequestAccepted
  UNION ALL
  SELECT accepter_id AS id FROM RequestAccepted
)
SELECT id, COUNT(*) AS num
FROM AllConnections
GROUP BY id
ORDER BY num DESC
LIMIT 1;`,explanation:[{line:10,text:"PostgreSQL supports LIMIT 1 for pagination."}]},mssql:{code:`WITH AllConnections AS (
  SELECT requester_id AS id FROM RequestAccepted
  UNION ALL
  SELECT accepter_id AS id FROM RequestAccepted
)
SELECT TOP 1 id, COUNT(*) AS num
FROM AllConnections
GROUP BY id
ORDER BY num DESC;`,explanation:[{line:6,text:"Use TOP 1 inside SELECT instead of LIMIT 1 at the end in SQL Server."}]}}},{id:608,section:2,name:"Tree Node",difficulty:"Medium",topic:"CASE WHEN",leetcodeUrl:"https://leetcode.com/problems/tree-node/",tip:"Use CASE WHEN to label nodes: p_id IS NULL is Root, id IN (SELECT p_id...) is Inner, others are Leaf.",description:"Write a SQL query to report the type of each node in the tree (Root, Inner, Leaf).",chatbotData:{intuition:`1. A node is a 'Root' if it has no parent (p_id IS NULL).
2. A node is 'Leaf' if it has a parent but is not a parent to any other node (id is never a p_id).
3. Otherwise, it is 'Inner'.`,complexity:`Time Complexity: O(N) or O(N log N) depending on index availability.
Space Complexity: O(1).`,edgeCases:"1. A tree with only one node (the root): labeled 'Root'.",debugging:"When checking `id NOT IN (SELECT p_id...)`, if any p_id is NULL, the IN check will return false/unknown. Make sure to filter `WHERE p_id IS NOT NULL` in your subquery."},solutions:{mysql:{code:`SELECT id,
       CASE
         WHEN p_id IS NULL THEN 'Root'
         WHEN id IN (SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL) THEN 'Inner'
         ELSE 'Leaf'
       END AS type
FROM Tree;`,explanation:[{line:2,text:"Use a CASE statement to determine node type."},{line:3,text:"Condition 1: If parent ID is NULL, it must be the Root node."},{line:4,text:"Condition 2: If the node ID exists as a parent to other nodes, it is an Inner node."},{line:5,text:"Condition 3: All other nodes are Leaf nodes."}]},postgresql:{code:`SELECT id,
       CASE
         WHEN p_id IS NULL THEN 'Root'
         WHEN id IN (SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL) THEN 'Inner'
         ELSE 'Leaf'
       END AS type
FROM Tree;`,explanation:[{line:1,text:"Standard CASE WHEN statement matches PostgreSQL syntax."}]},mssql:{code:`SELECT id,
       CASE
         WHEN p_id IS NULL THEN 'Root'
         WHEN id IN (SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL) THEN 'Inner'
         ELSE 'Leaf'
       END AS type
FROM Tree;`,explanation:[{line:1,text:"Compatible across all SQL Server versions."}]}}},{id:626,section:2,name:"Exchange Seats",difficulty:"Medium",topic:"CASE WHEN / MOD",leetcodeUrl:"https://leetcode.com/problems/exchange-seats/",tip:"Use MOD / modular arithmetic inside CASE WHEN to swap odd IDs to id+1 and even IDs to id-1.",description:"Write a SQL query to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.",chatbotData:{intuition:`We can modify the ID values using logic:
1. If ID is odd and it's the maximum ID in the table, keep it unchanged.
2. If ID is odd, map to ID + 1.
3. If ID is even, map to ID - 1.
Then order by the new ID.`,complexity:`Time Complexity: O(N log N) to sort the rows by seat ID.
Space Complexity: O(1).`,edgeCases:`1. Odd number of seats: the maximum ID is preserved correctly.
2. Only 1 seat: remains unchanged.`,debugging:"Be sure to order the final query output by the updated ID value (`ORDER BY id`)."},solutions:{mysql:{code:`SELECT CASE
         WHEN MOD(id, 2) = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id
         WHEN MOD(id, 2) = 1 THEN id + 1
         ELSE id - 1
       END AS id,
       student
FROM Seat
ORDER BY id;`,explanation:[{line:1,text:"Use CASE statement to calculate target IDs."},{line:2,text:"If ID is odd (MOD equals 1) and is the last record, don't swap it."},{line:3,text:"If ID is odd and not last, swap to next row (id + 1)."},{line:4,text:"Otherwise, ID is even: swap to previous row (id - 1)."},{line:8,text:"Sort the final result set by the newly computed IDs."}]},postgresql:{code:`SELECT CASE
         WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id
         WHEN id % 2 = 1 THEN id + 1
         ELSE id - 1
       END AS id,
       student
FROM Seat
ORDER BY id;`,explanation:[{line:2,text:"PostgreSQL uses standard '%' operator instead of MOD function."}]},mssql:{code:`SELECT CASE
         WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id
         WHEN id % 2 = 1 THEN id + 1
         ELSE id - 1
       END AS id,
       student
FROM Seat
ORDER BY id;`,explanation:[{line:2,text:"Use standard '%' modulo operator in SQL Server."}]}}},{id:1158,section:2,name:"Market Analysis I",difficulty:"Medium",topic:"LEFT JOIN",leetcodeUrl:"https://leetcode.com/problems/market-analysis-i/",tip:"LEFT JOIN Users to Orders with the date condition inside the ON clause, not in WHERE.",description:"Write a SQL query to find for each user, the join date and the number of orders they made as a buyer in 2019.",chatbotData:{intuition:"We want to report every user, even if they didn't place any orders in 2019. A LEFT JOIN from Users to Orders is required. Crucially, the date filter `order_date BETWEEN '2019-01-01' AND '2019-12-31'` must be placed inside the ON clause. If put in WHERE, it would act as an inner join filter and drop users with 0 orders.",complexity:`Time Complexity: O(N + M) assuming indexes on buyer_id.
Space Complexity: O(1).`,edgeCases:`1. Users with no orders: order count returns 0 (COALESCE/COUNT handles this).
2. Users with orders in other years: correctly ignored.`,debugging:"If users with 0 orders are missing from your output, check if your year filter is in the WHERE clause instead of the ON clause."},solutions:{mysql:{code:`SELECT u.user_id AS buyer_id, u.join_date,
       COUNT(o.order_id) AS orders_in_2019
FROM Users u
LEFT JOIN Orders o
ON u.user_id = o.buyer_id AND o.order_date BETWEEN '2019-01-01' AND '2019-12-31'
GROUP BY u.user_id, u.join_date;`,explanation:[{line:1,text:"Select buyer ID and user join date."},{line:2,text:"Count order IDs (not '*' so NULL values are counted as 0)."},{line:4,text:"Use LEFT JOIN to retain users who placed no orders."},{line:5,text:"Join condition: match buyer ID AND filter order dates between 2019-01-01 and 2019-12-31."},{line:6,text:"Group by user ID and join date."}]},postgresql:{code:`SELECT u.user_id AS buyer_id, u.join_date,
       COUNT(o.order_id) AS orders_in_2019
FROM Users u
LEFT JOIN Orders o
ON u.user_id = o.buyer_id AND EXTRACT(YEAR FROM o.order_date) = 2019
GROUP BY u.user_id, u.join_date;`,explanation:[{line:5,text:"Use EXTRACT(YEAR FROM date) for alternative clean year filtering in PostgreSQL."}]},mssql:{code:`SELECT u.user_id AS buyer_id, u.join_date,
       COUNT(o.order_id) AS orders_in_2019
FROM Users u
LEFT OUTER JOIN Orders o
ON u.user_id = o.buyer_id AND YEAR(o.order_date) = 2019
GROUP BY u.user_id, u.join_date;`,explanation:[{line:5,text:"Use standard SQL Server YEAR(date) function in join condition."}]}}},{id:1174,section:2,name:"Immediate Food Delivery II",difficulty:"Medium",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/immediate-food-delivery-ii/",tip:"Filter for first orders using (customer_id, order_date) IN (MIN date subquery), then find percentage.",description:"Write a SQL query to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.",chatbotData:{intuition:"First, find each customer's first order date. Then query rows matching those (customer_id, first_order_date) pairs. An order is 'immediate' if order_date equals customer_pref_delivery_date. Calculate the ratio of immediate first orders to total first orders.",complexity:`Time Complexity: O(N log N) to identify minimum dates and join.
Space Complexity: O(P) where P is the number of customers.`,edgeCases:"1. Customer has multiple orders on their first day: database logic matches first order day.",debugging:"Remember to multiply the ratio by 100.0 before dividing, to avoid decimal truncation."},solutions:{mysql:{code:`SELECT ROUND(
  SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) * 100.0 / COUNT(*),
  2
) AS immediate_percentage
FROM Delivery
WHERE (customer_id, order_date) IN (
  SELECT customer_id, MIN(order_date)
  FROM Delivery
  GROUP BY customer_id
);`,explanation:[{line:1,text:"Round the final aggregate percentage to 2 decimal places."},{line:2,text:"Calculate percentage: count immediate orders (where date matches preference) times 100 divided by total first orders."},{line:5,text:"Filter only first orders using a tuple IN clause..."},{line:6,text:"...to select the minimum order date for each customer."}]},postgresql:{code:`SELECT ROUND(
  CAST(SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(*) AS DECIMAL),
  2
) AS immediate_percentage
FROM Delivery
WHERE (customer_id, order_date) IN (
  SELECT customer_id, MIN(order_date)
  FROM Delivery
  GROUP BY customer_id
);`,explanation:[{line:2,text:"Cast the division results to DECIMAL in PostgreSQL before rounding."}]},mssql:{code:`WITH FirstOrders AS (
  SELECT customer_id, MIN(order_date) AS min_date
  FROM Delivery
  GROUP BY customer_id
)
SELECT ROUND(
  SUM(CASE WHEN d.order_date = d.customer_pref_delivery_date THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(*),
  2
) AS immediate_percentage
FROM Delivery d
JOIN FirstOrders f ON d.customer_id = f.customer_id AND d.order_date = f.min_date;`,explanation:[{line:1,text:"Create a CTE 'FirstOrders' to find minimum order dates for each customer."},{line:9,text:"Join the Delivery table to the CTE to isolate each customer's first order."}]}}},{id:1193,section:2,name:"Monthly Transactions I",difficulty:"Medium",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/monthly-transactions-i/",tip:"Use DATE_FORMAT or similar string formatting to group by month and country, then sum columns conditional on state.",description:"Write a SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.",chatbotData:{intuition:"We group transactions by country and month (yyyy-mm format). We count all transactions and sum their total amounts. To get the approved counts and totals, we use CASE WHEN to only sum values where state = 'approved'.",complexity:`Time Complexity: O(N log N) to group values.
Space Complexity: O(U) where U is unique month-country pairs.`,edgeCases:`1. Countries with only 'declined' transactions: approved count should be 0, approved amount should be 0.
2. NULL countries: handled by standard grouping.`,debugging:"Make sure you group by BOTH country and month. Use the appropriate date function (DATE_FORMAT for MySQL, TO_CHAR for PostgreSQL, FORMAT for SQL Server)."},solutions:{mysql:{code:`SELECT DATE_FORMAT(trans_date, '%Y-%m') AS month, country,
       COUNT(*) AS trans_count,
       SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
       SUM(amount) AS trans_total_amount,
       SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM Transactions
GROUP BY DATE_FORMAT(trans_date, '%Y-%m'), country;`,explanation:[{line:1,text:"Extract month in YYYY-MM format and select country."},{line:2,text:"Count total transactions."},{line:3,text:"Use CASE WHEN to count only 'approved' transactions."},{line:4,text:"Sum total transaction amounts."},{line:5,text:"Sum transaction amounts only if they are approved."},{line:7,text:"Group results by month and country."}]},postgresql:{code:`SELECT TO_CHAR(trans_date, 'YYYY-MM') AS month, country,
       COUNT(*) AS trans_count,
       SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
       SUM(amount) AS trans_total_amount,
       SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM Transactions
GROUP BY TO_CHAR(trans_date, 'YYYY-MM'), country;`,explanation:[{line:1,text:"In PostgreSQL, use TO_CHAR(date, 'YYYY-MM') for date formatting."}]},mssql:{code:`SELECT FORMAT(trans_date, 'yyyy-MM') AS month, country,
       COUNT(*) AS trans_count,
       SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
       SUM(amount) AS trans_total_amount,
       SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM Transactions
GROUP BY FORMAT(trans_date, 'yyyy-MM'), country;`,explanation:[{line:1,text:"In SQL Server, use FORMAT(date, 'yyyy-MM') for date grouping."}]}}},{id:1321,section:2,name:"Restaurant Growth",difficulty:"Medium",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/restaurant-growth/",tip:"Use SUM() OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) on daily aggregates.",description:"Write a SQL query to compute the moving average of how much the customer paid in a seven-day window (current day + 6 days before).",chatbotData:{intuition:"First, group deposits by visited_on to get daily totals. Then, apply a sliding window function: sum the daily totals over a window spanning 6 preceding rows to the current row. To ensure we have a full 7-day window, filter out the first 6 records using DENSE_RANK() or similar offsets.",complexity:`Time Complexity: O(N log N) for window aggregations.
Space Complexity: O(D) where D is unique days.`,edgeCases:"1. Fewer than 7 days total: returns empty.",debugging:"Be sure to group by visited_on *before* applying the window SUM. Multiple customers can visit on the same day!"},solutions:{mysql:{code:`SELECT visited_on, amount,
       ROUND(amount / 7, 2) AS average_amount
FROM (
  SELECT visited_on,
         SUM(day_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
         DENSE_RANK() OVER (ORDER BY visited_on) AS rnk
  FROM (
    SELECT visited_on, SUM(amount) AS day_amount
    FROM Customer
    GROUP BY visited_on
  ) t
) t2
WHERE rnk >= 7;`,explanation:[{line:2,text:"Round the moving average (amount divided by 7) to 2 decimal places."},{line:5,text:"Window sum of daily totals over the current day plus 6 preceding days."},{line:6,text:"Assign dense rank order to identify and exclude the first 6 incomplete days."},{line:8,text:"Compute total daily amount grouped by visit date first."},{line:13,text:"Filter: return only days with a complete 7-day history (rank >= 7)."}]},postgresql:{code:`SELECT visited_on, amount,
       ROUND(CAST(amount AS DECIMAL) / 7, 2) AS average_amount
FROM (
  SELECT visited_on,
         SUM(day_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
         DENSE_RANK() OVER (ORDER BY visited_on) AS rnk
  FROM (
    SELECT visited_on, SUM(amount) AS day_amount
    FROM Customer
    GROUP BY visited_on
  ) t
) t2
WHERE rnk >= 7;`,explanation:[{line:2,text:"Cast sum amount to DECIMAL in PostgreSQL before dividing to get correct decimals."}]},mssql:{code:`SELECT visited_on, amount,
       ROUND(CAST(amount AS FLOAT) / 7, 2) AS average_amount
FROM (
  SELECT visited_on,
         SUM(day_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
         DENSE_RANK() OVER (ORDER BY visited_on) AS rnk
  FROM (
    SELECT visited_on, SUM(amount) AS day_amount
    FROM Customer
    GROUP BY visited_on
  ) t
) t2
WHERE rnk >= 7;`,explanation:[{line:2,text:"Cast sum amount to FLOAT in SQL Server before dividing."}]}}},{id:1341,section:2,name:"Movie Rating",difficulty:"Medium",topic:"UNION ALL",leetcodeUrl:"https://leetcode.com/problems/movie-rating/",tip:"Write two separate queries (one for top user, one for top movie) and combine them using UNION ALL.",description:"Write a SQL query to: 1. Find the name of the user who has rated the greatest number of movies (tie-breaker: lexicographically smaller name). 2. Find the movie name with the highest average rating in February 2020 (tie-breaker: lexicographically smaller name).",chatbotData:{intuition:"This is a two-part query combined into one result set. We calculate the top user using aggregates and sorting. Then we calculate the top movie by average rating in Feb 2020. Finally, combine both outputs using UNION ALL.",complexity:`Time Complexity: O(N log N) for grouping and sorting.
Space Complexity: O(N).`,edgeCases:"1. Ties: order by name/title ascending as the secondary sort key to break ties correctly.",debugging:"Make sure you use UNION ALL. If the same string is returned by both parts (highly unlikely but possible), UNION would collapse them into 1 row."},solutions:{mysql:{code:`(SELECT u.name AS results
 FROM MovieRating mr
 JOIN Users u ON mr.user_id = u.user_id
 GROUP BY u.name
 ORDER BY COUNT(*) DESC, u.name ASC
 LIMIT 1)
UNION ALL
(SELECT m.title AS results
 FROM MovieRating mr
 JOIN Movies m ON mr.movie_id = m.movie_id
 WHERE mr.created_at BETWEEN '2020-02-01' AND '2020-02-29'
 GROUP BY m.title
 ORDER BY AVG(mr.rating) DESC, m.title ASC
 LIMIT 1);`,explanation:[{line:1,text:"First part: query for the top user."},{line:5,text:"Order by rate count descending, then user name ascending."},{line:7,text:"UNION ALL combines the results of both subqueries."},{line:8,text:"Second part: query for the top movie."},{line:11,text:"Filter only reviews created in February 2020."},{line:13,text:"Order by average rating descending, then movie title ascending."}]},postgresql:{code:`(SELECT u.name AS results
 FROM MovieRating mr
 JOIN Users u ON mr.user_id = u.user_id
 GROUP BY u.name
 ORDER BY COUNT(*) DESC, u.name ASC
 LIMIT 1)
UNION ALL
(SELECT m.title AS results
 FROM MovieRating mr
 JOIN Movies m ON mr.movie_id = m.movie_id
 WHERE mr.created_at BETWEEN '2020-02-01' AND '2020-02-29'
 GROUP BY m.title
 ORDER BY AVG(mr.rating) DESC, m.title ASC
 LIMIT 1);`,explanation:[{line:1,text:"Syntax matches MySQL exactly for this combined query."}]},mssql:{code:`SELECT results FROM (
  SELECT TOP 1 u.name AS results
  FROM MovieRating mr
  INNER JOIN Users u ON mr.user_id = u.user_id
  GROUP BY u.name
  ORDER BY COUNT(*) DESC, u.name ASC
) t1
UNION ALL
SELECT results FROM (
  SELECT TOP 1 m.title AS results
  FROM MovieRating mr
  INNER JOIN Movies m ON mr.movie_id = m.movie_id
  WHERE mr.created_at >= '2020-02-01' AND mr.created_at <= '2020-02-29'
  GROUP BY m.title
  ORDER BY AVG(mr.rating) DESC, m.title ASC
) t2;`,explanation:[{line:2,text:"In SQL Server, subqueries with TOP 1 are required since LIMIT is not supported."}]}}},{id:1204,section:3,name:"Last Person to Fit in the Bus",difficulty:"Medium",topic:"Sliding Window",leetcodeUrl:"https://leetcode.com/problems/last-person-to-fit-in-the-bus/",tip:"Use running total SUM(weight) OVER (ORDER BY turn) and find the last person where weight <= 1000.",description:"Write a SQL query to find the person_name of the last person that can fit on the bus without exceeding the weight limit of 1000 kgs.",chatbotData:{intuition:"First, compute the running sum of weight ordered by turn. This represents the total weight of the bus after each person boards. Then, filter for total weights <= 1000, sort by total weight descending, and take the first record.",complexity:`Time Complexity: O(N log N) to compute the running sum.
Space Complexity: O(N).`,edgeCases:`1. First person exceeds 1000kg: no one fits (handled by data assumptions usually).
2. Total weight fits exactly: matches that last person.`,debugging:"Ensure you sort by running weight descending (`ORDER BY cumulative_weight DESC`) to select the *last* person who fits."},solutions:{mysql:{code:`SELECT person_name
FROM (
  SELECT person_name,
         SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
  FROM Queue
) t
WHERE cumulative_weight <= 1000
ORDER BY cumulative_weight DESC
LIMIT 1;`,explanation:[{line:1,text:"Select the name of the passenger."},{line:4,text:"Calculate the running total of weight ordered by boarding turn."},{line:7,text:"Filter only records where the cumulative weight is within the 1000kg limit."},{line:8,text:"Order descending to put the last boarded person on top."},{line:9,text:"Limit to 1 to select that person."}]},postgresql:{code:`SELECT person_name
FROM (
  SELECT person_name,
         SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
  FROM Queue
) t
WHERE cumulative_weight <= 1000
ORDER BY cumulative_weight DESC
LIMIT 1;`,explanation:[{line:1,text:"Standard window syntax works identically in PostgreSQL."}]},mssql:{code:`SELECT TOP 1 person_name
FROM (
  SELECT person_name,
         SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
  FROM Queue
) t
WHERE cumulative_weight <= 1000
ORDER BY cumulative_weight DESC;`,explanation:[{line:1,text:"Use SELECT TOP 1 at the beginning of the query instead of LIMIT 1 in SQL Server."}]}}},{id:601,section:3,name:"Human Traffic of Stadium",difficulty:"Hard",topic:"Window Function",leetcodeUrl:"https://leetcode.com/problems/human-traffic-of-stadium/",tip:"Use row numbers difference (id - ROW_NUMBER() OVER()) to identify consecutive blocks of rows.",description:"Write a SQL query to display the records with three or more consecutive rows and the number of people is greater than or equal to 100.",chatbotData:{intuition:"First, filter out rows where people < 100. For the remaining rows, if they are consecutive, their `id` and their sequential `row_number` will increase at the same rate. This means `id - row_number` will be constant for consecutive groups. Group by this difference to filter groups with size >= 3.",complexity:`Time Complexity: O(N log N) for window sorting.
Space Complexity: O(N).`,edgeCases:`1. Empty table: returns empty.
2. Multiple separate consecutive groups: groups are correctly isolated by their differences.`,debugging:"Make sure you calculate the row numbers AFTER filtering for people >= 100, otherwise the group ID math won't work!"},solutions:{mysql:{code:`WITH ConsecutiveGroups AS (
  SELECT id, visit_date, people,
         id - ROW_NUMBER() OVER (ORDER BY id) AS grp
  FROM Stadium
  WHERE people >= 100
)
SELECT id, visit_date, people
FROM ConsecutiveGroups
WHERE grp IN (
  SELECT grp
  FROM ConsecutiveGroups
  GROUP BY grp
  HAVING COUNT(*) >= 3
)
ORDER BY visit_date;`,explanation:[{line:1,text:"Create CTE to isolate visitors >= 100 and identify blocks."},{line:3,text:"Compute grouping value: subtract row number from ID."},{line:5,text:"Pre-filter: keep only rows where crowd count is at least 100."},{line:9,text:"Filter rows whose group ID..."},{line:11,text:"...belongs to groups with a size of 3 or more."}]},postgresql:{code:`WITH ConsecutiveGroups AS (
  SELECT id, visit_date, people,
         id - ROW_NUMBER() OVER (ORDER BY id) AS grp
  FROM Stadium
  WHERE people >= 100
)
SELECT id, visit_date, people
FROM ConsecutiveGroups
WHERE grp IN (
  SELECT grp
  FROM ConsecutiveGroups
  GROUP BY grp
  HAVING COUNT(*) >= 3
)
ORDER BY visit_date;`,explanation:[{line:1,text:"CTE and ROW_NUMBER window work natively in PostgreSQL."}]},mssql:{code:`WITH ConsecutiveGroups AS (
  SELECT id, visit_date, people,
         id - ROW_NUMBER() OVER (ORDER BY id) AS grp
  FROM Stadium
  WHERE people >= 100
)
SELECT id, visit_date, people
FROM ConsecutiveGroups
WHERE grp IN (
  SELECT grp
  FROM ConsecutiveGroups
  GROUP BY grp
  HAVING COUNT(*) >= 3
)
ORDER BY visit_date;`,explanation:[{line:1,text:"SQL Server compliant CTE query works identically."}]}}},{id:1633,section:3,name:"Percentage of Users Attended a Contest",difficulty:"Medium",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/percentage-of-users-attended-a-contest/",tip:"Group by contest_id and divide registration count by a subquery of total users count.",description:"Write a SQL query to find the percentage of the users registered in each contest, rounded to 2 decimal places.",chatbotData:{intuition:"For each contest, count the registered users. Divide by the total number of users (queried via a nested `SELECT COUNT(*) FROM Users` subquery). Multiply by 100.0 and round to 2 decimal places.",complexity:`Time Complexity: O(R) where R is the number of registrations.
Space Complexity: O(C) where C is the number of contests.`,edgeCases:`1. Empty registration table: returns empty.
2. 100% attendance: returns 100.00.`,debugging:"Multiply count by 100.0 (decimal) BEFORE dividing, to prevent integer division in engines like PostgreSQL."},solutions:{mysql:{code:`SELECT contest_id,
       ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;`,explanation:[{line:1,text:"Select contest ID."},{line:2,text:"Divide registration count by total user count, multiply by 100, and round."},{line:4,text:"Group rows by contest."},{line:5,text:"Sort by percentage descending, breaking ties with contest_id ascending."}]},postgresql:{code:`SELECT contest_id,
       ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;`,explanation:[{line:2,text:"Standard numeric division handles decimal operations perfectly in PostgreSQL."}]},mssql:{code:`SELECT contest_id,
       ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;`,explanation:[{line:2,text:"SQL Server supports subquery counts inside projection arithmetic."}]}}},{id:577,section:4,name:"Employee Bonus",difficulty:"Easy",topic:"LEFT JOIN",leetcodeUrl:"https://leetcode.com/problems/employee-bonus/",tip:"Use LEFT JOIN and check for bonus < 1000 OR bonus IS NULL.",description:"Write a SQL query to report the name and bonus amount of each employee with a bonus less than 1000.",chatbotData:{intuition:"Employees without a bonus record are considered to have a bonus of < 1000. So we LEFT JOIN Employee to Bonus, and filter where bonus is less than 1000 OR bonus is NULL.",complexity:`Time Complexity: O(N) where N is employee count.
Space Complexity: O(1).`,edgeCases:"1. Employee has no bonus row: returned with NULL bonus (valid).",debugging:"Make sure you include `OR bonus IS NULL`. A simple `WHERE bonus < 1000` will filter out anyone with no bonus records!"},solutions:{mysql:{code:`SELECT e.name, b.bonus
FROM Employee e
LEFT JOIN Bonus b
ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;`,explanation:[{line:1,text:"Select employee name and bonus amount."},{line:2,text:"Load Employee table as left table 'e'."},{line:3,text:"LEFT JOIN Bonus table 'b' on employee ID."},{line:5,text:"Filter: bonus must be less than 1000 OR it must be NULL."}]},postgresql:{code:`SELECT e.name, b.bonus
FROM Employee e
LEFT JOIN Bonus b
ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;`,explanation:[{line:5,text:"Same filter logic applies for PostgreSQL."}]},mssql:{code:`SELECT e.name, b.bonus
FROM Employee e
LEFT OUTER JOIN Bonus b
ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;`,explanation:[{line:3,text:"LEFT OUTER JOIN matches SQL Server formatting standards."}]}}},{id:584,section:4,name:"Find Customer Referee",difficulty:"Easy",topic:"Filter",leetcodeUrl:"https://leetcode.com/problems/find-customer-referee/",tip:"Check for referee_id != 2 OR referee_id IS NULL to handle NULL values properly.",description:"Write a SQL query to report the names of the customer that are not referred by the customer with id = 2.",chatbotData:{intuition:"In SQL, NULL comparisons (like `referee_id != 2`) evaluate to UNKNOWN, not TRUE. Therefore, rows with NULL values are discarded. We must explicitly include them using `OR referee_id IS NULL`.",complexity:`Time Complexity: O(N) to scan table.
Space Complexity: O(1).`,edgeCases:`1. Referee ID is NULL: returned correctly.
2. All rows are NULL: returns all records.`,debugging:"If your solution is missing customers, check if you forgot the `OR referee_id IS NULL` comparison."},solutions:{mysql:{code:`SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;`,explanation:[{line:1,text:"Select customer name."},{line:3,text:"Filter: referee_id is not equal to 2, or is NULL."}]},postgresql:{code:`SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;`,explanation:[{line:3,text:"Standard SQL NULL handling matches PostgreSQL."}]},mssql:{code:`SELECT name
FROM Customer
WHERE referee_id <> 2 OR referee_id IS NULL;`,explanation:[{line:3,text:"Use standard `<>` inequality operator (or `!=`) for SQL Server."}]}}},{id:595,section:4,name:"Big Countries",difficulty:"Easy",topic:"Filter",leetcodeUrl:"https://leetcode.com/problems/big-countries/",tip:"Use simple OR conditions on area and population.",description:"Write a SQL query to report the name, population, and area of the big countries (area >= 3,000,000 sq km or population >= 25,000,000).",chatbotData:{intuition:"A simple filter query. We use the OR operator to select rows matching either criteria.",complexity:`Time Complexity: O(N) to scan, or O(log N) if indexes exist.
Space Complexity: O(1).`,edgeCases:"1. Country matches both: returned once (OR handles this natively).",debugging:"Ensure you use the correct number of zeroes (3000000 and 25000000)."},solutions:{mysql:{code:`SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;`,explanation:[{line:1,text:"Select name, population, and area fields."},{line:3,text:"Apply OR criteria for big area or big population."}]},postgresql:{code:`SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;`,explanation:[{line:1,text:"Standard filter query is universal across all relational databases."}]},mssql:{code:`SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;`,explanation:[{line:1,text:"Same query works identically on SQL Server."}]}}},{id:596,section:4,name:"Classes More Than 5 Students",difficulty:"Easy",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/classes-more-than-5-students/",tip:"Group by class and filter with HAVING COUNT(student) >= 5.",description:"Write a SQL query to report all the classes that have at least five students.",chatbotData:{intuition:"Group the rows by class, then filter groups with a count of students >= 5 using the HAVING clause.",complexity:`Time Complexity: O(N) to group the table.
Space Complexity: O(C) where C is distinct classes.`,edgeCases:"1. Duplicate students in same class: LeetCode tests assume student-class pairs are unique.",debugging:"Remember that you cannot use WHERE for aggregate conditions; you must use HAVING."},solutions:{mysql:{code:`SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;`,explanation:[{line:1,text:"Select the class names."},{line:3,text:"Group rows by class."},{line:4,text:"Filter groups with student count >= 5."}]},postgresql:{code:`SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;`,explanation:[{line:4,text:"Aggregates are supported in PostgreSQL HAVING statements."}]},mssql:{code:`SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;`,explanation:[{line:1,text:"Standard GROUP BY HAVING aggregates work identically."}]}}},{id:620,section:4,name:"Not Boring Movies",difficulty:"Easy",topic:"Filter",leetcodeUrl:"https://leetcode.com/problems/not-boring-movies/",tip:"Use id % 2 = 1 to filter for odd IDs, and check description != 'boring'.",description:"Write a SQL query to report the movies with an odd numbered ID and a description that is not 'boring'. Sort by rating descending.",chatbotData:{intuition:"Use modulo arithmetic (`id % 2 = 1` or `MOD(id, 2) = 1`) to check for odd IDs. Combine with unequal filter for description, and order descending by rating.",complexity:`Time Complexity: O(N log N) due to sorting.
Space Complexity: O(1).`,edgeCases:"1. No matching records: returns empty.",debugging:"Make sure you sort by rating DESC at the end."},solutions:{mysql:{code:`SELECT id, movie, description, rating
FROM Cinema
WHERE id % 2 = 1 AND description != 'boring'
ORDER BY rating DESC;`,explanation:[{line:1,text:"Select fields from Cinema."},{line:3,text:"Filter odd ID rows (id % 2 = 1) and description not matching 'boring'."},{line:4,text:"Sort from highest rating to lowest."}]},postgresql:{code:`SELECT id, movie, description, rating
FROM Cinema
WHERE id % 2 = 1 AND description != 'boring'
ORDER BY rating DESC;`,explanation:[{line:3,text:"PostgreSQL uses standard '%' operator for modulo calculations."}]},mssql:{code:`SELECT id, movie, description, rating
FROM Cinema
WHERE id % 2 = 1 AND description <> 'boring'
ORDER BY rating DESC;`,explanation:[{line:3,text:"Use `<>` or `!=` for inequal description comparison in SQL Server."}]}}},{id:627,section:4,name:"Swap Salary",difficulty:"Easy",topic:"DML",leetcodeUrl:"https://leetcode.com/problems/swap-salary/",tip:"Use a single UPDATE statement with a CASE WHEN expression to swap sex values.",description:"Write a SQL query to swap all 'f' and 'm' values (i.e., change all 'f' to 'm' and vice versa) with a single update statement and no intermediate temporary tables.",chatbotData:{intuition:"We use an UPDATE statement with a conditional CASE WHEN expression to swap values inline. If it was 'm', set to 'f'; otherwise set to 'm'.",complexity:`Time Complexity: O(N) to update N rows.
Space Complexity: O(1).`,edgeCases:"1. Table is empty: no operations.",debugging:"Make sure you write a single update query with no subqueries or select wrappers."},solutions:{mysql:{code:`UPDATE Salary
SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;`,explanation:[{line:1,text:"Target the Salary table for update."},{line:2,text:"Set sex column dynamically: if 'm' change to 'f', else change to 'm'."}]},postgresql:{code:`UPDATE Salary
SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;`,explanation:[{line:1,text:"DML updates are identical in standard SQL / PostgreSQL."}]},mssql:{code:`UPDATE Salary
SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;`,explanation:[{line:1,text:"Standard SQL UPDATE works natively on SQL Server."}]}}},{id:1393,section:4,name:"Capital Gain/Loss",difficulty:"Medium",topic:"Conditional Aggregation",leetcodeUrl:"https://leetcode.com/problems/capital-gainloss/",tip:"Use CASE WHEN inside SUM to count 'Buy' prices as negative and 'Sell' prices as positive.",description:"Write a SQL query to report the Capital gain/loss for each stock.",chatbotData:{intuition:"Buy operations represent cash outflow (negative values). Sell operations represent cash inflow (positive values). Sum these values grouped by stock_name.",complexity:`Time Complexity: O(N log N) to group rows.
Space Complexity: O(S) where S is unique stocks.`,edgeCases:"1. Stock has net loss: returns negative values correctly.",debugging:"Double check that 'Buy' is subtracted (`-price`) and 'Sell' is added (`price`)."},solutions:{mysql:{code:`SELECT stock_name,
       SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name;`,explanation:[{line:1,text:"Select stock name."},{line:2,text:"Aggregate prices: subtract if operation is 'Buy', add if 'Sell'."},{line:4,text:"Group results by stock name."}]},postgresql:{code:`SELECT stock_name,
       SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name;`,explanation:[{line:2,text:"Conditional SUM aggregation matches PostgreSQL specifications."}]},mssql:{code:`SELECT stock_name,
       SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name;`,explanation:[{line:2,text:"Standard syntax is fully compatible with SQL Server."}]}}},{id:1407,section:4,name:"Top Travellers",difficulty:"Easy",topic:"LEFT JOIN",leetcodeUrl:"https://leetcode.com/problems/top-travellers/",tip:"Use LEFT JOIN to retain users with 0 rides, and COALESCE(SUM(distance), 0) to handle NULLs.",description:"Write a SQL query to report the distance travelled by each user. Sort by travelled_distance descending, then user name ascending.",chatbotData:{intuition:"We want all users, even those with no rides. So LEFT JOIN Users to Rides. Group by user ID and name. Sum ride distance, replacing NULL results with 0 using COALESCE or IFNULL.",complexity:`Time Complexity: O(U + R) where U is users and R is rides.
Space Complexity: O(U) for grouping.`,edgeCases:"1. User has no rides: returned with distance 0.",debugging:"Verify you sorted by name ascending as the secondary tie-breaker."},solutions:{mysql:{code:`SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance
FROM Users u
LEFT JOIN Rides r
ON u.id = r.user_id
GROUP BY u.id, u.name
ORDER BY travelled_distance DESC, u.name ASC;`,explanation:[{line:1,text:"Select user name and compute aggregate distance, replacing NULLs with 0."},{line:3,text:"LEFT JOIN Users to Rides to retain users with no ride activity."},{line:5,text:"Group by user ID and user name to isolate totals."},{line:6,text:"Sort by distance descending, breaking ties with user name ascending."}]},postgresql:{code:`SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance
FROM Users u
LEFT JOIN Rides r
ON u.id = r.user_id
GROUP BY u.id, u.name
ORDER BY travelled_distance DESC, u.name ASC;`,explanation:[{line:1,text:"COALESCE is standard SQL and fully supported by PostgreSQL."}]},mssql:{code:`SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance
FROM Users u
LEFT OUTER JOIN Rides r
ON u.id = r.user_id
GROUP BY u.id, u.name
ORDER BY travelled_distance DESC, u.name ASC;`,explanation:[{line:3,text:"LEFT OUTER JOIN matches SQL Server dialect requirements."}]}}},{id:1484,section:4,name:"Group Sold Products By The Date",difficulty:"Easy",topic:"Aggregation",leetcodeUrl:"https://leetcode.com/problems/group-sold-products-by-the-date/",tip:"Use GROUP_CONCAT in MySQL, STRING_AGG in PostgreSQL, and STRING_AGG with WITHIN GROUP in SQL Server.",description:"Write a SQL query to find for each date the number of different products sold and their names. The sold products names for each date should be sorted lexicographically.",chatbotData:{intuition:"Group transactions by sell_date. To count the products, use COUNT(DISTINCT product). To concatenate the products into a comma-separated list, use the appropriate string aggregation function for your dialect, sorting them lexicographically.",complexity:`Time Complexity: O(N log N) to group and sort strings.
Space Complexity: O(N).`,edgeCases:"1. Multiple instances of same product on same date: must use DISTINCT in count and aggregation.",debugging:"Be sure to use DISTINCT inside the concatenation function to avoid printing duplicate products on the same date."},solutions:{mysql:{code:`SELECT sell_date,
       COUNT(DISTINCT product) AS num_sold,
       GROUP_CONCAT(DISTINCT product ORDER BY product ASC SEPARATOR ',') AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date;`,explanation:[{line:1,text:"Select sale date."},{line:2,text:"Count distinct products sold."},{line:3,text:"Use GROUP_CONCAT with DISTINCT and ORDER BY to create a sorted comma-separated list."},{line:5,text:"Group rows by sell_date."}]},postgresql:{code:`SELECT sell_date,
       COUNT(DISTINCT product) AS num_sold,
       STRING_AGG(DISTINCT product, ',' ORDER BY product ASC) AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date;`,explanation:[{line:3,text:"In PostgreSQL, use STRING_AGG with DISTINCT and ORDER BY keyword inside."}]},mssql:{code:`SELECT sell_date,
       COUNT(DISTINCT product) AS num_sold,
       STRING_AGG(product, ',') WITHIN GROUP (ORDER BY product ASC) AS products
FROM (
  SELECT DISTINCT sell_date, product
  FROM Activities
) t
GROUP BY sell_date
ORDER BY sell_date;`,explanation:[{line:3,text:"In SQL Server, STRING_AGG does not support DISTINCT directly. First run a DISTINCT subquery..."},{line:4,text:"...then aggregate with WITHIN GROUP (ORDER BY product ASC) syntax."}]}}}],Ls={1:{title:"Must-Do (High Frequency)",problems:_a.filter(o=>o.section===1),tip:"Master JOINs, self-joins, window functions like DENSE_RANK(), and NULL handling. These form 80% of MNC SQL interview rounds."},2:{title:"Intermediate (Window & Agg)",problems:_a.filter(o=>o.section===2),tip:"Use CTEs (Common Table Expressions) and window functions (SUM OVER, LAG, LEAD) to keep aggregation queries readable and optimized."},3:{title:"Advanced (Hard)",problems:[..._a.filter(o=>o.section===3),_a.find(o=>o.id===185)],tip:"For consecutive row patterns or cumulative thresholds, use window functions or creative inequality self-joins."},4:{title:"Quick-Win Easy",problems:_a.filter(o=>o.section===4),tip:"Warm up with basic filtering, UPDATE operations (CASE WHEN), and string aggregation (GROUP_CONCAT)."}},Gx={1:[{input:`nums = [2,7,11,15]
target = 9`,expected:"[0,1]"},{input:`nums = [3,2,4]
target = 6`,expected:"[1,2]"},{input:`nums = [3,3]
target = 6`,expected:"[0,1]"}],217:[{input:"nums = [1,2,3,1]",expected:"true"},{input:"nums = [1,2,3,4]",expected:"false"},{input:"nums = [1,1,1,3,3,4,3,2,4,2]",expected:"true"}],242:[{input:`s = "anagram"
t = "nagaram"`,expected:"true"},{input:`s = "rat"
t = "car"`,expected:"false"}],268:[{input:"nums = [3,0,1]",expected:"2"},{input:"nums = [0,1]",expected:"2"},{input:"nums = [9,6,4,2,3,5,7,0,1]",expected:"8"}],283:[{input:"nums = [0,1,0,3,12]",expected:"[1,3,12,0,0]"},{input:"nums = [0]",expected:"[0]"}],49:[{input:'strs = ["eat","tea","tan","ate","nat","bat"]',expected:'[["bat"],["nat","tan"],["ate","eat","tea"]]'},{input:'strs = [""]',expected:'[[""]]'},{input:'strs = ["a"]',expected:'[["a"]]'}],128:[{input:"nums = [100,4,200,1,3,2]",expected:"4"},{input:"nums = [0,3,7,2,5,8,4,6,0,1]",expected:"9"}],238:[{input:"nums = [1,2,3,4]",expected:"[24,12,8,6]"},{input:"nums = [-1,1,0,-3,3]",expected:"[0,0,9,0,0]"}],125:[{input:'s = "A man, a plan, a canal: Panama"',expected:"true"},{input:'s = "race a car"',expected:"false"},{input:'s = " "',expected:"true"}],26:[{input:"nums = [1,1,2]",expected:"2, nums = [1,2,_]"},{input:"nums = [0,0,1,1,1,2,2,3,3,4]",expected:"5, nums = [0,1,2,3,4,_,_,_,_,_]"}],11:[{input:"height = [1,8,6,2,5,4,8,3,7]",expected:"49"},{input:"height = [1,1]",expected:"1"}],15:[{input:"nums = [-1,0,1,2,-1,-4]",expected:"[[-1,-1,2],[-1,0,1]]"},{input:"nums = [0,1,1]",expected:"[]"},{input:"nums = [0,0,0]",expected:"[[0,0,0]]"}],75:[{input:"nums = [2,0,2,1,1,0]",expected:"[0,0,1,1,2,2]"},{input:"nums = [2,0,1]",expected:"[0,1,2]"}],3:[{input:'s = "abcabcbb"',expected:"3"},{input:'s = "bbbbb"',expected:"1"},{input:'s = "pwwkew"',expected:"3"}],424:[{input:`s = "ABAB"
k = 2`,expected:"4"},{input:`s = "AABABBA"
k = 1`,expected:"4"}],567:[{input:`s1 = "ab"
s2 = "eidbaooo"`,expected:"true"},{input:`s1 = "ab"
s2 = "eidboaoo"`,expected:"false"}]};function Wx(o){const c=Gx[String(o)];return c||[{input:`nums = [1, 2, 3]
target = 5`,expected:"Check description for details"},{input:`nums = [4, 5, 6]
target = 10`,expected:"Check description for details"}]}const _s={1:{title:"Arrays & Hashing",problems:Dx,tip:"For #1 use a dict for O(n). #238 solve with prefix + suffix pass — no division needed."},2:{title:"Two Pointers & Sliding Window",problems:Ix,tip:"Sliding window = expand right, shrink left when invalid. Master this pattern for Day 2."},3:{title:"Binary Search",problems:Mx,tip:"Always define lo/hi/mid clearly. For rotated arrays, check which half is sorted first."},4:{title:"Linked List",problems:qx,tip:"Dummy head node saves edge-case code. Fast/slow pointer detects cycles and finds midpoints."},5:{title:"Stack & Queue",problems:zx,tip:"Monotonic stack: push index, pop when current element is greater. Covers #503 & #739 pattern."},6:{title:"Trees & BST",problems:Ux,tip:"For BST validation pass min/max bounds recursively. Level order = BFS with queue."},7:{title:"Graphs",problems:jx,tip:"Cycle detection in directed graph = DFS with visited + in-stack sets. BFS for shortest path."},8:{title:"Dynamic Programming",problems:Bx,tip:"DP = define state -> recurrence -> base case. LCS dp[i][j] is the most-asked DP in MNCs."},9:{title:"Backtracking + Heap + Trie",problems:Hx,tip:"Backtracking = choose -> explore -> unchoose. Use start index for combos, swap for permutations."},10:{title:"Revision + Hard + Weak Topics",problems:Fx,tip:"Revision day! Pay special attention to Hard problems like Trapping Rain Water, Sliding Window Maximum and Median Finder."}},Yx={Easy:"badge-easy",Medium:"badge-medium",Hard:"badge-hard"};function Qx(o,c=.35){const f=parseInt(o.replace("#",""),16),u=Math.min(255,(f>>16&255)+Math.round((255-(f>>16&255))*c)),b=Math.min(255,(f>>8&255)+Math.round((255-(f>>8&255))*c)),A=Math.min(255,(f&255)+Math.round((255-(f&255))*c));return`rgb(${u},${b},${A})`}const Vx=["cpp","python","java"],Xx=["mysql","postgresql","mssql"],Jx={cpp:"C++",python:"Python",java:"Java",mysql:"MySQL",postgresql:"PostgreSQL",mssql:"MS SQL"};function tm({onMouseDown:o,onTouchStart:c}){const[f,u]=M.useState(!1),b=A=>{u(!0),o(A);const D=()=>{u(!1),window.removeEventListener("mouseup",D)};window.addEventListener("mouseup",D)};return d.jsx("div",{className:`resize-handle${f?" active":""}`,onMouseDown:b,onTouchStart:c,children:d.jsx("div",{className:"resize-grip",children:[0,1,2,3,4].map(A=>d.jsx("div",{className:"resize-dot"},A))})})}function Kx({problem:o,onBack:c,solvedStatus:f,onToggleSolved:u}){var I,G;const b=!!((I=o.solutions)!=null&&I.mysql),A=b?Xx:Vx,[D,j]=M.useState(()=>{const C=localStorage.getItem(`leet10_lang_${o.id}`);return C||(b?"mysql":"cpp")}),[L,x]=M.useState(()=>{const C=localStorage.getItem(`leet10_selectedLine_${o.id}`);return C?parseInt(C,10):null}),[B,q]=M.useState(()=>localStorage.getItem(`leet10_activeTab_${o.id}`)||"solution"),[z,oe]=M.useState(()=>localStorage.getItem(`leet10_codeView_${o.id}`)||"solution"),[ee,P]=M.useState(()=>window.innerWidth<1024),[le,Q]=M.useState(()=>{const C=localStorage.getItem("leet10_infoW");return C?parseInt(C,10):280}),[ne,H]=M.useState(()=>{const C=localStorage.getItem("leet10_chatW");return C?parseInt(C,10):290}),Z=M.useRef(null),ae=M.useRef(null),Y=M.useRef({}),_=M.useRef({}),R=f[o.id]||!1,V=o.difficulty==="Hard",X=Yx[o.difficulty]||"",he=((G=o.solutions)==null?void 0:G[D])||{code:"",explanation:[]},be=he.code?he.code.split(`
`):[],ke=he.explanation||[];M.useEffect(()=>{const C=localStorage.getItem(`leet10_lang_${o.id}`);j(C||(b?"mysql":"cpp"));const J=localStorage.getItem(`leet10_selectedLine_${o.id}`);x(J?parseInt(J,10):null);const se=localStorage.getItem(`leet10_codeView_${o.id}`);oe(se||"solution");const Oe=localStorage.getItem(`leet10_activeTab_${o.id}`);q(Oe||"solution")},[o.id,b]),M.useEffect(()=>{localStorage.setItem(`leet10_lang_${o.id}`,D)},[D,o.id]),M.useEffect(()=>{L!==null?localStorage.setItem(`leet10_selectedLine_${o.id}`,L):localStorage.removeItem(`leet10_selectedLine_${o.id}`)},[L,o.id]),M.useEffect(()=>{localStorage.setItem(`leet10_activeTab_${o.id}`,B)},[B,o.id]),M.useEffect(()=>{localStorage.setItem(`leet10_codeView_${o.id}`,z)},[z,o.id]),M.useEffect(()=>{localStorage.setItem("leet10_infoW",le)},[le]),M.useEffect(()=>{localStorage.setItem("leet10_chatW",ne)},[ne]),M.useEffect(()=>{const C=()=>P(window.innerWidth<1024);return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);const He=M.useCallback((C,J)=>{const se=C==="left"?le:ne;ae.current={side:C,startX:J,startW:se},document.body.classList.add("is-resizing");const Oe=Ue=>{var Zn;if(!ae.current)return;const Jn=(Ue.touches?Ue.touches[0].clientX:Ue.clientX)-ae.current.startX,qa=((Zn=Z.current)==null?void 0:Zn.offsetWidth)||window.innerWidth,Dt=160,Kn=Math.floor(qa*.45);ae.current.side==="left"?Q(Math.max(Dt,Math.min(Kn,ae.current.startW+Jn))):H(Math.max(Dt,Math.min(Kn,ae.current.startW-Jn)))},ye=()=>{ae.current=null,document.body.classList.remove("is-resizing"),window.removeEventListener("mousemove",Oe),window.removeEventListener("mouseup",ye),window.removeEventListener("touchmove",Oe),window.removeEventListener("touchend",ye)};window.addEventListener("mousemove",Oe),window.addEventListener("mouseup",ye),window.addEventListener("touchmove",Oe,{passive:!1}),window.addEventListener("touchend",ye)},[le,ne]),ie=C=>{var J;x(C),(J=Y.current[C])==null||J.scrollIntoView({behavior:"smooth",block:"nearest"})},S=C=>{var J;x(C),(J=_.current[C])==null||J.scrollIntoView({behavior:"smooth",block:"nearest"})},U=d.jsxs("div",{className:"glass",style:{height:52,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",flexShrink:0,zIndex:20,borderBottom:"1px solid rgba(255,255,255,0.05)",borderTop:"none",borderLeft:"none",borderRight:"none"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[d.jsx("button",{onClick:c,className:"neu-btn",style:{fontSize:12,color:"rgba(255,255,255,0.45)",padding:"5px 10px",borderRadius:8,fontWeight:600,flexShrink:0},children:"← Back"}),d.jsx("div",{style:{width:1,height:16,background:"rgba(255,255,255,0.07)",flexShrink:0}}),d.jsx("span",{style:{fontSize:13,fontWeight:600,color:V?"#fca5a5":"#dddde8",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:0},children:o.name}),d.jsx("span",{className:X,style:{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:99,flexShrink:0},children:o.difficulty})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[d.jsx("button",{onClick:()=>u(o.id),className:"neu-btn",style:{fontSize:10.5,fontWeight:700,padding:"5px 10px",borderRadius:8,color:R?"#4ade80":"rgba(255,255,255,0.4)",border:R?"1px solid rgba(74,222,128,0.25)":"1px solid rgba(255,255,255,0.06)"},children:R?"✓ Solved":"Mark solved"}),d.jsx("a",{href:o.leetcodeUrl,target:"_blank",rel:"noopener noreferrer",style:{fontSize:10.5,fontWeight:600,color:"rgba(255,255,255,0.3)",textDecoration:"none",whiteSpace:"nowrap"},onMouseEnter:C=>C.currentTarget.style.color="#a78bff",onMouseLeave:C=>C.currentTarget.style.color="rgba(255,255,255,0.3)",children:"LeetCode ↗"})]})]}),$=d.jsxs("div",{className:"glass-light",style:{width:ee?"100%":le,flexShrink:0,overflowY:"auto",padding:"18px 16px",borderRight:ee?"none":"1px solid rgba(255,255,255,0.05)",transition:ae.current?"none":"width 0.01s"},children:[d.jsxs("div",{style:{marginBottom:18},children:[d.jsx("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(255,255,255,0.25)",marginBottom:6},children:"Topic"}),d.jsx("span",{style:{fontSize:11.5,fontWeight:600,background:"rgba(124,111,255,0.12)",border:"1px solid rgba(124,111,255,0.22)",color:"#c4b8ff",padding:"3px 10px",borderRadius:99},children:o.topic})]}),d.jsxs("div",{style:{marginBottom:18},children:[d.jsx("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(255,255,255,0.25)",marginBottom:6},children:"Description"}),d.jsx("div",{className:"neu-inset",style:{padding:"10px 12px",borderRadius:10},children:d.jsx("p",{style:{fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.7,margin:0},children:o.description})})]}),d.jsxs("div",{style:{marginBottom:18},children:[d.jsx("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(255,255,255,0.25)",marginBottom:6},children:"Example Test Cases"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:Wx(o.id).slice(0,3).map((C,J)=>d.jsxs("div",{className:"neu-inset",style:{padding:"8px 10px",borderRadius:8,fontSize:11.5},children:[d.jsxs("div",{style:{fontWeight:700,color:"#a78bff",marginBottom:3,fontSize:10},children:["Example ",J+1]}),d.jsxs("div",{style:{color:"rgba(255,255,255,0.45)",whiteSpace:"pre-wrap",fontFamily:"JetBrains Mono, monospace",fontSize:11},children:[d.jsx("strong",{children:"Input:"})," ",C.input.replace(/\n/g,", ")]}),d.jsxs("div",{style:{color:"rgba(255,255,255,0.45)",marginTop:2,fontFamily:"JetBrains Mono, monospace",fontSize:11},children:[d.jsx("strong",{children:"Output:"})," ",d.jsx("span",{style:{color:"#4ade80",fontWeight:600},children:C.expected})]})]},J))})]}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(255,255,255,0.25)",marginBottom:6},children:"💡 Tip"}),d.jsx("div",{className:"highlight-tip",style:{padding:"10px 13px"},children:d.jsx("p",{style:{fontSize:11.5,color:"rgba(255,255,255,0.6)",lineHeight:1.7,margin:0,fontStyle:"italic"},children:o.tip})})]})]}),me=d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[d.jsxs("div",{style:{height:46,borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",padding:"0 12px",gap:4,background:"rgba(0,0,0,0.2)",flexShrink:0},children:[A.map(C=>d.jsx("button",{onClick:()=>j(C),className:D===C?"neu-raised":"neu-btn",style:{fontSize:10.5,fontWeight:700,padding:"4px 10px",borderRadius:7,color:D===C?"#c4b8ff":"rgba(255,255,255,0.3)",border:D===C?"1px solid rgba(167,139,255,0.2)":"1px solid transparent",whiteSpace:"nowrap",flexShrink:0},children:Jx[C]},C)),d.jsx("div",{style:{fontSize:9.5,color:"rgba(255,255,255,0.15)",marginLeft:"auto",flexShrink:0},children:"tap annotated line"})]}),d.jsx("div",{className:"neu-inset code-scroll-area",style:{flex:"0 0 55%",borderRadius:0,padding:"8px 0"},children:d.jsx("div",{style:{minWidth:"max-content"},children:be.map((C,J)=>{const se=J+1,Oe=ke.some(Ue=>Ue.line===se),ye=L===se;return d.jsxs("div",{ref:Ue=>_.current[se]=Ue,onClick:()=>Oe&&ie(se),className:ye?"highlight-code-active":"",style:{display:"flex",alignItems:"baseline",padding:"1.5px 16px",cursor:Oe?"pointer":"default",transition:"background 0.1s",borderLeft:ye?void 0:"2px solid transparent"},onMouseEnter:Ue=>{Oe&&!ye&&(Ue.currentTarget.style.background="rgba(255,255,255,0.02)")},onMouseLeave:Ue=>{ye||(Ue.currentTarget.style.background="transparent")},children:[d.jsx("span",{style:{width:30,fontSize:10,textAlign:"right",paddingRight:14,flexShrink:0,fontFamily:"JetBrains Mono, monospace",userSelect:"none",color:ye?"#7c6fff":Oe?"rgba(124,111,255,0.4)":"rgba(255,255,255,0.1)",fontWeight:ye?700:400},children:se}),d.jsx("span",{style:{fontFamily:"JetBrains Mono, monospace",whiteSpace:"pre",fontSize:12.5,lineHeight:1.75},children:(C?kx(C,D):[{text:" ",color:"transparent"}]).map((Ue,An)=>d.jsx("span",{style:{color:ye?Qx(Ue.color):Ue.color},children:Ue.text},An))}),Oe&&!ye&&d.jsx("span",{style:{paddingLeft:8,fontSize:9,color:"rgba(124,111,255,0.3)",flexShrink:0},children:"●"})]},J)})})}),d.jsxs("div",{className:"glass-light",style:{flex:1,borderTop:"1px solid rgba(255,255,255,0.05)",overflowY:"auto",padding:"10px 12px",minHeight:0},children:[d.jsx("div",{style:{fontSize:9.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.09em",color:"rgba(255,255,255,0.2)",marginBottom:8},children:"Annotations"}),ke.length===0&&d.jsx("p",{style:{fontSize:12,color:"rgba(255,255,255,0.2)",fontStyle:"italic"},children:"Click a highlighted line to see its annotation."}),ke.map(C=>{const J=L===C.line;return d.jsxs("div",{ref:se=>Y.current[C.line]=se,onClick:()=>S(C.line),className:J?"highlight-annotation-active":"",style:{display:"flex",gap:8,padding:"8px 10px",borderRadius:8,marginBottom:3,cursor:"pointer",border:"1px solid transparent",transition:"all 0.12s"},onMouseEnter:se=>{J||(se.currentTarget.style.background="rgba(255,255,255,0.02)")},onMouseLeave:se=>{J||(se.currentTarget.style.background="transparent",se.currentTarget.style.border="1px solid transparent")},children:[d.jsx("span",{style:{fontSize:9.5,fontFamily:"JetBrains Mono, monospace",fontWeight:700,color:J?"#c4b8ff":"rgba(255,255,255,0.2)",flexShrink:0,background:J?"rgba(124,111,255,0.15)":"rgba(255,255,255,0.04)",padding:"1px 5px",borderRadius:4,height:"fit-content"},children:C.line}),d.jsx("span",{style:{fontSize:12,color:J?"rgba(255,255,255,0.85)":"rgba(255,255,255,0.45)",lineHeight:1.65},children:C.text})]},C.line)})]})]}),Ee=d.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",height:42,background:"rgba(0,0,0,0.25)",borderBottom:"1px solid rgba(255,255,255,0.05)",flexShrink:0,padding:"0 12px",gap:2},children:[[{id:"solution",label:"📖 Solution"},{id:"tryit",label:"▶ Try It"}].map(C=>d.jsx("button",{onClick:()=>oe(C.id),style:{padding:"4px 12px",borderRadius:7,fontSize:11,fontWeight:700,border:z===C.id?"1px solid rgba(167,139,255,0.25)":"1px solid transparent",background:z===C.id?"rgba(124,111,255,0.12)":"transparent",color:z===C.id?"#c4b8ff":"rgba(255,255,255,0.3)",cursor:"pointer",transition:"all 0.15s"},children:C.label},C.id)),!ee&&d.jsx("span",{style:{marginLeft:"auto",fontSize:9.5,color:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",gap:4},children:"⟺ drag dividers to resize"})]}),d.jsx("div",{style:{flex:1,overflow:"hidden"},children:z==="solution"?me:d.jsx($h,{problem:o})})]}),h=d.jsx("div",{className:"glass",style:{width:ee?"100%":ne,flexShrink:0,display:"flex",flexDirection:"column",overflow:"hidden",borderLeft:ee?"none":"1px solid rgba(255,255,255,0.05)",transition:ae.current?"none":"width 0.01s"},children:d.jsx(Jp,{activeProblem:o})}),T=d.jsx("div",{className:"glass",style:{height:50,display:"flex",flexShrink:0,borderTop:"1px solid rgba(255,255,255,0.05)",background:"rgba(8,8,16,0.95)",borderLeft:"none",borderRight:"none",borderBottom:"none"},children:[{id:"info",label:"📖 Info"},{id:"solution",label:"💻 Solution"},{id:"tryit",label:"▶ Try It"},{id:"chat",label:"💬 AI"}].map(C=>d.jsx("button",{onClick:()=>q(C.id),style:{flex:1,border:"none",background:"transparent",fontSize:10,fontWeight:700,color:B===C.id?"#a78bff":"rgba(255,255,255,0.3)",borderTop:B===C.id?"2px solid #7c6fff":"2px solid transparent",cursor:"pointer",transition:"all 0.15s"},children:C.label},C.id))});return d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",width:"100vw",overflow:"hidden"},children:[U,d.jsxs("div",{ref:Z,style:{flex:1,display:"flex",overflow:"hidden",minHeight:0},children:[!ee&&d.jsxs(d.Fragment,{children:[$,d.jsx(tm,{onMouseDown:C=>{C.preventDefault(),He("left",C.clientX)},onTouchStart:C=>{He("left",C.touches[0].clientX)}}),Ee,d.jsx(tm,{onMouseDown:C=>{C.preventDefault(),He("right",C.clientX)},onTouchStart:C=>{He("right",C.touches[0].clientX)}}),h]}),ee&&B==="info"&&$,ee&&B==="solution"&&d.jsx("div",{style:{flex:1,overflow:"hidden"},children:me}),ee&&B==="tryit"&&d.jsx("div",{style:{flex:1,overflow:"hidden"},children:d.jsx($h,{problem:o})}),ee&&B==="chat"&&h]}),ee&&T]})}const Zx={Easy:"badge-easy",Medium:"badge-medium",Hard:"badge-hard"};function Px(){const[o,c]=M.useState(()=>localStorage.getItem("leet10_roadmap")||"algorithms"),[f,u]=M.useState(()=>{const R=localStorage.getItem("leet10_activeDay");return R?parseInt(R,10):1}),[b,A]=M.useState(()=>{const R=localStorage.getItem("leet10_activeSqlTier");return R?parseInt(R,10):1}),[D,j]=M.useState(()=>{const R=localStorage.getItem("leet10_activeProblemId");if(R){const V=parseInt(R,10);for(const X of Object.values(_s)){const he=X.problems.find(be=>be.id===V);if(he)return he}for(const X of Object.values(Ls)){const he=X.problems.find(be=>be.id===V);if(he)return he}}return null}),[L,x]=M.useState({}),[B,q]=M.useState(!1);M.useEffect(()=>{const R=localStorage.getItem("leet10_solved");if(R)try{x(JSON.parse(R))}catch{}},[]),M.useEffect(()=>{const R=V=>{V.key==="Escape"&&q(!1)};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[]);const z=R=>{x(V=>{const X={...V,[R]:!V[R]};return localStorage.setItem("leet10_solved",JSON.stringify(X)),X})},oe=R=>{c(R),localStorage.setItem("leet10_roadmap",R)},ee=R=>{u(R),localStorage.setItem("leet10_activeDay",R)},P=R=>{A(R),localStorage.setItem("leet10_activeSqlTier",R)},le=R=>{j(R),R?localStorage.setItem("leet10_activeProblemId",R.id):localStorage.removeItem("leet10_activeProblemId")},Q=_s[f],ne=Ls[b];let H=0,Z=0;if(o==="algorithms")H=(Q==null?void 0:Q.problems.length)||0,Z=(Q==null?void 0:Q.problems.filter(R=>L[R.id]).length)||0;else{const R=new Set((ne==null?void 0:ne.problems.map(V=>V.id))||[]);H=R.size,Z=Array.from(R).filter(V=>L[V]).length}const ae=H?Z/H*100:0,Y=o==="algorithms"?Q:ne,_=()=>q(!1);return D?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"aurora-bg"}),d.jsx(Kx,{problem:D,onBack:()=>le(null),solvedStatus:L,onToggleSolved:z})]}):d.jsxs("div",{className:"app-root",children:[d.jsx("div",{className:"aurora-bg"}),d.jsx("div",{className:`mobile-overlay${B?" open":""}`,onClick:_}),d.jsx(Xp,{allProblems:_s,activeDay:f,setActiveDay:R=>{ee(R),_()},solvedStatus:L,roadmap:o,setRoadmap:R=>{oe(R),_()},sqlTiers:Ls,activeSqlTier:b,setActiveSqlTier:R=>{P(R),_()},isOpen:B}),d.jsxs("main",{className:"main-content",children:[d.jsxs("div",{className:"glass header-pad",style:{padding:"20px 28px 14px",position:"sticky",top:0,zIndex:20,borderBottom:"1px solid rgba(255,255,255,0.05)",borderLeft:"none",borderRight:"none",borderTop:"none",flexShrink:0},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[d.jsx("button",{className:"mobile-toggle-btn neu-btn",onClick:()=>q(!0),"aria-label":"Open menu",style:{padding:"8px 10px",borderRadius:8,cursor:"pointer",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)"},children:d.jsx("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",children:d.jsx("path",{d:"M1 1h16M1 7h16M1 13h16",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2",strokeLinecap:"round"})})}),d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsx("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"#7c6fff",marginBottom:3},children:o==="algorithms"?`Day ${f}`:`Tier ${b}`}),d.jsx("h1",{style:{fontSize:"clamp(16px, 3vw, 22px)",fontWeight:700,color:"#dddde8",letterSpacing:"-0.4px",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Y==null?void 0:Y.title})]}),d.jsxs("div",{className:"neu-raised",style:{padding:"7px 14px",borderRadius:99,display:"flex",alignItems:"center",gap:7,flexShrink:0},children:[d.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:Z===H&&H>0?"#4ade80":"#7c6fff"}}),d.jsxs("span",{style:{fontSize:11.5,color:"rgba(255,255,255,0.5)",fontWeight:500,whiteSpace:"nowrap"},children:[d.jsx("span",{style:{color:"#dddde8",fontWeight:700},children:Z}),"/",H," solved"]})]})]}),d.jsx("div",{style:{marginTop:12,height:3,background:"rgba(255,255,255,0.04)",borderRadius:99,overflow:"hidden"},children:d.jsx("div",{className:"progress-fill",style:{height:"100%",width:`${ae}%`,borderRadius:99,transition:"width 0.4s ease"}})})]}),d.jsxs("div",{className:"content-block",children:[(Y==null?void 0:Y.tip)&&d.jsxs("div",{className:"highlight-tip",style:{marginBottom:24,padding:"13px 16px"},children:[d.jsxs("div",{style:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",color:"#a78bff",marginBottom:5,display:"flex",alignItems:"center",gap:5},children:[d.jsx("span",{children:"💡"}),"Key Insight — ",o==="algorithms"?`Day ${f}`:`Tier ${b}`]}),d.jsx("p",{style:{fontSize:13,color:"rgba(255,255,255,0.7)",lineHeight:1.7,margin:0},children:Y.tip})]}),d.jsxs("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.2)",marginBottom:10},children:["Problems · ",(Y==null?void 0:Y.problems.length)||0," total"]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:7},children:Y==null?void 0:Y.problems.map((R,V)=>{const X=L[R.id]||!1,he=R.difficulty==="Hard",be=Zx[R.difficulty]||"";return d.jsx("div",{className:`clay-card animate-fade-in${he?" hard-card":""}${X?" solved-card":""}`,onClick:()=>le(R),style:{animationDelay:`${V*.025}s`},children:d.jsxs("div",{className:"problem-card-row",children:[d.jsx("button",{onClick:ke=>{ke.stopPropagation(),z(R.id)},className:X?"":"neu-btn",style:{width:20,height:20,borderRadius:6,flexShrink:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",background:X?"rgba(74,222,128,0.15)":void 0,border:X?"1.5px solid rgba(74,222,128,0.4)":"1.5px solid rgba(255,255,255,0.06)",boxShadow:X?"0 0 8px rgba(74,222,128,0.2)":void 0,cursor:"pointer",transition:"all 0.18s"},children:X&&d.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",className:"animate-pop",style:{display:"block",margin:"auto"},children:d.jsx("path",{d:"M2 5l2.5 2.5L8 3",stroke:"#4ade80",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsx("span",{style:{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.12)",fontFamily:"JetBrains Mono, monospace",flexShrink:0},children:String(V+1).padStart(2,"0")}),d.jsx("span",{className:"problem-name",style:{fontSize:13.5,fontWeight:500,letterSpacing:"-0.1px",color:X?"rgba(255,255,255,0.25)":he?"#fca5a5":"#dddde8",textDecoration:X?"line-through":"none"},children:R.name}),d.jsxs("div",{className:"problem-meta",children:[d.jsx("span",{className:"topic-col",style:{fontSize:10.5,color:"rgba(255,255,255,0.22)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:120},children:R.topic}),d.jsx("span",{className:be,style:{fontSize:9.5,fontWeight:700,padding:"2px 8px",borderRadius:99,whiteSpace:"nowrap",letterSpacing:"0.04em"},children:R.difficulty}),d.jsxs("a",{href:R.leetcodeUrl,target:"_blank",rel:"noopener noreferrer",onClick:ke=>ke.stopPropagation(),title:`#${R.id} on LeetCode`,style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"rgba(255,255,255,0.18)",textDecoration:"none",whiteSpace:"nowrap",transition:"color 0.15s"},onMouseEnter:ke=>ke.currentTarget.style.color="#a78bff",onMouseLeave:ke=>ke.currentTarget.style.color="rgba(255,255,255,0.18)",children:["#",R.id,"↗"]})]})]})},`${R.id}-${V}`)})})]})]})]})}Vp.createRoot(document.getElementById("root")).render(d.jsx(Xn.StrictMode,{children:d.jsx(Px,{})}));export{nm as g};
