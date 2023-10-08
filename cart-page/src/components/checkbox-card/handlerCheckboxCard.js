import { updateOrderForm } from '@/components/order-form/updateOrderForm.js';
import { updateMainCheckboxState } from '@/components/checkbox-card/updateMainCheckboxState.js';
import { toggleCheckbox } from '@/components/checkbox-card/toggleCheckbox.js';
import { updateSelection } from '@/components/checkbox-card/updateSelection.js';
import { SelectedProducts } from '../product-store/SelectedProducts';

const selectedProducts = SelectedProducts.getSelectedProducts().products;

export const handlerCheckboxCard = () => {
  const checkboxes = document.querySelectorAll('.checkbox__decor.checkbox-card');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      toggleCheckbox(checkbox);
      updateOrderForm(selectedProducts);
      updateMainCheckboxState();
    });
  });
};

export const handlerMainCheckbox = () => {
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  mainCheckbox.addEventListener('click', () => {
    updateSelection();
    updateOrderForm(selectedProducts);
    updateMainCheckboxState();
  });
};
