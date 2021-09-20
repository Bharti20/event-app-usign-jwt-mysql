const knex = require('../model/connection')

module.exports.deleteEvent = (req, res) => {
    knex('event_details')
    .where({id: req.params.id})
    .del().then(() => {
        res.send('Event data deleted')
        console.log('Event data deleted')
    }).catch((err) => {
        res.send(err)
    });
};