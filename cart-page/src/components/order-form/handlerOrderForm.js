import { handlerPaymentModal } from '@/components/modal-payment/handlerPaymentModal.js';
import { handlerCheckboxPayment } from '@/components/order-form/handlerCheckboxPayment.js';
import { handlerDeliveryModal } from '@/components/modal-delivery/handlerDeliveryModal .js';

export const handlerOrderForm = () => {
  handlerDeliveryModal();
  handlerPaymentModal();
  handlerCheckboxPayment();
};
