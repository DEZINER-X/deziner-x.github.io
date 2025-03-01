document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const intro = document.getElementById("intro");
        const content = document.getElementById("content");

        intro.classList.add("hidden"); // Apply the CSS class to shrink intro
        setTimeout(() => {
            intro.style.display = "none"; // Remove it completely after animation
            content.style.opacity = "1"; // Show the main content
        }, 1000); // Delay matching the transition time
    }, 500); // Adjust this delay if needed (how long the fullscreen intro stays)
});
