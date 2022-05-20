import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from "sequelize-typescript";

@Table 
export class Location extends Model<Location> {

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
    contact_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    contact_phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    contact_email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;
    
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