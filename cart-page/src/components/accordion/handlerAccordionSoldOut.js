export const handlerAccordionSoldOut = () => {
  const iconOpen = document.querySelector('.icon-soldout');
  const cardsWrapper = document.querySelector('.cart-list__items-out__wrapper');

  iconOpen.addEventListener('click', () => {
    iconOpen.classList.toggle('closed-icon');
    cardsWrapper.classList.toggle('close');
  });
};
