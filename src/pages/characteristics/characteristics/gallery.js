import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

window.addEventListener('load', () => {
  const mainLink = document.querySelector('a.main-lightbox');
  const mainPicture = document.getElementById('main-picture');
  const mainImg = mainPicture.querySelector('img');
  const mainSource = mainPicture.querySelector('source');
  const thumbnails = document.querySelectorAll('picture.thumbnail');
  const lightboxContainer = document.querySelector('.lightbox-gallery');

  let lightbox;

  function rebuildLightboxGallery(clickedIndex) {
    const items = Array.from(thumbnails);
    const reordered = [
      ...items.slice(clickedIndex),
      ...items.slice(0, clickedIndex),
    ];

    lightboxContainer.innerHTML = '';

    reordered.forEach(thumb => {
      const fullUrl = thumb.dataset.full;
      const alt = thumb.querySelector('img')?.alt || '';
      const a = document.createElement('a');
      a.href = fullUrl;
      a.setAttribute('data-gallery', 'gallery');
      a.setAttribute('data-title', alt);
      lightboxContainer.appendChild(a);
    });

    if (lightbox) {
      lightbox.destroy();
    }
    lightbox = new SimpleLightbox('[data-gallery="gallery"]', {
      captionsData: 'title',
      captionDelay: 250,
    });
  }

  function updateMainImage(index) {
    const thumb = thumbnails[index];
    if (!thumb) return;

    const thumbSource = thumb.querySelector('source');
    const thumbImg = thumb.querySelector('img');

    if (mainSource && thumbSource) {
      mainSource.srcset = thumbSource.srcset;
      mainSource.media = thumbSource.media;
    } else if (mainSource) {
      mainSource.removeAttribute('srcset');
      mainSource.removeAttribute('media');
    }

    mainImg.src = thumbImg.src;
    mainImg.alt = thumbImg.alt;

    mainLink.href = thumb.dataset.full;

    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');

    rebuildLightboxGallery(index);
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', e => {
      e.preventDefault();
      updateMainImage(index);
    });
  });

  updateMainImage(0);
});
