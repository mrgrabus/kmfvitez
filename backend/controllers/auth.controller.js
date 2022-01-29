const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const db = require('../models')

const loginController = async (req, res, next) => {
    const email = req?.body?.email
    const password  = req?.body?.password


    if(!email || !password ){
      return res.status(401).send('Missing e-mail or password!')
    }
    let user = await db.User.findOne({
      where: {
        email: email
      }
    })
    if(!user){
      return res.status(404).send('There is no user with email:' + email)
    }
    
    const matchPassword = await bcrypt.compare(req.body.password, user.password)
    if(!matchPassword) return res.status(401).send({message: "Password incorrect"})


    const token = jwt.sign(
        { userId: user.id, email: user.email },
        'nekipravojaksecuritykeykojinemozeprobitninasa',
        {
          expiresIn: "24h",
        }
      );
    res.send({
      token
    })

}

module.exports = {
    loginController,
}