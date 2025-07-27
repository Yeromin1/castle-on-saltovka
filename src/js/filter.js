// === АНИМАЦИЯ: открытие/закрытие фильтра ===
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

// === ПРИМЕНЕНИЕ ФИЛЬТРАЦИИ ===
document
  .getElementById('btn-show-categories')
  ?.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.container-price-inputs input');
    if (inputs.length < 2) return;

    const from = parseInt(inputs[0].value.replace(/\D/g, ''), 10);
    const to = parseInt(inputs[1].value.replace(/\D/g, ''), 10);

    if (isNaN(from) || isNaN(to)) return;

    const items = document.querySelectorAll('.item-overhead');

    items.forEach(item => {
      const priceEl = item.querySelector('.price');
      if (!priceEl) return;

      const price = parseInt(priceEl.textContent.replace(/\D/g, ''), 10);

      if (price >= from && price <= to) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

// === СБРОС ФИЛЬТРАЦИИ (все кнопки .btn-reset-filters) ===
document.querySelectorAll('.btn-reset-filters').forEach(button => {
  button.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.container-price-inputs input');
    const ranges = document.querySelectorAll(
      '.container-price-slider input[type="range"]'
    );

    if (inputs.length === 2 && ranges.length === 2) {
      const [inputMin, inputMax] = inputs;
      const [rangeMin, rangeMax] = ranges;

      const min = parseInt(rangeMin.min, 10) || 0;
      const max = parseInt(rangeMax.max, 10) || 100000;

      // Устанавливаем значения
      inputMin.value = min;
      inputMax.value = max;
      rangeMin.value = min;
      rangeMax.value = max;
    }

    // Показываем все товары
    const items = document.querySelectorAll('.item-overhead');
    items.forEach(item => {
      item.style.display = '';
    });
  });
});

// === СИНХРОНИЗАЦИЯ input[type=text] <=> input[type=range] ===
document.addEventListener('DOMContentLoaded', () => {
  const priceInputs = document.querySelectorAll(
    '.container-price-inputs input'
  );
  const priceRanges = document.querySelectorAll(
    '.container-price-slider input[type="range"]'
  );

  if (priceInputs.length !== 2 || priceRanges.length !== 2) return;

  const [inputMin, inputMax] = priceInputs;
  const [rangeMin, rangeMax] = priceRanges;

  // Слайдеры -> Инпуты
  rangeMin.addEventListener('input', () => {
    const min = Math.min(parseInt(rangeMin.value), parseInt(rangeMax.value));
    inputMin.value = min;
  });

  rangeMax.addEventListener('input', () => {
    const max = Math.max(parseInt(rangeMin.value), parseInt(rangeMax.value));
    inputMax.value = max;
  });

  // Инпуты -> Слайдеры
  inputMin.addEventListener('input', () => {
    const value = parseInt(inputMin.value.replace(/\D/g, ''), 10);
    if (!isNaN(value)) {
      rangeMin.value = Math.min(value, rangeMax.value);
    }
  });

  inputMax.addEventListener('input', () => {
    const value = parseInt(inputMax.value.replace(/\D/g, ''), 10);
    if (!isNaN(value)) {
      rangeMax.value = Math.max(value, rangeMin.value);
    }
  });
});
