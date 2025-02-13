// Script for Key Service Carousel
const slides = [
  {
    image: "./images/lorry.svg",
    title: "Lorries & Spare Parts",
    description: "Top-quality vahicles and parts to drive your busines forward.",
  },
  {
    image: "./images/realEstate.svg",
    title: "Real Estate Services",
    description: "Expert solutions in property management and sales.",
  },
  {
    image: "./images/ecommerce.svg",
    title: "E-Commerce",
    description: "Seamless Online shopping solutions tailored to your needs.",
  },
  {
    image: "./images/ebanking.svg",
    title: "E-banking & E-payment",
    description: "Secure and efficient financial transactions at your fingers.",
  },
  {
    image: "./images/tourism.svg",
    title: "Tourism Services",
    description: "Discover the world with our exclusive travel packages",
  },
];

let count = 0;
let timerId = null;

function changesSlide(e) {
  const target = e.target;
  document.querySelectorAll(".dot").forEach((dot) => dot.classList.remove("active"));
  target.classList.add("active");
  const index = getElementIndex(target);
  count = index + 1;
  const { image, title, description } = slides[index];
  document.getElementById("carouselImage").src = image;
  document.getElementById("carouselTitle").textContent = title;
  document.getElementById("carouselDescription").textContent = description;
  clearInterval(timerId);
  setAutoSlide();
}

function getElementIndex(element) {
  return [...element.parentNode.children].indexOf(element);
}

document.querySelector(".indicator").addEventListener("click", changesSlide);

function setAutoSlide() {
  timerId = setInterval(function () {
    autoSlide();
  }, 3000);
}

function autoSlide() {
  const { image, title, description } = slides[count];
  const allDots = document.querySelectorAll(".dot");
  const currentDot = allDots[count];
  allDots.forEach((dot) => dot.classList.remove("active"));
  currentDot.classList.add("active");
  document.getElementById("carouselImage").src = image;
  document.getElementById("carouselTitle").textContent = title;
  document.getElementById("carouselDescription").textContent = description;
  count++;
  if (count > 4) {
    count = 0;
  }
}
window.addEventListener("DOMContentLoaded", setAutoSlide);

// Script for WhatsApp

const whatsappText = document.getElementById("sappText");
const whatsappIcon = document.getElementById("sappIcon");

whatsappIcon.addEventListener("mouseover", () => {
  whatsappText.style.visibility = "visible";
});

whatsappIcon.addEventListener("mouseout", () => {
  whatsappText.style.visibility = "hidden";
});
