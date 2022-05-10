import { Sequelize } from "sequelize-typescript";
import { dbConfig } from "./database.config";
import { Device } from "../devices/entities/device.entity";
import * as dotenv from "dotenv";

dotenv.config();

export const dbproviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize(
        `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      );
      sequelize.addModels([Device]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
