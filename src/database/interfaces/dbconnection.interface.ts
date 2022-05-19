export interface IdbConfigAttr {
  host?: string;
  port?: string;
  user?: string;
  password?: string;
  database?: string;
  dialect?: number;
}

export interface IdbConfig {
  development: IdbConfigAttr;
  // test: IdbConfigAttr;
  // production: IdbConfigAttr;
}
