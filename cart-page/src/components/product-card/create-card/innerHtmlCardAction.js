/* eslint-disable max-lines-per-function */
import { calculateNewPrice } from '@/utils/calculateNewPrice.js';
import { calculateOldPrice } from '@/utils/calculateOldPrice.js';

export const innerHtmlCardAction = (product) => {
  return ` <div class="list-item__action">
  <div class="list-item__count__container">
    <div class="list-item__count__wrapper">
      ${
        product.count <= 1
          ? `<button type="button" class="list-item__count__btn minus count-minus_disabled" data-id="${product.id}"></button>`
          : `<button type="button" class="list-item__count__btn minus count-minus" data-id="${product.id}"></button>`
      }
      <div class="list-item__count" data-id="${product.id}">${product.count}</div>
      <button type="button" class="list-item__count__btn plus count-plus" data-id="${
        product.id
      }"></button>
    </div>
    ${
      product.maxCount < 3
        ? `<div class="list-item__count__left-text">Осталось ${product.maxCount} шт.</div>`
        : ''
    }
    <div class="list-item__buttons-wrapper">
      <span class="list-item__favorite-button item-icon-btn" data-id="${product.id}"></span>
      <span class="list-item__delete-button item-icon-btn" data-id="${product.id}"></span>
    </div>
  </div>

  <div class="list-item__price__wrapper">
    <div class="list-item__new-price__wrapper">
<h3 class="list-item__new-price" data-id="${product.id}" style="font-size: ${
    calculateNewPrice(product) < 100000 ? '20px' : '16px'
  }; line-height: ${calculateNewPrice(product) < 100000 ? '24px' : '28px'}; letter-spacing: ${
    calculateNewPrice(product) < 100000 ? 'normal' : '-0.01em'
  };">${calculateNewPrice(product).toLocaleString('ru-RU')}</h3>
      <h4 class="list-item__currency">сом</h4>
    </div>
    <div class="list-item__old-price" data-id="${product.id}">
      ${calculateOldPrice(product).toLocaleString('ru-RU')} сом
    </div>

    <div class="price-info__tooltip tooltip-sale-position" data-id="${product.id}">
      <div class="price-info-tooltip__row">
        <span class="tooltip-sale-title">Скидка ${Math.round(
          product.discount - 5
        )} % </span> <span>-${Math.round((product.price * (product.discount - 5)) / 100)} cом</span>
      </div>
      <div class="price-info-tooltip__row">
        <span class="tooltip-sale-title">Скидка покупателя ${
          product.userDiscount
        }%</span><span>-${Math.round((product.price * product.userDiscount) / 100)}
        сом</span>
      </div>
    </div>

  </div>
</div>
`;
};
