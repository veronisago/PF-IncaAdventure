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
    // username: {
    //   type: DataTypes.STRING, // que sea primera letra del nombre y el apellido, que lo genere directamente el front
    //   allowNull: false,
    //   unique: true
    //   // tiene chance de repetir, si repite ofrecer en validation username1 (generar un contador)
    // },
    birth_date: {
      type: DataTypes.STRING, // usar DATEONLY
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      // validar que contengan @ + "" + ".com"
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    language: {
      type: DataTypes.ENUM("spanish", "english") // de poder, automatizar el lenguaje de la pag segun el idioma que elija por preferencia
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  // no tocar los timestamps
};
