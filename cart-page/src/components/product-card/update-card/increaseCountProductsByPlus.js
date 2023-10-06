import { CartProducts } from '@/components/product-store/CartProducts.js';

export const increaseCountProductsByPlus = () => {
  const cart = new CartProducts();
  const plusButtons = document.querySelectorAll('.list-item__count__btn.plus');
  plusButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.dataset.id;
      cart.increaseCountProduct(productId);
    });
  });
};
