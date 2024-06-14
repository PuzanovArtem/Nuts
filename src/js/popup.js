var openPopupButtons = document.querySelectorAll('.open-popup-btn');
var closePopupButtons = document.querySelectorAll('.popup__close-btn');

openPopupButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popupId = this.getAttribute('data-popup');
        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
            document.body.classList.add('no-scroll'); // Додаємо клас для блокування скролінгу
        }
    });
});

closePopupButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popup = this.closest('.popup');
        if (popup) {
            popup.style.display = 'none';
            document.body.classList.remove('no-scroll'); // Видаляємо клас для відновлення скролінгу
        }
    });
});

window.addEventListener('click', function(event) {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        if (event.target == popup) {
            popup.style.display = 'none';
            document.body.classList.remove('no-scroll'); // Видаляємо клас для відновлення скролінгу
        }
    });
});


