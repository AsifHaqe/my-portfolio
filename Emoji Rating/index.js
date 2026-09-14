const starsEl = document.querySelectorAll(".fa-star");
const emojiEl = document.querySelectorAll(".far");
const COLORS = ["red", "orange", "lightblue", "lightgreen", "green"];

initialRatingSystem();
//initial rating 
function initialRatingSystem() {
    updateRating(0);
    attachStarClickListeners();
}
function attachStarClickListeners() {
    starsEl.forEach((starEl, index) => {
        starEl.addEventListener("click", () => updateRating(index));
    })
}
function highlightStarsUpTo(ratingIndex) {
    starsEl.forEach((starEl, idx) => {
        const isActive = idx <= ratingIndex;
        starEl.classList.toggle("active", isActive);
    });
}
function updateRating(ratingIndex) {
    highlightStarsUpTo(ratingIndex);
    updateEmojiDisplay(ratingIndex);
}
function updateEmojiDisplay(ratingIndex) {
    const offsetPx = ratingIndex * 50;
    const activeColor = COLORS[ratingIndex];
    emojiEl.forEach((emoji) => {
        emoji.style.transform = `translateX(-${offsetPx}px)`;
        emoji.style.color = activeColor;
    });
}
