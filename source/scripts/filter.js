"use strict";

const filterSortButtons = document.querySelectorAll(".filter__button");

filterSortButtons.forEach(filterSortButtons => filterSortButtons.addEventListener("click", () => {

filterSortButtons.classList.toggle("filter__button_state_active");

}));
