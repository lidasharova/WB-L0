import '@/sass/style.scss';
import { renderCart } from '@/components/product-card/renderCart.js';
import { handlerButtonsCard } from '@/components/product-card/handlerButtonsCard.js';
import { handlerOrderForm } from '@/components/order-form/handlerOrderForm.js';

window.onload = function () {
  renderCart();
  handlerButtonsCard();
  handlerOrderForm();
};
