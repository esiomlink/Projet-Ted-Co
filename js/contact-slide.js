// var largeur = window.innerWidth;

const miniCard1 = document.querySelector(".minicarte1");
const miniCard2 = document.querySelector(".minicarte2");
const miniCard3 = document.querySelector(".minicarte3");

const card1 = document.querySelector(".carte1");
const card2 = document.querySelector(".carte2");
const card3 = document.querySelector(".carte3");

const screen = window.innerWidth;

function toggle() {
  miniCard1.addEventListener("click", () => {
    card1.classList.toggle("is-visible");
    miniCard1.classList.toggle("is-invisible");
    miniCard1.classList.remove("is-visible");
    card1.classList.remove("is-invisible");
  });
  card1.addEventListener("click", () => {
    miniCard1.classList.toggle("is-visible");
    card1.classList.toggle("is-invisible");
    card1.classList.remove("is-visible");
    miniCard1.classList.remove("is-invisible");
  });

  miniCard2.addEventListener("click", () => {
    card2.classList.toggle("is-visible");
    miniCard2.classList.toggle("is-invisible");
    miniCard2.classList.remove("is-visible");
    card2.classList.remove("is-invisible");
  });
  card2.addEventListener("click", () => {
    miniCard2.classList.toggle("is-visible");
    card2.classList.toggle("is-invisible");
    card2.classList.remove("is-visible");
    miniCard2.classList.remove("is-invisible");
  });

  miniCard3.addEventListener("click", () => {
    card3.classList.toggle("is-visible");
    miniCard3.classList.toggle("is-invisible");
    miniCard3.classList.remove("is-visible");
    card3.classList.remove("is-invisible");
  });
  card3.addEventListener("click", () => {
    miniCard3.classList.toggle("is-visible");
    card3.classList.toggle("is-invisible");
    card3.classList.remove("is-visible");
    miniCard3.classList.remove("is-invisible");
  });
}

function redimensionnement() {
  if ("matchMedia" in window) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      toggle();
    } else {
      if (window.matchMedia("(max-width: 768px)").matches) {
        miniCard1.classList.remove("is-visible");
        miniCard2.classList.remove("is-visible");
        miniCard3.classList.remove("is-visible");

        miniCard1.classList.add("is-invisible");
        miniCard2.classList.add("is-invisible");
        miniCard3.classList.add("is-invisible");

        card1.classList.remove("is-invisible");
        card2.classList.remove("is-invisible");
        card2.classList.remove("is-invisible");

        card1.classList.add("is-visible");
        card2.classList.add("is-visible");
        card3.classList.add("is-visible");
      }
    }
  }
}
window.addEventListener("resize", redimensionnement, true);

redimensionnement();
