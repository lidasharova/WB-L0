import { deleteProductCard } from '@/components/product-card/update-card/deleteProductCard.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
import { updatePrices } from '@/components/order-form/updatePrices.js';
const cart = new CartProducts();

export const handlerDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll('.list-item__delete-button');
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  console.log(deleteButtons);
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const idProduct = event.target.dataset.id;
      console.log(idProduct);
      deleteProductCard(idProduct);
      cart.deleteProduct(idProduct);
      const checkbox = document.querySelector(
        `[data-id="${idProduct}"].checkbox__decor.checkbox-card`
      );
      console.log(checkbox);
      if (checkbox && checkbox.classList.contains('checkbox-checked')) {
        updatePrices(cart.products);
      } else if (mainCheckbox.classList.contains('checkbox-checked')) {
        updatePrices(cart.products);
      }
      // updatePrices(cart.products);
      console.log('корзина');
      console.log(cart.products);
      console.log('отсутствующие товары');
      console.log(cart.productsOut);
    });
  });
};
