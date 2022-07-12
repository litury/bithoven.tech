;(() => {
	"use strict";

	const queryString = location.search;
	const removeTags = () => localStorage.removeItem("tags");

	if (!queryString) {
		removeTags();
	}
})();
