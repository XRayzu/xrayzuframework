let menu_open = document.getElementById('menu_open');
let menu_close = document.getElementById('menu_close');
let navigation = document.getElementById('navigation');

menu_open.addEventListener('click', () => {
    if (menu_open.classList.contains('visible')) {
        menu_open.classList.remove('visible');
        menu_close.classList.add('visible');
        navigation.classList.add('open');
    }
});

menu_close.addEventListener('click', () => {
    if (menu_close.classList.contains('visible')) {
        menu_close.classList.remove('visible');
        menu_open.classList.add('visible');
        navigation.classList.remove('open');
    }
});