import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

window.addEventListener('load', () => {
  const mainLink = document.querySelector('a.main-lightbox');
  const mainPicture = document.getElementById('main-picture');
  const mainImg = mainPicture.querySelector('img');
  const mainSource = mainPicture.querySelector('source');
  const thumbnails = document.querySelectorAll('picture.thumbnail');

  let lightbox;

  const basePath = window.location.pathname.includes('/castle-on-saltovka/')
    ? '/castle-on-saltovka'
    : '';

  const fullImages = [
    `${basePath}/img/pages/home/popular/mobile/GoldenSoftOffice@2x.jpg`,
    `${basePath}/img/pages/home/popular/mobile/GoldenSoft2Hotel@2x.jpg`,
    `${basePath}/img/pages/home/popular/mobile/GoldenSoft2Office@2x.jpg`,
    `${basePath}/img/pages/home/popular/mobile/GoldenSoftHotel@2x.jpg`,
  ];

  // Присваиваем data-full динамически
  thumbnails.forEach((thumb, index) => {
    thumb.dataset.full = fullImages[index];
  });

  function rebuildLightboxGallery(clickedIndex) {
    const items = Array.from(thumbnails);
    const reordered = [
      ...items.slice(clickedIndex),
      ...items.slice(0, clickedIndex),
    ];

    let lightboxGallery = document.querySelector('.lightbox-gallery');

    if (!lightboxGallery) {
      lightboxGallery = document.createElement('div');
      lightboxGallery.classList.add('lightbox-gallery');
      lightboxGallery.hidden = true;
      document.body.appendChild(lightboxGallery);
    } else {
      lightboxGallery.innerHTML = '';
    }

    reordered.forEach(thumb => {
      const fullUrl = thumb.dataset.full;
      const alt = thumb.querySelector('img')?.alt || '';
      const a = document.createElement('a');
      a.href = fullUrl;
      a.setAttribute('data-gallery', 'gallery');
      a.setAttribute('data-title', alt);
      lightboxGallery.appendChild(a);
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
