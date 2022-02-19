const jwt = require('jsonwebtoken')

const tokenAuth = (req, res, next) => {
    if(!req?.headers?.authorization) return res.status(401).send('Not authorized')

    const token = req.headers.authorization.split(' ')[1]
    let decodedToken; 

    if(!token) return res.send(new Error('No token provided'))

    try{
        decodedToken = jwt.verify(token, 'nekipravojaksecuritykeykojinemozeprobitninasa')
    }catch(err){
        err.statusCode = 500
        throw err;   
    }
    if(!decodedToken) {
        const error = new Error('Not authenticated')
        error.statusCode = 401
        throw err
    }
    req.body.userId = decodedToken.userId
    next()
}

module.exports = {
    tokenAuth
}