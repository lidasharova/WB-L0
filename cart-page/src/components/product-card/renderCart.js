import { CartProducts } from '@/components/product-store/CartProducts.js';
import { createProductsCard } from './createProductsCard.js';
import { createCardsOut } from './createCardsOut.js';

export const renderCart = () => {
  const cart = CartProducts.getAvailableProducts();
  const productsSoldOut = CartProducts.getSoldOutProducts();
  createProductsCard(cart);
  createCardsOut(productsSoldOut);
};
