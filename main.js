//QUERY SELECTORS
var homeBtn = document.querySelectorAll(".home");
console.log(homeBtn);
var workBtn = document.querySelectorAll(".work");
var hobbiesBtn = document.querySelectorAll(".hobbies");
var contactBtn = document.querySelectorAll(".contact");

homeSection = document.querySelector(".home-section");
workSection = document.querySelector(".work-section");
hobbiesSection = document.querySelector(".hobbies-section");
contactSection = document.querySelector(".contact-section");

contactLinkedin = document.querySelector(".contact-linkedin");

contactGitHub = document.querySelector(".contact-github");

// EVENT LISTENERS

contactLinkedin.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/nicolerue/", "_blank");
});

contactGitHub.addEventListener("click", function () {
  window.open("https://github.com/nicolerue", "_blank");
});

window.addEventListener("DOMContentLoaded", function () {
  homeSection.classList.remove("hidden");
  workSection.classList.add("hidden");
  contactSection.classList.add("hidden");
});

for (const element of homeBtn) {
  element.addEventListener("click", function () {
    homeSection.classList.remove("hidden");
    workSection.classList.add("hidden");
    contactSection.classList.add("hidden");
  });
}

for (const element of workBtn) {
  element.addEventListener("click", function () {
    homeSection.classList.add("hidden");
    workSection.classList.remove("hidden");
    contactSection.classList.add("hidden");
  });
}

// for (const element of hobbiesBtn) {
//   element.addEventListener("click", function () {
//     homeSection.classList.add("hidden");
//     workSection.classList.add("hidden");
//     hobbiesSection.classList.remove("hidden");
//     contactSection.classList.add("hidden");
//   });
// }

for (const element of contactBtn) {
  element.addEventListener("click", function () {
    homeSection.classList.add("hidden");
    workSection.classList.add("hidden");
    contactSection.classList.remove("hidden");
  });
}
