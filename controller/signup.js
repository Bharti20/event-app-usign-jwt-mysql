const knex = require('../model/connection')

module.exports.signup = (req, res) => {
   let userD = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        role: req.body.role
    }
    knex('user_details').insert(userD)
    .then(() => {
        res.send('User Signup Successfully')
    }).catch((err) => {
        res.send(err)
    });
};
