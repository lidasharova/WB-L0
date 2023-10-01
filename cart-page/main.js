import './style.css';
import { renderCart } from '/src/modules/productCard/renderCart.js';
import { handlerButtonsCard } from '/src/modules/productCard/handlerButtonsCard.js';
window.onload = function () {
  renderCart();
  handlerButtonsCard();
};
