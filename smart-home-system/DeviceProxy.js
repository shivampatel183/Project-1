class DeviceProxy {
  constructor(device, isAuthenticated = false) {
    this.device = device;
    this.isAuthenticated = isAuthenticated;
  }

  executeCommand(command) {
    if (!this.isAuthenticated) {
      console.log("Unauthorized access to device");
      return;
    }
    if (command === "Turn On") {
      this.device.turnOn();
    } else if (command === "Turn Off") {
      this.device.turnOff();
    }
    console.log(`Device ${this.device.id} is now ${this.device.status}`);
  }
}

module.exports = DeviceProxy;
