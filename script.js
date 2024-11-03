// Smooth scroll for navigation links
// Adds smooth scrolling behavior to links that point to sections within the page (e.g., "#services" or "#contact").
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the default "jump" to the section
        const target = document.querySelector(this.getAttribute('href')); // Finds the section that the link points to
        target.scrollIntoView({
            behavior: 'smooth' // Scrolls smoothly to the section
        });
    });
});

// Animate elements on scroll
// Uses Intersection Observer to add a fade-in animation when elements become visible in the viewport while scrolling.
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Checks if the element is currently visible in the viewport
            entry.target.classList.add('fade-in'); // Adds the "fade-in" class to trigger the CSS animation
            observer.unobserve(entry.target); // Stops observing the element after it has animated once
        }
    });
}, {
    threshold: 0.1 // Animation triggers when 10% of the element is visible in the viewport
});

// Applies the observer to elements that should animate on scroll
document.querySelectorAll('.service-card, .hero h1, .hero p, .contact h2, .contact p').forEach(element => {
    observer.observe(element); // Observes each element for visibility within the viewport
});

// Hover effect on service cards
// Adds a visual effect when hovering over service cards, creating a more interactive experience.
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover-effect'); // Adds "hover-effect" class for scale-up and shadow effect on hover
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('hover-effect'); // Removes the effect when the mouse is no longer hovering
    });
});