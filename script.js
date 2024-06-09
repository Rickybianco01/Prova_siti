/* script.js */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to section
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    // Add event listeners to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                scrollToSection(target);
            }
        });
    });

    // Lightbox effect for gallery images
    const images = document.querySelectorAll('.image-grid img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            openLightbox(this);
        });
    });

    function openLightbox(image) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    }

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Per favore compila tutti i campi.');
        } else {
            alert('Messaggio inviato con successo!');
            form.reset();
        }
    });
});
