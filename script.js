let menu = document.querySelector('.header #menu');
let navbar = document.querySelector('.header nav');
let copyRight = document.querySelector('.header nav .copy-right');

menu.onclick = function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    copyRight.classList.toggle('active');
}

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;
        let reviewPoint = 150;

        if (revealTop < windowHeight - reviewPoint) {
            reveal.classList.add('reveal-style');
        } else {
            reveal.classList.remove('reveal-style');
        }
    });
}

$(document).ready(function () {
    $('.grid').colcade({
        columns: '.grid-col',
        items: '.grid-item'
    })
})

setTimeout(function() {
    document.querySelector('.update-message-modal').classList.add('hide');
},4000);