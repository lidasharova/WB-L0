import { CartProducts } from '/src/modules/productStore/CartProducts.js';
import productsOut from '/src/data/dataItemsSoldOut.json';
import { createProductsCard } from './createProductsCard.js';
import { createCardsOut } from './createCardsOut.js';

export const renderCart = () => {
  const cart = CartProducts.getProducts().products;
  const productsSoldOut = productsOut;
  createProductsCard(cart);
  createCardsOut(productsSoldOut);
};
