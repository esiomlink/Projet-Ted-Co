/* TOGGLE MENU */
const hamburger = document.getElementById("burgerMenu");
const navBox = document.querySelector("header nav");
const logoPhone = document.getElementById("logo-smartphone");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("show");
  navBox.classList.toggle("show");
  logoPhone.classList.toggle("displayNone");
});

/* SCROLL NAV */
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navBox.classList.add("scroll");
  } else {
    navBox.classList.remove("scroll");
  }
});

/* SCROLL UP BTN */
const btn = document.querySelector(".go-up-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btn.classList.add("scroll");
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    btn.classList.remove("scroll");
  }
});
