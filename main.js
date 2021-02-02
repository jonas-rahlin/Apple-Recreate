const searchButton = document.querySelector("#nav-links-h");
const searchLinks = document.querySelector("#nav-search");
const disablingLayer = document.querySelector("#disabling-layer");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navLinks = document.querySelector("#nav-links");
const searchClose = document.querySelector("#nav-search-bar-icon2");
const clickElements = [disablingLayer, searchClose, searchButton];

//function for toggling various css classes(animations) on the navbar, when activating the search input.
const toggles = () => {
    searchLinks.classList.toggle("hidden");
    disablingLayer.classList.toggle("hidden");
    nav.classList.toggle("navcolor");
    navLinks.classList.toggle("hidden2");
    body.classList.toggle("scroll-lock");
    if(searchLinks.classList.contains("hidden")){
        navLinks.classList.add("fade-in");
    }
    else{
        navLinks.classList.remove("fade-in");
    }
}

// loop for adding clickevents (wich triggers the toggles function) to multiple elements.
clickElements.forEach((e) => {
    e.addEventListener("click", () => {
        toggles()
    });
});