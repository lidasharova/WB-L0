export const handlerMenu = () => {
  const menuButton = document.querySelector('.header__menu');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      document.querySelector('.header__menu').classList.toggle('open-menu');
    });
  }
};
