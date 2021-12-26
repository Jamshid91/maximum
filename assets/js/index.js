let burger = document.querySelector('.mobile-header .menu-burger');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuItem = document.querySelector('.mobile-menu-item');
let closeBtn = document.querySelector('.mobile-menu-item .btn-close');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('openMenu');
    mobileMenuItem.classList.add('openMemuList');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('openMenu');
    mobileMenuItem.classList.remove('openMemuList');
});




