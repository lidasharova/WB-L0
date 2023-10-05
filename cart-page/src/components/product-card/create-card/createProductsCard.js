import { innerHtmlCardInfo } from './innerHtmlCardInfo';
import { innerHtmlCardAction } from './innerHtmlCardAction.js';

export const createProductsCard = (products) => {
  const cardsWrapper = document.querySelector('.cart-list__items__wrapper');
  products.forEach((product) => {
    const itemWrapper = document.createElement('div');
    itemWrapper.className = 'cart-list__item__wrapper';
    itemWrapper.dataset.id = product.id;
    itemWrapper.innerHTML = `
    ${innerHtmlCardInfo(product)}
    ${innerHtmlCardAction(product)}
    `;
    cardsWrapper.append(itemWrapper);
  });
};
