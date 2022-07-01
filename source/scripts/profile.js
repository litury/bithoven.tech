;(() => {
	"use strict";

	const profile = document.querySelector(".profile");
	const profileEdit = profile.querySelector(".profile__edit");
	const profileNickname = profile.querySelector(".profile__nickname");
	const profileInput = profile.querySelector(".profile__input");
	const profileBlock = document.querySelector(".profile");
	const profileFile = document.querySelector(".profile__avatar-container input");

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

	const submitForm = () => profile.submit();

	profileEdit.addEventListener("click", editNickname);
	profileBlock.addEventListener("submit", saveNickname);
	if (profileFile !== null) {
		profileFile.addEventListener("change", submitForm);
	}
	profileInput.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			submitForm();
		}
	});
})();