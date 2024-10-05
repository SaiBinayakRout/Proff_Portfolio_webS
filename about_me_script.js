let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('.section');  // Corrected: changed 'section' to 'sections'
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;  // Corrected: use 'sec.offsetTop'
        let height = sec.offsetHeight;  // Corrected: use 'sec.offsetHeight'
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};