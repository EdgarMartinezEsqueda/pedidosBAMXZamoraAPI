const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EfectivoPedidos = sequelize.define(
  "efectivoPedidos",
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, },
    idPedido: { type: DataTypes.BIGINT, allowNull: false, },
    idUsuario: { type: DataTypes.INTEGER, allowNull: false, },
    billetes1000: { type: DataTypes.INTEGER, defaultValue: 0, },
    billetes500: { type: DataTypes.INTEGER, defaultValue: 0, },
    billetes200: { type: DataTypes.INTEGER, defaultValue: 0, },
    billetes100: { type: DataTypes.INTEGER, defaultValue: 0, },
    billetes50: { type: DataTypes.INTEGER, defaultValue: 0, },
    billetes20: { type: DataTypes.INTEGER, defaultValue: 0, },
    monedas20: { type: DataTypes.INTEGER, defaultValue: 0, },
    monedas10: { type: DataTypes.INTEGER, defaultValue: 0, },
    monedas5: { type: DataTypes.INTEGER, defaultValue: 0, },
    monedas2: { type: DataTypes.INTEGER, defaultValue: 0, },
    monedas1: { type: DataTypes.INTEGER, defaultValue: 0, },
    monedas50C: { type: DataTypes.INTEGER, defaultValue: 0, },
    // Campos calculados/extras
    totalEfectivo: { type: DataTypes.DECIMAL(10, 2), allowNull: false, },
    observaciones: { type: DataTypes.TEXT, allowNull: true, },
    tipoRegistro: { type: DataTypes.ENUM("entrega", "correccion", "devolucion"), defaultValue: "entrega", },
  }
);

module.exports = EfectivoPedidos;