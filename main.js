const searchButton = document.querySelector("#nav-links-h");
const searchLinks = document.querySelector("#nav-search");
const disablingLayer = document.querySelector("#disabling-layer");
const navLinks = document.querySelector("nav");


searchButton.addEventListener("click", function(e) {
    searchLinks.classList.toggle("hidden");
    disablingLayer.classList.toggle("hidden");
});

disablingLayer.addEventListener("click", function() {
    searchLinks.classList.toggle("hidden");
    disablingLayer.classList.toggle("hidden");
});