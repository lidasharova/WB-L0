import dataDelivery from '@/data/dataDelivery.json';

const clearTable = () => {
  const deliveryCostWrapper = document.querySelector('.delivery__cost__wrapper');
  const parentElement = deliveryCostWrapper.parentElement;

  while (parentElement.lastElementChild !== deliveryCostWrapper) {
    parentElement.removeChild(parentElement.lastElementChild);
  }
};
const table = document.querySelector('.delivery__table');

let hasProductsInSecondStock = false;
export const updateDeliveryDate = (selectedProducts) => {
  clearTable();
  addFirstStock(selectedProducts);
  addSecondStock(selectedProducts);
};

const addFirstStock = (selectedProducts) => {
  const oneStock = document.createElement('div');
  oneStock.classList.add('delivery__date__item');
  const dateElement = document.createElement('div');
  dateElement.classList.add('delivery__table__item', 'table-item-font');
  dateElement.textContent = dataDelivery[0];
  oneStock.append(dateElement);
  const datePhotoWrapper = document.createElement('ul');
  datePhotoWrapper.classList.add('delivery__date__photos__wrapper');
  oneStock.append(datePhotoWrapper);
  selectedProducts.forEach((product) => {
    const datePhoto = document.createElement('li');
    datePhoto.classList.add('delivery__date__photo');
    datePhoto.style.backgroundImage = `url(${product.iconUrl})`;
    datePhotoWrapper.append(datePhoto);
    const countLabel = document.createElement('div');
    countLabel.classList.add('delivery-icon__count');
    if (product.delivery['2'] && product.count > product.delivery['1']) {
      countLabel.textContent = product.delivery['1'];
    } else {
      countLabel.textContent = product.count;
    }
    if (product.count >= 2) {
      datePhoto.append(countLabel);
    }
  });
  table.append(oneStock);
};

const addSecondStock = (selectedProducts) => {
  const twoStock = document.createElement('div');
  twoStock.classList.add('delivery__date__item');
  const dateElement = document.createElement('div');
  dateElement.classList.add('delivery__table__item', 'table-item-font');
  dateElement.textContent = dataDelivery[1];
  twoStock.append(dateElement);
  const datePhotoWrapper = document.createElement('ul');
  datePhotoWrapper.classList.add('delivery__date__photos__wrapper');
  twoStock.append(datePhotoWrapper);
  selectedProducts.forEach((product) => {
    if (product.count > product.delivery['1']) {
      hasProductsInSecondStock = true;
      const datePhoto = document.createElement('li');
      datePhoto.classList.add('delivery__date__photo');
      datePhoto.style.backgroundImage = `url(${product.iconUrl})`;
      datePhotoWrapper.append(datePhoto);
      const countLabel = document.createElement('div');
      countLabel.classList.add('delivery-icon__count');
      countLabel.textContent = product.count - product.delivery['1'];
      if (product.count >= 2) {
        datePhoto.append(countLabel);
      }
    }
  });
  if (hasProductsInSecondStock) {
    table.append(twoStock);
  }
};
