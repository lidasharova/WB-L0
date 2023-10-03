import { getTotalPrice } from '/src/modules/orderForm/getTotalPrice.js';
import { getOldTotalPrice } from '/src/modules/orderForm/getOldTotalPrice.js';

export const getDiscountSum = (cart) => {
  const totalDiscountSum = document.querySelector('.cart-order__discount-price');
  let sum = getOldTotalPrice(cart) - getTotalPrice(cart);
  totalDiscountSum.textContent = `- ${sum.toLocaleString('ru-RU')} сом`;
};
