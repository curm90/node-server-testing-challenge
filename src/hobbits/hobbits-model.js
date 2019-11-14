const db = require('../db-config');

module.exports = {
  find,
  findById,
  add,
  remove
};

function find() {
  return db('hobbits').select('id', 'name');
}

function findById(id) {
  return db('hobbits')
    .where({ id })
    .first();
}

function add(hobbit) {
  return db('hobbits')
    .insert(hobbit, 'id')
    .then(id => findById(id));
}

function remove(id) {
  return db('hobbits')
    .where({ id })
    .del();
}
