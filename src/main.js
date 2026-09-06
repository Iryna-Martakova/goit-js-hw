import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';


const form = document.querySelector(".form");
const queryInput = form.querySelector(`input[name="search-text"]`);


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = queryInput.value.trim();

    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter something in the search field.",
            position: "topRight",
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then((images) => {
            if (images.length === 0) {
                iziToast.info({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            else {
                createGallery(images);
            }
        })
        .catch((error) => {
            iziToast.error({
                title: 'Error',
                message: `An error occurred.: ${error.message}`,
                position: 'topRight',
            });
        })
        .finally(() => {
            hideLoader();
            form.reset();
        });
}
