// Structural Design Patterns
// Use Case 2: Composite Pattern
// This pattern allows you to compose objects into tree structures to represent part-whole hierarchies.

class Component {
  operation() {
    throw new Error("Operation must be implemented.");
  }
}

class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  operation() {
    return `Leaf: ${this.name}`;
  }
}

class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  operation() {
    return this.children.map((child) => child.operation()).join(", ");
  }
}

const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const composite = new Composite();

composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation());
