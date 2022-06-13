;(() => {
	"use strict";

	const glossary = document.querySelector(".glossary");
	const glossarySearch = glossary.querySelector(".glossary__search");
	const glossaryLetters = glossary.querySelectorAll(".glossary__category-letter");
	const glossarySearchButton = glossary.querySelector(".glossary__search-button");
	const glossaryFilter = glossary.querySelector(".glossary__filter");

	const setLetterSpace = (letter) => {
		letter.style.setProperty(
				"--search-height",
				`${glossarySearch.offsetHeight}px`
			);
	};

	glossaryLetters.forEach(letter => setLetterSpace(letter));
	window.addEventListener("resize", () => {
		glossaryLetters.forEach(letter => setLetterSpace(letter));
	});


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