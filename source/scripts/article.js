;(() => {
	"use strict";

	const disBtnOf = document.querySelector('.discus__button-off')
	const disBlock = document.querySelector('.discus')
	const disBtnNavDesc = document.querySelector('.content__button-svg--dis');
	const buttonReply = document.querySelector(".content__button-reply");
	const contentSuccess = document.querySelector(".content__success");
	const contentColumn = document.querySelector(".content__column");
	const contentNav = document.querySelector(".content__nav");
	const disBtnNav = document.querySelector('.content__nav-button');

	contentColumn.style.setProperty(
		"--content-nav-height",
		`${contentNav.offsetHeight}px`
	);

	window.addEventListener("resize", () => {
		contentColumn.style.setProperty(
			"--content-nav-height",
			`${contentNav.offsetHeight}px`
		);
	});

	disBtnNav.addEventListener("click", () => {
		setTimeout(() => {
			contentColumn.style.setProperty(
				"--content-nav-height",
				`${document.querySelector(".content__nav").offsetHeight}px`
			);
		}, 10);
	});
	

	function copyToClipboard(text) {
		if (window.clipboardData && window.clipboardData.setData) {
				// Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
				return window.clipboardData.setData("Text", text);

		}
		else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
				var textarea = document.createElement("textarea");
				textarea.textContent = text;
				textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
				document.body.appendChild(textarea);
				textarea.select();
				try {
						return document.execCommand("copy");  // Security exception may be thrown by some browsers.
				}
				catch (ex) {
						console.warn("Copy to clipboard failed.", ex);
						return prompt("Copy to clipboard: Ctrl+C, Enter", text);
				}
				finally {
						document.body.removeChild(textarea);
				}
		}
}

	buttonReply.addEventListener("click", () => {
		copyToClipboard(window.location.href);
		contentSuccess.classList.add("content__success_state_active");
		setTimeout(() => {
			contentSuccess.classList.remove("content__success_state_active");
		}, 1000);
	});


	const disBtnTop = document.querySelector('.discus__nav-button')
	const disMenuBlock = document.querySelector('.discus__menu')


	disBtnTop.addEventListener('click', () => {
		disMenuBlock.classList.toggle('discus__menu--yes');
	});


	
	const disMenuCont = document.querySelector('.content__menu')
	const disMenuSoc = document.querySelector('.content__social')


	disBtnNav.addEventListener('click', () => {
		disMenuCont.classList.toggle('content__menu--yes');
		disMenuSoc.classList.toggle('content__social--active');
	});
})();