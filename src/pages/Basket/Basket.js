const cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const continueButton = document.getElementById('continue-button');
const wholesaleWarning = document.getElementById('wholesale-warning');

const PRODUCT = {
  id: 'JA182765',
  name: 'Дверной Замок Golden Soft для офиса',
  price: 33000,
  quantity: 1,
};

// ✅ ФУНКЦИЯ для отображения/скрытия счётчика
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

document
  .querySelector('.btn-categories-basket')
  .addEventListener('click', () => {
    // Проверяем, есть ли товар в корзине
    const existingProduct = cart.find(item => item.id === PRODUCT.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...PRODUCT });
    }

    updateCartUI();
  });

document.getElementById('cart-button').addEventListener('click', () => {
  cartModal.classList.toggle('hidden');
});

function updateCartUI() {
  // Получаем общее количество товаров в корзине
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Обновляем счётчик через отдельную функцию
  updateCartCount(totalCount);

  // Обновляем список товаров в корзине
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} — ${
      item.quantity * item.price
    }₽`;
    cartItemsList.appendChild(li);
  });

  // Обновляем итоговую сумму
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  cartTotal.textContent = `Итого: ${totalPrice.toLocaleString()}₽`;

  // Показываем или скрываем кнопки и предупреждение о оптовой покупке
  if (totalPrice > 100000) {
    checkoutButton.style.display = 'none';
    continueButton.style.display = 'none';
    wholesaleWarning.classList.remove('hidden');
  } else {
    checkoutButton.style.display = 'inline-block';
    continueButton.style.display = 'inline-block';
    wholesaleWarning.classList.add('hidden');
  }
}
