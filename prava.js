const gallary = new Swiper('.gallary', {
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    pagination: {
        el: '.pagination',
        clickable:true,
      },
      slidesPerView: 3,
      spaceBetween: 0,
      
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }
  
    }
  

  
  
  );
