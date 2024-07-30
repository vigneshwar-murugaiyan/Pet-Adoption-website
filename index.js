const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
navbar.classList.toggle("sticky", window.scrollY > 0)
); 

const menu = document.querySelector(".menu");
const toggleMenu = () =>menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("cilck", toggleMenu);
document.querySelector(".click-btn").addEventListener("cilck", toggleMenu);

document
  .querySelector(".menu a")
  .forEach((link) => link.addEventListener("click",toggleMenu));