import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table 
export class Invoice extends Model<Invoice> {

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
    path: string;

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


