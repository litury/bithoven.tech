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

	// close block
	const closeBlock = (block, element) => element.addEventListener("click", () => {
		document.querySelectorAll(".c-menu__button").forEach(button => button.classList.remove("c-menu__button_state_active"));
		block.classList.remove(block.getAttribute("data-menu-class"))
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
			document.querySelector(".c-menu__button_type_search").classList.remove("c-menu__button_state_active");
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

	const toggleMobileMenu = (className) => {
		hideBodyScroll();
		closeBlock(
			className,
			document.querySelector(".c-mobile-header-menu__close")
		);
	};

	new toggleElement(
		document.querySelector(".c-menu__button_type_menu"),
		document.querySelector(".c-mobile-header-menu"),
		"c-mobile-header-menu_state_active",
		toggleMobileMenu
	).init();

	// auth
	const menuAuth = document.querySelector(".c-menu__button_type_auth");
	const blockAuth = document.querySelector(".c-mobile-header-auth");
	const blockAuthClose = blockAuth.querySelector(".c-mobile-header-auth__close");
	const toggleAuth = (element) => {
		closeBlock(element, blockAuthClose);
	};

	new toggleElement(
		menuAuth,
		blockAuth,
		"c-mobile-header-auth_state_active",
		toggleAuth,
	).init();
})();