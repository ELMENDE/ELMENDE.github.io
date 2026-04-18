export function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

  const quickDotX  = gsap.quickTo(dot,  'x', { duration: 0.15, ease: 'power3' });
  const quickDotY  = gsap.quickTo(dot,  'y', { duration: 0.15, ease: 'power3' });
  const quickRingX = gsap.quickTo(ring, 'x', { duration: 0.5,  ease: 'power3' });
  const quickRingY = gsap.quickTo(ring, 'y', { duration: 0.5,  ease: 'power3' });

  window.addEventListener('mousemove', e => {
    quickDotX(e.clientX);  quickDotY(e.clientY);
    quickRingX(e.clientX); quickRingY(e.clientY);
  });

  document.querySelectorAll('a, button, .card, .tag, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
