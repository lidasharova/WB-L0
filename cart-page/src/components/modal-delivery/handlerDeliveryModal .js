import { changeDeliveryAddress } from '@/components/modal-delivery/changeDeliveryAddress.js';
import { resetCheckboxInModal } from '@/utils/resetCheckboxInModal.js';

const changeDeliveryButtons = document.querySelectorAll('.change-button-delivery');
const deliveryModal = document.querySelector('.delivery-modal');
const closeButton = document.querySelector('.delivery-modal__close');
const checkboxes = document.querySelectorAll('.checkbox-delivery-address');
const chooseCurrentAddressButton = document.querySelector('.button-choose-delivery-address');
const addressWrappers = document.querySelectorAll('.delivery-modal__address__data__wrapper');
let addressId = '';

export const openDeliveryModal = () => {
  deliveryModal.classList.add('open');
  document.body.classList.add('overflow-hidden');
};

export const closeDeliveryModal = () => {
  deliveryModal.classList.remove('open');
  document.body.classList.remove('overflow-hidden');
};

export const handlerDeliveryModal = () => {
  const handleCheckboxClick = (event) => {
    const clickedAddress = event.currentTarget;
    addressId = clickedAddress.dataset.id;
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
    const relatedCheckbox = document.querySelector(
      `.circle-checkbox.checkbox-delivery-address[data-id="${addressId}"]`
    );

    relatedCheckbox.classList.add('checked');
  };
  changeDeliveryButtons.forEach((button) => {
    button.addEventListener('click', openDeliveryModal);
  });
  closeButton.addEventListener('click', () => {
    closeDeliveryModal();
    resetCheckboxInModal('delivery');
  });
  chooseCurrentAddressButton.addEventListener('click', () => {
    changeDeliveryAddress(addressId);
    closeDeliveryModal();
  });
  addressWrappers.forEach((addressWrapper) => {
    addressWrapper.addEventListener('click', handleCheckboxClick);
  });
};
