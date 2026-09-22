document.addEventListener('DOMContentLoaded', function () {
    const containerEl = document.querySelector(".container");

    for (let i = 0; i < 30; i++) {
        const colorContainerEl = document.createElement("div");
        colorContainerEl.classList.add("color-container");
        containerEl.appendChild(colorContainerEl);
    }
    const colorContainerEls = document.querySelectorAll(".color-container");

    function randomColor() {
        const chars = "0123456789abcdef";
        let colorCode = "";

        for (let i = 0; i < 6; i++) {
            const randomNum = Math.floor(Math.random() * chars.length);
            colorCode += chars[randomNum];
        }
        return colorCode;
    }
    function generateColors() {
        colorContainerEls.forEach((colorContainerEl) => {
            const newColorCode = randomColor();
            colorContainerEl.style.backgroundColor = `#${newColorCode}`;
        });
    }
    generateColors();
});