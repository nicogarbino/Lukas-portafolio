window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.toggle('sticky', true);
    } else {
        header.classList.toggle('sticky', false);
    }

    if (window.scrollY > 800) {
        document.getElementById('portafolio').innerText='Lukas Fernandez';
    } else {
        document.getElementById('portafolio').innerText='Portafolio';
    }
});

function toggleMenu () {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}
