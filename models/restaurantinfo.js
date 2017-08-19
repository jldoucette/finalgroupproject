module.exports = function(sequelize, DataTypes) {
  var restaurantinfo = sequelize.define("restaurantinfo", {
    address: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:  DataTypes.STRING,
      allowNull: true
    },
    piclink: {
      type:  DataTypes.STRING,
      allowNull: true
    }
  });
  return restaurantinfo;
};