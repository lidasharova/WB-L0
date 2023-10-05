import '@/sass/style.scss';
import { renderCart } from '@/components/product-card/create-card/renderCart.js';
import { handlerButtonsCard } from '@/components/product-card/update-card/handlerButtonsCard.js';
import { handlerOrderForm } from '@/components/order-form/handlerOrderForm.js';
import { handlerCheckboxCards } from '@/components/checkbox-card/handlerCheckboxCards.js';

window.onload = function () {
  renderCart();
  handlerButtonsCard();
  handlerCheckboxCards();
  handlerOrderForm();
};
