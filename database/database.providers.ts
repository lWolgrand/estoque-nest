/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { Device } from '../src/device/entities/device.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'devices',
      });
      sequelize.addModels([Device]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
