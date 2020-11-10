const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
// const User = require("../models/").user;
const Space = require("../models/").space;
const Story = require("../models").story;

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

router.post("/stories", authMiddleware, async (req, res, next) => {
  const body = req.body;

  console.log("WHATS IN THE BODY????", body);

  try {
    const newStory = await Story.create(body);
    console.log("NewSTORY????", newStory);
    res.json(newStory);
  } catch (e) {
    next(e);
  }
});

router.delete("/stories", async (req, res, next) => {
  const { id } = req.body;
  console.log("WHAT IS ID?", id);

  try {
    const storyToDelete = await Story.findByPk(id);
    // console.log("WHAT IS DELETE", storyToDelete);
    if (!storyToDelete) {
      res.status(404).send("Story to remove was not found.");
    }

    const deletedStory = await storyToDelete.destroy();

    res.json(`Story with id: ${deletedStory} has been removed`);
  } catch (e) {
    next(e);
  }
});

router.patch("/", authMiddleware, async (req, res, next) => {
  const { title, description, backgroundColor, color, spaceId } = req.body;

  try {
    const spaceToUpdate = await Space.findByPk(spaceId);
    if (!spaceToUpdate) {
      return res.status(404).send("Requested space not found");
    }

    const updatedSpace = await spaceToUpdate.update({
      title,
      description,
      backgroundColor,
      color,
    });
    res.json(updatedSpace);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
