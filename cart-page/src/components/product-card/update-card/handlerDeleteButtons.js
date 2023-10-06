import { handleAction } from '@/components/product-card/update-card/handleAction.js';

export const handlerDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll('.list-item__delete-button');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const idProduct = event.target.dataset.id;
      handleAction('delete', idProduct);
    });
  });
};
