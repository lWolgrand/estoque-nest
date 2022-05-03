"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init(
    {
      serial_number: DataTypes.NUMBER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      created_at: DataTypes.NUMBER,
      updated_at: DataTypes.NUMBER,
      status: DataTypes.BOOLEAN,
      category: DataTypes.STRING,
      source: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Device",
    }
  );
  return Device;
};
