// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   '39226453-68311701c5a3afc9a6c056ab8';

import Notiflix from 'notiflix';

// Ваш API-ключ:39226453-68311701c5a3afc9a6c056ab8

const elements = {
  serchForm: document.querySelector('#search-form'),
  inputData: document.querySelector('input[name=searchQuery]'),
};
const urlData = 'https://pixabay.com/api/';

elements.serchForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  //   const dataInput = evt.currentTarget.textContent;

  //   console.log(elements.inputData.value);

  const options = ({ key, q, imageType, orientation, safesearch } = {
    key: '39226453-68311701c5a3afc9a6c056ab8',
    q: elements.inputData.value,
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  console.log(key, q, imageType, orientation, safesearch);

  //   options.q = evt.currentTarget.textContent;

  //   const urlSerch =
  //     `${urlData}?, {${options}}`;
  //   console.log(urlSerch);

  //   fetchS(urlSerch);
  //   console.log(fetchS);
}

function fetchS(urlSerch) {}
