;
(() => {
	"use strict";

	const btns = document.querySelectorAll('.popup-button');
	const modalOverlay = document.querySelector('.popup-overlay');
	const modals = document.querySelectorAll('.popup');
	const modalClose = document.querySelectorAll('.popup__close');


	btns.forEach((el) => {
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');

			modals.forEach((el) => {
				el.classList.remove('popup--visible');
			});

			document.querySelector(`[data-target="${path}"]`).classList.add('popup--visible');
			modalOverlay.classList.add('popup-overlay--visible');
		});
	});

	modalOverlay.addEventListener('click', (e) => {
		console.log(e.target);

		if (e.target == modalOverlay) {
			modalOverlay.classList.remove('popup-overlay--visible');
			modals.forEach((el) => {
				el.classList.remove('popup--visible');
			});
		}
	});

	modalClose.forEach((el) => {
		el.addEventListener('click', (e) => {

			modalOverlay.classList.remove('popup-overlay--visible');
		});
	});


	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			//ваша функция закрытия окна
			modalOverlay.classList.remove('popup-overlay--visible');
		}
	});

})();
