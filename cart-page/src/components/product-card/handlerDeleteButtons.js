import { deleteProductCard } from '@/components/product-card/deleteProductCard.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
import { updatePrices } from '@/components/order-form/updatePrices.js';
const cart = new CartProducts();

export const handlerDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll('.list-item__delete-button');
  console.log(deleteButtons);
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const idProduct = event.target.dataset.id;
      console.log(idProduct);
      deleteProductCard(idProduct);
      cart.deleteProduct(idProduct);
      updatePrices(cart.products);
      console.log('корзина');
      console.log(cart.products);
      console.log('отсутствующие товары');
      console.log(cart.productsOut);
    });
  });
};
