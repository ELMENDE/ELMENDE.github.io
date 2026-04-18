export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  initSectionTitles();
  initAbout();
  initSkills();
  initTimeline();
  initProjects();
  initEducation();
  initContact();
  initCounters();
}

function initSectionTitles() {
  document.querySelectorAll('.section-title').forEach(el => {
    const text = el.textContent;
    el.innerHTML = text.split('').map(c =>
      c === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${c}</span>`
    ).join('');
    gsap.from(el.querySelectorAll('.char'), {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0, y: 30, rotateX: -60,
      stagger: 0.025, duration: .6, ease: 'back.out(1.5)',
    });
  });
}

function initAbout() {
  gsap.from('.about-text p', {
    scrollTrigger: { trigger: '#about', start: 'top 78%' },
    opacity: 0, x: -40, stagger: .15, duration: .7, ease: 'power3.out',
  });
  gsap.from('.info-item', {
    scrollTrigger: { trigger: '.about-info', start: 'top 85%' },
    opacity: 0, x: -30, stagger: .1, duration: .5, ease: 'power2.out',
  });
  gsap.from('.about-avatar', {
    scrollTrigger: { trigger: '.about-card-wrapper', start: 'top 80%' },
    opacity: 0, scale: .4, rotation: -15, duration: .9, ease: 'back.out(1.8)',
  });
  gsap.from('.stat', {
    scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
    opacity: 0, y: 30, stagger: .1, duration: .5, ease: 'back.out(1.5)',
  });
}

function initSkills() {
  gsap.from('.skill-category', {
    scrollTrigger: { trigger: '#skills', start: 'top 75%' },
    opacity: 0, y: 50, scale: .9, stagger: .08, duration: .6, ease: 'back.out(1.4)',
  });
  document.querySelectorAll('.skill-category').forEach(cat => {
    gsap.from(cat.querySelectorAll('.tag'), {
      scrollTrigger: { trigger: cat, start: 'top 85%' },
      opacity: 0, scale: 0, stagger: .04, duration: .35, ease: 'back.out(2)', delay: .25,
    });
  });
}

function initTimeline() {
  gsap.from('.timeline-dot', {
    scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
    scale: 0, stagger: .2, duration: .5, ease: 'back.out(2)',
  });
  gsap.from('.timeline-content', {
    scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
    opacity: 0, x: 40, stagger: .2, duration: .7, ease: 'power3.out',
  });
  gsap.from('.job-bullets li', {
    scrollTrigger: { trigger: '.timeline', start: 'top 75%' },
    opacity: 0, x: 20, stagger: .08, duration: .5, ease: 'power2.out', delay: .3,
  });
}

function initProjects() {
  gsap.from('.project-card', {
    scrollTrigger: { trigger: '#projects', start: 'top 75%' },
    opacity: 0, y: 60, rotateY: 6, stagger: .12, duration: .8, ease: 'power3.out',
  });
}

function initEducation() {
  gsap.from('.education-card', {
    scrollTrigger: { trigger: '#education', start: 'top 80%' },
    opacity: 0, y: 40, duration: .8, ease: 'power3.out',
  });
  gsap.from('.edu-icon', {
    scrollTrigger: { trigger: '#education', start: 'top 80%' },
    scale: 0, rotation: -30, duration: .7, ease: 'back.out(2)', delay: .2,
  });
}

function initContact() {
  gsap.from('.contact-sub', {
    scrollTrigger: { trigger: '#contact', start: 'top 85%' },
    opacity: 0, y: 20, duration: .6, ease: 'power2.out',
  });
  gsap.from('.contact-card', {
    scrollTrigger: { trigger: '.contact-links', start: 'top 85%' },
    opacity: 0, x: -40, stagger: .12, duration: .6, ease: 'power3.out',
  });
}

function initCounters() {
  ScrollTrigger.create({
    trigger: '.about-stats',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      document.querySelectorAll('.stat-number').forEach(el => {
        const num = parseInt(el.textContent);
        if (isNaN(num)) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: num, duration: 1.4, ease: 'power2.out',
          onUpdate:  () => { el.textContent = Math.floor(obj.val) + '+'; },
          onComplete: () => { el.textContent = num + '+'; },
        });
      });
    },
  });
}
