const algogallary = new Swiper('.algogallary', {
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    pagination: {
        el: '.algo-pagination',
      },

    slidesPerView: 1,
    spaceBetween: 0,
  });