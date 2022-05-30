const btn = document.getElementById("scrollTop");
btn.addEventListener("click", scrollTopButton);

window.addEventListener("scroll", scrollDocument);

function scrollDocument() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollTopButton() {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox
}