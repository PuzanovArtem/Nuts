 
 function openNav() {
        document.getElementById("sidebar").style.width = "260px";
        document.getElementById("sidebar").style.padding = "60px 15px";
        document.getElementById("main").style.marginLeft = "260px";
        document.querySelector(".openbtn").style.display = "none"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("sidebar").style.padding = "0 0";
    document.querySelector(".openbtn").style.display = "block"
}




 window.openNav = openNav;
            window.closeNav = closeNav;

const sidebarItems = document.querySelectorAll('.sidebar__item');
const sidebarSections = document.querySelectorAll(".account-content")
const startContent = document.querySelector(".start-content");


    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
           
            startContent.style.display = "none";
            sidebarItems.forEach(nav => nav.classList.remove('active'));

           
            item.classList.add('active');

             sidebarSections.forEach(section => section.classList.remove('active'));

            
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        

            
        });
    });


            function addCloseEventListener() {
                const sidebarItems = document.querySelectorAll('.sidebar__item');
                if (window.innerWidth < 992) {
                    sidebarItems.forEach(item => {
                        item.addEventListener('click', closeNav);
                    });
                } else {
                    sidebarItems.forEach(item => {
                        item.removeEventListener('click', closeNav);
                    });
                }
            }

           
            addCloseEventListener();

           
window.addEventListener('resize', addCloseEventListener);

let previousWidth = window.innerWidth;

window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;

    if ((previousWidth >= 992 && currentWidth < 992) || (previousWidth < 992 && currentWidth >= 992)) {
        location.reload();
    }

    previousWidth = currentWidth;
});



function loadFile(event) {
            var image = document.getElementById('uploadedImage');
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = 'block';
            document.querySelector('.upload-text').style.display = 'none';
};
        

   