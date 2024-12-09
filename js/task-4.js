'use strict';

const regForm = document.querySelector('.login-form');
regForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    let propertyForm = {
      Email: form.elements.email.value.trim(),
      Password: form.elements.password.value.trim(),
    };
    console.log(propertyForm);
    form.reset();
  }
}
