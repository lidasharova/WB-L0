import dataItems from '/src/data/dataItems.json';
import { updateButtons } from '/src/modules/productCard/updateButtons.js';
import { updateCountProduct } from '/src/modules/productCard/updateCountProduct.js';
import { updatePrice } from '/src/modules/productCard/updatePrice.js';

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
    updatePrice(newProduct);
  }

  deleteProduct(idProduct) {
    const findProduct = this.products.find((product) => product.id === idProduct);
    if (findProduct && findProduct.count > 1) {
      findProduct.count--;
    }
    updateButtons(idProduct, this.products);
    updateCountProduct(idProduct, findProduct.count);
    updatePrice(findProduct);
  }

  static getProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance;
  }
}
