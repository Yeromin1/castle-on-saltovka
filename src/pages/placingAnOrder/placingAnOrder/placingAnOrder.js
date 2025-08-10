document.addEventListener('DOMContentLoaded', () => {
  const orderCartList = document.getElementById('order-cart-list');
  const orderCartTotal = document.getElementById('order-cart-total');
  const editBtn = document.getElementById('edit-cart-btn');

  const svgImg = new URL('/img/icons.svg', import.meta.url);

  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  let isEditMode = false;

  editBtn.addEventListener('click', () => {
    isEditMode = !isEditMode;

    const textSpan = editBtn.querySelector('.edit-cart-text');
    const svgIcon = editBtn.querySelector('svg');

    if (textSpan && svgIcon) {
      if (isEditMode) {
        textSpan.style.display = 'none';
        svgIcon.style.display = 'none';
      } else {
        textSpan.style.display = '';
        svgIcon.style.display = '';
      }
    }

    updateUI();
  });

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateUI() {
    orderCartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'order-cart-item';
      if (isEditMode) {
        li.classList.add('edit-mode');
      }

      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="order-cart-img" />
          <div class="order-cart-info">
            <div class="container-cart-name-price">
              <p class="order-cart-name">${item.name}</p>
              <div class="order-cart-controls">
                <p class="order-cart-price">${item.price.toLocaleString()} грн.</p>
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
          </div>
          <button class="remove-item" data-id="${item.id}">Видалити</button>
        </div>
      `;

      orderCartList.appendChild(li);
      total += item.price * item.quantity;
    });

    orderCartTotal.innerHTML = `
      <div class="container-order-cart-total">
        <span class="order-cart-total">Загальна сума:</span>
        <span class="order-cart-total-price">${total.toLocaleString()} грн.</span>
      </div>
    `;

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
