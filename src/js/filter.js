document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const content = document.getElementById(targetId);
    content.hidden = !content.hidden;
  });
});
