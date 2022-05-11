import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import { Status } from "./status.entity";

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
  source: string;

  @ForeignKey(() => Status)
  @HasOne(() => Status, 'deviceId')
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  statusId: number;

  


}
