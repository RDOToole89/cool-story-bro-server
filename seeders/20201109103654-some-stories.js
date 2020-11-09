"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Great Story Bruh!",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amazing Story Bro!",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1604914172042-7f4156698dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cool Story Amigo!",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1604756463129-11ef41b00d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emotional Story Buddy!",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1604914415954-cd868b826083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sad Story Dude!",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1604854391668-1beacc48417b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60s",
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crazy Story My Man!",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80",
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wow like OMG What a Story Sister",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1604881426940-ade5a07e4931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          spaceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "I'm Like So Not Gonna Tell You My Story Bitch",
          content: "Really amazing content!",
          imageUrl:
            "https://images.unsplash.com/photo-1601758003630-df669e4e825a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          spaceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};