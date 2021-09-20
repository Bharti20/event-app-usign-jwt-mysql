const knex = require('../model/connection')

module.exports.updateEvent = (req, res) => {
    knex('event_details')
    .where({id:req.params.id})
    .update({user_name: req.body.user_name}).then(() => {
        res.send('Event Details updated')
        console.log('Event Details Updated')
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
}