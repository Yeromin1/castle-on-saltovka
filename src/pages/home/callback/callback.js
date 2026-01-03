import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import validator from 'validator';

const form = document.querySelector('.form-callback');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = form.elements.userName.value.trim().toUpperCase();
  const phoneRaw = form.elements.phone.value.trim();

  if (userName === '' || phoneRaw === '') {
    iziToast.error({
      title: 'Помилка',
      message: 'Усі поля форми мають бути заповнені',
      position: 'topCenter',
    });
    return;
  }

  // Имя — только буквы
  const isValidName = [...userName].every(char => isNaN(char));

  if (!isValidName) {
    iziToast.warning({
      title: 'Невірне імʼя',
      message: 'Імʼя повинно містити тільки букви',
      position: 'topCenter',
    });
    return;
  }

  const phone = phoneRaw.replace(/[^\d+]/g, '');

  // ВАЛИДАЦИЯ ДЛЯ ВСЕХ СТРАН или uk-UA
  if (!validator.isMobilePhone(phone, 'uk-UA')) {
    iziToast.warning({
      title: 'Невірний телефон',
      message: 'Введіть коректний номер телефону +XXXXXXXXXXX',
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
