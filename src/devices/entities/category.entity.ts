import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table 
export class Category extends Model<Category> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
    })
    id: number;
   
    @Column({
        type: DataType.ENUM,
        values: ['Móveis','Notebook','Desktop','Teclado','Mouse','Monitor','Estabilizador','Chromebook','Peça-hardware',],
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