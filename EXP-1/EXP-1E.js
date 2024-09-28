// Structural Design Patterns

// Use Case 1: Adapter Pattern
// This pattern allows the interface of an existing class to be used as another interface.

class OldSystem {
  specificRequest() {
    return "Specific request from old system";
  }
}

class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }

  request() {
    return this.oldSystem.specificRequest();
  }
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
console.log(adapter.request());
