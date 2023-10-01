import {increaseCountProductsByPlus} from "/src/modules/productCard/increaseCountProductsByPlus.js";
import {decreaseCountProductsByMinus} from "/src/modules/productCard/decreaseCountProductsByMinus.js";

export const handlerButtonsCard = () => {
  increaseCountProductsByPlus();
  decreaseCountProductsByMinus();
};


