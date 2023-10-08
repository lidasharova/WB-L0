export const handlerTooltipCondition = () => {
  const links = [
    {
      link: document.querySelector('.conditions__link.order-form-link'),
      tooltip: document.querySelector('.tooltip-condition.order-form-tooltip'),
    },
    {
      link: document.querySelector('.conditions__link.main-link-condition'),
      tooltip: document.querySelector('.tooltip-condition.form-tooltip'),
    },
  ];

  links.forEach(({ link, tooltip }) => {
    link.addEventListener('mouseover', () => {
      tooltip.classList.add('open');
    });
    link.addEventListener('mouseout', () => {
      tooltip.classList.remove('open');
    });
  });
};
