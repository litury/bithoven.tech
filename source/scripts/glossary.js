const navBtn = document.querySelector('.glossary__nav-button');
const alphabet = document.querySelector('.glossary__alphabet');
const arrow = document.querySelector('.glossary__nav-button');

navBtn.addEventListener('click', () => {
	alphabet.classList.toggle('glossary__alphabet--yes');
	arrow.classList.toggle('glossary__nav-button--rot');
});








const headers = document.querySelectorAll(".glossary__pretitle-wrap");

headers.forEach(function (item) {
	item.addEventListener("click", headerClick);
});

function headerClick() {
	this.nextElementSibling.classList.toggle("glossary__text--yes");
	this.previousElementSibling.classList.toggle("glossary__vector--rotate");
}
