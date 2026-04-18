/* Magnetic buttons + card tilt + orb parallax */

export function initInteractions() {
  initMagnetic();
  initTilt();
  initParallax();
}

function initMagnetic() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.3;
      const y = (e.clientY - r.top  - r.height / 2) * 0.3;
      gsap.to(btn, { x, y, duration: .3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

function initTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - .5;
      const y = (e.clientY - r.top)  / r.height - .5;
      gsap.to(card, {
        rotateY: x * 8, rotateX: -y * 8,
        duration: .3, ease: 'power2.out',
        transformPerspective: 900, transformOrigin: 'center center',
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: .6, ease: 'elastic.out(1, .5)' });
    });
  });
}

function initParallax() {
  const orbs = Array.from(document.querySelectorAll('.orb'));
  window.addEventListener('mousemove', e => {
    const cx = (e.clientX / window.innerWidth  - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    orbs.forEach((orb, i) => {
      const f = (i + 1) * 15;
      gsap.to(orb, { x: cx * f, y: cy * f, duration: 1.8, ease: 'power2.out' });
    });
  });
}
