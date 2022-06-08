class toggleElement {
	constructor(element, toggleElement, className, callback) {
		this.element = element;
		this.toggleElement = toggleElement;
		this.className = className;
		this.callback = callback;
		this.menuButtons = document.querySelectorAll(".c-menu__button");
		this.MENU_ACTIVE_CLASS_NAME = "c-menu__button_state_active";
	}

	init() {
		this.toggleElement.setAttribute("data-menu-block", "");
		this.toggleElement.setAttribute("data-menu-class", this.className);

		this.element.addEventListener("click", () => {
			document.querySelectorAll("[data-menu-block]").forEach(
				block => block.classList.remove(block.getAttribute("data-menu-class"))
			);

			this.menuButtons.forEach(button => button.classList.remove(this.MENU_ACTIVE_CLASS_NAME));
			this.toggleElement.classList.toggle(this.className);
			this.element.classList.toggle("c-menu__button_state_active");
			this.callback(this.toggleElement);
		});
	}
}