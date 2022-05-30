import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DevicesModule } from './devices/devices.module';
import { DatabaseModule } from './database/database.module';
import { DevicesService } from './devices/devices.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { deviceProviders } from './devices/devices.providers';
import { invoiceProviders } from './devices/invoice.providers';
import { locationProviders } from './devices/location.providers';

@Module({
  imports: [SequelizeModule, UserModule, DevicesModule, DatabaseModule , AuthModule,],  
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
})
export class AppModule { }
