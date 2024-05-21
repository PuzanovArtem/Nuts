const selected = document.querySelector('.header-top__select-selected');
            const items = document.querySelector('.header-top__select-items');

            selected.addEventListener('click', function () {
                items.style.display = items.style.display === 'block' ? 'none' : 'block';
            });

            items.addEventListener('click', function (event) {
                if (event.target && event.target.matches('div[data-value]')) {
                    selected.textContent = event.target.textContent;
                    items.style.display = 'none';
                }
            });

            document.addEventListener('click', function (event) {
                if (!event.target.closest('.header-top__custom-select')) {
                    items.style.display = 'none';
                }
            });



            const menuBtn = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
  menuShadow.classList.toggle('menu--open');
  document.body.style.overflow = 'hidden';
    console.log("open");
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
  menuShadow.classList.remove('menu--open');
  document.body.style.overflow = 'auto';
    console.log("close");
});

menuShadow.addEventListener('click', (event) => {
    if (!menuList.contains(event.target)) {
        menuList.classList.remove('menu__list--open');
      menuShadow.classList.remove('menu--open');
       document.body.style.overflow = 'auto';
        console.log("close");
    }
});