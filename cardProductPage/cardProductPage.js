import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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



   
    const navItems = document.querySelectorAll('.card-product-sub__item');
const sections = document.querySelectorAll(".card-product-sub__wrapper")
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
           
            navItems.forEach(nav => nav.classList.remove('active'));

           
            item.classList.add('active');

             sections.forEach(section => section.classList.remove('active'));

            
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });


//////// nav
    
