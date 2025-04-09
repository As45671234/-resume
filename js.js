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