document.addEventListener("DOMContentLoaded", function () {
    // Title Animation
    setTimeout(() => {
        const titleContainer = document.getElementById("title-container");
        titleContainer.style.animation = "titleAnimation 3s ease forwards";
    }, 1000);
});

// Image Popup Functionality
function openPopup(imageSrc) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = imageSrc;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
