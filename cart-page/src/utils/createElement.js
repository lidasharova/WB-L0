export function createHTMLElement(tag, classes, attr, text) {
  const element = document.createElement(tag);

  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  if (attr) {
    element.dataset.id = attr;
  }

  return element;
}
