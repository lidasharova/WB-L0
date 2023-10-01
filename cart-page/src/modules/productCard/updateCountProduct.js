//смена кол-ва товара

export function updateCountProduct(productId, count) {
  const countProduct = document.querySelector(`[data-id="${productId}"] .list-item__count`);
  countProduct.textContent = count;
}
