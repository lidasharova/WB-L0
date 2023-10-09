import { CartProducts } from '@/components/product-store/CartProducts.js';
import { createProductsCard } from '@/components/product-card/create-card/createProductsCard.js';
import { createCardsOut } from '@/components/product-card/create-card/createCardsSoldOut.js';
import { SelectedProducts } from '@/components/product-store/SelectedProducts.js';
import { updateDeliveryDate } from '@/components/delivery-section/updateDeliveryDate.js';
import { cartNotification } from '@/components/product-card/update-card/cartNotification.js';

export const renderCart = () => {
  const selectedProducts = SelectedProducts.getSelectedProducts().products;
  const cart = CartProducts.getAvailableProducts();
  const productsSoldOut = CartProducts.getSoldOutProducts();
  createProductsCard(cart);
  cartNotification(cart);
  createCardsOut(productsSoldOut);
  updateDeliveryDate(selectedProducts);
};
