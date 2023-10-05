import { changePaymentCard } from '@/components/modal-payment/changePaymentCard.js';
export const handlerPaymentModal = () => {
  let modalOpen = false;
  const changePaymentCardButtons = document.querySelectorAll('.change-button-payment');
  const paymentModal = document.querySelector('.payment-modal');
  const closeButton = document.querySelector('.payment-modal__close');
  const checkboxes = document.querySelectorAll('.checkbox-payment-card');
  console.log(checkboxes);
  const choosePaymentCardButton = document.querySelector('.button-choose-payment-card');
  let cardId = '';
  const closeOpenPaymentModal = () => {
    modalOpen = !modalOpen;
    paymentModal.classList.toggle('open');
  };
  const handleCheckboxClick = (event) => {
    const clickedCheckbox = event.target;
    cardId = clickedCheckbox.dataset.id;
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
    clickedCheckbox.classList.add('checked');
  };
  if (changePaymentCardButtons.length > 0) {
    changePaymentCardButtons.forEach((button) => {
      button.addEventListener('click', closeOpenPaymentModal);
    });
  }
  if (closeButton) {
    closeButton.addEventListener('click', closeOpenPaymentModal);
  }
  if (choosePaymentCardButton) {
    choosePaymentCardButton.addEventListener('click', () => {
      changePaymentCard(cardId);
      closeOpenPaymentModal();
    });
  }
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheckboxClick);
  });
};
