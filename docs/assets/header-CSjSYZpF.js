(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function m(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=m(e);fetch(e.href,o)}})();const a=document.querySelector(".header-top__select-selected"),s=document.querySelector(".header-top__select-items");a.addEventListener("click",function(){s.style.display=s.style.display==="block"?"none":"block"});s.addEventListener("click",function(t){t.target&&t.target.matches("div[data-value]")&&(a.textContent=t.target.textContent,s.style.display="none")});document.addEventListener("click",function(t){t.target.closest(".header-top__custom-select")||(s.style.display="none")});const p=document.querySelector(".menu__button"),f=document.querySelector(".menu__close"),c=document.querySelector(".menu__list"),l=document.querySelector(".menu--close");p.addEventListener("click",()=>{c.classList.toggle("menu__list--open"),l.classList.toggle("menu--open"),document.body.style.overflow="hidden",console.log("open")});f.addEventListener("click",()=>{c.classList.remove("menu__list--open"),l.classList.remove("menu--open"),document.body.style.overflow="auto",console.log("close")});l.addEventListener("click",t=>{c.contains(t.target)||(c.classList.remove("menu__list--open"),l.classList.remove("menu--open"),document.body.style.overflow="auto",console.log("close"))});const d=document.querySelectorAll(".menu__item");d.forEach(t=>{t.addEventListener("click",()=>{d.forEach(n=>n.classList.remove("active")),t.classList.add("active")})});var r=document.getElementById("popup"),y=document.querySelector(".header-main__busket-wrapper"),g=document.getElementsByClassName("close")[0];y.onclick=function(){r.style.display="block"};g.onclick=function(){r.style.display="none"};window.onclick=function(t){t.target==r&&(r.style.display="none")};
