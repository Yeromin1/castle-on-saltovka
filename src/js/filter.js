document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const content = document.getElementById(targetId);
    const icon = button.querySelector('.icon-filter');

    if (content) {
      content.hidden = !content.hidden;
    }

    if (icon) {
      icon.classList.toggle('icon-filter-animation');
    }
  });
});

// document.querySelectorAll('.filter-toggle').forEach(button => {
//   button.addEventListener('click', () => {
//     const targetId = button.dataset.target;
//     const content = document.getElementById(targetId);
//     content.hidden = !content.hidden;
//   });
// });
