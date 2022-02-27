const Router = require('express').Router()

const { getAllMatches, getSuperMatch, deleteMatch, createMatch, getTeams, getFeatureMatches } = require('../controllers/matches.controller')
const { tokenAuth } = require('../middlewares/tokenCheck')


module.exports = (app) => {
    Router.get('/matches', getAllMatches)
    Router.get('/matches/supermatch', getSuperMatch)
    Router.get('/matches/feature', getFeatureMatches)
    Router.get('/matches/teams', getTeams)

    Router.post('/matches', tokenAuth, createMatch)
    Router.delete('/matches/:id', tokenAuth, deleteMatch)

    app.use('/api', Router)
}