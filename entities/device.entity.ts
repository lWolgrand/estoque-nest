/* eslint-disable prettier/prettier */
import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Device extends Model<Device> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  status: string;

  @Column
  source: number;
}


// export class Device {
//   id: number;
//   serialNumber: string;
//   name: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
//   Status: number;
//   Category: number;
//   // Invoice_In: number;
//   // Invoice_Out: number;
//   Source: number;
// }
