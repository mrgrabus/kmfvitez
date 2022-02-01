const db = require('../models')

const getAllNews = async (req, res, next) => {
    try{
        const news = await db.News.findAll()
        if(news){
            res.send(news)
        }
    }catch(err){
        res.send(err)
    }

}

const getSingleNews = async (req, res, next) => {
    try{
        const news = await db.News.findByPk(req?.params?.id)
        res.send(news)
    }catch(err){
        res.send(err)
    }
}

module.exports = {
    getAllNews,
    getSingleNews
}