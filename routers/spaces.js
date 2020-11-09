const { Router } = require("express");
const User = require("../models/").user;
const Space = require("../models/").space;

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

module.exports = router;
