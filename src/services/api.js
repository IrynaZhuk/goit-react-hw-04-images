import axios from 'axios';

export const getPictures = async (request, page) => {
  const searchParams = new URLSearchParams({
    key: '28408221-8884b414615b22bda0ca1828e',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });
  const URL = `https://pixabay.com/api/?${searchParams}`;
  try {
    const response = await axios.get(URL);
    return response.data.hits;
  } catch (error) {
    return error;
  }
};
