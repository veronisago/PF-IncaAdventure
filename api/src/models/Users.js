const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Users', {
    // ver UUID, UUIDV1, UUIDV4

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.STRING, // usar DATEONLY
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      // validar que contengan @ + "" + ".com"
      type: DataTypes.STRING,
      allowNull: false
    },
    favourites:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    id_type: {
      // type: DataTypes.ENUM("Passport", "Nationality ID"),
      type: DataTypes.STRING,
      // allowNull: false
      defaultValue: "Nationality ID"
    },
    id_number: {
      type: DataTypes.BIGINT, // aclarar en front que se ingresen solo numeros, sin puntos, ni guiones, ni nada
      allowNull: false
    },
    language: {
      type: DataTypes.ENUM("spanish", "english") // de poder, automatizar el lenguaje de la pag segun el idioma que elija por preferencia
    },
    disable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  // no tocar los timestamps
};
