import { handleAction } from '@/components/product-card/update-card/handleAction.js';

export const handlerFavoriteButtons = () => {
  const favoriteButtons = document.querySelectorAll('.list-item__favorite-button');
  favoriteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const idProduct = event.target.dataset.id;
      handleAction('favorite', idProduct);
    });
  });
};
