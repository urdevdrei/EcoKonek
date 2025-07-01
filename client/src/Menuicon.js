const Menuicon = document.querySelector('.menu-icon');

const offScreenMenu = document.querySelector('.off-screen-menu');

Menuicon.addEventListener('click', () => {
    Menuicon.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})