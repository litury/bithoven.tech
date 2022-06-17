;(() => {
	"use strict";

	const filter = document.querySelector(".filter");
	const filterSortButtons = document.querySelectorAll(".filter__button");
	const filterButtonHide = document.querySelector(".filter__button-hide");
	const filterTopInner = document.querySelector(".filter__top-inner");
	const filterLevelInner = document.querySelector(".filter__level-inner");

	filterButtonHide.addEventListener("click", () => {
		filterButtonHide.classList.toggle("filter__button-hide_state_active");
		filterTopInner.hidden = !filterTopInner.hidden;
		filterLevelInner.hidden = !filterLevelInner.hidden;
	});

	filterSortButtons.forEach(filterSortButtons => filterSortButtons.addEventListener("click", () => {
		filterSortButtons.classList.toggle("filter__button_state_active");
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