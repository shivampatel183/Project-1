const Light = require("./Light");
const Thermostat = require("./Thermostat");
const DoorLock = require("./DoorLock");

class DeviceFactory {
  static createDevice(type, id) {
    switch (type) {
      case "light":
        return new Light(id);
      case "thermostat":
        return new Thermostat(id);
      case "door":
        return new DoorLock(id);
      default:
        throw new Error("Unknown device type");
    }
  }
}

module.exports = DeviceFactory;
