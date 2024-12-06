$(document).ready(function(){
    // Initialize the Slick slider on the testimonials container
    $('.testimonials-container').slick({
        slidesToShow: 3,             // Number of slides to show at once
        slidesToScroll: 3,           // Number of slides to scroll at once
        autoplay: true,              // Enable automatic sliding
        autoplaySpeed: 2000,         // Set autoplay speed (in milliseconds)
        dots: true,                  // Show navigation dots below the slider
        dotsClass: 'slick-dots custom-dots',  // Custom dots styling
        customPaging: function(slider, i) {   // Custom pagination to use 3 dots only
            return '<button class="dot"></button>';
        },
        prevArrow: '<button class="slick-prev styled-arrow">Previous</button>',  // Custom previous button
        nextArrow: '<button class="slick-next styled-arrow">Next</button>'   // Custom next button
    });

    // Move the prev and next buttons next to the dots
    $('.slick-dots').wrap('<div class="navigation-container"></div>');
    $('.navigation-container').prepend($('.slick-prev')).append($('.slick-next')).css({
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'gap': '20px',
        'margin-top': '20px'
    });
});

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');

    // Toggle active classes
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Close the menu when the overlay is clicked
document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('nav-menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});
