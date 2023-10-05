import dataItems from '@/data/dataItems.json';
import { updateButtons } from '@/components/productCard/updateButtons.js';
import { updateCountProduct } from '@/components/productCard/updateCountProduct.js';
import { updatePriceInCard } from '@/components/productCard/updatePriceInCard.js';
import { getTotalPrice } from '@/components/orderForm/getTotalPrice.js';
import { getOldTotalPrice } from '@/components/orderForm/getOldTotalPrice.js';
import { getDiscountSum } from '@/components/orderForm/getDiscountSum.js';
import { changeButtonOrderText } from '@/components/orderForm/changeButtonOrderText.js';

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
