import dataItems from '/src/data/dataItems.json';
import { updateButtons } from '/src/modules/productCard/updateButtons.js';
import { updateCountProduct } from '/src/modules/productCard/updateCountProduct.js';
import { updatePriceInCard } from '/src/modules/productCard/updatePriceInCard.js';
import { changeTotalPrice } from '/src/modules/orderForm/changeTotalPrice.js';
import { changeOldTotalPrice } from '/src/modules/orderForm/changeOldTotalPrice.js';
import { changeDiscountSum } from '/src/modules/orderForm/changeDiscountSum.js';

export class CartProducts {
  constructor() {
    this.products = dataItems;
  }
  addProduct(idNewProduct) {
    const newProduct = this.products.find((product) => product.id === idNewProduct);
    if (newProduct) {
      if (newProduct.count < newProduct.maxCount) {
        newProduct.count++;
      }
    } else {
      const newProduct = { id: idNewProduct, count: 1 };
      this.products.push(newProduct);
    }
    updateButtons(idNewProduct, this.products);
    updateCountProduct(idNewProduct, newProduct.count);
    updatePriceInCard(newProduct);
    changeTotalPrice(this.products);
    changeOldTotalPrice(this.products);
    changeDiscountSum(this.products);
  }

  deleteProduct(idProduct) {
    const findProduct = this.products.find((product) => product.id === idProduct);
    if (findProduct && findProduct.count > 1) {
      findProduct.count--;
    }
    updateButtons(idProduct, this.products);
    updateCountProduct(idProduct, findProduct.count);
    updatePriceInCard(findProduct);
    changeTotalPrice(this.products);
    changeOldTotalPrice(this.products);
    changeDiscountSum(this.products);
  }

  static getProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance;
  }
}
