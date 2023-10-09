import { getTotalPrice } from '@/components/order-form/getTotalPrice.js';
import { getOldTotalPrice } from '@/components/order-form/getOldTotalPrice.js';
import { getDiscountSum } from '@/components/order-form/getDiscountSum.js';
import { changeButtonOrderText } from '@/components/order-form/changeButtonOrderText.js';
import { changeCountItemsInOrderForm } from '@/components/order-form/changeCountItemsInOrderForm.js';
import { toggleCountersInOrderForm } from '@/utils/toggleCountersInOrderForm.js';
import { updateDeliveryDate } from '@/components/delivery-section/updateDeliveryDate.js';

export const updateOrderForm = (selectedProducts) => {
  if (selectedProducts.length !== 0) {
    getTotalPrice(selectedProducts);
    getOldTotalPrice(selectedProducts);
    getDiscountSum(selectedProducts);
    changeButtonOrderText(selectedProducts);
    changeCountItemsInOrderForm(selectedProducts);
    updateDeliveryDate(selectedProducts);
  }
  toggleCountersInOrderForm(selectedProducts);
  updateDeliveryDate(selectedProducts);
};
