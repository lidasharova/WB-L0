export const modalOrderButton = () => {
  const modalOrderButton = document.querySelector('.button-do-order');
  const modal = document.querySelector('.modal-order-button-disabled');
  const closeButton = document.querySelector('.modal-order-button-disabled__close-button');
  if (modalOrderButton) {
    modalOrderButton.addEventListener('click', () => {
      modal.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }
};
