export const createCardsOut = (products) => {
  const cardsOutWrapper = document.querySelector('.cart-list__items-out__wrapper');
  products.forEach((product) => {
    const itemOutWrapper = document.createElement('div');
    itemOutWrapper.classList.add('cart-list__item__wrapper', 'soldout-card');
    itemOutWrapper.dataset.id = product.id;
    itemOutWrapper.innerHTML = `
      <div class="cart-list__item__product" data-id="${product.id}">
        <div class="list-item__product__img" style="background-image: url(${
          product.img
        })" data-id="${product.id}"></div>
        <div class="list-item__product__info">
          <div class="list-item__product__name product__name-out">${product.name}</div>
          <div class="list-item__product__options">
            ${
              product.color ? `<span class="list-item__product__color">${product.color}</span>` : ''
            }
            ${product.size ? `<span class="list-item__product__size">${product.size}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="list-item__action">
        <div class="list-item__count__container">
          <div class="list-item__buttons-wrapper buttons-wrapper-out">
            <span class="list-item__favorite-button favorite-button-out item-icon-btn" data-id="${
              product.id
            }"></span>
            <span class="list-item__delete-button item-icon-btn" data-id="${product.id}"></span>
          </div>
        </div>
      </div>
    `;
    cardsOutWrapper.append(itemOutWrapper);
  });
};
