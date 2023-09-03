// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   '39226453-68311701c5a3afc9a6c056ab8';

import axios from 'axios';
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
  //   const dataInput = evt.currentTarget.value;
  //   const dataInput = evt.target.value;
  //   console.log('dataInput', dataInput);

  const options = ({ key, q, imageType, orientation, safesearch } = {
    key: '39226453-68311701c5a3afc9a6c056ab8',
    q: elements.inputData.value,
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  console.log(key, q, imageType, orientation, safesearch);

  //   options.q = evt.currentTarget.textContent;

  const urlSerch = `${urlData}?key=${key}&q=${q}&image-type=${imageType}&orientation=${orientation}&safesearch=${safesearch}}`;
  console.log(urlSerch);

  fetchS(urlSerch);
  //   console.log(fetchS);
}

async function fetchS(urlSerch) {
  try {
    const response = await axios.get('urlSerch');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

//   async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
