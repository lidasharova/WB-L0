import { changePaymentCard } from '@/components/modal-payment/changePaymentCard.js';
import { resetCheckboxInModal } from '@/utils/resetCheckboxInModal.js';
export const handlerPaymentModal = () => {
  const changePaymentCardButtons = document.querySelectorAll('.change-button-payment');
  const paymentModal = document.querySelector('.payment-modal');
  const closeButton = document.querySelector('.payment-modal__close');
  const checkboxes = document.querySelectorAll('.checkbox-payment-card');
  const choosePaymentCardButton = document.querySelector('.button-choose-payment-card');
  const cardsWrappers = document.querySelectorAll('.payment-card__wrapper');
  let cardId = '';
  const closeOpenPaymentModal = () => {
    paymentModal.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
  };
  const handleCheckboxClick = (event) => {
    const clickedCard = event.currentTarget;
    cardId = clickedCard.dataset.id;
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
    const relatedCheckbox = document.querySelector(`.checkbox-payment-card[data-id="${cardId}"]`);
    relatedCheckbox.classList.add('checked');
  };
  changePaymentCardButtons.forEach((button) => {
    button.addEventListener('click', closeOpenPaymentModal);
  });
  closeButton.addEventListener('click', () => {
    closeOpenPaymentModal();
    resetCheckboxInModal('payment');
  });
  choosePaymentCardButton.addEventListener('click', () => {
    changePaymentCard(cardId);
    closeOpenPaymentModal();
  });
  cardsWrappers.forEach((card) => {
    card.addEventListener('click', handleCheckboxClick);
  });
};
