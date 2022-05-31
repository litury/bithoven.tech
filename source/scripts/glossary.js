const navBtn = document.querySelector('.glossary__nav-button');
const alphabet = document.querySelector('.glossary__alphabet');
const arrow = document.querySelector('.glossary__nav-button');

navBtn.addEventListener('click', () => {
	alphabet.classList.toggle('glossary__alphabet--yes');
	arrow.classList.toggle('glossary__nav-button--rot');
});
