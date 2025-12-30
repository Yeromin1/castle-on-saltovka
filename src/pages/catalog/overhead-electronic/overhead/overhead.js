import prices from '../../../../data/prices.js';

const priceText = document.querySelectorAll('.description-overhead');

priceText.forEach(el => {
  const id = Number(el.dataset.id);
  const product = prices.find(price => price.id === id);
  if (!product) return;

  el.insertAdjacentHTML(
    'beforeend',
    `<p class="price">${product.price} грн.</p>`
  );
});
