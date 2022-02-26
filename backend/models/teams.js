// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Teams extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Teams.init({
//     teamName: DataTypes.STRING,
//     grb: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Teams',
//   });
//   return Teams;
// };

module.exports = (sequelize, DataTypes ) => {
  const Teams = sequelize.define('teams', {
      id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true
      },
      teamName: {
          allowNull: true,
          type: DataTypes.STRING
      },
      grb: {
        allowNull: true,
        type: DataTypes.STRING
      },
  })
  return Teams;
}