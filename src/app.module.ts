import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
