import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  '39226453-68311701c5a3afc9a6c056ab8';

function fetchS(urlBreeds) {
  return axios.get(urlBreeds);
}
