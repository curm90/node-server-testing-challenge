exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hobbits')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('hobbits').insert([
        { name: 'Sam' },
        { name: 'Frodo' },
        { name: 'Merry' }
      ]);
    });
};
