import './src/sass/style.scss';
import { renderCart } from '/src/modules/productCard/renderCart.js';
import { handlerButtonsCard } from '/src/modules/productCard/handlerButtonsCard.js';
import { handlerOrderForm } from '/src/modules/orderForm/handlerOrderForm.js';


window.onload = function () {
  renderCart();
  handlerButtonsCard();
  handlerOrderForm();
};
