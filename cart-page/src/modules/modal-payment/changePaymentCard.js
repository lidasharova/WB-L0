import dataPaymentCards from '../../data/dataPaymentCards.json';
const dataCards = dataPaymentCards;

export function changePaymentCard(id) {
  const iconCards = document.querySelectorAll('.payment-card__icon');
  const numberCards = document.querySelectorAll('.payment__card-number');
  const currentCard = dataCards.find((card) => card.id === id);

  if (iconCards.length > 0 && numberCards.length > 0 && currentCard) {
    iconCards.forEach((icon) => {
      icon.style.backgroundImage = `url(${currentCard.icon})`;
    });
    numberCards.forEach((number) => {
      number.textContent = currentCard.number;
    });
  }
}
