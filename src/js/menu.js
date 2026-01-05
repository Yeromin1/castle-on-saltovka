// Додати атрибут data-menu-open на кнопку відкриття
document
  .querySelectorAll('[filter-menu-open], [data-menu-open]')
  .forEach(button => {
    button.addEventListener('click', () => {
      const targetMenu = button.hasAttribute('filter-menu-open')
        ? document.querySelector('[filter-menu]')
        : document.querySelector('[data-menu]');

      if (targetMenu) {
        targetMenu.classList.add('is-open');
        document.documentElement.classList.add('no-scroll');
      }
    });
  });

// Додати атрибут data-menu-close на кнопку закриття
document
  .querySelectorAll('[filter-menu-close], [data-menu-close]')
  .forEach(button => {
    button.addEventListener('click', () => {
      const targetMenu = button.hasAttribute('filter-menu-close')
        ? document.querySelector('[filter-menu]')
        : document.querySelector('[data-menu]');

      if (targetMenu) {
        targetMenu.classList.remove('is-open');
        document.documentElement.classList.remove('no-scroll');
      }
    });
  });
