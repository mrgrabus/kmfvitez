const Router = require('express').Router()

const { getAllNews, getSingleNews, createNews, editNews } = require('../controllers/news.controller')
const { tokenAuth } = require('../middlewares/tokenCheck')


module.exports = (app) => {
    Router.get('/news', getAllNews)
    Router.get('/news/:id', getSingleNews)

    Router.post('/news', tokenAuth, createNews)
    Router.put('/news/:id', tokenAuth, editNews)

    app.use('/api', Router)
}