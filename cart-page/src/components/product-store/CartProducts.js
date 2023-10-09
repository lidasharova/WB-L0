import dataItems from '@/data/dataItems.json';
import { updateButtons } from '@/components/product-card/update-card/updateButtons.js';
import { updateCountProduct } from '@/components/product-card/update-card/updateCountProduct.js';
import { updatePriceInCard } from '@/components/product-card/update-card/updatePriceInCard.js';
import { updateOrderForm } from '@/components/order-form/updateOrderForm.js';
import { SelectedProducts } from './SelectedProducts';
import { cartNotification } from '@/components/product-card/update-card/cartNotification.js';

export class CartProducts {
  constructor() {
    this.availableProducts = dataItems.filter((product) => {
      return product.count > 0;
    });

    this.soldOutProducts = dataItems.filter((product) => {
      return product.count === 0;
    });
  }

  increaseCountProduct(idProduct) {
    const selectedProducts = SelectedProducts.getSelectedProducts().products;
    const selectedProductsList = new SelectedProducts();
    const newProduct = this.availableProducts.find((product) => product.id === idProduct);

    if (newProduct) {
      if (newProduct.count < newProduct.maxCount) {
        newProduct.count++;
        updateCountProduct(idProduct, newProduct.count);
        updatePriceInCard(newProduct);
        updateButtons(idProduct, this.availableProducts);
        const isProductInList = selectedProducts.some((product) => product.id === idProduct);
        if (isProductInList) {
          selectedProductsList.increaseSelectedProduct(idProduct);
          updateOrderForm(selectedProducts);
        }
      } else {
        console.log('Товар закончился');
      }
    } else {
      console.log('Товар не найден.');
    }
  }

  decreaseCountProduct(idProduct) {
    const selectedProducts = SelectedProducts.getSelectedProducts().products;
    const selectedProductsList = new SelectedProducts();
    const product = this.availableProducts.find((product) => product.id === idProduct);
    if (product && product.count > 1) {
      product.count--;
      updateCountProduct(idProduct, product.count);
      updatePriceInCard(product);
      updateButtons(idProduct, this.availableProducts);
      const isProductInList = selectedProducts.some((product) => product.id === idProduct);
      if (isProductInList) {
        selectedProductsList.decreaseSelectedProduct(idProduct);
        updateOrderForm(selectedProducts);
      }
    } else {
      return null;
    }
  }

  deleteProduct(idProduct) {
    const product = this.availableProducts.find((product) => product.id === idProduct);
    if (product) {
      const index = this.availableProducts.indexOf(product);
      this.availableProducts.splice(index, 1);
    }
    cartNotification(this.availableProducts);
  }

  static getAvailableProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance.availableProducts;
  }
  static getSoldOutProducts() {
    if (!this.instance) {
      this.instance = new CartProducts();
    }
    return this.instance.soldOutProducts;
  }
}
