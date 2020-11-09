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

module.exports = router;
