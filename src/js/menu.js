// header.html
(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп модалки
    modal: document.querySelector('[data-menu]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error('Один из элементов не найден');
    return;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();

// filter.html
const filterToggleBtn = document.querySelector('[filter-menu-open]');
const filterMenu = document.querySelector('[filter-menu]');
const filterCloseBtn = document.querySelector('[filter-menu-close]');

filterToggleBtn.addEventListener('click', function () {
  filterMenu.classList.add('is-open');
  document.documentElement.classList.add('no-scroll');
});

filterCloseBtn.addEventListener('click', function () {
  filterMenu.classList.remove('is-open');
  document.documentElement.classList.remove('no-scroll');
});
