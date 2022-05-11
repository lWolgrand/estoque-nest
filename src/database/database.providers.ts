import { Sequelize } from "sequelize-typescript";
import { Device } from "../devices/entities/device.entity";
import { Status } from "../devices/entities/status.entity";


export const dbproviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize( 
        `postgres://root:root@localhost:5432/device`,
      )
      sequelize.addModels([Device, Status]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
