"use strict";
let submitButton = document.getElementById("js-submitButton");
let submitScreen = document.getElementById("js-submitionScreen");

function selectNumber() {
	const selectedRadio = document.querySelector(".rate-wrapper__radio:checked");
	let selectedNumber = document.getElementById("js-selectedNumber");
	selectedNumber.innerText = selectedRadio.value;
}
function toggleSubmision() {
	submitScreen.classList.toggle("active");
}

submitButton.onclick = function () {
	selectNumber();
	toggleSubmision();
};
submitScreen.onclick = function () {
	toggleSubmision();
};
