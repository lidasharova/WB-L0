import dataItems from '/src/data/dataItems.json';
import { updateButtons } from '/src/modules/productCard/updateButtons.js';
import { updateCountProduct } from '/src/modules/productCard/updateCountProduct.js';
import { updatePriceInCard } from '/src/modules/productCard/updatePriceInCard.js';
import { getTotalPrice } from '/src/modules/orderForm/getTotalPrice.js';
import { getOldTotalPrice } from '/src/modules/orderForm/getOldTotalPrice.js';
import { getDiscountSum } from '/src/modules/orderForm/getDiscountSum.js';
import { changeButtonOrderText } from '/src/modules/orderForm/changeButtonOrderText.js';

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
    getTotalPrice(this.products);
    getOldTotalPrice(this.products);
    getDiscountSum(this.products);
    changeButtonOrderText(this.products);
  }

  deleteProduct(idProduct) {
    const findProduct = this.products.find((product) => product.id === idProduct);
    if (findProduct && findProduct.count > 1) {
      findProduct.count--;
    }
    updateButtons(idProduct, this.products);
    updateCountProduct(idProduct, findProduct.count);
    updatePriceInCard(findProduct);
    getTotalPrice(this.products);
    getOldTotalPrice(this.products);
    getDiscountSum(this.products);
    changeButtonOrderText(this.products);
  }

  static getProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance;
  }
}
