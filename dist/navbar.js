// Vanilla JS fallback for mobile menu - works even if React hydration fails
(function() {
  'use strict';

  const btn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-nav-menu');

  if (!btn || !menu) {
    console.warn('[Navbar fallback] Button or menu not found in DOM');
    return;
  }

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
    btn.setAttribute('data-open', isOpen ? 'false' : 'true');
    console.log('[Navbar fallback] Menu toggled:', !isOpen);
  });

  // Close menu when clicking a link
  const links = menu.querySelectorAll('a, button');
  links.forEach(link => {
    link.addEventListener('click', function() {
      menu.style.display = 'none';
      btn.setAttribute('data-open', 'false');
    });
  });

  console.log('[Navbar fallback] Vanilla JS handler attached');
})();
