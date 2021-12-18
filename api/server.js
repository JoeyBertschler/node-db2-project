const express = require("express")

const server = express()

server.use(express.json())

server.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next({ status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        error: err.message
    })
})

server.listen(`listening on Port ${PORT}`)

module.exports = server
