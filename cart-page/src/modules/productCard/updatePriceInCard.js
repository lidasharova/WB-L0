import { calculateNewPrice } from '/src/modules/helpers/calculateNewPrice.js';
import { calculateOldPrice } from '/src/modules/helpers/calculateOldPrice.js';

export function updatePriceInCard(product) {
  const oldPrice = document.querySelector(`[data-id="${product.id}"].list-item__old-price`);
  const newPrice = document.querySelector(`[data-id="${product.id}"].list-item__new-price`);

  oldPrice.textContent = `${calculateOldPrice(product).toLocaleString('ru-RU')} сом`;
  newPrice.textContent = `${calculateNewPrice(product).toLocaleString('ru-RU')} сом`;
}
