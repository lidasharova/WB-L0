export const chooseDeliveryMethod = () => {
  const deliveryMethodButtons = document.querySelectorAll('.delivery-method-button');
  const courierModal = document.querySelector('.delivery-modal__addresses-wrapper.courier');
  const pickupModal = document.querySelector('.delivery-modal__addresses-wrapper.pickup');

  if (deliveryMethodButtons.length > 0) {
    deliveryMethodButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const currentButton = event.target;
        const idDeliveryMethod = event.target.dataset.id;
        deliveryMethodButtons.forEach((button) => {
          button.classList.remove('current-delivery-method');
        });
        currentButton.classList.add('current-delivery-method');
        if (idDeliveryMethod === 'courier') {
          courierModal.classList.add('open');
          pickupModal.classList.remove('open');
        } else {
          courierModal.classList.remove('open');
          pickupModal.classList.add('open');
        }
      });
    });
  }
};
