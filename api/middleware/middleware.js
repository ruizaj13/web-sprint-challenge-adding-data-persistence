module.exports = {valTask}

function valTask(req, res, next){
    !req.body.task_description ? res.status(400).json('need a description') : next()
}