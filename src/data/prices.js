const prices = [
  {
    id: 1,
    price: 1000,
  },
  {
    id: 2,
    price: 5000,
  },
  {
    id: 3,
    price: 3000,
  },
  {
    id: 4,
    price: 1500,
  },
];

const priceText = document.querySelectorAll(
  '.price, .text-price-five, .description-overhead, .div-price'
);

priceText.forEach(el => {
  const id = +el.dataset.id;
  const product = prices.find(price => price.id === id);
  if (!product) return;

  el.insertAdjacentHTML(
    'beforeend',
    `<span class="price-sum price-five price">${product.price} грн.</span>`
  );
});
