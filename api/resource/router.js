const express = require('express')

const Resources  = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})


module.exports = router