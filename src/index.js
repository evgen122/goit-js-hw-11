import axios from 'axios';
import Notiflix from 'notiflix';

const elements = {
  serchForm: document.querySelector('#search-form'),
  inputData: document.querySelector('input[name=searchQuery]'),
  galleryImg: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('button.load-more'),
  warning: document.querySelector('.warning'),
};

const urlData = 'https://pixabay.com/api/';
const parametr = {
  params: {
    key: '39226453-68311701c5a3afc9a6c056ab8',
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 40,
  },
};

elements.serchForm.addEventListener('submit', handlerSubmit);
elements.btnLoadMore.addEventListener('click', handlerLoadMore);

elements.btnLoadMore.hidden = true;
elements.warning.hidden = true;

async function handlerSubmit(evt) {
  evt.preventDefault();
  elements.galleryImg.innerHTML = '';
  elements.warning.hidden = true;

  parametr.params.page = 1;
  parametr.params.q = evt.currentTarget.elements[0].value;

  const dataObj = await fetchS(urlData, parametr);
  const dataArr = dataObj.hits;

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
    if (response.data.hits.length === 0) {
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return await response.data;
  } catch (error) {
    console.error(error);
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
        views: dataArr.hits.views,
        comments: dataArr.hits.comments,
        downloads: dataArr.hits.downloads,
      }
    ) => {
      const photoCard = `<div class="photo-card">
    <img class="img" src="${webformatURL}" alt="${tags}" loading="lazy" />
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

async function handlerLoadMore() {
  parametr.params.page += 1;

  const dataObj = await fetchS(urlData, parametr);
  const dataArr = dataObj.hits;
  console.log(parametr.params.page);

  formGallery(dataArr);

  if (parametr.params.page < dataObj.totalHits / parametr.params.per_page) {
    elements.btnLoadMore.hidden = false;
  } else {
    elements.btnLoadMore.hidden = true;

    elements.warning.hidden = false;
  }
}
