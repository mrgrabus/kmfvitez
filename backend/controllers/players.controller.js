const db = require("../models");

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await db.player.findAll({
      include: { all: true },
    });
    if (players) {
      res.send(players);
    }
  } catch (err) {
    res.send(err);
  }
};

const getSinglePlayer = async (req, res, next) => {
  try {
    const player = await db.player.findByPk(req?.params?.id, {
      include: { all: true },
    });
    res.send(player);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllPlayers,
  getSinglePlayer,
};
