const input = document.getElementById("pricing-slider");
const bubble = document.getElementById("bubble");

const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currSlide = 0;
let maxSlides = cards.length - 1;

function moveSlide(slides, currSlide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - currSlide) * 100}%)`)
  );
}

prevBtn.addEventListener("click", () => {
  if (currSlide === 0) {
    currSlide = maxSlides;
  } else currSlide--;

  moveSlide(cards, currSlide);
});

nextBtn.addEventListener("click", () => {
  if (currSlide === maxSlides) {
    currSlide = 0;
  } else currSlide++;
  moveSlide(cards, currSlide);
});

moveSlide(cards, currSlide);

//#########################
// OLD SLIDER LOGIC
//#########################

// function slideControl(control, cards) {
//   for (let i = 0; i < cards.length; i++) {
//     if (control === "prev" && cards[i].classList.contains("active")) {
//       if (i - 1 >= 0) {
//         toggleClass(cards[i], cards[i - 1]);
//         break;
//       } else {
//         toggleClass(cards[i], cards[cards.length - 1]);
//         break;
//       }
//     } else if (control === "next" && cards[i].classList.contains("active")) {
//       console.log(i);
//       if (i + 1 < cards.length) {
//         // console.log(i);
//         toggleClass(cards[i], cards[i + 1], "next");
//         break;
//       } else {
//         toggleClass(cards[i], cards[0], "next");
//         break;
//       }
//     } else {
//       console.log("invalid control");
//     }
//   }
// }

// function toggleClass(present, next, className) {
//   next.classList.add("active", className);
//   present.classList.remove("active");
// }

function changeVal() {
  const val = input.value;
  const min = input.min;
  const max = input.max;

  const newVal = Math.ceil(((val - min) * 100) / (max - min));
  bubble.innerHTML = `${val} ${val == 1 ? "day" : "days"}`;
  // bubble.style.left = `calc(${newVal}% + (${10 - newVal * 0.3}px))`;
}

input.addEventListener("input", () => {
  changeVal();
});
changeVal();
