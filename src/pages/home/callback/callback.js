const form = document.querySelector('.form-callback');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = form.elements.userName.value.trim().toUpperCase();
  const phone = form.elements.phone.value.trim();

  if (userName === '' || phone === '') {
    alert('Усі поля форми мають бути заповнені');
    return;
  }

  const isValidName = [...userName].every(char => isNaN(char));

  const isValidPhone = [...phone].every(char => !isNaN(char));

  if (!isValidName) {
    alert('Імʼя повинно містити тільки букви');
    return;
  }

  if (!isValidPhone) {
    alert('Телефон повинен містити тільки цифри');
    return;
  }

  const formData = {
    userName: userName,
    phone: phone,
  };

  console.log(formData);

  form.reset();
});
