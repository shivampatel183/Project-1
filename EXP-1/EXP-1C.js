// Creational Design Patterns

// Use Case 1: Singleton Pattern
// This pattern restricts a class to a single instance.

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.timestamp = new Date();
  }

  getTimestamp() {
    return this.timestamp;
  }
}

const instance1 = new Singleton();
console.log(instance1.getTimestamp());

const instance2 = new Singleton();
console.log(instance2.getTimestamp());
console.log(instance1 === instance2);
