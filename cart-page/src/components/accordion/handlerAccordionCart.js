import { updateHeaderAccordion } from '@/components/accordion/updateHeaderAccordion.js';

export const handlerAccordionCart = () => {
  const iconOpen = document.querySelector('.icon-available');
  const cardsWrapper = document.querySelector('.cart-list__items__wrapper');
  const headerCheckbox = document.querySelector('.cart-accordion-available__checkbox');
  const headerCount = document.querySelector('.cart-accordion-available__count');

  iconOpen.addEventListener('click', () => {
    iconOpen.classList.toggle('closed-icon');
    headerCheckbox.classList.toggle('close');
    cardsWrapper.classList.toggle('close');
    updateHeaderAccordion();
    headerCount.classList.toggle('open');
  });
};
