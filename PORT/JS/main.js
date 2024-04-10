/*==================Toggle Icon Navbar============================*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click',  () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
});


/*================== Scroll section active link ==================*/

let sections = document.querySelectorAll('techstack');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*==================Sticky navbar ============================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*===========remove toggle icon and navbar====================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*===========Scroll revealr====================*/
ScrollReveal({
    distance: '80px' ,
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .techstack-container, .projects-box, .contact form', { origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

/*===========Typed js====================*/

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Software Engineer' , 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

});

let readAboutBtn = document.querySelector('#readabout');
let additionalContent = document.querySelector('.additional-content');

readAboutBtn.addEventListener('click', () => {
    event.preventDefault();
    additionalContent.classList.toggle('active');
    readAboutBtn.textContent = additionalContent.classList.contains('active') ? 'Read less' : 'Read more';
});




