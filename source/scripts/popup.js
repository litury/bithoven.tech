;
(() => {
	"use strict";

	const popupBtns = document.querySelectorAll('.popup-button');
	const popupOverlay = document.querySelector('.overlay');
	const popup = document.querySelectorAll('.popup');
	const popuplClose = document.querySelectorAll('.popup__close');


	popupBtns.forEach((element) => {
		element.addEventListener('click', (event) => {
			let path = event.currentTarget.getAttribute('data-path');

			popup.forEach((element) => {
				element.classList.remove('popup--visible');
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('popup--visible');
			popupOverlay.classList.add('overlay--visible');
		});
	});

	popupOverlay.addEventListener('click', (event) => {
		if (event.target == popupOverlay) {

			popupOverlay.classList.remove('overlay--visible');
			popup.forEach((element) => {
				element.classList.remove('popup--visible');
			});
		}
	});

	popuplClose.forEach((element) => {
		element.addEventListener('click', () => {
			popupOverlay.classList.remove('overlay--visible');
		});
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			popupOverlay.classList.remove('overlay--visible');
		}
	});

})();
