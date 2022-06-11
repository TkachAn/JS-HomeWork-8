// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// import { galleryItems } from '../gallery-items.js';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');

function createElForGallery(){
  const makeup = galleryItems.map(({preview,original,description})=>{
		return `
			<a class="gallery__item" href=${original}>
				<img class="gallery__image" src=${preview} alt=${description}/>
			</a>`
	}).join('');

galleryRef.innerHTML = makeup;
}
createElForGallery();//galleryItems

function simLb(event){
	console.log(event.target);
	console.log(event.currentTarget);
	event.preventDefault();
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	lightbox;
};

galleryRef.addEventListener("click", simLb);
let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 200,
});


console.log(galleryItems);
