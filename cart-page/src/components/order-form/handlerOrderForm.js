import { handlerPaymentModal } from '@/components/modal-payment/handlerPaymentModal.js';
import { handlerCheckboxPayment } from '@/components/order-form/handlerCheckboxPayment.js';
import { handlerDeliveryModal } from '@/components/modal-delivery/handlerDeliveryModal .js';
import { handlerDeleteButtonDeliveryAddress } from '@/components/modal-delivery/handlerDeleteButtonDeliveryAddress.js';
import { chooseDeliveryMethod } from '@/components/modal-delivery/chooseDeliveryMethod.js';

export const handlerOrderForm = () => {
  handlerDeliveryModal();
  chooseDeliveryMethod();
  handlerDeleteButtonDeliveryAddress();
  handlerPaymentModal();
  handlerCheckboxPayment();
};
