// Navigation toggle for mobile sidebar
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Close sidebar when clicking a nav link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('show');
    }
  });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener('scroll', () => {
  backToTop.style.display = (window.scrollY > 200) ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Header shrink effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ScrollReveal animations (optional, if using ScrollReveal lib)
if(window.ScrollReveal){
  ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 800,
    delay: 100
  }).reveal('section, .reveal', { origin: 'bottom' });
}
