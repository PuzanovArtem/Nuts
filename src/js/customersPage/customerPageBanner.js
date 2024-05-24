const swiperstore = new Swiper('.swiper__store', {
   direction: 'horizontal',
   slidesPerView: 2,
 
   breakpoints: {
     900: {
       slidesPerView: 2,
        autoHeight: true,
     },
     850: {
       slidesPerView: 2,
        autoHeight: true,
     },
      780: {
       slidesPerView: 1,
        autoHeight: true,
     },
       430: {
       slidesPerView: 1,
        autoHeight: true,
     },
          375: {
       slidesPerView: 1,
            autoHeight: true,
        spaceBetween: 60
     },
             320: {
       slidesPerView: 1,
            autoHeight: true,
        spaceBetween: 60
     },
   },
 
 });