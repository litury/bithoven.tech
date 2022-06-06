;(() => {
	"use strict";

	const accordionButtons = document.querySelectorAll(".accordion_state_active .accordion__button");

	accordionButtons.forEach(accordionButton => accordionButton.addEventListener("click", (event) => {
		const currentButton = event.currentTarget;
		const accordion = currentButton.closest(".accordion");
		const accordionParagraphes = accordion.querySelectorAll(".accordion__paragraph");

		currentButton.classList.toggle("accordion__button_state_active");

		if (currentButton.classList.contains("accordion__button_state_active")) {
			accordionParagraphes.forEach(accordionParagraph => accordionParagraph.hidden = false);
		} else {
			accordionParagraphes.forEach((accordionParagraph, index) => {
				if (index) {
					accordionParagraph.hidden = true;
				}
			});
		}
	}));
})();