const cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const continueButton = document.getElementById('continue-button');
const wholesaleWarning = document.getElementById('wholesale-warning');

// 🔧 Данные товара
const PRODUCT = {
  id: 'JA182765',
  name: 'Дверной Замок Golden Soft для офиса',
  price: 1000,
  quantity: 1,
  image: new URL(
    '/img/pages/catalog/overhead-electronic/Desktop/2Rectangle1x.png',
    import.meta.url
  ).href,
};

// ✅ Обновление счётчика корзины
function updateCartCount(count) {
  if (!cartCount) return;

  if (count > 0) {
    cartCount.textContent = count;
    cartCount.style.display = 'inline-block';
  } else {
    cartCount.textContent = '';
    cartCount.style.display = 'none';
  }
}

// ✅ Обработчик добавления товара
document
  .querySelector('.btn-categories-basket')
  .addEventListener('click', () => {
    const existingProduct = cart.find(item => item.id === PRODUCT.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...PRODUCT });
    }

    updateCartUI();
  });

// ✅ Открытие/закрытие модалки
document.getElementById('cart-button').addEventListener('click', () => {
  cartModal.classList.toggle('hidden');
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
          <button class="remove-item" data-id="${item.id}">Удалить</button>
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
  cartTotal.textContent = `Итого: ${totalPrice.toLocaleString()} грн.`;

  if (totalPrice > 100000) {
    checkoutButton.style.display = 'none';
    continueButton.style.display = 'none';
    wholesaleWarning.classList.remove('hidden');
  } else {
    checkoutButton.style.display = 'inline-block';
    continueButton.style.display = 'inline-block';
    wholesaleWarning.classList.add('hidden');
  }

  // 👇 Повесим события на кнопки + - удалить
  document.querySelectorAll('.qty-btn.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const product = cart.find(p => p.id === id);
      if (product) product.quantity++;
      updateCartUI();
    });
  });

  document.querySelectorAll('.qty-btn.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const product = cart.find(p => p.id === id);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        // Удаляем, если нажали минус при 1 шт.
        const index = cart.findIndex(p => p.id === id);
        if (index !== -1) cart.splice(index, 1);
      }
      updateCartUI();
    });
  });

  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const index = cart.findIndex(p => p.id === id);
      if (index !== -1) cart.splice(index, 1);
      updateCartUI();
    });
  });
}
