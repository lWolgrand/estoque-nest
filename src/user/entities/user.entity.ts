import {
Table,
Column,
Model,
DataType,
PrimaryKey,
AutoIncrement,
Default,
  } from "sequelize-typescript";

@Table
export class User extends Model<User> {
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
name: string;

@Column({
    type: DataType.STRING,
    allowNull: false,
})
email: string;

@Column({
    type: DataType.STRING,
    allowNull: false,
})
password: string;

@Default(Date.now())
@Column({
    type: DataType.DATE,
    allowNull: true,
})
createdAt: Date;

@Default(Date.now())
@Column({
    type: DataType.DATE,
    allowNull: true,
})
updatedAt: Date;
  static user: any;
} 
