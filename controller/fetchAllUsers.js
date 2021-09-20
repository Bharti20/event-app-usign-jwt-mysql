const knex = require('../model/connection')

module.exports.allUsers = (req, res) => {
    if(req.body.role == 'admin') {
        knex.select('*').from('user_details')
        .then((users) => {
            res.send(users)
        }).catch((err) => {
            res.send(err)
        });
    }else {
        res.send('You do not have access' )
    };
   
};