import { Module } from "@nestjs/common";
import { DeviceService } from "./device.service";
import { DeviceController } from "./device.controller";
import { deviceProviders } from "./devices.providers";
import { SequelizeModule } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";

@Module({
  imports: [],
  controllers: [DeviceController],
  providers: [DeviceService, SequelizeModule, Sequelize, ...deviceProviders],
  exports: [DeviceService, SequelizeModule, Sequelize, ...deviceProviders],
})
export class DeviceModule { }
