import { Sequelize } from "sequelize-typescript";
import { Device } from "../devices/entities/device.entity";


export const dbproviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize( 
        `postgres://root:root@localhost:5432/device`,
      )
      sequelize.addModels([Device]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
