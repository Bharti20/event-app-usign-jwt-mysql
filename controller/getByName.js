const knex = require('../model/connection')
module.exports.getByName = (req, res) => {
    knex('event_details')
    .join('user_details', 'event_details.user_name', '=','user_details.name')
    .where('event_details.user_name', req.body.user_name)
    .select('event_details.id', 'event_name','descreption', 'start_date', 'end_date', 'city', 'user_details.name').from('event_details')
    .orderBy('city').then((allData) => {
        res.send(allData)
    }).catch((err) => {
        res.send(err)
    });
};