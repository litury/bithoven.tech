;(() => {
	"use strict";

	const currentLink = location.href;
	const shareVK =
		document.querySelector(".content__share_social_vk");
	const shareTelegram =
		document.querySelector(".content__share_social_telegram");
	const shareTwitter =
		document.querySelector(".content__share_social_twitter");
	const shareLinkedin =
		document.querySelector(".content__share_social_linkedin");
	const quizNext =
		document.querySelector(".quiz__next");

	const parseLS = key => JSON.parse(localStorage.getItem(key));


	const setLink = (element, link, text) =>
		element.setAttribute("href", `${link}?${text}&url=${currentLink}`);

	quizNext.addEventListener("click", () => {
		if (
			document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step_state_active").length + 1 ===
			document.querySelectorAll(".page__quiz-card_type_primary .quiz__progress-bar-step").length
		) {
			const wikiSteps = parseLS("steps");
			const wikiCorrectAnswers = parseLS("correct-answer");
			const socialText = `Я прошел викторину на ${wikiCorrectAnswers}/${wikiSteps}.`;

			setLink(
				shareVK,
				"https://vk.com/share.php",
				`text=${socialText}`
			);
			
			setLink(
				shareTelegram,
				"https://telegram.me/share/url",
				`text=${socialText}`
			);

			setLink(
				shareTwitter,
				"https://www.twitter.com/share",
				`text=${socialText}`
			);

			setLink(
				shareLinkedin,
				"https://www.linkedin.com/shareArticle?mini=true&",
				`summary==${socialText}`
			);
		}
	});
})();