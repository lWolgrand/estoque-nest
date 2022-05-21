import { Table, Column, Model, DataType, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey, Default } from "sequelize-typescript";
import { Status } from "./status.entity";
import { Category } from "./category.entity";
import { Invoice } from "./invoice.entity";
import { Source } from "./source.entity";
import { Location } from "./location.entity";

@Table
export class Device extends Model<Device> {
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  serial_number: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  device_name: string;

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
  status: number;
  
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_category: number;

  @BelongsTo(() => Category)
  category: string;

  @ForeignKey(() => Invoice)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_invoiceIn: number;

  @BelongsTo(() => Invoice)
  invoice: string;
  
  @ForeignKey(() => Invoice)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_invoiceOut: number;

  @BelongsTo(() => Invoice)
  invoiceOut: string;

  @ForeignKey(() => Source)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,    
  })
  id_source: number;

  @BelongsTo(() => Source)
  source: string;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_location: number ;

  @BelongsTo(() => Location)
  location: number;

  @Default(true)
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
