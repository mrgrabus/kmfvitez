"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          title: "Neka demo vijest",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus gravida sapien, nec iaculis nunc sodales nec. In in sapien non dui posuere iaculis. Cras quis lacus nec sapien pulvinar sollicitudin.",
          image: "~/images/img1.png",
          createdAt: "2022-01-29 19:07:37",
          updatedAt: "2022-01-29 19:07:37",
        },
        {
          title: "Neka demo vijest",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus gravida sapien, nec iaculis nunc sodales nec. In in sapien non dui posuere iaculis. Cras quis lacus nec sapien pulvinar sollicitudin.",
          image: "~/images/img1.png",
          createdAt: "2022-01-29 19:07:37",
          updatedAt: "2022-01-29 19:07:37",
        },
        {
          title: "Neka demo vijest",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus gravida sapien, nec iaculis nunc sodales nec. In in sapien non dui posuere iaculis. Cras quis lacus nec sapien pulvinar sollicitudin.",
          image: "~/images/img1.png",
          createdAt: "2022-01-29 19:07:37",
          updatedAt: "2022-01-29 19:07:37",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
