const db = require('../../data/dbConfig')

module.exports={getProj, getProjById, addProj}

function getProj(){
    return db('projects')
}

function getProjById(id){
    return db('projects')
        .where('project_id', id).first()
}

function addProj(proj){
    return db('projects')
        .insert(proj)
        .then(([id]) => {
            return getProjById(id)
        })
}