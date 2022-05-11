import { Table, Column, Model, DataType, BelongsTo } from "sequelize-typescript";
import { Device } from "./device.entity";

@Table 
export class Status extends Model<Status> {
   
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

}


