const db = require('../../data/dbConfig')

module.exports = {getResources, getResById, addResource}

function getResources(){
    return db('resources')
}

function getResById(id){
    return db('resources')
        .where('resource_id', id).first()
}

function addResource(rescource){
    return db('resources')
        .insert(rescource)
        .then(([id]) => {
            return getResById(id)
        })
}