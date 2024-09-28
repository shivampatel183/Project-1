const Device = require("./Device");

class Thermostat extends Device {
  constructor(id) {
    super(id, "Thermostat");
    this.temperature = 70;
  }

  setTemperature(temp) {
    this.temperature = temp;
  }

  getStatus() {
    return `Thermostat ${this.id} is set to ${this.temperature} degrees`;
  }
}

module.exports = Thermostat;
