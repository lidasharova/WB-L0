export const handlerDeleteButtonDeliveryAddress = () => {
  const deleteButtons = document.querySelectorAll('.delivery-modal__delete-icon.item-icon-btn');
  if (deleteButtons.length > 0) {
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const idDeliveryAddress = event.target.dataset.id;
        deleteDeliveryAddress(idDeliveryAddress);
      });
    });
  }
};

const deleteDeliveryAddress = (idDeliveryAddress) => {
  const addressWrapper = document.querySelector(
    `.delivery-modal__address-wrapper[data-id=${idDeliveryAddress}]`
  );
  addressWrapper.remove();
};
