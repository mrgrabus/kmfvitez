// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Players extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Players.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     facebookLink: DataTypes.STRING,
//     instagramLinkg: DataTypes.STRING,
//     description: DataTypes.STRING,
//     placeOfBirth: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'Players',
//   });
//   return Players;
// };

module.exports = (sequelize, DataTypes ) => {
  const Player = sequelize.define('player', {
      id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true
      },
      firstName: {
          allowNull: true,
          type: DataTypes.STRING
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      facebookLink: {
        allowNull: true,
        type: DataTypes.STRING
      },
      instagramLinkg: {
        allowNull: true,
        type: DataTypes.STRING
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      placeOfBirth: {
        allowNull: true,
        type: DataTypes.STRING
      },
  })

  Player.associate = ( models ) => {
      models.player.belongsTo(models.position)
      models.position.hasOne(models.player)
  }
  return Player;
}