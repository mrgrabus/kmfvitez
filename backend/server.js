const express = require('express')
const cors = require('cors')
const http = require('http')
// const socket = require('socket.io')
// const connectSocket = require('./middlewares/socket')

var bodyParser = require('body-parser')

// const { sequelize } = require('./models')

const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded({
    extended: true,
  }));
  

app.use(bodyParser.json({limit: '50mb'}));

app.use(cors())
require('./routes')(app)

// app.post('/api/auth/login', (req, res, next) => {
//     console.log(req?.body)
// })
server.listen(process.env.PORT || 5000, () => {
    console.log('SERVER IS UP AND RUNNING')
    // sequelize.sync({
    //     //alter: true
    // })
})