const Router = require('express').Router()

const { getAllNews, getSingleNews, createNews, editNews, deleteNews} = require('../controllers/news.controller')
const { tokenAuth } = require('../middlewares/tokenCheck')


module.exports = (app) => {
    Router.get('/news', getAllNews)
    Router.get('/news/:id', getSingleNews)

    Router.post('/news', tokenAuth, createNews)
    Router.put('/news/:id', tokenAuth, editNews)
    Router.delete('/news/:id', tokenAuth, deleteNews)

    app.use('/api', Router)
}