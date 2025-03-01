const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value;
  const pwd = form.elements.password.value;

  if (email === '' || pwd === '') {
    alert('всі поля повинні бути заповнені');
  }

const userData = {
    email,
    pwd,
}

console.log(userData);

  form.reset();
}
