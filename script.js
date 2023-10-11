document.querySelector('.header-burger-menu').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.header-mobile-menu');
    mobileMenu.classList.add('open');
});

document.querySelector('.header-close-menu').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.header-mobile-menu');
    mobileMenu.classList.remove('open');
});

const menuLinks = document.querySelectorAll('.header-menu1 a');

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        const mobileMenu = document.querySelector('.header-mobile-menu');
        mobileMenu.classList.remove('open'); // Close the menu
    });
});