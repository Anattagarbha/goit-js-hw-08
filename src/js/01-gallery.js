import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// create markup

function createMarkup(items) {
  return items
    .map(
      item =>
        `<div>
          <a class="gallery__link" href="${item.original}">
                      <img 
                      class="gallery__image"
                      src="${item.preview}"
                      alt="${item.description}">
                  </a>
          </div>`
    )
    .join('');
}

// select node

const imgGallery = document.querySelector('.gallery');

// insert markup into DOM

const galleryMarkup = createMarkup(galleryItems);
imgGallery.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
