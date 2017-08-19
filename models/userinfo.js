module.exports = function(sequelize, DataTypes) {
  var userinfo = sequelize.define("userinfo", {
    address: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  });
  return userinfo;
};