import { Table, Column, Model, DataType, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { Status } from "./status.entity";

@Table
export class Device extends Model<Device> {

  @PrimaryKey
  @AutoIncrement
  @Column({
      allowNull: false,
  })
  id: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  device_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  serial_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  device_description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,    
  })
  id_source: string;

  @ForeignKey(() => Status)  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_status: number;
  
  @BelongsTo(() => Status)
  status: string;

  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_category: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_invoiceIn: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_invoiceOut: string;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  enabled: boolean;
  
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
