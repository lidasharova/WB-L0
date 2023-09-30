export const createProductCard = (products) => {
  //находим контейнер
  const cardsWrapper = document.querySelector('.cart-list__items__wrapper');
  //отрисуем карточки текущих товаров
  products.forEach((product) => {
    const itemWrapper = document.createElement('div');
    itemWrapper.className = 'cart-list__item__wrapper';

    const card = document.createElement('div');
    card.className = 'cart-list__item__product';
    card.dataset.id = product.id;

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox__decor checkbox-card';
    checkbox.dataset.id = product.id;

    const img = document.createElement('div');
    img.className = 'list-item__product__img';
    img.style.backgroundImage = `url(${product.img})`;
    img.dataset.id = product.id;

    const info = document.createElement('div');
    info.className = 'list-item__product__info';

    const name = document.createElement('div');
    name.className = 'list-item__product__name';
    name.textContent = product.name;

    const options = document.createElement('div');
    options.className = 'list-item__product__options';

    let color = '';
    if (product.color) {
      color = document.createElement('span');
      color.className = 'list-item__product__color';
      color.textContent = product.color;
    }

    let size = '';
    if (product.size) {
      size = document.createElement('span');
      size.className = 'list-item__product__size';
      size.textContent = product.size;
    }

    const stock = document.createElement('div');
    stock.className = 'list-item__product__stock';
    stock.textContent = product.stock;
    stock.dataset.id = product.id;

    const providerContent = document.createElement('div');
    providerContent.className = 'list-item__product__options provider-color';

    const provider = document.createElement('span');
    provider.className = 'list-item__product__provider';
    provider.textContent = product.provider;

    const providerIcon = document.createElement('span');
    providerIcon.className = 'provider-info__icon';
    providerIcon.dataset.id = product.id;

    const action = document.createElement('div');
    action.className = 'list-item__action';

    const countContainer = document.createElement('div');
    countContainer.className = 'list-item__count__container';

    const countWrapper = document.createElement('div');
    countWrapper.className = 'list-item__count__wrapper';

    const countBtnMinus = document.createElement('button');
    countBtnMinus.className = 'list-item__count__btn count-minus';
    countBtnMinus.type = 'button';
    countBtnMinus.dataset.id = product.id;

    const count = document.createElement('div');
    count.className = 'list-item__count';
    count.textContent = product.currentCount;
    count.dataset.id = product.id;

    const countBtnPlus = document.createElement('button');
    countBtnPlus.className = 'list-item__count__btn count-plus';
    countBtnPlus.type = 'button';
    countBtnPlus.dataset.id = product.id;

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'list-item__buttons-wrapper';

    let leftText = '';
    if (product.maxCount < 3) {
      leftText = document.createElement('div');
      leftText.className = 'list-item__count__left-text';
      leftText.textContent = `Осталось ${product.maxCount} шт.`;
    }

    const favoriteBtn = document.createElement('span');
    favoriteBtn.className = 'list-item__favorite-button item-icon-btn';
    favoriteBtn.dataset.id = product.id;

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'list-item__delete-button item-icon-btn';
    deleteBtn.dataset.id = product.id;

    const priceWrapper = document.createElement('div');
    priceWrapper.className = 'list-item__price__wrapper';

    const newPrice = document.createElement('h3');
    newPrice.className = 'list-item__new-price';
    newPrice.textContent = `${product.newPrice} сом`;
    newPrice.dataset.id = product.id;

    const oldPrice = document.createElement('div');
    oldPrice.className = 'list-item__old-price';
    oldPrice.textContent = `${product.oldPrice} сом`;
    oldPrice.dataset.id = product.id;

    itemWrapper.append(card, action);
    card.append(checkbox, img, info);
    info.append(name, options, stock);
    options.append(color);
    options.append(size);
    info.append(providerContent);
    providerContent.append(provider, providerIcon);
    countContainer.append(countWrapper, buttonsWrapper);
    action.append(countContainer, priceWrapper);
    priceWrapper.append(newPrice, oldPrice);
    countWrapper.append(countBtnMinus, count, countBtnPlus);
    countContainer.append(leftText);
    buttonsWrapper.append(favoriteBtn, deleteBtn);
    cardsWrapper.append(itemWrapper);
  });
};
