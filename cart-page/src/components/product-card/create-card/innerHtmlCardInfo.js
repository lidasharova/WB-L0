/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */

import { calculateNewPrice } from '@/utils/calculateNewPrice.js';
import { calculateOldPrice } from '@/utils/calculateOldPrice.js';
export const innerHtmlCardInfo = (product) => {
  return ` <div class="cart-list__item__product">
  <span class="checkbox__decor checkbox-card checkbox-checked" data-id="${product.id}"></span>
   ${product.size ? `<span class="product__size-mobile">${product.size}</span>` : ''}
  <div class="list-item__product__img" data-id="${product.id}" style="background-image: url(${
    product.img
  })"></div>
  <div class="list-item__product__info">
  <div class="list-item__price__wrapper price-wrapper-mobile">
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
</div>
    <div class="list-item__product__name">${product.name}</div>
    <div class="list-item__product__options">
      ${product.color ? `<span class="list-item__product__color">${product.color}</span>` : ''}
      ${product.size ? `<span class="list-item__product__size">Размер: ${product.size}</span>` : ''}
    </div>
    <div class="list-item__product__stock">${product.stock}</div>
    <div class="list-item__product__options provider-color provider-container-tooltip">
      <span class="list-item__product__provider">${product.provider}</span>
      <span class="provider-info__icon" data-id="${product.id}"></span>
      <div class="provider-info__tooltip tooltip-provider" data-id="${product.id}">
              <h5 class="provider-info-title">OOO «МЕГАПРОФСТИЛЬ»</h5>
              <div class="provider-info-ogrn">ОГРН: 5167746237148</div>
              <div class="provider-info-text">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2,
                офис 34</div>
       </div>
    </div>
  </div>
</div> `;
};
