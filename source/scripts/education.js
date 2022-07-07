;(() => {
	"use strict";

	const paginationLinks = document.querySelectorAll(".education__menu a");

	paginationLinks.forEach(link => link.addEventListener("click", (event) => {
		event.preventDefault();

		const currentLink = event.currentTarget;
		const pageNumber = +currentLink.textContent.trim();
	
		const currentURL = new URL(location.href);
		const params = new URLSearchParams(currentURL.search);

		params.set("page", pageNumber);
		location.href = `education?${params.toString()}`;
	}));
})();