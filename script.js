function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  });

  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    }
  });
  const text = "Hello, I'm Avin Sapkota!";
let index = 0;

// function typeEffect() {
//   if (index < text.length) {
//     document.getElementById("typing").innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeEffect, 100);
//   }
// }

// typeEffect();