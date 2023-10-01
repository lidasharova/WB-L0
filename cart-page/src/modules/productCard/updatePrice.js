import { calculateNewPrice } from '/src/modules/helpers/calculateNewPrice.js';
import { calculateOldPrice } from '/src/modules/helpers/calculateOldPrice.js';

export function updatePrice(product) {
  const oldPrice = document.querySelector(`[data-id="${product.id}"].list-item__old-price`);
  const newPrice = document.querySelector(`[data-id="${product.id}"].list-item__new-price`);

  oldPrice.textContent = calculateOldPrice(product);
  newPrice.textContent = calculateNewPrice(product);
}
