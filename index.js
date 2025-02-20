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


// Script for header start
window.onresize = function() {
  if (window.innerHeight > 500) {
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("bars").style.display = "none";
  }else{
    document.getElementById("bars").style.display = "inline"
  }
};

function showMenu() {
  document.getElementById("bars").style.display = "none";
  document.getElementById("mobileNav").style.display = "inline";
  document.querySelector(".btn").style.display = "inline";
};

function hideMenu() {
  document.getElementById("bars").style.display = "inline";
  document.getElementById("mobileNav").style.display = "none";
  document.querySelector(".btn").style.display = "none";
};
// document.querySelector(".cancel-button").addEventListener("click", hideMenu);


// Script for header end

// Script for Our Product Carousel start

const productSlides = [
  {
    image1: "./images/importIcon.svg",
    title: "Importation",
    description:
      "We specialize in the importation of high-quality goods and equipment, ensuring that our clients have access to the best products the global market has to offer.",
    text: "Learn more",
    image2: "./images/redArrow.svg",
  },
  {
    image1: "./images/truckIcon.svg",
    title: "Trucks & Vehicle Spare Parts",
    description:
      "Keep your business on the move with our premium trucks and vehicle spare parts. We provide reliable and durable vehicles and components to keep your operations running smoothly.",
    text: "Learn more",
    image2: "./images/redArrow.svg",
  },
  {
    image1: "./images/ecommerceIcon.svg",
    title: "E-Commerce Solutions",
    description:
      "Revolutionize your business with our cutting-edge e-commerce solutions. We offer secure and seamless platforms designed to enhance your customers' shopping experience.",
    text: "Learn more",
    image2: "./images/redArrow.svg",
  },
  {
    image1: "./images/e-bankIcon.svg",
    title: "E-Banking & Payment Services",
    description:
      "Simplify financial transactions with our advanced e-banking and e-payment solutions. From secure online transfers to streamlined payment processing, we make managing finances effortless.",
    text: "Learn more",
    image2: "./images/redArrow.svg",
  },
  {
    image1: "./images/realestateIcon.svg",
    title: "Real Estate",
    description:
      "Discover your dream property with our expert real estate services. Whether buying, selling, or renting, we connect you with the best opportunities in the market.",
    text: "Learn more",
    image2: "./images/redArrow.svg",
  },
  {
    image1: "./images/tourismIcon.svg",
    title: "Tourism Services",
    description:
      "Explore the world with confidence through our affordable and reliable tourism services. We handle everything from air ticket bookings to hotel reservations, making your travel smooth and stress-free.",
    text: "Learn more",
    image2: "./images/redArrow.svg",
  },
];

function changeProductSlide(e) {
  const target = e.target;
  document.querySelectorAll(".dot").forEach((dot) => dot.classList.remove("active"));
  target.classList.add("active");
  const index = getElementIndex(target);
  count = index + 1;
  const { image1, title, description, text, image2 } = productSlides[index];
  document.getElementById("image1").src = image1;
  document.getElementById("title").textContent = title;
  document.getElementById("description").textContent = description;
  document.getElementById("text").textContent = text;
  document.getElementById("image2").src = image2;
  clearInterval(timerId);
  setProductAutoSlide();
};

document.querySelector(".indicator").addEventListener("click", changeProductSlide);

function setProductAutoSlide() {
  timerId = setInterval(function () {
    productAutoSlide();
  }, 3000);
};

function productAutoSlide() {
  const { image1, title, description, text, image2 } = productSlides[count];
  const allDots = document.querySelectorAll(".dot");
  const currentDot = allDots[count];
  allDots.forEach((dot) => dot.classList.remove("active"));
  currentDot.classList.add("active");
  document.getElementById("image1").src = image1;
  document.getElementById("title").textContent = title;
  document.getElementById("description").textContent = description;
  document.getElementById("text").textContent = text;
  document.getElementById("image2").src = image2;
  count++;
  if (count > 5) {
    count = 0;
  }
}
window.addEventListener("DOMContentLoaded", setProductAutoSlide);

// Script for Our Product Carousel end
