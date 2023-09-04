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
};

const urlData = 'https://pixabay.com/api/';

elements.serchForm.addEventListener('submit', handlerSubmit);
// serchForm.addEventListener('submit', handlerSubmit);

async function handlerSubmit(evt) {
  evt.preventDefault();
  //   const dataInput = evt.currentTarget.value;
  //   const dataInput = evt.target.value;
  //   console.log('dataInput', dataInput);
  // const wordSerch = evt.currentTarget.elements[0].value;
  const options = ({ key, q, imageType, orientation, safesearch } = {
    key: '39226453-68311701c5a3afc9a6c056ab8',
    q: 'cat',
    // q: evt.currentTarget.elements[0].value,
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  console.log(key, q, imageType, orientation, safesearch);

  //   options.q = evt.currentTarget.textContent;

  const urlSerch = `${urlData}?key=${key}&q=${q}&image-type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`;
  // const urlSerch = urlData;
  // console.log(urlSerch);

  // let dataArr = [];
  const dataArr = await fetchS(urlSerch);

  // console.log(fetchS(urlSerch));
  // return dataArr;
  console.log(dataArr);

  formGallery(dataArr);
  //   choiceImg(dataArr);
}
const loadMore = `<button type="button" class="load-more">Load more</button>`;
elements.galleryImg.insertAdjacentHTML('afterend', loadMore);

async function fetchS(urlSerch) {
  try {
    const response = await axios.get(urlSerch);
    // console.log(response.data.hits);
    // console.log(response);
    return await response.data.hits;
    // const respData = await response.data.hits;
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
// вставить разметку для массива объектов
// разметку обернуть в мар, вставить элементы массива
// const marcupGallery = dataArr
//   .map(
//     ({
//       hits: {
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       },
//     }) => {
// const dataInfo = ({
// webformatURL,
// largeImageURL,
// tags,
// likes,
// views,
// comments,
// downloads,
// } = {
//   webformatURL: dataArr.hits.webformatURL,
//   largeImageURL: dataArr.hits.largeImageURL,
//   tags: dataArr.hits.tags,
//   likes: dataArr.hits.likes,
//   views: ddataArrta.hits.views,
//   comments: dataArr.hits.comments,
//   downloads: dataArr.hits.downloads,
// });
//         const photoCard = `<div class="photo-card">
//     <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//     <div class="info">
//       <p class="info-item">
//         <b>Likes</b>${likes}
//       </p>
//       <p class="info-item">
//         <b>Views</b>${views}
//       </p>
//       <p class="info-item">
//         <b>Comments</b>${comments}
//       </p>
//       <p class="info-item">
//         <b>Downloads</b>${downloads}
//       </p>
//     </div>
//   </div>`;
//       }
//     )
//     .json();
//   elements.galleryImg.insertAdjacentHTML('beforeend', marcupGallery);
// }

// function choiceImg(dataArr) {}

//   async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
