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

	// hide scroll

	const hideBodyScroll = () => body.classList.toggle("page__body_state_no-scroll");

	// mobile search
	
	const mobileSearch = document.querySelector(".c-mobile-search");
	const mobileSearchInput = mobileSearch.querySelector(".c-mobile-search__input");
	const mobileSearchClose = mobileSearch.querySelector(".c-mobile-search__close");

	const toggleMobileSearch = () => {
		mobileSearchInput.focus();

		mobileSearchClose.addEventListener("click", () => {
			mobileSearch.classList.remove("c-mobile-search_state_active");
		});
	};

	new toggleElement(
		document.querySelector(".c-mobile-header__button_type_search"),
		mobileSearch,
		"c-mobile-search_state_active",
		toggleMobileSearch,
	).init();

	new toggleElement(
		document.querySelector(".c-menu__button_type_search"),
		mobileSearch,
		"c-mobile-search_state_active",
		toggleMobileSearch,
	).init();

	// mobile menu

	const toggleMobileMenu = (event) => {
		hideBodyScroll();

		document.querySelector(".c-menu__button_type_menu").classList.toggle("c-menu__button_state_active");

		document.querySelector(".c-mobile-header-menu__close").addEventListener("click", () => {

			hideBodyScroll();

			document.querySelector(".c-mobile-header-menu").classList.remove("c-mobile-header-menu_state_active");
		});
	};

	new toggleElement(
		document.querySelector(".c-menu__button_type_menu"),
		document.querySelector(".c-mobile-header-menu"),
		"c-mobile-header-menu_state_active",
		toggleMobileMenu
	).init();
})();