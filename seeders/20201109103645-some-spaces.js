"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Super Awesome Space",
          description: "Come hangout in the best space in the galaxy!",
          backgroundColor: "#111111",
          color: "#22CEC2",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Most Boring Space On The Planet",
          description: "Come hangout in the best space in the galaxy!",
          backgroundColor: "#C1272D",
          color: "#F0F8FF",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "A Space Located At The Edge of The Event Horizon",
          description: "Come hangout in the best space in the galaxy!",
          backgroundColor: "#485123",
          color: "#eadd46",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "This Space Kind of Sucks",
          description: "Come hangout in the best space in the galaxy!",
          backgroundColor: "#CCE7FE",
          color: "#333333",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
