class Device {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.status = "off";
  }

  getStatus() {
    return `${this.type} ${this.id} is ${this.status}`;
  }

  turnOn() {
    this.status = "on";
  }

  turnOff() {
    this.status = "off";
  }

  // Add update method to make it an observer
  update(message) {
    console.log(`Device ${this.id} (${this.type}) received update: ${message}`);
  }
}

module.exports = Device;
