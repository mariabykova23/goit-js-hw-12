import{a as b,S as v,i as w}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();async function g(t,e){const r="https://pixabay.com/api/?key=42433869-1e5be4b754d1019adc877ba0e",a={method:"GET",params:{image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:e,q:t}};return(await b.get(r,a)).data}const S="/goit-js-hw-12/assets/x-icon-36b820d9.svg",P=document.querySelector(".container-imgs");function I({largeImageURL:t,webformatURL:e,tags:s,likes:n,views:o,comments:r,downloads:a}){return`<div class="gallery">
    <div class="container-img-wrap">
      <a href="${t}" class="img-link">
          <img src="${e}" alt="${s}" title="${s}" />
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
        <td>${o}</td>
        <td>${r}</td>
        <td>${a}</td>
      </tr>
    </table>
  </div>`}function E(t){return t.map(I).join("")}function h(t){const e=E(t);P.insertAdjacentHTML("beforeend",e)}const i={searchForm:document.querySelector(".form"),loadDiv:document.querySelector(".loader"),loadMorePictures:document.querySelector(".load-morepics"),userKeyWordInput:document.querySelector(".data-userInput"),containerForImages:document.querySelector(".container-imgs")};let c,d,l;i.searchForm.addEventListener("submit",M);i.loadMorePictures.addEventListener("click",$);async function M(t){if(t.preventDefault(),l=i.userKeyWordInput.value.trim(),c=1,y(),!l){d=0,m(),f(),i.containerForImages.innerHTML="",u("Empty field!","green","black",!1);return}try{const e=await g(l,c);e.totalHits===0&&u("Sorry, there are no images matching your search query. Please try again!","red","white",S);const s=e.hits;d=Math.ceil(e.totalHits/20),i.containerForImages.innerHTML="",h(s)}catch(e){u(e),d=0,i.containerForImages.innerHTML=""}finally{m()}f(),p(),t.target.reset()}async function $(){c+=1,y();const t=await g(l,c);h(t.hits),f(),m(),p(),c===d&&u("We are sorry, but you have reached the end of search results.","lightblue","white",!1);const e=i.containerForImages.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*3})}function p(){const t=new v(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:50,captionsPosition:"bottom",animationSpeed:1,captionSelector:"img",loop:!0});t.on("show.simplelightbox"),t.refresh()}function O(){i.loadMorePictures.classList.remove("hidden")}function q(){i.loadMorePictures.classList.add("hidden")}function m(){c>=d?q():O()}function y(){i.loadDiv.classList.remove("hidden")}function f(){i.loadDiv.classList.add("hidden")}function u(t,e,s,n){w.error({position:"topRight",iconUrl:n,message:t,messageColor:s,messageSize:"16",messageLineHeight:"15",backgroundColor:e,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers.js.map