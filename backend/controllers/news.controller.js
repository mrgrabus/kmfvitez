const db = require("../models");

const getAllNews = async (req, res, next) => {
  try {
    const news = await db.News.findAll();
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
  const { title, text, image, status } = req?.body;
  try {
    const news = await db.News.create({
      title,
      text,
      image,
      status,
    });
    res.send(news);
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
    res.send({ count: count});
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
};
