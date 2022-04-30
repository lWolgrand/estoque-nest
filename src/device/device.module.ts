import { Module } from "@nestjs/common";
import { DeviceService } from "./device.service";
import { DeviceController } from "./device.controller";
import { DatabaseModule } from "../database/database.module";
import { deviceProviders } from "./devices.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceController],
  providers: [DeviceService, ...deviceProviders],
})
export class DeviceModule { }
