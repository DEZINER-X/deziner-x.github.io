document.addEventListener("DOMContentLoaded", function () {
    // Title Animation
    setTimeout(() => {
        const title = document.getElementById("title");
        title.style.animation = "titleAnimation 3s ease forwards";
    }, 1000); // Delay before the animation starts

    // Portfolio Image Loading
    const portfolioImages = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    const portfolioContainer = document.getElementById("portfolio-container");

    portfolioImages.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Design ${index + 1}`;
        portfolioContainer.appendChild(img);
    });
});
