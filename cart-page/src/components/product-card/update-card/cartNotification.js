export const cartNotification = (products) => {
  const notifications = document.querySelectorAll('.cart-notification');
  notifications.forEach((notification) => {
    products.length >= 1 ? (notification.textContent = products.length) : notification.remove();
  });
};
