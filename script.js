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

// function emailSend() {
// var username = document.getElementById('name').value;
// var phone = document.getElementById('mobile').value;
// var email = document.getElementById('email').value;
// var subject = document.getElementById('subject').value;
// var textarea = document.getElementById('textarea').value;

// var messagebody = "Name " + username +
// "<br/> Phone" + phone +
// "<br/> Email" + email +
// "<br/> Subject" + subject +
// "<br/> Message" + textarea ; 

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "doremonkumar07@gmail.com",
//         Password : "370DCC9ACDEA0917EC3C5A33F0D34D12086E",
//         To : 'doremonkumar07@gmail.com',
//         From :  'doremonkumar07@gmail.com',  
//         Subject : "Message from Portfolio",
//         Body : messagebody
//     }).then(
//       message => alert(message)
//     );
// }