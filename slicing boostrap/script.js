document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  var cards = document.querySelectorAll(".child");
  var btnNext = document.querySelector("#btn-next");
  var btnPrev = document.querySelector("#btn-prev");
  let currentIndex = 0;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 110) {
      navbar.id = "navbar-blur";
    } else {
      navbar.id = "navbar";
    }
  });
  btnNext.addEventListener("click", () => {
    document
      .getElementById("news-card")
      .classList.replace("justify-content-start", "justify-content-end");
    btnPrev.classList.remove("visually-hidden");
    if (currentIndex < cards.length - 3) {
      cards[currentIndex].style.transitionDuration = "400";
      cards[currentIndex].style.transform = "translateX(-50%)";
      cards[currentIndex].classList.add("visually-hidden");
      cards[currentIndex + 3].classList.remove("visually-hidden");
      cards[currentIndex + 3].style.transitionDuration = "400ms";
      cards[currentIndex + 3].style.transform = "translateX(0)";
      currentIndex++;
    } else {
      btnNext.classList.add("visually-hidden");
    }
  });

  btnPrev.addEventListener("click", () => {
    document
      .getElementById("news-card")
      .classList.replace("justify-content-end", "justify-content-start");
    btnNext.classList.remove("visually-hidden");
    if (currentIndex > 0) {
      cards[currentIndex + 2].classList.add("visually-hidden");
      cards[currentIndex + 2].style.transitionDuration = "400ms";
      cards[currentIndex + 2].style.transform = "translateX(100%)";
      cards[currentIndex - 1].classList.remove("visually-hidden");
      cards[currentIndex - 1].style.transitionDuration = "400ms";
      cards[currentIndex - 1].style.transform = "translateX(0)";
      currentIndex--;
    } else {
      btnPrev.classList.add("visually-hidden");
    }
  });
  document.getElementById("sendmsg").addEventListener("click", () => {
    document.querySelector("#alert").classList.remove("visually-hidden");
    setTimeout(() => {
      document.querySelector("#alert").classList.add("visually-hidden");
    }, 2000);
  });
});
