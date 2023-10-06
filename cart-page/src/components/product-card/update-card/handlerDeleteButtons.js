import { deleteProductCard } from '@/components/product-card/update-card/deleteProductCard.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
import { updatePrices } from '@/components/order-form/updatePrices.js';
const cart = new CartProducts();

export const handlerDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll('.list-item__delete-button');
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const idProduct = event.target.dataset.id;
      deleteProductCard(idProduct);
      cart.deleteProduct(idProduct);
      const checkbox = document.querySelector(
        `[data-id="${idProduct}"].checkbox__decor.checkbox-card`
      );
      if (checkbox && checkbox.classList.contains('checkbox-checked')) {
        updatePrices(cart.products);
      } else if (mainCheckbox.classList.contains('checkbox-checked')) {
        updatePrices(cart.products);
      }

      // Проверяем, сколько товаров осталось в корзине
      if (cart.products.length < 2) {
        const accordion = document.querySelector('.cart-accordion__info');
        if (accordion) {
          accordion.classList.add('remove');
        }
      }

      // console.log('корзина');
      // console.log(cart.products);
      // console.log('отсутствующие товары');
      // console.log(cart.productsOut);
    });
  });
};
