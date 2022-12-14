module.exports = (sequelize) => {
  sequelize.define('Activities', {
    // la columna image viene x relacion
    name: {
      type: DataTypes.STRING,
      // unique: true,
      allowNull: false,
    },
     // category: {
    //   type: DataTypes.ENUM("");
    //   defaultValue: undefined
    // },
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
      type: DataTypes.ENUM("under 13 years old", "everyone" ,"teenagers", "over 18 years old"),
      allowNull: false
    },
    difficulty_level: {
      type: DataTypes.ENUM("kids", "beginners", "advanced", "expert"),
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

