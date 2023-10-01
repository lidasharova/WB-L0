import { CartProducts } from '/src/modules/productStore/CartProducts.js';
const cart = new CartProducts();

export const decreaseCountProductsByMinus = () => {
  const minusButtons = document.querySelectorAll('.list-item__count__btn.count-minus');
  minusButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.dataset.id;
      cart.deleteProduct(productId);
    });
  });
};
