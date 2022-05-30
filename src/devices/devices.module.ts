import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { DatabaseModule } from "../database/database.module";
import { deviceProviders } from "./devices.providers";
import { locationProviders } from "./location.providers";
import { invoiceProviders } from "./invoice.providers";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [DevicesController],
  providers: [
    DevicesService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    ...deviceProviders,
    ...locationProviders,
    ...invoiceProviders,
  ],
  exports: [DevicesService],
})
export class DevicesModule {}
