import { updatePrices } from '@/components/order-form/updatePrices.js';

export const handlerCheckboxAllProducts = (products) => {
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  const checkboxCards = document.querySelectorAll('.checkbox__decor.checkbox-card');
  mainCheckbox.addEventListener('click', () => {
    checkboxCards.forEach((checkbox) => {
      mainCheckbox.classList.toggle('checkbox-checked');
      checkbox.classList.toggle('checkbox-checked');
      updatePrices(products);
    });
    if (mainCheckbox.classList.contains('checkbox-checked')) {
      updatePrices(products);
    } else {
      updatePrices([]);
    }
  });
};
