// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   '39226453-68311701c5a3afc9a6c056ab8';

import Notiflix from 'notiflix';

// Ваш API-ключ:39226453-68311701c5a3afc9a6c056ab8

const elements = {
  serchForm: document.querySelector('#search-form'),
};
const urlData = 'https://pixabay.com/api/';
elements.serchForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  const options = {
    key: '39226453-68311701c5a3afc9a6c056ab8',
    // q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  options.q = evt.currentTarget.textContent;

  const urlSerch = ``;

  fetchS(urlSerch);
}

function fetchS(urlSerch) {}
