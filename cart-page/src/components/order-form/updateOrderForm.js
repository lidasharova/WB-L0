import { getTotalPrice } from '@/components/order-form/getTotalPrice.js';
import { getOldTotalPrice } from '@/components/order-form/getOldTotalPrice.js';
import { getDiscountSum } from '@/components/order-form/getDiscountSum.js';
import { changeButtonOrderText } from '@/components/order-form/changeButtonOrderText.js';
import { changeCountItemsInOrderForm } from '@/components/order-form/changeCountItemsInOrderForm.js';
import { toggleCountersInOrderForm } from '@/utils/toggleCountersInOrderForm.js';

export const updateOrderForm = (selectedProducts) => {
  console.log(selectedProducts);
  if (selectedProducts.length !== 0) {
    getTotalPrice(selectedProducts);
    getOldTotalPrice(selectedProducts);
    getDiscountSum(selectedProducts);
    changeButtonOrderText(selectedProducts);
    changeCountItemsInOrderForm(selectedProducts);
  }
  toggleCountersInOrderForm(selectedProducts);
};
