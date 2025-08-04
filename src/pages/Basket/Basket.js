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

  // ✅ Загрузка корзины из localStorage
  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  // ✅ Данные товара
  const PRODUCT = {
    id: 'JA182765',
    name: 'Дверний Замок Golden Soft для офісу',
    price: 1000,
    quantity: 1,
    image: new URL(
      '/img/pages/catalog/overhead-electronic/Desktop/2Rectangle1x.png',
      import.meta.url
    ).href,
  };

  // ✅ Сохраняем корзину в localStorage
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // ✅ Обновление счётчика корзины
  function updateCartCount(count) {
    if (!cartCount) return;
    cartCount.textContent = count > 0 ? count : '';
    cartCount.style.display = count > 0 ? 'block' : 'none';
  }

  // ✅ Обработчик добавления товара
  const addToCartBtn = document.querySelector('.btn-categories-basket');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const existingProduct = cart.find(item => item.id === PRODUCT.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ ...PRODUCT });
      }
      updateCartUI();
    });
  }

  // ✅ Открытие/закрытие модалки
  document.getElementById('cart-button').addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
  });

  cartCloseBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
    cartOverlay.classList.add('hidden');
  });

  cartOverlay.addEventListener('click', e => {
    if (e.target === cartOverlay) {
      cartModal.classList.add('hidden');
      cartOverlay.classList.add('hidden');
    }
  });

  // ✅ Обновление корзины
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
      }>–</button>
            <span class="qty-count">${item.quantity}</span>
            <button class="qty-btn plus" data-id="${item.id}">+</button>
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

    if (totalPrice > 1000) {
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

    // ✅ Сохраняем корзину после обновления
    saveCartToLocalStorage();
  }

  // ✅ Инициализация UI при загрузке
  updateCartUI();
});
