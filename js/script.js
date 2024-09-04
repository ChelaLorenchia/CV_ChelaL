const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

const bx= document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if (!bx.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active')
    }
});