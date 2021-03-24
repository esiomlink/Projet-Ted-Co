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
/* CONTACT */


document.getElementsByClassName("form-groupe");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  alert(` Thank you ${lastName} ${firstName} we have received your payment of 10,000 euros from your bank account`);
});



/* ANIMATION INTERSECTION OBSERVER */
const threshold = .2;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: threshold
};

const callbackIMG1 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add("reveal-show-img1");
      observer.unobserve(entry.target);
    };
  });
};
const callbackIMG2 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add("reveal-show-img2");
      observer.unobserve(entry.target);
    };
  });
};
const callbackIMG3 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add("reveal-show-img3");
      observer.unobserve(entry.target);
    };
  });
};
const observerImg1 = new IntersectionObserver(callbackIMG1, options);
document.querySelectorAll(".reveal-img1").forEach(function (elements) {
  observerImg1.observe(elements);
});
const observerImg2 = new IntersectionObserver(callbackIMG2, options);
document.querySelectorAll(".reveal-img2").forEach(function (elements) {
  observerImg2.observe(elements);
});
const observerImg3 = new IntersectionObserver(callbackIMG3, options);
document.querySelectorAll(".reveal-img3").forEach(function (elements) {
  observerImg3.observe(elements);
});