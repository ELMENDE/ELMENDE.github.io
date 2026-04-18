/* Lenis is loaded via CDN — accessed as a global */

export let lenis;

export function initSmoothScroll() {
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

  lenis.on('scroll', () => ScrollTrigger.update());
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -70 });
      }
    });
  });

  return lenis;
}
