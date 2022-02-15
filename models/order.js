module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      tax: DataTypes.INTEGER,

      notes: DataTypes.STRING,
      status: {
        type: sequelize.ENUM("Paid", "Not Paid"),
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "Order",
    }
  );

  return Order;
};
