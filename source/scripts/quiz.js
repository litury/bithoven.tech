;(() => {
	"use strict";

	const quizBlock = document.querySelector(".page__quiz-card_type_primary");
	const quizAuth = document.querySelector(".quiz__auth");
	const quizProgressBar = document.querySelector(".page__quiz-card_type_primary .quiz__progress-bar");
	const quizBlocks = document.querySelectorAll(".page__quiz-card_type_primary .quiz__block");
	const quizButtons = document.querySelectorAll(".page__quiz-card_type_primary .quiz__main-button");
	const quizAnswer = document.querySelector(".page__quiz-card_type_primary .quiz__answer");
	let quizAnswerTitle = null;
	let quizAnswerParagraph  = null;

	if (quizAnswer) {
		quizAnswerTitle = quizAnswer.querySelector(".page__quiz-card_type_primary .quiz__answer-title");
		quizAnswerParagraph = quizAnswer.querySelector(".page__quiz-card_type_primary .quiz__answer-paragraph");
	}

	const quizNext = document.querySelector(".page__quiz-card_type_primary .quiz__next");
	const quizPercent = document.querySelector(".page__quiz-card_type_primary .quiz__progress-status-value");
	
	const quizFinish = document.querySelector(".quiz_type_finish");
	const quizRestart = document.querySelector(".quiz__restart");
	const quizReply = document.querySelector(".quiz__result-reply");
	const quizCatalogMainButton = document.querySelector(".quiz__catalog-main-button");

	localStorage.setItem("correct-answer", JSON.stringify(0));

	if (quizBlocks) {
		quizBlocks.forEach((element, index, array) => {
			const quizStep = document.createElement("span");
			quizStep.classList.add("quiz__progress-bar-step");

			quizProgressBar.appendChild(quizStep);
		});
	}

	if (quizAuth) {
		quizAuth.addEventListener("click", () => {
			localStorage.setItem("wiki-auth", JSON.stringify(location.href));
		});
	}

	if (quizCatalogMainButton) {
		quizCatalogMainButton.addEventListener("click", (event) => {
			const currentButton = event.currentTarget;
			const parent = currentButton.closest(".quiz");
			quizBlock.hidden = false;
			parent.hidden = true;
		});
	}

	if (quizButtons) {
		quizButtons.forEach(quizeButton => quizeButton.addEventListener("click", (event) => {
			const currentButton = event.currentTarget;
			const currentButtonValue = currentButton.getAttribute("data-quiz-answer");

			const currentQuizBlock = document.querySelector(".page__quiz-card_type_primary [data-quiz-current]").getAttribute("data-quiz-answer");

			if (currentButtonValue === currentQuizBlock) {
				quizAnswer.classList.remove("quiz__answer_state_hidden");
				quizAnswer.classList.remove("quiz__answer_state_error");
				quizAnswerTitle.textContent = "Правильно";
				quizAnswerParagraph.textContent = document.querySelector(".page__quiz-card_type_primary [data-quiz-current]").getAttribute("data-quiz-answer-paragraph");
				quizButtons.forEach(button => button.classList.add("quiz__main-button_state_hidden"));
				quizNext.classList.remove("quiz__next_state_hidden");
				quizNext.style.setProperty("--background", "#27ae60");
				let correctAnswer = JSON.parse(localStorage.getItem("correct-answer"));
				correctAnswer++;
				localStorage.setItem("correct-answer", JSON.parse(correctAnswer));
			} else {
				quizAnswer.classList.remove("quiz__answer_state_hidden");
				quizAnswer.classList.add("quiz__answer_state_error");
				quizAnswerParagraph.textContent = document.querySelector(".page__quiz-card_type_primary [data-quiz-current]").getAttribute("data-quiz-answer-paragraph");
				quizAnswerTitle.textContent = "Не правильно";
				quizButtons.forEach(button => button.classList.add("quiz__main-button_state_hidden"));
				quizNext.classList.remove("quiz__next_state_hidden");
				quizNext.style.setProperty("--background", "#d92b4d");
			}
		}));
	}

	if (quizNext) {
	quizNext.addEventListener("click", (event) => {
		const currentBlock = document.querySelector(".page__quiz-card_type_primary [data-quiz-current]");
		const nextBlock = currentBlock.nextElementSibling;
		const progressBar = document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step_state_active");
		let lastProgressBar = null;
		let nextProgressBar = null;

		if (progressBar.length) {
			lastProgressBar = progressBar[progressBar.length - 1];
			nextProgressBar = lastProgressBar.nextElementSibling;
		} else {
			lastProgressBar = document.querySelector(".page__quiz-card_type_primary .quiz__progress-bar-step");
			nextProgressBar = lastProgressBar;
		}

		if (
			document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step_state_active").length + 1 ===
			document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step").length
		) {
			quizBlock.classList.add("page__quiz-card_state_hidden");
			quizFinish.classList.remove("page__quiz-card_state_hidden");
			localStorage.setItem("steps", JSON.stringify(document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step").length));
			document.querySelector(".quiz__result-text-count").textContent = JSON.parse(localStorage.getItem("steps"));
			document.querySelector(".quiz__result-text-correct").textContent = JSON.parse(localStorage.getItem("correct-answer"));
			const progressFinishBar = document.querySelector(".quiz_type_finish .quiz__progress-bar");

			quizBlocks.forEach((element, index, array) => {
				const quizStep = document.createElement("span");
				quizStep.classList.add("quiz__progress-bar-step");
				quizStep.classList.add("quiz__progress-bar-step_state_active");

				progressFinishBar.appendChild(quizStep);
			});

			const quizPercent = (JSON.parse(localStorage.getItem("correct-answer")) /  JSON.parse(localStorage.getItem("steps"))) * 100;

			document.querySelector(".quiz__result-status").textContent = `${Math.round(quizPercent)}%`;
			document.querySelector(".quiz__result-circle-path").style.setProperty("--percent", quizPercent);

			return;
		}

		nextProgressBar.classList.add("quiz__progress-bar-step_state_active");
		const allProgressBar = document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step");
		const progressPercent = document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step_state_active").length /  allProgressBar.length;
		quizPercent.textContent = `${Math.round(progressPercent * 100)}%`;

		currentBlock.classList.add("quiz__block_state_hidden");
		currentBlock.removeAttribute("data-quiz-current");
		nextBlock.classList.remove("quiz__block_state_hidden");
		nextBlock.setAttribute("data-quiz-current", "");

		quizNext.classList.add("quiz__next_state_hidden");
		quizButtons.forEach(button => button.classList.remove("quiz__main-button_state_hidden"));
		quizAnswer.classList.add("quiz__answer_state_hidden");
	});
	}

	if (quizRestart) {
		quizRestart.addEventListener("click", () => {
			location.reload();
		});
	}
	
	if (quizReply) {
		quizReply.addEventListener("click", () => {
			navigator.clipboard.writeText(window.location.href);
			const quizSuccess = document.querySelector(".quiz__success");
			quizSuccess.classList.add("quiz__success_state_active");

			setTimeout(() => {
				quizSuccess.classList.remove("quiz__succes_state_active");
			}, 1000);
		});
	}
})();