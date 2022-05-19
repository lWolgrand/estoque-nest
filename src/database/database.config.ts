import * as dotenv from "dotenv";
import { IdbConfig } from "./interfaces/dbconnection.interface";

dotenv.config();


export const dbConfig: IdbConfig = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: parseInt(process.env.DB_USER),
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
  },
};
