window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
  });
  function toggleTheme() {
    document.body.classList.toggle('light');
    const icon = document.getElementById('theme-icon');
    const isLight = document.body.classList.contains('light');
    icon.src = isLight ? 'img/icon1.png' : 'img/icon2.png';
  }
  function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  }

let currentLang = 'en'; // по умолчанию английский

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  document.getElementById('lang-label').textContent = currentLang.toUpperCase();

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === currentLang ? '' : 'none';
  });

  localStorage.setItem('lang', currentLang); // сохраняем выбор
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');

  if (savedLang) {
    currentLang = savedLang;
  }

  // просто применяем, без переключения
  document.getElementById('lang-label').textContent = currentLang.toUpperCase();
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === currentLang ? '' : 'none';
  });
});
