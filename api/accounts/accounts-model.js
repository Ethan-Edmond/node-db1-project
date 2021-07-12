const db = require('../../data/db-config');

const getAll = async () => {
  return await db('accounts');
};

const getById = async id => {
  // DO YOUR MAGIC
  return 'getById wired';
}

const create = async account => {
  // DO YOUR MAGIC
  return 'create wired';
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  return 'updateById wired';
}

const deleteById = async id => {
  // DO YOUR MAGIC
  return 'deleteById wired';
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
