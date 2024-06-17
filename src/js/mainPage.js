import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

    


    const swiperProduct = new Swiper(".swiper-container-product", {
       
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


    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });


      const swiperAbout = new Swiper(".swiper-container-about", {
       
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






////////////

// function displayProducts(products) {
//     const productList = document.getElementById('product-list');

//     products.forEach(product => {
//       const productItem = document.createElement('li');
//       productItem.className = 'main-page-product__item';
//       productItem.innerHTML = `
       
//         <div class="swiper-container swiper-container-product">
//           <div class="swiper-wrapper">
//             <div class="swiper-slide"><img
//                   src="/src/img/productMPfirst.jpg"
//                   width="108"
//                   height="234"
//                   alt="Image 1"
//                   class="productMPfirst"
//                   loading="lazy"
//                 />
//               </div>
//               <div class="swiper-slide"><img
//                   src="/src/img/productMPfirst.jpg"
//                   width="108"
//                   height="234"
//                   alt="Image 2"
//                   class="productMPfirst"
//                   loading="lazy"
//                 />
//               </div>
//               <div class="swiper-slide"><img
//                   src="/src/img/productMPfirst.jpg"
//                   width="108"
//                   height="234"
//                   alt="Image 3"
//                   class="productMPfirst"
//                   loading="lazy"
//                 />
//               </div>
//           </div>
//           <div class="swiper-button-next main-page-product__swiper-button-next"><img src="/src/img/icons/right-arrow.svg" alt="arrow" width="23" height="23" class="main-page-product__btn-arrow" /></div>
//           <div class="main-page-product__swiper-button-zoom open-popup-btn" data-popup="popupProduct"><img src="/src/img/icons/zoom.svg" alt="zoom" width="55" height="55" class="main-page-product__swiper-button-zoom-icon" /></div>
//           <div class="swiper-button-prev main-page-product__swiper-button-prev"><img src="/src/img/icons/left-arrow.svg" alt="arrow" width="23" height="23" class="main-page-product__btn-arrow" /></div>
//         </div>
//         <div class="main-page-product__item-info">
//           <h3 class="main-page-product__item-info-title">${product.title}</h3>
//           <p class="main-page-product__item-info-art">Арт: ${product.artNumber}</p>
//           <p class="main-page-product__item-info-subtitle">${product.subtitle}</p>
//           <div class="main-page-product__item-info-deliver-wrapper">
//             <div class="main-page-product__item-info-kg">
//               <img src="/src/img/icons/food-scale-tool.svg" alt="tool">
//               <div class="main-page-product__item-info-kg-wrapper">
//                 <p class="main-page-product__item-info-kg-text">Масса:</p>
//                 <p class="main-page-product__item-info-kg-numb">${product.weight}</p>
//               </div>
//             </div>
//             <div class="main-page-product__item-info-kg">
//               <img src="/src/img/icons/bag-card.svg" alt="bag">
//               <div class="main-page-product__item-info-kg-wrapper">
//                 <p class="main-page-product__item-info-kg-text">Упаковка</p>
//                 <p class="main-page-product__item-info-kg-numb">${product.package}</p>
//               </div>
//             </div>
//           </div>
//           <div class="main-page-product__item-price-wrapper">
//             <p class="main-page-product__item-price">Цена: <span class="main-page-product__item-price-sale">${product.salePrice}</span><span class="main-page-product__item-price-old"> ${product.oldPrice}</span></p>
//             <a href="/cardProductPage/index.html" class="main-page-product__item-btn main--btn">Купить</a>
//           </div>
//         </div>
//       `;
//       productList.appendChild(productItem);
//     });
//   } 

// const apiUrl = 'https://666b067e7013419182d1f622.mockapi.io/api/nuts/product/product';

 
//   async function fetchProducts() {
//     try {
//       const response = await fetch(apiUrl);
//         const products = await response.json();
//         console.log(products);
//       displayProducts(products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   }



  
//   fetchProducts();

