import { calculateOldPrice } from '@/utils/calculateOldPrice.js';
export const getOldTotalPrice = (cart) => {
  const totalOldPrice = document.querySelector('.cart-order__old-total-price');
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += calculateOldPrice(cart[i]);
  }
  totalOldPrice.textContent = `${sum.toLocaleString('ru-RU')} сом`;
  return sum;
};
