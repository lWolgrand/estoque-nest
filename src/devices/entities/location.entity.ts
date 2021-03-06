import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class Location extends Model<Location> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contact_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contact_phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contact_email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt: Date;
}
