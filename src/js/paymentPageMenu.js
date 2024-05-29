function changeTab(tabId) {
    // Скрываем все вкладки
    const tabContents = document.getElementsByClassName("tab__content");
    for (let tabContent of tabContents) {
      tabContent.style.display = "none";
    }
  
    // Убираем класс "active" у всех кнопок
    const buttons = document.getElementsByClassName("tab-button");
    for (let button of buttons) {
      button.classList.remove("active");
    }
  
    // Отображаем выбранную вкладку
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = "flex";
    }
  
    // Добавляем класс "active" только для выбранной кнопки
    const selectedButton = document.querySelector(`button[onclick="changeTab('${tabId}')"]`);
    if (selectedButton) {
      selectedButton.classList.add("active");
    }
  }

