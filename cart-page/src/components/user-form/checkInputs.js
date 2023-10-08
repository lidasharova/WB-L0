const form = document.querySelector('.user__form');
const inputInn = document.querySelector('#inn');
const noteDescription = form.querySelector('.note-description');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputFirstName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');

export const checkInputs = () => {
  validateField(inputEmail, isValidEmail, 'Проверьте адрес электронной почты');
  validateField(inputPhone, isValidPhone, 'Формат: +9 999 999 99 99');
  validateField(inputInn, isValidInn, 'Проверьте ИНН');
  validateField(inputFirstName, isValidName, 'Имя может содержать только буквы');
  validateField(inputLastName, isValidName, 'Фамилия может содержать только буквы');
  redactorPhone();
};

function removeErrorMessage(field) {
  const errorMessage = field.closest('.form-group').querySelector('.error-message');

  if (errorMessage) {
    errorMessage.remove();
  }
}

function generateError(field, text) {
  removeErrorMessage(field);
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = text;
  field.parentNode.after(errorMessage);
}

export function validateField(field, validator, errorText) {
  field.addEventListener('blur', () => {
    if (!field.value) {
      removeErrorMessage(field);
      if (field.id === 'inn') {
        noteDescription.classList.remove('hidden');
      }
      return null;
    }
    if (!validator(field.value)) {
      field.classList.add('error');
      generateError(field, errorText);
      if (field.id === 'inn') {
        noteDescription.classList.add('hidden');
      }
    }
  });

  field.addEventListener('input', () => {
    if (field.classList.contains('error')) {
      field.classList.remove('error');
    }
  });
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function isValidPhone(phone) {
  return /^\+\d{1,3} \d{1,3} \d{1,3} \d{2} \d{2}$/.test(phone);
}

function isValidInn(inn) {
  return /^\d{14}$/.test(inn);
}

function isValidName(name) {
  return /^[A-Za-zА-Яа-яЁё]+$/.test(name);
}

export const redactorPhone = () => {
  inputPhone.addEventListener('keyup', (event) => {
    if (event.key !== 'Backspace') {
      const matches = event.target.value
        .replace(/\D/g, '')
        .match(/(\d)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      let result = `+${matches[1]}`;
      for (let i = 2; i <= 5; i++) {
        if (matches[i].length > 0) {
          result += ' ' + matches[i];
        }
      }
      event.target.value = result;
    }
  });
};
