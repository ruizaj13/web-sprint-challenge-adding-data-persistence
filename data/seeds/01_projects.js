
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'Nukes', project_description:'lets end the world', project_completed: true},
        {project_id: 2, project_name: 'World Peace', project_description:'Bring happiness to the world', project_completed: false}
      ]);
    });
};
