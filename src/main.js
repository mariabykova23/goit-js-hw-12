'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imgPix } from './js/pixabay-api';

// import icon from './img/x-icon.svg';

import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.form');
const containerForImages = document.querySelector('.container-imgs');
const loadDiv = document.querySelector('.hidden-load');
const loadMorePictures = document.querySelector('.load-morepics');
const userKeyWordInput = document.querySelector('.data-userInput');

const imgSearch = new imgPix();

let page = 1;
let maxPages;

searchForm.addEventListener('submit', ev => {
  ev.preventDefault();
  clearGallery();
  const userKeyWord = userKeyWordInput.value.trim();
  page = 1;
  onSubmit(userKeyWord);
});

loadMorePictures.addEventListener('click', e => {
  e.preventDefault();
  const userKeyWord = userKeyWordInput.value.trim();
  loadMore(userKeyWord);
  noMorePages();
});

function loadMore(userKeyWord) {
  let newPage = page + 1;

  imgSearch
    .getImage(userKeyWord, newPage)
    .then(data => {
      let maxPages = Math.ceil(data.totalHits / 20);
      if (newPage <= maxPages) {
        loadMorePictures.classList.add('load-morepics-on');
        renderImages(data.hits);
        lightBoxShow();
        return;
      } else {
        loadMorePictures.classList.remove('load-morepics-on');
        noMorePages(newPage, maxPages);
      }
    })
    .catch(error => {
      console.error('Error loading images:', error);
    });
  page++;
}

function onSubmit(userKeyWord) {
  loadDiv.classList.add('loader');

  imgSearch
    .getImage(userKeyWord, page)
    .then(data => {
      if (data.totalHits > 0) {
        const img = data.hits;
        renderImages(img);
        lightBoxShow();
        loadMorePictures.classList.add('load-morepics-on');
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
    })
    .catch(err => {
      iziToast.error({
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
    })
    .finally(() => {
      loadDiv.classList.remove('loader');
    });
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

function noMorePages(newPage, maxPages) {
  if (newPage > maxPages) {
    iziToast.show({
      position: 'topRight',
      message: 'Sorry, there are no images to load!',
      messageColor: 'black',
      messageSize: '16',
      messageLineHeight: '15',
      backgroundColor: 'yellow',
      timeout: 5000,
      displayMode: 2,
      close: true,
      closeOnEscape: true,
      closeOnClick: true,
    });
  }
}

function clearGallery() {
  containerForImages.innerHTML = '';
  loadMorePictures.classList.remove('load-morepics-on');
}
