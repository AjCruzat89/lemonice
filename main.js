const menuButton = document.querySelector('.fa-solid.fa-bars');
const menuLists = document.querySelector('#menuLists');
const closeButton = document.querySelector('.fas.fa-times');

menuButton.addEventListener('click', () => {
    menuLists.classList.toggle('d-none');
    menuLists.classList.toggle('d-flex');
})

closeButton.addEventListener('click', () => {
    menuLists.classList.toggle('d-none');
    menuLists.classList.toggle('d-flex');
})