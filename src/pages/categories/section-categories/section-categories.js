document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item-categories');
  const button = document.querySelector('#btn-view-all');
  const ITEMS_TO_SHOW = 8;
  let currentIndex = 0;

  // Скрываем все элементы, кроме первых
  const updateVisibility = () => {
    items.forEach((item, index) => {
      item.style.display = index < currentIndex ? 'block' : 'none';
    });

    // Если все элементы показаны — скрыть кнопку
    if (currentIndex >= items.length) {
      button.style.display = 'none';
    } else {
      button.style.display = 'block';
    }
  };

  const showMoreItems = () => {
    currentIndex += ITEMS_TO_SHOW;
    updateVisibility();
  };

  // Начальное отображение
  currentIndex = ITEMS_TO_SHOW;
  updateVisibility();

  button.addEventListener('click', showMoreItems);
});

// Отменяет переход вверх <a href="#"></a>
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
