const multer = require("multer");
const path = require("path");
const db = require("../models");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/grbovi");
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

const getSingleTeam = async (req, res, next) => {
  try {
    const team = await db.teams.findByPk(req?.params?.id);
    res.send(team);
  } catch (err) {
    res.send(err);
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

const createTeam = async (req, res, next) => {
  try {
    let info = {
      teamName: req.body.teamName,
      grb: req.file.path,
    };
    const team = await db.teams.create(info);
    res.send(team);
  } catch (err) {
    res.send(err);
  }
};

const editTeam = async (req, res, next) => {
  const { teamName } = req?.body;
  try {
    const team = await db.teams.update(
      {
        teamName
      },
      { where: { id: req?.params?.id } }
    );
    res.send(team);
  } catch (err) {
    res.send(err);
  }
};

const deleteTeam = async (req, res, next) => {
  try {
    const team = await db.teams.findByPk(req?.params?.id);
    team.destroy();
    res.send(team);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
    getTeams,
    editTeam,
    createTeam,
    deleteTeam,
    getSingleTeam,
    upload
};
