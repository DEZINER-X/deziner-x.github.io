document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        // Move the intro to the top
        document.getElementById("intro").classList.add("hidden");

        // Show the content smoothly
        setTimeout(() => {
            document.getElementById("content").style.opacity = "1";
        }, 1000); // Delay to match animation timing
    }, 2000); // Show fullscreen title for 2 seconds
});
