const toggleButton = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (toggleButton && navList) {
  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

revealElements.forEach(element => observer.observe(element));


