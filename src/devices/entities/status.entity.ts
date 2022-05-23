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
export class Status extends Model<Status> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.ENUM,
    values: ["Ativo", "Emprestado", "Manutenção", "Offline"],
    allowNull: false,
  })
  name: string;

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
}
