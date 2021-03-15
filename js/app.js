
/* TOGGLE MENU */
const hamburger = document.getElementById("burgerMenu");
const navLinks = document.querySelector("header nav");
hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("show");
	navLinks.classList.toggle("show");
});

/* GO UP BTN */
const btn = document.querySelector('.go-up-btn');
btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})