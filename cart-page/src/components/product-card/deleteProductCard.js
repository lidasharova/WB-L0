export const deleteProductCard = (idProduct) => {
  const productCard = document.querySelector(`[data-id="${idProduct}"].cart-list__item__wrapper`);
  console.log('карточка товара');
  console.log(productCard);
  productCard.remove();
};
