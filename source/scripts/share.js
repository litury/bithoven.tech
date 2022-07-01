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

	const setLink = (element, link) =>
		element.setAttribute("href", `${link}url=${currentLink}`);

	setLink(shareVK, "https://vk.com/share.php?");
	setLink(shareTelegram, "https://telegram.me/share/url?");
	setLink(shareTwitter, "https://www.twitter.com/share?");
	setLink(shareLinkedin, "https://www.linkedin.com/shareArticle?mini=true&");
})();