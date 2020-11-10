"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class storyComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      storyComment.belongsTo(models.user);
      storyComment.belongsTo(models.story);
    }
  }
  storyComment.init(
    {
      storyId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "storyComment",
    }
  );
  return storyComment;
};
