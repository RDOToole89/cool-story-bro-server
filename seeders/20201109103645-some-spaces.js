"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Super Awesome Space",
          description: "Come hangout in the best space!",
          backgroundColor: "#111111",
          color: "#22CEC2",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Really Boring Space",
          description: "Come hangout in the the most boring space!",
          backgroundColor: "#C1272D",
          color: "#F0F8FF",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "I am Space",
          description: "Please Bring Some Weed Bro!",
          backgroundColor: "#485123",
          color: "#eadd46",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "This Space Kind of Sucks",
          description: "Bruh!!!",
          backgroundColor: "#b9bd3f",
          color: "#e3e7c3",
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
