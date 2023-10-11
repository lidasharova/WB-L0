import { getWordFromNumberItems } from '@/utils/getWordFromNumberItems.js';
import { setStateOrderButton } from './setStateOrderButton';

const wordForms = ['товар', 'товара', 'товаров'];

export const changeCountItemsInOrderForm = (products) => {
  const countItemsInOrderForm = document.querySelector('.cart-order__count');
  const count = products.reduce((accumulator, value) => {
    return accumulator + value.count;
  }, 0);
  countItemsInOrderForm.textContent = getWordFromNumberItems(count, wordForms);
  setStateOrderButton(count);
};
