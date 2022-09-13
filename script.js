// ############################
// LOADING STATE
// ###########################

const loadingState = document.querySelector(".loading-state");
const mainBody = document.querySelectorAll(".loading-state ~ *");

document.querySelector("body").style.backgroundImage = "none";
mainBody.forEach((el) => (el.style.display = "none"));

setTimeout(() => {
  loadingState.style.display = "none";
  mainBody.forEach((el) => {
    el.nodeName !== "NAV" ?
      (el.style.display = "block") :
      (el.style.display = "flex");
  });

  document.querySelector("body").style.backgroundImage =
    ' url("/images/blob.svg")';



  // ###########################
  // HAMBURGER MENU
  // ##########################
  const hamburger = document.querySelector('.hamburger-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    document.querySelector('.mobile-menu').classList.toggle('menu-hidden')
  })

  // #############################
  // TWINKLING STARS
  // ############################

  // credit: https://codepen.io/christinastep/pen/eXypvq?editors=0010
  let i = 0;
  while (i < 100) {
    const el = document.createElement("img");
    el.src = "/images/asterisk.svg";
    el.alt = "star";
    document.querySelector(".stars").appendChild(el);
    i++;
  }
  const stars = document.querySelectorAll(".stars>img");

  const services = document.querySelector(".services");
  const starsContainer = document.querySelector(".stars");

  starsContainer.style.width = `${services.offsetWidth / 1.2}px`;

  // new star position
  let newHeight, newWidth, height, width, time;

  function newPosition() {
    width = document.querySelector(".services").offsetWidth / 1.2;
    height = document.querySelector(".services").offsetHeight / 2;
    newHeight = Math.floor(Math.random() * height);
    newWidth = Math.floor(Math.random() * width);
    time = Math.floor(Math.random() * 1000) + 500;
    return [newWidth, newHeight, time];
  }

  // random star locations
  stars.forEach((img) => {
    let animation = newPosition();
    img.style.left = `${animation[0]}px`;
    img.style.top = `${animation[1]}px`;
    img.style.animationDuration = `${animation[2] / 200}s`;
  });

  // #########################
  // TESTIMONIAL SLIDES
  // #########################
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

  setInterval(() => {
    if (currSlide === maxSlides) {
      currSlide = 0;
    } else currSlide++;
    moveSlide(cards, currSlide);
  }, 3000)

  moveSlide(cards, currSlide);

  // ##########################
  // INPUT CHANGE
  // #########################
  const input = document.getElementById("pricing-slider");
  const bubble = document.getElementById("bubble");

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
}, 2500);