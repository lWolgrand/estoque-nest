import * as dotenv from "dotenv";
import { IdbConfig } from "./interfaces/dbconnection.interface";

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
