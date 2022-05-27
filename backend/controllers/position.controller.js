const db = require("../models");

const createPosition = async (req, res, next) => {
  try {
    const { name } = req?.body?.name;
    const position = await db.position.create(name);
    res.status(200).send(position);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createPosition,
};
