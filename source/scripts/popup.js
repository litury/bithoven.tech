;
(() => {
	"use strict";
	// var modal = document.getElementById('myModal');


	// var btn = document.getElementById("myBtn");


	// var span = document.getElementsByClassName("close")[0];


	// btn.onclick = function () {
	// 	modal.style.display = "block";
	// }





	// window.onclick = function (event) {
	// 	if (event.target == modal) {
	// 		modal.style.display = "none";
	// 	}
	// }


	const btns = document.querySelectorAll('.popup-button');
	const modalOverlay = document.querySelector('.modal-overlay');
	const modals = document.querySelectorAll('.modal');
	const span = document.querySelectorAll(".popup__close");


	span.forEach((el) => {
		el.addEventListener('click', (e) => {

			modalOverlay.forEach((el) => {
				el.classList.add('modal--nonvisible');
			});


		});
	});



	btns.forEach((el) => {
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');

			modals.forEach((el) => {
				el.classList.remove('modal--visible');
			});

			document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
			modalOverlay.classList.add('modal-overlay--visible');
		});
	});

	modalOverlay.addEventListener('click', (e) => {
		console.log(e.target);

		if (e.target == modalOverlay) {
			modalOverlay.classList.remove('modal-overlay--visible');
			modals.forEach((el) => {
				el.classList.remove('modal--visible');
			});
		}
	});

})();
