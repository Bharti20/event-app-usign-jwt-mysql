const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password:'Bharti@1234',
        database:'event_city'
    }
})
//  knex.schema
// .createTable('user_details', (table) => {
//     table.increments('id')
//     table.string('name')
//     table.string('email')
//     table.integer('phone_number')
//     table.string('role')
// })
// .createTable('event_details', (table) => {
//     table.increments('id')
//     table.string('event_name')
//     table.string('descreption')
//     table.date('start_date')
//     table.date('end_date')
//     table.string('city')
// })
// .then(() => {
//     console.log('Database connected')
// }).catch((err) => {
//     console.log(err)
// });


module.exports = knex

