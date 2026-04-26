export function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks   = document.getElementById('navLinks');

  /* Scrolled class */
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
    highlightNav();
  }, { passive: true });

  /* Mobile menu */
  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks?.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuToggle?.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

function highlightNav() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
