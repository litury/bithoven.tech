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

	// mobile search
	
	const mobileSearch = document.querySelector(".c-mobile-search");
	const mobileSearchInput = mobileSearch.querySelector(".c-mobile-search__input");
	const mobileSearchClose = mobileSearch.querySelector(".c-mobile-search__close");

	new toggleElement(
		document.querySelector(".c-mobile-header__button_type_search"),
		mobileSearch,
		"c-mobile-search_state_active",
		() => {
			mobileSearchInput.focus();

			mobileSearchClose.addEventListener("click", () => {
				mobileSearch.classList.remove("c-mobile-search_state_active");
			});
		}
	).init();
})();