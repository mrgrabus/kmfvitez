const db = require('../models')

const getAllPlayers = async (req, res, next) => {
    try{
        const players = await db.Players.findAll()
        if(players){
            res.send(players)
        }
    }catch(err){
        res.send(err)
    }

}

const getSinglePlayer = async (req, res, next) => {
    try{
        const player = await db.Players.findByPk(req?.params?.id)
        res.send(player)
    }catch(err){
        res.send(err)
    }
}

module.exports = {
    getAllPlayers,
    getSinglePlayer
}