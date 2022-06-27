;
(() => {
	"use strict";

	const popupBtns = document.querySelectorAll('.popup-button');
	const popupOverlay = document.querySelector('.overlay');
	const popup = document.querySelectorAll('.popup');
	const popuplClose = document.querySelectorAll('.popup__close');


	popupBtns.forEach((el) => {
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');

			popup.forEach((el) => {
				el.classList.remove('popup--visible');
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('popup--visible');
			popupOverlay.classList.add('overlay--visible');
		});
	});

	popupOverlay.addEventListener('click', (e) => {
		console.log(e.target);
		if (e.target == popupOverlay) {

			popupOverlay.classList.remove('overlay--visible');
			popup.forEach((el) => {
				el.classList.remove('popup--visible');
			});
		}
	});

	popuplClose.forEach((el) => {
		el.addEventListener('click', (e) => {
			popupOverlay.classList.remove('overlay--visible');
		});
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			popupOverlay.classList.remove('overlay--visible');
		}
	});

})();
