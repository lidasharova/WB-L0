export const changeFontSizePrice = (newPriceElement, newPriceNumber) => {
  const maxFontSize = '20px';
  const maxLineHeight = '24px';
  const minFontSize = '16px';
  const minLineHeight = '28px';
  const letterSpacing = '-0.01em';

  const threshold = 100000;
  newPriceNumber > threshold
    ? ((newPriceElement.style.fontSize = minFontSize),
      (newPriceElement.style.lineHeight = minLineHeight),
      (newPriceElement.style.letterSpacing = letterSpacing))
    : ((newPriceElement.style.fontSize = maxFontSize),
      (newPriceElement.style.lineHeight = maxLineHeight),
      (newPriceElement.style.letterSpacing = 'normal'));
};
