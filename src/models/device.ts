'use strict';

import { 
  Model
 } from 'sequelize';

interface IDevice {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status:string;
  category: string;
  invoiceIn: string;
  invoiceOut: string;
  source: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Device extends Model<IDevice> 
  implements IDevice{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: number;
     name!: string;
     description!: string;
     createdAt!: Date;
     updatedAt!: Date;
     status!:string;
     category!: string;
     invoiceIn!: string;
     invoiceOut!: string;
     source!: number;

    static associateStatus(models: any) {
      // define association here
      Device.belongsToMany(models.Status, {
        through: 'DeviceStatus',
      });
    }
    static associateCategory(models: any) {
      // define association here
      Device.belongsToMany(models.Category, {
        through: 'DeviceCategory',
      });      
    }
    static associateInvoiceIn(models: any) {
      // define association here
      Device.belongsToMany(models.InvoiceIn, {
        through: 'DeviceInvoiceIn',
      });      
    }
    static associateInvoiceOut(models: any) {
      // define association here
      Device.belongsToMany(models.InvoiceOut, {
        through: 'DeviceInvoiceOut',
      });      
    }
    static associateSource(models: any) {
      // define association here
      Device.belongsToMany(models.Source,{
        through: 'DeviceSource', 
      });
    } 
  }   
    Device.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false },
      invoiceIn: { type: DataTypes.STRING, allowNull: false },
      invoiceOut: { type: DataTypes.STRING, allowNull: false },
      source: { type: DataTypes.INTEGER, allowNull: false },

    }, {
      sequelize,
      modelName: 'Status',
    });
    return Device;
  };