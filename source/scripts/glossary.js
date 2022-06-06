;(() => {
	"use strict";

	const glossary = document.querySelector(".glossary");
	const glossarySearchButton = glossary.querySelector(".glossary__search-button");
	const glossaryFilter = glossary.querySelector(".glossary__filter");

	const toggleFilter = (event) => {
		const currentButton = event.currentTarget;

		currentButton.classList.toggle("glossary__search-button_state_active");
		glossaryFilter.classList.toggle("glossary__filter_state_hidden");
	};

	glossarySearchButton.addEventListener("click", toggleFilter);
})();