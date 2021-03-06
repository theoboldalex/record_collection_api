const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Like = require("./Like");

const Record = sequelize.define(
  "record",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      // TODO: Create artists table and relate on id
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    catalogNumber: {
      type: DataTypes.STRING,
    },
    diameter: {
      // 7", 10", 12"
      type: DataTypes.ENUM(["7", "10", "12"]),
      allowNull: false,
    },
    rpm: {
      // 33, 45, 78
      type: DataTypes.ENUM(["33", "45", "78"]),
    },
  },
  {
    timestamps: true,
  }
);

Record.hasMany(Like);
Like.belongsTo(Record);

module.exports = Record;
