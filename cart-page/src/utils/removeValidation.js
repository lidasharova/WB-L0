const form = document.querySelector('.user__form');

export const removeValidation = () => {
  const errors = form.querySelectorAll('.error-message');
  errors.forEach((error) => {
    error.remove();
  });
};
