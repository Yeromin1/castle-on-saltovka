document.addEventListener('DOMContentLoaded', () => {
  const orderCartList = document.getElementById('order-cart-list');
  const orderCartTotal = document.getElementById('order-cart-total');

  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateUI() {
    orderCartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'order-cart-item';
      li.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="order-cart-img" />
          <div class="order-cart-info">
            <div class="container-cart-name-price">
              <p class="order-cart-name">${item.name}</p>
              <div class="order-cart-controls">
                <p class="order-cart-price">${item.price.toLocaleString()} грн.</p>
                <button class="qty-btn minus" data-id="${item.id}" ${
        item.quantity === 1 ? 'disabled' : ''
      }>−</button>
                <span class="qty-count">${item.quantity}</span>
                <button class="qty-btn plus" data-id="${item.id}">+</button>
              </div>
            </div>
            <button class="remove-item" data-id="${item.id}">Видалити</button>
          </div>
        `;
      orderCartList.appendChild(li);

      total += item.price * item.quantity;
    });

    orderCartTotal.innerHTML = `<div class="container-order-cart-total"><span class="order-cart-total">Загальна сума:</span> <span class="order-cart-total-price">${total.toLocaleString()} грн.</span></div>`;

    saveCart();
    attachEvents();
  }

  function attachEvents() {
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const product = cart.find(p => p.id === id);
        if (product) product.quantity++;
        updateUI();
      };
    });

    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const product = cart.find(p => p.id === id);
        if (product && product.quantity > 1) {
          product.quantity--;
        }
        updateUI();
      };
    });

    // Обработчик кнопки Видалити
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const index = cart.findIndex(p => p.id === id);
        if (index !== -1) {
          cart.splice(index, 1);
          updateUI();
        }
      };
    });
  }

  updateUI();
});
