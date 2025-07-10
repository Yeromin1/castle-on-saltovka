const containerListEquipment = document.getElementById(
  'container-list-equipment'
);
const listEquipment = document.getElementById('list-equipment');
const selectedEquipment = document.getElementById('selected-equipment');
const selectedText = selectedEquipment.querySelector('.selected-equipment');
const iconClose = selectedEquipment.querySelector('.icon-close'); // SVG стрелка
const itemEquipment = document.querySelectorAll('.item-equipment');

// Клик по блоку выбора
selectedEquipment.addEventListener('click', e => {
  e.stopPropagation();
  listEquipment.classList.toggle('active');
  iconClose.classList.toggle('rotated'); // Поворот стрелки
});

// Клик по элементу списка
itemEquipment.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    selectedText.textContent = item.textContent;
    listEquipment.classList.remove('active');
    iconClose.classList.remove('rotated'); // Сброс поворота
  });
});

// Клик вне выпадающего списка — закрыть
document.addEventListener('click', () => {
  listEquipment.classList.remove('active');
  iconClose.classList.remove('rotated'); // Сброс поворота
});

// Переключение картинок
window.addEventListener('load', () => {
  const mainPicture = document.getElementById('main-picture');
  const mainImg = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnails li .thumbnail');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const thumbImg = thumb.querySelector('img').src;
      const thumbSrcset = thumb.querySelector('source').getAttribute('srcset');

      mainImg.src = thumbImg;
      const source = mainPicture.querySelector('source');
      if (source) source.setAttribute('srcset', thumbSrcset);

      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Пометить первую миниатюру как активную
  if (thumbnails[0]) thumbnails[0].classList.add('active');
});
