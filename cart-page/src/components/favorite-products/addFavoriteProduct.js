import dataFavoriteItems from '@/data/dataFavoriteItems.json';
const userFavoriteProducts = dataFavoriteItems;
export const addFavoriteProduct = (idProduct) => {
  let item = userFavoriteProducts.find((item) => item.id === idProduct);
  if (!item) {
    userFavoriteProducts.push({ id: idProduct });
    console.log('Товар добавлен в список Избранное');
  } else {
    console.log('Товар уже добавлен в список Избранное');
  }
};
