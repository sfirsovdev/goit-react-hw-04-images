import axios from 'axios';

const KEY = '9329282-cef35cd8c23d87ad772673b21';

axios
.get('https://pixabay.com/api/')

async function fetchApi(searchQuery, page) {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}
export default fetchApi;
