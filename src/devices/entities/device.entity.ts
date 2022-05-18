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
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusId: number;
  
  @BelongsTo(() => Status)
  status: string;

<<<<<<< HEAD
  
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
  
=======
  @HasOne(() => Status)
  statuss: Status;

>>>>>>> 91aabda7f0840c07cfe7820f1f1a304a75bbecb7
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
<<<<<<< HEAD
  source: number;
  
  
=======
  enabled: boolean;
  




>>>>>>> 91aabda7f0840c07cfe7820f1f1a304a75bbecb7
}
