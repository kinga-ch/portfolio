const menuBtn = document.querySelector('.menu__btn');
let menuOpen = false;
const nav = document.querySelector('.menu__nav');
const menuLinks = [...document.querySelectorAll('.menu__list--link')];

//Ikona Burger Menu
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    nav.classList.toggle('open');
})

//Podkreślenie wybranej przez użytkownika pozycji menu
function linkSelection() {
    menuLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}

menuLinks.forEach(link => link.addEventListener('click', linkSelection));