// Initialize EmailJS
(function() {
    emailjs.init("K38Rn5wKVcl4iwvaA"); // EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        sendMail();
    });
});

function sendMail() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Form validation can be added here if needed
    
    const serviceID = 'service_qc18i8k'; // EmailJS service ID
    const templateID = 'template_df0kfbq'; // EmailJS template ID
    
    emailjs.sendForm(serviceID, templateID, form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message, please try again.');
        });
}
