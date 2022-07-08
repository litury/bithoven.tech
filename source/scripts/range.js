;(() => {
	"use strict";

	const nonLinearSlider = document.getElementById('nonlinear');
	const filterTime = document.querySelector(".filter__time");
	const timeStart = filterTime.querySelector("input[name='time_start']");
	const timeEnd = filterTime.querySelector("input[name='time_end']");

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

	const setRangeValue = (rangeValue) => {
		const range = rangeValue;
		const rangeStart = Math.round(range[0]);
		const rangeEnd = Math.round(range[range.length - 1]);

		timeStart.value = rangeStart;
		timeEnd.value = rangeEnd;
	};

	setRangeValue(nonLinearSlider.noUiSlider.get());

	nonLinearSlider.noUiSlider.on(
		"change",
		() => {
			setRangeValue(nonLinearSlider.noUiSlider.get());
		}
	);

	const params = new URLSearchParams(window.location.search);
	const URLRange = [];

	for (const param of params) {
		const paramKey = param[0];
		const paramValue = param[param.length - 1];

		if (paramKey === "time_start" || paramKey === "time_end") {
			URLRange.push(+paramValue);
		}
	}

	if (URLRange.length) {
		nonLinearSlider.noUiSlider.set(URLRange);
		setRangeValue(URLRange);
	}
})();