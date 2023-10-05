export const getWordFromNumberItems = (count, wordForms) => {
  const numberStr = Math.abs(count).toString();
  const lastDigit = numberStr.slice(-1);
  if (numberStr.length >= 2 && numberStr.slice(-2, -1) === '1') {
    return `${count} ${wordForms[2]}`;
  }
  if (lastDigit === '1') {
    return `${count} ${wordForms[0]}`;
  }
  if (lastDigit >= '2' && lastDigit <= '4') {
    return `${count} ${wordForms[1]}`;
  }
  return `${count} ${wordForms[2]}`;
};
