
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'buy the boom booms', task_notes:'buy big boom booms', task_completed: false, project_id: 1},
        {task_id: 2, task_description: 'drop the boom booms', task_notes:'drop a bunch', task_completed: false, project_id: 1},
        {task_id: 3, task_description: 'buy flowers', task_notes:'buy big flowers', task_completed: true, project_id: 2}
      ]);
    });
};
