import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import products from '/data/products.js';

window.addEventListener('load', () => {
  const mainLink = document.querySelector('a.main-lightbox');
  const mainPicture = document.getElementById('main-picture');
  const mainImg = mainPicture.querySelector('img');
  const mainSource = mainPicture.querySelector('source');
  const thumbnails = document.querySelectorAll('picture.thumbnail');

  let lightbox = null;

  function isMobile() {
    return window.innerWidth <= 767;
  }

  function getFullImages() {
    return products.map(product =>
      isMobile() ? product.mobile['2x'] : product.desktop['2x']
    );
  }

  function assignFullImageData() {
    const fullImages = getFullImages();
    thumbnails.forEach((thumb, i) => {
      thumb.dataset.full = fullImages[i];
    });
  }

  function buildGalleryLinks(startIndex = 0) {
    let gallery = document.querySelector('.lightbox-gallery');

    if (!gallery) {
      gallery = document.createElement('div');
      gallery.classList.add('lightbox-gallery');
      gallery.style.display = 'none';
      document.body.appendChild(gallery);
    } else {
      gallery.innerHTML = '';
    }

    const thumbsArr = Array.from(thumbnails);
    const reordered = thumbsArr
      .slice(startIndex)
      .concat(thumbsArr.slice(0, startIndex));

    reordered.forEach(thumb => {
      const fullUrl = thumb.dataset.full;
      const alt = thumb.querySelector('img')?.alt || '';
      const a = document.createElement('a');
      a.href = fullUrl;
      a.setAttribute('data-gallery', 'gallery');
      a.setAttribute('data-title', alt);
      gallery.appendChild(a);
    });

    return gallery;
  }

  function initLightbox(gallerySelector = '.lightbox-gallery a') {
    if (lightbox) {
      lightbox.destroy();
    }
    lightbox = new SimpleLightbox(gallerySelector, {
      captionsData: 'title',
      captionDelay: 250,
    });

    lightbox.on('show.simplelightbox', () => {
      document.body.style.overflow = 'hidden';
    });
    lightbox.on('close.simplelightbox', () => {
      document.body.style.overflow = '';
    });

    return lightbox;
  }

  // Обновляем основное большое изображение
  function updateMainImage(index) {
    assignFullImageData();

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
  }

  // Обработчик клика по миниатюре
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', e => {
      e.preventDefault();
      assignFullImageData();

      if (isMobile()) {
        const gallery = buildGalleryLinks(index);
        const lb = initLightbox('.lightbox-gallery a');

        setTimeout(() => {
          const galleryLinks = gallery.querySelectorAll('a');
          if (galleryLinks[0]) {
            galleryLinks[0].click();
          }
        }, 50);
      } else {
        updateMainImage(index);
      }
    });
  });

  // Клик по большому изображению
  mainLink.addEventListener('click', e => {
    if (isMobile()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();

    const activeIndex = Array.from(thumbnails).findIndex(t =>
      t.classList.contains('active')
    );
    assignFullImageData();
    const gallery = buildGalleryLinks(activeIndex >= 0 ? activeIndex : 0);
    const lb = initLightbox('.lightbox-gallery a');

    setTimeout(() => {
      const galleryLinks = gallery.querySelectorAll('a');
      if (galleryLinks[0]) {
        galleryLinks[0].click();
      }
    }, 50);
  });

  updateMainImage(0);

  window.addEventListener('resize', () => {
    const activeIndex = Array.from(thumbnails).findIndex(t =>
      t.classList.contains('active')
    );
    updateMainImage(activeIndex >= 0 ? activeIndex : 0);
  });
});
