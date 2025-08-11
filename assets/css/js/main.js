// Navigation toggle for mobile sidebar
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener('scroll', function () {
  backToTop.style.display =
    (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
      ? "block"
      : "none";
});
backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Header shrink effect
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ScrollReveal animations (keep as is)
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 800,
  delay: 100
}).reveal('section, .reveal', { origin: 'bottom' });
