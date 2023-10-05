import { CartProducts } from '@/components/product-store/CartProducts.js';
const cart = new CartProducts();

export const decreaseCountProductsByMinus = () => {
  const minusButtons = document.querySelectorAll('.list-item__count__btn.minus');
  minusButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.dataset.id;
      cart.decreaseCountProduct(productId);
    });
  });
};
