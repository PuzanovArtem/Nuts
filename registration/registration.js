//    const selected = document.querySelector('.filter__select-selected');
//         const customSelect = document.querySelector('.filter__custom-select');
//         const items = document.querySelector('.filter__select-items');

//         selected.addEventListener('click', function () {
//             customSelect.classList.toggle('is-active');
//         });

//         items.addEventListener('click', function (event) {
//             if (event.target && event.target.matches('div[data-value]')) {
//                 selected.textContent = event.target.textContent;
//                 customSelect.classList.remove('is-active');
//             }
//         });

//         document.addEventListener('click', function (event) {
//             if (!event.target.closest('.filter__custom-select')) {
//                 customSelect.classList.remove('is-active');
//             }
//         });

let select = function () {
    const selectCust = document.querySelectorAll('.filter__custom-select');
    const selectItems = document.querySelectorAll('.filter__select-item');

    selectCust.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItems.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.classList.toggle('is-active');
    }

    function selectChoose() {


        let text = this.innerText;
        let select = this.closest('.select');
        let currentText = select.querySelector('.filter__select-selected');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();


 const radioButtons = document.querySelectorAll('input[name="option"]');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                if (this.value === '1') {
                    content1.style.display = 'block';
                    content2.style.display = 'none';
                } else if (this.value === '2') {
                    content1.style.display = 'none';
                    content2.style.display = 'block';
                }
            }
        });
    });


function loadFile(event) {
            var image = document.getElementById('uploadedImage');
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = 'block';
            document.querySelector('.upload-text').style.display = 'none';
};


const regNavs = document.querySelectorAll(".registration__nav-item");
const regSections = document.querySelectorAll(".registration__upload-wrapper");
const submitSimple = document.getElementById('submit-simple');
    const submitFop = document.getElementById('submit-fop');

regNavs.forEach(regNav => {
    regNav.addEventListener("click", () => {
    
        regNavs.forEach(item => item.classList.remove('active'))
    
        regSections.forEach(regSection => regSection.classList.remove('active'))

        const targetReg = regNav.getAttribute('data-target');
        document.getElementById(targetReg).classList.add('active');
        
        regNav.classList.add("active");

        if (targetReg === 'fisface') {
                submitSimple.classList.add('active');
                submitFop.classList.remove('active');
            } else if (targetReg === 'yurface') {
                submitSimple.classList.remove('active');
                submitFop.classList.add('active');
            }
    });
})