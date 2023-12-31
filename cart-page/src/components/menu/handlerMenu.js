export const handlerMenu = () => {
  const menuButton = document.querySelector('.header__menu');
  const menuMobile = document.querySelector('.header__menu-mobile');
  const closeMenu = document.querySelector('.menu-modal__close');
  const overlay = document.querySelector('.menu-modal-overlay');
  if (menuButton && closeMenu && menuMobile) {
    menuButton.addEventListener('click', () => {
      document.querySelector('.menu-modal').classList.add('active');
      document.querySelector('.modal-form-menu').classList.add('active');
      overlay.classList.add('active');
    });
    menuMobile.addEventListener('click', () => {
      document.querySelector('.menu-modal').classList.add('active');
      document.querySelector('.modal-form-menu').classList.add('active');
      overlay.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
      document.querySelector('.menu-modal').classList.remove('active');
      document.querySelector('.modal-form-menu').classList.remove('active');
      overlay.classList.remove('active');
    });
  }
};
