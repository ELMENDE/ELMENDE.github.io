import { T, typedStrings } from '../data/translations.js';

/* ─── TYPING EFFECT ─────────────────────────────────────────── */
let typingState = { idx: 0, charIdx: 0, deleting: false, timeout: null };

function typeLoop(lang) {
  const el = document.getElementById('typedText');
  if (!el) return;
  const strings = typedStrings[lang];
  const current = strings[typingState.idx % strings.length];
  if (typingState.deleting) {
    el.textContent = current.slice(0, typingState.charIdx - 1);
    typingState.charIdx--;
    if (typingState.charIdx === 0) { typingState.deleting = false; typingState.idx++; }
    typingState.timeout = setTimeout(() => typeLoop(lang), 55);
  } else {
    el.textContent = current.slice(0, typingState.charIdx + 1);
    typingState.charIdx++;
    if (typingState.charIdx === current.length) {
      typingState.deleting = true;
      typingState.timeout = setTimeout(() => typeLoop(lang), 2200);
    } else {
      typingState.timeout = setTimeout(() => typeLoop(lang), 75);
    }
  }
}

function restartTyping(lang) {
  clearTimeout(typingState.timeout);
  typingState = { idx: 0, charIdx: 0, deleting: false, timeout: null };
  const el = document.getElementById('typedText');
  if (el) el.textContent = '';
  setTimeout(() => typeLoop(lang), 400);
}

/* ─── APPLY LANG ────────────────────────────────────────────── */
export let currentLang = 'es';

export function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
  restartTyping(lang);
}

/* ─── INIT ──────────────────────────────────────────────────── */
export function initI18n() {
  applyLang('es');
  document.getElementById('langToggle')?.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
  });
}
