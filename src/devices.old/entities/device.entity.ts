import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'devices',
  timestamps: true,
})
export class DeviceEntity extends Model {
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
