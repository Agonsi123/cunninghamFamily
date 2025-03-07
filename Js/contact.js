// Script for header start
window.onresize = function () {
  if (window.innerHeight > 500) {
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


// Script for contact form start

// document.addEventListener("DOMContentLoaded", function () {
//   const inputs = document.querySelectorAll("input");

//   inputs.forEach((input) => {
//     // Apply red color to the asterisk in the placeholder
//     let placeholderText = input.getAttribute("placeholder");
//     if (placeholderText.includes("*")) {
//       let splitText = placeholderText.split("*");
//       input.setAttribute("data-placeholder", placeholderText);

//       //Use JavaScript to add HTML inside placeholder
//       input.insertAdjacentHTML(
//         "afterend",
//         `<span class="red-asterisk">${splitText[0]} <span style="color: red;">*</span></span>`
//       );
//       input.placeholder = splitText[0];
//     }

//     input.addEventListener("focus", function () {
//       this.placeholder = this.getAttribute("data-placeholder").replace(" *", "");
//       let nextSibling = this.nextElementSibling;
//       if (nextSibling && nextSibling.classList.contains("red-asterisk")) {
//         nextSibling.style.display = "none";
//       }
//     });

//     input.addEventListener("blur", function () {
//       if (this.value === "") {
//         let nextSibling = this.nextElementSibling;
//         if (nextSibling && nextSibling.classList.contains("red-asterisk")) {
//           nextSibling.style.display = "inline";
//         }
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function(){
    const inputs = document.querySelectorAll(".required");

    inputs.forEach(input => {
        input.classList.add("red-asterisk");

        input.addEventListener("focus", function() {
            this.classList.remove("red-asterisk");
        });
        input.addEventListener("blur", function() {
            if (this.value.trim() === "") {
                this.classList.add("red-asterisk");
            }
        });
    });
});
// Script for contact form end

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

// Script for form submission start
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Script for form submission end
