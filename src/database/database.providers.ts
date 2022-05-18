import { Sequelize } from "sequelize-typescript";
import { Device } from "../devices/entities/device.entity";
import { Status } from "../devices/entities/status.entity";


export const dbproviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize(
        `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      );
      sequelize.addModels([Device]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
