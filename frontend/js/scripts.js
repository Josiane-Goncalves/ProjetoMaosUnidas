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

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
