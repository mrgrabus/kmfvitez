const Router = require('express').Router()

const { loginController }  = require('../controllers/auth.controller')


module.exports = (app) => {
    Router.post('/login', loginController)

    app.use('/api/auth', Router)
}