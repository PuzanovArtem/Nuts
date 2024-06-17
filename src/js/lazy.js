// document.addEventListener("DOMContentLoaded", function() {
//     const lazyImages = document.querySelectorAll('.lazy');
  
//     if ('IntersectionObserver' in window) {
//       let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             let lazyImage = entry.target;
//             lazyImage.src = lazyImage.dataset.src;
//             lazyImage.classList.add('lazy-loaded');
//             lazyImageObserver.unobserve(lazyImage);
//           }
//         });
//       });
  
//       lazyImages.forEach(function(lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//       });
//     } else {
//       // Fallback for browsers without IntersectionObserver support
//       let lazyLoadThrottleTimeout;
//       function lazyLoad() {
//         if (lazyLoadThrottleTimeout) {
//           clearTimeout(lazyLoadThrottleTimeout);
//         }
  
//         lazyLoadThrottleTimeout = setTimeout(function() {
//           let scrollTop = window.pageYOffset;
//           lazyImages.forEach(function(img) {
//             if (img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.add('lazy-loaded');
//             }
//           });
//           if (lazyImages.length == 0) {
//             document.removeEventListener("scroll", lazyLoad);
//             window.removeEventListener("resize", lazyLoad);
//             window.removeEventListener("orientationchange", lazyLoad);
//           }
//         }, 20);
//       }
  
//       document.addEventListener("scroll", lazyLoad);
//       window.addEventListener("resize", lazyLoad);
//       window.addEventListener("orientationchange", lazyLoad);
//     }
//   });
  
