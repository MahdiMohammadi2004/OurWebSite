// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        // Close menu after clicking a link on mobile
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Toggle Mobile Menu
document.querySelector('.navbar-toggler').addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close Mobile Menu on Outside Click
document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const toggler = document.querySelector('.navbar-toggler');
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggler.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Fade-in on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));