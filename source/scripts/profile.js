;(() => {
	"use strict";

	const profile = document.querySelector(".profile");
	const profileEdit = profile.querySelector(".profile__edit");
	const profileNickname = profile.querySelector(".profile__nickname");
	const profileInput = profile.querySelector(".profile__input");
	const profileBlock = document.querySelector(".profile");

	const editNickname = () => {
		if (!profileNickname.hidden) {
			profileNickname.hidden = true;
			profileInput.hidden = false;
			profileInput.value = profileNickname.textContent.trim();
			profileInput.focus();
		}
	};

	const saveNickname = (event) => {
		event.preventDefault();
	
		profileNickname.textContent = profileInput.value;
		profileNickname.hidden = false;
		profileInput.hidden = true;
	};

	profileEdit.addEventListener("click", editNickname);
	profileBlock.addEventListener("submit", saveNickname);
})();