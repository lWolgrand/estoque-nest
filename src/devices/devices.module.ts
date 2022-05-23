import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { DatabaseModule } from "../database/database.module";
import { deviceProviders } from "./devices.providers";
import { locationProviders } from "./location.providers";
import { invoiceProviders } from "./invoice.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [DevicesController],
  providers: [
    DevicesService,
    ...deviceProviders,
    ...locationProviders,
    ...invoiceProviders,
  ],
  exports: [DevicesService],
})
export class DevicesModule {}
