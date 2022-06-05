const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 1.25,
	direction: 'horizontal',


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
