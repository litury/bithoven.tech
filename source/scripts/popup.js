class Popup {
	constructor(title, text) {
		this.title = title;
		this.text = text;

		this._popup = document.querySelector(".popup");
		this._popupOverlay = this._popup.querySelector(".popup__overlay");
		this._popupBody = this._popup.querySelector(".popup__body");
		this._popupTitle = this._popup.querySelector(".popup__title");
		this._popupText = this._popup.querySelector(".popup__text");
		this._popupClose = this._popup.querySelector(".popup__close");

		this._togglePopup = this._togglePopup.bind(this);
	}

	_togglePopup() {
		this._popupOverlay.classList.toggle("popup__overlay--visible");
		this._popupBody.classList.toggle("popup__body--visible");
	}

	init() {
		this._popupTitle.textContent = this.title;
		this._popupText.textContent = this.text;

		this._togglePopup();

		this._popupOverlay.addEventListener("click", this._togglePopup);
		this._popupClose.addEventListener("click", this._togglePopup);
	}
}