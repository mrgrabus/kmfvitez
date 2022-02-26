module.exports = (sequelize, DataTypes) => {
  const Matches = sequelize.define("matches", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    location: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    isHome: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
  });

  Matches.associate = (models) => {
    models.matches.belongsTo(models.teams);
    models.teams.hasOne(models.matches);
  };

  return Matches;
};
