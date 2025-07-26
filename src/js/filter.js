document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const content = document.getElementById(targetId);
    const icon = button.querySelector('.icon-filter');

    if (content) {
      content.hidden = !content.hidden;
    }

    if (icon) {
      icon.classList.toggle('icon-filter-animation');
    }
  });
});

document.getElementById('btn-show-categories').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.price-inputs input');
  if (inputs.length < 2) return;

  // Получаем значения "от" и "до", убираем пробелы и нецифровые символы
  const from = parseInt(inputs[0].value.replace(/\D/g, ''), 10);
  const to = parseInt(inputs[1].value.replace(/\D/g, ''), 10);

  // Проверка: если ввод некорректный
  if (isNaN(from) || isNaN(to)) return;

  // Получаем все товары
  const items = document.querySelectorAll('.item-overhead');

  items.forEach(item => {
    const priceEl = item.querySelector('.price');
    if (!priceEl) return;

    // Извлекаем число из текста, например "1 000 грн."
    const price = parseInt(priceEl.textContent.replace(/\D/g, ''), 10);

    // Показываем или скрываем товар по диапазону
    if (price >= from && price <= to) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

document.querySelectorAll('.btn-reset-filters').forEach(button => {
  button.addEventListener('click', () => {
    // Сброс значений инпутов цены
    const inputs = document.querySelectorAll('.price-inputs input');
    inputs.forEach(input => {
      input.value = '';
    });

    // Показать все товары
    const items = document.querySelectorAll('.item-overhead');
    items.forEach(item => {
      item.style.display = '';
    });

    // Сброс диапазона range если используется
    const ranges = document.querySelectorAll(
      '.price-slider input[type="range"]'
    );
    ranges.forEach(range => {
      range.value = range.min;
    });
  });
});
