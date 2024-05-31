const swiper = new Swiper('.swiper-container-card', {
        
        loop: true,

       
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

       
});


document.addEventListener('DOMContentLoaded', () => {
   
    const navItems = document.querySelectorAll('.card-product-sub__item');

    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
           
            navItems.forEach(nav => nav.classList.remove('active'));

           
            item.classList.add('active');
        });
    });
});