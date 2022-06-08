;(() => {
	"use strict";

	document.querySelector(".page__body").style.setProperty(
		"--mobile-menu",
		`${document.querySelector(".c-menu").offsetHeight}px`
	);

	const mobileMenuButton = document.querySelector(".c-mobile-header-menu__button");
	const mobileMenuThemes = document.querySelector(".c-mobile-header-menu__themes");

	mobileMenuButton.addEventListener("click", (event) => {
		const currentButton = event.currentTarget;

		currentButton.classList.toggle("c-mobile-header-menu__button_state_active");
		mobileMenuThemes.classList.toggle("c-mobile-header-menu__themes_state_active");
	});
})();