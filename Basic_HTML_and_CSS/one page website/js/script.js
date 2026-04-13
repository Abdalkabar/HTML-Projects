let currentImageIndex = 0;
let galleryImages = [];

document.addEventListener('DOMContentLoaded', function () {
    // Get all gallery images
    galleryImages = document.querySelectorAll('.gallery-img');
    
    // Add click event listeners to all gallery images
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function () {
            currentImageIndex = index;
            openLightbox(img.src, img.alt);
        });
    });

    // Close lightbox when clicking outside the image
    const modal = document.getElementById('lightboxModal');
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (event) {
        if (modal.classList.contains('active')) {
            if (event.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (event.key === 'ArrowRight') {
                changeSlide(1);
            } else if (event.key === 'Escape') {
                closeLightbox();
            }
        }
    });
});

function openLightbox(imageSrc, imageAlt) {
    const modal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightboxCaption.textContent = imageAlt;
    
    modal.classList.add('active');
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('active');
}

function changeSlide(n) {
    currentImageIndex += n;
    
    // Wrap around
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    const currentImage = galleryImages[currentImageIndex];
    openLightbox(currentImage.src, currentImage.alt);
}
