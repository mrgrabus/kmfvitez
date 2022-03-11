const Router = require("express").Router();

const {
  getAllPlayers,
  getSinglePlayer,
  deletePlayer,
  getPosition,
  createPlayer,
  editPlayer,
  upload,
} = require("../controllers/players.controller");

const { tokenAuth } = require("../middlewares/tokenCheck");

module.exports = (app) => {
  Router.get("/players", getAllPlayers);
  Router.get("/player/position", getPosition);
  Router.get("/player/:id", getSinglePlayer);

  Router.post("/player/", upload, createPlayer);
  Router.put("/player/", upload, editPlayer);
  Router.delete("/player/:id", tokenAuth, deletePlayer);

  app.use("/api", Router);
};
