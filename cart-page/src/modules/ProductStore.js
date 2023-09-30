class ProductСart {
  constructor(arrayProducts) {
    this.products = [...arrayProducts];
  }

  //добавляем в корзину новый продукт или просто увеличиваем кол-во  имеющегося
  addProduct(idNewProduct) {
    const newProduct = this.products.find((product) => product.id === idNewProduct);
    if (newProduct) {
      newProduct.count++;
    } else {
      const newProduct = { id: idNewProduct, count: 1 };
      this.products.push(newProduct);
    }
  }

  //удаляем товар из корзины или уменьшаем его кол-во
  deleteProduct(idProduct) {
    const findProduct = this.products.find((product) => product.id === idProduct);
    if (findProduct) {
      findProduct.count--;
      if (findProduct.count === 0) {
        this.products
      }
    } else {
      return 'продукта нет найдено в корзине';
    }
  }
}

export const productStore = new ProductСart([
  { id: 't-shirt-01', count: 1 },
  { id: 'case-02', count: 200 },
  { id: 'pencils-03', count: 2 },
]);
