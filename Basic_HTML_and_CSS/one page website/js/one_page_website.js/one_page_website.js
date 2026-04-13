const galleryItems = [
  { large: "images/beagle.jpg",  caption: "Beagle"             },
  { large: "images/golden.jpg",  caption: "Golden Retriever"   },
  { large: "images/yorkie.jpg",  caption: "Yorkshire Terrier"  }
];

let currentIndex = 0;

const lightbox    = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCap = document.getElementById("lightbox-caption");
const closeBtn    = document.getElementById("lightbox-close");
const prevBtn     = document.getElementById("lb-prev");
const nextBtn     = document.getElementById("lb-next");
const galleryCols = document.querySelectorAll(".gallery-grid .col");

lightboxImg.style.transition = "opacity 0.18s ease";

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src         = galleryItems[currentIndex].large;
  lightboxImg.alt         = galleryItems[currentIndex].caption;
  lightboxCap.textContent = galleryItems[currentIndex].caption;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightboxImage();
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  lightboxImg.style.opacity = "0";
  setTimeout(function () {
    lightboxImg.src         = galleryItems[currentIndex].large;
    lightboxImg.alt         = galleryItems[currentIndex].caption;
    lightboxCap.textContent = galleryItems[currentIndex].caption;
    lightboxImg.style.opacity = "1";
  }, 180);
}

galleryCols.forEach(function (col, i) {
  col.addEventListener("click", function () { openLightbox(i); });
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", function (e) {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape")     closeLightbox();
  if (e.key === "ArrowLeft")  showPrev();
  if (e.key === "ArrowRight") showNext();
});