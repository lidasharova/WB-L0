export const calculateOldPrice = (product) => {
  return `${Math.round(product.price * product.count).toLocaleString('ru-RU')} сом`;
};
