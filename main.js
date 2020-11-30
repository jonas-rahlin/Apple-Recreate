// Function for adding and removing the css class that contains "display:none".

function showHide(id){
    element = document.getElementById(id);
    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
    }

    else {
        element.classList.add("hide");
    }
}

// Eventlistener for applying above function to an element when you hover over another element.

document.getElementById("portfolio-project-info-a").addEventListener("mouseenter", () => showHide("project-info-wrapper-a"));
document.getElementById("portfolio-project-info-a").addEventListener("mouseleave", () => showHide("project-info-wrapper-a"));
document.getElementById("portfolio-project-info-b").addEventListener("mouseenter", () => showHide("project-info-wrapper-b"));
document.getElementById("portfolio-project-info-b").addEventListener("mouseleave", () => showHide("project-info-wrapper-b"));
document.getElementById("portfolio-project-info-c").addEventListener("mouseenter", () => showHide("project-info-wrapper-c"));
document.getElementById("portfolio-project-info-c").addEventListener("mouseleave", () => showHide("project-info-wrapper-c"));
document.getElementById("portfolio-project-info-d").addEventListener("mouseenter", () => showHide("project-info-wrapper-d"));
document.getElementById("portfolio-project-info-d").addEventListener("mouseleave", () => showHide("project-info-wrapper-d"));