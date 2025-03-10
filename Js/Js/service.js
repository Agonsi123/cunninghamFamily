// Script for header start
// window.onresize = function () {
//   if (window.innerHeight > 700) {
//     document.querySelector(".overlay").style.display = "none";
//   } else {
//     document.querySelector(".overlay").style.display = "flex";
//   }
// };

function showMenu() {
  document.querySelector(".overlay").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}

function hideMenu() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}

// Script for header end

// Script for Our Product Carousel start

let countForSixImages = 0;
let timerIdSix = "";

const productSlides = [
  {
    image1: "../images/importIcon.svg",
    title: "Importation",
    description:
      "We specialize in the importation of high-quality goods and equipment, ensuring that our clients have access to the best products the global market has to offer.",
    text: "Learn more",
    image2: "../images/redArrow.svg",
  },
  {
    image1: "../images/truckIcon.svg",
    title: "Trucks & Vehicle Spare Parts",
    description:
      "Keep your business on the move with our premium trucks and vehicle spare parts. We provide reliable and durable vehicles and components to keep your operations running smoothly.",
    text: "Learn more",
    image2: "../images/redArrow.svg",
  },
  {
    image1: "../images/ecommerceIcon.svg",
    title: "E-Commerce Solutions",
    description:
      "Revolutionize your business with our cutting-edge e-commerce solutions. We offer secure and seamless platforms designed to enhance your customers' shopping experience.",
    text: "Learn more",
    image2: "../images/redArrow.svg",
  },
  {
    image1: "../images/e-bankIcon.svg",
    title: "E-Banking & Payment Services",
    description:
      "Simplify financial transactions with our advanced e-banking and e-payment solutions. From secure online transfers to streamlined payment processing, we make managing finances effortless.",
    text: "Learn more",
    image2: "../images/redArrow.svg",
  },
  {
    image1: "../images/realestateIcon.svg",
    title: "Real Estate",
    description:
      "Discover your dream property with our expert real estate services. Whether buying, selling, or renting, we connect you with the best opportunities in the market.",
    text: "Learn more",
    image2: "../images/redArrow.svg",
  },
  {
    image1: "../images/tourismIcon.svg",
    title: "Tourism Services",
    description:
      "Explore the world with confidence through our affordable and reliable tourism services. We handle everything from air ticket bookings to hotel reservations, making your travel smooth and stress-free.",
    text: "Learn more",
    image2: "../images/redArrow.svg",
  },
];

function changeProductSlide(e) {
  const target = e.target;
  document.querySelectorAll(".pDot").forEach((pDot) => pDot.classList.remove("active"));
  target.classList.add("active");
  const index = getElementIndex(target);
  countForSixImages = index + 1;
  const { image1, title, description, text, image2 } = productSlides[index];
  document.getElementById("image1").src = image1;
  document.getElementById("title").textContent = title;
  document.getElementById("description").textContent = description;
  document.getElementById("text").textContent = text;
  document.getElementById("image2").src = image2;
  clearInterval(timerIdSix);
  setProductAutoSlide();
}

function getElementIndex(element) {
  return [...element.parentNode.children].indexOf(element);
}

document.querySelector(".proIndicator")?.addEventListener("click", changeProductSlide);

function setProductAutoSlide() {
  timerIdSix = setInterval(function () {
    productAutoSlide();
  }, 3000);
}

function productAutoSlide() {
  const { image1, title, description, text, image2 } = productSlides[countForSixImages];
  const allDots = document.querySelectorAll(".pDot");
  const currentDot = allDots[countForSixImages];
  allDots.forEach((pDot) => pDot.classList.remove("active"));
  currentDot.classList.add("active");
  document.getElementById("image1").src = image1;
  document.getElementById("title").textContent = title;
  document.getElementById("description").textContent = description;
  document.getElementById("text").textContent = text;
  document.getElementById("image2").src = image2;
  countForSixImages++;
  if (countForSixImages > 5) {
    countForSixImages = 0;
  }
}
window.addEventListener("DOMContentLoaded", setProductAutoSlide);

// Script for Our Product Carousel end

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
