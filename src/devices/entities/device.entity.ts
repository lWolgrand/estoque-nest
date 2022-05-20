import { Table, Column, Model, DataType, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { Category } from "./category.entity";
import { Source } from "./source.entity";
import { Status } from "./status.entity";

@Table
export class Device extends Model<Device> {
  
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
  
  @ForeignKey(() => Status)  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_status: number;
  
  @BelongsTo(() => Status)
  status: string;
  
  @ForeignKey(() => Source)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,    
  })
  id_source: number;

  @BelongsTo(() => Source)
  source: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_category: number;

  @BelongsTo(() => Category)
  category: string;
  
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
    allowNull: true,
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
