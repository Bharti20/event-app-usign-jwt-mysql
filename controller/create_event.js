const knex = require('../model/connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.createEvent = (req, res) => {
    
    let data = {
        event_name: req.body.event_name,
        descreption: req.body.descreption,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        city: req.body.city
    }
    knex('event_details').insert(data).then(() => {
        res.send('Event Created')
        console.log('Event Created')
    }).catch((err) => {
        res.send(err)
    });
};