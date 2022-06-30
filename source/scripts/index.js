;(() => {
	"use strict";

	const studyButtons = document.querySelectorAll(".study .main-card__link-btn");

	studyButtons.forEach(button => button.addEventListener("click", (event) => {
		const currentButton = event.currentTarget;
		const parent = currentButton.closest(".main-card");
		const text = parent.querySelector(".main-card__text");
		text.classList.toggle("main-card__text_type_short");

		if (!text.classList.contains("main-card__text_type_short")) {
			currentButton.textContent = "Скрыть определение";
		} else {
			currentButton.textContent = "Показать полностью";
		}
	}));
})();