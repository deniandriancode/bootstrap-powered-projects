"use strict";

const modal = document.querySelector(".cst-modal");
const img = document.querySelectorAll(".img-cst-lightbox");
const imgContent = document.querySelectorAll(".img-cst-modal-content");
const imgSrc = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const btnPrev = document.querySelector('[data-cst-control="prev"]');
const btnNext = document.querySelector('[data-cst-control="next"]');
let currentIndex = 0;
let allowChange = true;
let contentIndex = 0;

modal.addEventListener("click", function(e) {
  if (e.target !== modal) {
    return;
  } else {
    modal.classList.remove("show");
    resetImageContent();
  }
});

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function(e) {
    modal.classList.add("show");
    imgContent[contentIndex].style.display = "block";
    imgContent[contentIndex].src = imgSrc[i];
    currentIndex = i;
  });
}

btnPrev.addEventListener("click", () => {
  if (allowChange) {
    const oldIndex = currentIndex;
    currentIndex--;
    changeImage(oldIndex);
    allowChange = false;
  }
});
btnPrev.addEventListener("mouseover", () => toggleControl(true));
btnPrev.addEventListener("mouseout", () => toggleControl(false));

btnNext.addEventListener("click", () => {
  if (allowChange) {
    const oldIndex = currentIndex;
    currentIndex++;
    changeImage(oldIndex);
    allowChange = false;
  }
});
btnNext.addEventListener("mouseover", () => toggleControl(true));
btnNext.addEventListener("mouseout", () => toggleControl(false));

function changeImage(oldIndex) {
  if (currentIndex < 0) {
    currentIndex = imgSrc.length - 1;
  } else if (currentIndex === imgSrc.length) {
    currentIndex = 0;
  }
  let prevContentIndex = contentIndex;
  if (contentIndex === 0) {
  	contentIndex = 1;
  } else {
  	contentIndex = 0;
  }
  imgContent[prevContentIndex].style.opacity = "0";
  imgContent[prevContentIndex].src = imgSrc[oldIndex];
  imgContent[contentIndex].src = imgSrc[currentIndex];
  imgContent[contentIndex].style.opacity = "1";
  imgContent[contentIndex].style.display = "block";
}

window.addEventListener("keydown", function(e) {
  if (!modal.classList.contains("show")) {
    return;
  }
  if (e.code === "Escape") {
    modal.classList.remove("show");
    resetImageContent();
  } else if (e.code === "ArrowLeft") {
  	btnPrev.click();
  } else if (e.code === "ArrowRight") {
  	btnNext.click();
  }
});

imgContent.forEach(item => {
  item.addEventListener("mouseover", () => toggleControl(true));
  item.addEventListener("mouseout", () => toggleControl(false));
  item.addEventListener("transitionend", () => {
    allowChange = true;
  })
});

function toggleControl(isVisible) {
  if (isVisible) {
    btnPrev.style.opacity = "1";
    btnNext.style.opacity = "1";
  } else {
    btnPrev.style.opacity = "0";
    btnNext.style.opacity = "0";
  }
}

function resetImageContent() {
  for (let i = 0; i < imgContent.length; i++) {
    imgContent[i].style.display = "none";
    imgContent[i].style.opacity = "1";
  }
  allowChange = true;
}

// make the modal image three
