module.exports = (sequelize, DataTypes) => {
  const position = sequelize.define("position", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  });

  return position;
};
