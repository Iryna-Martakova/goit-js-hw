import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox(".gallery a");

function imageTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p class="info-label">Likes <span class="info-value">${likes}</span></p>
        <p class="info-label">Views <span class="info-value">${views}</span></p>
        <p class="info-label">Comments <span class="info-value">${comments}</span></p>
        <p class="info-label">Downloads <span class="info-value">${downloads}</span></p>
      </div>
    </li>
  `;
}

export default function createGallery(images) {
    const markup = images.map(imageTemplate).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}


function clearGallery() {
    gallery.innerHTML = '';
}
 
    
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}    


export { clearGallery, showLoader, hideLoader };
    
  