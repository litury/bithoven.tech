const disBtnOf = document.querySelector('.discus__button-off')
const disBlock = document.querySelector('.discus')
const disBtnNavDesc = document.querySelector('.content__button-svg--dis')


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


disBtnNav.addEventListener('click', () => {
	disMenuCont.classList.toggle('content__menu--yes');
});


