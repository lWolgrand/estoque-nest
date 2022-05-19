import { Dialect } from "sequelize/types";

export interface IdbConfigAttr {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  database?: string;
  dialect?: string;
}

export interface IdbConfig {
  development: IdbConfigAttr;
  // test: IdbConfigAttr;
  // production: IdbConfigAttr;
}
