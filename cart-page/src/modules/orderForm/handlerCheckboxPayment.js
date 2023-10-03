import { CartProducts } from '/src/modules/productStore/CartProducts.js';
import { changeButtonOrderText } from '/src/modules/orderForm/changeButtonOrderText.js';
const cart = CartProducts.getProducts().products;

export const handlerCheckboxPayment = () => {
  const checkbox = document.querySelector('.cart-order__checkbox-decor');
  const conditions = document.querySelector('.cart-order__payment__conditions');
  const container = document.querySelector('.cart-order__payment__pay-now__wrapper');

  if (checkbox) {
    checkbox.addEventListener('click', () => {
      if (!checkbox.classList.contains('checkbox-checked')) {
        checkbox.classList.add('checkbox-checked');
        changeButtonOrderText(cart);
        conditions.remove();
      } else {
        checkbox.classList.remove('checkbox-checked');
        container.append(conditions);
        changeButtonOrderText(cart);
      }
    });
  }
};
