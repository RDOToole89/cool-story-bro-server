"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("storyComments", [
      {
        storyId: 1,
        userId: 1,
        text: "Wow cool story bruh!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 1,
        userId: 1,
        text: "Man I puked soo much on the weekend dude!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 1,
        userId: 1,
        text: "Woke up under bridge lol!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 2,
        userId: 2,
        text: "Really! I find this offensive BRUH!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 2,
        userId: 2,
        text: "Dude... REALLY?!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 2,
        userId: 2,
        text: "YEAH DUDE!... BRO FISTPUMP!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 3,
        userId: 3,
        text: "God I this hangover is terrible BRAH!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 3,
        userId: 3,
        text: "The chick was so in to me dude!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyId: 3,
        userId: 3,
        text: "Bro... f*** you BRUH!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storyComments", null, {});
  },
};
