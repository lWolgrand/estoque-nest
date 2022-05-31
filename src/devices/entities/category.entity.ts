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
export class Category extends Model<Category> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.ENUM,
    values: [
      "Móveis",
      "Notebook",
      "Desktop",
      "Teclado",
      "Mouse",
      "Monitor",
      "Estabilizador",
      "Chromebook",
      "Peça-hardware",
    ],
    allowNull: false,
  })
  name: string;
}
