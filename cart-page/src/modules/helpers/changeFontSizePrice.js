export const changeFontSizePrice = (newPrice, newPriceNumber) => {
  const maxFontSize = '20px';
  const maxLineHeight = '24px';
  const minFontSize = '16px';
  const minLineHeight = '28px';
  const letterSpacing = '-0.01em';

  const threshold = 999;
  newPriceNumber > threshold
    ? ((newPrice.style.fontSize = minFontSize),
      (newPrice.style.lineHeight = minLineHeight),
      (newPrice.style.letterSpacing = letterSpacing))
    : ((newPrice.style.fontSize = maxFontSize),
      (newPrice.style.lineHeight = maxLineHeight),
      (newPrice.style.letterSpacing = 'normal'));
};
