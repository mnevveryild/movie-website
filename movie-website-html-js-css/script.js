// Kayan movie-list arrow fonksiyonu
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    const ratio = Math.floor(window.innerWidth / 300);
    arrow.addEventListener("click", function() {
        clickCounter++;
        if (imageItem - (4 + clickCounter) >= 0) {
            let currentTransform = getComputedStyle(movieLists[i]).transform;
            let currentX = 0;
            if (currentTransform !== "none") {
                currentX = parseInt(currentTransform.split(",")[4]);
            }
            movieLists[i].style.transform = `translateX(${currentX - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0; // Baştan başlat
        }
    });
});

// Dark mode toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-filter, .movie-item-buttons i, .movie-item-buttons, .movie-item-title, .select, .toggle-ball, .toggle, .toggle-icon, .left-menu-icon, .left-menu-icon i, .left-menu, .left-menu ul li a, .sidebar, .sidebar i, .sidebar ul li a, .navbar, .navbar i, .navbar ul li a, .movie-list-filter select, .movie-list-filter");
ball.addEventListener("click", function() {
    items.forEach(item => {
        item.classList.toggle("active");
    });
});

console.log(window.innerWidth);
