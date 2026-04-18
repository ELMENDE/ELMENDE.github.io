import { initI18n }           from './core/i18n.js';
import { initSmoothScroll }   from './core/smoothScroll.js';
import { initNavbar }         from './ui/navbar.js';
import { initCursor }         from './ui/cursor.js';
import { initInteractions }   from './ui/interactions.js';
import { initHeroAnimation }  from './animations/hero.js';
import { initScrollAnimations } from './animations/scroll.js';

/* CDN globals: Lenis, gsap, ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

const lenis = initSmoothScroll();

initI18n();
initNavbar(lenis);
initCursor();
initInteractions();
initScrollAnimations();

window.addEventListener('load', () => {
  initHeroAnimation();
});
