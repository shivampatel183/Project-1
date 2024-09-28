const DeviceObserver = require("./DeviceObserver");

class CentralHub {
  constructor() {
    this.devices = [];
    this.observers = [];
  }

  addDevice(device) {
    this.devices.push(device);
    this.addObserver(new DeviceObserver(device));
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(deviceId, message) {
    this.observers.forEach((observer) => observer.update(deviceId, message));
  }

  schedule(deviceId, time, command) {
    console.log(`Scheduling ${command} for device ${deviceId} at ${time}`);
    setTimeout(() => {
      this.executeCommand(deviceId, command);
    }, 1000); // Simplified scheduling
  }

  executeCommand(deviceId, command) {
    const device = this.devices.find((dev) => dev.id === deviceId);
    if (device) {
      if (command === "Turn On") {
        device.turnOn();
      } else if (command === "Turn Off") {
        device.turnOff();
      }
      // Pass the correct device information to notifyObservers
      this.notifyObservers(
        deviceId,
        `Device ${deviceId} (${device.type}) is now ${device.status}`
      );
    }
  }
}

module.exports = CentralHub;
