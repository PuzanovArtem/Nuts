import"./header-BsCelfQm.js";import"./main-DFD8TN7p.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".filter__select-selected"),t=document.querySelector(".filter__select-items");e&&t?(e.addEventListener("click",function(){t.style.display=t.style.display==="block"?"none":"block"}),t.addEventListener("click",function(n){n.target&&n.target.matches("div[data-value]")&&(e.textContent=n.target.textContent,t.style.display="none")}),document.addEventListener("click",function(n){n.target.closest(".filter__custom-select")||(t.style.display="none")})):console.error("Elements not found: .filter__select-selected or .filter__select-items")});const i=document.querySelector(".filter__select-selected-second"),c=document.querySelector(".filter__select-items-second");i.addEventListener("click",function(){c.style.display=c.style.display==="block"?"none":"block"});c.addEventListener("click",function(e){e.target&&e.target.matches("div[data-value]")&&(i.textContent=e.target.textContent,c.style.display="none")});document.addEventListener("click",function(e){e.target.closest(".filter__custom-select-second")||(c.style.display="none")});const s=document.querySelector(".catalog-page-product__btn"),o=document.querySelectorAll(".catalog-page-product__item.hidden");let l=0;s.addEventListener("click",()=>{for(let e=0;e<3;e++)l<o.length&&(o[l].classList.remove("hidden"),l++);l>=o.length&&(s.style.display="none")});
