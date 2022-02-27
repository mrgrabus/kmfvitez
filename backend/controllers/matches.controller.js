const db = require("../models");

const getAllMatches = async (req, res, next) => {
  try {
    const matches = await db.matches.findAll({
      include: { all: true },
      limit: 9
    });
    if (matches) {
      res.send(matches);
    }
  } catch (error) {
    res.send(error);
  }
};

const getFeatureMatches = async (req, res, next) => {
  try {
    const matches = await db.matches.findAll({
      include: { all: true },
      limit: 3,
    })
    res.send(matches);
  } catch (error) {
    console.log(error)
  }
}

const getSuperMatch = async (req, res, next) => {
  try {
    const superMatch = await db.matches.findOne({
      where: { status: "3" },
      include: { all: true },
      limit: 1,
    });
    res.send(superMatch);
  } catch (error) {
    console.log(error);
  }
};

const getTeams = async (req, res, next) => {
  try {
    const teams = await db.teams.findAll();
    res.send(teams);
  } catch (error) {
    console.log(error);
  }
};

const createMatch = async (req, res, next) => {
  const { date, location, status, teamId, isHome } = req?.body;
  try {
    const match = await db.matches.create({
      date,
      location,
      status,
      teamId,
      isHome,
    });
    res.send(match);
  } catch (err) {
    res.send(err);
  }
};

const deleteMatch = async (req, res, next) => {
  try {
    const match = await db.matches.findByPk(req?.params?.id);
    match.destroy();
    res.send(match);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllMatches,
  getSuperMatch,
  deleteMatch,
  createMatch,
  getTeams,
  getFeatureMatches
};
