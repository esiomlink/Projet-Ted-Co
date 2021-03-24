const card = document.querySelectorAll(".carte-tarif");
const card1 = document.querySelector(".carte1");
const card2 = document.querySelector(".carte2");
const card3 = document.querySelector(".carte3");

function toogle() {
  card[0].addEventListener("click", () => {
    card1.classList.toggle("is-visible");
    card1.classList.remove("is-invisible");
  });
  card[1].addEventListener("click", () => {
    card2.classList.toggle("is-visible");
    card2.classList.remove("is-invisible");
  });
  card[2].addEventListener("click", () => {
    card3.classList.toggle("is-visible");
    card3.classList.remove("is-invisible");
  });
}
toogle();

function redimensionnement() {
  if ("matchMedia" in window) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      card1.classList.add("is-invisible");
      card2.classList.add("is-invisible");
      card3.classList.add("is-invisible");
    } else {
      card1.classList.remove("is-invisible");
      card2.classList.remove("is-invisible");
      card3.classList.remove("is-invisible");

      card1.classList.add("is-visible");
      card2.classList.add("is-visible");
      card3.classList.add("is-visible");
    }
  }
}
window.addEventListener("resize", redimensionnement);

redimensionnement();
