import { addFavoriteProduct } from '@/components/favorite-products/addFavoriteProduct.js';
import { deleteProductCard } from '@/components/product-card/deleteProductCard.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
import { updatePrices } from '@/components/order-form/updatePrices.js';
const cart = new CartProducts();

export const handlerFavoriteButtons = () => {
  const favoriteButtons = document.querySelectorAll('.list-item__favorite-button');
  console.log(favoriteButtons);
  favoriteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const idProduct = event.target.dataset.id;
      console.log(idProduct);
      addFavoriteProduct(idProduct);
      cart.deleteProduct(idProduct);
      deleteProductCard(idProduct);
      updatePrices(cart.products);
    });
  });
};
