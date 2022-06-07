var nonLinearSlider = document.getElementById('nonlinear');

noUiSlider.create(nonLinearSlider, {
	connect: true,
	snap: true,
	behaviour: 'tap',
	start: [1, 100],
	range: {
		'min': 1,
		'10%': 3,
		'16,67%': 5,
		'33,33%': 10,
		'50%': 15,
		'66,67%': 20,
		'max': 30
	}
});


var snapValues = [
	document.getElementById('slider-snap-value-lower'),
	document.getElementById('slider-snap-value-upper')
];

snapSlider.noUiSlider.on('update', function (values, handle) {
	snapValues[handle].innerHTML = values[handle];
});
