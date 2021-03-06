const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParserInt = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParserInt())
server.listen(port, function() {
    console.log(`BACKEND is runningon port ${port}.`)
})

module.exports = server