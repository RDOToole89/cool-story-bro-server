const { Router } = require("express");
const User = require("../models/").user;
const Space = require("../models/").space;
const Story = require("../models").story;

console.log("USER", User);
console.log("Space", Space);

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();

    res.json(spaces);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const spaces = await Space.findByPk(id, { include: [Story] });

    res.json(spaces);
  } catch (e) {
    next(e);
  }
});

router.delete("/stories", async (req, res, next) => {
  const body = req.body;
  console.log("WHAT IS BODY???", body);

  const { id } = body;
  console.log("WHAT IS ID? ", id);

  try {
    const storyToDelete = await Story.findByPk(id);
    if (!storyToDelete) {
      res.status(404).send("Story to remove was not found.");
    }

    const deletedStory = await storyToDelete.destroy();

    res.json(`${deletedStory} has been removed`);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
