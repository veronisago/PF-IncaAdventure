const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activities', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("activity"),
      defaultValue: "activity"
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    schedule: {
      type: DataTypes.STRING
    },
    start_at: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    end_at:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    allowed_age: {
      type: DataTypes.ENUM("hasta 13 años", "todo público" ,"adolescentes", "mayores de 18 años"),
      allowNull: false
    },
    difficulty_level: {
      type: DataTypes.ENUM("niños", "principiantes", "avanzado", "experto"),
      // no me reconoce experto cuando creo
      allowNull: false
    },
    disable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

};
