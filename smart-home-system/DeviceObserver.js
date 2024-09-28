class DeviceObserver {
  constructor(device) {
    this.device = device;
  }

  update(deviceId, message) {
    console.log(
      `Device ${deviceId} (${this.device.type}) received update: ${message}`
    );
  }
}

module.exports = DeviceObserver;
