const input = document.getElementById("pricing-slider");
const bubble = document.getElementById("bubble");

const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function slideControl(control, cards) {
  for (let i = 0; i < cards.length; i++) {
    if (control === "prev" && cards[i].classList.contains("active")) {
      if (i - 1 >= 0) {
        toggleClass(cards[i], cards[i - 1]);
        break;
      } else {
        toggleClass(cards[i], cards[cards.length - 1]);
        break;
      }
    } else if (control === "next" && cards[i].classList.contains("active")) {
      if (i + 1 < cards.length) {
        toggleClass(cards[i], cards[i + 1], "next");
        break;
      } else {
        toggleClass(cards[i], cards[0], "next");
        break;
      }
    } else {
      console.log("invalid control");
    }
  }
}

function toggleClass(present, next, className) {
  present.classList.remove("active");
  next.classList.add("active", className);
}

prevBtn.addEventListener("click", () => slideControl("prev", cards));
nextBtn.addEventListener("click", () => slideControl("next", cards));

function changeVal() {
  const val = input.value;
  const min = input.min;
  const max = input.max;
  const thumbHalfWidth = 10;
  const inputWidth = input.offsetWidth;

  const newVal = Math.ceil(((val - min) * 100) / (max - min));
  bubble.innerHTML = `${val} ${val == 1 ? "day" : "days"}`;
  // bubble.style.left = `calc(${newVal}% + (${10 - newVal * 0.3}px))`;
}
input.addEventListener("input", () => {
  changeVal();
});
changeVal();
