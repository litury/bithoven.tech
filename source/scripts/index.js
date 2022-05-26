//шапка поиска

const logoBtnMobMenu = document.querySelector('.header-mobile__logotype');
const menuBtnMob = document.querySelector('.header__button-deck');
const langBtnMob = document.querySelector('.header-mobile__lang');
const searchBtnMob = document.querySelector('.header-mobile__search');
const authhBtnMob = document.querySelector('.header-mobile__auth');
const menuMob = document.querySelector('.mobile-menu');
const headerBlur = document.querySelector('.header-mobile')
const ofMobmenu = document.querySelector('.mobile-menu__button')
const langMobmenu = document.querySelector('.mobile-menu_lang')
const langMobBtn = document.querySelector('.mobile-menu__button-ofLang')



const searchMobBtn = document.querySelector('.middle_media_mobile')

const headerNav = document.querySelector('.header__nav')

const formNav = document.querySelector('.form')

const formBtn = document.querySelector('.form__button')


//показать нижний поиск
searchMobBtn.addEventListener('click', () => {
	formNav.classList.add('header__button--yes');

});

//скрыть нижний поиск
formBtn.addEventListener('click', () => {
	formNav.classList.remove('header__button--yes');
});






//показать нижнее меню
menuBtnMob.addEventListener('click', () => {
	menuMob.classList.add('header__button--yes');
	headerBlur.classList.add('blur');
});

//скрыть нижнее меню
ofMobmenu.addEventListener('click', () => {
	menuMob.classList.remove('header__button--yes');
	headerBlur.classList.remove('blur');
});


//показать выборя языка
langBtnMob.addEventListener('click', () => {
	langMobmenu.classList.add('header__button--yes');
	headerBlur.classList.add('blur');
});

//скрыть выбор языка
langMobBtn.addEventListener('click', () => {
	langMobmenu.classList.remove('header__button--yes');
	headerBlur.classList.remove('blur');
});

//шапка поиска
logoBtnMobMenu.addEventListener('click', () => {
	menuBtnMob.classList.toggle('header__button--no');
	langBtnMob.classList.toggle('header__button--no');

	searchBtnMob.classList.toggle('header__button--yes');
	authhBtnMob.classList.toggle('header__button--yes');

});

//header mobile
const headBtnMobMenu = document.querySelector('.header__button_type_menu');
const headBtnMobOF = document.querySelector('.header__button-onof');

const headMobMenu = document.querySelector('.header-mobile');
const headMobMenuBlock = document.querySelector('.header__menu-wrap');


headBtnMobMenu.addEventListener('click', () => {
	headMobMenu.classList.toggle('header__button--no');
	headMobMenuBlock.classList.toggle('header__button--yes');
});

headBtnMobOF.addEventListener('click', () => {
	headMobMenu.classList.toggle('header__button--no');
	headMobMenuBlock.classList.toggle('header__button--yes');
});

// подменю в мобильном меню
const menuButton = document.querySelector('.header__button-nav');
const menu = document.querySelector('.header__themes--noactive');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('header__themes');
	menuButton.classList.toggle('rotate');
});

menuBtnMob.addEventListener('click', () => {
	menuBtnMob.classList.toggle('header__button--no');
	langBtnMob.classList.toggle('header__button--no');

	searchBtnMob.classList.toggle('header__button--yes');
	authhBtnMob.classList.toggle('header__button--yes');

});






// // Строка поиска
// const menuButton = document.querySelector('.btn');
// const inputDeckt = document.querySelector('.input');

// menuButton.addEventListener('click', () => {
// 	inputDeckt.classList.toggle('inclicked');
// 	menuButton.classList.toggle('close');

// });


// const menuButtonMob = document.querySelector('.btn_media_mobile');
// const inputMobile = document.querySelector('.input_media_mobile');
// const labelMobile = document.querySelector('.middle__label_media_mobile');

// const homeMob = document.querySelector('.header__button_type_home');
// const profiMob = document.querySelector('.header__button_type_profile');
// const menuMob = document.querySelector('.header__button_type_menu');


// menuButtonMob.addEventListener('click', () => {
// 	inputMobile.classList.toggle('inclicked');
// 	menuButtonMob.classList.toggle('close');
// 	labelMobile.classList.toggle('middle__label_media_mobilenone');
// 	homeMob.classList.toggle('middle__label_media_mobilenone');
// 	profiMob.classList.toggle('middle__label_media_mobilenone');
// 	menuMob.classList.toggle('middle__label_media_mobilenone');
// });


// const headerAccountBtn = document.querySelector('.header__button-acc');
// const headerAccount = document.querySelector('.header__svg-login');
// const headerAccImgBtn = document.querySelector('.header__button-login');

// headerAccountBtn.addEventListener('click', () => {
// 	headerAccount.classList.toggle('header__button--no');
// 	headerAccImgBtn.classList.toggle('header__button--yes');
// });





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
