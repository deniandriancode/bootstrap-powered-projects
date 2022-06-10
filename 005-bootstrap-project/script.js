"use strict";

const navbar = document.querySelector(".cst-hide-scroll");
let pagePos = window.pageYOffset;

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 70) {
    toggleNavbar(e);
  }
});

function toggleNavbar(e) {
  let oldPagePos = pagePos;
  pagePos = window.pageYOffset;

  if (pagePos > oldPagePos) {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  } else {
    navbar.style.top = "0";
  }
}
