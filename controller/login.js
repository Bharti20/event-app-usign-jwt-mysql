const knex = require('../model/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.logIn = (req, res) => {
    knex.select('*').from('user_details')
    .then((userData) => {
        let i = 0
        while(i<userData.length-1) {
            if(userData[i]['email'] == req.body.email) {
                break;
            }i++
        }
        if(userData[i]['email'] == req.body.email) {
            let token = jwt.sign(userData[i]['email'], process.env.SECRET_KEY)
            res.send(`User Login successfully:  ${token}`)
            console.log(token)
        }else {
            res.send('User Not Exists')
            console.log('User not exists')
        }
    });
};