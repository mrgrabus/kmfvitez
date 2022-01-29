const Router = require('express').Router()

const { getAllPlayers, getSinglePlayer } = require('../controllers/players.controller')


module.exports = (app) => {
    Router.get('/players', getAllPlayers)
    Router.get('/player/:id', getSinglePlayer)

    app.use('/api', Router)
}