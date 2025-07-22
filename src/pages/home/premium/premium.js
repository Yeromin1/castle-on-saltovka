import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

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
      renderBullet: function (index, className) {
        return `
          <li class="${className}">
            <svg class="ball-icon" width="4" height="4">
              <use href="./img/icons.svg#icon-circle"></use>
            </svg>
          </li>`;
      },
    },
  });
});
