const db = require("../models");

// image upload
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
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

const getAllNews = async (req, res, next) => {
  try {
    const news = await db.News.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]],
    });
    if (news) {
      res.send(news);
    }
  } catch (err) {
    res.send(err);
  }
};

const getSingleNews = async (req, res, next) => {
  try {
    const news = await db.News.findByPk(req?.params?.id);
    res.send(news);
  } catch (err) {
    res.send(err);
  }
};

const createNews = async (req, res, next) => {
  try {
    let info = {
      title: req.body.title,
      text: req.body.text,
      status: req.body.status,
      image: req.file.path,
    };
    const article = await db.News.create(info);
    res.status(200).send(article);
  } catch (err) {
    res.send(err);
  }
};

const editNews = async (req, res, next) => {
  const { title, text, image, status } = req?.body;
  try {
    const news = await db.News.update(
      {
        title,
        text,
        image,
        status,
      },
      { where: { id: req?.params?.id } }
    );
    res.send(news);
  } catch (err) {
    res.send(err);
  }
};
const deleteNews = async (req, res, next) => {
  try {
    const news = await db.News.findByPk(req?.params?.id);
    news.destroy();
  } catch (err) {
    res.send(err);
  }
};

const getNewsCount = async (req, res, next) => {
  try {
    const { count, rows } = await db.News.findAndCountAll();
    const matches = await db.matches.count();
    res.send({ count: count, matches: matches });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllNews,
  getSingleNews,
  getNewsCount,
  createNews,
  editNews,
  deleteNews,
  upload,
};
