import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Device } from "../devices/entities/device.entity";
import { Status } from "../devices/entities/status.entity";
import { dbConfig } from "./database.config";


export const dbproviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig.development as SequelizeOptions);
      sequelize.addModels([Device,Status]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
