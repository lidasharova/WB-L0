import { CartProducts } from '@/components/product-store/CartProducts.js';
import { changeButtonOrderText } from '@/components/order-form/changeButtonOrderText.js';
const cart = CartProducts.getAvailableProducts();

export const handlerCheckboxPayment = () => {
  const checkbox = document.querySelector('.cart-order__checkbox-decor');
  const conditionOrder = document.querySelector('.cart-order__payment-condition');
  const conditionForm = document.querySelector('.payment-form__payment-condition');

  const containerOrder = document.querySelector('.cart-order__payment__pay-now__wrapper');
  const containerForm = document.querySelector('.payment-form');

  if (checkbox && conditionOrder && conditionForm && containerOrder && containerForm) {
    checkbox.addEventListener('click', () => {
      if (!checkbox.classList.contains('checkbox-checked')) {
        checkbox.classList.add('checkbox-checked');
        changeButtonOrderText(cart);
        conditionOrder.remove();
        conditionForm.remove();
      } else {
        checkbox.classList.remove('checkbox-checked');
        containerOrder.append(conditionOrder);
        containerForm.append(conditionForm);
        changeButtonOrderText(cart);
      }
    });
  }
};
