import dataProvider from '@/data/dataProvider.json';

export const handlerTooltipProvider = () => {
  const icons = document.querySelectorAll('.provider-info__icon');
  const tooltips = Array.from(document.querySelectorAll('.provider-info__tooltip'));

  icons.forEach((icon) => {
    icon.addEventListener('mouseover', (e) => {
      const id = e.target.dataset.id;
      const currentTooltip = tooltips.find((tooltip) => tooltip.dataset.id === id);

      const currentDate = dataProvider.find((item) => item.id.includes(id));

      const tooltipTitle = currentTooltip.querySelector('.provider-info-title');
      const tooltipNumber = currentTooltip.querySelector('.provider-info-ogrn');
      const tooltipText = currentTooltip.querySelector('.provider-info-text');
      tooltipTitle.innerText = currentDate.name;
      tooltipNumber.innerText = currentDate.number;
      tooltipText.innerText = currentDate.address;
      currentTooltip.classList.add('open');
    });

    icon.addEventListener('mouseout', () => {
      const currentTooltip = tooltips.find((tooltip) => tooltip.classList.contains('open'));
      if (currentTooltip) {
        currentTooltip.classList.remove('open');
      }
    });
  });
};
