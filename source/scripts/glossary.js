;(() => {
	"use strict";

	const glossary = document.querySelector(".glossary");
	const glossarySearchButton = glossary.querySelector(".glossary__search-button");
	const glossaryFilter = glossary.querySelector(".glossary__filter");

	const toggleFilter = (event) => {
		const currentButton = event.currentTarget;
		const a11yText = currentButton.querySelector(".visually-hidden");

		currentButton.classList.toggle("glossary__search-button_state_active");
		glossaryFilter.classList.toggle("glossary__filter_state_hidden");

		if (currentButton.classList.contains("glossary__search-button_state_active")) {
			a11yText.textContent = "Скрыть фильтр";
		} else {
			a11yText.textContent = "Показать фильтр";
		}
	};

	glossarySearchButton.addEventListener("click", toggleFilter);
})();