function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.right = (menu.style.right === '0px') ? '-200px' : '0px';
}

// Añade un controlador de eventos al documento para cerrar el menú si se hace clic en otro lugar
document.addEventListener('click', function (event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');

    if (event.target !== menuToggle && !menu.contains(event.target)) {
        menu.style.right = '-200px';
    }
});

