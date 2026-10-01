// Scroll-fade animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Back to top
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active nav link
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('nav ul a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});