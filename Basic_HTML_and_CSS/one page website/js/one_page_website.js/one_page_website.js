document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.gallery-image');
    var modal = document.getElementById('lightboxModal');
    var modalImage = document.getElementById('lightboxImage');
    var caption = document.getElementById('lightboxCaption');
    var closeBtn = document.querySelector('.close-btn');

    function openLightbox(image) {
        modal.style.display = 'flex';
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        caption.textContent = image.alt;
    }

    function closeLightbox() {
        modal.style.display = 'none';
    }

    images.forEach(function (image) {
        image.style.cursor = 'pointer';
        image.addEventListener('click', function () {
            openLightbox(image);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    modal.addEventListener('click', function (event) {
        if (event.target === modal || event.target === closeBtn) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});
