document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");

    setTimeout(() => {
        intro.style.transition = "all 1s ease-in-out";
        intro.style.transform = "translateY(-100%)"; // Moves the intro up smoothly
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none"; // Completely remove the intro
            content.style.opacity = "1";  // Fade in the content
        }, 1000); // Matches the transition time
    }, 1500); // Controls how long the intro stays before moving
});
