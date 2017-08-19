module.exports = function(sequelize, DataTypes) {
  var purchases = sequelize.define("purchase", {
    quantity: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  });
  return purchases;
};