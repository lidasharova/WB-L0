export const toggleCountersInOrderForm = (selectedProducts) => {
  const counterItems = document.querySelector('.cart-order__info-wrapper');
  const totalPrice = document.querySelector('.cart-order__total-price-wrapper');
  const discount = document.querySelector('.cart-order__discount-price');

  if (selectedProducts.length === 0 && counterItems && totalPrice && discount) {
    counterItems.classList.add('remove');
    totalPrice.classList.add('remove');
    discount.classList.add('remove');
  } else {
    counterItems.classList.remove('remove');
    totalPrice.classList.remove('remove');
    discount.classList.remove('remove');
  }
};
