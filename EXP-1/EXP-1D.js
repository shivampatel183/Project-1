// Creational Design Patterns

// Use Case 2: Factory Method Pattern
// This pattern provides an interface for creating objects without specifying the exact class of object that will be created.

class Product {
  constructor(name) {
    this.name = name;
  }
}

class ProductFactory {
  createProduct(name) {
    return new Product(name);
  }
}

const factory = new ProductFactory();
const product1 = factory.createProduct("Product A");
console.log(product1.name);
