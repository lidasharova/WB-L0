import { SelectedProducts } from '@/components/product-store/SelectedProducts.js';
const products = new SelectedProducts();

export const toggleCheckbox = (checkbox) => {
  const idProduct = checkbox.dataset.id;
  if (!checkbox.classList.contains('checkbox-checked')) {
    checkbox.classList.add('checkbox-checked');
    products.addSelectedProduct(idProduct);
  } else {
    checkbox.classList.remove('checkbox-checked');
    products.deleteSelectedProduct(idProduct);
  }
};
