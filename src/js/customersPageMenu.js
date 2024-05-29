
document.addEventListener("DOMContentLoaded", function () {
    // Получаем все кнопки вкладок и контенты вкладок
    const buttons = document.querySelectorAll(".menu__tab--button");
    const contents = document.querySelectorAll(".menu__tab--content");
  
    // Для каждой кнопки вкладки добавляем обработчик события click
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        // Получаем идентификатор вкладки из атрибута data-tab кнопки
        const tabId = this.getAttribute("data-tab");
  
        // Скрываем все вкладки и убираем класс "active" у всех кнопок
        contents.forEach(content => {
          content.style.display = "none";
        });
        buttons.forEach(btn => {
          btn.classList.remove("active");
        });
  
        // Находим вкладку, соответствующую нажатой кнопке, и делаем её видимой
        const tabToShow = document.getElementById(tabId);
        if (tabToShow) {
          tabToShow.style.display = "flex";
        }
  
        // Добавляем класс "active" только для нажатой кнопки
        this.classList.add("active");
      });
    });
  });


const swipermenu = new Swiper(".swiper__menu", {
  direction: "horizontal",
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
      spaceBetween: 60,
    },
    320: {
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 60,
    },
  },
});
