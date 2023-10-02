import './style.css';
import { renderCart } from '/src/modules/productCard/renderCart.js';
import { handlerButtonsCard } from '/src/modules/productCard/handlerButtonsCard.js';
import { handlerPaymentModal } from '/src/modules/modal-payment/handlerPaymentModal.js';
window.onload = function () {
  renderCart();
  handlerButtonsCard();
  handlerPaymentModal();
};
