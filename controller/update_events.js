const knex = require('../model/connection')

module.exports.updateEvent = (req, res) => {
    knex('event_details')
    .where({id:req.params.id})
    .update({city: req.body.city}).then(() => {
        res.send('Event Details updated')
        console.log('Event Details Updated')
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
}