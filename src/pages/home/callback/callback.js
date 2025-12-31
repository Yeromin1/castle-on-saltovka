import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-callback');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = form.elements.userName.value.trim().toUpperCase();
  const phone = form.elements.phone.value.trim();

  if (userName === '' || phone === '') {
    iziToast.error({
      title: 'Помилка',
      message: 'Усі поля форми мають бути заповнені',
      position: 'topCenter',
    });
    return;
  }

  const isValidName = [...userName].every(char => isNaN(char));
  const isValidPhone = [...phone].every(char => !isNaN(char));

  if (!isValidName) {
    iziToast.warning({
      title: 'Невірне імʼя',
      message: 'Імʼя повинно містити тільки букви',
      position: 'topCenter',
    });
    return;
  }

  if (!isValidPhone) {
    iziToast.warning({
      title: 'Невірний телефон',
      message: 'Телефон повинен містити тільки цифри',
      position: 'topCenter',
    });
    return;
  }

  const formData = {
    userName,
    phone,
  };

  console.log(formData);

  iziToast.success({
    title: 'Готово',
    message: 'Ми скоро Вам передзвонимо 😊',
    position: 'topCenter',
  });

  form.reset();
});
