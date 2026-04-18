export function initNavbar(lenis) {
  const navbar     = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks   = document.getElementById('navLinks');

  lenis.on('scroll', ({ scroll }) => {
    if (navbar) navbar.classList.toggle('scrolled', scroll > 20);
    highlightNav(scroll);
  });

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

function highlightNav(scroll) {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  let current = '';
  sections.forEach(s => { if (scroll >= s.offsetTop - 150) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
