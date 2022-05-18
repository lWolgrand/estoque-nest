import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class Device extends Model<Device> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  invoiceIn: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  invoiceOut: string;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  source: number;
  
  
}
