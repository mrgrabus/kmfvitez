'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [{
       firstName: 'John',
       lastName: 'Doe',
       facebookLink: 'nestonesto',
       instagramLinkg: 'nestonesto',
       description: 'mesar',
       placeOfBirth: 'Travnik',
       createdAt: '2022-01-29 19:07:37',
       updatedAt: '2022-01-29 19:07:37'
    },
    {
      firstName: 'Edin',
      lastName: 'Doe',
      facebookLink: 'nestonesto',
      instagramLinkg: 'nestonesto',
      description: 'mesar',
      placeOfBirth: 'Travnik',
      createdAt: '2022-01-29 19:07:37',
      updatedAt: '2022-01-29 19:07:37'
   },
   {
    firstName: 'Mirzad',
    lastName: 'Doe',
    facebookLink: 'nestonesto',
    instagramLinkg: 'nestonesto',
    description: 'mesar',
    placeOfBirth: 'Travnik',
    createdAt: '2022-01-29 19:07:37',
    updatedAt: '2022-01-29 19:07:37'
 },
  ], {});
    /**
     * Add seed commands here.
     *
     * Example:

    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
