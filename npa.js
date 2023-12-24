const npagallary = new Swiper('.npagallary', {
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    pagination: {
        el: '.npa-pagination',
        clickable:true,
      },

    slidesPerView: 4,
    spaceBetween: 0,

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      885: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 1,
      },
    }

  });