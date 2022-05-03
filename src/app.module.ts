import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DeviceModule } from "./device/device.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { DeviceController } from "./device/device.controller";
import { DeviceService } from "./device/device.service";
import { databaseProviders } from "database/database.providers";

@Module({
  imports: [DeviceModule],
  controllers: [AppController, DeviceController],
  providers: [
    AppService,
    DeviceService,
    SequelizeModule,
    Sequelize,
    ...databaseProviders,
  ],
  exports: [SequelizeModule, Sequelize, ...databaseProviders],
})
export class AppModule { }
