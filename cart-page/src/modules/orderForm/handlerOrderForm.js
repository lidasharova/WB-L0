import { handlerPaymentModal } from '/src/modules/modal-payment/handlerPaymentModal.js';
import { handlerCheckboxPayment } from '/src/modules/orderForm/handlerCheckboxPayment.js';
import { handlerDeliveryModal } from '/src/modules/modal-delivery/handlerDeliveryModal .js';

export const handlerOrderForm = () => {
  handlerDeliveryModal();
  handlerPaymentModal();
  handlerCheckboxPayment();
};
