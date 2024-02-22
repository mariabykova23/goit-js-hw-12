import{a as b,S as v,i as S}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function f(e,o){const r="https://pixabay.com/api/?key=42433869-1e5be4b754d1019adc877ba0e",s={method:"GET",params:{image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:o,q:e}};return(await b.get(r,s)).data}const w="/goit-js-hw-12/assets/x-icon-36b820d9.svg",P=document.querySelector(".container-imgs");function I({largeImageURL:e,webformatURL:o,tags:n,likes:a,views:t,comments:r,downloads:s}){return`<div class="gallery">
    <div class="container-img-wrap">
      <a href="${e}" class="img-link">
          <img src="${o}" alt="${n}" title="${n}" />
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
        <td>${t}</td>
        <td>${r}</td>
        <td>${s}</td>
      </tr>
    </table>
  </div>`}function E(e){return e.map(I).join("")}function p(e){const o=E(e);P.insertAdjacentHTML("beforeend",o)}const i={searchForm:document.querySelector(".form"),loadDiv:document.querySelector(".loader"),loadMorePictures:document.querySelector(".load-morepics"),userKeyWordInput:document.querySelector(".data-userInput"),containerForImages:document.querySelector(".container-imgs")};let c,d,l;i.searchForm.addEventListener("submit",M);i.loadMorePictures.addEventListener("click",$);async function M(e){if(e.preventDefault(),l=i.userKeyWordInput.value.trim(),c=1,h(),!l){d=0,m(),i.containerForImages.innerHTML="",u("Empty field!","green","black");return}try{const o=await f(l,c);o.totalHits===0&&u("Sorry, there are no images matching your search query. Please try again!","red","white");const n=o.hits;d=Math.ceil(o.totalHits/20),i.containerForImages.innerHTML="",p(n)}catch(o){u(o),d=0,i.containerForImages.innerHTML=""}finally{m()}y(),g(),e.target.reset()}async function $(){c+=1,h();const e=await f(l,c);p(e.hits),y(),m(),g()}function g(){const e=new v(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:50,captionsPosition:"bottom",animationSpeed:1,captionSelector:"img",loop:!0});e.on("show.simplelightbox"),e.refresh()}function O(){i.loadMorePictures.classList.remove("hidden")}function q(){i.loadMorePictures.classList.add("hidden")}function m(){c>=d?q():O()}function h(){i.loadDiv.classList.remove("hidden")}function y(){i.loadDiv.classList.add("hidden")}function u(e,o,n){S.error({position:"topRight",iconUrl:w,message:e,messageColor:n,messageSize:"16",messageLineHeight:"15",backgroundColor:o,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers.js.map
