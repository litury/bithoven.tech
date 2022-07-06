;(() => {
	"use strict";

	const body = document.querySelector(".page__body");
	const mobileHeader = document.querySelector(".c-mobile-header");
	const mobileHeaderHeight = mobileHeader.offsetHeight;

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
	
	// const mobileSearch = document.querySelector(".c-mobile-search");
	// const mobileSearchInput = mobileSearch.querySelector(".c-mobile-search__input");
	// const mobileSearchClose = mobileSearch.querySelector(".c-mobile-search__close");

	// const toggleMobileSearch = () => {
	// 	mobileSearchInput.focus();

	// 	mobileSearchClose.addEventListener("click", () => {
	// 		document.querySelector(".c-menu__button_type_search").classList.remove("c-menu__button_state_active");
	// 		mobileSearch.classList.remove("c-mobile-search_state_active");
	// 	});
	// };

	// new toggleElement(
	// 	document.querySelector(".c-mobile-header__button_type_search"),
	// 	mobileSearch,
	// 	"c-mobile-search_state_active",
	// 	toggleMobileSearch,
	// ).init();

	// new toggleElement(
	// 	document.querySelector(".c-menu__button_type_search"),
	// 	mobileSearch,
	// 	"c-mobile-search_state_active",
	// 	toggleMobileSearch,
	// ).init();

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
  
  if (menuAuth) {
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
  }
	// language switcher
	// const languageButton = document.querySelector(".c-mobile-header__button_type_language");
	// const languageBlock = document.querySelector(".c-mobile-info[data-mobile-info='language']");
	const mobileInfoClose = document.querySelectorAll(".c-mobile-info__button");
	const mobileInfoLayout = document.querySelectorAll(".c-mobile-info__layout");

	mobileInfoLayout.forEach(layout => layout.addEventListener("click", (event) => {
		const currentLayout = event.currentTarget;
		const block = currentLayout.closest(".c-mobile-info");
		block.classList.remove("c-mobile-info_state_active");

		const pageNodes = document.querySelectorAll(".page__body > *");
		pageNodes.forEach(node => node.classList.remove("page__blur"));
	}));

	function mobileInfoToggle() {
		const pageNodes = document.querySelectorAll(".page__body > *");

		for (let index = 0; index < pageNodes.length; index++) {
			const node = pageNodes[index];

			if (
				node.tagName === "SCRIPT" ||
				node.classList.contains("c-mobile-info") ||
				node.classList.contains("c-menu")
			) {
				continue;
			} else {
				node.classList.toggle("page__blur");
			}
		}
	}

	mobileInfoClose.forEach(button => button.addEventListener("click", (event) => {
			const pageNodes = document.querySelectorAll(".page__body > *");
			const currentButton = event.currentTarget;
			const block = currentButton.closest(".c-mobile-info");

			pageNodes.forEach(node => node.classList.remove("page__blur"));

			block.classList.remove("c-mobile-info_state_active");
	}));

	// new toggleElement(
	// 	languageButton,
	// 	languageBlock,
	// 	"c-mobile-info_state_active",
	// 	mobileInfoToggle
	// ).init();

	// info
	new toggleElement(
		document.querySelector(".c-mobile-header__button_type_info"),
		document.querySelector(".c-mobile-info[data-mobile-info='info']"),
		"c-mobile-info_state_active",
		mobileInfoToggle
	).init();

	const mainHeader = document.querySelector(".c-main-header");
	const MAIN_HEADER_SPACE = 29;

	body.style.setProperty(
		"--main-header-height",
		`${mainHeader.offsetHeight + MAIN_HEADER_SPACE * 2}px`
	);
})();