export const innerHtmlCardInfo = (product) => {
  return ` <div class="cart-list__item__product">
  <span class="checkbox__decor checkbox-card" data-id="${product.id}"></span>
  <div class="list-item__product__img" data-id="${product.id}" style="background-image: url(${
    product.img
  })"></div>
  <div class="list-item__product__info">
    <div class="list-item__product__name">${product.name}</div>
    <div class="list-item__product__options">
      ${product.color ? `<span class="list-item__product__color">${product.color}</span>` : ''}
      ${product.size ? `<span class="list-item__product__size">${product.size}</span>` : ''}
    </div>
    <div class="list-item__product__stock">${product.stock}</div>
    <div class="list-item__product__options provider-color">
      <span class="list-item__product__provider">${product.provider}</span>
      <span class="provider-info__icon" data-id="${product.id}"></span>
    </div>
  </div>
</div> `;
};
