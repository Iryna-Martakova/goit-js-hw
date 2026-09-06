import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = '51382784-75992f1b54a5aaf18615b0258';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
    })
        .then((response) => response.data.hits)
        .catch((error) => {
            iziToast.error('Sorry, there are no images matching your search query. Please try again!', error);
        })
}
