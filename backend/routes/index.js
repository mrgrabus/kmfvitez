module.exports = (app) => {
  require("./auth.routes")(app);
  require("./user.routes")(app);
  require("./players.routes")(app);
  require("./news.routes")(app);
  require("./matches.routes")(app);
  require("./teams.routes")(app);
  require("./position.routes")(app);
};
