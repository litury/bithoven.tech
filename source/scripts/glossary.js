;(() => {
	"use strict";

	const glossary = document.querySelector(".glossary");
	const glossarySearch = glossary.querySelector(".glossary__search");
	const glossaryLetters = glossary.querySelectorAll(".glossary__category-letter");
	const glossarySearchButton = glossary.querySelector(".glossary__search-button");
	const glossaryFilter = glossary.querySelector(".glossary__filter");
	const glossaryFilterLinks = glossaryFilter.querySelectorAll(".glossary__filter-link");
	const GLOSARY_FILTER_ACTIVE_CLASS_NAME = "glossary__filter-link_state_active";
	const glossaryCategories = document.querySelectorAll(".glossary__category");

	if (window.matchMedia("(min-width: 768px)").matches) {
		glossaryFilterLinks.forEach(link => link.addEventListener("click", (event) => {
			const currentLink = event.currentTarget;
			const glossarySearch = currentLink.closest(".glossary__search");
			const glossarySearchHeight = glossarySearch.offsetHeight;

			glossaryCategories.forEach(category => category.style.setProperty(
				"--glossary-search-height",
				`${glossarySearchHeight}px`
			));
		}));
	}

	window.addEventListener('load', () => {
		const categories = document.querySelectorAll(".glossary__category");
		
		document.addEventListener('scroll', (e) => {
			categories.forEach(ha => {
				const rect = ha.getBoundingClientRect();
				if(rect.top > 0 && rect.top < 150) {
					const location = window.location.toString().split('#')[0];
					const glossaryCategoryLetters = document.querySelectorAll(".glossary__category-letter");

					glossaryFilterLinks.forEach(link => {
						if (link.getAttribute("href") === `#${ha.getAttribute("id")}`) {
							link.classList.add(GLOSARY_FILTER_ACTIVE_CLASS_NAME);
						} else {
							link.classList.remove(GLOSARY_FILTER_ACTIVE_CLASS_NAME);
						}
					});
					glossaryCategoryLetters.forEach(letter => letter.classList.remove("glossary__category-letter_state_active"));
					ha.querySelector(".glossary__category-letter").classList.add("glossary__category-letter_state_active");
					history.replaceState(null, null, location + '#' + ha.getAttribute("id"));
				}
			});
		});
	});



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

	glossaryFilterLinks.forEach(link => link.addEventListener("click", (event) => {
		const currentLink = event.currentTarget;
		const glossaryCategoryLetters = document.querySelectorAll(".glossary__category-letter");
		glossaryCategoryLetters.forEach(letter => letter.classList.remove("glossary__category-letter_state_active"));
		document.querySelector(`${currentLink.getAttribute("href")} .glossary__category-letter`).classList.add("glossary__category-letter_state_active");

		glossaryFilterLinks.forEach(link => link.classList.remove(GLOSARY_FILTER_ACTIVE_CLASS_NAME));

		currentLink.classList.add(GLOSARY_FILTER_ACTIVE_CLASS_NAME);
	}));

	const toggleFilter = (event) => {
		const currentButton = event.currentTarget;
		const a11yText = currentButton.querySelector(".visually-hidden");

		currentButton.classList.toggle("glossary__search-button_state_active");
		glossaryFilter.classList.toggle("glossary__filter_state_hidden");

		if (!glossaryFilter.classList.contains("glossary__filter_state_hidden")) {
			const glossarySearch = currentButton.closest(".glossary__search");
			const glossarySearchHeight = glossarySearch.offsetHeight;

			glossaryCategories.forEach(category => category.style.setProperty(
				"--glossary-search-height",
				`${glossarySearchHeight}px`
			));
		}

		if (currentButton.classList.contains("glossary__search-button_state_active")) {
			a11yText.textContent = "???????????? ????????????";
		} else {
			a11yText.textContent = "???????????????? ????????????";
		}
	};

	glossarySearchButton.addEventListener("click", toggleFilter);
})();