import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DeviceModule } from "./device/device.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { DeviceController } from "./device/device.controller";
import { DeviceService } from "./device/device.service";
import { databaseProviders } from "src/device/database/database.providers";

@Module({
  imports: [DeviceModule],
  controllers: [AppController, DeviceController],
  providers: [AppService, DeviceService, ...databaseProviders],
  exports: [SequelizeModule, ...databaseProviders],
})
export class AppModule { }
