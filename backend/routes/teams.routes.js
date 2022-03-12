const Router = require("express").Router();

const { getTeams, editTeam, deleteTeam, createTeam, getSingleTeam, upload } = require("../controllers/teams.controller");
const { tokenAuth } = require("../middlewares/tokenCheck");

module.exports = (app) => {
  Router.get("/teams", getTeams);
  Router.get("/teams/:id", getSingleTeam);

  Router.post("/teams/", upload, createTeam);
  Router.put("/teams/:id", editTeam);
  Router.delete("/teams/:id", deleteTeam);

  app.use("/api", Router);
};
