import { SelectedProducts } from '@/components/product-store/SelectedProducts.js';
const products = new SelectedProducts();

export const updateSelection = () => {
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  const checkboxes = document.querySelectorAll('.checkbox__decor.checkbox-card');
  const isChecked = mainCheckbox.classList.contains('checkbox-checked');

  checkboxes.forEach((checkbox) => {
    const idProduct = checkbox.dataset.id;
    if (!isChecked) {
      checkbox.classList.add('checkbox-checked');
      products.addSelectedProduct(idProduct);
    } else {
      checkbox.classList.remove('checkbox-checked');
      products.deleteSelectedProduct(idProduct);
    }
  });
};
