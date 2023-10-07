const form = document.querySelector('.user__form');
const inputFields = form.querySelectorAll('.input-field');
const noteDescription = form.querySelector('.note-description');
const submitButton = document.querySelector('.button-do-order');

export const handlerErrorsInput = () => {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkBlank();
  });
};

// const inputName = form.querySelector('#firstName');
// const inputLastName = form.querySelector('#lastName');
// const inputEmail = form.querySelector('#email');
// const inputPhone = form.querySelector('#phone');
// const inputInn = form.querySelector('#inn');

export const checkBlank = () => {
  removeValidation();
  inputFields.forEach((field) => {
    if (!field.value) {
      generateErrorBlank(field);
    }
  });
};

export const removeValidation = () => {
  const errors = form.querySelectorAll('.error-message');
  errors.forEach((error) => {
    error.remove();
  });
};

export const generateErrorBlank = (field) => {
  let text = '';
  if (field.id === 'firsName') {
    text = '«Укажите имя»';
  }
  if (field.id === 'lastName') {
    text = 'Введите фамилию';
  }
  if (field.id === 'email') {
    text = 'Укажите электронную почту';
  }
  if (field.id === 'phone') {
    text = 'Укажите номер телефона';
  }
  if (field.id === 'inn') {
    noteDescription.classList.add('hidden');
    text = 'Укажите ИНН';
  }

  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.innerHTML = text;
  field.parentNode.appendChild(errorMessage);
};
