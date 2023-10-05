import '@/sass/style.scss';
import { renderCart } from '@/components/productCard/renderCart.js';
import { handlerButtonsCard } from '@/components/productCard/handlerButtonsCard.js';
import { handlerOrderForm } from '@/components/orderForm/handlerOrderForm.js';

window.onload = function () {
  renderCart();
  handlerButtonsCard();
  handlerOrderForm();
};
