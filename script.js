let menu = document.querySelector('.header #menu');
let navbar = document.querySelector('.header nav');
let copyRight = document.querySelector('.header nav .copy-right');

menu.onclick = function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    copyRight.classList.toggle('active');
}