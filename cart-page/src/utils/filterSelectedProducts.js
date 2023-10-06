// Функция для фильтрации выбранных товаров
export const filterSelectedProducts = (allProducts, selectedProductIds) => {
  return allProducts.filter((product) => selectedProductIds.includes(product.id));
};
