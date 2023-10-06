import { increaseCountProductsByPlus } from '@/components/product-card/update-card/increaseCountProductsByPlus.js';
import { decreaseCountProductsByMinus } from '@/components/product-card/update-card/decreaseCountProductsByMinus.js';
import { handlerDeleteButtons } from '@/components/product-card/update-card/handlerDeleteButtons.js';
import { handlerFavoriteButtons } from '@/components/favorite-products/handlerFavoriteButtons.js';
import {
  handlerCheckboxCard,
  handlerMainCheckbox,
} from '@/components/checkbox-card/handlerCheckboxCard.js';

export const handlerButtonsCard = () => {
  increaseCountProductsByPlus();
  decreaseCountProductsByMinus();
  handlerDeleteButtons();
  handlerFavoriteButtons();
  handlerMainCheckbox();
  handlerCheckboxCard();
};
