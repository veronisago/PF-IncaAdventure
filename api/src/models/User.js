const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
  
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING, // que sea primera letra del nombre y el apellido, que lo genere directamente el front
      allowNull: false,
      unique: true
      // tiene chance de repetir, si repite ofrecer en validation username1 (generar un contador)
    },
    birth_date: {
      type: DataTypes.STRING, // usar DATEONLY
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      // validar que contengan @ + "" + ".com"
      type: DataTypes.STRING,
      allowNull: false
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
