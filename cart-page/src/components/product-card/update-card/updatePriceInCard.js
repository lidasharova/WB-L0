import { calculateNewPrice } from '@/utils/calculateNewPrice.js';
import { calculateOldPrice } from '@/utils/calculateOldPrice.js';
import { changeFontSizePrice } from '@/utils/changeFontSizePrice.js';

export function updatePriceInCard(product) {
  const oldPrice = document.querySelector(`[data-id="${product.id}"].list-item__old-price`);
  const newPrice = document.querySelector(`[data-id="${product.id}"].list-item__new-price`);
  const newPriceNumber = calculateNewPrice(product);
  oldPrice.textContent = `${calculateOldPrice(product).toLocaleString('ru-RU')}`;
  newPrice.textContent = `${newPriceNumber.toLocaleString('ru-RU')}`;
  changeFontSizePrice(newPrice, newPriceNumber);
}
