const db = require("../models");

// image upload
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/players");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "5000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const mimType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimType && extname) {
      return cb(null, true);
    }
    cb("Error upload image");
  },
}).single("image");

const createPlayer = async (req, res, next) => {
  try {
    let info = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      facebookLink: req.body.facebookLink,
      instagramLinkg: req.body.instagramLinkg,
      description: req.body.description,
      placeOfBirth: req.body.placeOfBirth,
      positionId: req.body.positionId,
      image: req.file.path,
    };
    const player = await db.player.create(info);
    res.status(200).send(player);
  } catch (err) {
    res.send(err);
  }
};

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

const editPlayer = async (req, res, next) => {
  const { firstName, 
    lastName,
     facebookLink, instagramLinkg, description, placeOfBirth, positionId } = req?.body;
  try {
    const player = await db.player.update(
      {
        firstName, 
    lastName,
     facebookLink, instagramLinkg, description, placeOfBirth, positionId
      },
      { where: { id: req?.params?.id } }
    );
    res.send(player);
  } catch (err) {
    res.send(err);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const player = await db.player.findByPk(req?.params?.id);
    player.destroy();
    res.send(player);
  } catch (error) {
    res.send(error);
  }
};

const getPosition = async (req, res, next) => {
  try {
    const position = await db.position.findAll();
    res.send(position);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPlayers,
  getSinglePlayer,
  getPosition,
  deletePlayer,
  createPlayer,
  editPlayer,
  upload
};
