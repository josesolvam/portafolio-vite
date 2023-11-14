(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const A of a.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&d(A)}).observe(document,{childList:!0,subtree:!0});function q(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(i){if(i.ep)return;i.ep=!0;const a=q(i);fetch(i.href,a)}})();const U=document.querySelector("body"),Q=document.querySelector("#menu-movil"),L=document.querySelector("#navegacion-principal"),b=document.querySelector("#sidebar"),P=document.querySelector("main"),J=document.querySelector("#menu-icon"),M=document.querySelector("#close-menu-icon"),H=document.querySelector("#nombre"),Z=document.querySelector("#telefono"),ee=document.querySelector("#correo"),oe=document.querySelector("#mensaje"),ne=document.querySelector("#formulario"),te=document.querySelector('#formulario button[type="submit"]'),_=document.querySelector("#resumen-servicios"),j=document.querySelector("#contenedor-form-index"),k=document.querySelector("#sobre-mi"),D=document.querySelector(".servicio-card.frontend"),x=document.querySelector(".servicio-card.design"),N=document.querySelector(".servicio-card.api-db"),z=document.querySelector(".servicio-card.despliegue"),G=document.querySelector(".servicio-card.optimizacion"),V=document.querySelector(".servicio-card.economico"),R=document.querySelector("#contenedor-form-contacto"),c=document.createElement("DIV");function F(){W(),X()}function W(){c.setAttribute("id","overlay"),c.style.display="none",c.style.backgroundColor="rgba(0,0,0,0)",c.style.position="fixed",c.style.width="100%",c.style.height="100%",c.style.top="0",c.style.left="0",c.style.zIndex="-1",document.body.appendChild(c)}function X(){J.addEventListener("click",$),M.addEventListener("click",O),c.addEventListener("click",O),window.addEventListener("scroll",function(){P.getBoundingClientRect().top<0?(Q.style.backgroundColor="var(--primario)",L.style.backgroundColor="var(--primario)",b.style.backgroundColor="var(--primario)"):(Q.style.backgroundColor="var(--indigo-oscuro)",L.style.backgroundColor="var(--indigo-oscuro)",b.style.backgroundColor="var(--indigo-oscuro)")})}function $(){U.classList.add("block-scroll"),b.style.width="25rem",c.style.display="block",c.style.zIndex="2",c.style.backgroundColor="rgba(0,0,0,0.6)"}function O(){U.classList.remove("block-scroll"),b.style.width="0",c.style.backgroundColor="rgba(0,0,0,0)",c.style.display="none",c.style.zIndex="-1"}function K(){Y()}function Y(){T([_,k,D,x,R]),window.addEventListener("scroll",function(){T([_,j,k,D,x,N,z,G,V,R])})}function T(g){g.forEach(u=>{u&&u.getBoundingClientRect().top<window.innerHeight-40&&u.classList.add("fade-in")})}/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/(function(g,u,q){function d(o,e){return typeof o===e}function i(){var o,e,r,t,s,y,l;for(var m in p)if(p.hasOwnProperty(m)){if(o=[],e=p[m],e.name&&(o.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(r=0;r<e.options.aliases.length;r++)o.push(e.options.aliases[r].toLowerCase());for(t=d(e.fn,"function")?e.fn():e.fn,s=0;s<o.length;s++)y=o[s],l=y.split("."),l.length===1?n[l[0]]=t:(!n[l[0]]||n[l[0]]instanceof Boolean||(n[l[0]]=new Boolean(n[l[0]])),n[l[0]][l[1]]=t),B.push((t?"":"no-")+l.join("-"))}}function a(o){var e=v.className,r=n._config.classPrefix||"";if(E&&(e=e.baseVal),n._config.enableJSClass){var t=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");e=e.replace(t,"$1"+r+"js$2")}n._config.enableClasses&&(e+=" "+r+o.join(" "+r),E?v.className.baseVal=e:v.className=e)}function A(o,e){if(typeof o=="object")for(var r in o)C(o,r)&&A(r,o[r]);else{o=o.toLowerCase();var t=o.split("."),s=n[t[0]];if(t.length==2&&(s=s[t[1]]),typeof s<"u")return n;e=typeof e=="function"?e():e,t.length==1?n[t[0]]=e:(!n[t[0]]||n[t[0]]instanceof Boolean||(n[t[0]]=new Boolean(n[t[0]])),n[t[0]][t[1]]=e),a([(e&&e!=0?"":"no-")+t.join("-")]),n._trigger(o,e)}return n}var B=[],p=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(o,e){var r=this;setTimeout(function(){e(r[o])},0)},addTest:function(o,e,r){p.push({name:o,fn:e,options:r})},addAsyncTest:function(o){p.push({name:null,fn:o})}},n=function(){};n.prototype=f,n=new n;var C,v=u.documentElement,E=v.nodeName.toLowerCase()==="svg";(function(){var o={}.hasOwnProperty;C=d(o,"undefined")||d(o.call,"undefined")?function(e,r){return r in e&&d(e.constructor.prototype[r],"undefined")}:function(e,r){return o.call(e,r)}})(),f._l={},f.on=function(o,e){this._l[o]||(this._l[o]=[]),this._l[o].push(e),n.hasOwnProperty(o)&&setTimeout(function(){n._trigger(o,n[o])},0)},f._trigger=function(o,e){if(this._l[o]){var r=this._l[o];setTimeout(function(){var t;for(t=0;t<r.length;t++)r[t](e)},0),delete this._l[o]}},n._q.push(function(){f.addTest=A}),n.addAsyncTest(function(){function o(t,s,y){function l(S){var w=S&&S.type==="load"?m.width==1:!1,I=t==="webp";A(t,I&&w?new Boolean(w):w),y&&y(S)}var m=new Image;m.onerror=l,m.onload=l,m.src=s}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],r=e.shift();o(r.name,r.uri,function(t){if(t&&t.type==="load")for(var s=0;s<e.length;s++)o(e[s].name,e[s].uri)})}),i(),a(B),delete f.addTest,delete f.addAsyncTest;for(var h=0;h<n._q.length;h++)n._q[h]();g.Modernizr=n})(window,document);document.addEventListener("DOMContentLoaded",function(){F(),K()});export{H as a,Z as b,oe as c,te as d,ne as f,ee as i};