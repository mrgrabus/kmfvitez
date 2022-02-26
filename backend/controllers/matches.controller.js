const db = require("../models");

const getAllMatches = async (req, res, next) => {
  try {
    const matches = await db.matches.findAll({
      include: { all: true },
    });
    if (matches) {
      res.send(matches);
    }
  } catch (error) {
    res.send(error);
  }
};

const getSuperMatch = async (req, res, next) => {
  try {
    const superMatch = await db.matches.findOne({
      where: { status: "3" },
      include: { all: true },
    });
    res.send(superMatch);
  } catch (error) {
    console.log(error);
  }
};

const deleteMatch = async (req, res, next) => {
  try {
    const match = await db.matches.findByPk(req?.params?.id);
    match.destroy();
    console.log("okej")
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllMatches,
  getSuperMatch,
  deleteMatch
};
