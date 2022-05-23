import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { DatabaseModule } from "../database/database.module";
import { deviceProviders } from "./devices.providers";
import { LocationService } from "./location.service";
import { locationProviders } from "./location.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [DevicesController],
  providers: [DevicesService, ...deviceProviders, LocationService, ...locationProviders],
  exports: [DevicesService],
})
export class DevicesModule { }
