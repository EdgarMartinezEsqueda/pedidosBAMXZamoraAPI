const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pedido = sequelize.define("pedidos", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    idTs: { type: DataTypes.INTEGER, references: { model: "usuarios", key: "id" } },
    idRuta: { type: DataTypes.INTEGER, references: { model: "rutas", key: "id" } },
    fechaEntrega: DataTypes.DATEONLY,
    estado: { type: DataTypes.ENUM ("pendiente", "finalizado"), defaultValue: "pendiente" },
    devoluciones: DataTypes.INTEGER,
    devolucionesCosto: { type: DataTypes.INTEGER, defaultValue: 0 },
    devolucionesMedioCosto: { type: DataTypes.INTEGER, defaultValue: 0 },
    devolucionesSinCosto: { type: DataTypes.INTEGER, defaultValue: 0 },
    devolucionesApadrinadas: { type: DataTypes.INTEGER, defaultValue: 0 },
    horaLlegada: DataTypes.TIME,
    cobranzaGenerada: { type: DataTypes.BOOLEAN, defaultValue: false },
    urlCobranza: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Pedido;