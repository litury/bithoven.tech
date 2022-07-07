;(() => {
	"use strict";

	const paginationLinks =
		document.querySelectorAll(".education__menu a");
	const lastPaginationLink =
		paginationLinks[paginationLinks.length - 1].textContent.trim();
	const prevPage =
		document.querySelectorAll(".education__menu-button_prev");
	const nextPage =
		document.querySelectorAll(".education__menu-button_next");

	function findGetParameter(parameterName) {
		let result = null,
				tmp = [];

		location.search
				.substr(1)
				.split("&")
				.forEach(function (item) {
					tmp = item.split("=");
					if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
				});
		return result;
	}

	if (findGetParameter("page") === "1" || !findGetParameter("page")) {
		prevPage.forEach(button => button.classList.add("education__menu-button_state_hidden"));
	}

	if (findGetParameter("page") === lastPaginationLink) {
		nextPage.forEach(button => button.classList.add("education__menu-button_state_hidden"));
	}

	function redirectPage(pageNumber) {
		const currentURL = new URL(location.href);
		const params = new URLSearchParams(currentURL.search);

		params.set("page", pageNumber);
		location.href = `education?${params.toString()}`;
	}

	prevPage.forEach(button => button.addEventListener("click", () => {
		let currentPageNumber = +findGetParameter("page");
		redirectPage(--currentPageNumber);
	}));

	nextPage.forEach(button => button.addEventListener("click", () => {
		if (!findGetParameter("page")) {
			redirectPage(2);
		} else {
			let currentPageNumber = +findGetParameter("page");
			redirectPage(++currentPageNumber);
		}
	}));

	paginationLinks.forEach(link => link.addEventListener("click", (event) => {
		event.preventDefault();

		const currentLink = event.currentTarget;
		const pageNumber = +currentLink.textContent.trim();
	
		redirectPage(pageNumber);
	}));
})();