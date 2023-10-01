export const calculateNewPrice = (product) => {
  return `${Math.round(
    (product.price - product.price * (product.discount / 100)) * product.count
  ).toLocaleString('ru-RU')} сом`;
};
