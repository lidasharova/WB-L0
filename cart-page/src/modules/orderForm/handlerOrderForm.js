import { handlerPaymentModal } from '/src/modules/modal-payment/handlerPaymentModal.js';
import { handlerCheckboxPayment } from '/src/modules/orderForm/handlerCheckboxPayment.js';

export const handlerOrderForm = () => {
  handlerPaymentModal();
  handlerCheckboxPayment();
};
