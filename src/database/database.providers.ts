import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Category } from "src/devices/entities/category.entity";
import { Invoice } from "src/devices/entities/invoice.entity";
import { Source } from "src/devices/entities/source.entity";
import { Device } from "../devices/entities/device.entity";
import { Status } from "../devices/entities/status.entity";
import { Location } from "src/devices/entities/location.entity";
import { dbConfig } from "./database.config";
import { User } from "src/user/entities/user.entity";

export const dbproviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig.development as SequelizeOptions);
      sequelize.addModels([
        Device,
        Status,
        Source,
        Category,
        Invoice,
        Location,
        User
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
