const express = require('express')

const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProj()
        .then(proj => {
            proj.forEach(proj => {proj.project_completed = !!proj.project_completed})
            res.status(200).json(proj)
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})

router.post('/', (req, res) => {
    Projects.addProj(req.body)
        .then(proj => {
            proj.project_completed = !!proj.project_completed
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router