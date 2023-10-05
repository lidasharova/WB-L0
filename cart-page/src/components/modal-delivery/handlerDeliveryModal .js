import { changeDeliveryAddress } from '@/components/modal-delivery/changeDeliveryAddress.js';
export const handlerDeliveryModal = () => {
  const changeDeliveryButtons = document.querySelectorAll('.change-button-delivery');
  const deliveryModal = document.querySelector('.delivery-modal');
  const closeButton = document.querySelector('.delivery-modal__close');
  const checkboxes = document.querySelectorAll('.checkbox-delivery-address');
  console.log(checkboxes);
  const chooseCurrentAddressButton = document.querySelector('.button-choose-delivery-address');
  let addressId = '';
  const closeOpenDeliveryModal = () => {
    deliveryModal.classList.toggle('open');
  };
  const handleCheckboxClick = (event) => {
    const clickedCheckbox = event.target;
    console.log(clickedCheckbox);
    addressId = clickedCheckbox.dataset.id;
    console.log(addressId);
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
    clickedCheckbox.classList.add('checked');
  };
  if (changeDeliveryButtons.length > 0) {
    changeDeliveryButtons.forEach((button) => {
      button.addEventListener('click', closeOpenDeliveryModal);
    });
  }
  if (closeButton) {
    closeButton.addEventListener('click', closeOpenDeliveryModal);
  }
  if (chooseCurrentAddressButton) {
    chooseCurrentAddressButton.addEventListener('click', () => {
      changeDeliveryAddress(addressId);
      closeOpenDeliveryModal();
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheckboxClick);
  });
};
