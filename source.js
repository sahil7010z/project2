// script.js

// Reveal sections on scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Contact form handler (basic alert)
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});
