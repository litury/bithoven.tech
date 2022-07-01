;(() => {
	"use strict";

	const filter = document.querySelector(".filter");
	const filterSortButtons = document.querySelectorAll(".filter__button");
	const filterButtonHide = document.querySelector(".filter__button-hide");
	const filterTopInner = document.querySelector(".filter__top-inner");
	const filterLevelInner = document.querySelector(".filter__level-inner");
	const tags = document.querySelectorAll(".tag__input");
	const levels = document.querySelectorAll(".filter__level-wrap .tag__input");
	const categories = document.querySelectorAll(".filter__top [name='category']");

	const params = new URLSearchParams(window.location.search);

	const checkGETParams = (elements, getValue) => {
		for (const param of params) {
			const paramKey = param[0];
			const paramValue = param[param.length - 1];

			if (paramKey === getValue) {
				elements.forEach(element => element.checked = false);

				elements.forEach(element => {
					if (element.value === paramValue) {
						element.checked = true;
					}
				})
			}
		}
	};

	checkGETParams(tags, "tag");
	checkGETParams(levels, "level");
	checkGETParams(categories, "category");

	filterButtonHide.addEventListener("click", () => {
		filterButtonHide.classList.toggle("filter__button-hide_state_active");
		filterTopInner.hidden = !filterTopInner.hidden;
		filterLevelInner.hidden = !filterLevelInner.hidden;
	});

	filterSortButtons.forEach(button => button.addEventListener("click", () => {
		filterSortButtons.forEach(button => button.classList.remove("filter__button_state_active"));
		button.classList.add("filter__button_state_active");
	}));

	if (localStorage.getItem("tags")) {
		const currentTags = JSON.parse(localStorage.getItem("tags"));
		const tags = document.querySelectorAll(".tag__input");

		tags.forEach(tag => {
			currentTags.forEach(currentTag => {
				if (tag.getAttribute("value") === currentTag) {
					tag.checked = true;
				}
			})
		})
	}

	filter.addEventListener("submit", (event) => {
		const tags = document.querySelectorAll(".tag__input:checked");
		const tagsValue = [];

		tags.forEach(tag => tagsValue.push(tag.getAttribute("value")));
		localStorage.setItem("tags", JSON.stringify(tagsValue));
	});
})();