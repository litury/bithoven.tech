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


const menuButtonMob = document.querySelector('.btn_media_mobile');
const inputMobile = document.querySelector('.input_media_mobile');
const labelMobile = document.querySelector('.middle__label_media_mobile');

const homeMob = document.querySelector('.header__button_type_home');
const profiMob = document.querySelector('.header__button_type_profile');
const menuMob = document.querySelector('.header__button_type_menu');


menuButtonMob.addEventListener('click', () => {
	inputMobile.classList.toggle('inclicked');
	menuButtonMob.classList.toggle('close');
	labelMobile.classList.toggle('middle__label_media_mobilenone');
	homeMob.classList.toggle('middle__label_media_mobilenone');
	profiMob.classList.toggle('middle__label_media_mobilenone');
	menuMob.classList.toggle('middle__label_media_mobilenone');
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
