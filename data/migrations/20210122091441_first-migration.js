
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name', 128).notNullable()
            tbl.string('project_description', 128)
            tbl.boolean('project_completed').notNullable().defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name', 128).notNullable().unique()
            tbl.string('resource_description', 128)
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description', 128).notNullable()
            tbl.string('task_notes', 128)
            tbl.boolean('task_completed').notNullable().defaultTo(false)
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('project_resources_id')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
