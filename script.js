document.querySelector('.header-burger-menu').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.header-mobile-menu');
    mobileMenu.classList.add('open'); // Open the menu by adding the 'open' class
});

document.querySelector('.header-close-menu').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.header-mobile-menu');
    mobileMenu.classList.remove('open'); // Close the menu by removing the 'open' class
});
