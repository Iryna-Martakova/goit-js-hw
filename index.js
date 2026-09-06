import{a as f,S as p,i as n}from"./assets/vendor-DfezCyqK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="51382784-75992f1b54a5aaf18615b0258",m="https://pixabay.com/api/";function h(o){return f.get(m,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{iziToast.error("Sorry, there are no images matching your search query. Please try again!",r)})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let y=new p(".gallery a");function g({webformatURL:o,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${o}" alt="${s}" />
      </a>
      <div class="info">
        <p class="info-label">Likes <span class="info-value">${i}</span></p>
        <p class="info-label">Views <span class="info-value">${e}</span></p>
        <p class="info-label">Comments <span class="info-value">${t}</span></p>
        <p class="info-label">Downloads <span class="info-value">${a}</span></p>
      </div>
    </li>
  `}function b(o){const r=o.map(g).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function v(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const l=document.querySelector(".form"),q=l.querySelector('input[name="search-text"]');l.addEventListener("submit",$);function $(o){o.preventDefault();const r=q.value.trim();if(!r){n.error({title:"Error",message:"Please enter something in the search field.",position:"topRight"});return}L(),v(),h(r).then(s=>{s.length===0?n.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(s)}).catch(s=>{n.error({title:"Error",message:`An error occurred.: ${s.message}`,position:"topRight"})}).finally(()=>{S(),l.reset()})}
//# sourceMappingURL=index.js.map
