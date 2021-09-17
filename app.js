const express = require('express')
const app = express()
app.use(express.json())

const callAllApis = require('./routes/index')

app.use('/', callAllApis)

app.listen(4000, (err) => {
    if(err) throw err;
    console.log('Server is running.........')
});
