module.exports = (sequelize, DataTypes) => {
  const shipping_docks = sequelize.define(
    "Shipping Docks",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      status: {
        type: sequelize.ENUM("Inactive", "Active"),
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "Shipping Docks",
    }
  );

  return shipping_docks;
};
