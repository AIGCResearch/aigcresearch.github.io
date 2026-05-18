document.addEventListener('DOMContentLoaded', () => {
  initNav();
  AOS.init({ duration: 700, once: true, offset: 80 });
});

function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}
