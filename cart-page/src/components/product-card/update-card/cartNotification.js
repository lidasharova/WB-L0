export const cartNotification = (products) => {
  const notification = document.querySelector('.cart-notification');
  products.length >= 1 ? (notification.textContent = products.length) : notification.remove();
};
