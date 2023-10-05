import { CartProducts } from '@/components/product-store/CartProducts.js';
const cart = new CartProducts();

export const increaseCountProductsByPlus = () => {
  const plusButtons = document.querySelectorAll('.list-item__count__btn.plus');
  plusButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.dataset.id;
      cart.addProduct(productId);
    });
  });
};
