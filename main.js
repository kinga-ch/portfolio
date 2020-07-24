const menuBtn = document.querySelector('.menu__btn');
let menuOpen = false;
const nav = document.querySelector('.menu__nav');

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

// Rozwijane Menu