const loader = document.querySelector('.loader');

loader.classList.remove('hidden');

window.addEventListener('load', () => {
  loader.classList.add('hidden');
});
