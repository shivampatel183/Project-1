// Behavioral Design Patterns

//Use Case 1: Observer Pattern
// This pattern allows a subject to notify observers when its state changes.

class Observer {
  update(data) {
    console.log(`Observer received: ${data}`);
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("State has changed!");
