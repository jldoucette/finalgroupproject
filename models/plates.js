module.exports = function(sequelize, DataTypes) {
  var plates = sequelize.define("plates", {
    plate_name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    protein: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    side1: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    side2: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    side3: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    price: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    devoured: {
    type: DataTypes.BOOLEAN, 
    defaultValue: false
    },
    piclink: {
      type:  DataTypes.STRING,
      allowNull: true
    }
  });
  return plates;
};