'use strict';

import { 
  Model
 } from 'sequelize';

  interface IStatus {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }

module.exports = (sequelize: any, DataTypes: any) => {
  class Status extends Model<IStatus> implements IStatus {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: number;
     name!: string;
     createdAt!: Date;
     updatedAt!: Date;
    static associateStatusDevice(models:any) {
      // define association here
      Status.belongsTo(models.Device, {
        foreignKey: 'deviceId',
        onDelete: 'CASCADE',
        });
    }
  }
  Status.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};


