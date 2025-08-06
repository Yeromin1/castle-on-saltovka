document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const cartModal = document.getElementById('cart-modal');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');
  const continueButton = document.getElementById('continue-button');
  const wholesaleWarning = document.getElementById('wholesale-warning');
  const wholesaleWarningCopy = document.getElementById(
    'wholesale-warning-copy'
  );
  const wholesaleSales = document.getElementById('wholesale-sales');
  const cartCloseBtn = document.getElementById('cart-close-btn');

  const svgImg = new URL('/img/icons.svg', import.meta.url);

  // Загрузка корзины из localStorage
  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  // Навешиваем обработчики на все кнопки добавления в корзину characteristics.html
  document.querySelectorAll('.btn-categories-basket').forEach(button => {
    button.addEventListener('click', e => {
      const containerBtnFav = e.currentTarget.closest(
        '.container-btn-favorites'
      );
      const container = e.currentTarget.closest('.container');
      if (!containerBtnFav || !container) return;

      const id = containerBtnFav.dataset.id;

      const name =
        container.querySelector('.title-characteristics')?.textContent.trim() ||
        'Без назви';

      const priceText =
        container.querySelector('.price')?.textContent.trim() || '0 грн.';
      const price = parseInt(priceText.replace(/\D/g, '')) || 0;

      const img = container.querySelector('#main-image')?.src || '';

      // Проверяем, есть ли товар в корзине
      const existingProduct = cart.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({
          id,
          name,
          price,
          quantity: 1,
          image: img,
        });
      }

      updateCartUI();
    });
  });

  // Сохранение корзины
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Обновление счётчика корзины
  function updateCartCount(count) {
    if (!cartCount) return;
    cartCount.textContent = count > 0 ? count : '';
    cartCount.style.display = count > 0 ? 'block' : 'none';
  }

  // Обновление UI корзины
  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    updateCartCount(totalCount);
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
        <div class="cart-item-info">
          <div class="container-name-remove">
            <p class="cart-item-name">${item.name}</p>
            <button class="remove-item" data-id="${item.id}">
              <svg class="basket-delete-svg" width="24" height="24">
                <use href="${svgImg}#icon-delete"></use>
              </svg> Видалити
            </button>
          </div>
          <div class="container-quantity-price">
            <div class="cart-item-quantity">
              <button class="qty-btn minus" data-id="${item.id}" ${
        item.quantity === 1 ? 'disabled' : ''
      }>
                <svg class="qty-minus" width="16" height="16">
                  <use href="${svgImg}#icon-minus"></use>
                </svg>
              </button>
              <span class="qty-count">${item.quantity}</span>
              <button class="qty-btn plus" data-id="${item.id}">
              <svg class="qty-plus" width="16" height="16">
                <use href="${svgImg}#icon-plus"></use>
              </svg>
              </button>
            </div>
            <p class="cart-item-price">${item.price.toLocaleString()} грн.</p>
          </div>
        </div>
      `;
      cartItemsList.appendChild(li);
    });

    const totalPrice = cart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    cartTotal.innerHTML = `
      <span class="cart-label">Разом:</span>
      <span class="cart-amount">${totalPrice.toLocaleString()} грн.</span>
    `;

    const isDesktop = window.matchMedia('(min-width: 1158px)').matches;

    if (totalPrice > 100000) {
      checkoutButton.style.display = 'none';
      continueButton.style.display = 'none';

      if (!isDesktop) {
        wholesaleWarning.classList.remove('hidden');
      }

      wholesaleSales.classList.remove('hidden');

      if (isDesktop) {
        wholesaleWarningCopy.classList.remove('hidden');
      }
    } else {
      checkoutButton.style.display = 'block';
      continueButton.style.display = 'block';

      if (!isDesktop) {
        wholesaleWarning.classList.add('hidden');
      }

      wholesaleSales.classList.add('hidden');

      if (isDesktop) {
        wholesaleWarningCopy.classList.add('hidden');
      }
    }

    // Обработчики + / – / удалить
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
      btn.onclick = () => {
        const product = cart.find(p => p.id === btn.dataset.id);
        if (product) product.quantity++;
        updateCartUI();
      };
    });

    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
      btn.onclick = () => {
        const product = cart.find(p => p.id === btn.dataset.id);
        if (product && product.quantity > 1) {
          product.quantity--;
        } else {
          const index = cart.findIndex(p => p.id === btn.dataset.id);
          if (index !== -1) cart.splice(index, 1);
        }
        updateCartUI();
      };
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.onclick = () => {
        const index = cart.findIndex(p => p.id === btn.dataset.id);
        if (index !== -1) cart.splice(index, 1);
        updateCartUI();
      };
    });

    saveCartToLocalStorage();
  }

  // Навешиваем обработчики на все кнопки добавления в корзину premium.html
  document.querySelectorAll('.button-addition').forEach(button => {
    button.addEventListener('click', e => {
      const slide = e.currentTarget.closest('.swiper-slide');

      if (!slide) return;

      const id =
        slide.dataset.id || slide.querySelector('.model').textContent.trim();
      const name =
        slide.querySelector('.model')?.textContent.trim() || 'Без названия';
      const priceText =
        slide.querySelector('.price-sum')?.textContent.trim() || '0 грн.';
      const price = parseInt(priceText.replace(/\D/g, '')) || 0;
      const img = slide.querySelector('img.foto')?.src || '';

      // Проверяем, есть ли товар в корзине
      const existingProduct = cart.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({
          id,
          name,
          price,
          quantity: 1,
          image: img,
        });
      }

      updateCartUI();
    });
  });

  // Открытие/закрытие модалки корзины
  document.getElementById('cart-button').addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  });

  cartCloseBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
    cartOverlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  });

  cartOverlay.addEventListener('click', e => {
    if (e.target === cartOverlay) {
      cartModal.classList.add('hidden');
      cartOverlay.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }
  });

  // Закрытие корзины при клике на "Продовжити покупки"
  continueButton.addEventListener('click', () => {
    cartModal.classList.add('hidden');
    cartOverlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  });

  // Инициализация UI при загрузке
  updateCartUI();
});
