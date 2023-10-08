const form = document.querySelector('.user__form');
const inputFields = form.querySelectorAll('.input-field');
const noteDescription = form.querySelector('.note-description');
const submitButton = document.querySelector('.button-do-order');

export const checkBlank = () => {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    inputFields.forEach((field) => {
      const errorMessage = field.closest('.form-group').querySelector('.error-message');
      if (!field.value && !field.classList.contains('error') && !errorMessage) {
        generateErrorBlank(field);
      }
    });
  });
};

export const generateErrorBlank = (field) => {
  let text = '';
  if (field.id === 'firstName') {
    text = 'Укажите имя';
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
  field.parentNode.after(errorMessage);
};
