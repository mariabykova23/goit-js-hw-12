import{a as h,i as y,S as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function l(t,r){const o="https://pixabay.com/api/?key=42433869-1e5be4b754d1019adc877ba0e",n={method:"GET",params:{image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:r,q:t}};return(await h.get(o,n)).data}const b="/goit-js-hw-12/assets/x-icon-36b820d9.svg",v=document.querySelector(".container-imgs");function S({largeImageURL:t,webformatURL:r,tags:i,likes:a,views:e,comments:o,downloads:n}){return`<div class="gallery">
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
        <td>${a}</td>
        <td>${e}</td>
        <td>${o}</td>
        <td>${n}</td>
      </tr>
    </table>
  </div>`}function P(t){return t.map(S).join("")}function u(t){const r=P(t);v.insertAdjacentHTML("beforeend",r)}const s={searchForm:document.querySelector(".form"),loadDiv:document.querySelector(".hidden-load"),loadMorePictures:document.querySelector(".load-morepics"),userKeyWordInput:document.querySelector(".data-userInput"),containerForImages:document.querySelector(".container-imgs")};let c,m,d;s.searchForm.addEventListener("submit",w);s.loadMorePictures.addEventListener("click",F);async function w(t){t.preventDefault(),d=s.userKeyWordInput.value.trim(),c=1,s.loadDiv.classList.add("loader");const r=await l(d,c);if(r.totalHits>0){const i=r.hits;s.containerForImages.innerHTML="",u(i)}else y.show({position:"topRight",iconUrl:b,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0});p(),g(),s.loadDiv.classList.remove("loader"),t.target.reset()}async function F(){c+=1;const t=await l(d,c);m=Math.ceil(t.totalHits/20),g(),u(t.hits),p()}function p(){const t=new L(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:50,captionsPosition:"bottom",animationSpeed:1,captionSelector:"img",loop:!0});t.on("show.simplelightbox"),t.refresh()}function E(){s.loadMorePictures.classList.remove("hidden")}function I(){s.loadMorePictures.classList.add("hidden")}function g(){c>=m?I():E()}
//# sourceMappingURL=commonHelpers.js.map
