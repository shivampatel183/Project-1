const Device = require("./Device");

class DoorLock extends Device {
  constructor(id) {
    super(id, "Door Lock");
    this.status = "locked";
  }

  lock() {
    this.status = "locked";
  }

  unlock() {
    this.status = "unlocked";
  }
}

module.exports = DoorLock;
