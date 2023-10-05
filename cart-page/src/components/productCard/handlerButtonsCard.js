import { increaseCountProductsByPlus } from '@/components/productCard/increaseCountProductsByPlus.js';
import { decreaseCountProductsByMinus } from '@/components/productCard/decreaseCountProductsByMinus.js';

export const handlerButtonsCard = () => {
  increaseCountProductsByPlus();
  decreaseCountProductsByMinus();
};
