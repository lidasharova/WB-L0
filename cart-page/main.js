import './style.css';
import products from '/src/dataItems.json';
import productsOut from '/src/dataItemsSoldOut.json';
import { createProductCard } from '/src/modules/productCard/createProductsCard.js';
import { createCardsOut } from '/src/modules/productCard/createCardsOut.js';
window.onload = function () {
  let productsSoldOut = productsOut;
  let currentProducts = products;

  createProductCard(currentProducts);
  createCardsOut(productsSoldOut);
};
