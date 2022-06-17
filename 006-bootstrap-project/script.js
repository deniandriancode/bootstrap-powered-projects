const offsetMenu = document.querySelector("[data-cst-offset-menu]");
//const offset = document.querySelector("[data-cst-offset]");
const overlay = document.querySelector("[data-cst-overlay]");
const closeOffset = document.querySelector("[data-cst-close-offset]");
const mediaQuery = window.matchMedia("(max-width: 576px)");

//window.onresize = function() {
	//if (mediaQuery.matches) {
		//offset.classList.add("sm");
	//} else {
		//offset.classList.remove("sm");
	//}
//}


offsetMenu.addEventListener("click", function(e) {
	overlay.style.display = "block";
});

closeOffset.addEventListener("click", function(e) {
	overlay.style.display = "none";
});

overlay.addEventListener("click", function(e) {
	if (e.target === overlay) {
		overlay.style.display = "none";
	}
});

window.addEventListener("keydown", function(e) {
	if (overlay.style.display === "none") {
		return;
	}
	if (e.key === "Escape") {
		overlay.style.display = "none";
	}
});
