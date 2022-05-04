import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "src/database/database.module";
import { deviceProviders } from "./devices.providers";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [DevicesController],
  providers: [DevicesService, ...deviceProviders],
  exports: [DevicesService],
})
export class DevicesModule { }
