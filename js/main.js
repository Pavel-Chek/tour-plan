var mySwiper = new Swiper('.swiper-container', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
    effect: "coverflow",
  })