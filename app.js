const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menu.classList.toggle('toggle');
    });



    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            menu.classList.remove('toggle');
        });
    });
};

navSlide();