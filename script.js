document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.addEventListener('scroll', () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                });
            }
        });
    });

    // New code to redirect to home section after refresh
    if (!window.location.hash) {
        window.location.hash = '#home';
    }

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



// document.addEventListener('DOMContentLoaded', () => {
//     const headerLinks = document.querySelectorAll('.navbar a');

//     headerLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1); // Get target section ID
//             const targetSection = document.getElementById(targetId); // Find the target section

//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth', // Scroll behavior: smooth
//                     block: 'start' // Align the top of the target element with the top of the viewport
//                 });
//             }
//         });
//     });
// });
