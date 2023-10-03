import { getTotalPrice } from '/src/modules/orderForm/getTotalPrice.js';
export const changeButtonOrderText = (cart) => {
  const buttonText = document.querySelector('.button-do-order__text');
  const checkbox = document.querySelector('.cart-order__checkbox-decor');
  if (checkbox.classList.contains('checkbox-checked')) {
    buttonText.textContent = `Оплатить ${getTotalPrice(cart).toLocaleString('ru-RU')} сом`;
  } else {
    buttonText.textContent = 'Заказать';
  }
};
