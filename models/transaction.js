module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      shipping_dock_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      notes: DataTypes.STRING,
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "transaction",
    }
  );

  return transaction;
};
