import { deleteProductCard } from '@/components/product-card/update-card/deleteProductCard.js';
import { addFavoriteProduct } from '@/components/favorite-products/addFavoriteProduct.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
import { SelectedProducts } from '@/components/product-store/SelectedProducts.js';
import { updateOrderForm } from '@/components/order-form/updateOrderForm.js';
import { updateMainCheckboxState } from '@/components/checkbox-card/updateMainCheckboxState.js';

const cart = new CartProducts();
const products = new SelectedProducts();
const selectedProducts = SelectedProducts.getSelectedProducts().products;

export const handleAction = (actionType, idProduct) => {
  if (actionType === 'delete') {
    deleteProductCard(idProduct);
    cart.deleteProduct(idProduct);
    products.deleteSelectedProduct(idProduct);
    updateOrderForm(selectedProducts);
  } else if (actionType === 'favorite') {
    addFavoriteProduct(idProduct);
    deleteProductCard(idProduct);
    cart.deleteProduct(idProduct);
    products.deleteSelectedProduct(idProduct);
    updateOrderForm(selectedProducts);
  }

  if (cart.availableProducts.length < 2) {
    const accordion = document.querySelector('.cart-accordion__available');
    if (accordion) {
      accordion.remove();
    }
  }

  updateMainCheckboxState();
};
