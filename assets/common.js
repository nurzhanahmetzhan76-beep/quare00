/* ============================================================
   RetailPool AI — shared i18n + common behaviors
   ============================================================ */

const RP_I18N = {
  ru: {
    nav_home: "Главная", nav_scanner: "Сканер", nav_pools: "Пулы", nav_pricing: "Тарифы", nav_cta: "Начать",
    footer_desc: "ИИ-радар по Kaspi.kz: находим ниши со слабой конкуренцией и собираем синдикаты совместных закупок для МСБ Казахстана.",
    footer_product: "Продукт", footer_company: "Компания", footer_legal: "Документы",
    footer_l_scanner: "Niche Scanner", footer_l_pools: "Co-Buying пулы",
    footer_l_pricing: "Тарифы", footer_l_demo: "Демо",
    footer_l_about: "О проекте", footer_l_contact: "Контакты", footer_l_telegram: "Telegram-бот",
    footer_l_privacy: "Политика конфиденциальности", footer_l_terms: "Условия использования", footer_l_offer: "Публичная оферта",
    footer_rights: "© 2025 RetailPool AI. Все права защищены.",
    footer_built: "Алматы · Казахстан",
  },
  en: {
    nav_home: "Home", nav_scanner: "Scanner", nav_pools: "Pools", nav_pricing: "Pricing", nav_cta: "Get started",
    footer_desc: "An AI radar for Kaspi.kz: we find low-competition niches and form co-buying syndicates for Kazakhstani SMBs.",
    footer_product: "Product", footer_company: "Company", footer_legal: "Legal",
    footer_l_scanner: "Niche Scanner", footer_l_pools: "Co-Buying pools",
    footer_l_pricing: "Pricing", footer_l_demo: "Demo",
    footer_l_about: "About", footer_l_contact: "Contact", footer_l_telegram: "Telegram bot",
    footer_l_privacy: "Privacy policy", footer_l_terms: "Terms of service", footer_l_offer: "Public offer",
    footer_rights: "© 2025 RetailPool AI. All rights reserved.",
    footer_built: "Almaty · Kazakhstan",
  }
};

let RP_LANG = localStorage.getItem('rp_lang') || 'ru';

function rpApplyTranslations() {
  const t = RP_I18N[RP_LANG];
  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.getAttribute('data-i');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i_ph]').forEach(el => {
    const key = el.getAttribute('data-i_ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.documentElement.lang = RP_LANG;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === RP_LANG);
  });
  if (typeof onLangChange === 'function') onLangChange();
}

function rpSetLang(l) {
  RP_LANG = l;
  localStorage.setItem('rp_lang', l);
  rpApplyTranslations();
}

function rpInitReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in-view'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

function rpToggleMobileNav() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('mobile-open');
}

document.addEventListener('DOMContentLoaded', () => {
  rpApplyTranslations();
  rpInitReveal();
});
