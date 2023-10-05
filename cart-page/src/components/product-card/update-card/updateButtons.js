export function updateButtons(idProduct, products) {
  const minusButton = document.querySelector(
    `.list-item__count__btn.minus[data-id="${idProduct}"]`
  );
  const plusButton = document.querySelector(`.list-item__count__btn.plus[data-id="${idProduct}"]`);

  if (minusButton && plusButton) {
    const product = products.find((item) => item.id === idProduct);

    if (product) {
      if (product.count > 1) {
        minusButton.classList.remove('count-minus_disabled');
        minusButton.classList.add('count-minus');
      } else {
        minusButton.classList.remove('count-minus');
        minusButton.classList.add('count-minus_disabled');
      }

      if (product.count >= product.maxCount) {
        plusButton.classList.remove('count-plus');
        plusButton.classList.add('count-plus_disabled');
      } else {
        plusButton.classList.remove('count-plus_disabled');
        plusButton.classList.add('count-plus');
      }
    }
  }
}
