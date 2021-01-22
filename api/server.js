const express = require('express')

const ProjRouter = require('./project/router.js')
const ResourceRouter = require('./resource/router')
const TaskRouter = require('./task/router')

const server = express()

server.use(express.json())
server.use('/api/projects', ProjRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

module.exports=server