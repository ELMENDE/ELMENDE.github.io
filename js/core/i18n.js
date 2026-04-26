import { T } from '../data/translations.js';

export let currentLang = 'es';

export function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

export function initI18n() {
  applyLang('es');
  document.getElementById('langToggle')?.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
  });
}
