'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imgPix } from './js/pixabay-api';

import icon from './img/x-icon.svg';

import { renderImages } from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.form'),
  loadDiv: document.querySelector('.hidden-load'),
  loadMorePictures: document.querySelector('.load-morepics'),
  userKeyWordInput: document.querySelector('.data-userInput'),
  containerForImages: document.querySelector('.container-imgs'),
};

let page;
let maxPages;
let userKeyWord;

refs.searchForm.addEventListener('submit', onSubmit);

refs.loadMorePictures.addEventListener('click', loadMore);

async function onSubmit(e) {
  e.preventDefault();
  userKeyWord = refs.userKeyWordInput.value.trim();
  page = 1;
  refs.loadDiv.classList.add('loader');
  
  const data = await imgPix(userKeyWord, page);
  if (data.totalHits > 0) {
    const img = data.hits;
    refs.containerForImages.innerHTML = '';
    renderImages(img);
  } else {
    iziToast.show({
      position: 'topRight',
      iconUrl: icon,
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      messageSize: '16',
      messageLineHeight: '15',
      backgroundColor: '#EF4040',
      timeout: 5000,
      displayMode: 2,
      close: true,
      closeOnEscape: true,
      closeOnClick: true,
    });
  }
  lightBoxShow();
  checkLoadBtnVisibility();
  refs.loadDiv.classList.remove('loader');
  e.target.reset();
}

async function loadMore() {
  page += 1;
  const data = await imgPix(userKeyWord, page);
  maxPages = Math.ceil(data.totalHits / 20);
  checkLoadBtnVisibility();
  renderImages(data.hits);
  lightBoxShow();
}

function lightBoxShow() {
  const lightbox = new SimpleLightbox('.container-img-wrap a', {
    close: true,
    captionsData: 'alt',
    captionDelay: 50,
    captionsPosition: 'bottom',
    animationSpeed: 1,
    captionSelector: 'img',
    loop: true,
  });

  lightbox.on('show.simplelightbox');
  lightbox.refresh();
}

function showLoadBtn() {
  refs.loadMorePictures.classList.remove('hidden');
}

function removeLoadBtn() {
  refs.loadMorePictures.classList.add('hidden');
}

function checkLoadBtnVisibility() {
  if (page >= maxPages) {
    removeLoadBtn();
  } else {
    showLoadBtn();
  }
}
