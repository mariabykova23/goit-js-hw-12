import{a as L,i as l,S as b}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function m(t,r){const o="https://pixabay.com/api/?key=42433869-1e5be4b754d1019adc877ba0e",a={method:"GET",params:{image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:r,q:t}};return(await L.get(o,a)).data}const u="/goit-js-hw-12/assets/x-icon-36b820d9.svg",v=document.querySelector(".container-imgs");function F({largeImageURL:t,webformatURL:r,tags:i,likes:n,views:e,comments:o,downloads:a}){return`<div class="gallery">
    <div class="container-img-wrap">
      <a href="${t}" class="img-link">
          <img src="${r}" alt="${i}" title="${i}" />
        </a>
    </div>
    <table border="0" class="image-descrip">
      <tr class="td-descrip">
        <td>Likes</td>
        <td>Views</td>
        <td>Comments</td>
        <td>Downloads</td>
      </tr>
      <tr class="td-result">
        <td>${n}</td>
        <td>${e}</td>
        <td>${o}</td>
        <td>${a}</td>
      </tr>
    </table>
  </div>`}function S(t){return t.map(F).join("")}function g(t){const r=S(t);v.insertAdjacentHTML("beforeend",r)}const s={searchForm:document.querySelector(".form"),loadDiv:document.querySelector(".hidden-load"),loadMorePictures:document.querySelector(".load-morepics"),userKeyWordInput:document.querySelector(".data-userInput"),containerForImages:document.querySelector(".container-imgs")};let c,p,d;s.searchForm.addEventListener("submit",P);s.loadMorePictures.addEventListener("click",w);async function P(t){t.preventDefault(),d=s.userKeyWordInput.value.trim(),c=1,s.loadDiv.classList.remove("hidden");try{const r=await m(d,c);if(r.totalHits>0){const i=r.hits;p=Math.ceil(r.totalHits/20),s.containerForImages.innerHTML="",g(i)}else l.show({position:"topRight",iconUrl:u,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}catch{l.show({position:"topRight",iconUrl:u,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}s.loadDiv.classList.add("hidden"),h(),f(),t.target.reset()}async function w(){c+=1,s.loadDiv.classList.remove("hidden");const t=await m(d,c);g(t.hits),s.loadDiv.classList.add("hidden"),f(),h()}function h(){const t=new b(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:50,captionsPosition:"bottom",animationSpeed:1,captionSelector:"img",loop:!0});t.on("show.simplelightbox"),t.refresh()}function E(){s.loadMorePictures.classList.remove("hidden")}function I(){s.loadMorePictures.classList.add("hidden")}function f(){c>=p?I():E()}
//# sourceMappingURL=commonHelpers.js.map
