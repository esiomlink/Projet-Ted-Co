
/* TOGGLE MENU */
const hamburger = document.getElementById("burgerMenu");
const navLinks = document.querySelector("header nav");
hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("show");
	navLinks.classList.toggle("show");
});