  const selected = document.querySelector('.header-top__select-selected');
        const customSelect = document.querySelector('.header-top__custom-select');
        const items = document.querySelector('.header-top__select-items');

        selected.addEventListener('click', function () {
            customSelect.classList.toggle('is-active');
        });

        items.addEventListener('click', function (event) {
            if (event.target && event.target.matches('div[data-value]')) {
                selected.textContent = event.target.textContent;
                customSelect.classList.remove('is-active');
            }
        });

        document.addEventListener('click', function (event) {
            if (!event.target.closest('.header-top__custom-select')) {
                customSelect.classList.remove('is-active');
            }
        });