document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        // Move the intro to the top
        document.getElementById("intro").classList.add("hidden");
    }, 500);
        // Show the content smoothly
        setTimeout(() => {
            document.getElementById("content").style.opacity = "1";
        }, 1000); // Delay to match animation timing
    }, 500); // Show fullscreen title for 2 seconds
});
