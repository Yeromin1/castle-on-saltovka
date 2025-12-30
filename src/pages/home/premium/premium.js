import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

import prices from '../../../data/prices.js';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.premium-swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

const priceText = document.querySelectorAll('.price');

priceText.forEach(el => {
  const id = Number(el.dataset.id);
  const product = prices.find(price => price.id === id);
  if (!product) return;

  el.insertAdjacentHTML(
    'beforeend',
    `<span class="price-sum">${product.price} грн.</span>`
  );
});
