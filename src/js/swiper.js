// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.popular-swiper', {
//     loop: true,
//     slidesPerView: 1,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // Premium swiper
  const premiumSwiper = new Swiper('.premium-swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.premium-swiper .swiper-button-next',
      prevEl: '.premium-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.premium-swiper .swiper-pagination',
      clickable: true,
    },
  });

  // Popular swiper
  const popularSwiper = new Swiper('.popular-swiper', {
    loop: false,
    slidesPerView: 3,
    navigation: {
      nextEl: '.popular-swiper .swiper-button-next',
      prevEl: '.popular-swiper .swiper-button-prev',
    },
  });
});
