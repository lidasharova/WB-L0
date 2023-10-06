export const deleteProductCard = (idProduct) => {
  const productCard = document.querySelector(`[data-id="${idProduct}"].cart-list__item__wrapper`);
  productCard.remove();
};
