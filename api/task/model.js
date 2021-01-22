const db = require('../../data/dbConfig')

module.exports = {getTasks, getTaskById, addTask}

function getTasks(){
    return db('tasks')
}

function getTaskById(id){
    return db('tasks')
        .where('task_id', id).first()
}

function addTask(task){
    return db('tasks')
        .insert(task)
        .then(([id]) => {
            return getTaskById(id)
        })
}