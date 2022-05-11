import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { DatabaseModule } from "../database/database.module";
import { deviceProviders } from "./devices.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [DevicesController],
  providers: [DevicesService, ...deviceProviders],
  exports: [DevicesService],
})
export class DevicesModule { }
