
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_id: 1, resource_name: 'Nuke Store', resource_description: 'They sell boom booms'},
        {resource_id: 2, resource_name: 'warehouse of peace'}
      ]);
    });
};
