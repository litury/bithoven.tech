;(() => {
	"use strict";

	const disBtnOf = document.querySelector('.discus__button-off')
	const disBlock = document.querySelector('.discus')
	const disBtnNavDesc = document.querySelector('.content__button-svg--dis');
	const buttonReply = document.querySelector(".content__button-reply");
	const contentSuccess = document.querySelector(".content__success");

	buttonReply.addEventListener("click", () => {
		navigator.clipboard.writeText(window.location.href);
		contentSuccess.classList.add("content__success_state_active");
		setTimeout(() => {
			contentSuccess.classList.remove("content__success_state_active");
		}, 1000);
	});

	disBtnOf.addEventListener('click', () => {
		disBlock.classList.add('discus-display--non');
	});

	disBtnNavDesc.addEventListener('click', () => {
		disBlock.classList.remove('discus-display--non');
	});


	const disBtnTop = document.querySelector('.discus__nav-button')
	const disMenuBlock = document.querySelector('.discus__menu')


	disBtnTop.addEventListener('click', () => {
		disMenuBlock.classList.toggle('discus__menu--yes');
	});


	const disBtnNav = document.querySelector('.content__nav-button')
	const disMenuCont = document.querySelector('.content__menu')
	const disMenuSoc = document.querySelector('.content__social')


	disBtnNav.addEventListener('click', () => {
		disMenuCont.classList.toggle('content__menu--yes');
		disMenuSoc.classList.toggle('content__social--active');
	});
})();