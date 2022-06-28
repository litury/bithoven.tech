;
(() => {
	"use strict";

	const popupBtns = document.querySelectorAll('.popup-button');
	const popupOverlay = document.querySelector('.overlay');
	const popup = document.querySelectorAll('.popup');
	const popuplClose = document.querySelectorAll('.popup__close');
	let modalTitle = document.querySelector('.popup__title')
	let modalText = document.querySelector('.popup__text')


	popupBtns.forEach((element) => {
		element.addEventListener('click', (event) => {
			let popupTitle = event.currentTarget.getAttribute('data-popup-title');
			let popupText = event.currentTarget.getAttribute('data-popup-text');

			popup.forEach((element) => {
				element.classList.remove('popup--visible');
			});

			modalTitle.textContent = popupTitle
			modalText.textContent = popupText

			popup.forEach((element) => {
				element.classList.add('popup--visible');
			});
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
