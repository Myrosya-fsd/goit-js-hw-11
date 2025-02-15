import{a as d,S as u,i as m}from"./assets/vendor-DH2CaQaJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p="48845906-64ae9219885c1d872e65b26b8",f="https://pixabay.com/api/";function y(e){const o={key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"};return d.get(f,{params:o}).then(r=>r.data.hits).catch(r=>{console.log(r)})}const g=new u(".gallery-list a",{captionsData:"alt",captionDelay:5e3}),n=e=>{m.error({message:e,position:"topRight",maxWidth:432})};function c(e,o){const r=h(o);e.innerHTML=r,g.refresh()}function h(e){return e.map(v).join("")}function v(e){return`<li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
              <img
                class="card-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                data-source="${e.largeImageURL}"
              />
              <div class="card-texts">
                <div class="card-text-element likes">
                  <p class="element-title">Likes</p>
                  <p class="element-value">${e.likes}</p>
                </div>
                <div class="card-text-element views">
                  <p class="element-title">Views</p>
                  <p class="element-value">${e.views}</p>
                </div>
                <div class="card-text-element comments">
                  <p class="element-title">Comments</p>
                  <p class="element-value">${e.comments}</p>
                </div>
                <div class="card-text-element downloads">
                  <p class="element-title">Downloads</p>
                  <p class="element-value">${e.downloads}</p>
                </div>
              </div>
            </a>
          </li>`}const l={form:document.querySelector(".form"),input:document.querySelector(".form-input"),button:document.querySelector(".form-button"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",b);l.loader.style.display="none";function b(e){e.preventDefault();const o=e.currentTarget.elements.search.value.trim();if(!o){n("Enter some value");return}c(l.gallery,[]),l.loader.style.display="block",y(o).then(r=>{l.loader.style.display="none",r.length===0?n("Sorry, there are no images matching your search query. Please try again!"):c(l.gallery,r)}).catch(r=>{l.loader.style.display="none",n("Sorry, something went wrong. Please try again!")})}
//# sourceMappingURL=index.js.map
