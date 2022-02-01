const Router = require('express').Router()

const { getAllNews, getSingleNews } = require('../controllers/news.controller')


module.exports = (app) => {
    Router.get('/news', getAllNews)
    Router.get('/news/:id', getSingleNews)

    app.use('/api', Router)
}