var rangeSlider = document.getElementById('range-slider');

noUiSlider.create(rangeSlider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});
