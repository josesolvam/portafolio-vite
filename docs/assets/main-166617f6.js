(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const d=document.querySelector("body"),s=document.querySelector("#menu-movil"),l=document.querySelector("#navegacion-principal"),r=document.querySelector("#sidebar"),y=document.querySelector("main"),m=document.querySelector("#menu-icon"),f=document.querySelector("#close-menu-icon"),q=document.querySelector("#nombre"),h=document.querySelector("#telefono"),C=document.querySelector("#correo"),L=document.querySelector("#mensaje"),k=document.querySelector("#formulario"),E=document.querySelector('#formulario button[type="submit"]'),e=document.createElement("DIV");function p(){b(),g()}function b(){e.setAttribute("id","overlay"),e.style.display="none",e.style.backgroundColor="rgba(0,0,0,0)",e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="-1",document.body.appendChild(e)}function g(){m.addEventListener("click",v),f.addEventListener("click",u),e.addEventListener("click",u),window.addEventListener("scroll",function(){y.getBoundingClientRect().top<0?(s.style.backgroundColor="var(--indigo)",l.style.backgroundColor="var(--indigo)",r.style.backgroundColor="var(--indigo)"):(s.style.backgroundColor="var(--primario)",l.style.backgroundColor="var(--primario)",r.style.backgroundColor="var(--primario)")})}function v(){d.classList.add("block-scroll"),r.style.width="25rem",e.style.display="block",e.style.zIndex="2",e.style.backgroundColor="rgba(0,0,0,0.6)"}function u(){d.classList.remove("block-scroll"),r.style.width="0",e.style.backgroundColor="rgba(0,0,0,0)",e.style.display="none",e.style.zIndex="-1"}document.addEventListener("DOMContentLoaded",function(){p()});export{q as a,h as b,L as c,E as d,k as f,C as i};
