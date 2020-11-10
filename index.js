const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const spaceRouter = require("./routers/spaces");
const authMiddleWare = require("./auth/middleware");

const app = express();

// MIDDLEWARES

app.use(loggerMiddleWare("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleWare());

// if (process.env.DELAY) {
//   app.use((req, res, next) => {
//     setTimeout(() => next(), parseInt(process.env.DELAY));
//   });
// }

// ROUTERS

app.use("/", authRouter);
app.use("/spaces", spaceRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
