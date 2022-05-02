import { Module } from "@nestjs/common";
import { DeviceService } from "./device.service";
import { DeviceController } from "./device.controller";
import { deviceProviders } from "./devices.providers";

@Module({
  imports: [],
  controllers: [DeviceController],
  providers: [DeviceService, ...deviceProviders],
})
export class DeviceModule { }
