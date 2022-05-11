import { Table, Column, Model, DataType, BelongsTo, PrimaryKey } from "sequelize-typescript";
import { Device } from "./device.entity";

@Table 
export class Status extends Model<Status> {

    @PrimaryKey
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    deviceId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
    name: string;  

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
    enabled: boolean;
}


