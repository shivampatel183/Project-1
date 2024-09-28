const Device = require("./Device");

class Light extends Device {
  constructor(id) {
    super(id, "Light");
  }
}

module.exports = Light;
