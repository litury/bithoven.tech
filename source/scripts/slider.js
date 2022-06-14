const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: false,
	slidesPerView: 1.1,
	direction: 'horizontal',
	spaceBetween: 12,

	breakpoints: {
		1200: {
			slidesPerView: 1
	}},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});




