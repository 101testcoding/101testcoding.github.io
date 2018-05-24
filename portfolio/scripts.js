const closeButton = document.querySelector('.lightbox-close');
const lightbox = document.querySelector('.lightbox')
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxImage = document.querySelector('.lightbox-image')

function showImage(event){
	//show lightbox
	lightbox.classList.remove('hidden')
	//get current gallery item
	const elementClickedOn = event.target;
	const galleryItemParent = elementClickedOn.parentElement;
			//replace contents of lightbox-image with current image and caption
	lightboxImage.innerHTML = galleryItemParent.innerHTML
}

function hideImage(event){
	event.preventDefault();
	lightbox.classList.add('hidden');
	}
	//hide lightbox when closed button is clicked
	closeButton.onclick = hideImage;

	//for evvery gallery item, set onlick handler to show image
	for( let i = 0; i < galleryItems.length; i++){
	let item = galleryItems[i];
	item.onclick = showImage;
}