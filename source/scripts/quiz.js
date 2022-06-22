;(() => {
	"use strict";

	const quizProgressBar = document.querySelector(".quiz__progress-bar");
	const quizBlocks = document.querySelectorAll(".quiz__block");
	const quizButtons = document.querySelectorAll(".quiz__main-button");
	const quizAnswer = document.querySelector(".quiz__answer");
	const quizAnswerTitle = quizAnswer.querySelector(".quiz__answer-title");
	const quizNext = document.querySelector(".quiz__next");
	const quizPercent = document.querySelector(".quiz__progress-status-value");

	quizBlocks.forEach((element, index, array) => {
		const quizStep = document.createElement("span");
		quizStep.classList.add("quiz__progress-bar-step");

		if (!index) {
			quizStep.classList.add("quiz__progress-bar-step_state_active");
		}

		quizProgressBar.appendChild(quizStep);
	});

	quizButtons.forEach(quizeButton => quizeButton.addEventListener("click", (event) => {
		const currentButton = event.currentTarget;
		const currentButtonValue = currentButton.getAttribute("data-quiz-answer");

		const currentQuizBlock = document.querySelector("[data-quiz-current]").getAttribute("data-quiz-answer");

		if (currentButtonValue === currentQuizBlock) {
			quizAnswer.classList.remove("quiz__answer_state_hidden");
			quizAnswer.classList.remove("quiz__answer_state_error");
			quizAnswerTitle.textContent = "Правильно";
			quizButtons.forEach(button => button.classList.add("quiz__main-button_state_hidden"));
			quizNext.classList.remove("quiz__next_state_hidden");
			quizNext.style.setProperty("--background", "#27ae60");
		} else {
			quizAnswer.classList.remove("quiz__answer_state_hidden");
			quizAnswer.classList.add("quiz__answer_state_error");
			quizAnswerTitle.textContent = "Не правильно";
			quizButtons.forEach(button => button.classList.add("quiz__main-button_state_hidden"));
			quizNext.classList.remove("quiz__next_state_hidden");
			quizNext.style.setProperty("--background", "#d92b4d");
		}
	}));

	quizNext.addEventListener("click", (event) => {
		const currentBlock = document.querySelector("[data-quiz-current]");
		const nextBlock = currentBlock.nextElementSibling;
		const progressBar = document.querySelectorAll(".quiz__progress-bar-step_state_active");
		const lastProgressBar = progressBar[progressBar.length - 1];
		const nextProgressBar = lastProgressBar.nextElementSibling;

		if (
			document.querySelectorAll(".quiz__progress-bar-step_state_active").length + 1 >
			document.querySelectorAll(".quiz__progress-bar-step").length
		) {
			console.log("Finished");
			return;
		}

		nextProgressBar.classList.add("quiz__progress-bar-step_state_active");
		const allProgressBar = document.querySelectorAll(".quiz__progress-bar-step");
		const progressPercent = document.querySelectorAll(".quiz__progress-bar-step_state_active").length /  allProgressBar.length;
		quizPercent.textContent = `${progressPercent * 100}%`;

		currentBlock.classList.add("quiz__block_state_hidden");
		currentBlock.removeAttribute("data-quiz-current");
		nextBlock.classList.remove("quiz__block_state_hidden");
		nextBlock.setAttribute("data-quiz-current", "");

		quizNext.classList.add("quiz__next_state_hidden");
		quizButtons.forEach(button => button.classList.remove("quiz__main-button_state_hidden"));
		quizAnswer.classList.add("quiz__answer_state_hidden");
	});
})();