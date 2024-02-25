import { DataTypes } from 'sequelize';
import sequelize from '../config/bd_conexion.js';
 
// crear el modelo de acciones y se le pasa la estructura de la tabla
const Acciones = sequelize.define('acciones', {
  id_acciones: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_accion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_compra: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  precio_compra: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cantidad_acciones: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Acciones;
