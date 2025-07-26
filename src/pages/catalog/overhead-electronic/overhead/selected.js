// === СОРТИРОВКА ПО ЦЕНЕ ===
document.querySelectorAll('.item-equipment').forEach(item => {
  item.addEventListener('click', () => {
    const sortType = item.textContent.trim();

    const itemsContainer = document.querySelector('.list-overhead');
    const items = Array.from(itemsContainer.querySelectorAll('.item-overhead'));

    const getPrice = item => {
      const priceText = item.querySelector('.price')?.textContent || '';
      return parseInt(priceText.replace(/\D/g, ''), 10);
    };

    if (sortType === 'Від дешевих до дорогих') {
      items.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortType === 'Від дорогих до дешевих') {
      items.sort((a, b) => getPrice(b) - getPrice(a));
    }

    items.forEach(item => itemsContainer.appendChild(item));
  });
});
