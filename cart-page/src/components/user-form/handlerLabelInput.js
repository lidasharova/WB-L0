export const handlerLabelInput = () => {
  const inputs = document.querySelectorAll('.input-field');

  function handleInputChange(event) {
    const input = event.target;
    const label = input.nextElementSibling;

    if (input.value.trim() !== '') {
      label.classList.add('up-label');
    } else {
      label.classList.remove('up-label');
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('input', handleInputChange);
  });
};
