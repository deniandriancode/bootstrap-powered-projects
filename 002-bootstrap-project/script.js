"use strict";

const imageArray = document.querySelectorAll("#headerImage img");

let index = 0;
let nextIndex = index + 1;
window.onload = setInterval(() => {
    imageArray[index].style.opacity = "0";
    imageArray[nextIndex].style.opacity = "1";
    index++;
    if (index == imageArray.length) {
        index = 0;
    }
    nextIndex = index + 1;
    if (index == imageArray.length - 1) {
        nextIndex = 0;
    }
}, 8000);

// scroll to top
const btn = document.getElementById("scrollTop");
btn.addEventListener("click", scrollTopButton);

window.addEventListener("scroll", scrollDocument);

function scrollDocument() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.transform = "scale(1)";
    } else {
        btn.style.transform = "scale(0)";
    }
}

function scrollTopButton() {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox
}