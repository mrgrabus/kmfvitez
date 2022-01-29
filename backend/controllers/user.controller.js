const bcrypt = require('bcrypt');

const db = require('../models')

const createUserController = async (req, res, next) => {
   
    let password;
    // let password = bcrypt.hash(, 10, function(err, hash) {
    //     if(!err) return hash
    // });

    bcrypt.hash('edingrabus123', 10)
    .then(function(hash) {
       createUser(hash)
    });

    const createUser = async (pass) => {
        try{
            const user = await db.User.create({
                firstName: 'Edin',
                lastName: 'Grabus',
                email: 'edin@gmail.com',
                password: pass
            })
            if(user){
                return res.status(200).send({
                    success: true,
                    message: 'User has been successfully created',
                    user
                })
            }
        }catch(err){
            res.send(err)
        }
    }

}

module.exports = {
    createUserController,
}