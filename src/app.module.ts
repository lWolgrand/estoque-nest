import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [DevicesModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
