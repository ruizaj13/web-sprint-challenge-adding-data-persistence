const express = require('express')

const ProjRouter = require('./project/router.js')

const server = express()

server.use(express.json())
server.use('/api/projects', ProjRouter)

module.exports=server