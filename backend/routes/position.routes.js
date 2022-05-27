const Router = require("express").Router();

const { createPosition } = require("../controllers/position.controller");

const { tokenAuth } = require("../middlewares/tokenCheck");

module.exports = (app) => {
  Router.post("/position/", createPosition);

  app.use("/api", Router);
};
