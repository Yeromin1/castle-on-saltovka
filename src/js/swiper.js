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
  // const popularSwiper = new Swiper('.popular-swiper', {
  //   loop: false,
  //   slidesPerView: 3,
  //   navigation: {
  //     nextEl: '.popular-swiper .swiper-button-next',
  //     prevEl: '.popular-swiper .swiper-button-prev',
  //   },
  // });

  const popularSwiper = new Swiper('.popular-swiper', {
    loop: false,
    navigation: {
      nextEl: '.popular-swiper .swiper-button-next',
      prevEl: '.popular-swiper .swiper-button-prev',
    },
    slidesPerView: 'auto',
    breakpoints: {
      1158: {
        slidesPerView: 3,
      },
    },
  });
});
