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