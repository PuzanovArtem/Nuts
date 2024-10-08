import "../src/js/header.js";


document.addEventListener('DOMContentLoaded', function() {
    const deliveryMethods = document.querySelectorAll('input[name="delivery"]');
    const postDetails = document.getElementById('post-details');
    const courierDetails = document.getElementById('courier-details');
    const companyField = document.getElementById('company').closest('label');
    const contactNameField = document.getElementById('contact-name').closest('label');
    const nameField = document.getElementById('name').closest('label');
    const emailField = document.getElementById('email').closest('label');
    const phoneField = document.getElementById('phone').closest('label');

    function showDetails() {
        postDetails.style.display = 'none';
        courierDetails.style.display = 'none';
        companyField.style.display = 'none';
        contactNameField.style.display = 'none';
        nameField.style.display = 'none';
        emailField.style.display = 'none';
        phoneField.style.display = 'none';

        const selectedMethod = document.querySelector('input[name="delivery"]:checked').value;
        
        if (selectedMethod === 'post' || selectedMethod === 'courier') {
            postDetails.style.display = selectedMethod === 'post' ? 'block' : 'none';
            courierDetails.style.display = selectedMethod === 'courier' ? 'block' : 'none';
            nameField.style.display = 'block';
            emailField.style.display = 'block';
            phoneField.style.display = 'block';
        } else if (selectedMethod === 'pickup') {
            companyField.style.display = 'block';
            contactNameField.style.display = 'block';
            emailField.style.display = 'block';
            phoneField.style.display = 'block';
        }
    }

    deliveryMethods.forEach(method => {
        method.addEventListener('change', showDetails);
    });

    showDetails();
});

