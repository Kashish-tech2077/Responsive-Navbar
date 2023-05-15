// -------------------Adding all the elements by querySelector-------------------
const mobile_btn = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const header_active = document.querySelector(".active");


// -------------------Calling togglenavbar function-------------------
const togglenavbar = () => {
  nav_header.classList.toggle("active");
};


// -------------------Adding eventListener to the button-------------------
mobile_btn.addEventListener("click", () => {
  togglenavbar();
});
