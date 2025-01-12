const galleryImages = document.querySelectorAll('.gallery');

galleryImages.forEach(gallery => {
  gallery.addEventListener('click', event => {
    const largeImg =
      event.target.getAttribute('srcset') || event.target.getAttribute('src');

    const instance = basicLightbox.create(
      `<img src="${largeImg}" width="800" height="600">`
    );

    instance.show();
  });
});
