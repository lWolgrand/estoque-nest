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
export class Source extends Model<Source> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.ENUM,
    values: ["Doação", "Compra", "Alugado"],
    allowNull: false,
  })
  name: string;
}
