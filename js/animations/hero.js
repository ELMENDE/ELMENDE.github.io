function splitHeroName() {
  const el = document.querySelector('.hero-name');
  if (!el) return [];
  const parts = [];
  el.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      parts.push({ text: node.textContent, accent: false });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      parts.push({ text: node.textContent, accent: node.classList.contains('accent') });
    }
  });

  /* Split by word, wrap each word in a nowrap container so words never break mid-char */
  const wordSpans = [];
  parts.forEach(p => {
    const tokens = p.text.split(/( )/);
    tokens.forEach(token => {
      if (token === ' ') {
        wordSpans.push('<span class="word-sep">&nbsp;</span>');
      } else if (token.length > 0) {
        const cls = p.accent ? 'char accent' : 'char';
        const chars = token.split('').map(c => `<span class="${cls}">${c}</span>`).join('');
        wordSpans.push(`<span class="word-wrap">${chars}</span>`);
      }
    });
  });

  el.innerHTML = wordSpans.join('');
  return Array.from(el.querySelectorAll('.char'));
}

export function initHeroAnimation() {
  const chars = splitHeroName();
  gsap.set(chars, { yPercent: 110, opacity: 0, rotateX: -60 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.available-badge',    { opacity: 0, y: 20, duration: .6 })
    .from('.hero-greeting',      { opacity: 0, y: 20, duration: .5 }, '-=.3')
    .to(chars, {
      yPercent: 0, opacity: 1, rotateX: 0,
      stagger: 0.035, duration: .8, ease: 'back.out(1.7)',
    }, '-=.2')
    .from('.hero-title-wrapper', { opacity: 0, y: 20, duration: .5 }, '-=.3')
    .from('.hero-subtitle',      { opacity: 0, y: 20, duration: .5 }, '-=.3')
    .from('.hero-cta > *',       { opacity: 0, y: 24, stagger: .1, duration: .5 }, '-=.2')
    .from('.hero-socials .social-link', {
      opacity: 0, scale: 0, stagger: .08, duration: .4, ease: 'back.out(2)',
    }, '-=.2')
    .from('.scroll-indicator', { opacity: 0, duration: .6 }, '-=.1');

  ScrollTrigger.refresh();
}
