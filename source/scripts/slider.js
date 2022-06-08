const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: false,
	slidesPerView: 1.25,
	direction: 'horizontal',
	spaceBetween: 12,

	breakpoints: {
		// when window width is >= 320px
		1200: {
			slidesPerView: 1
	}},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});




