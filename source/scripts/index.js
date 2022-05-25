// const menuButton = document.querySelector('.header__button-nav');
// const menu = document.querySelector('.header__themes--noactive');

// menuButton.addEventListener('click', () => {
// 	menu.classList.toggle('header__themes');
// 	menuButton.classList.toggle('rotate');
// });


// Строка поиска
const menuButton = document.querySelector('.btn');
const inputDeckt = document.querySelector('.input');

menuButton.addEventListener('click', () => {
	inputDeckt.classList.toggle('inclicked');
	menuButton.classList.toggle('close');
});






// const contentButton = document.querySelector('.content__nav-button');
// const contentMenu = document.querySelector('.content__menu');

// contentButton.addEventListener('click', () => {
// 	contentMenu.classList.toggle('content__menu--active');

// });

// $(".btn").on("click", function () {
// 	$(".input").toggleClass("inclicked");
// 	$(".btn").toggleClass("close");
// });




// const btnSearch = document.querySelector('.user-nav__search');
// const searchForm = document.querySelector('.user-nav__noactive');
// const searchInput = document.querySelector('.user-nav__input');

// btnSearch.addEventListener('click', () => {
// 	searchForm.classList.toggle('user-nav--active');
// 	searchInput.classList.toggle('user-nav--active');
// 	searchInput.focus();
// });
