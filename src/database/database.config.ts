import * as dotenv from "dotenv";
import { SequelizeOptions } from "sequelize-typescript";
import { IdbConfig } from "./interfaces/dbconnection.interface";
import { Dialect } from "sequelize/types";

dotenv.config();
export const dbConfig: IdbConfig = {
  development: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
  },
};
