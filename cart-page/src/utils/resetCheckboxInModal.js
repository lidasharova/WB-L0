export const resetCheckboxInModal = (modal) => {
  if (modal === 'delivery') {
    const checkboxes = document.querySelectorAll('.checkbox-delivery-address');
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
  } else if (modal === 'payment') {
    const checkboxes = document.querySelectorAll('.checkbox-payment-card');
    console.log(checkboxes);
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
  }
};
