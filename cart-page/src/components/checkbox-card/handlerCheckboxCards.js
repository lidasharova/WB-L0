import { handlerCheckboxAllProducts } from '@/components/checkbox-card/handlerCheckboxAllProducts.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
const products = CartProducts.getAvailableProducts();

export const handlerCheckboxCards = () => {
  handlerCheckboxAllProducts(products);
};
