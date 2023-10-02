import { changeTotalPrice } from '/src/modules/orderForm/changeTotalPrice.js';
import { changeOldTotalPrice } from '/src/modules/orderForm/changeOldTotalPrice.js';

export const changeDiscountSum = (cart) => {
  const totalDiscountSum = document.querySelector('.cart-order__discount-price');
  let sum = changeOldTotalPrice(cart) - changeTotalPrice(cart);
  totalDiscountSum.textContent = `- ${sum.toLocaleString('ru-RU')} сом`;
};
