const Router = require('express').Router()

const { getAllMatches, getSuperMatch, deleteMatch } = require('../controllers/matches.controller')
const { tokenAuth } = require('../middlewares/tokenCheck')


module.exports = (app) => {
    Router.get('/matches', getAllMatches)
    Router.get('/matches/supermatch', getSuperMatch)

    Router.delete('/matches/:id', tokenAuth, deleteMatch)

    app.use('/api', Router)
}