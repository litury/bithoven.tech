;(() => {
	"use strict";

	const body = document.querySelector(".page__body");
	const mobileHeader = document.querySelector(".c-mobile-header");
	const mobileHeaderHeight = mobileHeader.offsetHeight;

	body.style.setProperty(
		"--header-height",
		`${mobileHeaderHeight}px`
	);

	window.addEventListener("scroll", () => {
		if (window.scrollY > (mobileHeaderHeight / 3)) {
			mobileHeader.classList.add("c-mobile-header_state_scroll");
		} else {
			mobileHeader.classList.remove("c-mobile-header_state_scroll");
		}
	});
})();