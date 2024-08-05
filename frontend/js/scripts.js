let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const newTransform = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos
});

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.hamburger-menu');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});
