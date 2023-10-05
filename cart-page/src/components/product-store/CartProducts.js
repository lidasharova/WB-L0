import dataItems from '@/data/dataItems.json';
import { updateButtons } from '@/components/product-card/update-card/updateButtons.js';
import { updateCountProduct } from '@/components/product-card/update-card/updateCountProduct.js';
import { updatePriceInCard } from '@/components/product-card/update-card/updatePriceInCard.js';
import { updatePrices } from '@/components/order-form/updatePrices.js';

const availableProducts = dataItems.filter((product) => {
  return product.count > 0;
});

const soldOutProducts = dataItems.filter((product) => {
  return product.count === 0;
});

export class CartProducts {
  constructor() {
    this.products = availableProducts;
    this.productsOut = soldOutProducts;
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
    updateCountProduct(idNewProduct, newProduct.count);
    updateButtons(idNewProduct, this.products);
    updatePriceInCard(newProduct);
    updatePrices(this.products);
  }

  decreaseCountProduct(idProduct) {
    const product = this.products.find((product) => product.id === idProduct);
    if (product && product.count > 1) {
      product.count--;
    }
    updateCountProduct(idProduct, product.count);
    updatePriceInCard(product);
    updateButtons(idProduct, this.products);
    updatePrices(this.products);
  }

  deleteProduct(idProduct) {
    const product = this.products.find((product) => product.id === idProduct);
    if (product) {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
    }
    updatePrices(this.products);
  }

  static getAvailableProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance.products;
  }
  static getSoldOutProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance.productsOut;
  }
}
