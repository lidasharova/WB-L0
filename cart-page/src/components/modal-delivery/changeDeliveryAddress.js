import dataUserAddresses from '@/data/dataAddresses.json';
const dataAddresses = dataUserAddresses;
console.log(dataAddresses);

export function changeDeliveryAddress(id) {
  const textAddressElements = document.querySelectorAll('.delivery-current-address');
  console.log(textAddressElements);

  const currentAddress = dataAddresses.find((address) => address.id === id);
  console.log(currentAddress);

  if (textAddressElements.length > 0 && currentAddress) {
    textAddressElements.forEach((address) => {
      address.textContent = currentAddress.address;
    });
  }
}
