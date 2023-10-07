import { changeDeliveryAddress } from '@/components/modal-delivery/changeDeliveryAddress.js';
import { resetCheckboxInModal } from '@/utils/resetCheckboxInModal.js';
export const handlerDeliveryModal = () => {
  const changeDeliveryButtons = document.querySelectorAll('.change-button-delivery');
  const deliveryModal = document.querySelector('.delivery-modal');
  const closeButton = document.querySelector('.delivery-modal__close');
  const checkboxes = document.querySelectorAll('.checkbox-delivery-address');
  const chooseCurrentAddressButton = document.querySelector('.button-choose-delivery-address');
  const addressWrappers = document.querySelectorAll('.delivery-modal__address__data__wrapper');
  let addressId = '';
  const closeOpenDeliveryModal = () => {
    deliveryModal.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
  };
  const handleCheckboxClick = (event) => {
    const clickedAddress = event.currentTarget;
    addressId = clickedAddress.dataset.id;
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked');
    });
    const relatedCheckbox = document.querySelector(
      `.checkbox-delivery-address[data-id="${addressId}"]`
    );
    relatedCheckbox.classList.add('checked');
  };
  changeDeliveryButtons.forEach((button) => {
    button.addEventListener('click', closeOpenDeliveryModal);
  });
  closeButton.addEventListener('click', () => {
    closeOpenDeliveryModal();
    resetCheckboxInModal('delivery');
  });
  chooseCurrentAddressButton.addEventListener('click', () => {
    changeDeliveryAddress(addressId);
    closeOpenDeliveryModal();
  });
  addressWrappers.forEach((addressWrapper) => {
    addressWrapper.addEventListener('click', handleCheckboxClick);
  });
};
