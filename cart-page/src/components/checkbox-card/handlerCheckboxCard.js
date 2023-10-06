import { updatePrices } from '@/components/order-form/updatePrices.js';
import { filterSelectedProducts } from '@/utils/filterSelectedProducts.js';
import { CartProducts } from '@/components/product-store/CartProducts.js';
const cart = CartProducts.getAvailableProducts();

let arraySelectedId = [];
let arraySelectedProducts = [];

export const handlerCheckboxCard = () => {
  const checkboxes = document.querySelectorAll('.checkbox__decor.checkbox-card');
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
  const checkboxArray = Array.from(checkboxes);

  console.log(checkboxes);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
      const idProduct = event.target.dataset.id;

      if (!checkbox.classList.contains('checkbox-checked')) {
        checkbox.classList.add('checkbox-checked');
        arraySelectedId.push(idProduct);
        console.log(arraySelectedId);
      } else {
        checkbox.classList.remove('checkbox-checked');
        const index = arraySelectedId.indexOf(idProduct);
        arraySelectedId.splice(index, 1);
        console.log(arraySelectedId);
      }
      arraySelectedProducts = filterSelectedProducts(cart, arraySelectedId);
      updatePrices(arraySelectedProducts);
      updateMainCheckboxState();
    });
  });

  const updateMainCheckboxState = () => {
    console.log(checkboxArray);
    const areAllSelected = checkboxArray.every((checkbox) =>
      checkbox.classList.contains('checkbox-checked')
    );
    console.log(areAllSelected);
    if (areAllSelected) {
      mainCheckbox.classList.add('checkbox-checked');
    } else {
      mainCheckbox.classList.remove('checkbox-checked');
    }
  };
};

export const handlerMainCheckbox = () => {
  const checkboxes = document.querySelectorAll('.checkbox__decor.checkbox-card');
  const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');

  mainCheckbox.addEventListener('click', () => {
    const isChecked = mainCheckbox.classList.contains('checkbox-checked');

    checkboxes.forEach((checkbox) => {
      const idProduct = checkbox.dataset.id;

      if (!isChecked && !checkbox.classList.contains('checkbox-checked')) {
        mainCheckbox.classList.add('checkbox-checked');
        checkbox.classList.add('checkbox-checked');
        arraySelectedId.push(idProduct);
      } else if (isChecked && checkbox.classList.contains('checkbox-checked')) {
        mainCheckbox.classList.remove('checkbox-checked');
        checkbox.classList.remove('checkbox-checked');
        const index = arraySelectedId.indexOf(idProduct);
        arraySelectedId.splice(index, 1);
      }
    });

    arraySelectedProducts = filterSelectedProducts(cart, arraySelectedId);
    updatePrices(arraySelectedProducts);
  });
};

// export const handlerMainCheckbox = () => {
//   const checkboxes = document.querySelectorAll('.checkbox__decor.checkbox-card');
//   const mainCheckbox = document.querySelector('.checkbox__decor.main-checkbox');
//   mainCheckbox.addEventListener('click', () => {
//     console.log('зашел в обработчик');
//     checkboxes.forEach((checkbox) => {
//       if (mainCheckbox.classList.contains('checkbox-checked')) {
//         mainCheckbox.classList.remove('checkbox-checked');
//         checkbox.classList.remove('checkbox-checked');
//         updatePrices(cart);
//       } else {
//         mainCheckbox.classList.add('checkbox-checked');
//         checkbox.classList.add('checkbox-checked');
//         updatePrices([]);
//       }
//     });
//   });
// };
