const express = require('express')

const Tasks  = require('./model')
const { valTask } = require('../middleware/middleware')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(task => {
            task.forEach(task => {task.task_completed = !!task.task_completed})
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})

router.post('/', valTask, (req, res) => {
    Tasks.addTask(req.body)
        .then(task => {
            task.task_completed = !!task.task_completed
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})


module.exports = router