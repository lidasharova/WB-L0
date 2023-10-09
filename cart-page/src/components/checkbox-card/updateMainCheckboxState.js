// import { updateOrderForm } from '@/components/order-form/updateOrderForm.js';
import { SelectedProducts } from '@/components/product-store/SelectedProducts.js';

// const selectedProducts = new SelectedProducts();

export const updateMainCheckboxState = () => {
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  const checkboxes = document.querySelectorAll('.checkbox__decor.checkbox-card');
  const checkboxArray = Array.from(checkboxes);

  const areAllSelected = checkboxArray.every((checkbox) =>
    checkbox.classList.contains('checkbox-checked')
  );
  if (mainCheckbox) {
    if (areAllSelected) {
      mainCheckbox.classList.add('checkbox-checked');
      SelectedProducts.selectedAllProducts();
      // updateOrderForm(selectedProducts);
    } else {
      mainCheckbox.classList.remove('checkbox-checked');
      SelectedProducts.deleteAllSelectedProducts();
      // updateOrderForm(selectedProducts);
    }
  }
};
