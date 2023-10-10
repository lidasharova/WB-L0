import { SelectedProducts } from '@/components/product-store/SelectedProducts.js';
import { getWordFromNumberItems } from '@/utils/getWordFromNumberItems.js';

const wordForms = ['товар', 'товара', 'товаров'];
export const updateHeaderAccordion = () => {
  const header = document.querySelector('.cart-accordion-available__count');
  const selectedProducts = SelectedProducts.getSelectedProducts().products;
  const sum = selectedProducts.reduce((accumulator, value) => {
    return accumulator + value.count;
  }, 0);
  const name = getWordFromNumberItems(sum, wordForms);

  header.textContent = `${name} · ${sum.toLocaleString('ru-RU')} сом`;
};
