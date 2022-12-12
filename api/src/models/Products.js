const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // la columna image viene x relacion
  sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    // category: {
    //   type: DataTypes.ENUM("");
    //   defaultValue: undefined
    // },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    // image: {
    //   public_id: {
    //     type: DataTypes.STRING,
    //     require: true
    //   },
    //   url: {
    //     type: DataTypes.STRING,
    //     required: true
    //   }
    // },
    disable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // de ser true pedir especificaciones
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
