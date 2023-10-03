import { calculateNewPrice } from '/src/modules/helpers/calculateNewPrice.js';
export const getTotalPrice = (cart) => {
  const totalPrice = document.querySelector('.cart-order__total-price');
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += calculateNewPrice(cart[i]);
  }

  totalPrice.textContent = `${sum.toLocaleString('ru-RU')} сом`;
  return sum;
};
