import dataSelectedProducts from '@/data/dataSelectedProducts.json';
import { CartProducts } from '@/components/product-store/CartProducts.js';

export class SelectedProducts {
  constructor() {
    this.products = dataSelectedProducts;
  }
  addSelectedProduct(idSelectedProduct) {
    const cart = CartProducts.getAvailableProducts();
    const selectedProduct = cart.find((product) => product.id === idSelectedProduct);
    const isProductInSelected = this.products.some((product) => product.id === idSelectedProduct);
    if (selectedProduct && !isProductInSelected) {
      this.products.push(selectedProduct);
    }
  }

  deleteSelectedProduct(idProduct) {
    const product = this.products.find((product) => product.id === idProduct);
    if (product) {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
    }
  }

  increaseSelectedProduct(idProduct) {
    const cart = CartProducts.getAvailableProducts();
    const count = cart.find((item) => item.id === idProduct).count;
    const product = this.products.find((product) => product.id === idProduct);
    if (product && product.count < count) {
      product.count++;
    }
  }

  decreaseSelectedProduct(idProduct) {
    const product = this.products.find((product) => product.id === idProduct);
    if (product && product.count > 1) {
      product.count--;
    }
  }

  static selectedAllProducts() {
    const cart = CartProducts.getAvailableProducts();
    this.products = cart;
  }
  static deleteAllSelectedProducts() {
    this.products = [];
  }
  static getSelectedProducts() {
    if (!this.instance) {
      this.instance = new SelectedProducts();
    }
    return this.instance;
  }
}
