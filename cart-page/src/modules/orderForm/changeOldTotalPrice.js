import { calculateOldPrice } from '/src/modules/helpers/calculateOldPrice.js';
export const changeOldTotalPrice = (cart) => {
  const totalOldPrice = document.querySelector('.cart-order__old-total-price');
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += calculateOldPrice(cart[i]);
  }
  totalOldPrice.textContent = `${sum.toLocaleString('ru-RU')} сом`;
  return sum;
};
