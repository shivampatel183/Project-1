// Behavioral Design Patterns

// Use Case 2: Strategy Pattern
// This pattern defines a family of algorithms and makes them interchangeable.

class Strategy {
  execute(data) {
    throw new Error("Execute method must be implemented.");
  }
}

class ConcreteStrategyA extends Strategy {
  execute(data) {
    return `Processed by Strategy A: ${data}`;
  }
}

class ConcreteStrategyB extends Strategy {
  execute(data) {
    return `Processed by Strategy B: ${data}`;
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data) {
    return this.strategy.execute(data);
  }
}

const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy("some data"));

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy("some data"));
