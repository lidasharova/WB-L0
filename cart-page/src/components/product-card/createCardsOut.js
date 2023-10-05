// export const createCardsOut = (products) => {
//   const cardsOutWrapper = document.querySelector('.cart-list__items-out__wrapper');
//   products.forEach((product) => {
//     const itemOutWrapper = document.createElement('div');
//     itemOutWrapper.className = 'cart-list__item__wrapper';
//     const card = document.createElement('div');
//     card.className = 'cart-list__item__product';
//     card.dataset.id = product.id;
//     const img = document.createElement('div');
//     img.className = 'list-item__product__img';
//     img.style.backgroundImage = `url(${product.img})`;
//     img.dataset.id = product.id;
//     const info = document.createElement('div');
//     info.className = 'list-item__product__info';
//     const name = document.createElement('div');
//     name.className = 'list-item__product__name  product__name-out';
//     name.textContent = product.name;
//     const options = document.createElement('div');
//     options.className = 'list-item__product__options';
//     let color = '';
//     if (product.color) {
//       color = document.createElement('span');
//       color.className = 'list-item__product__color';
//       color.textContent = product.color;
//     }
//     let size = '';
//     if (product.size) {
//       size = document.createElement('span');
//       size.className = 'list-item__product__size';
//       size.textContent = product.size;
//     }
//     const action = document.createElement('div');
//     action.className = 'list-item__action';
//     const buttonsWrapper = document.createElement('div');
//     buttonsWrapper.className = 'list-item__buttons-wrapper buttons-wrapper-out';
//     const favoriteBtn = document.createElement('span');
//     favoriteBtn.className = 'list-item__favorite-button item-icon-btn';
//     favoriteBtn.dataset.id = product.id;
//     const deleteBtn = document.createElement('span');
//     deleteBtn.className = 'list-item__delete-button item-icon-btn';
//     deleteBtn.dataset.id = product.id;
//     cardsOutWrapper.append(itemOutWrapper);
//     itemOutWrapper.append(card, action);
//     card.append(img, info);
//     info.append(name, options);
//     options.append(color, size);
//     action.append(buttonsWrapper);
//     buttonsWrapper.append(favoriteBtn, deleteBtn);
//   });
// };

// // `/* <div class="cart-list__item__wrapper">
// //   <div
// //     class="cart-list__item__product"
// //     data-id="t-shirt-01"
// //   >
// //     <div
// //       class="list-item__product__img"
// //       data-id="t-shirt-01"
// //     ></div>
// //     <div class="list-item__product__info">
// //       <div class="list-item__product__name">Футболка UZcotton мужская</div>
// //       <div class="list-item__product__options">
// //         <span class="list-item__product__color">Цвет: белый</span>
// //         <span class="list-item__product__size">Размер: 56</span>
// //       </div>
// //     </div>
// //   </div>
// //   <div class="list-item__action">
// //     <div class="list-item__count__container">
// //       <div class="list-item__buttons-wrapper buttons-wrapper-out ">
// //         <span
// //           class="list-item__favorite-button item-icon-btn"
// //           data-id="t-shirt-01"
// //         ></span>
// //         <span
// //           class="list-item__delete-button item-icon-btn"
// //           data-id="t-shirt-01"
// //         ></span>
// //       </div>
// //     </div>
// //   </div>
// // </div>; */`;

export const createCardsOut = (products) => {
  const cardsOutWrapper = document.querySelector('.cart-list__items-out__wrapper');

  products.forEach((product) => {
    const itemOutWrapper = document.createElement('div');
    itemOutWrapper.className = 'cart-list__item__wrapper';
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
