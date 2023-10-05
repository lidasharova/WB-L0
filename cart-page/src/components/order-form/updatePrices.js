import { getTotalPrice } from '@/components/order-form/getTotalPrice.js';
import { getOldTotalPrice } from '@/components/order-form/getOldTotalPrice.js';
import { getDiscountSum } from '@/components/order-form/getDiscountSum.js';
import { changeButtonOrderText } from '@/components/order-form/changeButtonOrderText.js';
import { changeCountItemsInOrderForm } from '@/components/order-form/changeCountItemsInOrderForm.js';

export const updatePrices = (cart) => {
  getTotalPrice(cart);
  getOldTotalPrice(cart);
  getDiscountSum(cart);
  changeButtonOrderText(cart);
  changeCountItemsInOrderForm(cart);
};
