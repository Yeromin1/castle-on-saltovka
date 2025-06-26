const modal = document.getElementById('reviewModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const showMoreBtn = document.getElementById('showMoreBtn');
const starRating = document.getElementById('starRating');

let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let currentVisible = 3;
let currentRating = 0;

// Открытие/закрытие модалки
openModalBtn.onclick = () => (modal.style.display = 'flex');
closeModalBtn.onclick = () => (modal.style.display = 'none');
window.onclick = e => {
  if (e.target == modal) modal.style.display = 'none';
};

// Рейтинг
starRating.innerHTML = '★'
  .repeat(5)
  .split('')
  .map((star, i) => `<span data-index="${i}">${star}</span>`)
  .join('');

starRating.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    currentRating = parseInt(e.target.dataset.index) + 1;
    updateStars();
  }
});

function updateStars() {
  [...starRating.children].forEach((star, i) =>
    star.classList.toggle('selected', i < currentRating)
  );
}

// Отправка отзыва
reviewForm.onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value;

  const comment = document.getElementById('commentInput').value;

  if (currentRating === 0) {
    alert('Поставьте оценку');
    return;
  }

  const review = {
    id: Date.now(),
    name,
    comment,
    rating: currentRating,
    date: new Date().toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    comments: [],
  };

  reviews.unshift(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  modal.style.display = 'none';
  reviewForm.reset();
  currentRating = 0;
  updateStars();
  renderReviews();
};

// Отображение отзывов
function renderReviews() {
  reviewsContainer.innerHTML = '';
  const visibleReviews = reviews.slice(0, currentVisible);

  visibleReviews.forEach(review => {
    const el = document.createElement('div');
    el.className = 'review';

    const commentCount = review.comments.length;

    el.innerHTML = `
      <ul class="list-review">
        <li class="item-review-name">${review.name}</li>
        <li class="item-review-date">${review.date}</li>
        <li class="item-stars-view">
          ${Array.from(
            { length: 5 },
            (_, i) => `
            <svg class="icon-star ${
              i < review.rating ? 'filled' : 'outlined'
            }" width="20" height="20">
              <use href="./img/icons.svg#icon-frame"></use>
            </svg>
          `
          ).join('')}
        </li>
      </ul>
      <p>${review.comment}</p>

      <a href="#" class="reply-btn" data-id="${review.id}">Відповісти</a> |
      <a href="#" class="toggle-comments" data-id="${
        review.id
      }">Коментарі (${commentCount})</a>

      <div class="comments" style="display: none;">
        ${review.comments
          .map(
            c =>
              `<div class="comment"><strong>${c.name}</strong>: ${c.text}</div>`
          )
          .join('')}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <input type="text" class="reply-text" placeholder="Ваш коментар" />
        <button class="submit-reply">Надіслати</button>
      </div>
    `;

    // Кнопка "Ответить"
    el.querySelector('.reply-btn').addEventListener('click', e => {
      e.preventDefault();
      const form = el.querySelector('.reply-form');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });

    // Кнопка "Комментарии"
    el.querySelector('.toggle-comments').addEventListener('click', e => {
      e.preventDefault();
      const commentBlock = el.querySelector('.comments');
      commentBlock.style.display =
        commentBlock.style.display === 'none' ? 'block' : 'none';
    });

    // Отправка комментария
    el.querySelector('.submit-reply').addEventListener('click', () => {
      const name = el.querySelector('.reply-name').value.trim();
      const text = el.querySelector('.reply-text').value.trim();
      if (!name || !text) return alert('Введите имя и комментарий');

      const reviewId = parseInt(el.querySelector('.reply-btn').dataset.id);
      const review = reviews.find(r => r.id === reviewId);
      review.comments.push({ name, text });

      localStorage.setItem('reviews', JSON.stringify(reviews));
      renderReviews(); // перерисовать
    });

    reviewsContainer.appendChild(el);
  });

  showMoreBtn.style.display =
    reviews.length > currentVisible ? 'inline-block' : 'none';
}

// Показать ещё
showMoreBtn.onclick = () => {
  currentVisible += 3;
  renderReviews();
};

// При загрузке страницы
renderReviews();
