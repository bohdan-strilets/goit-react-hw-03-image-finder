const URL = 'https://pixabay.com/api/';
const KEY = '11240134-58b8f655e9e0f8ae8b6e8e7de';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function fetchImages(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}

export default fetchImages;
