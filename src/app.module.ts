import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DeviceModule } from "./device/device.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { DeviceController } from "./device/device.controller";
import { DeviceService } from "./device/device.service";
import { databaseProviders } from "src/database/database.providers";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "root",
      password: "root",
      database: "devices",
      autoLoadModels: true,
      synchronize: true,
    }),
    DeviceModule,
  ],
  controllers: [AppController, DeviceController],
  providers: [AppService, DeviceService, ...databaseProviders],
  exports: [SequelizeModule, ...databaseProviders],
})
export class AppModule { }
