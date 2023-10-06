import dataUserAddresses from '@/data/dataAddresses.json';
const dataAddresses = dataUserAddresses;

export function changeDeliveryAddress(id) {
  const textAddressElements = document.querySelectorAll('.delivery-current-address');

  const currentAddress = dataAddresses.find((address) => address.id === id);

  if (textAddressElements.length > 0 && currentAddress) {
    textAddressElements.forEach((address) => {
      address.textContent = currentAddress.address;
    });
  }
}
