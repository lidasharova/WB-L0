import { handlerPaymentModal } from '/src/modules/modal-payment/handlerPaymentModal.js';
import { handlerCheckboxPayment } from '/src/modules/orderForm/handlerCheckboxPayment.js';
// import { handlerCheckboxDelivery } from '/src/modules/orderForm/handlerCheckboxDelivery.js';

export const handlerOrderForm = () => {
  handlerPaymentModal();
  handlerCheckboxPayment();
  // handlerCheckboxDelivery();
};
