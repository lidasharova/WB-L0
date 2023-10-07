import dataUserAddresses from '@/data/dataUserAddresses.json';
import dataAddressesPickup from '@/data/dataAddressesPickup.json';

const orderFormTitle = document.querySelector('.cart-order__section-title');
const deliverySectionText = document.querySelector('.delivery__table__item');

export const changeDeliveryAddress = (id) => {
  const currentMethod = document.querySelector('.delivery-modal__addresses-wrapper.open');
  if (currentMethod.classList.contains('courier')) {
    changeDeliveryAddressCourier(id);
  } else {
    changeDeliveryAddressPickup(id);
  }
};

export const changeDeliveryAddressCourier = (id) => {
  const textAddressElements = document.querySelectorAll('.delivery-current-address');

  const currentAddress = dataUserAddresses.find((address) => address.id === id);

  if (textAddressElements.length > 0 && currentAddress) {
    textAddressElements.forEach((address) => {
      address.textContent = currentAddress.address;
    });
    orderFormTitle.textContent = currentAddress.title;
    deliverySectionText.textContent = currentAddress.delivery;
  }
};

export const changeDeliveryAddressPickup = (id) => {
  const textAddressElements = document.querySelectorAll('.delivery-current-address');
  const grade = document.querySelector('.address__grade');
  const office = document.querySelector('.address__office-hours');

  const currentAddress = dataAddressesPickup.find((address) => address.id === id);

  if (textAddressElements.length > 0 && currentAddress) {
    textAddressElements.forEach((address) => {
      address.textContent = currentAddress.address;
      orderFormTitle.textContent = currentAddress.title;
      deliverySectionText.textContent = currentAddress.delivery;
      grade ? (grade.textContent = currentAddress.grade) : (grade.textContent = '');
      office.textContent = currentAddress.office;
    });
  }
};
