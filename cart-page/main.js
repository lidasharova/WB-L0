import '@/sass/style.scss';
import { renderCart } from '@/components/product-card/create-card/renderCart.js';
import { handlerButtonsCard } from '@/components/product-card/update-card/handlerButtonsCard.js';
import { handlerOrderForm } from '@/components/order-form/handlerOrderForm.js';
import { handlerLabelInput } from '@/components/user-form/handlerLabelInput.js';
import { handlerErrorsInput } from '@/components/user-form/checkInput.js';

window.onload = function () {
  renderCart();
  handlerButtonsCard();
  handlerOrderForm();
  handlerLabelInput();
  handlerErrorsInput();
};
