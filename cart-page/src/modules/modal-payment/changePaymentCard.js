import dataPaymentCards from '../../data/dataPaymentCards.json';
const dataCards = dataPaymentCards;

export function changePaymentCard(id) {
  const iconCard = document.querySelector('.cart-order__payment-card__icon');
  const numberCard = document.querySelector('.cart-order__payment__card-number');

  const currentCard = dataCards.find((card) => card.id === id);
  if (iconCard && currentCard) {
    iconCard.style.backgroundImage = `url(${currentCard.icon})`;
    numberCard.textContent = currentCard.number;
  }
}
