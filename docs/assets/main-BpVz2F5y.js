import"./header-68GnE_Mh.js";console.log("footer");var o=document.querySelectorAll(".open-popup-btn"),i=document.querySelectorAll(".popup__close-btn");o.forEach(function(e){e.addEventListener("click",function(){var t=this.getAttribute("data-popup"),n=document.getElementById(t);n&&(n.style.display="block",document.body.classList.add("no-scroll"))})});i.forEach(function(e){e.addEventListener("click",function(){var t=this.closest(".popup");t&&(t.style.display="none",document.body.classList.remove("no-scroll"))})});window.addEventListener("click",function(e){var t=document.querySelectorAll(".popup");t.forEach(function(n){e.target==n&&(n.style.display="none",document.body.classList.remove("no-scroll"))})});new Swiper(".swiper-container-product",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",()=>{var e=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0});new Swiper(".gallery-top",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}})});new Swiper(".news__swiper",{direction:"horizontal",slidesPerView:3,breakpoints:{1920:{slidesPerView:3,spaceBetween:20},1100:{slidesPerView:2,spaceBetween:40},600:{slidesPerView:1,spaceBetween:40},400:{slidesPerView:1,spaceBetween:40},320:{slidesPerView:1,spaceBetween:60}},navigation:{nextEl:".news__swiper__btnnext",prevEl:".news__swiper__btnprev"}});
