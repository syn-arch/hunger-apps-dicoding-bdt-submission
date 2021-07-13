import 'regenerator-runtime';

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

// Toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');

        // add the menu icon
        toggle.querySelector('.btn-menu').innerHTML = '<i class="fas fa-bars"</i>';
    } else {
        menu.classList.add('active');

        // add the close (x) button
        toggle.querySelector('.btn-menu').innerHTML = '<i class="fas fa-times"></i>';
    }
}

toggle.addEventListener('click', toggleMenu, false);

const items = document.querySelectorAll('.item');

// active submenu
function toggleItem() {
    if (this.classList.contains('submenu-active')) {
        this.classList.remove('submenu-active');
    } else if (menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    } else {
        this.classList.add('submenu-active');
    }
}

items.forEach((item) => {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
});

// Close from anywhere
function closeSubmenu(e) {
    const isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

document.addEventListener('click', closeSubmenu, false);
