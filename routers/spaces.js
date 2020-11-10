const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Space = require("../models/").space;
const Story = require("../models").story;
const StoryComment = require("../models").storyComment;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();

    res.json([...spaces]);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Requested space not found.");
  }

  try {
    const spaces = await Space.findByPk(id, { include: [Story] });
    res.json(spaces);
  } catch (e) {
    next(e);
  }
});

router.patch("/", authMiddleware, async (req, res, next) => {
  const { title, description, backgroundColor, color, spaceId } = req.body;

  if (!title || !description || !backgroundColor || !color || !spaceId) {
    return res.status(400).send("Please fill out all fields.");
  }

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
    res.json({ ...updatedSpace });
  } catch (e) {
    next(e);
  }
});

router.post("/stories", authMiddleware, async (req, res, next) => {
  const { name, content, imageUrl, spaceId } = req.body;

  if (!name || !content || !imageUrl || !spaceId) {
    return res.status(400).send("Please fill out all fields.");
  }

  try {
    const newStory = await Story.create({ name, content, imageUrl, spaceId });

    res.json({ ...newStory });
  } catch (e) {
    next(e);
  }
});

router.get("/stories/comments", async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send("Please provide a postId.");
  }

  try {
    const storyComments = await Story.findByPk(id, { include: [StoryComment] });

    res.json(storyComments);
  } catch (e) {
    next(e);
  }
});

router.post("/stories/comments/", async (req, res, next) => {
  const { storyId, userId, text } = req.body;

  if (!storyId || !userId || !text) {
    return res.status(400).send("Please provide all comment details.");
  }

  try {
    const newComment = await StoryComment.create({ storyId, userId, text });

    res.json(newComment);
  } catch (e) {
    next(e);
  }
});

router.delete("/stories", async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send("No story with that Id was found.");
  }

  try {
    const storyToDelete = await Story.findByPk(id);

    if (!storyToDelete) {
      res.status(404).send("Story to remove was not found.");
    }

    const deletedStory = await storyToDelete.destroy();

    res.json(`Story with id:${id}, ${deletedStory} has been removed`);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
