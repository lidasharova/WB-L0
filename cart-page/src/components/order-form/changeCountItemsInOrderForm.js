import { getWordFromNumberItems } from '@/utils/getWordFromNumberItems.js';
import { setStateOrderButton } from './setStateOrderButton';

const wordForms = ['товар', 'товара', 'товаров'];

export const changeCountItemsInOrderForm = (cart) => {
  const countItemsInOrderForm = document.querySelector('.cart-order__count');
  console.log(cart);
  const count = cart.reduce((accumulator, value) => {
    return accumulator + value.count;
  }, 0);
  console.log(count);
  countItemsInOrderForm.textContent = getWordFromNumberItems(count, wordForms);
  setStateOrderButton(count);
};
