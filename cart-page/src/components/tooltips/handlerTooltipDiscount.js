export const handlerTooltipDiscount = () => {
  const oldPriceLinks = document.querySelectorAll('.list-item__old-price');
  const tooltips = Array.from(document.querySelectorAll('.price-info__tooltip'));

  oldPriceLinks.forEach((oldPriceLink) => {
    oldPriceLink.addEventListener('mouseover', (e) => {
      const id = e.target.dataset.id;
      const currentTooltip = tooltips.find((tooltip) => tooltip.dataset.id === id);
      currentTooltip.classList.add('open');
    });

    oldPriceLink.addEventListener('mouseout', () => {
      const currentTooltip = tooltips.find((tooltip) => tooltip.classList.contains('open'));
      if (currentTooltip) {
        currentTooltip.classList.remove('open');
      }
    });
  });
};
