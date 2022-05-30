// //glossary строка поиска с алфавитом
// const navBtn = document.querySelector('.glossary__nav-button')
// const alphabet = document.querySelector('.glossary__alphabet')
// const arrow = document.querySelector('.glossary__nav-button')




// navBtn.addEventListener('click', () => {
// 	alphabet.classList.toggle('glossary__alphabet--yes');
// 	arrow.classList.toggle('glossary__nav-button--rot');
// });


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
const authmBtn = document.querySelector('.header__button_type_profile')
const authmBlock = document.querySelector('.header__aut-none')
const authBtnOf = document.querySelector('.auth_button-onof');
const searchInput = document.querySelector('.form__input');
const headBtnMobMenu = document.querySelector('.header__button_type_menu');
const headBtnMobOF = document.querySelector('.header__button-onof');
const headMobMenu = document.querySelector('.header-mobile');
const headMobMenuBlock = document.querySelector('.header__menu-wrap');
const headerAccountBtn = document.querySelector('.header__button-acc');
const headerAccount = document.querySelector('.header__svg-login');
const headerAccImgBtn = document.querySelector('.header__button-login');
const menuButton = document.querySelector('.header__button-nav');
const menu = document.querySelector('.header__themes--noactive');



//показать авторизацию
authmBtn.addEventListener('click', () => {
	authmBlock.classList.add('header__aut-yes');
	headerBlur.classList.add('header__button--no');
});

//скрыть авторизацию
authBtnOf.addEventListener('click', () => {
	authmBlock.classList.remove('header__aut-yes');
	headerBlur.classList.remove('header__button--no');
});

//показать нижний поиск
searchMobBtn.addEventListener('click', () => {
	formNav.classList.add('header__button--yes');
	searchInput.focus();
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
headBtnMobMenu.addEventListener('click', () => {
	headMobMenu.classList.toggle('header__button--no');
	headMobMenuBlock.classList.toggle('header__button--yes');
});

headBtnMobOF.addEventListener('click', () => {
	headMobMenu.classList.toggle('header__button--no');
	headMobMenuBlock.classList.toggle('header__button--yes');
});

// подменю в мобильном меню
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

//авторизация
headerAccountBtn.addEventListener('click', () => {
	headerAccount.classList.toggle('header__button--no');
	headerAccImgBtn.classList.toggle('header__button--yes');
});

