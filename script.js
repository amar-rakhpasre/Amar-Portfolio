document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
    // Close menu if clicked outside of it
    document.addEventListener('click', function(event) {
    let isClickInsideMenu = navbar.contains(event.target);
    let isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// New code to redirect to home section after refresh
window.addEventListener('load', () => {
    if (!window.location.hash) {
        const homeSection = document.querySelector('.home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Client-side validation
        if (!fullName || !email || !phoneNumber || !subject || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }

        // Simulate form submission success
        setTimeout(() => {
            // Show success prompt
            alert('Your message has been sent successfully!');
            // Reset the form
            form.reset();
            // Clear any previous messages
            formMessage.textContent = '';
        }, 500); // Simulate a delay for submission
    });
});



// New code to enable smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 