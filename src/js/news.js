const swiperfreshnews = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
   slidesPerView: 3,
   breakpoints: {
      // when window width is >= 320px
      1920: {
        slidesPerView: 3,
        spaceBetween: 20
      },
     
      1100: {
        slidesPerView: 2,
        spaceBetween: 40
     },
    
       600: {
        slidesPerView: 1,
        spaceBetween: 40
     },
        400: {
        slidesPerView: 1,
        spaceBetween: 40
     },
           320: {
        slidesPerView: 1,
        spaceBetween: 60
      }
    },
   
    navigation: {
      nextEl: '.news__swiper__btnnext',
      prevEl: '.news__swiper__btnprev',
    },
    
  });