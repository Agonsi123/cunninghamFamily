// Script for Key Service Carousel
const slides = [
  {
    image: "../images/lorry.svg",
    title: "Lorries & Spare Parts",
    description: "Top-quality vahicles and parts to drive your busines forward.",
  },
  {
    image: "../images/realEstate.svg",
    title: "Real Estate Services",
    description: "Expert solutions in property management and sales.",
  },
  {
    image: "../images/ecommerce.svg",
    title: "E-Commerce",
    description: "Seamless Online shopping solutions tailored to your needs.",
  },
  {
    image: "../images/ebanking.svg",
    title: "E-banking & E-payment",
    description: "Secure and efficient financial transactions at your fingers.",
  },
  {
    image: "../images/tourism.svg",
    title: "Tourism Services",
    description: "Discover the world with our exclusive travel packages",
  },
];

let countForFiveImages = 0;
let timerId = "";

function changesSlide(e) {
  const target = e.target;
  document.querySelectorAll(".sDot").forEach((sDot) => sDot.classList.remove("active"));
  target.classList.add("active");
  const index = getElementIndex(target);
  countForFiveImages = index + 1;
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

document.querySelector(".serIndicator").addEventListener("click", changesSlide);

function setAutoSlide() {
  timerId = setInterval(function () {
    autoSlide();
  }, 4000);
}

function autoSlide() {
  const { image, title, description } = slides[countForFiveImages];
  const allDots = document.querySelectorAll(".sDot");
  const currentDot = allDots[countForFiveImages];
  allDots.forEach((sDot) => sDot.classList.remove("active"));
  currentDot.classList.add("active");
  document.getElementById("carouselImage").src = image;
  document.getElementById("carouselTitle").textContent = title;
  document.getElementById("carouselDescription").textContent = description;
  countForFiveImages++;
  if (countForFiveImages > 4) {
    countForFiveImages = 0;
  }
}
window.addEventListener("DOMContentLoaded", setAutoSlide);

// Script for header start
window.onresize = function () {
  if (window.innerHeight > 700) {
    document.querySelector(".overlay").style.display = "none";
  } else {
    document.querySelector(".overlay").style.display = "flex";
  }
};

function showMenu() {
  document.querySelector(".overlay").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}

function hideMenu() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}

// Script for header end

// Script for WhatsApp start

const whatsappText = document.getElementById("sappText");
const whatsappIcon = document.getElementById("sappIcon");

whatsappIcon.addEventListener("mouseover", () => {
  whatsappText.style.visibility = "visible";
});

whatsappIcon.addEventListener("mouseout", () => {
  whatsappText.style.visibility = "hidden";
});

// Script for WhatsApp end




