const CentralHub = require("./CentralHub");
const DeviceFactory = require("./DeviceFactory");
const DeviceProxy = require("./DeviceProxy");

const hub = new CentralHub();

const light1 = DeviceFactory.createDevice("light", 1);
const thermostat1 = DeviceFactory.createDevice("thermostat", 2);
const door1 = DeviceFactory.createDevice("door", 3);

hub.addDevice(light1);
hub.addDevice(thermostat1);
hub.addDevice(door1);

hub.schedule(1, "06:00", "Turn On");
hub.executeCommand(2, "Turn On");

const proxy = new DeviceProxy(door1, true);
proxy.executeCommand("Turn Off");

const unauthorizedProxy = new DeviceProxy(thermostat1, false);
unauthorizedProxy.executeCommand("Turn Off");
