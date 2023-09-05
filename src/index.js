// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   '39226453-68311701c5a3afc9a6c056ab8';

import axios from 'axios';
import Notiflix from 'notiflix';

// Ваш API-ключ:39226453-68311701c5a3afc9a6c056ab8

const elements = {
  serchForm: document.querySelector('#search-form'),
  inputData: document.querySelector('input[name=searchQuery]'),
  galleryImg: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('button.load-more'),
};

// const loadMore = `<button type="button" class="load-more">Load more</button>`;

// console.log(loadMore);
// loadMore.querySelector('button.load-more');

const urlData = 'https://pixabay.com/api/';

elements.serchForm.addEventListener('submit', handlerSubmit);
elements.btnLoadMore.addEventListener('submit', handlerLoadMore);

elements.btnLoadMore.hidden = true;
// elements.btnLoadMore.hidden = false;

async function handlerSubmit(evt) {
  evt.preventDefault();

  const parametr = {
    params: {
      key: '39226453-68311701c5a3afc9a6c056ab8',
      q: 'cat',
      // q: evt.currentTarget.elements[0].value,
      imageType: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: 13,
      per_page: 40,
    },
  };
  parametr.params.page = 4;
  const dataObj = await fetchS(urlData, parametr);
  const dataArr = dataObj.hits;
  // console.log(parametr);
  // console.log(dataObj);
  formGallery(dataArr);
  if (parametr.params.page < dataObj.totalHits / parametr.params.per_page) {
    elements.btnLoadMore.hidden = false;
  } else {
    elements.btnLoadMore.hidden = true;
  }
}

async function fetchS(urlData, parametr) {
  try {
    const response = await axios.get(urlData, parametr);
    // console.log(response.data.hits);
    // console.log(response);
    return await response.data;
  } catch (error) {
    console.error(
      error
      // 'Sorry, there are no images matching your search query. Please try again.'
    );
    return error;
  }
}

function formGallery(dataArr) {
  const marcupGallery = dataArr.map(
    (
      {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = {
        webformatURL: dataArr.hits.webformatURL,
        largeImageURL: dataArr.hits.largeImageURL,
        tags: dataArr.hits.tags,
        likes: dataArr.hits.likes,
        views: ddataArrta.hits.views,
        comments: dataArr.hits.comments,
        downloads: dataArr.hits.downloads,
      }
    ) => {
      // console.log(likes);
      const photoCard = `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b>${likes}
      </p>
      <p class="info-item">
        <b>Views</b>${views}
      </p>
      <p class="info-item">
        <b>Comments</b>${comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>${downloads}
      </p>
    </div>
  </div>`;
      elements.galleryImg.insertAdjacentHTML('beforeend', photoCard);
    }
  );
}

function handlerLoadMore() {
  parametr.params.page++;
  console.log(parametr.params.page);
}
// handlerLoadMore();
