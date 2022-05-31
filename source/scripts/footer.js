const footBtnDisc = document.querySelector('.footer__button--disc')
const footBtnProd = document.querySelector('.footer__button--prod')
const footBtnComp = document.querySelector('.footer__button--comp')


const footMenuDisc = document.querySelector('.footer__menu--disc')
const footMenuProd = document.querySelector('.footer__menu--prod')
const footMenuComp = document.querySelector('.footer__menu--comp')


footBtnDisc.addEventListener('click', () => {
	footMenuDisc.classList.toggle('footer__menu--yes');
});

footBtnProd.addEventListener('click', () => {
	footMenuProd.classList.toggle('footer__menu--yes');
});

footBtnComp.addEventListener('click', () => {
	footMenuComp.classList.toggle('footer__menu--yes');
});
