import { getTotalPrice } from '@/components/order-form/getTotalPrice.js';
import { getOldTotalPrice } from '@/components/order-form/getOldTotalPrice.js';

export const getDiscountSum = (cart) => {
  const totalDiscountSum = document.querySelector('.cart-order__discount-price');
  let sum = getOldTotalPrice(cart) - getTotalPrice(cart);
  totalDiscountSum.textContent = `- ${sum.toLocaleString('ru-RU')} сом`;
};
