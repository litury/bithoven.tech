class ShowMoreTags{
	constructor(elements, count) {
		this.elements = [].slice.call(document.querySelectorAll(elements));
		this.count = count;
		this.button = null;

		this.getLength = this.getLength.bind(this);
		this.initButton = this.initButton.bind(this);
		this.showTags = this.showTags.bind(this);
		this.getParentNode = this.getParentNode.bind(this);
	}

	getLength(elements) {
		return elements.length;
	}

	getParentNode() {
		const parentNode = this.elements[0].parentNode;
		return parentNode;
	}

	showTags() {
		const hiddenTags = [].slice.call(this.getParentNode().querySelectorAll(".tag_state_hidden"));

		if (hiddenTags.length === 1) {
			hiddenTags.forEach(tag => tag.classList.remove("tag_state_hidden"));
			this.button.remove();
		}

		if (hiddenTags.length < this.count) {
			hiddenTags.forEach(tag => tag.classList.remove("tag_state_hidden"));
			this.button.remove();
		}

		if (hiddenTags.length >= this.count) {
			hiddenTags.splice(this.count);

			hiddenTags.forEach(tag => tag.classList.remove("tag_state_hidden"));
		}
	}

	initButton(element) {
		this.button = document.createElement("button");
		this.button.textContent = `Ещё +${this.count}`;
		this.button.classList.add("tag");
		this.button.classList.add("tag__box");
		this.button.setAttribute("type", "button");

		this.button.addEventListener("click", this.showTags);
		element.appendChild(this.button);
	}

	init() {
		if (!this.getLength(this.elements)) {
			return;
		}

		if (this.getLength(this.elements) > this.count) {
			this.elements.splice(0, this.count);
			this.elements.forEach(tag => tag.classList.add("tag_state_hidden"));
			
			const parentNode = this.getParentNode();
			this.initButton(parentNode);
		}
	}
}