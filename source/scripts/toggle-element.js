class toggleElement {
	constructor(element, toggleElement, className, callback) {
		this.element = element;
		this.toggleElement = toggleElement;
		this.className = className;
		this.callback = callback;
	}

	init() {
		this.element.addEventListener("click", () => {
			this.toggleElement.classList.toggle(this.className);

			this.callback();
		});
	}
}