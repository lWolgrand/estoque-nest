/* eslint-disable prettier/prettier */
import { Device } from "./entities/device.entity";
export const deviceProviders = [
  {
    provide: "DeviceRepository",
    useValue: Device,
  },
];
