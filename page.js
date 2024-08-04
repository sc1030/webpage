document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const navMenu = document.querySelector('nav ul');

    // Close the menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !checkbox.contains(e.target)) {
            checkbox.checked = false;
        }
    });

    // Smooth scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            checkbox.checked = false; // Close the menu
        });
    });

   /* document.addEventListener('DOMContentLoaded', function () {
        // Get the Hire Me button element by its ID
        const hireMeButton = document.getElementById('hire-me');
    
        // Ensure the button exists before adding the event listener
        if (hireMeButton) {
            hireMeButton.addEventListener('click', function () {
                alert('Thank you for your interest! Please contact me at sc1030830@gmail.com or +91 9352875863.');
            });
        }
    });*/
});

document.getElementById("hireme").addEventListener("click", function() {
    alert('Thank you for your interest! Please contact me at sc1030830@gmail.com or +91 9352875863.');
});

document.getElementById('https://www.instagram.com/shyamchouhan8890?igsh=aWh5bDJjaXRrZXI0').addEventListener('click', function() {
    window.open('https://www.instagram.com/', '_blank');
});

document.getElementById('https://x.com/shyamch46794832?t=hcSLCcWfgVhQxnDEpUIV0w&s=09').addEventListener('click', function() {
    window.open('https://twitter.com/', '_blank');
});

document.getElementById('www.linkedin.com/in/shyam-sunder-898422313').addEventListener('click', function() {
    window.open('https://www.linkedin.com/', '_blank');
});

document.getElementById('https://wa.me/qr/MEAU4SUT3WBLP1').addEventListener('click', function() {
    window.open('https://www.whatsapp.com/', '_blank');
});

// Smooth Scroll to Contact Section
document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const name = this.querySelector('input[type="name"]');
    const email = this.querySelector('input[type="email"]');
    const number = this.querySelector('input[type="number"]');
    const message = this.querySelector('textarea');
    
    // Simple validation checks
    if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        return false;
    }
    
    if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return false;
    }
    
    if (number.value.trim() === "") {
        alert("Please enter your mobile number.");
        number.focus();
        return false;
    }
    
    if (message.value.trim() === "") {
        alert("Please enter your message.");
        message.focus();
        return false;
    }
    
    // If all fields are valid, submit the form
    alert("Message sent successfully!");
    this.reset();
});
