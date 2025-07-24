const listEquipment = document.getElementById('list-equipment');
const selectedEquipment = document.getElementById('selected-equipment');
const selectedText = selectedEquipment.querySelector('.selected-equipment');
const iconclose = selectedEquipment.querySelector('.icon-close'); // svG стрелка
const itemEquipment = document.querySelectorAll('.item-equipment');

// Клик по блоку выбора
selectedEquipment.addEventListener('click', e => {
  e.stopPropagation();
  listEquipment.classList.toggle('active');
  iconclose.classList.toggle('rotated'); // Поворот стрелки
});

// Клик по элементу списка
itemEquipment.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    selectedText.textContent = item.textContent;
    listEquipment.classList.remove('active');
    iconclose.classList.remove('rotated'); // Сброс поворота
  });
});

// Клик вне выпадающего списка - закрыть
document.addEventListener('click', () => {
  listEquipment.classList.remove('active');
  iconclose.classList.remove('rotated'); // Сброс поворота
});
