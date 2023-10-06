import { modalOrderButton } from '@/components/order-form/modalOrderButton';

export const setStateOrderButton = (count) => {
  const button = document.querySelector('.button-do-order');
  if (count === 0) {
    button.classList.add('disabled-order-button');
    modalOrderButton();
  } else {
    button.classList.remove('disabled-order-button');
  }
};
