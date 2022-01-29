const Router = require('express').Router()

const { createUserController }  = require('../controllers/user.controller')


module.exports = (app) => {
    Router.post('/create-user', createUserController)

    app.use('/api', Router)
}