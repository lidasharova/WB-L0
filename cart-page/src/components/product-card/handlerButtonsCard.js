import { increaseCountProductsByPlus } from '@/components/product-card/increaseCountProductsByPlus.js';
import { decreaseCountProductsByMinus } from '@/components/product-card/decreaseCountProductsByMinus.js';
import { handlerDeleteButtons } from '@/components/product-card/handlerDeleteButtons.js';
import { handlerFavoriteButtons } from '@/components/favorite-products/handlerFavoriteButtons.js';

export const handlerButtonsCard = () => {
  increaseCountProductsByPlus();
  decreaseCountProductsByMinus();
  handlerDeleteButtons();
  handlerFavoriteButtons();
};
