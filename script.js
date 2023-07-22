// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
     
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
                //active navbar linkks 
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
                // active sections for animation on scroll 
                sec.classList.add('show-animate');
            }
            // if want to use animations that repeats on scroll use this
            else{
                sec.classList.remove('show-animate');
            }
        });

    // sticky nav 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove togle icon and navbar when clicks  navbar links 
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}