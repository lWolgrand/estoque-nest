import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table 
export class Source extends Model<Source> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
    })
    id: number;
   
    @Column({
        type: DataType.ENUM,
        values: ['Doação','Compra','Alugado','Empréstimo'],
        allowNull: false,
    })
    name: string;

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