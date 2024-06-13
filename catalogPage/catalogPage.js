

document.addEventListener('DOMContentLoaded', function () {
  const selected = document.querySelector('.filter__select-selected');
  const items = document.querySelector('.filter__select-items');

  if (selected && items) {
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
      if (!event.target.closest('.filter__custom-select')) {
        items.style.display = 'none';
      }
    });
  } else {
    console.error('Elements not found: .filter__select-selected or .filter__select-items');
  }
});


const select = document.querySelector('.filter__select-selected-second');
            const item = document.querySelector('.filter__select-items-second');

            select.addEventListener('click', function () {
                item.style.display = item.style.display === 'block' ? 'none' : 'block';
            });

            item.addEventListener('click', function (event) {
                if (event.target && event.target.matches('div[data-value]')) {
                    select.textContent = event.target.textContent;
                    item.style.display = 'none';
                }
            });

            document.addEventListener('click', function (event) {
                if (!event.target.closest('.filter__custom-select-second')) {
                    item.style.display = 'none';
                }
            });



//////load-more
            
const loadMoreBtn = document.querySelector('.catalog-page-product__btn');
const hiddenItems = document.querySelectorAll('.catalog-page-product__item.hidden');
let hiddenIndex = 0;


loadMoreBtn.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        if (hiddenIndex < hiddenItems.length) {
            hiddenItems[hiddenIndex].classList.remove('hidden');
            hiddenIndex++;
        }
    }

    
    if (hiddenIndex >= hiddenItems.length) {
        loadMoreBtn.style.display = 'none';
    }
});
